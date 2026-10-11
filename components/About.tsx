"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code2, Users, Layers, Brain } from "lucide-react";
import { useState } from "react";
import { aboutTechStacks } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleFadeUpItem, appleStaggerContainer } from "@/lib/springs";

const bentoMetrics = [
  { label: "Active Production Apps", value: "4+", icon: Layers, note: "Built & deployed" },
  { label: "Daily Active Users", value: "100+", icon: Users, note: "Mess Menu App" },
  { label: "Systems & Algorithms", value: "C++ / TS", icon: Code2, note: "Core focus" },
  { label: "Academic Foundation", value: "NUST", icon: GraduationCap, note: "SEECS CS '29" }
];

export default function About() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (tech: string) => {
    playHapticClick("tap");
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  return (
    <section id="about" className="relative border-t border-border/80 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-content">
        
        {/* Section Header (SKILL.md §15) */}
        <div className="mb-14">
          <span className="section-label">Engineering Profile / 01</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Designed for clarity. Built for performance.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            A software engineer who bridges systems programming, modern web craft, and algorithmic problem solving.
          </p>
        </div>

        {/* Apple-Style Bento Grid (SKILL.md §12 Materials & Depth) */}
        <motion.div
          variants={appleStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Main Story Bento Card (Span 2 col, 2 row on desktop) */}
          <motion.div
            variants={appleFadeUpItem}
            className="apple-card relative flex flex-col justify-between p-7 sm:p-9 md:col-span-2 lg:col-span-2"
          >
            <div>
              <div className="flex items-center gap-2.5 text-accent font-semibold text-xs tracking-wider uppercase mb-5">
                <Code2 size={16} />
                <span>The Engineering Philosophy</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                Real problems deserve real systems — not throwaway demos.
              </h3>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary">
                <p>
                  I started in low-level <strong className="text-text-primary">C++</strong> building algorithmic foundations, memory management logic, and 3D simulation systems. That discipline carried directly into full-stack engineering, where every state update, network roundtrip, and layout repaint is accounted for.
                </p>
                <p>
                  I authored and shipped the <em>Zones Mess Menu</em> platform serving over 100+ daily users with real-time Supabase PostgreSQL synchronization, role-based analytics, and Google OAuth.
                </p>
                <p>
                  Today, I&apos;m engineering <strong className="text-text-primary">SAFAR</strong>, an emerald-themed ride-sharing Android application in Kotlin Jetpack Compose and Firebase, while deepening my algorithmic mastery across DSA and Deep Learning.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-text-muted">
              <span>NUST School of Electrical Engineering & Computer Science</span>
              <span className="font-mono text-accent">CS Department</span>
            </div>
          </motion.div>

          {/* Academic & University Card */}
          <motion.div
            variants={appleFadeUpItem}
            className="apple-card flex flex-col justify-between p-7 md:col-span-1 lg:col-span-2"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent mb-6 border border-accent/20">
                <GraduationCap size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Academics</p>
              <h4 className="mt-2 text-xl font-bold tracking-tight text-text-primary">
                B.S. Computer Science
              </h4>
              <p className="mt-1 text-sm font-medium text-text-secondary">
                NUST SEECS · Islamabad, Pakistan (2025–Present)
              </p>
              <div className="mt-4 space-y-2 text-xs text-text-secondary leading-relaxed">
                <p className="font-medium text-text-primary">Rigorous coursework & research focus:</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Data Structures & Algorithms",
                    "Database Systems",
                    "OOP (C++ & Java)",
                    "Digital Logic Design",
                    "Deep Learning / AI",
                    "Discrete Mathematics"
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-border bg-surface-secondary/70 px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border text-xs text-text-muted flex items-center gap-1.5">
              <Sparkles size={13} className="text-amber-500" />
              <span>National University of Sciences & Technology</span>
            </div>
          </motion.div>

          {/* AI & Deep Learning Systems Card */}
          <motion.div
            variants={appleFadeUpItem}
            className="apple-card flex flex-col justify-between p-7 md:col-span-1 lg:col-span-2"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 mb-6 border border-purple-500/20">
                <Brain size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">Intelligent Systems</p>
              <h4 className="mt-2 text-xl font-bold tracking-tight text-text-primary">
                Deep Learning & Neural Networks
              </h4>
              <p className="mt-1 text-sm font-medium text-text-secondary">
                DeepLearning.AI Specialization & TensorFlow
              </p>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                Mastering forward/backward propagation, vectorization, hyperparameter tuning, dropout, and advanced optimization algorithms. Applying machine learning models to production workflows and intelligent full-stack applications.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-text-muted font-mono pt-4 border-t border-border">
              <span>Prior: Technical Specialist at SquareTrade-Allstate</span>
            </div>
          </motion.div>

          {/* 4 Interactive Metric Bento Tiles */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-2">
            {bentoMetrics.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={appleFadeUpItem}
                  className="apple-card flex flex-col justify-between p-5"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-accent" />
                    <span className="text-[10px] font-mono font-medium text-text-muted">{item.note}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-extrabold tracking-tight text-text-primary font-sans">{item.value}</p>
                    <p className="mt-1 text-xs font-medium text-text-secondary">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

        {/* Interactive Technologies Grid (Tactile Press Feedback SKILL.md §1 & §10) */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-surface/50 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h4 className="text-base font-bold text-text-primary">Technical Arsenal</h4>
              <p className="text-xs text-text-secondary mt-0.5">
                Click any technology to highlight focus and tactile responsiveness
              </p>
            </div>
            {selectedTech && (
              <span className="text-xs font-mono text-accent">
                Selected: {selectedTech}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {aboutTechStacks.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => handleTechClick(tech)}
                  className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all apple-press ${
                    isSelected
                      ? "border-accent bg-accent text-white shadow-md scale-105"
                      : "border-border bg-surface text-text-secondary hover:border-accent/60 hover:text-accent"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
