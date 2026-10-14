import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { LusionProvider } from "@/components/lusion/lusion-context"
import { LusionPreloader } from "@/components/lusion/lusion-preloader"
import { LusionHeader } from "@/components/lusion/lusion-header"
import { LusionVideoOverlay } from "@/components/lusion/lusion-video-overlay"
import { LusionScrollIndicator } from "@/components/lusion/lusion-scroll-indicator"

export const metadata: Metadata = {
  title: "Lusion - Award Winning 3D and Interactive Web Studio",
  description:
    "We design and produce 3D visual storytelling, immersive websites, and interactive digital experiences that help brands stand out online.",
  openGraph: {
    title: "Lusion - Award Winning 3D and Interactive Web Studio",
    description:
      "We design and produce 3D visual storytelling, immersive websites, and interactive digital experiences that help brands stand out online.",
    siteName: "Lusion - Award Winning 3D and Interactive Web Studio",
    images: ["https://lusion.co/assets/meta/social_sharing.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#f0f1fa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#f0f1fa] text-black" suppressHydrationWarning>
        <LusionProvider>
          <LusionPreloader />
          <LusionHeader />
          <LusionScrollIndicator />
          <LusionVideoOverlay />
          <main id="page-container" className="relative min-h-screen">
            {children}
          </main>
        </LusionProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
