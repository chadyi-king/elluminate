export async function runLeadSubmissionFlow(input, dependencies) {
  const insertResult = await dependencies.insert(input.payload);
  if (insertResult?.error) throw insertResult.error;

  let trackingFailed = false;
  try {
    await dependencies.track(input.tracking);
  } catch {
    trackingFailed = true;
    // The enquiry is already saved. Optional telemetry cannot invalidate it.
    try { await dependencies.onTrackingFailure?.(input.submissionId); } catch { /* diagnostic only */ }
  }

  const templates = ["contact-inquiry", "contact-confirmation"];
  const emailResults = await Promise.allSettled(
    templates.map((templateName) => dependencies.sendEmail(templateName, input.submissionId)),
  );

  const emailQueueFailures = emailResults.flatMap((result, index) => {
    if (result.status === "rejected" || result.value?.error) return [templates[index]];
    return [];
  });

  if (emailQueueFailures.length > 0) {
    try { await dependencies.onEmailFailure?.(input.submissionId, emailQueueFailures); } catch { /* diagnostic only */ }
  }

  return { submissionId: input.submissionId, emailQueueFailures, ...(trackingFailed ? { trackingFailed } : {}) };
}
