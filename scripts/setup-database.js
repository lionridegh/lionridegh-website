#!/usr/bin/env node

/**
 * Setup script to initialize Supabase database tables
 * Run with: node scripts/setup-database.js
 */

async function runSetup() {
  try {
    // Default to localhost:3001 for dev, or read from environment
    const baseUrl = process.env.BASE_URL || 'http://localhost:3001';
    const setupUrl = `${baseUrl}/api/setup-database`;

    console.log('🚀 Initializing Supabase database...');
    console.log(`📍 Target: ${setupUrl}\n`);

    const response = await fetch(setupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Setup failed:', data.error);
      process.exit(1);
    }

    console.log('✅ Database setup successful!\n');
    console.log('📊 Tables created:');
    console.log('   • contacts');
    console.log('   • orders\n');
    console.log('🔒 Security features:');
    console.log('   • Row Level Security enabled');
    console.log('   • Anonymous insert policies configured');
    console.log('   • Automatic timestamps (created_at, updated_at)\n');
    console.log('✨ Your Supabase database is ready for form submissions!');
  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

runSetup();
