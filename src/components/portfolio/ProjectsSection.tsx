'use client'

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "16-Bit Computer",
    description:
      "Built a fully functional 16-bit computer from the ground up — designed the CPU (ALU), RAM, and ROM in Hardware Description Language, then wrote a Jack Compiler (high-level → VM bytecode) and a VM Translator (bytecode → Assembly → binary). A complete vertical slice of computing from logic gates to executable programs.",
    tags: ["Java", "HDL", "Assembly", "Compiler Design", "Computer Architecture"],
    year: "2022",
    href: "https://github.com/mohdhaarish",
    highlight: true,
  },
  {
    number: "02",
    title: "Event-Driven Payment Pipelines",
    description:
      "Engineered account-type-specific payment processing pipelines at Saxo Group integrated with Apache Kafka, reducing settlement latency from batch-cycle delays to near-instant processing. Implemented type-safe message serialization and guaranteed-delivery guarantees across diverse payment workflows.",
    tags: ["C#", ".NET Core", "Apache Kafka", "SQL Server", "Event-Driven Architecture"],
    year: "2023",
    href: "#",
  },
  {
    number: "03",
    title: "Microservices Migration",
    description:
      "Architected and delivered multiple microservices to migrate critical business workflows out of a legacy monolith, leveraging both synchronous (REST) and asynchronous (Kafka) communication. Incorporated circuit breaker, retry, and throttling patterns to achieve resilience under peak financial-market traffic.",
    tags: ["C#", ".NET Core", "Microservices", "REST APIs", "CQRS", "Docker"],
    year: "2023–2024",
    href: "#",
  },
  {
    number: "04",
    title: "Open API Platform",
    description:
      "Developed and published multiple cursor-paginated Open APIs adhering to RESTful standards and OpenAPI Specification, enabling third-party vendor data integrations at Saxo. APIs handle high-volume transactional data with optimized SQL Server stored procedures.",
    tags: ["C#", ".NET Core", "OpenAPI", "SQL Server", "REST", "Azure DevOps"],
    year: "2022",
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-quaternary font-sans text-xs tracking-[0.4em] uppercase">Selected Work</span>
          <div className="mt-3 h-px w-16 bg-quaternary/50" />
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.a
              key={project.number}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group block border-t py-10 transition-colors duration-300 -mx-4 px-4 rounded-sm ${
                project.highlight
                  ? "border-quaternary/20 hover:bg-quaternary/[0.03]"
                  : "border-border hover:bg-surface/50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-start">
                <span className={`font-display text-4xl font-bold pt-1 transition-colors duration-300 ${
                  project.highlight
                    ? "text-quaternary/20 group-hover:text-quaternary/40"
                    : "text-muted-foreground/40 group-hover:text-quaternary/20"
                }`}>
                  {project.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`font-display text-2xl transition-colors duration-300 ${
                      project.highlight
                        ? "text-highlight group-hover:text-foreground"
                        : "text-foreground/80 group-hover:text-highlight"
                    }`}>
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="px-2 py-0.5 bg-quaternary/10 border border-quaternary/20 text-quaternary font-sans text-[10px] tracking-widest uppercase rounded-sm">
                        Featured
                      </span>
                    )}
                    <span className="text-muted-foreground/60 font-sans text-xs tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xl mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-muted-foreground font-sans text-xs tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  className="w-5 h-5 text-muted-foreground/40 group-hover:text-quaternary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1"
                />
              </div>
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
