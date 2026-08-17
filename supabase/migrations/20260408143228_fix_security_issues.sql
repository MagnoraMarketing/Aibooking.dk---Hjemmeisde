/*
  # Fix Security Issues

  ## Overview
  This migration addresses several security and performance issues identified by the Supabase linter.

  ## Changes

  ### 1. Drop Unused Indexes
  Removes all indexes that have never been used, reducing write overhead and storage:
  - `idx_industry_contacts_created_at`
  - `idx_industry_contacts_status`
  - `idx_industry_contacts_industry`
  - `idx_blog_posts_category_id`
  - `idx_blog_posts_slug`
  - `idx_blog_posts_published`
  - `idx_blog_categories_slug`

  ### 2. Fix Multiple Permissive SELECT Policies on blog_categories
  The `Authenticated users can manage categories` policy used `FOR ALL`, which created a duplicate
  SELECT path for authenticated users alongside the public policy. It is replaced with three
  separate policies (INSERT, UPDATE, DELETE) scoped to the service_role only, since there is no
  admin panel and blog content is managed directly in the database.

  ### 3. Fix Multiple Permissive SELECT Policies on blog_posts
  Same issue as blog_categories — replaced `FOR ALL` with separate INSERT/UPDATE/DELETE policies
  for service_role.

  ### 4. Fix Always-True RLS Policies on blog_categories and blog_posts
  The old `FOR ALL` policies with `USING (true) WITH CHECK (true)` granted unrestricted access to
  all authenticated users. Replaced with service_role-scoped write policies.

  ### 5. Fix Always-True INSERT Policy on industry_contacts
  The anonymous INSERT policy used `WITH CHECK (true)`. Replaced with a check that validates the
  submitted data contains non-empty required fields, providing a meaningful security boundary.

  ## Security Notes
  - Blog write access is now restricted to service_role only (no authenticated user can modify blog content without explicit service role credentials)
  - Public read access for blog content is unchanged
  - Contact form submissions remain open to anonymous users but now validate non-empty required fields
*/

-- ============================================================
-- 1. Drop unused indexes
-- ============================================================
DROP INDEX IF EXISTS idx_industry_contacts_created_at;
DROP INDEX IF EXISTS idx_industry_contacts_status;
DROP INDEX IF EXISTS idx_industry_contacts_industry;
DROP INDEX IF EXISTS idx_blog_posts_category_id;
DROP INDEX IF EXISTS idx_blog_posts_slug;
DROP INDEX IF EXISTS idx_blog_posts_published;
DROP INDEX IF EXISTS idx_blog_categories_slug;

-- ============================================================
-- 2. Fix blog_categories policies
-- Drop the overly permissive FOR ALL policy and replace with
-- scoped write-only policies for service_role
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON blog_categories;

CREATE POLICY "Service role can insert categories"
  ON blog_categories FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update categories"
  ON blog_categories FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete categories"
  ON blog_categories FOR DELETE
  TO service_role
  USING (true);

-- ============================================================
-- 3. Fix blog_posts policies
-- Drop the overly permissive FOR ALL policy and replace with
-- scoped write-only policies for service_role
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;

CREATE POLICY "Service role can insert blog posts"
  ON blog_posts FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update blog posts"
  ON blog_posts FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete blog posts"
  ON blog_posts FOR DELETE
  TO service_role
  USING (true);

-- ============================================================
-- 4. Fix industry_contacts INSERT policy
-- Replace WITH CHECK (true) with a meaningful validation check
-- ============================================================
DROP POLICY IF EXISTS "Anyone can submit contact form" ON industry_contacts;

CREATE POLICY "Anyone can submit contact form"
  ON industry_contacts FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0
    AND length(trim(email)) > 0
    AND email LIKE '%@%'
    AND length(trim(phone)) > 0
    AND call_date >= current_date
  );
