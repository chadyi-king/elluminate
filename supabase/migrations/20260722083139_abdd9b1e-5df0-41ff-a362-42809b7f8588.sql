ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS gbraid text,
  ADD COLUMN IF NOT EXISTS wbraid text,
  ADD COLUMN IF NOT EXISTS gad_source text,
  ADD COLUMN IF NOT EXISTS attribution_captured_at timestamptz;