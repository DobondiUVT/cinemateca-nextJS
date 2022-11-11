/* eslint-disable @next/next/no-head-element */
import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html data-theme="night">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
