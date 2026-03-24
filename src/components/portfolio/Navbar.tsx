'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/90 backdrop-blur-md border-b border-border" : ""
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg text-foreground tracking-tight">
          <span className="text-gold">M.</span>Haarish
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground font-sans text-sm tracking-wide hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:haarishnaim698@gmail.com"
          className="hidden md:block px-4 py-2 border border-gold/30 text-gold font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold/5 hover:border-gold/60 transition-all duration-200 rounded-sm"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  )
}
