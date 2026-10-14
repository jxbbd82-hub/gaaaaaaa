"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { LUSION_PROJECTS } from "@/lib/lusion-data"
import { useLusion } from "./lusion-context"
import { LusionHeroCanvas } from "./lusion-hero-canvas"
import { LusionProjectCard } from "./lusion-project-card"
import { LusionFooterSection } from "./lusion-footer-section"
import { lusionAudio } from "@/lib/lusion-audio"

function PlayReelMarqueeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="14"
      fill="none"
      viewBox="0 0 132 14"
      className="mx-6 shrink-0"
    >
      <path
        fill="currentColor"
        d="M.861 1.844a.889.889 0 0 1 1.32-.777l9.282 5.156a.89.89 0 0 1 0 1.554l-9.281 5.156a.889.889 0 0 1-1.32-.777V1.844H.861Zm16 0a.888.888 0 0 1 1.32-.777l9.282 5.156a.89.89 0 0 1 0 1.554l-9.281 5.156a.889.889 0 0 1-1.32-.777l-.001-10.312Zm16 0a.888.888 0 0 1 1.32-.777l9.282 5.156a.89.89 0 0 1 0 1.554l-9.281 5.156a.889.889 0 0 1-1.32-.777l-.001-10.312ZM61.142 1.3c.736 0 1.387.144 1.952.432.565.277.997.677 1.296 1.2.31.512.464 1.115.464 1.808 0 .693-.155 1.301-.464 1.824a3.15 3.15 0 0 1-1.312 1.216c-.555.277-1.2.416-1.936.416H58.23V12.5h-1.392V1.3h4.304ZM58.23 6.916h2.784c.736 0 1.323-.197 1.76-.592.437-.395.656-.923.656-1.584s-.219-1.184-.656-1.568c-.427-.395-1.008-.592-1.744-.592h-2.8v4.336Zm8.108 5.584V1.3h1.392v9.92h5.104v1.28h-6.496Zm7.197 0 4.272-11.2h1.648l4.256 11.2h-1.488l-1.184-3.024h-4.88L74.975 12.5h-1.44Zm3.04-4.288h4.048L78.591 2.82l-2.016 5.392Zm5.694-6.928h1.632l3.296 5.568 3.344-5.568h1.568l-4.224 7.072V12.5h-1.392V8.356l-4.224-7.072Zm19.545.016c.736 0 1.386.144 1.952.432.547.26 1.004.679 1.312 1.2.309.512.464 1.115.464 1.808 0 .779-.219 1.456-.657 2.032-.426.565-1.002.95-1.727 1.152l2.512 4.576h-1.568l-2.32-4.304h-2.864V12.5h-1.393V1.3h4.289Zm-2.896 5.616h2.784c.736 0 1.322-.197 1.76-.592.437-.395.656-.923.656-1.584 0-.65-.219-1.173-.656-1.568-.438-.395-1.019-.592-1.744-.592h-2.8v4.336Zm8.389-5.616h7.136v1.28h-5.744v3.584h4.784v1.28h-4.784v3.776h5.952v1.28h-7.344V1.3Zm8.906 0h7.136v1.28h-5.744v3.584h4.784v1.28h-4.784v3.776h5.952v1.28h-7.344V1.3Zm8.906 11.2V1.3h1.392v9.92h5.104v1.28h-6.496Z"
      />
    </svg>
  )
}

export function LusionHomePage() {
  const { openReel, accentColor, cyclePalette } = useLusion()
  const featuredProjects = LUSION_PROJECTS.filter((p) => p.featured)
  const [tunnelSpin, setTunnelSpin] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setTunnelSpin(window.scrollY * 0.08)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="home" className="page bg-[#f0f1fa] text-black">
      {/* 1. HOME HERO SECTION */}
      <section
        id="home-hero"
        className="section relative pt-24 md:pt-28 px-5 md:px-12 pb-12"
      >
        {/* Interactive 3D Physics Balloons Canvas */}
        <div
          id="home-hero-visual-container"
          className="relative w-full h-[64vh] md:h-[74vh] rounded-[24px] bg-[#e4e6ef]/70 border border-black/5 overflow-hidden shadow-inner"
        >
          <LusionHeroCanvas />

          {/* Floating Interactive Palette Hint Pill */}
          <button
            type="button"
            onClick={cyclePalette}
            className="absolute bottom-5 right-5 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-[11px] font-mono-lusion uppercase tracking-widest text-black/70 shadow-sm cursor-pointer transition-transform hover:scale-105"
          >
            <span
              className="w-2.5 h-2.5 rounded-full transition-colors"
              style={{ backgroundColor: accentColor }}
            />
            <span>CLICK BALLOONS TO SHIFT PALETTE</span>
          </button>
        </div>

        {/* Hero Statement H1 */}
        <div className="max-w-5xl ml-auto mt-8 md:mt-10">
          <h1
            id="home-hero-title"
            className="font-aeonik text-2xl sm:text-4xl md:text-[44px] font-normal leading-[1.15] tracking-tight text-[#14151a]"
          >
            We create 3D visual storytelling and interactive web experiences that
            help brands stand out
          </h1>
        </div>

        {/* Bottom Crosshairs & Scroll to Explore */}
        <div
          id="home-hero-scroll-container"
          className="mt-10 pt-4 flex items-center justify-between text-black"
        >
          <div
            id="home-hero-scroll-container-crosses"
            className="flex items-center justify-between w-full max-w-[72%] pr-8"
          >
            <span className="lusion-cross" />
            <span className="lusion-cross" />
            <span className="lusion-cross" />
            <span className="lusion-cross" />
          </div>
          <div
            id="home-hero-scroll"
            className="font-mono-lusion text-xs uppercase tracking-[0.18em] text-black/70 shrink-0"
          >
            scroll to explore
          </div>
        </div>
      </section>

      {/* 2. HOME REEL SECTION: Bold Ideas, Brought to Life */}
      <section
        id="home-reel"
        className="section relative px-5 md:px-12 py-20 md:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <h4
            id="home-reel-title"
            className="lg:col-span-6 font-aeonik text-5xl sm:text-7xl md:text-[88px] font-normal leading-[0.96] tracking-tight text-[#14151a]"
          >
            <div id="home-reel-title-inner">
              <div id="home-reel-title-line-1">Bold Ideas,</div>
              <div id="home-reel-title-line-2">Brought to Life</div>
            </div>
          </h4>

          <div
            id="home-reel-content"
            className="lg:col-span-6 lg:pl-8 flex flex-col items-start justify-between gap-8 pt-2"
          >
            <h2
              id="home-reel-desc"
              className="font-aeonik text-lg md:text-2xl font-normal leading-relaxed text-[#2b2e3a]"
            >
              We combine design, motion, 3D, and development to create digital
              experiences that feel visually striking and technically seamless.
              From campaign launches to immersive brand worlds, we build work
              that captures attention and invites interaction.
            </h2>

            <Link
              id="home-reel-cta"
              href="/about"
              onMouseEnter={() => lusionAudio.playHover()}
              onClick={() => lusionAudio.playClick(560)}
              className="group inline-flex items-center gap-4 px-7 py-4 rounded-full bg-white hover:bg-[#1a2ffb] text-black hover:text-white shadow-sm transition-all duration-300 font-aeonik text-xs md:text-sm uppercase tracking-[0.12em] font-medium"
            >
              <span
                id="home-reel-cta-dot"
                className="w-2 h-2 rounded-full bg-black group-hover:bg-[#c1ff00] transition-colors"
              />
              <span id="home-reel-cta-text">OUR APPROACH</span>
              <span
                id="home-reel-cta-arrow"
                className="w-7 h-7 rounded-full bg-[#f0f1fa] group-hover:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Interactive Showreel Video Frame */}
        <div id="home-reel-container" className="w-full">
          <div id="home-reel-container-inner" className="w-full">
            <div
              id="home-reel-video-container"
              onClick={openReel}
              onMouseEnter={() => lusionAudio.playHover()}
              className="group relative w-full rounded-[28px] bg-[#e4e6ef] p-4 md:p-6 cursor-pointer overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Top Decoration Bar: Crosshairs + >>> PLAY REEL Marquee */}
              <div
                id="home-reel-video-container-top"
                className="flex flex-col gap-3 mb-4 text-black/70"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                </div>
                <div className="overflow-hidden py-1 border-y border-black/10">
                  <div className="animate-marquee-fast flex items-center">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <PlayReelMarqueeSvg key={idx} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Video Viewport */}
              <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-black">
                <video
                  src="https://lusion.co/assets/textures/reel/desktop.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Play Reel Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <button
                    id="home-reel-video-watch-btn"
                    type="button"
                    aria-label="Watch reel button"
                    className="flex items-center gap-4 px-8 py-5 rounded-full bg-white/95 group-hover:bg-[#1a2ffb] text-black group-hover:text-white shadow-2xl transition-all duration-300 group-hover:scale-110 cursor-pointer"
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 36 36">
                      <path
                        fill="currentColor"
                        d="M7 7.29c0-1.5 1.59-2.466 2.92-1.776l20.656 10.71c1.439.747 1.439 2.805 0 3.552L9.92 30.486C8.589 31.176 7 30.21 7 28.71V7.29Z"
                      />
                    </svg>
                    <span
                      id="home-reel-video-title"
                      className="font-aeonik text-lg md:text-xl font-medium tracking-tight"
                    >
                      Play Reel
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Decoration Bar: >>> PLAY REEL Marquee + Crosshairs */}
              <div
                id="home-reel-video-container-bottom"
                className="flex flex-col gap-3 mt-4 text-black/70"
              >
                <div className="overflow-hidden py-1 border-y border-black/10">
                  <div className="animate-marquee-right flex items-center">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <PlayReelMarqueeSvg key={idx} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                  <span className="lusion-cross" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOME FEATURED WORK SECTION (12 Projects) */}
      <section
        id="home-featured"
        className="section relative px-5 md:px-12 py-20 md:py-32"
      >
        <div
          id="home-featured-title-top"
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div id="home-featured-title-wrapper">
            <h4
              id="home-featured-title"
              className="font-aeonik text-6xl sm:text-8xl md:text-[112px] font-normal leading-[0.92] tracking-tight text-[#14151a]"
            >
              Featured
              <br />
              Work
            </h4>
          </div>

          <div
            id="home-featured-disclaimer"
            className="max-w-md font-aeonik text-lg md:text-xl text-[#2b2e3a] leading-relaxed pb-2"
          >
            A selection of immersive digital experiences created for ambitious
            brands and forward thinking teams.
          </div>
        </div>

        {/* 2-Column Staggered Grid of 12 Featured Projects */}
        <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-14 md:gap-y-12">
          {featuredProjects.map((project, idx) => (
            <LusionProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* See All Projects Pill CTA */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <Link
            id="home-featured-cta"
            href="/projects"
            onMouseEnter={() => lusionAudio.playHover()}
            onClick={() => lusionAudio.playClick(580)}
            className="group inline-flex items-center gap-5 px-9 py-5 rounded-full bg-white hover:bg-[#1a2ffb] text-black hover:text-white shadow-md hover:shadow-xl transition-all duration-300 font-aeonik text-sm md:text-base uppercase tracking-[0.14em] font-medium"
          >
            <span
              id="home-featured-cta-dot"
              className="w-2.5 h-2.5 rounded-full bg-black group-hover:bg-[#c1ff00] transition-colors"
            />
            <span id="home-featured-cta-text">SEE ALL PROJECTS</span>
            <span
              id="home-featured-cta-arrow"
              className="w-8 h-8 rounded-full bg-[#f0f1fa] group-hover:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* 4. HOME GOAL / 3D TUNNEL SECTION */}
      <section
        id="home-goal"
        className="section relative px-5 md:px-12 py-24 md:py-36 bg-[#0a0b10] text-white rounded-t-[36px] overflow-hidden"
      >
        {/* Top Context: Where Creative Ideas Become Immersive Experiences */}
        <div
          id="home-goal-context"
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-24 border-b border-white/10"
        >
          <div className="lg:col-span-6">
            <div
              id="home-goal-title"
              className="font-aeonik text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.02] tracking-tight"
            >
              Where Creative Ideas Become Immersive Experiences
            </div>
          </div>

          <div
            id="home-goal-texts"
            className="lg:col-span-6 flex flex-col gap-6 font-aeonik text-lg md:text-xl text-white/75 leading-relaxed"
          >
            <div className="home-goal-texts-paragraph">
              We do not chase trends or produce work that looks like everyone
              else. We focus on creating visually distinctive digital
              experiences that reflect your brand, engage your audience, and
              make people remember what they saw.
            </div>
            <div className="home-goal-texts-paragraph">
              Our process blends creative direction, 3D craft, and interactive
              development to build tailored digital journeys that feel original,
              polished, and built for impact.
            </div>
          </div>
        </div>

        {/* Bottom 3D Astronaut / Portal Tunnel Showcase */}
        <div className="relative max-w-7xl mx-auto pt-24 pb-12 flex flex-col items-center">
          {/* Interactive 3D Portal Ring Visual */}
          <div className="relative w-full max-w-4xl aspect-[16/10] rounded-[32px] overflow-hidden border border-white/15 bg-gradient-to-b from-[#1a2ffb]/30 via-[#0a0b10] to-[#8832f7]/25 flex items-center justify-center shadow-2xl mb-16">
            {/* Concentric Tunnel Rings */}
            <div
              className="absolute w-[520px] h-[520px] rounded-full border border-white/15 pointer-events-none"
              style={{ transform: `rotate(${tunnelSpin}deg) scale(1.15)` }}
            />
            <div
              className="absolute w-[380px] h-[380px] rounded-full border border-[#c1ff00]/30 border-dashed pointer-events-none"
              style={{ transform: `rotate(${-tunnelSpin * 1.4}deg)` }}
            />
            <div
              className="absolute w-[240px] h-[240px] rounded-full border border-[#1a2ffb]/50 pointer-events-none"
              style={{ transform: `rotate(${tunnelSpin * 2}deg)` }}
            />

            {/* Live Lusion Tunnel Backdrop Image */}
            <img
              src="https://lusion.co/assets/textures/tunnels/earth_landscape.jpg"
              alt="Step into a new world"
              className="w-full h-full object-cover opacity-85 mix-blend-screen hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between font-mono-lusion text-[11px] uppercase tracking-[0.22em] text-white/70">
              <span>PORTAL // 001</span>
              <span>INTERACTIVE WORLD</span>
            </div>
          </div>

          {/* Split Kinetic Tunnel Title */}
          <div
            id="home-goal-tunnel-title"
            className="w-full font-aeonik text-4xl sm:text-6xl md:text-8xl font-normal leading-[1.04] tracking-tight uppercase text-center flex flex-col gap-2"
          >
            <div className="home-goal-tunnel-title-line flex justify-between items-center border-b border-white/10 pb-3">
              <span>Step</span>
              <span className="text-[#c1ff00]">into</span>
              <span>a</span>
              <span>new</span>
              <span>world</span>
            </div>
            <div className="home-goal-tunnel-title-line flex justify-around items-center border-b border-white/10 py-3 text-white/80">
              <span>and</span>
              <span>let</span>
              <span>your</span>
            </div>
            <div className="home-goal-tunnel-title-line flex justify-between items-center pt-3">
              <span className="text-[#1a2ffb]">imagination</span>
              <span>run</span>
              <span className="italic">wild</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. END SECTION + FOOTER + NEXT PAGE SCROLL NAV */}
      <LusionFooterSection nextPagePath="/about" nextPageTitle="About Us" />
    </div>
  )
}
