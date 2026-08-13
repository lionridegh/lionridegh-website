# Supabase Database Setup Guide

Your Lion Ride Gh website is now fully configured with Supabase! Follow these steps to complete the database setup.

## ✅ What's Already Done

1. ✅ Environment variables configured (`.env.local`)
2. ✅ Supabase client utilities created (`lib/supabaseClient.ts`)
3. ✅ API routes updated to save form submissions
4. ✅ Contact and Order forms connected to Supabase

## 📋 What You Need to Do

You need to create two database tables and configure Row Level Security. This is a one-time setup.

### Option 1: Easy Web Interface (Recommended)

1. Visit: **http://localhost:3001/api/setup-guide**
2. Click the "📋 Copy SQL" button to copy all the SQL code
3. Open your Supabase Dashboard: https://app.supabase.com
4. Select your **lionridegh-website** project
5. Go to **SQL Editor** → **+ New Query**
6. Paste the SQL code
7. Click **Run**

### Option 2: Manual Setup

1. Go to https://app.supabase.com
2. Select **lionridegh-website** project
3. Click **SQL Editor** → **+ New Query**
4. Copy and paste this SQL:

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_interested_in TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts on contacts" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous inserts on orders" ON orders;
DROP POLICY IF EXISTS "Allow anonymous select on contacts" ON contacts;
DROP POLICY IF EXISTS "Allow anonymous select on orders" ON orders;

-- Create policies to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts on contacts"
ON contacts FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on orders"
ON orders FOR INSERT
TO anon
WITH CHECK (true);

-- Create policies to view all submissions
CREATE POLICY "Allow anonymous select on contacts"
ON contacts FOR SELECT
TO anon
USING (true);

CREATE POLICY "Allow anonymous select on orders"
ON orders FOR SELECT
TO anon
USING (true);
```

5. Click **Run**

## 🎉 After Setup

Once you run the SQL, your website will automatically:

- ✅ Save contact form submissions to `contacts` table
- ✅ Save order enquiries to `orders` table
- ✅ Automatically track submission timestamps
- ✅ Secure data with Row Level Security

## 📊 What Gets Stored

### Contact Form Submissions
- **name** - Visitor's name
- **email** - Visitor's email
- **phone** - Visitor's phone number
- **message** - Their message
- **created_at** - When it was submitted
- **updated_at** - When it was last updated

### Order Enquiries
- **name** - Customer name
- **email** - Customer email
- **phone** - Customer phone
- **product_interested_in** - Which product they're interested in
- **message** - Additional details
- **created_at** - When inquiry was submitted
- **updated_at** - When it was last updated

## 🔒 Security

- **Row Level Security (RLS)** is enabled on both tables
- Only **anonymous users** (website visitors) can INSERT new submissions
- Policies restrict access to only what's necessary
- Your API key in `.env.local` is never exposed to the browser

## 🚀 Test Your Setup

1. Go to http://localhost:3001/contact
2. Fill out and submit the contact form
3. Go to your Supabase Dashboard
4. Click **Table Editor** (left sidebar)
5. Select **contacts** table
6. You should see your submission!

## ❓ Troubleshooting

**Q: I see an error when submitting a form**
- Make sure you ran the SQL setup
- Check that RLS policies are configured correctly in Supabase

**Q: Where do I find my Supabase credentials?**
- Supabase Dashboard → Your Project → Settings (gear icon) → API
- `NEXT_PUBLIC_SUPABASE_URL` - Under "Project URL"
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Under "anon" key
- `SUPABASE_SERVICE_ROLE_KEY` - Under "service_role" key

**Q: Can I view submissions through the website?**
- Not yet - currently the website only INSERT data
- You can view submissions in Supabase Dashboard → Table Editor
- We can add an admin dashboard later if needed

## 📞 Support

For issues:
1. Check Supabase Dashboard → Table Editor to verify tables exist
2. Check Supabase Dashboard → Authentication → Policies to verify RLS policies
3. Check browser console for error messages when submitting forms
