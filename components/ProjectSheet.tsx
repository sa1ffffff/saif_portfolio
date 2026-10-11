"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { Project } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleSpringSheet } from "@/lib/springs";

interface ProjectSheetProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  const sheetRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playHapticClick("sheet");
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Direct manipulation drag handoff (SKILL.md §3, §5, §6)
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If dragged down past 120px or flicked down with downward velocity > 400px/s
    if (info.offset.y > 120 || info.velocity.y > 400) {
      playHapticClick("sheet");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          
          {/* Dimming Scrim with Translucency (SKILL.md §12) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              playHapticClick("sheet");
              onClose();
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Apple Sheet Surface (SKILL.md §4, §9, §12) */}
          <motion.div
            ref={sheetRef}
            initial={{ y: "100%", opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.5 }}
            transition={appleSpringSheet}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0.12, bottom: 0.7 }} // Apple rubber-banding (§9)
            onDragEnd={handleDragEnd}
            className="relative z-10 w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-[2.5rem] border border-border bg-surface-elevated p-6 sm:p-9 shadow-2xl backdrop-blur-3xl max-h-[90vh] overflow-y-auto no-scrollbar"
            style={{
              borderTop: "1px solid var(--border-specular)"
            }}
          >
            {/* Apple Drag Grabber Handle */}
            <div className="flex justify-center -mt-2 pb-5 sm:hidden cursor-grab active:cursor-grabbing">
              <span className="h-1.5 w-12 rounded-full bg-text-muted/40" />
            </div>

            {/* Header: Type, Year, Close Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.type}
                </span>
                <span className="text-xs font-mono font-medium text-text-muted">
                  Release · {project.year}
                </span>
              </div>

              <button
                onClick={() => {
                  playHapticClick("sheet");
                  onClose();
                }}
                aria-label="Close project details"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent apple-press"
              >
                <X size={16} />
              </button>
            </div>

            {/* Title & Highlight */}
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
              {project.title}
            </h3>

            {project.highlight && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent">
                <Sparkles size={14} />
                <span>{project.highlight}</span>
              </div>
            )}

            {/* Comprehensive Description */}
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary">
              <p>{project.description}</p>
            </div>

            {/* Architecture Details Box */}
            <div className="mt-7 rounded-2xl border border-border bg-surface-secondary/70 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Engineering Spec & Architecture</span>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary leading-normal">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Modern decoupled architecture with end-to-end type safety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Real-time persistence and responsive reactive state flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Engineered with micro-optimizations for 60fps interaction and low layout-shift.</span>
                </li>
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-border">
              {project.links.map((link) => {
                const isGithub = link.label.toLowerCase().includes("github");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playHapticClick("pop")}
                    className={
                      isGithub
                        ? "apple-btn-secondary apple-press flex-1 min-w-[140px]"
                        : "apple-btn-primary apple-press flex-1 min-w-[140px]"
                    }
                  >
                    {isGithub ? <Github size={16} /> : <ExternalLink size={16} />}
                    <span>{link.label === "Live" ? "Open Live App" : "View Source Code"}</span>
                  </a>
                );
              })}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
