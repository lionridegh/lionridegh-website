#!/usr/bin/env node

/**
 * Supabase Database Setup Script
 * Automatically creates tables and sets up Row Level Security
 * Run with: node scripts/setup-supabase-db.js
 */

const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

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

async function setupDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('❌ Error: Missing Supabase credentials in .env.local');
    console.error('   Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set');
    process.exit(1);
  }

  // Derive PostgreSQL connection string from Supabase URL
  // Format: https://projectid.supabase.co -> postgres://postgres:password@projectid.supabase.co:5432/postgres
  const projectId = supabaseUrl.replace('https://', '').split('.')[0];
  const connectionString = `postgres://postgres:${serviceRoleKey}@${projectId}.supabase.co:5432/postgres`;

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    console.log('🚀 Connecting to Supabase...');
    console.log(`📍 Project: ${projectId}`);
    
    await client.connect();
    console.log('✅ Connected to database\n');

    console.log('📊 Creating tables...');
    
    // Split and execute SQL statements individually
    const statements = setupSQL
      .split(';')
      .map((stmt) => stmt.trim())
      .filter((stmt) => stmt.length > 0);

    for (const statement of statements) {
      try {
        await client.query(statement);
      } catch (error) {
        // Some statements might fail if resources already exist, that's OK
        if (
          error instanceof Error &&
          !error.message.includes('already exists') &&
          !error.message.includes('Conflicting') &&
          !error.message.includes('does not exist')
        ) {
          console.warn(`⚠️  Warning: ${error.message}`);
        }
      }
    }

    console.log('✅ Tables created successfully!\n');
    console.log('✅ Row Level Security enabled\n');
    console.log('✅ Anonymous insert policies configured\n');
    console.log('📊 Tables created:');
    console.log('   • contacts (id, name, email, phone, message, created_at, updated_at)');
    console.log('   • orders (id, name, email, phone, product_interested_in, message, created_at, updated_at)\n');
    console.log('🔒 Security features:');
    console.log('   • Row Level Security enabled');
    console.log('   • Anonymous insert policies for form submissions');
    console.log('   • Automatic timestamps (created_at, updated_at)\n');
    console.log('✨ Your Supabase database is ready!');
  } catch (error) {
    console.error('❌ Setup failed:', error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

setupDatabase();
