import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GetStartedSection() {
  return (
    <div className="w-full bg-black text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl font-medium">
            Get started for <span className="text-orange-500">free</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/try-free"
              className="gradient-hover bg-white text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition hover-lift"
            >
              Try Free
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition hover-lift"
            >
              Contact us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

