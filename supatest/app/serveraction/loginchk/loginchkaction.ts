'use server';
import { createClient } from '@/utils/server';
import { cookies } from 'next/headers';

export async function handleLoginChk() {
    const supabase = createClient(cookies());
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log("getid Error:", error);
      return null;
    }
    return data?.session?.user?.id || null;
  }