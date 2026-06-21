"use client";

import { experiences } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="border-t border-border bg-surface-secondary">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="section-label">Experience</motion.p>

          <div className="mt-12 space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.title}
                variants={itemVariants}
                className="group relative border-l-2 pl-8 transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Accent line that fills on hover */}
                <div 
                  className="absolute bottom-0 left-[-2px] top-0 w-[2px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ background: "var(--gradient-accent)" }}
                />

                {/* Dot marker */}
                <span className="absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-surface">
                  <span className="h-3 w-3 rounded-full transition-colors duration-300 group-hover:bg-accent" style={{ backgroundColor: "var(--border)" }} />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-text-muted shrink-0">{exp.date}</p>
                </div>
                
                <p className="mt-1 text-sm font-medium text-accent">{exp.location}</p>

                <div className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-text-secondary">
                  {exp.details.map((detail) => (
                    <p key={`${index}-${detail}`}>{detail}</p>
                  ))}
                </div>

                {exp.skills && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
