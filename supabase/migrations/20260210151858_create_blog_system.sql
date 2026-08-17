/*
  # Create Blog System

  1. New Tables
    - `blog_categories`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `name_en` (text) - English category name
      - `name_da` (text) - Danish category name
      - `description_en` (text) - English description
      - `description_da` (text) - Danish description
      - `created_at` (timestamptz)
      
    - `blog_posts`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `slug` (text, unique) - URL-friendly identifier
      - `title_en` (text) - English title
      - `title_da` (text) - Danish title
      - `excerpt_en` (text) - English excerpt/summary
      - `excerpt_da` (text) - Danish excerpt/summary
      - `content_en` (text) - English full content
      - `content_da` (text) - Danish full content
      - `meta_title_en` (text) - SEO meta title English
      - `meta_title_da` (text) - SEO meta title Danish
      - `meta_description_en` (text) - SEO meta description English
      - `meta_description_da` (text) - SEO meta description Danish
      - `keywords` (text[]) - SEO keywords
      - `image_url` (text) - Featured image
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (blog content is public)
    - Only authenticated admins can write (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_en text NOT NULL,
  name_da text NOT NULL,
  description_en text DEFAULT '',
  description_da text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES blog_categories(id) ON DELETE CASCADE,
  slug text UNIQUE NOT NULL,
  title_en text NOT NULL,
  title_da text NOT NULL,
  excerpt_en text DEFAULT '',
  excerpt_da text DEFAULT '',
  content_en text DEFAULT '',
  content_da text DEFAULT '',
  meta_title_en text DEFAULT '',
  meta_title_da text DEFAULT '',
  meta_description_en text DEFAULT '',
  meta_description_da text DEFAULT '',
  keywords text[] DEFAULT '{}',
  image_url text DEFAULT '',
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Anyone can view blog categories"
  ON blog_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (published = true);

-- Admin write access (for future use)
CREATE POLICY "Authenticated users can manage categories"
  ON blog_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);