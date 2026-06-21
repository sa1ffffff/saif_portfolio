"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";

const terminalData = {
  name: '"Saifullah Waseem"',
  role: '"Full-Stack Developer"',
  stack: '["React", "TypeScript", "Next.js", "Kotlin", "C++"]',
  tools: '["Supabase", "Firebase", "TensorFlow"]',
  status: '"building"',
  open_to: '["internships", "freelance", "collaboration"]'
};

const stackTags = [
  "React", "TypeScript", "Next.js", "Supabase",
  "Kotlin", "C++", "Firebase", "TensorFlow"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } }
};

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 0.07
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative mx-auto flex min-h-screen w-full max-w-content items-center px-5 pt-20 pb-16 md:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor-following glow */}
      <div
        className="cursor-glow"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(124, 92, 248, ${glowPos.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center lg:text-left"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-green absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-text-secondary">Available for work · Islamabad, Pakistan</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary font-sans"
          >
            Building software
            <br />
            <span className="font-serif italic text-accent">that matters.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-lg text-base leading-relaxed text-text-secondary md:text-[17px] mx-auto lg:mx-0"
          >
            CS student at NUST SEECS. Full-stack developer and systems thinker.
            I build web apps, mobile tools, and AI-assisted software — from idea to deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg glow-accent"
              style={{ background: "var(--gradient-accent)" }}
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-accent bg-accent-soft px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stack tags */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {stackTags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Terminal card */}
        <motion.div
          variants={terminalVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block"
        >
          <div className="terminal glow-accent">
            {/* Title bar */}
            <div className="terminal-titlebar">
              <div className="flex gap-2">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#28c840]" />
              </div>
              <span className="ml-3 text-xs text-text-muted">portfolio.ts</span>
            </div>

            {/* Terminal content */}
            <div className="px-5 py-5 text-[13px] leading-[1.8]">
              <span className="text-[#7C5CF8]">const</span>{" "}
              <span className="text-[#7dcfff]">developer</span>{" "}
              <span className="text-text-muted">=</span>{" "}
              <span className="text-[#bb9af7]">{"{"}</span>
              {Object.entries(terminalData).map(([key, value]) => (
                <div key={key} className="ml-6">
                  <span className="text-[#73daca]">{key}</span>
                  <span className="text-text-muted">: </span>
                  <span className={value.startsWith("[") ? "text-[#ff9e64]" : "text-[#9ece6a]"}>{value}</span>
                  <span className="text-text-muted">,</span>
                </div>
              ))}
              <span className="text-[#bb9af7]">{"}"}</span>
              <span className="text-text-muted">;</span>
              <span className="blink ml-1 text-accent">▊</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-text-muted/40"
        />
      </motion.div>
    </section>
  );
}
