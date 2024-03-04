"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
  {name: 'Home', href: '/'},
  {name: 'Men', href: '/Men'},
  {name: 'Women', href: 'Women'},
  {name: 'Teens', href: '/Teens'},
]

const Navbar = () => {

  const pathName = usePathname()
  const {handleCartClick} = useShoppingCart()

  return (
    <header className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className='text-2xl md:text-4xl font-bold'>
              Manan<span className='text-primary'> Fashion</span>
            </h1>
          </Link>
          <nav className='hidden gap-12 lg:flex'>
            {links.map((link, index) => (
              <div key={index}>
                {pathName === link.href ? 
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-primary'
                >
                  {link.name}
                </Link> : 
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'
                >
                  {link.name}
                </Link>
                }
              </div>
            ))}
          </nav>
          <div className='flex divide-x border-r sm:border-l'>
              <Button onClick={() => handleCartClick()} variant='outline' className='flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 sm:h-20 md:h-24 md:w-24 rounded-none px-4'>
                <ShoppingBag />
                <span className='hidden sm:block text-xs font-semibold text-gray-500'>Cart</span>
              </Button>
          </div>
        </div>
    </header>
  )
}

export default Navbar