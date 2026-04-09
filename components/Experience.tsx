"use client";

import { experiences } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="experience" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Experience</p>

          <div className="mt-10 space-y-10">
            {experiences.map((exp, index) => (
              <article key={exp.title} className="relative border-l border-border pl-6">
                <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-accent" />
                <p className="text-sm text-textSecondary">{exp.date}</p>
                <h3 className="mt-1 text-xl font-bold text-textPrimary">{exp.title}</h3>
                <p className="mt-1 text-sm text-textSecondary">{exp.location}</p>

                <div className="mt-4 space-y-2 text-[15px] leading-[1.7] text-textSecondary">
                  {exp.details.map((detail) => (
                    <p key={`${index}-${detail}`}>{detail}</p>
                  ))}
                </div>

                {exp.skills ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
