import {handleSignUp} from '@/app/serveraction/signup/signupaction'



const SimpleSignupForm = () => {
  return (
    // 전체 화면 중앙 정렬 컨테이너
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'>
      
      {/* 폼 카드 (Form Card) */}
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100'>
        
        <h2 className='text-3xl font-bold text-center text-gray-900'>
          회원가입 
        </h2>
        
        <form 
        className='space-y-4'
        action={handleSignUp}
        > {/* space-y-4로 간격 조정 */}
          
          {/* 1. 이름 입력란 */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              이름
            </label>
            <div className='mt-1'>
              <input
                id='name'
                name='name'
                type='text'
                required
                placeholder='홍길동'
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700'
              />
            </div>
          </div>
          
          {/* 2. 이메일 입력란 */}
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
                placeholder='you@example.com'
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700'
              />
            </div>
          </div>

          {/* 3. 비밀번호 입력란 */}
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
                placeholder='8자 이상 입력'
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700'
              />
            </div>
          </div>
          
          {/* 4. 비밀번호 확인 입력란 */}
          <div>
            <label htmlFor='confirm-password' className='block text-sm font-medium text-gray-700'>
              비밀번호 확인
            </label>
            <div className='mt-1'>
              <input
                id='confirm-password'
                name='confirm-password'
                type='password'
                required
                placeholder='비밀번호를 다시 한 번 입력하세요'
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700'
              />
            </div>
          </div>

          {/* 5. 가입 버튼 */}
          <div className='pt-2'> {/* 버튼 위에 여백 추가 */}
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
            >
              회원가입 완료
            </button>
          </div>
        </form>

        {/* 6. 로그인 페이지로 이동 링크 */}
        <div className='text-center text-sm pt-2'>
          이미 계정이 있으신가요?
          <a href='/app' className='ml-2 font-medium text-indigo-600 hover:text-indigo-500'>
            로그인하기
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default SimpleSignupForm;