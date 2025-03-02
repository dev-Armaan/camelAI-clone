"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY) // Show when scrolling up
      } else {
        setIsVisible(true) // Always visible at the top
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black/70 backdrop-blur-md border-b border-white/10`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-md p-1">
          <Image
  src="/camelai.webp?height=24&width=24"
  alt="camelAI Logo"
  width={90}  // Increase width
  height={6} // Increase height
  className="h-6 w-50" // Increase tailwind size
/>

          </div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/blog" className="text-white hover:text-white/80 transition">
            Blog
          </Link>
          <Link href="/pricing" className="text-white hover:text-white/80 transition">
            Pricing
          </Link>
          <Link href="/login" className="text-white hover:text-white/80 transition">
            Log in
          </Link>
        </nav>
      </div>
    </header>
  )
}
