"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { lusionAudio } from "@/lib/lusion-audio"

export const BALLOON_PALETTES = [
  "#061dfb",
  "#ADFF00",
  "#f6000e",
  "#7e09f5",
  "#ffc000",
]

interface LusionContextValue {
  isReelOpen: boolean
  openReel: () => void
  closeReel: () => void
  isMenuOpen: boolean
  setMenuOpen: (v: boolean) => void
  toggleMenu: () => void
  soundEnabled: boolean
  toggleSound: () => void
  paletteIndex: number
  cyclePalette: () => void
  accentColor: string
  scrollToContact: () => void
}

const LusionContext = createContext<LusionContextValue | null>(null)

export function LusionProvider({ children }: { children: React.ReactNode }) {
  const [isReelOpen, setIsReelOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [paletteIndex, setPaletteIndex] = useState(0)

  const openReel = useCallback(() => {
    lusionAudio.playClick(640)
    setIsReelOpen(true)
  }, [])

  const closeReel = useCallback(() => {
    lusionAudio.playClick(420)
    setIsReelOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    lusionAudio.playClick(580)
    setMenuOpen((prev) => !prev)
  }, [])

  const toggleSound = useCallback(() => {
    const next = lusionAudio.toggle()
    setSoundEnabled(next)
  }, [])

  const cyclePalette = useCallback(() => {
    lusionAudio.playClick(740)
    setPaletteIndex((prev) => (prev + 1) % BALLOON_PALETTES.length)
  }, [])

  const scrollToContact = useCallback(() => {
    lusionAudio.playClick(520)
    setMenuOpen(false)
    const el = document.getElementById("footer-section") || document.getElementById("end-section")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <LusionContext.Provider
      value={{
        isReelOpen,
        openReel,
        closeReel,
        isMenuOpen,
        setMenuOpen,
        toggleMenu,
        soundEnabled,
        toggleSound,
        paletteIndex,
        cyclePalette,
        accentColor: BALLOON_PALETTES[paletteIndex],
        scrollToContact,
      }}
    >
      {children}
    </LusionContext.Provider>
  )
}

export function useLusion() {
  const ctx = useContext(LusionContext)
  if (!ctx) {
    throw new Error("useLusion must be used inside LusionProvider")
  }
  return ctx
}
