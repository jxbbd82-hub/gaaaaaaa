"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useLusion } from "./lusion-context"
import { lusionAudio } from "@/lib/lusion-audio"

export function LusionHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const {
    isMenuOpen,
    setMenuOpen,
    toggleMenu,
    soundEnabled,
    toggleSound,
    scrollToContact,
  } = useLusion()

  const soundCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const [soundHover, setSoundHover] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterFeedback, setNewsletterFeedback] = useState("")

  const isProjectDetail = pathname.startsWith("/projects/") && pathname !== "/projects"
  const isDarkPage = pathname === "/about" || isProjectDetail

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, setMenuOpen])

  // Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        !target.closest("#header-menu") &&
        !target.closest("#header-right-menu-btn")
      ) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("mousedown", handleOutside)
    return () => window.removeEventListener("mousedown", handleOutside)
  }, [isMenuOpen, setMenuOpen])

  // Animated 2D Sine Wave on Sound Button Canvas
  useEffect(() => {
    const canvas = soundCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rafId: number
    let phase = 0

    const render = () => {
      const size = 42
      const dpr = typeof window !== "undefined" ? Math.min(2, window.devicePixelRatio || 1) : 1
      if (canvas.width !== size * dpr) {
        canvas.width = size * dpr
        canvas.height = size * dpr
      }

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, size, size)

      // Circle background
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      ctx.fillStyle = soundHover ? "#1a2ffb" : isDarkPage ? "rgba(255,255,255,0.12)" : "#e4e6ef"
      ctx.fill()

      // Waveform line
      ctx.beginPath()
      const waveWidth = 18
      const startX = (size - waveWidth) / 2
      const centerY = size / 2
      const amp = soundEnabled ? (soundHover ? 5.2 : 4.0) : soundHover ? 2.2 : 0.6

      for (let i = 0; i <= waveWidth; i++) {
        const x = startX + i
        const norm = i / waveWidth
        const envelope = Math.sin(norm * Math.PI)
        const y = centerY + Math.sin(norm * Math.PI * 2.5 + phase) * amp * envelope
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }

      ctx.strokeStyle = soundHover || isDarkPage ? "#ffffff" : "#000000"
      ctx.lineWidth = 1.6
      ctx.lineCap = "round"
      ctx.stroke()
      ctx.restore()

      phase += soundEnabled ? 0.14 : 0.05
      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(rafId)
  }, [soundEnabled, soundHover, isDarkPage])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsletterFeedback("Please enter a valid email.")
      return
    }
    lusionAudio.playClick(680)
    setNewsletterFeedback("Thank you for subscribing!")
    setNewsletterEmail("")
    setTimeout(() => setNewsletterFeedback(""), 4000)
  }

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 py-5 md:py-7 pointer-events-none"
    >
      {/* Dim backdrop when menu is open */}
      <div
        id="header-background"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/25 backdrop-blur-[2px] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        id="header-container"
        className="relative z-10 flex items-center justify-between w-full"
      >
        {/* Left: LUSION Logo */}
        <Link
          id="header-logo"
          href="/"
          aria-label="Go to home page"
          onMouseEnter={() => lusionAudio.playHover()}
          onClick={() => lusionAudio.playClick(540)}
          className={`pointer-events-auto transition-colors duration-300 ${
            isDarkPage ? "text-white" : "text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="22"
            fill="none"
            viewBox="0 0 121 24"
            className="w-[96px] md:w-[116px] h-auto"
          >
            <g fill="currentColor">
              <path d="M0 23.781V.22h3.871v20.129h10.132v3.433H0ZM22.76.118v13.666c0 2.222.438 3.893 1.313 5.015.875 1.1 2.233 1.65 4.073 1.65 1.862 0 3.231-.55 4.106-1.65.898-1.122 1.347-2.793 1.347-5.015V.118h3.87v13.464c0 3.366-.796 5.924-2.39 7.675-1.57 1.75-3.881 2.625-6.933 2.625-3.03 0-5.33-.875-6.9-2.625-1.572-1.75-2.357-4.309-2.357-7.675V.118h3.871ZM46.16 16.123c.112 1.392.673 2.514 1.683 3.366 1.032.83 2.367 1.246 4.005 1.246 1.436 0 2.592-.303 3.467-.909.898-.628 1.347-1.492 1.347-2.592 0-.785-.247-1.402-.74-1.851-.472-.471-1.123-.83-1.953-1.077-.83-.247-1.997-.505-3.5-.774-1.527-.27-2.84-.618-3.94-1.044a6.43 6.43 0 0 1-2.658-2.02c-.674-.897-1.01-2.075-1.01-3.534 0-1.346.348-2.547 1.043-3.602.718-1.054 1.706-1.873 2.962-2.457C48.146.292 49.604 0 51.242 0c1.683 0 3.187.314 4.51.942 1.325.629 2.368 1.493 3.131 2.592.763 1.1 1.178 2.357 1.246 3.77h-3.804c-.135-1.211-.662-2.188-1.582-2.928-.92-.74-2.087-1.11-3.5-1.11-1.37 0-2.47.302-3.3.908-.807.583-1.211 1.414-1.211 2.49 0 .764.235 1.37.707 1.818.493.45 1.144.786 1.952 1.01.808.225 1.964.472 3.467.74 1.526.27 2.839.63 3.938 1.078 1.1.449 1.998 1.11 2.693 1.986.696.875 1.044 2.03 1.044 3.467 0 1.391-.37 2.637-1.111 3.736-.74 1.1-1.773 1.964-3.097 2.592-1.324.606-2.828.909-4.51.909-1.863 0-3.501-.337-4.915-1.01-1.414-.673-2.524-1.604-3.332-2.794-.786-1.211-1.19-2.591-1.212-4.14l3.803.067ZM65.419.219h3.87V23.78h-3.87V.22ZM97.065 12c0 2.289-.482 4.342-1.447 6.16-.965 1.818-2.323 3.242-4.073 4.275-1.728 1.032-3.703 1.548-5.924 1.548-2.222 0-4.208-.516-5.958-1.548-1.728-1.032-3.075-2.457-4.04-4.275-.965-1.818-1.447-3.871-1.447-6.16s.483-4.342 1.447-6.16c.965-1.818 2.312-3.243 4.04-4.275C81.413.533 83.399.017 85.62.017c2.221 0 4.196.516 5.924 1.548 1.75 1.032 3.108 2.457 4.073 4.275.965 1.818 1.447 3.871 1.447 6.16Zm-18.917 0c0 1.638.314 3.12.943 4.443.628 1.302 1.503 2.323 2.625 3.063 1.144.718 2.446 1.078 3.905 1.078 1.458 0 2.749-.36 3.87-1.078 1.145-.74 2.031-1.761 2.66-3.063.628-1.324.942-2.805.942-4.443 0-1.638-.314-3.108-.942-4.41-.629-1.324-1.515-2.345-2.66-3.063-1.121-.74-2.412-1.11-3.87-1.11-1.459 0-2.76.37-3.905 1.11-1.122.718-1.997 1.74-2.625 3.063-.629 1.302-.943 2.772-.943 4.41ZM101.951 23.781V.22h3.535l11.478 16.695V.22h3.804V23.78h-3.535L105.755 7.086V23.78h-3.804Z" />
            </g>
          </svg>
        </Link>

        {/* Center: Back Button on Project Detail Pages */}
        <div id="header-center" className="flex items-center justify-center">
          {isProjectDetail && (
            <button
              id="header-center-project-back-btn"
              onClick={() => {
                lusionAudio.playClick(480)
                router.push("/projects")
              }}
              onMouseEnter={() => lusionAudio.playHover()}
              className="pointer-events-auto group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all duration-300 font-aeonik text-xs uppercase tracking-widest font-medium shadow-lg"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M8 12.243 3.757 8m0 0L8 3.757M3.757 8h8.486"
                />
              </svg>
              <span>BACK</span>
            </button>
          )}
        </div>

        {/* Right: Sound Wave Button + Let's Talk Pill + Menu Pill */}
        <div id="header-right" className="flex items-center gap-2.5 md:gap-3 pointer-events-auto">
          {/* Sound Wave Canvas Button */}
          <button
            id="header-right-sound-btn"
            aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            onClick={toggleSound}
            onMouseEnter={() => {
              setSoundHover(true)
              lusionAudio.playHover()
            }}
            onMouseLeave={() => setSoundHover(false)}
            className="relative w-[42px] h-[42px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <canvas ref={soundCanvasRef} className="w-[42px] h-[42px] block" />
          </button>

          {/* Let's Talk Pill Button */}
          <a
            id="header-right-talk-btn"
            href="mailto:hello@lusion.co"
            onMouseEnter={() => lusionAudio.playHover()}
            onClick={(e) => {
              if (pathname === "/" || pathname === "/about" || pathname === "/projects") {
                e.preventDefault()
                scrollToContact()
              }
            }}
            className="hidden sm:flex group relative items-center gap-2.5 h-[42px] px-5 rounded-full bg-[#2b2e3a] hover:bg-[#1a2ffb] text-white transition-all duration-300 font-aeonik text-xs uppercase tracking-[0.08em] font-medium overflow-hidden shadow-sm"
          >
            <span className="inline-flex items-center justify-center w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
              <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.343 8h11.314m0 0-4.984 4.984M13.657 8 8.673 3.016"
                />
              </svg>
            </span>
            <span>{"LET'S TALK"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-0 transition-transform duration-200" />
          </a>

          {/* Menu / Close Pill Button */}
          <button
            id="header-right-menu-btn"
            aria-label="Menu button"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            onMouseEnter={() => lusionAudio.playHover()}
            className={`group relative flex items-center gap-2.5 h-[42px] px-5 rounded-full transition-all duration-300 font-aeonik text-xs uppercase tracking-[0.08em] font-medium cursor-pointer ${
              isMenuOpen
                ? "bg-white text-black shadow-md"
                : isDarkPage
                  ? "bg-white/15 hover:bg-white text-white hover:text-black backdrop-blur-md"
                  : "bg-[#e4e6ef] hover:bg-white text-black shadow-sm"
            }`}
          >
            <span>{isMenuOpen ? "CLOSE" : "MENU"}</span>
            <span className="flex items-center gap-1">
              <span
                className={`w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-x-[2px]" : "group-hover:scale-125"
                }`}
              />
              <span
                className={`w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-x-[2px]" : "group-hover:scale-125"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Floating Dropdown Menu Stack (Exact Lusion 4-card stack) */}
      <div
        id="header-menu"
        className={`fixed top-[76px] right-5 md:right-12 z-50 w-[300px] sm:w-[320px] flex flex-col gap-3 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Card 1: Navigation Links */}
        <div
          id="header-menu-links"
          className="bg-white rounded-[20px] p-3 shadow-xl flex flex-col gap-1 border border-black/5"
        >
          {[
            { label: "HOME", href: "/", active: pathname === "/" },
            { label: "ABOUT US", href: "/about", active: pathname === "/about" },
            {
              label: "PROJECTS",
              href: "/projects",
              active: pathname.startsWith("/projects"),
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => lusionAudio.playHover()}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center justify-between px-4 py-2.5 rounded-xl font-aeonik text-lg font-medium tracking-tight transition-colors ${
                item.active
                  ? "bg-[#f0f1fa] text-black"
                  : "text-black/80 hover:bg-[#f0f1fa] hover:text-black"
              }`}
            >
              <span>{item.label}</span>
              <span className="flex items-center gap-2">
                {item.active && (
                  <span className="w-2 h-2 rounded-full bg-black" />
                )}
                <svg
                  className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.515 12h16.97m0 0L13.01 4.525M20.485 12l-7.475 7.476"
                  />
                </svg>
              </span>
            </Link>
          ))}

          <button
            type="button"
            onMouseEnter={() => lusionAudio.playHover()}
            onClick={scrollToContact}
            className="group flex items-center justify-between px-4 py-2.5 rounded-xl font-aeonik text-lg font-medium tracking-tight text-black/80 hover:bg-[#f0f1fa] hover:text-black transition-colors text-left cursor-pointer"
          >
            <span>CONTACT</span>
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.515 12h16.97m0 0L13.01 4.525M20.485 12l-7.475 7.476"
              />
            </svg>
          </button>
        </div>

        {/* Card 2: Subscribe to our newsletter */}
        <div
          id="header-menu-newsletter"
          className="bg-white rounded-[20px] p-5 shadow-xl border border-black/5"
        >
          <h3 className="font-aeonik text-xl font-medium leading-tight text-black mb-3">
            Subscribe to
            <br />
            our newsletter
          </h3>
          <form
            id="header-menu-newsletter-form"
            onSubmit={handleNewsletterSubmit}
            className="relative flex items-center bg-[#f0f1fa] rounded-xl px-3.5 py-2.5"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-black placeholder:text-black/40 focus:outline-none font-aeonik"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="ml-2 p-1 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M4.11 12.75a.75.75 0 0 1 0-1.5h13.978l-5.036-5.036a.75.75 0 1 1 1.06-1.06l6.316 6.315.53.53-.53.53-6.316 6.317a.75.75 0 0 1-1.06-1.061l5.035-5.035H4.109Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          {newsletterFeedback && (
            <p className="mt-2 font-mono-lusion text-[11px] text-[#1a2ffb]">
              {newsletterFeedback}
            </p>
          )}
        </div>

        {/* Card 3: Let's talk black pill */}
        <a
          id="header-menu-talk"
          href="mailto:hello@lusion.co"
          onMouseEnter={() => lusionAudio.playHover()}
          className="flex items-center justify-between bg-[#111216] hover:bg-[#1a2ffb] text-white rounded-[20px] px-5 py-4 shadow-xl transition-colors"
        >
          <span className="font-aeonik text-base font-medium uppercase tracking-wider">
            {"LET'S TALK"}
          </span>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="1.5" rx="2" />
            <rect width="12" height="4" x="6" y="14" fill="currentColor" rx="2" />
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 7h10M7 10h10" />
          </svg>
        </a>

        {/* Card 4: Labs Card with Lucy Icon */}
        <a
          id="header-menu-labs"
          href="https://labs.lusion.co/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => lusionAudio.playHover()}
          className="group flex items-center justify-between bg-[#0a0b0e] hover:bg-[#1a2ffb] text-white rounded-[20px] px-5 py-4 shadow-xl transition-colors"
        >
          <div className="flex items-center gap-3.5">
            <svg width="24" height="32" fill="none" viewBox="0 0 28 38">
              <path
                stroke="#fff"
                strokeWidth="5"
                d="M20.128 29.65C18.584 31.217 16.532 32 13.972 32c-2.56 0-4.612-.783-6.156-2.35C6.272 28.05 5.5 26 5.5 23.5c0-2.5.772-4.533 2.316-6.1 1.544-1.6 3.596-2.4 6.156-2.4 2.56 0 4.612.8 6.156 2.4C21.71 18.967 22.5 21 22.5 23.5c0 2.5-.79 4.55-2.372 6.15Z"
              />
              <path
                fill="#fff"
                d="M23.5 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0ZM11 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"
              />
            </svg>
            <span className="font-aeonik text-lg font-medium tracking-wider uppercase">
              LABS
            </span>
          </div>
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 20 20 4m0 0v14.096M20 4H5.904"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
