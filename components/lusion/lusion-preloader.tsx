"use client"

import React, { useEffect, useState } from "react"

export function LusionPreloader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let rafId: number
    const start = performance.now()
    const duration = 900

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setFading(true)
        setTimeout(() => setHidden(true), 520)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  if (hidden) return null

  const formatted = String(progress).padStart(3, "0")

  return (
    <div
      id="preloader"
      aria-hidden="true"
      className={`fixed inset-0 z-[120] flex flex-col justify-between bg-[#0a0b0e] text-white px-6 md:px-14 py-8 transition-all duration-500 pointer-events-none ${
        fading ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-mono-lusion text-xs tracking-[0.22em] uppercase text-white/60">
          LUSION CREATIVE STUDIO
        </span>
        <span className="font-mono-lusion text-xs tracking-[0.22em] uppercase text-white/60">
          BRISTOL, UK
        </span>
      </div>

      <div className="flex items-end justify-between w-full">
        <div className="flex items-center gap-3 text-white/50 font-mono-lusion text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#1a2ffb] animate-ping" />
          <span>INITIALIZING WEBGL SCENE</span>
        </div>

        <div
          id="preloader-percent-digits"
          className="flex items-baseline font-aeonik font-medium text-[18vw] md:text-[11vw] leading-[0.85] tracking-tighter select-none"
        >
          {formatted.split("").map((digit, idx) => (
            <span
              key={idx}
              className="inline-block tabular-nums transition-transform duration-150"
            >
              {digit}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
