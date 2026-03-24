'use client'

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

const experiences = [
  {
    role: "Software Developer — SDE 2",
    company: "Saxo Group India",
    period: "Aug 2025",
    location: "Gurugram, India",
    badge: "Promoted",
    highlights: [
      "Architected microservices to migrate critical business workflows from a legacy monolith to a modern distributed infrastructure using REST and Kafka-based event-driven communication.",
      "Designed service architectures applying Repository, Strategy, Factory, and CQRS patterns — ensuring scalability, maintainability, and clear separation of concerns.",
      "Engineered high-throughput services with request throttling, retry logic, and circuit breaker patterns, maintaining resilience under peak financial-market traffic.",
      "Diagnosed and resolved critical race conditions in the database layer by implementing optimistic concurrency control and row-level locking strategies.",
      "Authored technical design documents for cross-team feature rollouts and mentored junior engineers on best practices, code reviews, and design pattern adoption.",
    ],
  },
  {
    role: "Software Developer — SDE 1",
    company: "Saxo Group India",
    period: "Aug 2022",
    location: "Gurugram, India",
    highlights: [
      "Delivered Tax Saving account (France PEA/PEA-PME) Transfer Out functionality, enabling compliant cross-border financial operations for European clients.",
      "Integrated Apache Kafka into legacy payment services, cutting settlement latency from batch-cycle delays to near-instant real-time processing.",
      "Built account-type-specific payment processing pipelines with type-safe message serialization and guaranteed Kafka delivery.",
      "Published cursor-paginated Open APIs following RESTful standards and OpenAPI Specification for third-party vendor data integrations.",
      "Established CI/CD pipelines on Azure DevOps Server (TFS), automating build, test, and deployment stages for faster, safer releases.",
      "Wrote optimized SQL Server stored procedures and complex queries for high-volume transactional workloads.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "WorkIndia",
    period: "Aug 2021",
    location: "Bengaluru, India",
    highlights: [
      "Developed forecasting models for app download projections based on marketing spend, enabling data-backed budget reallocation decisions.",
      "Projected Daily Active Users (DAU) for monthly, quarterly, and annual periods using trend analysis and historical data patterns.",
      "Performed tag-wise notification impact analysis on DAU, identifying high-performing strategies that improved user engagement.",
      "Built interactive Tableau dashboards tracking KPIs: DAU, notification performance, job listings, and revenue metrics.",
      "Mentored a team of data analyst interns on SQL querying, analysis methodologies, and quarterly planning.",
    ],
  },
]

function ExperienceCard({
  company,
  location,
  badge,
  highlights,
}: Omit<(typeof experiences)[number], "period" | "role">) {
  return (
    <div className="pb-10">
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-tertiary font-sans text-sm font-medium tracking-wide">
            {company}
          </span>
          {badge && (
            <span className="inline-block px-2 py-0.5 bg-tertiary/10 border border-tertiary/20 text-tertiary font-sans text-[10px] tracking-widest uppercase rounded-sm">
              {badge}
            </span>
          )}
        </div>
        <span className="text-muted-foreground/60 font-sans text-xs">{location}</span>
      </div>
      <ul className="space-y-2.5">
        {highlights.map((point, j) => (
          <li
            key={j}
            className="flex gap-3 text-muted-foreground font-sans text-sm leading-relaxed"
          >
            <span className="text-tertiary/40 mt-1.5 flex-shrink-0">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExperienceSection() {
  const timelineData = experiences.map((exp) => ({
    title: (
      <div className="flex flex-col gap-1">
        <span className="text-xl md:text-4xl font-bold text-muted-foreground font-display">
          {exp.period}
        </span>
        <span className="text-xs md:text-sm font-sans font-medium text-tertiary/80 leading-snug">
          {exp.role}
        </span>
      </div>
    ),
    content: (
      <ExperienceCard
        company={exp.company}
        location={exp.location}
        badge={exp.badge}
        highlights={exp.highlights}
      />
    ),
  }))

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-tertiary font-sans text-xs tracking-[0.4em] uppercase">Experience</span>
          <div className="mt-3 h-px w-16 bg-tertiary/50" />
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
