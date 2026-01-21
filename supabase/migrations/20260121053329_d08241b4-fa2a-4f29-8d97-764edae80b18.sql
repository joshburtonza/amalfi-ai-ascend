-- Create diagnostic_leads table for storing AI readiness assessment responses
CREATE TABLE public.diagnostic_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  situation TEXT NOT NULL,
  outcome TEXT NOT NULL,
  frustration TEXT NOT NULL,
  budget TEXT NOT NULL,
  industry TEXT NOT NULL,
  additional_notes TEXT,
  diagnosis_result JSONB,
  source TEXT DEFAULT 'diagnostic_hero'
);

-- Enable Row Level Security
ALTER TABLE public.diagnostic_leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public form submission)
CREATE POLICY "Anyone can submit diagnostic"
ON public.diagnostic_leads
FOR INSERT
WITH CHECK (true);

-- No public read access (admin only via service role)
CREATE POLICY "No public read access"
ON public.diagnostic_leads
FOR SELECT
USING (false);