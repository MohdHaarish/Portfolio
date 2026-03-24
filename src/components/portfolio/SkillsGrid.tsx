"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  Layers,
  GitBranch,
  Database,
  Zap,
  Shield,
  Code2,
} from "lucide-react";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const GridItem = ({ area, icon, title, description, delay = 0 }: GridItemProps) => {
  return (
    <motion.li
      className={cn("min-h-[5rem] list-none", area)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-full rounded-[1.25rem] border border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-start gap-2">
            <div className="w-fit rounded-lg border border-border bg-surface p-2">
              <div className="text-secondary">{icon}</div>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base leading-snug font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

const skills = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/4]",
    icon: <Layers className="h-4 w-4" />,
    title: "Microservices Architecture",
    description:
      "Designing and shipping distributed services that migrate monolithic workflows to modern event-driven infrastructure with REST and Kafka communication.",
    delay: 0,
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/4]",
    icon: <Zap className="h-4 w-4" />,
    title: "Apache Kafka & Event Streaming",
    description:
      "Building real-time payment pipelines with guaranteed delivery, type-safe message serialization, and near-instant settlement latency.",
    delay: 0.07,
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/4/3/7]",
    icon: <Code2 className="h-4 w-4" />,
    title: "C# · .NET Core · REST APIs",
    description:
      "3+ years delivering production backend services — open APIs with cursor pagination, OpenAPI specs, and high-volume transactional endpoints used by European financial clients.",
    delay: 0.14,
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/7/2/13]",
    icon: <Database className="h-4 w-4" />,
    title: "SQL Server & Concurrency",
    description:
      "Resolving race conditions with optimistic concurrency control and row-level locking. Writing optimized stored procedures for high-volume transactional workloads.",
    delay: 0.21,
  },
  {
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/7/3/9]",
    icon: <Shield className="h-4 w-4" />,
    title: "Resilience Patterns",
    description:
      "Circuit breakers, retry mechanisms, request throttling — engineering services that hold under peak financial-market traffic.",
    delay: 0.28,
  },
  {
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
    icon: <GitBranch className="h-4 w-4" />,
    title: "CI/CD & DevOps",
    description:
      "Azure DevOps (TFS) pipelines automating build, test, and deployment stages. Git, Jenkins, and Docker-based workflows.",
    delay: 0.35,
  },
];

export function SkillsGrid() {
  return (
    <section id="skills" className="py-10 px-6 lg:px-16 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7"
        >
          <span className="text-secondary font-sans text-xs tracking-[0.4em] uppercase">
            Core Competencies
          </span>
          <div className="mt-3 h-px w-16 bg-secondary/50" />
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-3 xl:grid-rows-2">
          {skills.map((skill) => (
            <GridItem key={skill.title} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
