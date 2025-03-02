import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play, Shield } from "lucide-react"
import MovingIcons from "@/components/moving-icons"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import FAQSection from "@/components/faq-section"
import GetStartedSection from "@/components/get-started-section"
import SiteFooter from "@/components/site-footer"
import StickyHeader from "@/components/sticky-header"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pt-16"> {/* Added padding-top to prevent content overlap */}
      <StickyHeader />  {/* Sticky Header is placed at the top of the page */}
      
      {/* Gradient background section */}
      <div className="hero-gradient">
        {/* Hero Section */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-6 pb-24 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The AI Data Analyst</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Ask questions, get instant charts and insights from your data.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/try-free"
              className="gradient-hover bg-white text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition duration-2000"
            >
              Try Free
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/book-demo"
              className="slide-overlay bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover-lift transition"
            >
              Book demo
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 flex items-center gap-2">
              <Image src="/y-comb.png" alt="Y Combinator" width={16} height={16} className="h-4 w-4" />
              <span className="text-sm">Y Combinator backed</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">100% Data Privacy</span>
            </div>
          </div>
          {/* App Demo */}
          <div className="max-w-4xl mx-auto relative">
            <div className="aspect-video relative overflow-hidden rounded-lg border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/rdPeT8-iiqY?autoplay=1&mute=1&loop=1&playlist=rdPeT8-iiqY"
                className="w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                title="Demo Video"
              ></iframe>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="play-button h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer">
                  <Play className="h-10 w-10 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Black background section */}
      <div className="bg-black text-white">
        <MovingIcons />
        <AnalyticsDashboard />
        <FAQSection />
        <GetStartedSection />
        <SiteFooter />
      </div>
    </main>
  )
}