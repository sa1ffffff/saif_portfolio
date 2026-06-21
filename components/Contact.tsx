"use client";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

const contacts = [
  { icon: Mail, href: "mailto:saifullahwasim1@gmail.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/923123639722", label: "WhatsApp" },
  { icon: Github, href: "https://github.com/sa1ffffff", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saifullah-waseem", label: "LinkedIn" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="border-t border-border relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-violet-300/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-200/30 to-transparent rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl font-serif">
            Let&apos;s build something <span className="gradient-text">exceptional</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Open to internships, freelance projects, hackathon collaborations, and full-time opportunities after graduation. If you have an idea worth building—let&apos;s talk.
          </p>
          <div className="mt-12 flex items-center gap-4">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group flex h-12 w-12 items-center justify-center rounded-lg border-2 transition-all duration-300"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  <Icon className="h-5 w-5 transition-all duration-300" style={{ color: '#7c3aed' }} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
