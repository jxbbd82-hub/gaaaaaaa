"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { useLusion, BALLOON_PALETTES } from "./lusion-context"

interface SphereBody {
  mesh: THREE.Mesh
  pos: THREE.Vector3
  vel: THREE.Vector3
  targetOffset: THREE.Vector3
  radius: number
  isAccent: boolean
  material: THREE.MeshPhysicalMaterial
}

export function LusionHeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { paletteIndex, cyclePalette } = useLusion()
  const paletteRef = useRef(paletteIndex)

  useEffect(() => {
    paletteRef.current = paletteIndex
  }, [paletteIndex])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 100)
    camera.position.set(0, 0, 14)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      })
    } catch {
      return
    }

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    container.innerHTML = ""
    container.appendChild(renderer.domElement)

    // Studio Lighting matching Lusion's HomeHero
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.8)
    dirLight1.position.set(10, 12, 10)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x8899ff, 1.6)
    dirLight2.position.set(-10, -8, 6)
    scene.add(dirLight2)

    const pointLight = new THREE.PointLight(0xffffff, 2.4, 25)
    pointLight.position.set(0, 2, 6)
    scene.add(pointLight)

    const sphereGeo = new THREE.SphereGeometry(1, 40, 40)
    const bodies: SphereBody[] = []
    const NUM_SPHERES = 20

    const accentColor = new THREE.Color(BALLOON_PALETTES[paletteRef.current])

    for (let i = 0; i < NUM_SPHERES; i++) {
      const typeMod = i % 4
      const isAccent = typeMod === 0 || typeMod === 1
      const isWhite = typeMod === 2
      const isGlossy = i % 3 === 0
      const radius = 0.62 + (i % 5) * 0.13

      const baseColor = isAccent
        ? accentColor.clone()
        : isWhite
          ? new THREE.Color("#ffffff")
          : new THREE.Color("#14151a")

      const material = new THREE.MeshPhysicalMaterial({
        color: baseColor,
        roughness: isGlossy ? 0.08 : 0.34,
        metalness: isWhite ? 0.04 : 0.12,
        clearcoat: isGlossy ? 0.95 : 0.35,
        clearcoatRoughness: 0.12,
        reflectivity: 0.9,
      })

      const mesh = new THREE.Mesh(sphereGeo, material)
      mesh.scale.setScalar(radius)

      const angle = (i / NUM_SPHERES) * Math.PI * 2
      const spread = 1.6 + (i % 4) * 0.75
      const pos = new THREE.Vector3(
        Math.cos(angle) * spread * 1.35,
        Math.sin(angle) * spread * 0.85,
        ((i % 5) - 2) * 0.55
      )

      const targetOffset = pos.clone().multiplyScalar(0.35)
      mesh.position.copy(pos)
      scene.add(mesh)

      bodies.push({
        mesh,
        pos,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          0
        ),
        targetOffset,
        radius,
        isAccent,
        material,
      })
    }

    // Mouse / Pointer 3D Ray Plane
    const pointerNdc = new THREE.Vector2(999, 999)
    const pointerWorld = new THREE.Vector3(999, 999, 0)
    const raycaster = new THREE.Raycaster()
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointerNdc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointerNdc, camera)
      raycaster.ray.intersectPlane(planeZ, pointerWorld)
    }

    const onPointerLeave = () => {
      pointerWorld.set(999, 999, 0)
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    container.addEventListener("pointerleave", onPointerLeave)

    const onResize = () => {
      if (!container) return
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", onResize)

    let rafId: number
    const tempDiff = new THREE.Vector3()
    const targetAccent = new THREE.Color()
    let time = 0

    const animate = () => {
      time += 0.014
      targetAccent.set(BALLOON_PALETTES[paletteRef.current])

      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i]

        if (b.isAccent) {
          b.material.color.lerp(targetAccent, 0.08)
        }

        // Gentle spring pull toward orbital home
        const orbitX =
          b.targetOffset.x + Math.sin(time * 0.9 + i * 0.7) * 0.65
        const orbitY =
          b.targetOffset.y + Math.cos(time * 0.8 + i * 0.9) * 0.5
        const orbitZ = b.targetOffset.z + Math.sin(time * 0.6 + i) * 0.3

        b.vel.x += (orbitX - b.pos.x) * 0.012
        b.vel.y += (orbitY - b.pos.y) * 0.012
        b.vel.z += (orbitZ - b.pos.z) * 0.015

        // Mouse cursor repulsion impulse
        tempDiff.subVectors(b.pos, pointerWorld)
        tempDiff.z *= 0.35
        const distToMouse = tempDiff.length()
        const minMouseDist = b.radius + 1.65
        if (distToMouse < minMouseDist && distToMouse > 0.0001) {
          const push = (1 - distToMouse / minMouseDist) * 0.095
          b.vel.addScaledVector(tempDiff.normalize(), push)
        }

        // Sphere-to-sphere elastic collision
        for (let j = i + 1; j < bodies.length; j++) {
          const other = bodies[j]
          tempDiff.subVectors(b.pos, other.pos)
          const dist = tempDiff.length()
          const minDist = b.radius + other.radius + 0.06
          if (dist < minDist && dist > 0.0001) {
            const overlap = (minDist - dist) * 0.5
            tempDiff.normalize()
            b.pos.addScaledVector(tempDiff, overlap)
            other.pos.addScaledVector(tempDiff, -overlap)

            const impulse = overlap * 0.18
            b.vel.addScaledVector(tempDiff, impulse)
            other.vel.addScaledVector(tempDiff, -impulse)
          }
        }

        // Damping & integration
        b.vel.multiplyScalar(0.91)
        b.pos.add(b.vel)
        b.mesh.position.copy(b.pos)
        b.mesh.rotation.x += b.vel.y * 0.15
        b.mesh.rotation.y += b.vel.x * 0.15
      }

      // Subtle camera parallax
      if (pointerWorld.x < 100) {
        camera.position.x += (pointerWorld.x * 0.08 - camera.position.x) * 0.05
        camera.position.y += (pointerWorld.y * 0.08 - camera.position.y) * 0.05
        camera.lookAt(0, 0, 0)
      }

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("pointermove", onPointerMove)
      container.removeEventListener("pointerleave", onPointerLeave)
      window.removeEventListener("resize", onResize)
      sphereGeo.dispose()
      bodies.forEach((b) => b.material.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onClick={cyclePalette}
      title="Click to cycle Lusion balloon palette"
      className="w-full h-full cursor-pointer select-none"
    />
  )
}
