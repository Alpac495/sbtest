'use server'
import { createClient } from '@/utils/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function handleLogout() {
    const supabase = createClient(cookies())
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error(error)
    }
    revalidatePath('/','layout')
    redirect('/auth/login')
}