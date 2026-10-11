"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleFadeUpItem, appleStaggerContainer } from "@/lib/springs";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    playHapticClick("tap");
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="relative border-t border-border/80 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-content">
        
        {/* Section Header (SKILL.md §15) */}
        <div className="mb-14">
          <span className="section-label">Trajectory / 03</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Enterprise execution & education.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            Proven track record across corporate tech sales, technical claim triage, and formal Computer Science rigor.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <motion.div
          variants={appleStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.article
                key={exp.title}
                variants={appleFadeUpItem}
                className="apple-card overflow-hidden p-6 sm:p-8"
              >
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent border border-accent/20">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-text-primary">
                          {exp.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-3 text-xs text-text-muted">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-accent" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <span className="rounded-full bg-surface-secondary border border-border px-3 py-1 text-xs font-mono font-medium text-text-muted">
                        <Calendar size={11} className="inline mr-1 text-accent" />
                        {exp.date}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="text-text-muted hidden sm:block"
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <div className="mt-6 space-y-2.5 text-[14.5px] leading-relaxed text-text-secondary border-t border-border/60 pt-5">
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-accent mt-1 text-xs">◆</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Skill tags */}
                {exp.skills && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
