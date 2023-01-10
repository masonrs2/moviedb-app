import Link from 'next/link'
import React from 'react'
import { navItems } from '../assets/constants'

const NavLinks = () => {
  return (
    <div className="ml-3 hidden md:flex">
        <ul className="flex gap-4 lg:gap-8 lg:text-lg">
            {
                navItems.map((item, index) => (
                    <li key={item.id} className="font-light text-gray-300 cursor-pointer hover:scale-105 duration-300 hover:text-gray-400">
                      <Link href={item.href}>
                         {item.content}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavLinks