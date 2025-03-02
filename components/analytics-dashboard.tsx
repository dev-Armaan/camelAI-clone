import Image from "next/image"
import { Lightbulb } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"


export default function AnalyticsDashboard() {
  return (
    <div className="w-full bg-black text-white space-y-16 px-4">
      {/* Dashboard Image */}
      <div className="max-w-6xl mx-auto">
        <div className="border-2 border-dashed border-white/20 rounded-2xl p-1">
          <Image
            src="/chat.webp?height=600&width=1200"
            width={1200}
            height={600}
            alt="Analytics Dashboard"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Powerful Dashboards Section */}
      <div className="text-center space-y-4">
        <div className="inline-block border border-dashed border-white/30 rounded-lg px-6 py-3">
          <div className="flex items-center gap-2 text-xl">
            <Lightbulb className="w-5 h-5" />
            <span className="font-mono">Powerful Dashboards</span>
          </div>
        </div>
        <div className="text-center max-w-md mx-auto">
          <p className="text-lg mb-1">Save any graph to a live dashboard.</p>
          <p className="text-lg">Start a chat to answer ad hoc questions.</p>
        </div>
      </div>

      {/* Second Dashboard Image */}
      <div className="max-w-6xl mx-auto">
        <div className="border-2 border-dashed border-white/20 rounded-2xl p-1">
          <Image
            src="/dash.webp?height=600&width=1200"
            width={1200}
            height={600}
            alt="Retention Dashboard"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Build with camelAI Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 py-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-mono">Want to build with camelAI?</h2>
          <p className="text-lg text-white/70">Embed AI-powered analytics directly in your application with our API</p>
          <Link
            href="/api-waitlist"
            className="gradient-hover bg-white text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition duration-1000"
          >
            Join API Waitlist
            <ChevronRight className="h-5 w-5" />
          </Link>

        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Natural Language → SQL</h3>
            <p className="text-white/70">Same powerful query engine that powers camelAI</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Secure Integration</h3>
            <p className="text-white/70">Enterprise-grade security and permissions</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Flexible Integration</h3>
            <p className="text-white/70">Full control over the user experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

