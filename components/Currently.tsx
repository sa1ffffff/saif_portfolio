"use client";

import { motion } from "framer-motion";
import { currentlyDoing } from "@/lib/data";
import { appleFadeUpItem, appleStaggerContainer } from "@/lib/springs";

export default function Currently() {
  return (
    <section id="currently" className="relative border-t border-border/80 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-content">
        
        {/* Section Header (SKILL.md §15) */}
        <div className="mb-14">
          <span className="section-label">Live Activity / 05</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Active focus & ongoing sprints.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            Real-time focus areas currently undergoing active iteration.
          </p>
        </div>

        {/* Apple Watch / iOS Modular Widgets Grid (SKILL.md §12) */}
        <motion.div
          variants={appleStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {currentlyDoing.map((item) => (
            <motion.div
              key={item.title}
              variants={appleFadeUpItem}
              className="apple-card group relative flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-secondary text-2xl border border-border shadow-sm">
                    {item.emoji}
                  </div>
                  <span className="live-status-dot" />
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="text-accent font-semibold">Active</span>
                <span>2026</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
