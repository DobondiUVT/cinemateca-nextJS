"use client"

import supabase from "helpers/supabase"

// Supabase auth needs to be triggered client-side
export default function Login() {
    const handleEmailSignup = async () => {
        let { data, error } = await supabase.auth.signUp({
            email: "kewewo2381@ceoshub.com",
            password: "password",
        })
        if (error) {
            console.log({ error })
        }
    }
    const handleEmailLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email: "kewewo2381@ceoshub.com",
            password: "password",
        })

        if (error) {
            console.log({ error })
        } else {
            window.location.href = "/"
        }
    }

    const handleGitHubLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        })

        if (error) {
            console.log({ error })
        }
    }

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log({ error })
        }
    }

    const getUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser()
    }

    return (
        <>
            <button onClick={handleEmailSignup}>Email Signup</button>
            <button onClick={handleEmailLogin}>Email Login</button>
            <button onClick={handleGitHubLogin}>GitHub Login</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={getUser}>Get User</button>
        </>
    )
}
