"use client";

import Link from "next/link";
import { Menu, X, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { playHapticClick, isSoundEnabled, setSoundEnabled } from "@/lib/sound";
import { appleSpringSnappy } from "@/lib/springs";

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Certifications", href: "#certifications", section: "certifications" },
  { label: "Contact", href: "#contact", section: "contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "work", "experience", "certifications", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section: string) => {
    playHapticClick("tap");
    setActiveSection(section);
  };

  const handleToggleTheme = () => {
    playHapticClick("switch");
    toggle();
  };

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      playHapticClick("pop");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 transition-all duration-300">
      {/* Floating Translucent Apple Island (SKILL.md §12) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={appleSpringSnappy}
        className={`w-full max-w-content rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          scrolled
            ? "apple-glass shadow-lg"
            : "border border-border/40 bg-surface/40 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand with tactile spring */}
          <Link
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className="group flex items-center gap-2.5 apple-press"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs tracking-tight transition-transform group-hover:scale-105">
              SW
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                Saifullah Waseem
              </span>
              <span className="hidden sm:inline-block text-[10px] text-text-muted font-mono tracking-normal -mt-0.5">
                NUST SEECS · CS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.section)}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-150 apple-press ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="apple-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-soft border border-accent/25"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Tools: Sound, Theme, Resume */}
          <div className="flex items-center gap-2">
            {/* Audio-Haptic Feedback Toggle (SKILL.md §13) */}
            <button
              onClick={handleToggleSound}
              aria-label={soundOn ? "Disable tactile audio feedback" : "Enable tactile audio feedback"}
              title={soundOn ? "Tactile audio feedback enabled" : "Tactile audio feedback disabled"}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent apple-press"
            >
              {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} className="opacity-50" />}
            </button>

            {/* Apple Theme Switcher with Spring Rotation */}
            <button
              onClick={handleToggleTheme}
              aria-label="Toggle display theme"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-accent hover:text-accent apple-press"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  >
                    <Sun size={14} className="text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  >
                    <Moon size={14} className="text-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume CTA */}
            <a
              href="/Saifullah_Waseem_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playHapticClick("pop")}
              className="hidden sm:inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-white apple-press"
            >
              Resume ↗
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              aria-label="Toggle navigation menu"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-primary md:hidden apple-press"
              onClick={() => {
                playHapticClick("switch");
                setIsOpen((prev) => !prev);
              }}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              className="overflow-hidden pt-4 pb-2 md:hidden border-t border-border/50 mt-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      handleNavClick(item.section);
                      setIsOpen(false);
                    }}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors apple-press ${
                      activeSection === item.section
                        ? "bg-accent-soft text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-3 px-1">
                  <a
                    href="/Saifullah_Waseem_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-accent bg-accent-soft px-4 py-2 text-xs font-semibold text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    View Resume ↗
                  </a>
                  <button
                    onClick={handleToggleSound}
                    className="flex items-center gap-1.5 text-xs text-text-muted"
                  >
                    {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    <span>{soundOn ? "Sound On" : "Muted"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
