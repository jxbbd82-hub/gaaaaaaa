"use client"

import React, { useEffect, useRef, useState } from "react"
import { useLusion } from "./lusion-context"

export function LusionVideoOverlay() {
  const { isReelOpen, closeReel } = useLusion()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (isReelOpen) {
      v.currentTime = 0
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          v.muted = true
          setIsMuted(true)
          v.play().catch(() => {})
        })
    } else {
      v.pause()
    }
  }, [isReelOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isReelOpen) {
        closeReel()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isReelOpen, closeReel])

  if (!isReelOpen) return null

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    v.currentTime = ratio * v.duration
    setProgress(ratio * 100)
  }

  return (
    <div
      id="video-overlay"
      onClick={closeReel}
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer select-none animate-in fade-in duration-300"
    >
      <video
        ref={videoRef}
        src="https://lusion.co/assets/textures/reel/desktop.mp4"
        playsInline
        loop
        onTimeUpdate={(e) => {
          const v = e.currentTarget
          if (v.duration) {
            setProgress((v.currentTime / v.duration) * 100)
          }
        }}
        className="w-full h-full object-contain max-w-[92vw] max-h-[84vh] rounded-2xl shadow-2xl"
      />

      {/* Mobile / Top-Right Close Button */}
      <button
        id="video-overlay__mobile-close-btn"
        onClick={(e) => {
          e.stopPropagation()
          closeReel()
        }}
        aria-label="Close showreel"
        className="fixed top-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black transition-colors font-mono-lusion text-xs uppercase tracking-widest"
      >
        <span>CLOSE</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3.75781 3.75732L12.2431 12.2426" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12.2422 3.75732L3.75691 12.2426" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Bottom Controls Bar */}
      <div
        id="video-overlay__controls"
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-7 left-6 right-6 md:left-14 md:right-14 z-20 flex items-center gap-5 bg-black/60 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/15 text-white font-mono-lusion text-xs tracking-widest"
      >
        <button
          id="video-overlay__play-btn"
          onClick={togglePlay}
          className="hover:text-[#c1ff00] transition-colors uppercase font-medium min-w-[52px] text-left"
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>

        <div
          id="video-overlay__progress-container"
          onClick={handleSeek}
          className="relative flex-1 h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer group"
        >
          <div
            id="video-overlay__progress-active"
            className="h-full bg-[#1a2ffb] group-hover:bg-[#c1ff00] transition-colors"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          id="video-overlay__mute-btn"
          onClick={toggleMute}
          className="hover:text-[#c1ff00] transition-colors uppercase font-medium min-w-[52px] text-right"
        >
          {isMuted ? "UNMUTE" : "MUTE"}
        </button>
      </div>

      {/* Custom Floating Close Cursor on Desktop */}
      <div
        id="video-overlay-cursor"
        style={{
          transform: `translate3d(${cursorPos.x - 28}px, ${cursorPos.y - 28}px, 0)`,
        }}
        className="hidden lg:flex fixed top-0 left-0 z-10 w-14 h-14 rounded-full bg-white/90 text-[#020022] items-center justify-center pointer-events-none shadow-xl transition-transform duration-75"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 36 36">
          <path
            stroke="#020022"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M31 31 17.928 18 31 5M5 5l13.072 13L5 31"
          />
        </svg>
      </div>
    </div>
  )
}
