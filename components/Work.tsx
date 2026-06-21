"use client";

import { projects, ProjectType } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const tabs: ("All" | ProjectType)[] = ["All", "Web App", "Mobile App", "Tools", "C++ / Game"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Work() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter((project) => project.type === activeTab);
  }, [activeTab]);

  return (
    <section id="work" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="section-label">SELECTED WORK / 2025–2026</motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              // Hide tabs if there are no projects for them (except All)
              if (tab !== "All" && !projects.some((p) => p.type === tab)) return null;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab
                      ? "border-accent text-white"
                      : "border-border bg-surface-secondary text-text-secondary hover:border-accent hover:text-accent"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-accent)", zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            variants={containerVariants}
            key={activeTab} // re-trigger animation on tab change
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                className="card-base group relative flex h-full flex-col overflow-hidden p-6 sm:p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-accent">{project.type}</p>
                  <p className="text-[11px] font-semibold text-text-muted">{project.year}</p>
                </div>

                {/* Content */}
                <h3 className="mt-4 text-2xl font-bold text-text-primary">{project.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-text-secondary flex-grow">{project.description}</p>
                
                {project.highlight && (
                  <p className="mt-4 text-[13px] font-semibold text-accent">{project.highlight}</p>
                )}

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-surface/95">
                  {project.links.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${link.label}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex w-40 items-center justify-between rounded-xl border border-accent bg-accent-soft px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
