"use client";

import { certifications } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Certifications() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="certifications" className="border-t border-border bg-surface-secondary/50">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="section-label">Certifications & Training</motion.p>
          <motion.h2 
            variants={itemVariants} 
            className="mt-6 text-3xl font-bold leading-tight text-text-primary md:text-4xl font-serif"
          >
            Continuous Learning.
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <motion.article
                key={cert.credentialId}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                className="card-base group relative flex h-full flex-col p-6 sm:p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border shadow-sm text-accent">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{cert.issuer}</p>
                      <p className="text-xs font-semibold text-text-muted">{cert.date}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-bold text-text-primary leading-snug">{cert.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-text-secondary flex-grow">{cert.description}</p>
                
                {/* Credential ID */}
                <div className="mt-5 mb-2">
                  <p className="text-xs font-mono text-text-muted">ID: {cert.credentialId}</p>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Credential Button - Hidden by default, reveals on hover like Work cards or as a subtle absolute overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-surface/95 rounded-2xl z-10">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify credential ${cert.credentialId}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex w-44 items-center justify-between rounded-xl border border-accent bg-accent-soft px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    View Credential
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
