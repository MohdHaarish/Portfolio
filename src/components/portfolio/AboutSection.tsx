'use client'

import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Languages & Frameworks",
    items: ["C#", ".NET Core", "Java", "Python", "C++", "SQL"],
  },
  {
    category: "Backend & Architecture",
    items: ["Microservices", "Apache Kafka", "REST APIs", "Event-Driven Architecture", "CQRS"],
  },
  {
    category: "Design Patterns",
    items: ["Repository", "Strategy", "Factory", "Circuit Breaker", "Optimistic Concurrency"],
  },
  {
    category: "DevOps & Tools",
    items: ["Azure DevOps (TFS)", "CI/CD Pipelines", "Git", "Docker", "Jenkins"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "Stored Procedures", "Row-Level Locking", "Query Optimization"],
  },
  {
    category: "Data & Analytics",
    items: ["Tableau Desktop", "Apache Spark", "Apache Hadoop", "Microsoft Excel"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase">About Me</span>
          <div className="mt-3 h-px w-16 bg-gold/50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              I architect systems that{" "}
              <em className="text-highlight not-italic">scale under pressure.</em>
            </h2>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
              I&apos;m a Software Developer (SDE 2) at Saxo Group, where I design and ship
              distributed backend systems that power real-time financial operations for
              European clients. My work spans microservice architecture, Kafka-based
              event pipelines, and production-grade API development.
            </p>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
              Over 3+ years I&apos;ve led migrations from legacy monoliths to resilient
              distributed infrastructures, resolved critical concurrency bugs at the
              database layer, and mentored junior engineers on design patterns and
              engineering best practices.
            </p>
            <p className="text-muted-foreground font-sans text-base leading-relaxed">
              Outside of work, I explore low-level computing — I once built a fully
              functioning 16-bit computer from scratch, from HDL logic gates all the
              way up to a compiler. I believe understanding the machine makes you a
              better engineer at every layer.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "SDE 2", label: "Current Level" },
                { value: "Saxo", label: "Current Company" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl text-highlight font-bold">{stat.value}</div>
                  <div className="text-muted-foreground font-sans text-xs mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-7"
          >
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              >
                <span className="text-secondary font-sans text-xs tracking-[0.3em] uppercase mb-2.5 block">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 border border-border bg-surface text-foreground/60 font-sans text-xs rounded-sm hover:border-secondary/40 hover:text-secondary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
