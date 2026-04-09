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
    <section id="contact" className="border-t border-border">
      <div ref={ref} className="mx-auto max-w-content px-5 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-textSecondary">
            I&apos;m open to internships, freelance projects, hackathon collaborations, and full-time roles after
            graduation. If you have something in mind — let&apos;s talk.
          </p>
          <div className="mt-10 flex items-center gap-5">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-transparent transition-all duration-300 hover:border-accent hover:bg-accent/10"
                >
                  <Icon className="h-5 w-5 text-textSecondary transition-colors duration-300 group-hover:text-accent" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
