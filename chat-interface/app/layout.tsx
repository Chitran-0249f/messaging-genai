import type React from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 overflow-hidden">{children}</body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'Messaging app'
    };
