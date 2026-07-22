## Root cause (verified)

The live form submission is being rejected by PostgREST before it ever reaches the database, because the insert payload includes 4 columns that don't exist on `public.contact_submissions`:

- `gbraid`
- `wbraid`
- `gad_source`
- `attribution_captured_at`

Verified against the live DB:
- `pg_policies` shows the INSERT policy for `anon, authenticated` with `WITH CHECK (true)` — RLS is fine.
- `information_schema.columns` for `public.contact_submissions` lists `gclid` and the `utm_*` columns, but not `gbraid`, `wbraid`, `gad_source`, or `attribution_captured_at`.
- `src/lib/leadSubmission.ts` (lines 48–61) always sends those 4 fields in the insert payload from `attributionColumns()`.

PostgREST returns `PGRST204 – Could not find the 'gbraid' column of 'contact_submissions' in the schema cache` and fails the whole insert. Because the insert throws, `runLeadSubmissionFlow` never calls `trackLeadConversion` or `supabase.functions.invoke('send-transactional-email', …)`, so no edge function runs, no email log row is created, and the UI shows the generic "Something went wrong" error. No new rows since 2026-06-11 confirms this.

The earlier GRANT migration was necessary but not sufficient — the schema is also missing these columns.

## Fix

Add the 4 missing columns to `public.contact_submissions` so the payload matches the schema. No RLS/grants change needed (already correct from the previous migration). No frontend changes needed.

### Migration

```sql
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS gbraid text,
  ADD COLUMN IF NOT EXISTS wbraid text,
  ADD COLUMN IF NOT EXISTS gad_source text,
  ADD COLUMN IF NOT EXISTS attribution_captured_at timestamptz;
```

After the migration approves and the Supabase types regenerate, no code edit is required — `TablesInsert<"contact_submissions">` will pick up the new columns automatically.

## Verification

1. Confirm the 4 columns exist via `information_schema.columns`.
2. Ask you to submit a live test enquiry.
3. Verify:
   - a new row appears in `public.contact_submissions` (with `lead_id` = row id, `brand='elluminate'`, `form_name` set),
   - two rows in `public.email_send_log` for that `submissionId` (`contact-inquiry` to info@elluminate.sg, `contact-confirmation` to the submitter), status `pending` → `sent`,
   - the browser redirects to `/thank-you-contact`.

If anything still fails after the columns are added, I'll pull the exact PostgREST/edge-function error from logs and iterate.
