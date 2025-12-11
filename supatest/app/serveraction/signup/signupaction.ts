'use server'

import { createClient } from '@/utils/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function handleSignUp(formData: FormData) {
    
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = createClient(cookies())

  // 1️⃣ Supabase Auth로 회원 생성
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  const user = data.user
  
  if (error) {
    console.error('회원가입 실패:', error.message)
    return
  }
  
  if (!user) {
    console.error('유저 정보가 반환되지 않았습니다.')
    return
  }

  // // 2️⃣ 내 user 테이블에도 데이터 추가
  // const { error: insertError } = await supabase.from('user').insert({
  //   id: user.id,       // auth.users.id와 연결
  //   email,
  //   //password,          // ⚠️ 실제 서비스에서는 해시 저장 권장
  //   name,
  // })

  // if (insertError) {
  //   console.error('user 테이블 삽입 실패:', insertError.message)
  //   return
  // }

  console.log('회원가입 성공:', user.id)

  // 3️⃣ 회원가입 완료 후 리다이렉트
  redirect('/login')
}
