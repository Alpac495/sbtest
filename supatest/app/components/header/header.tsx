import Link from 'next/link'
import {handleLogout} from '@/app/serveraction/logout/logoutaction'

export default function Header(){
    return(
        <header className='sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <nav className='flex items-center space-x-6'>
                        <Link 
                            href="/" 
                            className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200'
                        >
                            홈
                        </Link>
                        <Link 
                            href="/dashboard" 
                            className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200'
                        >
                            대시보드
                        </Link>
                    </nav>
                    <form action={handleLogout}>
                        <button 
                            type='submit'
                            className='px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                        >
                            로그아웃
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}