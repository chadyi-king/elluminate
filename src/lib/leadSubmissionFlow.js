export async function runLeadSubmissionFlow(input, dependencies) {
  const insertResult = await dependencies.insert(input.payload);
  if (insertResult?.error) throw insertResult.error;

  dependencies.track(input.tracking);

  const templates = ["contact-inquiry", "contact-confirmation"];
  const emailResults = await Promise.allSettled(
    templates.map((templateName) => dependencies.sendEmail(templateName, input.submissionId)),
  );

  const emailQueueFailures = emailResults.flatMap((result, index) => {
    if (result.status === "rejected" || result.value?.error) return [templates[index]];
    return [];
  });

  if (emailQueueFailures.length > 0) {
    dependencies.onEmailFailure?.(input.submissionId, emailQueueFailures);
  }

  return { submissionId: input.submissionId, emailQueueFailures };
}
