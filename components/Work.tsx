"use client";

import { projects } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const tabs = ["All", "Web App", "Mobile App", "Tools"] as const;

export default function Work() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filtered = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter((project) => project.type === activeTab);
  }, [activeTab]);

  return (
    <section id="work" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">SELECTED WORK / 2024–2026</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-accent-light bg-accent-soft text-accent-light"
                    : "border-border text-text-secondary hover:border-accent-light/50 hover:text-text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ scale: 1.01 }}
                className="card-base card-hover group relative flex h-full flex-col p-8"
              >
                <p className="absolute right-6 top-6 text-xs font-semibold text-text-muted">{project.year}</p>
                <p className="section-label">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-text-primary">{project.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{project.description}</p>
                {project.highlight ? <p className="mt-4 text-sm font-medium text-accent-light">{project.highlight}</p> : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${link.label}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light transition hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
                <ArrowUpRight className="absolute right-6 top-16 h-5 w-5 text-text-muted/30 opacity-0 transition group-hover:opacity-100 group-hover:text-accent-light" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
