"use client"

import React, { useEffect, useState } from "react"

export function LusionScrollIndicator() {
  const [scrollRatio, setScrollRatio] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) {
        setScrollRatio(0)
        return
      }
      setScrollRatio(Math.min(1, Math.max(0, window.scrollY / docHeight)))
    }
    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("resize", updateScroll)
    return () => {
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
    }
  }, [])

  return (
    <div
      id="scroll-indicator"
      aria-hidden="true"
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 h-28 w-[3px] rounded-full bg-black/10 overflow-hidden pointer-events-none mix-blend-difference"
    >
      <div
        id="scroll-indicator-bar"
        className="w-full bg-white rounded-full transition-transform duration-75"
        style={{
          height: "36%",
          transform: `translate3d(0, ${scrollRatio * 175}%, 0)`,
        }}
      />
    </div>
  )
}
