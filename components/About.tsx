"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutTechStacks } from "@/lib/data";

const stats = [
  { value: "3+", label: "Production Apps" },
  { value: "2+", label: "Years Building" },
  { value: "5+", label: "Languages" },
  { value: "1", label: "Live Deployment" }
];

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="space-y-10"
        >
          <p className="section-label">About</p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-[16px] leading-[1.7] text-textSecondary">
              <p>
                I&apos;m Saifullah, a Computer Science student at NUST SEECS, Islamabad, building at the intersection
                of full-stack development, AI integration, and systems design.
              </p>
              <p>
                I started with C++ and quickly moved into full-stack territory, shipping a production app (NUST Lost
                & Found) with React, TypeScript, Supabase, and PostgreSQL while the semester was still running. Most
                recently I&apos;ve been working with Firebase and Kotlin Jetpack Compose on SAFAR, a ride-sharing
                mobile app built for NUST students.
              </p>
              <p>
                My focus right now: Java, ML/AI, C++, Firebase, and AI-assisted development using tools like Claude
                Code. I like building things that solve real problems for real people, not just demo projects.
              </p>
              <p>
                Outside code, I&apos;ve worked professionally as a Technical Specialist at SquareTrade - AllState Global handling 50+
                insurance claims daily, which taught me more about clear communication and pressure than any class did.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold text-textPrimary">{item.value}</p>
                    <p className="mt-1 text-sm text-textSecondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {aboutTechStacks.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
