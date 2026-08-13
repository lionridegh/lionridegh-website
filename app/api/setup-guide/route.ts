import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Missing Supabase credentials' },
      { status: 500 }
    );
  }

  const setupHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Supabase Database Setup</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background: #f8fafc;
    }
    .container {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    h1 { color: #1a202c; margin-bottom: 10px; }
    .subtitle { color: #718096; margin-bottom: 30px; }
    .section { margin: 30px 0; }
    .sql-box {
      background: #f7fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 20px;
      overflow-x: auto;
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      color: #2d3748;
    }
    .step { 
      background: #f0f4ff;
      border-left: 4px solid #4299e1;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
    }
    .step-number {
      font-weight: 600;
      color: #4299e1;
    }
    button {
      background: #4299e1;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }
    button:hover {
      background: #3182ce;
    }
    .success {
      background: #c6f6d5;
      border: 1px solid #9ae6b4;
      color: #22543d;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      display: none;
    }
    .error {
      background: #fed7d7;
      border: 1px solid #fc8181;
      color: #742a2a;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
      display: none;
    }
    code {
      background: #edf2f7;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Monaco', 'Courier New', monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Supabase Database Setup</h1>
    <p class="subtitle">Create tables and configure Row Level Security for form submissions</p>

    <div class="section">
      <h2>Quick Setup Instructions</h2>
      <div class="step">
        <span class="step-number">1.</span> Go to your <a href="https://app.supabase.com" target="_blank">Supabase Dashboard</a>
      </div>
      <div class="step">
        <span class="step-number">2.</span> Select your <strong>lionridegh-website</strong> project
      </div>
      <div class="step">
        <span class="step-number">3.</span> Click <strong>SQL Editor</strong> in the left sidebar
      </div>
      <div class="step">
        <span class="step-number">4.</span> Click the <strong>+ New Query</strong> button
      </div>
      <div class="step">
        <span class="step-number">5.</span> Copy the SQL code below
      </div>
      <div class="step">
        <span class="step-number">6.</span> Paste it into the SQL editor
      </div>
      <div class="step">
        <span class="step-number">7.</span> Click <strong>Run</strong>
      </div>
    </div>

    <div class="section">
      <h2>SQL Code to Run</h2>
      <button onclick="copySQL()">📋 Copy SQL</button>
      <div class="sql-box" id="sql-code">
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
      </div>
    </div>

    <div class="section">
      <h2>✨ What This Does</h2>
      <ul>
        <li><strong>contacts table</strong> - Stores contact form submissions</li>
        <li><strong>orders table</strong> - Stores order enquiry submissions</li>
        <li><strong>Row Level Security (RLS)</strong> - Enables authentication-based access control</li>
        <li><strong>Anonymous Policies</strong> - Allows form submissions from your website</li>
        <li><strong>Auto-timestamps</strong> - created_at and updated_at automatically tracked</li>
      </ul>
    </div>

    <div class="success" id="success">✅ SQL copied to clipboard!</div>
    <div class="error" id="error"></div>
  </div>

  <script>
    function copySQL() {
      const sqlCode = document.getElementById('sql-code').innerText;
      navigator.clipboard.writeText(sqlCode).then(() => {
        const successDiv = document.getElementById('success');
        successDiv.style.display = 'block';
        setTimeout(() => {
          successDiv.style.display = 'none';
        }, 3000);
      }).catch(err => {
        const errorDiv = document.getElementById('error');
        errorDiv.innerText = '❌ Failed to copy: ' + err.message;
        errorDiv.style.display = 'block';
      });
    }
  </script>
</body>
</html>
  `;

  return new NextResponse(setupHTML, {
    headers: { 'Content-Type': 'text/html' },
  });
}
