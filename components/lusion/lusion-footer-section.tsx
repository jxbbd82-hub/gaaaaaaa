"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { lusionAudio } from "@/lib/lusion-audio"

interface LusionFooterSectionProps {
  nextPagePath: string
  nextPageTitle: string
}

export function LusionFooterSection({
  nextPagePath,
  nextPageTitle,
}: LusionFooterSectionProps) {
  const router = useRouter()
  const [titleHovered, setTitleHovered] = useState(false)
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes("@")) {
      setFeedback("Please enter a valid email address.")
      return
    }
    lusionAudio.playClick(660)
    setFeedback("Subscribed! Welcome to Lusion updates.")
    setEmail("")
    setTimeout(() => setFeedback(""), 4000)
  }

  const scrollToTop = () => {
    lusionAudio.playClick(600)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div id="page-extra-sections" className="relative z-10">
      {/* 1. END SECTION: Is Your Big Idea Ready to Go Wild? / Let's work together! */}
      <section
        id="end-section"
        className="relative min-h-[85vh] bg-[#f0f1fa] text-black flex flex-col justify-between px-6 md:px-14 py-14 border-t border-black/10 overflow-hidden"
      >
        {/* Top Row of 5 Crosshairs */}
        <div
          id="end-section-content-crosses"
          className="flex items-center justify-between w-full text-black"
        >
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
        </div>

        {/* Center Interactive Title */}
        <div className="my-auto py-16 flex flex-col items-center text-center relative">
          <div
            id="end-section-subtitle"
            className="font-mono-lusion text-xs md:text-sm uppercase tracking-[0.22em] text-black/60 mb-6"
          >
            Is Your Big Idea Ready to Go Wild?
          </div>

          <a
            id="end-section-title"
            href="mailto:business@lusion.co"
            onMouseEnter={() => {
              setTitleHovered(true)
              lusionAudio.playHover()
            }}
            onMouseLeave={() => setTitleHovered(false)}
            className="group relative inline-block cursor-pointer select-none"
          >
            {/* Decorative floating badges on hover */}
            <span
              className={`hidden md:flex items-center gap-2 absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#c1ff00] text-black font-mono-lusion text-xs uppercase tracking-widest shadow-md transition-all duration-300 ${
                titleHovered ? "opacity-100 -translate-y-2 scale-100" : "opacity-0 translate-y-2 scale-90"
              }`}
            >
              <span>business@lusion.co</span>
            </span>

            <div
              id="end-section-title-link"
              className="font-aeonik font-medium text-[12vw] md:text-[8.5vw] leading-[0.94] tracking-tight transition-transform duration-500 group-hover:scale-[1.03] group-hover:text-[#1a2ffb]"
            >
              {"Let's work"}
              <br />
              together!
            </div>

            <div className="mt-6 h-[3px] w-full bg-black/10 rounded-full overflow-hidden">
              <div
                className={`h-full bg-[#1a2ffb] transition-all duration-500 ${
                  titleHovered ? "w-full" : "w-1/4"
                }`}
              />
            </div>
          </a>
        </div>

        {/* Bottom Continue to Scroll Bar */}
        <div
          id="end-bottom"
          className="flex items-center justify-between w-full font-mono-lusion text-[11px] uppercase tracking-[0.2em] text-black/60"
        >
          <div className="flex items-center gap-2">
            <span>↓</span>
            <span>CONTINUE TO SCROLL</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span>BRISTOL • UNITED KINGDOM</span>
          </div>
          <div className="flex items-center gap-2">
            <span>CONTINUE TO SCROLL</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* 2. FOOTER SECTION: Electric Blue #1a2ffb Lusion Footer */}
      <footer
        id="footer-section"
        className="relative bg-[#1a2ffb] text-white px-6 md:px-14 pt-16 pb-12 overflow-hidden"
      >
        {/* Top Decorative Crosses */}
        <div className="flex items-center justify-between w-full mb-14 text-white/60">
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
        </div>

        {/* Middle Contact & Newsletter Grid */}
        <div
          id="footer-middle"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/20"
        >
          {/* Left 7 Cols: Address, Socials, Enquiries, New Business */}
          <div
            id="footer-middle-contact"
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10"
          >
            {/* Address */}
            <div>
              <div className="font-mono-lusion text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                STUDIO
              </div>
              <a
                id="footer-contact-address"
                href="https://goo.gl/maps/x9evc1NxZocjrM947"
                target="_blank"
                rel="noopener noreferrer"
                className="font-aeonik text-xl md:text-2xl leading-snug hover:text-[#c1ff00] transition-colors block"
              >
                <div>Suite 2</div>
                <div>9 Marsh Street</div>
                <div>Bristol, BS1 4AA</div>
                <div>United Kingdom</div>
              </a>
            </div>

            {/* Socials */}
            <div id="footer-contact-socials">
              <div className="font-mono-lusion text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
                SOCIALS
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Twitter / X", href: "https://twitter.com/lusionltd/" },
                  { label: "Instagram", href: "https://www.instagram.com/lusionltd/" },
                  { label: "Linkedin", href: "https://www.linkedin.com/company/lusionltd/" },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => lusionAudio.playHover()}
                    className="group inline-flex items-center gap-2 font-aeonik text-xl md:text-2xl hover:text-[#c1ff00] transition-colors"
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M6.948 18.113a.75.75 0 0 1-1.06-1.06l9.885-9.886H8.65a.75.75 0 1 1 0-1.5h9.682v9.682a.75.75 0 0 1-1.5 0v-7.12l-9.884 9.884Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{soc.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* General Enquiries */}
            <div id="footer-contact-enquires">
              <div
                id="footer-enquires-header"
                className="font-mono-lusion text-xs uppercase tracking-[0.2em] text-white/60 mb-2"
              >
                General enquires
              </div>
              <a
                id="footer-enquires-link"
                href="mailto:hello@lusion.co"
                className="font-aeonik text-xl md:text-2xl hover:text-[#c1ff00] transition-colors underline decoration-white/30 underline-offset-4"
              >
                hello@lusion.co
              </a>
            </div>

            {/* New Business */}
            <div id="footer-contact-business">
              <div
                id="footer-business-header"
                className="font-mono-lusion text-xs uppercase tracking-[0.2em] text-white/60 mb-2"
              >
                New business
              </div>
              <a
                id="footer-business-link"
                href="mailto:business@lusion.co"
                className="font-aeonik text-xl md:text-2xl hover:text-[#c1ff00] transition-colors underline decoration-white/30 underline-offset-4"
              >
                business@lusion.co
              </a>
            </div>
          </div>

          {/* Right 5 Cols: Newsletter Subscription */}
          <div
            id="footer-middle-newsletter"
            className="lg:col-span-5 flex flex-col justify-between bg-white/10 backdrop-blur-sm rounded-[24px] p-7 md:p-9 border border-white/15"
          >
            <div
              id="footer-newsletter-header"
              className="font-aeonik text-3xl md:text-4xl font-medium leading-tight mb-6"
            >
              <span className="block">Subscribe to</span>
              <span className="block">our newsletter</span>
            </div>

            <div>
              <form
                id="footer-newsletter-form"
                onSubmit={handleNewsletter}
                className="relative flex items-center bg-white text-black rounded-2xl px-5 py-4 shadow-lg"
              >
                <input
                  id="footer-newsletter-input-field"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent text-base md:text-lg text-black placeholder:text-black/40 focus:outline-none font-aeonik"
                />
                <button
                  type="submit"
                  id="footer-newsletter-input-arrow"
                  aria-label="Send newsletter form button"
                  className="ml-3 w-10 h-10 rounded-xl bg-[#f0f1fa] hover:bg-[#c1ff00] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.9999 11.9998C1.9999 12.552 2.44762 12.9997 2.9999 12.9997H18.9757L12.2931 19.7784C11.9025 20.1689 11.9025 20.8021 12.2931 21.1926C12.6836 21.5831 13.3168 21.5831 13.7073 21.1926L22.1926 12.7073C22.5831 12.3168 22.5831 11.6836 22.1926 11.2931L13.7071 2.80767C13.3166 2.41715 12.6834 2.41715 12.2929 2.80767C11.9024 3.1982 11.9024 3.83136 12.2929 4.22189L18.9752 10.9998H2.9999C2.44762 10.9997 1.9999 11.4475 1.9999 11.9998Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </form>
              {feedback && (
                <div
                  id="footer-newsletter-feedback-message"
                  className="mt-3 font-mono-lusion text-xs text-[#c1ff00]"
                >
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll-to-Top */}
        <div
          id="footer-bottom"
          className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono-lusion text-xs uppercase tracking-widest text-white/80"
        >
          <div id="footer-bottom-copyright">©2026 LUSION Creative Studio</div>
          <a
            id="footer-bottom-labs"
            href="https://labs.lusion.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c1ff00] transition-colors"
          >
            R&D: labs.lusion.co
          </a>
          <div id="footer-bottom-tagline">Built by Lusion with love</div>
          <button
            id="footer-bottom-up"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-white/15 hover:bg-[#c1ff00] hover:text-black flex items-center justify-center transition-all cursor-pointer"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 22a1 1 0 0 1-1-1V5.857l-6.223 6.224a1 1 0 0 1-1.415-1.415l7.9-7.9a1 1 0 0 1 1.414 0v.001l7.9 7.9a1 1 0 0 1-1.414 1.414L13 5.919V21a1 1 0 0 1-1 1Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </footer>

      {/* 3. SCROLL NAV SECTION: Keep Scrolling to Learn More -> Next Page */}
      <section
        id="scroll-nav-section"
        onClick={() => {
          lusionAudio.playClick(580)
          router.push(nextPagePath)
        }}
        className="group relative bg-[#0a0b0e] hover:bg-[#11131a] text-white px-6 md:px-14 py-16 md:py-24 cursor-pointer transition-colors border-t border-white/10"
      >
        <div
          id="scroll-nav-content"
          className="max-w-7xl mx-auto flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div
                id="scroll-nav-subtitle"
                className="font-mono-lusion text-xs uppercase tracking-[0.22em] text-white/50 mb-3"
              >
                Keep Scrolling to Learn More
              </div>
              <div
                id="scroll-nav-text"
                className="font-aeonik text-5xl md:text-7xl font-medium tracking-tight group-hover:text-[#c1ff00] transition-colors"
              >
                {nextPageTitle}
              </div>
            </div>

            <div
              id="scroll-nav-next"
              className="flex items-center gap-5 self-start md:self-end"
            >
              <div
                id="scroll-nav-next-text"
                className="font-mono-lusion text-xs uppercase tracking-[0.2em] text-white/70"
              >
                Next Page
              </div>
              <div
                id="scroll-nav-next-bar"
                className="w-32 md:w-44 h-1.5 bg-white/15 rounded-full overflow-hidden"
              >
                <div
                  id="scroll-nav-next-bar-inner"
                  className="h-full w-1/3 group-hover:w-full bg-[#1a2ffb] group-hover:bg-[#c1ff00] transition-all duration-500"
                />
              </div>
              <div
                id="scroll-nav-next-arrow"
                className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#1a2ffb] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.9999 11.9998C1.9999 12.552 2.44762 12.9997 2.9999 12.9997H18.9757L12.2931 19.7784C11.9025 20.1689 11.9025 20.8021 12.2931 21.1926C12.6836 21.5831 13.3168 21.5831 13.7073 21.1926L22.1926 12.7073C22.5831 12.3168 22.5831 11.6836 22.1926 11.2931L13.7071 2.80767C13.3166 2.41715 12.6834 2.41715 12.2929 2.80767C11.9024 3.1982 11.9024 3.83136 12.2929 4.22189L18.9752 10.9998H2.9999C2.44762 10.9997 1.9999 11.4475 1.9999 11.9998Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            id="scroll-nav-cross-line"
            className="flex items-center justify-between w-full pt-6 text-white/40"
          >
            <span className="lusion-cross" />
            <span className="lusion-cross" />
            <span className="lusion-cross" />
            <span className="lusion-cross" />
            <span className="lusion-cross" />
          </div>
        </div>
      </section>
    </div>
  )
}
