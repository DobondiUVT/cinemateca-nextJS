/* eslint-disable @next/next/no-head-element */
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
