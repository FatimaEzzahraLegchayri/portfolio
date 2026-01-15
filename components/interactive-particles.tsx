"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  vx: number
  vy: number
}

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
        })
      }
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        // Mouse interaction - particles move away from cursor
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.x -= Math.cos(angle) * force * 2
          particle.y -= Math.sin(angle) * force * 2
        }

        // Return to base position
        const returnForce = 0.03
        particle.x += (particle.baseX - particle.x) * returnForce
        particle.y += (particle.baseY - particle.y) * returnForce

        // Gentle floating animation
        particle.x += particle.vx
        particle.y += particle.vy

        // Update base position for continuous float
        particle.baseX += particle.vx
        particle.baseY += particle.vy

        // Boundary check and bounce
        if (particle.baseX < 0 || particle.baseX > canvas.width) {
          particle.vx *= -1
          particle.baseX = Math.max(0, Math.min(canvas.width, particle.baseX))
        }
        if (particle.baseY < 0 || particle.baseY > canvas.height) {
          particle.vy *= -1
          particle.baseY = Math.max(0, Math.min(canvas.height, particle.baseY))
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        // Using a single blue color similar to Antigravity's subtle blue
        ctx.fillStyle = "rgba(59, 130, 246, 0.4)"
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.8 }} />
}
