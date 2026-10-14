"use client"

import React, { useState } from "react"
import Link from "next/link"
import { LusionProject } from "@/lib/lusion-data"
import { lusionAudio } from "@/lib/lusion-audio"

export function LusionProjectCard({
  project,
  index,
}: {
  project: LusionProject
  index: number
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -ny * 7, ry: nx * 7 })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      data-id={project.id}
      onMouseEnter={() => {
        setIsHovered(true)
        lusionAudio.playHover()
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => lusionAudio.playClick(560)}
      className={`project-item group block select-none ${
        index % 2 === 1 ? "md:mt-16" : ""
      }`}
    >
      {/* Thumbnail Card Frame */}
      <div
        className="project-item-main relative aspect-[16/11] w-full rounded-[22px] overflow-hidden shadow-sm transition-shadow duration-500 group-hover:shadow-2xl"
        style={{
          backgroundColor: project.colorBg,
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.015, 1.015, 1)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 120ms ease-out, box-shadow 400ms ease"
            : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 400ms ease",
        }}
      >
        <img
          src={project.thumb}
          alt={project.title}
          loading={index < 4 ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle interactive color glaze on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${project.colorHighlight}, transparent 70%)`,
          }}
        />
      </div>

      {/* Footer Metadata */}
      <div className="project-item-footer pt-4 px-1">
        <div className="project-item-line-1 font-mono-lusion text-[11px] md:text-xs uppercase tracking-[0.08em] text-[#2b2e3a]/70 mb-1.5">
          {project.tags}
        </div>
        <div className="project-item-line-2 flex items-center gap-2.5">
          <span
            className="inline-flex items-center justify-center w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-black"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.515 12h16.97m0 0L13.01 4.525M20.485 12l-7.475 7.476"
              />
            </svg>
          </span>
          <div className="project-item-line-2-inner font-aeonik text-2xl md:text-3xl font-medium tracking-tight text-black">
            {project.title}
          </div>
        </div>
      </div>
    </Link>
  )
}
