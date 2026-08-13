import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type OrderEnquiry = {
  name: string;
  email: string;
  phone: string;
  product_interested_in: string;
  message: string;
};

export async function insertContact(data: ContactSubmission) {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting contact:', error);
    throw error;
  }

  return result;
}

export async function insertOrder(data: OrderEnquiry) {
  const { data: result, error } = await supabase
    .from('orders')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        product_interested_in: data.product_interested_in,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting order:', error);
    throw error;
  }

  return result;
}
