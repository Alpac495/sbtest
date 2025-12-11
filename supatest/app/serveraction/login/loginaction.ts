'use server'
import { createClient } from '@/utils/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function handleLogin(formData: FormData) {
   
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient(cookies())
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.log('로그인 실패:', error.message)
      return
    }

    // 로그인 성공 시 리다이렉트
    // (Next.js의 revalidatePath 등을 활용 가능)
    redirect('/protected/dashboard')
  }