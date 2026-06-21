import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm font-medium text-text-primary">Saifullah Waseem</p>
            <p className="text-xs text-text-muted">Built with Next.js & Tailwind CSS</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-secondary transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-secondary transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-secondary transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-secondary transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 flex items-center justify-center border-t border-border/50 pt-8 md:justify-start">
          <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
            © 2026 Saifullah Waseem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
