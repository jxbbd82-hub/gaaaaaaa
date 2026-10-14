import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { LUSION_PROJECTS } from "@/lib/lusion-data"
import { LusionProjectDetailPage } from "@/components/lusion/lusion-project-detail-page"

export async function generateStaticParams() {
  return LUSION_PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = LUSION_PROJECTS.find((p) => p.id === id)
  if (!project) {
    return { title: "Lusion - Project Not Found" }
  }
  return {
    title: `Lusion - ${project.title}`,
    description: project.paragraphs[0] || `${project.title} case study by Lusion.`,
  }
}

export default async function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = LUSION_PROJECTS.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <LusionProjectDetailPage project={project} />
}
