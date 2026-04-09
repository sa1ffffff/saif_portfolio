"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto flex min-h-screen w-full max-w-content items-center px-5 pt-20 md:px-8">
      <div className="grid w-full items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="section-label mb-5">Available for work · Islamabad, Pakistan</p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-textPrimary sm:text-6xl lg:text-7xl">
            Building software
            <br />
            that matters.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-textSecondary md:text-[17px]">
            CS student at NUST SEECS. Full-stack developer and systems thinker. I build web apps, mobile tools, and
            AI-assisted software — from idea to deployment.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
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
          className="relative hidden h-[380px] overflow-hidden rounded-2xl border border-border bg-surface md:block"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8824_1px,transparent_1px),linear-gradient(to_bottom,#00ff8824_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00ff880f] to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-xs rounded-lg border border-[#00ff8840] bg-black/30 p-4 font-mono text-xs text-[#9cffca]">
            <div>{">"} shipping.production("web + mobile + ai")</div>
            <div className="mt-2 text-[#6af7b2]">status: building</div>
            <div className="mt-2 animate-pulse">_</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
