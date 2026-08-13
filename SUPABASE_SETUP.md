# Supabase Database Setup for Lion Ride Gh Website

## Instructions

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your "lionridegh-website" project
3. Click the "SQL Editor" tab on the left sidebar
4. Click the "+" button to create a new query
5. Copy and paste the SQL code below
6. Click "Run" to execute

## SQL Code to Run

```sql
-- Create contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table for order enquiries
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

-- Enable Row Level Security (RLS) on both tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts on contacts"
ON contacts FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on orders"
ON orders FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Create policies to view all submissions (for admin use later)
CREATE POLICY "Allow anonymous select on contacts"
ON contacts FOR SELECT
TO anon
USING (true);

CREATE POLICY "Allow anonymous select on orders"
ON orders FOR SELECT
TO anon
USING (true);
```

## Done ✅

Once you run this SQL, your database tables will be ready and your contact and order forms will automatically save submissions to Supabase.
