/* eslint-disable @next/next/no-head-element */
import { headers, cookies } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import "./globals.css"
import SupabaseListener from "components/SupabaseListener"
export default async function RootLayout({ children }) {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return (
        <html className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body>
                <Navbar />
                <SupabaseListener accessToken={session?.access_token} />
                <div id="content">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
