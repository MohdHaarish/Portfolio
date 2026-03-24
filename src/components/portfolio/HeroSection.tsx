'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"

export function HeroSection() {
  const { accentColor } = useTheme()

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-16">
      <Card className="w-full h-[580px] bg-card/80 border-gold/20 relative overflow-hidden backdrop-blur-sm">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={accentColor}
        />

        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-10 lg:p-16 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
                Software Developer · SDE 2
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <span className="text-gold">
                Mohd<br />Haarish
              </span>
            </motion.h1>

            <motion.p
              className="mt-2 text-muted-foreground font-sans text-base max-w-xs leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Building high-throughput microservices & distributed systems.
              3+ years shipping production-grade backends at{" "}
              <span className="text-foreground/60">Saxo Group</span>.
            </motion.p>

            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a
                href="#projects"
                className="px-6 py-2.5 bg-gold text-accent-foreground font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-200"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border border-gold/40 text-gold font-sans text-sm font-semibold tracking-wide rounded-sm hover:border-gold hover:bg-gold/5 transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right content — 3D scene */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
