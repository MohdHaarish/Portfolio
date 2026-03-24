'use client'

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "Lovely Professional University",
    period: "Jul 2018 — Jun 2022",
    location: "Phagwara, Punjab",
    grade: "CGPA 8.31 / 10.0",
  },
  {
    degree: "Class XII — CBSE",
    institution: "DAV Public School",
    period: "Apr 2016 — Mar 2017",
    location: "Meerut, Uttar Pradesh",
    grade: "Aggregate 86.4%",
  },
  {
    degree: "Class X — CBSE",
    institution: "SK Academy Public School",
    period: "Apr 2014 — Mar 2015",
    location: "Meerut, Uttar Pradesh",
    grade: "CGPA 8.2 / 10.0",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-tertiary font-sans text-xs tracking-[0.4em] uppercase">Education</span>
          <div className="mt-3 h-px w-16 bg-tertiary/50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="border border-border bg-card p-6 rounded-sm hover:border-tertiary/20 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4">
                <span className="text-tertiary font-sans text-xs tracking-[0.3em] uppercase">
                  {edu.period}
                </span>
              </div>
              <h3 className="font-display text-lg text-foreground leading-snug mb-2 group-hover:text-tertiary transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground font-sans text-sm mb-1">{edu.institution}</p>
              <p className="text-muted-foreground/60 font-sans text-xs mb-4">{edu.location}</p>
              <div className="pt-4 border-t border-border">
                <span className="text-tertiary font-sans text-sm font-medium">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
