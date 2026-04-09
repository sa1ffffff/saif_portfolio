"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Contact", href: "#contact", section: "contact" },
  { label: "GitHub", href: "https://github.com/sa1ffffff", external: true }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "work", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 md:px-8">
        <Link href="#hero" className="text-lg font-bold tracking-tight">
          Saifullah<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-textSecondary transition-colors hover:text-textPrimary"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`link-underline text-sm transition-colors ${
                  activeSection === item.section ? "text-accent" : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="/Saifullah_Waseem_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
          >
            Resume ↗
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="text-textPrimary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-border bg-surface md:hidden"
          >
            <div className="mx-auto flex max-w-content flex-col px-5 py-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 text-textSecondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`py-2 ${activeSection === item.section ? "text-accent" : "text-textSecondary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="/Saifullah_Waseem_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-2 text-textPrimary"
                onClick={() => setIsOpen(false)}
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
