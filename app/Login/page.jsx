"use client"
import React, { useEffect, useState } from 'react'
import supabase from '../../utils/supabaseClient'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    async function signInWithEmail() {
        try {
            if(email && password) {
                console.log("Email, ", email)
                console.log("Password, ", password)

                const resp = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                });
                if(resp.error) throw resp.error
                const userId = resp.data.user?.id;
                console.log("userId: ", userId);
                router.push('/')
            }
        } catch (error) {
          console.log("error: ", error);
        }
    }

    // useEffect(() =>{
    //   console.log("email", email)
    //   console.log("password", password)
    // }, [email, password])

  return (
    <div className="w-full">
        <div className="text-black px-10 xl:px-32 pt-20 flex justify-center">
            <div className="flex flex-col mt-40 justify-center">
                <h1 className="text-3xl font-medium w-full flex">Welcome Back</h1>
                <p className="text-gray-500 md:text-lg font-medium mt-3">Register an account to fully utilize our services!</p>
        
                <label 
                    className="mt-5 font-semibold text-xl"
                    htmlFor="email"
                >
                    Email
                </label>
                <div>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Enter your email'
                    className="block w-80 mt-2 px-3 py-2 rounded-md border border-gray-400"
                    />
                </div>

                <label 
                    className="mt-5 font-semibold text-xl"
                    htmlFor="password"
                >
                    Password
                </label>
                <div>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Enter your password'
                    className="block w-80 mt-2 px-3 py-2 rounded-md border border-gray-400"
                    />
                </div>

                <button 
                    type="button"
                    onClick={signInWithEmail}
                    className="mt-6 flex w-80 bg-gradient-to-r from-emerald-300 via-teal-400 to-teal-500 rounded-md items-center justify-center py-2 font-medium text-white">
                        Login To Account
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login