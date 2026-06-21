"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-screen w-full max-w-content items-center px-5 pt-20 md:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-300/40 via-purple-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/40 via-cyan-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-transparent rounded-full blur-3xl" />
      </div>

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
            <span className="gradient-text">that matters.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            CS student at NUST SEECS. Full-stack developer and systems thinker. I craft web apps, mobile tools, and
            AI-assisted software—from ideation to deployment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg glow-accent"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5850ec 100%)' }}
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border-2 px-7 py-3 text-sm font-semibold text-text-primary transition duration-300 hover:scale-105"
              style={{ borderColor: '#5850ec', backgroundColor: 'rgba(88, 80, 236, 0.08)' }}
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
          className="relative hidden h-96 overflow-hidden rounded-3xl border-2 md:block glow-accent"
          style={{ 
            borderColor: '#e2e8f0',
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(88, 80, 236, 0.05) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e0e7ff_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-xs rounded-xl border border-accent-light/30 backdrop-blur-hero p-5 font-mono text-xs text-text-primary">
            <div style={{ color: '#7c3aed' }}>{`> shipping.production("web + mobile + ai")`}</div>
            <div className="mt-2 text-text-secondary">status: building</div>
            <div className="mt-2 inline-block animate-pulse">→</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
