export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-secondary/50">
      <div className="mx-auto max-w-content px-5 py-12 text-center md:px-8">
        <p className="text-sm font-medium text-text-secondary">Saifullah Waseem · NUST SEECS · Built with Next.js & Tailwind</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://github.com/sa1ffffff"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-secondary font-medium transition hover:text-accent-light"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saifullah-waseem"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-secondary font-medium transition hover:text-accent-light"
          >
            LinkedIn
          </a>
          <a
            href="mailto:saifullahwasim1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-secondary font-medium transition hover:text-accent-light"
          >
            Email
          </a>
          <a
            href="https://wa.me/923123639722"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-secondary font-medium transition hover:text-accent-light"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs font-medium text-text-muted">© 2026 Saifullah Waseem. All rights reserved.</p>
      </div>
    </footer>
  );
}
