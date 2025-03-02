import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "camelAI - The AI Data Analyst",
  description: "Ask questions, get instant charts and insights from your data.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br min-h-screen 
        from-[#2A1A47] via-[#9238A5] via-[#D16A31] to-[#1E4E79] 
        text-white`}
      >
        {children}
      </body>
    </html>
  )
}

