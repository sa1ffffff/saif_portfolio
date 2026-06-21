"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { socialLinks } from "@/lib/data";

// Custom WhatsApp SVG to avoid bringing in react-icons just for one icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

const contacts = [
  { icon: Mail, href: socialLinks.email, label: "Email" },
  { icon: WhatsAppIcon, href: socialLinks.whatsapp, label: "WhatsApp" },
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="border-t border-border relative overflow-hidden bg-surface-secondary">
      {/* Decorative background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-content px-5 py-32 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent mb-6">
            <Mail size={24} />
          </div>
          
          <h2 className="text-4xl font-bold leading-tight md:text-6xl font-serif">
            Let&apos;s build something <span className="gradient-text">exceptional.</span>
          </h2>
          
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            Open to internships, freelance projects, hackathon collaborations, and full-time opportunities. 
            If you have an idea worth building — let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-text-secondary shadow-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </div>

          <a
            href={socialLinks.email}
            className="mt-12 inline-flex items-center gap-2 link-underline text-lg font-semibold text-text-primary"
          >
            Say hello <ArrowRight size={18} className="text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
