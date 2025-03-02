"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FileSpreadsheet, Database, BarChart3 } from "lucide-react"

// Icons for both rows with a mix of company logos and Lucide icons
const icons = [
  { id: 1, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/redshift.svg" width={40} height={40} alt="Amazon Redshift" className="w-full h-full object-contain" /></div> },
  { id: 2, component: <div className="text-black font-bold text-xs bg-gray-200 p-2 rounded">CSV</div> },
  { id: 3, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/postgresql.svg" width={40} height={40} alt="PostgreSQL" className="w-full h-full object-contain" /></div> },
  { id: 4, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/bigquery.svg" width={40} height={40} alt="Google BigQuery" className="w-full h-full object-contain" /></div> },
  { id: 5, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/mongodb.svg" width={40} height={40} alt="MongoDB" className="w-full h-full object-contain" /></div> },
  { id: 6, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/airtable.svg" width={40} height={40} alt="Airtable" className="w-full h-full object-contain" /></div> },
  { id: 7, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/snowflake.svg" width={40} height={40} alt="Snowflake" className="w-full h-full object-contain" /></div> },
  { id: 8, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/linkedin.svg" width={40} height={40} alt="LinkedIn" className="w-full h-full object-contain" /></div> },
  { id: 9, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/google-sheets.svg" width={40} height={40} alt="Google Sheets" className="w-full h-full object-contain" /></div> },
  { id: 10, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/mysql.svg" width={40} height={40} alt="MySQL" className="w-full h-full object-contain" /></div> },
  { id: 11, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/looker.svg" width={40} height={40} alt="Looker" className="w-full h-full object-contain" /></div> },
  { id: 12, component: <div className="bg-white p-2 rounded-lg"><Image src="/logos/powerbi.svg" width={40} height={40} alt="Power BI" className="w-full h-full object-contain" /></div> },
]

export default function MovingIcons() {
  const [topRowPaused, setTopRowPaused] = useState(false)
  const [bottomRowPaused, setBottomRowPaused] = useState(false)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topRow = topRowRef.current
    const bottomRow = bottomRowRef.current

    if (topRow && bottomRow) {
      topRow.style.animationPlayState = topRowPaused ? "paused" : "running"
      bottomRow.style.animationPlayState = bottomRowPaused ? "paused" : "running"
    }
  }, [topRowPaused, bottomRowPaused])

  return (
    <div className="w-full bg-black py-16">
      <div className="overflow-hidden mb-6">
        <div className="icon-row-mask">
          <div ref={topRowRef} className="flex animate-marquee-left" style={{ width: "fit-content" }}>
            {[...icons, ...icons].map((icon, index) => (
              <div
                key={`${icon.id}-${index}`}
                className="bg-white p-4 rounded-lg flex items-center justify-center w-24 h-24 mx-1 transition-all duration-300 hover:bg-gray-100 hover-lift icon-fade"
                onMouseEnter={() => setTopRowPaused(true)}
                onMouseLeave={() => setTopRowPaused(false)}
              >
                {icon.component}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden mb-16">
        <div className="icon-row-mask">
          <div ref={bottomRowRef} className="flex animate-marquee-right" style={{ width: "fit-content" }}>
            {[...icons, ...icons].map((icon, index) => (
              <div
                key={`${icon.id}-${index}`}
                className="bg-white p-4 rounded-lg flex items-center justify-center w-24 h-24 mx-1 transition-all duration-300 hover:bg-gray-100 hover-lift icon-fade"
                onMouseEnter={() => setBottomRowPaused(true)}
                onMouseLeave={() => setBottomRowPaused(false)}
              >
                {icon.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
