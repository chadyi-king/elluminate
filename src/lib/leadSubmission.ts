import { getAttribution, type Attribution } from "@/lib/attribution";
import { trackLeadConversion } from "@/lib/tracking";
import { runLeadSubmissionFlow } from "@/lib/leadSubmissionFlow.js";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

type ContactSubmissionInsert = TablesInsert<"contact_submissions">;

const ATTRIBUTION_FIELDS = [
  "gclid",
  "gbraid",
  "wbraid",
  "gad_source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "referrer",
  "landing_page",
  "attribution_captured_at",
] as const;

type AttributionField = (typeof ATTRIBUTION_FIELDS)[number];
type ManagedField = AttributionField | "id" | "lead_id" | "brand" | "service" | "form_name" | "submission_page";

export type LeadSubmissionFields = Omit<ContactSubmissionInsert, ManagedField>;

export interface SubmitLeadInput {
  fields: LeadSubmissionFields;
  formName: "plan_my_event" | "team_building_quote_brief";
  service: string;
  submissionPage?: string | null;
  attribution?: Attribution;
  emailKeyPrefix?: string;
}

export interface SubmitLeadResult {
  submissionId: string;
  emailQueueFailures: string[];
}

const currentSubmissionPage = () => {
  if (typeof window === "undefined") return null;
  return `${window.location.pathname}${window.location.search}`;
};

const attributionColumns = (attribution: Attribution) => ({
  gclid: attribution.gclid || null,
  gbraid: attribution.gbraid || null,
  wbraid: attribution.wbraid || null,
  gad_source: attribution.gad_source || null,
  utm_source: attribution.utm_source || null,
  utm_medium: attribution.utm_medium || null,
  utm_campaign: attribution.utm_campaign || null,
  utm_term: attribution.utm_term || null,
  utm_content: attribution.utm_content || null,
  referrer: attribution.referrer || null,
  landing_page: attribution.landing_page || null,
  attribution_captured_at: attribution.captured_at || null,
});

const recordEmailQueueFailure = (submissionId: string, formName: string, failedTemplates: string[]) => {
  console.error("Lead saved but one or more email notifications could not be queued", {
    submissionId,
    formName,
    failedTemplates,
  });

  if (typeof window === "undefined") return;
  const trackingWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event: "elluminate_email_queue_failed",
    lead_id: submissionId,
    form_name: formName,
    failed_templates: failedTemplates,
  });
};

export async function submitLead(input: SubmitLeadInput): Promise<SubmitLeadResult> {
  const submissionId = crypto.randomUUID();
  const attribution = input.attribution ?? getAttribution();
  const submissionPage = input.submissionPage ?? currentSubmissionPage();
  const emailKeyPrefix = input.emailKeyPrefix ?? input.formName;

  const payload: ContactSubmissionInsert = {
    ...input.fields,
    id: submissionId,
    brand: "elluminate",
    service: input.service,
    form_name: input.formName,
    submission_page: submissionPage,
    ...attributionColumns(attribution),
  };

  const tracking = {
    lead_id: submissionId,
    form_name: input.formName,
    brand: "elluminate",
    service: input.service,
    event_category: input.fields.event_category ?? null,
    page_path: submissionPage,
    attribution,
  };

  return runLeadSubmissionFlow(
    { payload, tracking, submissionId },
    {
      insert: (leadPayload: ContactSubmissionInsert) =>
        supabase.from("contact_submissions").insert(leadPayload),
      track: trackLeadConversion,
      sendEmail: (templateName: "contact-inquiry" | "contact-confirmation") =>
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName,
            idempotencyKey: `${emailKeyPrefix}-${templateName}-${submissionId}`,
            submissionId,
          },
        }),
      onEmailFailure: (_leadId: string, failedTemplates: string[]) =>
        recordEmailQueueFailure(submissionId, input.formName, failedTemplates),
    },
  );
}
