import {handleLogout} from '@/app/serveraction/logout/logoutaction'

export default function Page() {
 
  return (
    <div>
        <h1>
            드디어... 올 것이 왔군.
        </h1>
        <form action={handleLogout}>
          <button type='submit'>
            로그아웃
          </button>
        </form>
    </div>
  )
}
