"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto flex min-h-screen w-full max-w-content items-center px-5 pt-20 md:px-8">
      <div className="grid w-full items-center gap-12 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="section-label mb-6">Available for work • Islamabad, Pakistan</p>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-7xl font-serif">
            Building software
            <br />
            that matters.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            CS student at NUST SEECS. Full-stack developer and systems thinker. I craft web apps, mobile tools, and
            AI-assisted software—from ideation to deployment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 hover:shadow-lg shadow-accent/20"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-accent-light/30 px-7 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-light hover:bg-accent-soft"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative hidden h-96 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-soft/40 to-transparent md:block shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e0e7ff_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/5 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-xs rounded-xl border border-accent-light/20 bg-white/80 backdrop-blur-sm p-5 font-mono text-xs text-text-primary shadow-lg">
            <div className="text-accent-light">{`> shipping.production("web + mobile + ai")`}</div>
            <div className="mt-2 text-text-secondary">status: building</div>
            <div className="mt-2 inline-block animate-pulse">→</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
