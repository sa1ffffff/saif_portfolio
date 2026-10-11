"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Copy, Check } from "lucide-react";
import { useState } from "react";
import { certifications } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleFadeUpItem, appleStaggerContainer } from "@/lib/springs";

export default function Certifications() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string) => {
    playHapticClick("pop");
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="relative border-t border-border/80 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-content">
        
        {/* Section Header (SKILL.md §15) */}
        <div className="mb-14">
          <span className="section-label">Certifications / 04</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Verified mastery in AI & Deep Learning.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            Rigorous professional certifications issued by DeepLearning.AI and IBM.
          </p>
        </div>

        {/* Apple Wallet Style Credential Pass Cards (SKILL.md §12) */}
        <motion.div
          variants={appleStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.credentialId}
              variants={appleFadeUpItem}
              className="apple-card group relative flex flex-col justify-between p-7 sm:p-9"
            >
              <div>
                {/* Header: Issuer badge & Verified status */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent border border-accent/20">
                      <Award size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{cert.issuer}</h4>
                      <p className="text-xs font-mono text-text-muted">{cert.date}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-text-primary leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {cert.description}
                </p>

                {/* Credential ID Chip with Copy */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-surface-secondary/70 px-3.5 py-2">
                  <span className="font-mono text-xs text-text-muted">
                    ID: <strong className="text-text-primary font-semibold">{cert.credentialId}</strong>
                  </span>
                  <button
                    onClick={() => handleCopyId(cert.credentialId)}
                    aria-label={`Copy credential ID ${cert.credentialId}`}
                    className="flex items-center gap-1 text-[11px] font-semibold text-accent transition-colors hover:text-accent-hover apple-press"
                  >
                    {copiedId === cert.credentialId ? (
                      <>
                        <Check size={12} className="text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Skill Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playHapticClick("pop")}
                  className="apple-btn-secondary apple-press w-full"
                >
                  <span>Verify Credential on Coursera</span>
                  <ExternalLink size={15} />
                </a>
              </div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
