import type { Metadata } from "next"
import { LusionAboutPage } from "@/components/lusion/lusion-about-page"

export const metadata: Metadata = {
  title: "Lusion - About Us",
  description:
    "A worldwide team of specialists in design, motion, 3D, and technology working together to turn ambitious ideas into immersive digital experiences.",
}

export default function AboutRoute() {
  return <LusionAboutPage />
}
