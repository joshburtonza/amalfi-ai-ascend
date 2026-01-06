-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  date DATE NOT NULL,
  read_time TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  content TEXT NOT NULL,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index on slug for fast lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create index on date for sorting
CREATE INDEX idx_blog_posts_date ON public.blog_posts(date DESC);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts only
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_posts_updated_at();