"use client";

import { socialLinks } from "@/lib/data";
import { playHapticClick } from "@/lib/sound";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/30 backdrop-blur-xl py-14 px-4 md:px-8">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Identity & Heritage */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold tracking-tight text-text-primary">
              Saifullah Waseem
            </span>
            <p className="text-xs text-text-secondary max-w-md">
              Full-Stack Developer & CS Student at NUST SEECS. Building high-performance web systems, Android software, and enterprise solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("tap")}
              className="text-text-secondary transition-colors hover:text-accent apple-press"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("tap")}
              className="text-text-secondary transition-colors hover:text-accent apple-press"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("tap")}
              className="text-text-secondary transition-colors hover:text-accent apple-press"
            >
              Email
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("tap")}
              className="text-text-secondary transition-colors hover:text-accent apple-press"
            >
              WhatsApp
            </a>
            <a
              href="/Saifullah_Waseem_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("tap")}
              className="text-accent transition-colors hover:text-accent-hover apple-press"
            >
              Resume ↗
            </a>
          </div>

        </div>

        {/* Apple Sub-Footer Spec Line */}
        <div className="mt-10 border-t border-border/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-text-muted">
          <p>© {new Date().getFullYear()} Saifullah Waseem. All rights reserved.</p>
          <p className="font-mono">
            Designed according to Apple Human Interface & Fluid Motion Principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
