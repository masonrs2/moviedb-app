"use client"

import React, { useEffect, useState } from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import NavLinks from './NavLinks'
import Link from 'next/link'
import supabase from '../utils/supabaseClient'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userId, setUserId] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        const getUser = async () => {
            const user = await supabase.auth.getUser()
            if(user) {
                setIsAuthenticated(user)
                const userId = user.data.user?.id
                setUserId(userId)
                setUser(user)
            }
            console.log("email: ", user.data?.user?.email)

        }

        getUser()
    },[userId])

    return (
        <div className="shadow-xl flex flex-col bg-blue-900">
            <div className="p-4 px-10 xl:px-32 l py-5 flex justify-between items-center">
                
                <div className="flex ">     
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold lg:text-4xl tracking-wides text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-500">TMDB</h1>
                            <div className="rounded-xl w-14 h-5 bg-teal-500"></div>
                        </Link>

                        <div className="lg:hidden md:flex">
                            <NavLinks />
                        </div>
                    </div>
                </div>

                    <div className="hidden lg:flex">
                        <NavLinks />
                    </div>
        
                    <div className="flex flex-row gap-3 pr-3">  
                            <Link href={`/Login`} className="flex items-center">
                                {
                                    isAuthenticated ? 
                                    <button className="flex justify-center items-center gap-2 p-2 w-[105px text-gray-200 font-light "><AiOutlineUser size={23}  />{user ? user.data?.user?.email.split("@")[0] : "Sign In"}</button>
                                    : 
                                    <button className="flex justify-center items-center gap-2 p-2 w-[105px text-gray-200 font-light "><AiOutlineUser size={23}  /> Sign In</button> 
                                }
                                
                            </Link>                    
                            <Link href="/Signup">
                                <div className=" rounded-xl w-full bg-gradient-to-r p-[5px] from-emerald-300 to-teal-600">
                                    <button className="p-2 w-[105px] text-gray-200 font-light bg-blue-900 ">Join TMDB</button>
                                </div>
                            </Link>
                    </div>
            </div>
    </div>
  )
}

export default Navbar