import type { Metadata } from "next"
import { LusionProjectsPage } from "@/components/lusion/lusion-projects-page"

export const metadata: Metadata = {
  title: "Lusion - Our Projects",
  description:
    "Explore 19 award-winning 3D visual storytelling, WebGL, and interactive digital experiences crafted by Lusion.",
}

export default function ProjectsRoute() {
  return <LusionProjectsPage />
}
