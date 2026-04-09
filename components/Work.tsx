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

          <div className="mt-6 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  activeTab === tab
                    ? "border-accent bg-[#00ff8812] text-accent"
                    : "border-border text-textSecondary hover:border-accentSecondary hover:text-accentSecondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ scale: 1.02 }}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
              >
                <p className="absolute right-5 top-5 text-xs text-textMuted">{project.year}</p>
                <p className="section-label">{project.type}</p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-textSecondary">{project.description}</p>
                {project.highlight ? <p className="mt-4 text-sm text-accent">{project.highlight}</p> : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accentSecondary transition hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
                <ArrowUpRight className="absolute right-5 top-14 h-4 w-4 text-textMuted opacity-0 transition group-hover:opacity-100 group-hover:text-accent" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
