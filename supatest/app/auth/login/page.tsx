
import { createClient } from '@/utils/server'
import { cookies } from 'next/headers'
import { handleLogin } from '@/app/serveraction/login/loginaction'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* 폼 카드 (Form Card) */}
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100'>
        
        <h2 className='text-3xl font-bold text-center text-gray-900'>
          로그인
        </h2>
        
        <form 
        action={handleLogin}
        className='space-y-6'
        >
          {/* 1. 이메일 입력란 */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              이메일 주소
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                required
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
               text-gray-900'
              />
            </div>
          </div>

          {/* 2. 비밀번호 입력란 */}
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              비밀번호
            </label>
            <div className='mt-1'>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900'
              />
            </div>
          </div>

          {/* 3. 로그인 버튼 */}
          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
            >
              로그인
            </button>
          </div>
        </form>

        {/* 4. 기타 링크 (선택 사항) */}
        <div className='text-center text-sm'>
          <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
            비밀번호를 잊으셨나요?
          </a>
          <span className='mx-2 text-gray-400'>|</span>
          <a href='/register' className='font-medium text-indigo-600 hover:text-indigo-500'>
            회원가입
          </a>
        </div>
        
      </div>
    </div>
  )
}

