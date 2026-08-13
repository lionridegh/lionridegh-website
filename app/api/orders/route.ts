import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabaseServer';

export async function POST(request: Request) {
  const body = await request.json();
  const supabaseServer = createSupabaseServer();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
  }

  const { error } = await supabaseServer.from('orders').insert([{ 
    name, 
    email, 
    phone, 
    product_interested_in: subject || message,
    message,
    created_at: new Date().toISOString(),
  }]);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
