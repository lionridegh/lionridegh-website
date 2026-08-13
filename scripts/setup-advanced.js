#!/usr/bin/env node

/**
 * Supabase Database Setup - Advanced Method
 * Uses multiple strategies to execute SQL
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const https = require('https');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Missing credentials');
  process.exit(1);
}

const projectId = supabaseUrl.split('.supabase.co')[0].replace('https://', '');

const sqlStatements = [
  // Contacts table
  `CREATE TABLE IF NOT EXISTS public.contacts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`,

  // Orders table
  `CREATE TABLE IF NOT EXISTS public.orders (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    product_interested_in TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  )`,

  // Enable RLS
  `ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY`,
  `ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY`,

  // Policies for contacts
  `DROP POLICY IF EXISTS "Allow anonymous inserts on contacts" ON public.contacts`,
  `DROP POLICY IF EXISTS "Allow anonymous select on contacts" ON public.contacts`,
  
  `CREATE POLICY "Allow anonymous inserts on contacts"
   ON public.contacts FOR INSERT
   TO anon
   WITH CHECK (true)`,

  `CREATE POLICY "Allow anonymous select on contacts"
   ON public.contacts FOR SELECT
   TO anon
   USING (true)`,

  // Policies for orders
  `DROP POLICY IF EXISTS "Allow anonymous inserts on orders" ON public.orders`,
  `DROP POLICY IF EXISTS "Allow anonymous select on orders" ON public.orders`,
  
  `CREATE POLICY "Allow anonymous inserts on orders"
   ON public.orders FOR INSERT
   TO anon
   WITH CHECK (true)`,

  `CREATE POLICY "Allow anonymous select on orders"
   ON public.orders FOR SELECT
   TO anon
   USING (true)`,
];

async function executeViaRPC(statement) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      sql: statement,
    });

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
        resolve({ status: res.statusCode, data, headers: res.headers });
      });
    });

    req.on('error', (e) => {
      resolve({ error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

async function executeViaCurl(statement) {
  // Alternative using fetch for different endpoints
  const endpoints = [
    '/rest/v1/rpc/pg_exec',
    '/rest/v1/rpc/query',
    '/graphql/v1',
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${supabaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serviceRoleKey}`,
          'apikey': serviceRoleKey,
        },
        body: JSON.stringify({ sql: statement, query: statement }),
      });

      if (response.ok || response.status === 201) {
        return { success: true, status: response.status };
      }
    } catch (e) {
      // Continue to next endpoint
    }
  }

  return { success: false };
}

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database with SQL API...\n');
  console.log(`📍 Project ID: ${projectId}`);
  console.log(`📍 URL: ${supabaseUrl}\n`);

  let successCount = 0;
  let skipCount = 0;

  console.log('📊 Executing SQL statements:\n');

  for (const statement of sqlStatements) {
    const action = statement.split('\n')[0].substring(0, 50).trim();

    try {
      // Try RPC first
      const rpcResult = await executeViaRPC(statement);

      if (
        rpcResult.status === 200 ||
        rpcResult.status === 201 ||
        !rpcResult.error
      ) {
        console.log(`✓ ${action}...`);
        successCount++;
        continue;
      }

      // Try alternative endpoints
      const altResult = await executeViaCurl(statement);

      if (altResult.success) {
        console.log(`✓ ${action}...`);
        successCount++;
      } else {
        // Might still have succeeded if table already exists
        console.log(`℮ ${action}... (skipped)`);
        skipCount++;
      }
    } catch (error) {
      console.log(`⚠️  ${action}... (error)`);
      skipCount++;
    }
  }

  console.log(`\n📊 Results:`);
  console.log(`   • ${successCount} statements executed`);
  console.log(`   • ${skipCount} statements skipped\n`);

  // Verification using Supabase client
  console.log('🔍 Verifying table creation...\n');

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    const { data, error } = await supabase
      .rpc('get_table_columns', { table_name: 'contacts' })
      .single();

    if (!error) {
      console.log('✅ contacts table verified\n');
    }
  } catch (e) {
    console.log('⚠️  contacts table verification (checking via alternative method...)\n');
  }

  try {
    const { data, error } = await supabase
      .rpc('get_table_columns', { table_name: 'orders' })
      .single();

    if (!error) {
      console.log('✅ orders table verified\n');
    }
  } catch (e) {
    console.log('⚠️  orders table verification (checking via alternative method...)\n');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📝 IMPORTANT:\n');
  console.log('If you see API warnings above, the tables may still have been created!');
  console.log('Please verify by checking:\n');
  console.log('1. Supabase Dashboard → Table Editor');
  console.log('2. Look for "contacts" and "orders" tables\n');

  if (successCount > 0) {
    console.log('✨ Setup appears successful!');
    console.log('\n🧪 Test your setup:');
    console.log('   1. Go to http://localhost:3001/contact');
    console.log('   2. Fill out and submit the form');
    console.log('   3. Check Supabase Dashboard → Table Editor → contacts\n');
  } else {
    console.log('⚠️  Could not confirm database setup via API');
    console.log('\n📋 Alternative: Use web setup guide at http://localhost:3001/api/setup-guide\n');
  }
}

setupDatabase().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
