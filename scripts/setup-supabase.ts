import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing Supabase credentials. Please check .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

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

-- Create policies to view all submissions (for admin use later)
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
  try {
    console.log('🚀 Starting Supabase database setup...');
    console.log(`📍 Project URL: ${supabaseUrl}`);
    
    // Execute the setup SQL
    const { error } = await supabase.rpc('exec', {
      sql: setupSQL,
    }).catch(async () => {
      // If exec function doesn't exist, try direct approach with SQL editor endpoint
      console.log('📝 Using alternative method to execute SQL...');
      
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serviceRoleKey}`,
        },
        body: JSON.stringify({ sql: setupSQL }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      return { error: null };
    });

    if (error) {
      console.error('❌ Error setting up database:', error);
      process.exit(1);
    }

    console.log('✅ Database tables created successfully!');
    console.log('✅ Row Level Security enabled');
    console.log('✅ Anonymous insert policies configured');
    console.log('\n📊 Tables created:');
    console.log('   • contacts (id, name, email, phone, message, created_at, updated_at)');
    console.log('   • orders (id, name, email, phone, product_interested_in, message, created_at, updated_at)');
    console.log('\n✨ Your Supabase database is ready!');
  } catch (err) {
    console.error('❌ Setup failed:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

setupDatabase();
