/*
  # Create Industry Contacts Table

  1. New Tables
    - `industry_contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `industry` (text) - Selected industry (klinikker, haandvaerker, kontor, webshop)
      - `call_date` (date) - Preferred date for callback
      - `message` (text, nullable) - Optional message from contact
      - `status` (text) - Contact status (new, contacted, demo_scheduled, closed)
      - `created_at` (timestamptz) - Timestamp of form submission
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `industry_contacts` table
    - Add policy for service role to manage all contacts
    - Public users can only insert their own contact forms
*/

CREATE TABLE IF NOT EXISTS industry_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  industry text NOT NULL CHECK (industry IN ('klinikker', 'haandvaerker', 'kontor', 'webshop')),
  call_date date NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'demo_scheduled', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE industry_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON industry_contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can view all contacts"
  ON industry_contacts
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update all contacts"
  ON industry_contacts
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_industry_contacts_created_at ON industry_contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_industry_contacts_status ON industry_contacts(status);
CREATE INDEX IF NOT EXISTS idx_industry_contacts_industry ON industry_contacts(industry);
