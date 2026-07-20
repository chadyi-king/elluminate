ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS brand text,
  ADD COLUMN IF NOT EXISTS service text,
  ADD COLUMN IF NOT EXISTS lead_id uuid;