"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Activity, Sparkles, Copy, Check } from "lucide-react";
import { useCallback, useState } from "react";
import { playHapticClick } from "@/lib/sound";
import { appleSpringDefault, appleSpringSnappy } from "@/lib/springs";

const inspectorTabs = [
  { id: "specs", label: "Developer Specs", icon: Cpu },
  { id: "stack", label: "Core Stack", icon: Terminal },
  { id: "metrics", label: "Telemetry", icon: Activity },
  { id: "credo", label: "Philosophy", icon: Sparkles }
];

const specsData = {
  name: "Saifullah Waseem",
  institution: "NUST SEECS (Islamabad, PK)",
  degree: "B.S. Computer Science ('25–'29)",
  current_role: "Account Executive @ Zones LLC",
  active_focus: "DSA (C++) · Deep Learning · SAFAR Android App",
  availability: "Open to Internships & Engineering Roles"
};

const stackData = {
  frontend: ["React", "TypeScript", "Next.js", "TanStack Router", "Tailwind CSS"],
  mobile_native: ["Kotlin", "Android Jetpack Compose", "C++"],
  backend_cloud: ["Supabase", "PostgreSQL", "Firebase", "Node.js"],
  ai_data: ["TensorFlow", "DeepLearning.AI Spec", "Prompt Engineering"]
};

const telemetryData = [
  { label: "Zones Mess Menu", stat: "100+ daily users", detail: "Internal production system" },
  { label: "SubtrakX SaaS", stat: "Predictive burn", detail: "SQL-first analytics platform" },
  { label: "SAFAR App", stat: "Android · Active", detail: "Ride-sharing for NUST" },
  { label: "Claim Resolution", stat: "50+ daily cases", detail: "SquareTrade-Allstate specialist" }
];

const philosophyText = `// Apple Engineering Credo:
// "An interface feels alive when motion starts from the current value,
// inherits velocity, and stops feeling like a computer."
//
// Every line of code should earn its place.
// Zero unnecessary latency. Uncompromising craft.`;

export default function Hero() {
  const [activeTab, setActiveTab] = useState("specs");
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const handleCopyCode = () => {
    playHapticClick("pop");
    const textToCopy = JSON.stringify(specsData, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] w-full flex-col justify-center px-4 pt-28 pb-16 md:px-8 overflow-hidden"
    >
      {/* Specular Ambient Light Radial Gradient (SKILL.md §12) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(41, 151, 255, 0.12), transparent 70%)`
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-content">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          
          {/* Left Column: Keynote Typography & CTA (SKILL.md §15 Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={appleSpringDefault}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Apple Availability Pill */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={appleSpringSnappy}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
            >
              <span className="live-status-dot" />
              <span className="text-xs font-medium tracking-tight text-text-secondary">
                Available for Software Engineering Roles
              </span>
              <span className="text-[10px] rounded-full bg-accent/10 px-2 py-0.5 font-semibold text-accent">
                Islamabad, PK
              </span>
            </motion.div>

            {/* Apple Keynote Headline */}
            <h1 className="keynote-title text-text-primary">
              Building software
              <br />
              <span className="italic font-serif font-normal text-accent">
                that feels inevitable.
              </span>
            </h1>

            {/* Subtitle with optical sizing */}
            <p className="keynote-sub mt-6 max-w-xl text-text-secondary">
              Computer Science at <strong>NUST SEECS</strong>. Full-stack developer and enterprise technologist.
              Architecting web systems, Android mobile apps, and data-driven software with uncompromising precision.
            </p>

            {/* Instant tactile action buttons (SKILL.md §1 Response) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:justify-start">
              <a
                href="#work"
                onClick={() => playHapticClick("tap")}
                className="apple-btn-primary apple-press"
              >
                <span>Explore Selected Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                onClick={() => playHapticClick("tap")}
                className="apple-btn-secondary apple-press"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Spec Metrics Bar */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-left w-full max-w-md">
              <div>
                <p className="text-2xl font-bold tracking-tight text-text-primary">100+</p>
                <p className="text-xs font-medium text-text-muted mt-0.5">Daily Live Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-text-primary">4+</p>
                <p className="text-xs font-medium text-text-muted mt-0.5">Production Apps</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-text-primary">NUST</p>
                <p className="text-xs font-medium text-text-muted mt-0.5">SEECS CS &apos;29</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Apple System Inspector (SKILL.md §2 & §12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...appleSpringDefault, delay: 0.15 }}
            className="w-full"
          >
            <div className="apple-card overflow-hidden shadow-2xl">
              {/* Apple Window Header with Traffic Lights & Segmented Tabs */}
              <div className="flex flex-col border-b border-border bg-surface-secondary/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                  </div>
                  <span className="ml-2 text-xs font-mono font-medium text-text-muted">
                    Saifullah.inspector.ts
                  </span>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <button
                    onClick={handleCopyCode}
                    aria-label="Copy inspector specs"
                    className="flex h-7 items-center gap-1.5 rounded-lg border border-border bg-surface px-2 text-[11px] font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent apple-press"
                  >
                    {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Segmented Control Bar (Apple WWDC Fluid Tab Strip) */}
              <div className="flex items-center border-b border-border/60 bg-surface/40 p-1.5 overflow-x-auto no-scrollbar">
                {inspectorTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        playHapticClick("tap");
                        setActiveTab(tab.id);
                      }}
                      className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap apple-press ${
                        isActive
                          ? "text-accent font-semibold"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="hero-inspector-tab"
                          className="absolute inset-0 -z-10 rounded-lg bg-surface shadow-sm border border-border/80"
                          transition={{ type: "spring", stiffness: 420, damping: 30 }}
                        />
                      )}
                      <Icon size={13} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Inspector Content Body */}
              <div className="min-h-[260px] p-5 font-mono text-xs leading-relaxed">
                {activeTab === "specs" && (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 text-text-secondary"
                  >
                    <p className="text-accent font-semibold font-sans mb-3 text-[13px]">
                      {"// Developer Identity & Focus"}
                    </p>
                    {Object.entries(specsData).map(([key, val]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-start">
                        <span className="w-32 shrink-0 text-text-muted">{key}:</span>
                        <span className="text-text-primary font-medium">{val}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "stack" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-accent font-semibold font-sans mb-2 text-[13px]">
                      {"// System Architecture & Technologies"}
                    </p>
                    {Object.entries(stackData).map(([category, items]) => (
                      <div key={category} className="space-y-1.5">
                        <span className="text-text-muted uppercase text-[10px] tracking-wider font-semibold">
                          {category.replace("_", " ")}:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="rounded-md border border-border bg-surface-secondary px-2 py-0.5 text-[11px] text-text-primary"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "metrics" && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <p className="text-accent font-semibold font-sans mb-2 text-[13px]">
                      {"// Real-World Impact Telemetry"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {telemetryData.map((tel) => (
                        <div
                          key={tel.label}
                          className="rounded-xl border border-border bg-surface-secondary/60 p-3"
                        >
                          <p className="text-xs text-text-muted">{tel.label}</p>
                          <p className="text-sm font-bold text-accent mt-0.5">{tel.stat}</p>
                          <p className="text-[11px] text-text-secondary mt-1">{tel.detail}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "credo" && (
                  <motion.div
                    key="credo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-pre-wrap text-text-secondary leading-loose"
                  >
                    {philosophyText}
                  </motion.div>
                )}
              </div>

              {/* Bottom Specular Footnote */}
              <div className="flex items-center justify-between border-t border-border bg-surface-secondary/40 px-4 py-2.5 text-[11px] text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Kernel: Next.js 14 · Framer Motion 11
                </span>
                <span>Lat: 0.0ms</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
