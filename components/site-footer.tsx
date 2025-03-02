import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SiX, SiDiscord, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si"

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Schedule a call", href: "#" },
    { label: "Email Us", href: "#" },
  ],
  Links: [
    { label: "Data Sources", href: "#" },
    { label: "Demo Videos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Product Hunt", href: "#" },
  ],
  Legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Acceptable Use", href: "#" },
  ],
}

const socialIcons = {
  twitter: SiX,
  discord: SiDiscord,
  linkedin: SiLinkedin,
  youtube: SiYoutube,
  github: SiGithub,
};

export default function SiteFooter() {
  return (
    <footer className="w-full bg-black text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-md p-1">
                <Image
                  src="/camelai.webp?height=24&width=24"
                  alt="camelAI Logo"
                  width={270} 
                  height={18} 
                  className="h-18 w-50" 
                />
              </div>
            </Link>

            <div className="max-w-sm">
              <p className="text-white/70 mb-4">Subscribe to our newsletter for product updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="gradient-hover bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 transition duration-1000">
                  Subscribe
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              {["twitter", "discord", "linkedin", "youtube", "github"].map((platform) => {
                const Icon = socialIcons[platform];
                return (
                  <Link
                    key={platform}
                    href={`#${platform}`}
                    className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm text-white/50 mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm hover:text-white/80 transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-white/50">© 2024 camelAI (DBA camelAI) | All rights reserved</div>
      </div>
    </footer>
  )
}
