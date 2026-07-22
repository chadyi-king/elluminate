## Fix

Apply one migration restoring the missing Data API grants on `public.contact_submissions`:

```sql
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL    ON public.contact_submissions TO service_role;
```

The existing RLS policy (`INSERT` allowed for `anon, authenticated` with `WITH CHECK true`) already permits anonymous submissions — only the table-level privilege is missing, which is why every form submit since the `brand`/`service`/`lead_id` column addition has been rejected by PostgREST and surfaced as the "Something went wrong" toast.

No code, schema, or edge-function changes are required. `send-transactional-email` already defaults its notification recipient to `info@elluminate.sg`.

## Verification (after migration runs)

1. `SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name='contact_submissions'` — expect `INSERT` for `anon` + `authenticated` and `ALL` for `service_role`.
2. Submit a live test enquiry on the published site.
3. `SELECT id, created_at, email FROM contact_submissions ORDER BY created_at DESC LIMIT 1` — expect today's row.
4. `SELECT template_name, status, recipient_email FROM email_send_log WHERE message_id LIKE '%<new-id>%'` — expect `contact-inquiry` -> `info@elluminate.sg` and `contact-confirmation` -> the submitter's address, both moving from `pending` to `sent`.
5. Confirm the browser navigates to `/thank-you-contact` and the notification/confirmation emails arrive in the respective inboxes.

Switch to build mode to apply the migration.
