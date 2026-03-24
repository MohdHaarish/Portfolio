import { Navbar } from "@/components/portfolio/Navbar"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { SkillsGrid } from "@/components/portfolio/SkillsGrid"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { EducationSection } from "@/components/portfolio/EducationSection"
import { ContactSection } from "@/components/portfolio/ContactSection"

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsGrid />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-8 px-6 lg:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground/60 font-sans text-xs tracking-wide">
            © 2026 Mohd Haarish — All rights reserved
          </span>
          <span className="text-muted-foreground/40 font-sans text-xs tracking-wide">
            Next.js · TypeScript · Tailwind CSS
          </span>
        </div>
      </footer>
    </main>
  )
}
