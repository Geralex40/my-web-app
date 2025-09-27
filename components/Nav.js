'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AdoptaPerros
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            Home
          </Link>
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            About us
          </Link>
          <Link 
            href="/" 
            className="hover:text-blue-200"
          >
            Contact
          </Link>
          <Link 
            href="/login" 
            className="hover:text-blue-200"
          >
            Login
          </Link>
          <Link 
            href="/registrar" 
            className="hover:text-blue-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}