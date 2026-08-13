#!/usr/bin/env node

/**
 * Check Actual Database Schema
 * Queries information_schema to verify table existence
 */

require('dotenv').config({ path: '.env.local' });
const https = require('https');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const projectId = supabaseUrl.split('.supabase.co')[0].replace('https://', '');

// Query to check if tables exist
const query = `
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('contacts', 'orders')
`;

function queryDatabase(sql) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({ sql });

    const options = {
      hostname: `${projectId}.supabase.co`,
      path: '/rest/v1/rpc/pg_query_sql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
        'Authorization': `Bearer ${serviceRoleKey}`,
        'apikey': serviceRoleKey,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(data),
          });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', (e) => {
      resolve({ error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

async function checkDatabase() {
  console.log('🔍 Checking Supabase database schema...\n');

  const result = await queryDatabase(query);

  console.log('Query Response Status:', result.status);
  console.log('Response Data:', JSON.stringify(result.data, null, 2), '\n');

  if (result.data && Array.isArray(result.data) && result.data.length > 0) {
    console.log('✅ Tables found in database:\n');
    result.data.forEach((row) => {
      console.log(`   • ${row.table_name}`);
    });
  } else if (result.status === 200) {
    console.log('⚠️  No contacts or orders tables found in database\n');
  } else {
    console.log('❌ Could not query database\n');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  if (!result.data || result.data.length === 0) {
    console.log('📋 IMPORTANT: Tables need to be created manually\n');
    console.log('Option 1: Use Web Interface (Easiest)');
    console.log('   → Visit: http://localhost:3001/api/setup-guide');
    console.log('   → Click "Copy SQL" button');
    console.log('   → Paste in Supabase Dashboard → SQL Editor\n');

    console.log('Option 2: Copy & Paste SQL Manually');
    console.log('   → Go to Supabase Dashboard');
    console.log('   → SQL Editor → + New Query');
    console.log('   → Copy SQL from below\n');

    console.log('SQL Code:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const sql = `
-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_interested_in TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow anonymous inserts on orders" ON public.orders;
DROP POLICY IF EXISTS "Allow anonymous select on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow anonymous select on orders" ON public.orders;

-- Create RLS policies
CREATE POLICY "Allow anonymous inserts on contacts"
ON public.contacts FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on orders"
ON public.orders FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous select on contacts"
ON public.contacts FOR SELECT
TO anon
USING (true);

CREATE POLICY "Allow anonymous select on orders"
ON public.orders FOR SELECT
TO anon
USING (true);
    `;

    console.log(sql);
  }
}

checkDatabase();
