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
    <section id="work" className="border-t border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-3xl" />
      </div>
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
                className={`rounded-full border px-5 py-2 text-sm font-medium transition duration-300 ${
                  activeTab === tab
                    ? "border-accent-light text-white"
                    : "border-border text-text-secondary hover:border-accent-light/50 hover:text-text-primary"
                }`}
                style={activeTab === tab ? { background: 'linear-gradient(135deg, #7c3aed 0%, #5850ec 100%)' } : {}}
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
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative flex h-full flex-col p-8 rounded-2xl border-2 transition-all duration-300"
                style={{
                  borderColor: '#e2e8f0',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 252, 0.95) 100%)',
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <p className="absolute right-6 top-6 text-xs font-semibold text-text-muted">{project.year}</p>
                <p className="section-label">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-text-primary">{project.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{project.description}</p>
                {project.highlight ? <p className="mt-4 text-sm font-medium" style={{ color: '#7c3aed' }}>{project.highlight}</p> : null}

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
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition duration-300"
                      style={{ color: '#7c3aed' }}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
                <ArrowUpRight className="absolute right-6 top-16 h-5 w-5 text-text-muted/30 opacity-0 transition group-hover:opacity-100 group-hover:scale-110 duration-300" style={{ color: '#7c3aed' }} />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
