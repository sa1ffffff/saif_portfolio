"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, SlidersHorizontal, Sparkles } from "lucide-react";
import { projects, Project, ProjectType } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleSpringSnappy, appleSpringDefault, appleFadeUpItem } from "@/lib/springs";
import ProjectSheet from "./ProjectSheet";

const tabs: ("All" | ProjectType)[] = ["All", "Web App", "Mobile App", "Tools", "C++ / Game"];

export default function Work() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter((project) => project.type === activeTab);
  }, [activeTab]);

  const handleTabChange = (tab: (typeof tabs)[number]) => {
    playHapticClick("tap");
    setActiveTab(tab);
  };

  const handleOpenProject = (project: Project) => {
    playHapticClick("pop");
    setSelectedProject(project);
  };

  return (
    <section id="work" className="relative border-t border-border/80 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-content">
        
        {/* Section Header (SKILL.md §15) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Selected Work / 02</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Systems shipped & active.
            </h2>
            <p className="mt-3 max-w-xl text-base text-text-secondary sm:text-lg">
              Production web applications, mobile architectures, and native simulation software.
            </p>
          </div>

          {/* Segmented Control Pill Bar (SKILL.md §4 Springs) */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1.5 shadow-sm backdrop-blur-xl self-start md:self-auto overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              if (tab !== "All" && !projects.some((p) => p.type === tab)) return null;
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors apple-press whitespace-nowrap ${
                    isActive
                      ? "text-accent font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-surface shadow-sm border border-border"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid (SKILL.md §12 Materials & Specular Lighting) */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-7 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                variants={appleFadeUpItem}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={appleSpringDefault}
                className="apple-card group relative flex flex-col justify-between overflow-hidden p-7 sm:p-9"
              >
                <div>
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {project.type}
                    </span>
                    <span className="text-xs font-mono font-medium text-text-muted">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                    {project.title}
                  </h3>

                  {project.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-accent/15 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      <Sparkles size={13} />
                      <span>{project.highlight}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-[14.5px] leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer with Tactile Links and Quick Spec Sheet */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent-hover apple-press"
                  >
                    <SlidersHorizontal size={14} />
                    <span>Inspect Specs & Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links.map((link) => {
                      const isGithub = link.label.toLowerCase().includes("github");
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} ${link.label}`}
                          onClick={() => playHapticClick("pop")}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent apple-press"
                          title={link.label}
                        >
                          {isGithub ? <Github size={15} /> : <ExternalLink size={15} />}
                        </a>
                      );
                    })}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Apple-Style Gesture-Driven Project Detail Sheet (SKILL.md §3, §4, §6) */}
      <ProjectSheet
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
