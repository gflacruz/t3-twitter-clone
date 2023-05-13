import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { IconHoverEffect } from './IconHoverEffect'
import { VscHome } from 'react-icons/vsc'

export function SideNav() {
    const session = useSession()
    const user = session.data?.user

    return (
        <nav className="sticky top-0 px-2 py-4">
            <ul className='flex flex-col items-start gap-2 whitespace-nowrap'>
                <li>
                    <Link href="/">
                      <IconHoverEffect>
                        <span className='flex items-center gap-4'>
                          <VscHome className='h-8 w-8' />
                          <span className='hidden text-lg md:inline'>
                            Home
                          </span>
                        </span>
                      </IconHoverEffect>
                    </Link>
                </li>
                {user != null && (
                    <li>
                        <Link href={`/profiles/${user.id}`}>Profile</Link>
                    </li>
                )}
                {user == null ? (
                  <li>
                    <button onClick={() => void signIn()}>Log In</button>
                  </li>  
                ) : (
                  <li>
                    <button onClick={() => void signOut()}>Log Out</button>
                  </li>
                )}
            </ul>
        </nav>
    )
}