"use client"

import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import {
  TEAM_MEMBERS,
  CLIENT_LOGOS,
  AWARDS_LIST,
  ARTICLES_LIST,
  TALKS_LIST,
  CAPABILITY_CARDS,
} from "@/lib/lusion-data"
import { LusionFooterSection } from "./lusion-footer-section"
import { lusionAudio } from "@/lib/lusion-audio"

function TeamDotMatrixCanvas({ activeIndex }: { activeIndex: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const indexRef = useRef(activeIndex)

  useEffect(() => {
    indexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth || 400
    let height = container.clientHeight || 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100)
    camera.position.set(0, 0, 7.5)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    container.innerHTML = ""
    container.appendChild(renderer.domElement)

    // Create 3D Point-Cloud Portrait Sculpture
    const gridSize = 26
    const count = gridSize * gridSize
    const positions = new Float32Array(count * 3)
    const basePositions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    let ptr = 0
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const nx = (x / (gridSize - 1) - 0.5) * 3.8
        const ny = (y / (gridSize - 1) - 0.5) * 3.8
        const r = Math.sqrt(nx * nx + ny * ny)
        const nz = Math.cos(r * 1.4) * 0.85

        positions[ptr * 3] = nx
        positions[ptr * 3 + 1] = ny
        positions[ptr * 3 + 2] = nz

        basePositions[ptr * 3] = nx
        basePositions[ptr * 3 + 1] = ny
        basePositions[ptr * 3 + 2] = nz

        colors[ptr * 3] = 1
        colors[ptr * 3 + 1] = 1
        colors[ptr * 3 + 2] = 1
        ptr++
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.095,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const paletteColors = [
      new THREE.Color("#1a2ffb"),
      new THREE.Color("#c1ff00"),
      new THREE.Color("#8832f7"),
      new THREE.Color("#ff4c41"),
      new THREE.Color("#00e5ff"),
      new THREE.Color("#ffaa00"),
      new THREE.Color("#ff66cc"),
    ]

    let rafId: number
    let time = 0

    const animate = () => {
      time += 0.025
      const idx = indexRef.current
      const accent = paletteColors[idx % paletteColors.length]
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute
      const colAttr = geometry.getAttribute("color") as THREE.BufferAttribute

      for (let i = 0; i < count; i++) {
        const bx = basePositions[i * 3]
        const by = basePositions[i * 3 + 1]
        const dist = Math.sqrt(bx * bx + by * by)

        // Unique morphing wave signature per team member
        const wave =
          Math.sin(bx * (1.8 + idx * 0.35) + time) *
          Math.cos(by * (1.6 + idx * 0.25) - time * 0.8) *
          0.65
        const mask = Math.max(0, 1 - dist / 2.2)
        const z = mask * (1.1 + wave)

        posAttr.setXYZ(i, bx, by, z)

        const mixRatio = Math.min(1, Math.max(0, (z + 0.3) / 1.4))
        colAttr.setXYZ(
          i,
          THREE.MathUtils.lerp(0.35, accent.r, mixRatio),
          THREE.MathUtils.lerp(0.38, accent.g, mixRatio),
          THREE.MathUtils.lerp(0.45, accent.b, mixRatio)
        )
      }

      posAttr.needsUpdate = true
      colAttr.needsUpdate = true

      points.rotation.y = Math.sin(time * 0.4) * 0.32
      points.rotation.x = Math.cos(time * 0.3) * 0.16

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    const onResize = () => {
      if (!container) return
      width = container.clientWidth || 400
      height = container.clientHeight || 400
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

export function LusionAboutPage() {
  const [teamIndex, setTeamIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({})

  const currentMember = TEAM_MEMBERS[teamIndex]

  const prevMember = () => {
    lusionAudio.playClick(480)
    setTeamIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length)
  }

  const nextMember = () => {
    lusionAudio.playClick(620)
    setTeamIndex((prev) => (prev + 1) % TEAM_MEMBERS.length)
  }

  const toggleCardFlip = (idx: number) => {
    lusionAudio.playClick(540)
    setFlippedCards((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <div id="about" className="page bg-[#0c0d12] text-white">
      {/* 1. ABOUT WHO SECTION: WE ARE A CREATIVE PRODUCTION STUDIO + TEAM CAROUSEL */}
      <section
        id="about-who"
        className="section relative pt-28 md:pt-36 px-5 md:px-14 pb-24 overflow-hidden"
      >
        {/* Atmospheric Mountain/Figure Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, rgba(26, 47, 251, 0.35), rgba(12, 13, 18, 0.95) 70%)",
          }}
        />

        {/* Top Crosshairs */}
        <div
          id="about-crosses"
          className="relative z-10 flex items-center justify-between w-full mb-12 text-white/50"
        >
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
        </div>

        {/* Subsection 1: WE ARE A CREATIVE PRODUCTION STUDIO CRAFTING UNIQUE DIGITAL EXPERIENCES */}
        <div
          id="about-who-subsection-we-are"
          className="relative z-10 max-w-7xl mx-auto py-12 md:py-20"
        >
          <div className="flex items-center justify-between mb-6 font-mono-lusion text-xs uppercase tracking-[0.22em] text-white/60">
            <span>SCROLL TO EXPLORE</span>
            <span>STUDIO MANIFESTO</span>
          </div>

          <div
            id="about-who-title-main"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
          >
            <div className="lg:col-span-4 font-aeonik text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.94] text-[#c1ff00]">
              WE ARE
            </div>
            <div className="lg:col-span-8 font-aeonik text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[0.98] uppercase">
              <div>A CREATIVE</div>
              <div>PRODUCTION STUDIO</div>
              <div className="text-white/75">CRAFTING UNIQUE</div>
              <div className="text-[#1a2ffb]">DIGITAL EXPERIENCES</div>
            </div>
          </div>
        </div>

        {/* Subsection 2: Worldwide Team Statement */}
        <div
          id="about-who-subsection-details"
          className="relative z-10 max-w-6xl mx-auto py-16 md:py-24 border-y border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div
            id="about-who-desc-top"
            className="font-aeonik text-2xl md:text-4xl leading-snug text-white"
          >
            A worldwide team of{" "}
            <span className="underline decoration-[#c1ff00] underline-offset-8">
              specialists in design, motion, 3D, and technology
            </span>
          </div>
          <div
            id="about-who-desc-bottom"
            className="font-aeonik text-2xl md:text-4xl leading-snug text-white/75"
          >
            working together to{" "}
            <span className="text-white font-medium">
              turn ambitious ideas into immersive digital experiences.
            </span>
          </div>
        </div>

        {/* Subsection 3: Interactive 7-Member Team Carousel */}
        <div
          id="about-who-subsection-team"
          className="relative z-10 max-w-7xl mx-auto pt-20 md:pt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#13151f] rounded-[32px] p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl">
            {/* Left Column: [[ 001 ]], Member Name, Role, Progress Indicator & Controls */}
            <div
              id="about-who-team-left"
              className="lg:col-span-4 flex flex-col justify-between gap-10"
            >
              {/* [[ 001 ]] Counter */}
              <div
                id="about-who-team-number"
                className="flex items-center gap-3 font-mono-lusion text-lg md:text-xl tracking-widest text-[#c1ff00]"
              >
                <span id="about-who-team-number-left">[[</span>
                <span
                  id="about-who-team-number-center-item"
                  className="font-medium tabular-nums"
                >
                  {currentMember.number}
                </span>
                <span id="about-who-team-number-right">]]</span>
                <span className="text-xs text-white/40 ml-2">
                  / 00{TEAM_MEMBERS.length}
                </span>
              </div>

              {/* Member Name & Role */}
              <div id="about-who-team-info" className="space-y-4">
                <div
                  id="about-who-team-name"
                  className="flex items-center gap-3"
                >
                  <svg
                    id="about-who-team-name-icon"
                    viewBox="0 0 16 16"
                    width="18"
                    height="18"
                    fill="none"
                  >
                    <path
                      fill="#c1ff00"
                      d="M3 3h3v3H3V3ZM10 3h3v3h-3V3ZM3 10h3v3H3v-3ZM10 10h3v3h-3v-3Z"
                    />
                  </svg>
                  <div
                    id="about-who-team-name-text"
                    className="font-aeonik text-3xl md:text-4xl font-medium tracking-tight"
                  >
                    {currentMember.name}
                  </div>
                </div>

                <div
                  id="about-who-team-job"
                  className="font-mono-lusion text-sm md:text-base uppercase tracking-widest text-white/65 whitespace-pre-line pl-7"
                >
                  {currentMember.role}
                </div>
              </div>

              {/* Progress Bar & Prev/Next Buttons */}
              <div className="space-y-5">
                <div
                  id="about-who-team-progress"
                  className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"
                >
                  <div
                    id="about-who-team-indicator-inner"
                    className="h-full bg-[#1a2ffb] transition-all duration-300"
                    style={{
                      width: `${((teamIndex + 1) / TEAM_MEMBERS.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevMember}
                      aria-label="Previous team member"
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#1a2ffb] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 36 36">
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M33.75 18H2.25m0 0 12.387 12.75M2.25 18 14.637 5.25"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={nextMember}
                      aria-label="Next team member"
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#1a2ffb] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 36 36"
                        className="rotate-180"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M33.75 18H2.25m0 0 12.387 12.75M2.25 18 14.637 5.25"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Quick Member Dots */}
                  <div className="flex items-center gap-1.5">
                    {TEAM_MEMBERS.map((m, idx) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          lusionAudio.playClick(550)
                          setTeamIndex(idx)
                        }}
                        aria-label={`Select ${m.name}`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === teamIndex
                            ? "w-6 bg-[#c1ff00]"
                            : "w-2 bg-white/25 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  id="about-who-team-left-mobile-tips-text"
                  className="font-mono-lusion text-[11px] uppercase tracking-[0.2em] text-white/40"
                >
                  Swipe or click arrows to change
                </div>
              </div>
            </div>

            {/* Center Column: Interactive 3D Dot-Matrix Portrait + Large Initial */}
            <div
              onClick={nextMember}
              className="lg:col-span-4 relative aspect-square w-full rounded-[24px] bg-[#0a0b10] border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer group"
            >
              <TeamDotMatrixCanvas activeIndex={teamIndex} />
              <div
                id="about-who-team-letter-container"
                className="absolute bottom-4 right-5 font-mono-lusion text-6xl font-bold text-white/15 group-hover:text-[#c1ff00]/40 transition-colors select-none pointer-events-none"
              >
                {currentMember.letter}
              </div>
            </div>

            {/* Right Column: TEAM SVG Header + Description */}
            <div
              id="about-who-team-right"
              className="lg:col-span-4 flex flex-col justify-between gap-8"
            >
              <svg
                id="about-who-team-title"
                xmlns="http://www.w3.org/2000/svg"
                width="260"
                height="46"
                fill="none"
                viewBox="0 0 311 56"
                className="w-48 md:w-64 h-auto"
              >
                <path
                  fill="#fff"
                  d="M0 0h43.28v6.4H25.12V56h-6.96V6.4H0V0Zm85.906 0h35.68v6.4h-28.72v17.92h23.92v6.4h-23.92V49.6h29.76V56h-36.72V0Zm75.171 56 21.36-56h8.24l21.28 56h-7.44l-5.92-15.12h-24.4L168.277 56h-7.2Zm15.2-21.44h20.24L186.357 7.6l-10.08 26.96ZM253.493 0h8.8l19.84 46.48L301.733 0h8.64v56h-6.8V11.84L285.013 56h-6.16l-18.56-44.16V56h-6.8V0Z"
                />
              </svg>

              <div id="about-who-team-desc" className="relative">
                <p
                  id="about-who-team-desc-text"
                  className="font-aeonik text-lg md:text-xl leading-relaxed text-white/75"
                >
                  We combine different disciplines into one creative production
                  process, allowing ideas to move from concept to execution with
                  clarity and craft. The result is digital work that feels
                  distinctive, technically refined, and built to make a lasting
                  impact.
                </p>
                <span
                  id="about-who-team-square"
                  className="inline-block w-3 h-3 bg-[#c1ff00] mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CLIENTS SECTION: BRANDS WE WORK WITH (3 Marquee Rows) */}
      <section
        id="about-clients"
        className="section relative py-24 md:py-32 border-t border-white/10 overflow-hidden"
      >
        <div
          id="about-clients-header"
          className="px-5 md:px-14 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div
            id="about-clients-title"
            className="font-aeonik text-4xl sm:text-6xl font-medium tracking-tight"
          >
            BRANDS WE WORK WITH
          </div>
          <div
            id="about-clients-desc"
            className="max-w-md font-aeonik text-lg text-white/65"
          >
            Trusted by global brands, cultural institutions, and forward
            thinking teams.
          </div>
        </div>

        <div id="about-clients-carousel" className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="overflow-hidden py-5 border-y border-white/10 bg-white/[0.02]">
            <div className="animate-marquee-left flex items-center gap-16 md:gap-24 px-8">
              {[...CLIENT_LOGOS.row1, ...CLIENT_LOGOS.row1, ...CLIENT_LOGOS.row1].map(
                (logo, idx) => (
                  <img
                    key={`r1-${idx}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-9 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity shrink-0 invert brightness-200"
                  />
                )
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden py-5 border-b border-white/10">
            <div className="animate-marquee-right flex items-center gap-16 md:gap-24 px-8">
              {[...CLIENT_LOGOS.row2, ...CLIENT_LOGOS.row2, ...CLIENT_LOGOS.row2].map(
                (logo, idx) => (
                  <img
                    key={`r2-${idx}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-9 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity shrink-0 invert brightness-200"
                  />
                )
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden py-5 border-b border-white/10 bg-white/[0.02]">
            <div className="animate-marquee-left flex items-center gap-16 md:gap-24 px-8">
              {[...CLIENT_LOGOS.row3, ...CLIENT_LOGOS.row3, ...CLIENT_LOGOS.row3].map(
                (logo, idx) => (
                  <img
                    key={`r3-${idx}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-9 md:h-12 w-auto opacity-75 hover:opacity-100 transition-opacity shrink-0 invert brightness-200"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT AWARDS, ARTICLES & TALKS SECTION */}
      <section
        id="about-award"
        className="section relative px-5 md:px-14 py-24 md:py-36 max-w-7xl mx-auto"
      >
        {/* Background Giant Vector Text Title */}
        <div className="mb-20">
          <div className="font-mono-lusion text-xs uppercase tracking-[0.22em] text-[#c1ff00] mb-3">
            RECOGNITION & HONORS
          </div>
          <h2 className="font-aeonik text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.95]">
            AWARD WINNING
            <br />
            <span className="text-white/50">MULTIDISCIPLINARY</span>
            <br />
            CREATIVE STUDIO
          </h2>
        </div>

        {/* Category 1: Awards (58) */}
        <div className="about-award-category award-category-awards mb-24">
          <div className="about-award-header flex items-center justify-between pb-6 mb-8 border-b border-white/20">
            <h5 className="about-award-header-title font-aeonik text-3xl md:text-5xl font-medium">
              Awards
            </h5>
            <div className="about-award-header-number flex items-center gap-3">
              <svg width="32" height="33" fill="none" viewBox="0 0 36 37">
                <path
                  fill="#c1ff00"
                  d="M15.189 1.678a3.976 3.976 0 0 1 6.624 3.939L18 18.514 14.187 5.617a3.976 3.976 0 0 1 1.002-3.939ZM27.916 4.621a3.976 3.976 0 0 1 1.9 7.47L18 18.513l6.423-11.816a3.976 3.976 0 0 1 3.494-2.077ZM34.836 15.702a3.976 3.976 0 0 1-3.94 6.624L18 18.514 30.897 14.7a3.976 3.976 0 0 1 3.939 1.001ZM31.892 28.43a3.976 3.976 0 0 1-7.469 1.9L18 18.513l11.816 6.423a3.976 3.976 0 0 1 2.076 3.493ZM20.811 35.35a3.976 3.976 0 0 1-6.624-3.94L18 18.514l3.813 12.896a3.976 3.976 0 0 1-1.002 3.94ZM8.083 32.406a3.976 3.976 0 0 1-1.899-7.469L18 18.514l-6.423 11.815a3.976 3.976 0 0 1-3.494 2.077ZM1.165 21.325a3.976 3.976 0 0 1 3.938-6.624L18 18.514 5.103 22.327a3.976 3.976 0 0 1-3.938-1.002ZM4.108 8.597a3.976 3.976 0 0 1 7.469-1.899L18 18.514 6.184 12.09a3.976 3.976 0 0 1-2.076-3.493Z"
                />
              </svg>
              <p className="font-mono-lusion text-3xl md:text-5xl font-medium">
                58
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {AWARDS_LIST.map((group) => (
              <div key={group.org} className="py-6 space-y-3">
                {group.items.map((item, idx) => (
                  <div
                    key={`${group.org}-${item.title}`}
                    className="grid grid-cols-12 items-center font-aeonik text-lg md:text-2xl"
                  >
                    <p className="col-span-5 md:col-span-4 font-medium text-white">
                      {idx === 0 ? group.org : ""}
                    </p>
                    <p className="col-span-2 font-mono-lusion text-sm md:text-base text-[#c1ff00]">
                      {item.count}
                    </p>
                    <p className="col-span-5 md:col-span-6 text-white/75 text-right md:text-left">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Category 2 & 3: Articles (03) & Talks (5) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Articles */}
          <div className="about-award-category award-category-articles">
            <div className="about-award-header flex items-center justify-between pb-6 mb-6 border-b border-white/20">
              <h5 className="font-aeonik text-3xl md:text-4xl font-medium">
                Articles
              </h5>
              <div className="flex items-center gap-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 36 37">
                  <path
                    fill="#1a2ffb"
                    d="M0 18.277c0-.663.456-1.236 1.092-1.426A22.73 22.73 0 0 0 16.337 1.605C16.527.97 17.1.514 17.764.514h.472c.664 0 1.237.455 1.427 1.091a22.73 22.73 0 0 0 15.245 15.246c.636.19 1.092.763 1.092 1.427v.472c0 .663-.456 1.237-1.092 1.426a22.73 22.73 0 0 0-15.245 15.246c-.19.636-.763 1.092-1.427 1.092h-.472c-.664 0-1.237-.456-1.427-1.092A22.73 22.73 0 0 0 1.092 20.176C.456 19.986 0 19.414 0 18.75v-.473Z"
                  />
                </svg>
                <p className="font-mono-lusion text-3xl font-medium">03</p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {ARTICLES_LIST.map((art) => (
                <a
                  key={art.title}
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => lusionAudio.playHover()}
                  className="group flex items-center justify-between py-5 font-aeonik text-xl md:text-2xl text-white/85 hover:text-[#c1ff00] transition-colors"
                >
                  <span>{art.title}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="shrink-0 ml-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.3 15.586a.75.75 0 1 1-1.06-1.06L12.418 3.347H4.261a.75.75 0 1 1 0-1.5h10.715v10.715a.75.75 0 1 1-1.5 0V4.41L2.3 15.586Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Talks */}
          <div className="about-award-category award-category-talks">
            <div className="about-award-header flex items-center justify-between pb-6 mb-6 border-b border-white/20">
              <h5 className="font-aeonik text-3xl md:text-4xl font-medium">
                Talks
              </h5>
              <div className="flex items-center gap-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 36 37">
                  <path
                    fill="#8832f7"
                    fillRule="evenodd"
                    d="M0 5.07a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm13.5 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm18-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM0 18.57a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm18-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm9 4.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-22.5 9a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm9 4.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm18-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-mono-lusion text-3xl font-medium">5</p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {TALKS_LIST.map((talk, idx) => (
                <div
                  key={`${talk.event}-${idx}`}
                  className="flex items-center justify-between py-5 font-aeonik text-xl md:text-2xl"
                >
                  <span className="text-white/90">{talk.event}</span>
                  <span className="font-mono-lusion text-sm text-white/50">
                    {talk.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT CAPABILITY SECTION: AREA OF EXPERTISE (4 Interactive 3D Flip Cards) */}
      <section
        id="about-capability"
        className="section relative px-5 md:px-14 py-24 md:py-36 bg-[#f0f1fa] text-black rounded-t-[36px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div
              id="about-capability-title"
              className="font-aeonik text-5xl sm:text-7xl md:text-8xl font-medium leading-[0.94] tracking-tight"
            >
              <div id="about-capability-title-line-1">AREA OF</div>
              <div id="about-capability-title-line-2">EXPERTISE</div>
            </div>

            <div id="about-capability-subheader" className="max-w-md space-y-5">
              <div
                id="about-capability-subheader-text"
                className="font-aeonik text-lg md:text-xl text-[#2b2e3a]"
              >
                Multidisciplinary expertise across strategy, creative,
                technology, and production.
              </div>
              <div
                id="about-capability-subheader-cards"
                className="flex items-center gap-2"
              >
                {CAPABILITY_CARDS.map((c, idx) => (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => toggleCardFlip(idx)}
                    className="w-10 h-10 rounded-lg bg-white border border-black/10 font-lusion-badge text-lg flex items-center justify-center shadow-sm hover:bg-[#1a2ffb] hover:text-white transition-colors cursor-pointer"
                  >
                    {c.topBadge}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Capability Playing Cards with 3D Flip Interaction */}
          <div
            id="about-capability-cards"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CAPABILITY_CARDS.map((card, idx) => {
              const isFlipped = !!flippedCards[idx]
              return (
                <div
                  key={card.title}
                  onClick={() => toggleCardFlip(idx)}
                  onMouseEnter={() => lusionAudio.playHover()}
                  className="about-capability-card group relative h-[440px] perspective-1000 cursor-pointer select-none"
                >
                  <div
                    className={`w-full h-full relative preserve-3d transition-transform duration-700 ${
                      isFlipped ? "rotate-y-180" : "group-hover:-translate-y-2"
                    }`}
                  >
                    {/* Front of Playing Card */}
                    <div className="about-capability-card-front absolute inset-0 backface-hidden rounded-[24px] bg-white p-7 flex flex-col justify-between border border-black/8 shadow-md group-hover:shadow-xl">
                      {/* Top Header */}
                      <div className="about-capability-card-header flex items-center justify-between">
                        <p className="font-aeonik text-2xl font-medium text-black">
                          {card.title}
                        </p>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-lusion-badge text-lg text-white"
                          style={{ backgroundColor: card.color }}
                        >
                          {card.badge}
                        </div>
                      </div>

                      {/* Bullet List */}
                      <ul className="about-capability-list space-y-2.5 my-auto py-6 border-y border-black/10">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="about-capability-list-item flex items-center gap-2.5 font-aeonik text-base text-[#2b2e3a]"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: card.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Mirrored Bottom Header */}
                      <div className="about-capability-card-header flex items-center justify-between opacity-50">
                        <p className="font-aeonik text-lg font-medium">
                          {card.title}
                        </p>
                        <div className="font-mono-lusion text-xs uppercase tracking-widest">
                          CLICK TO FLIP ↻
                        </div>
                      </div>
                    </div>

                    {/* Back of Playing Card */}
                    <div
                      className="about-capability-card-back absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] p-7 flex flex-col justify-between text-white shadow-2xl"
                      style={{ backgroundColor: "#11131a" }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono-lusion text-xs uppercase tracking-widest text-white/50">
                          LUSION // 0{idx + 1}
                        </span>
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: card.color }}
                        />
                      </div>

                      <div className="my-auto text-center space-y-4">
                        <div
                          className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center font-lusion-badge text-4xl text-black font-bold"
                          style={{ backgroundColor: card.color }}
                        >
                          {card.badge}
                        </div>
                        <div className="font-aeonik text-3xl font-medium">
                          {card.title}
                        </div>
                        <p className="font-aeonik text-sm text-white/65 leading-relaxed">
                          End-to-end {card.title.toLowerCase()} craft tailored for
                          interactive web and 3D digital experiences.
                        </p>
                      </div>

                      <div className="flex items-center justify-between font-mono-lusion text-xs text-white/50">
                        <span>LUSION STUDIO</span>
                        <span>FLIP BACK ↺</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. END SECTION + FOOTER + NEXT PAGE SCROLL NAV (Our Projects) */}
      <LusionFooterSection nextPagePath="/projects" nextPageTitle="Our Projects" />
    </div>
  )
}
