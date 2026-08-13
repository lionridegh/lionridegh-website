import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Missing Supabase credentials' },
      { status: 500 }
    );
  }

  try {
    console.log('🚀 Starting Supabase database setup...');

    const setupSQL = `
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
    `;

    // Execute SQL using Supabase REST API
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceRoleKey}`,
        'apikey': serviceRoleKey,
      },
      body: JSON.stringify({ sql: setupSQL }),
    });

    // If the exec function doesn't exist, try splitting and executing SQL statements individually
    if (!response.ok) {
      console.log('📝 exec() RPC not available, using direct SQL approach...');

      // Try an alternative method using Supabase's internal query
      const supabase = createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false },
      });

      // Since supabase-js doesn't support raw SQL, we'll try via pg_exec or similar
      // As a workaround, create a stored procedure that we can call

      const setupProcedure = `
CREATE OR REPLACE FUNCTION setup_database()
RETURNS void AS $$
BEGIN
  CREATE TABLE IF NOT EXISTS contacts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );

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

  ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
  ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

  DROP POLICY IF EXISTS "Allow anonymous inserts on contacts" ON contacts;
  DROP POLICY IF EXISTS "Allow anonymous inserts on orders" ON orders;

  CREATE POLICY "Allow anonymous inserts on contacts"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

  CREATE POLICY "Allow anonymous inserts on orders"
  ON orders FOR INSERT
  TO anon
  WITH CHECK (true);

  CREATE POLICY "Allow anonymous select on contacts"
  ON contacts FOR SELECT
  TO anon
  USING (true);

  CREATE POLICY "Allow anonymous select on orders"
  ON orders FOR SELECT
  TO anon
  USING (true);
END;
$$ LANGUAGE plpgsql;
      `;

      const procResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serviceRoleKey}`,
          'apikey': serviceRoleKey,
        },
        body: JSON.stringify({ sql: setupProcedure }),
      });

      if (!procResponse.ok) {
        throw new Error(
          `Failed to create setup procedure: ${procResponse.status} ${await procResponse.text()}`
        );
      }

      // Now call the function
      const callResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/setup_database`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${serviceRoleKey}`,
          'apikey': serviceRoleKey,
        },
      });

      if (!callResponse.ok) {
        throw new Error(
          `Failed to execute setup: ${callResponse.status} ${await callResponse.text()}`
        );
      }
    }

    console.log('✅ Database tables created successfully!');

    return NextResponse.json({
      success: true,
      message: 'Database setup completed',
      tables: ['contacts', 'orders'],
      features: [
        'Row Level Security enabled',
        'Anonymous insert policies configured',
        'Timestamps (created_at, updated_at) added',
      ],
    });
  } catch (error) {
    console.error('❌ Setup failed:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Database setup failed',
      },
      { status: 500 }
    );
  }
}
