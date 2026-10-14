"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LusionProject, LUSION_PROJECTS } from "@/lib/lusion-data"
import { LusionFooterSection } from "./lusion-footer-section"
import { lusionAudio } from "@/lib/lusion-audio"

export function LusionProjectDetailPage({
  project,
}: {
  project: LusionProject
}) {
  const router = useRouter()

  const nextProject =
    LUSION_PROJECTS.find((p) => p.id === project.nextId) ||
    LUSION_PROJECTS[
      (LUSION_PROJECTS.findIndex((p) => p.id === project.id) + 1) %
        LUSION_PROJECTS.length
    ]

  return (
    <div id="project" className="page">
      <div
        id="project-details"
        style={{
          backgroundColor: project.colorBg,
          color: project.colorText,
        }}
        className="section relative min-h-screen pt-28 md:pt-36 pb-24 transition-colors duration-500"
      >
        {/* Top Metadata & Case Study Header */}
        <div className="px-5 md:px-14 max-w-7xl mx-auto">
          {/* Scroll to explore badge */}
          <div
            id="project-details-header-info"
            className="flex items-center justify-between pb-8 mb-12 border-b border-current/15 font-mono-lusion text-xs uppercase tracking-[0.22em] opacity-75"
          >
            <div className="flex items-center gap-2">
              <span>scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4855 8.36453L8.65707 5.53612C8.26655 5.14559 8.26655 4.51243 8.65707 4.1219C9.04759 3.73138 9.68076 3.73138 10.0713 4.1219L13.596 7.64661C13.9585 8.00898 13.9935 8.55734 13.7119 8.94816L10.0714 12.6071C9.68083 12.9976 9.04766 12.9976 8.65714 12.6071C8.26661 12.2166 8.26661 11.5834 8.65714 11.1929L11.4855 8.36453Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.48548 8.36477L2.65707 5.53636C2.26655 5.14584 2.26655 4.51267 2.65707 4.12215C3.04759 3.73162 3.68076 3.73162 4.07128 4.12215L7.596 7.64686C7.95852 8.00922 7.99354 8.55759 7.71193 8.9484L4.07135 12.6073C3.68083 12.9979 3.04766 12.9979 2.65714 12.6073C2.26661 12.2168 2.26661 11.5836 2.65714 11.1931L5.48548 8.36477Z"
                />
              </svg>
            </div>
            <div>{project.tags}</div>
          </div>

          {/* Project Title + Description + Services + Links */}
          <div id="project-details-meta" className="mb-20">
            <h1
              id="project-details-title"
              className="font-aeonik text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-medium leading-[0.94] tracking-tight mb-12"
            >
              {project.title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left 7 Cols: Description Paragraphs + Launch Project CTA */}
              <div id="project-details-left" className="lg:col-span-7 space-y-6">
                <div
                  id="project-details-desc"
                  className="space-y-5 font-aeonik text-lg md:text-2xl leading-relaxed opacity-90"
                >
                  {project.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {project.ctaUrl && (
                  <div className="pt-4">
                    <a
                      id="project-details-launch-cta"
                      href={project.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => lusionAudio.playHover()}
                      onClick={() => lusionAudio.playClick(640)}
                      style={{
                        backgroundColor: project.colorBtnBg,
                        color: project.colorBtnText,
                      }}
                      className="group inline-flex items-center gap-4 px-8 py-4 rounded-full font-aeonik text-sm md:text-base uppercase tracking-[0.12em] font-medium shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: project.colorHighlight }}
                      />
                      <span id="project-details-launch-cta-text">
                        Launch Project
                      </span>
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.8"
                          d="M9 9h6m0 0v6m0-6-6 6"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Right 5 Cols: Services & Recognition Links */}
              <div
                id="project-details-right"
                className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pl-10 border-t lg:border-t-0 lg:border-l border-current/15 pt-8 lg:pt-0"
              >
                {/* Services */}
                <div id="project-details-side-list-services">
                  <h4 className="font-mono-lusion text-xs uppercase tracking-[0.2em] opacity-55 mb-4">
                    Services
                  </h4>
                  <div className="space-y-2 font-aeonik text-base md:text-lg">
                    {project.services.map((srv) => (
                      <div key={srv} className="project-details-side-list-item">
                        {srv}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                  <div id="project-details-side-list-links">
                    <h4 className="font-mono-lusion text-xs uppercase tracking-[0.2em] opacity-55 mb-4">
                      Links
                    </h4>
                    <div className="flex flex-col gap-2.5 font-aeonik text-base md:text-lg">
                      {project.links.map((lnk) => (
                        <a
                          key={lnk.label}
                          href={lnk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 underline decoration-current/30 underline-offset-4 hover:opacity-75 transition-opacity"
                        >
                          <span>{lnk.label}</span>
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Media Showcase Gallery (Videos, Fullscreen Captures & Editorial Text Callouts) */}
        <div
          id="project-details-items-wrapper"
          className="px-5 md:px-14 max-w-7xl mx-auto space-y-12 md:space-y-20"
        >
          {project.items.map((item, idx) => {
            if (item.type === "text") {
              return (
                <div
                  key={idx}
                  className="project-details-item is-text max-w-4xl mx-auto py-12 md:py-20 text-center"
                >
                  <p className="project-details-item-text font-aeonik text-2xl sm:text-4xl md:text-5xl font-normal leading-snug tracking-tight">
                    {item.content}
                  </p>
                </div>
              )
            }

            if (item.type === "video") {
              return (
                <div
                  key={idx}
                  className="project-details-item is-video relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-black/30"
                >
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-auto block"
                  />
                </div>
              )
            }

            return (
              <div
                key={idx}
                className={`project-details-item is-image relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 ${
                  item.fullscreen ? "w-full" : "max-w-5xl mx-auto"
                }`}
              >
                <img
                  src={item.src}
                  alt={`${project.title} showcase ${idx + 1}`}
                  loading={idx < 2 ? "eager" : "lazy"}
                  className="w-full h-auto block object-cover"
                />
              </div>
            )
          })}
        </div>

        {/* NEXT PROJECT PREVIEW BANNER */}
        <div className="px-5 md:px-14 max-w-7xl mx-auto mt-28 md:mt-36">
          <div
            id="project-details-preview"
            onClick={() => {
              lusionAudio.playClick(600)
              router.push(`/projects/${nextProject.id}`)
            }}
            style={{
              backgroundColor: nextProject.colorBg,
              color: nextProject.colorText,
            }}
            className="group relative rounded-[32px] p-8 sm:p-12 md:p-16 border border-white/15 overflow-hidden cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="font-mono-lusion text-xs uppercase tracking-[0.22em] opacity-70 mb-4">
                  NEXT PROJECT
                </div>
                <div
                  id="project-details-preview-title"
                  className="font-aeonik text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight"
                >
                  {nextProject.title}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono-lusion text-xs uppercase tracking-widest opacity-80">
                  EXPLORE CASE STUDY
                </span>
                <div className="w-14 h-14 rounded-full bg-white/15 group-hover:bg-[#1a2ffb] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.515 12h16.97m0 0L13.01 4.525M20.485 12l-7.475 7.476"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Next Project Thumbnail Preview */}
            <div className="mt-10 aspect-[16/8] w-full rounded-[20px] overflow-hidden">
              <img
                src={nextProject.thumb}
                alt={nextProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono-lusion text-xs uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity"
            >
              <span>← BACK TO ALL 19 PROJECTS</span>
            </Link>
          </div>
        </div>
      </div>

      {/* End Section + Footer + Scroll Nav */}
      <LusionFooterSection nextPagePath="/projects" nextPageTitle="All Projects" />
    </div>
  )
}
