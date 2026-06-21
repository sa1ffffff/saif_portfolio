"use client";

import { experiences } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="experience" className="border-t border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-violet-200/30 to-transparent rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Experience</p>

          <div className="mt-12 space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative border-l-2 pl-7 transition-all duration-300 hover:pl-9"
                style={{ borderColor: '#7c3aed' }}
              >
                <span className="absolute -left-3 top-0 h-6 w-6 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: '#7c3aed' }} />
                <p className="text-xs uppercase tracking-widest font-semibold text-text-muted">{exp.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-primary">{exp.title}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: '#7c3aed' }}>{exp.location}</p>

                <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-text-secondary">
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
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
