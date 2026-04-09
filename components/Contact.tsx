"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

const contacts = [
  {
    icon: Mail,
    text: "saifullahwasim1@gmail.com",
    href: "mailto:saifullahwasim1@gmail.com"
  },
  {
    icon: Phone,
    text: "+92 312 363 9722 (WhatsApp)",
    href: "https://wa.me/923123639722"
  },
  {
    icon: Github,
    text: "github.com/sa1ffffff",
    href: "https://github.com/sa1ffffff"
  },
  {
    icon: Linkedin,
    text: "linkedin.com/in/saifullah-waseem",
    href: "https://linkedin.com/in/saifullah-waseem"
  }
];

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Let&apos;s build something together.</h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-textSecondary">
            I&apos;m open to internships, freelance projects, hackathon collaborations, and full-time roles after
            graduation. If you have something in mind — let&apos;s talk.
          </p>

          <div className="mt-10 space-y-4">
            {contacts.map((item) => {
              const Icon = item.text.includes("WhatsApp") ? FaWhatsapp : item.icon;
              return (
                <a
                  key={item.text}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-4 text-lg text-textPrimary transition hover:text-accent"
                >
                  <Icon className="h-5 w-5 text-accentSecondary" />
                  <span>{item.text}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
