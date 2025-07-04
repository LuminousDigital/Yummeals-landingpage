'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  
  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 px-6 bg-white sm:px-20 z-80">
      <div className="logo ">
        <Link href="/">
          <div className="relative w-32 h-8">
            <Image 
              src="/logo.svg" 
              alt="Yummeals logo" 
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 ">
        {pathname === '/' ? (
          <Link href="https://app.yummealsapp.com">
            <button className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded  transition-colors cursor-pointer">
              Join Now
            </button>
          </Link>
        ) : (
          <Link href="https://app.yummealsapp.com">
            <button className="bg-[#64961A] sm:px-10 text-white px-4 py-2 rounded transition-colors cursor-pointer">
              Join Now
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar 