"use client"

import React, { useState } from "react"
import { LUSION_PROJECTS } from "@/lib/lusion-data"
import { LusionProjectCard } from "./lusion-project-card"
import { LusionFooterSection } from "./lusion-footer-section"
import { lusionAudio } from "@/lib/lusion-audio"

const FILTER_CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "3d", label: "3D & WEBGL" },
  { id: "concept", label: "CONCEPT" },
  { id: "animation", label: "ANIMATION" },
]

export function LusionProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all"
      ? LUSION_PROJECTS
      : LUSION_PROJECTS.filter((p) =>
          p.tags.toLowerCase().includes(activeFilter.toLowerCase())
        )

  return (
    <div id="projects-page" className="page bg-[#f0f1fa] text-black">
      <section className="section relative pt-28 md:pt-36 px-5 md:px-12 pb-24">
        {/* Top Crosshairs */}
        <div className="flex items-center justify-between w-full mb-12 text-black/60">
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
          <span className="lusion-cross" />
        </div>

        {/* PROJECTS + Superscript 19 Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="flex items-start gap-3">
            <h1 className="font-aeonik text-6xl sm:text-8xl md:text-[124px] font-normal leading-[0.88] tracking-tight uppercase text-[#14151a]">
              PROJECTS
            </h1>
            <span className="font-mono-lusion text-2xl sm:text-4xl md:text-5xl font-medium text-[#1a2ffb] -mt-1">
              {LUSION_PROJECTS.length}
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  lusionAudio.playClick(540)
                  setActiveFilter(cat.id)
                }}
                onMouseEnter={() => lusionAudio.playHover()}
                className={`px-4 py-2 rounded-full font-mono-lusion text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-[#1a2ffb] text-white shadow-sm"
                    : "bg-white/80 hover:bg-white text-black/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Staggered Grid of All 19 Projects */}
        <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-14 md:gap-y-12">
          {filteredProjects.map((project, idx) => (
            <LusionProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* End Section + Footer + Scroll Nav to About Us */}
      <LusionFooterSection nextPagePath="/about" nextPageTitle="About Us" />
    </div>
  )
}
