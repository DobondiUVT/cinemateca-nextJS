"use client"

import { LockClosedIcon } from "@heroicons/react/24/solid"
import { Fragment, useState } from "react"
import supabase from "helpers/supabase"
import { Dialog, Transition } from "@headlessui/react"

// Supabase auth needs to be triggered client-side
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const handleEmailSignup = async (email, password) => {
        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        let signupData = data || null
        if (error) {
            console.log({ error })
        } else {
            let { data, error } = await supabase
                .from("profiles")
                .update({
                    username: username,
                    avatar_url: `https://i.pravatar.cc/150?img=${getRandomNumber(
                        1,
                        70
                    )}`,
                })
                .eq("id", signupData?.user?.id)
            if (error) {
                console.log({ error })
            } else {
                window.location.href = "/"
            }
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex min-h-full items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary ">
                            Sign up for an account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleEmailSignup(email, password)
                                }}
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-4 px-4 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
