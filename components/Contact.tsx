"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, Copy, Check, MessageSquare } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";
import { appleFadeUpItem, appleSpringDefault, appleStaggerContainer } from "@/lib/springs";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
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

const channels = [
  {
    label: "Direct Email",
    detail: "saifullahwasim1@gmail.com",
    href: socialLinks.email,
    icon: Mail,
    cta: "Send Email"
  },
  {
    label: "WhatsApp",
    detail: "+92 312 3639722",
    href: socialLinks.whatsapp,
    icon: WhatsAppIcon,
    cta: "Chat Directly"
  },
  {
    label: "LinkedIn",
    detail: "/in/saifullah-waseem",
    href: socialLinks.linkedin,
    icon: Linkedin,
    cta: "Connect"
  },
  {
    label: "GitHub",
    detail: "github.com/sa1ffffff",
    href: socialLinks.github,
    icon: Github,
    cta: "View Repos"
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playHapticClick("pop");
    navigator.clipboard.writeText("saifullahwasim1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative border-t border-border/80 px-4 py-32 md:px-8 overflow-hidden">
      {/* Specular Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-accent/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-content">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">Initiate Contact / 06</span>
          <h2 className="keynote-title mt-4 text-text-primary">
            Let&apos;s build something{" "}
            <span className="italic font-serif font-normal text-accent">
              exceptional.
            </span>
          </h2>
          <p className="keynote-sub mt-6 max-w-2xl mx-auto text-text-secondary">
            Available for full-stack engineering roles, internships, enterprise software consultations, and collaborative breakthroughs.
          </p>

          {/* Quick Copy Email Action Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-semibold text-text-primary shadow-sm backdrop-blur-xl transition-all hover:border-accent hover:text-accent apple-press"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-500">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy saifullahwasim1@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="/Saifullah_Waseem_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("pop")}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-5 py-2.5 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-white apple-press"
            >
              <span>Download Official Resume</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* 4 Interactive Contact Channel Cards */}
        <motion.div
          variants={appleStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {channels.map((chan) => {
            const Icon = chan.icon;
            return (
              <motion.a
                key={chan.label}
                href={chan.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playHapticClick("tap")}
                variants={appleFadeUpItem}
                className="apple-card group flex flex-col justify-between p-6 sm:p-7 apple-press"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-secondary text-accent border border-border transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-text-primary">
                    {chan.label}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-text-muted truncate">
                    {chan.detail}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold text-accent">
                  <span>{chan.cta}</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Location & Timezone Indicator */}
        <div className="mt-14 flex items-center justify-center gap-2 text-xs font-medium text-text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Located in Islamabad, Pakistan (PKT / UTC+5) · Responsive within 24h</span>
        </div>

      </div>
    </section>
  );
}
