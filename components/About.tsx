"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutTechStacks } from "@/lib/data";

const stats = [
  { value: "4+", label: "Production Apps" },
  { value: "2+", label: "Years Building" },
  { value: "6+", label: "Languages" },
  { value: "3", label: "Live Deployments" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-10"
        >
          <motion.p variants={itemVariants} className="section-label">About</motion.p>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div variants={containerVariants} className="space-y-5 text-[15px] leading-[1.75] text-text-secondary">
              <motion.p variants={itemVariants}>
                I&apos;m Saifullah, a Computer Science student at NUST SEECS, Islamabad, building at the intersection
                of full-stack development, AI integration, and systems design.
              </motion.p>
              <motion.p variants={itemVariants}>
                I started with C++ and quickly moved into full-stack territory, shipping production apps with React,
                TypeScript, Supabase, and PostgreSQL — including the Zones Mess Menu, an internal web app serving
                100+ daily users at Zones LLC Islamabad. Most recently I&apos;ve been working with
                Firebase and Kotlin Jetpack Compose on SAFAR, a ride-sharing mobile app built for NUST students.
              </motion.p>
              <motion.p variants={itemVariants}>
                My focus right now: DSA (Striver&apos;s A2Z + NeetCode 150), Andrew Ng&apos;s Deep Learning Specialization,
                and AI-assisted development. I like building things that solve real problems for real people — not demo projects.
              </motion.p>
              <motion.p variants={itemVariants}>
                Outside code, I work as an Account Executive at Zones LLC handling B2B tech sales for US enterprise clients,
                and previously served as a Technical Specialist at SquareTrade-AllState handling 50+ claims daily.
              </motion.p>
            </motion.div>

            {/* Stats card */}
            <motion.div
              variants={itemVariants}
              className="card-base rounded-2xl p-7 self-start"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-bold text-accent">{item.value}</p>
                    <p className="mt-1.5 text-sm text-text-secondary">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
            {aboutTechStacks.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
