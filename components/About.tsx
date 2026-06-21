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
    <section id="about" className="border-t border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/30 to-transparent rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="space-y-10"
        >
          <p className="section-label">About</p>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-[16px] leading-relaxed text-text-secondary">
              <p>
                I&apos;m Saifullah, a Computer Science student at NUST SEECS, Islamabad, building at the intersection
                of full-stack development, AI integration, and systems design.
              </p>
              <p>
                I started with C++ and quickly moved into full-stack territory, shipping production apps with React,
                TypeScript, Supabase, and PostgreSQL—including the Zones Mess Menu, an internal web app I built for
                Zones LLC Islamabad using TanStack Router and shadcn/ui. Most recently I&apos;ve been working with
                Firebase and Kotlin Jetpack Compose on SAFAR, a ride-sharing mobile app built for NUST students.
              </p>
              <p>
                My focus right now: Java, ML/AI, C++, Firebase, and AI-assisted development using tools like Claude
                Code. I like building things that solve real problems for real people, not just demo projects.
              </p>
              <p>
                Outside code, I&apos;ve worked professionally as a Technical Specialist at SquareTrade-AllState Global handling 50+
                insurance claims daily, which taught me more about clear communication and pressure than any class did.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border-2 p-7 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: '#e2e8f0',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(88, 80, 236, 0.04) 100%)'
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold" style={{ color: '#7c3aed' }}>{item.value}</p>
                    <p className="mt-1.5 text-sm font-medium text-text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
