export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-5 py-10 text-center md:px-8">
        <p className="text-sm text-textSecondary">Saifullah Waseem · NUST SEECS · Built with Next.js & Tailwind</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-sm">
          <a
            href="https://github.com/sa1ffffff"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-textSecondary transition hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saifullah-waseem"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-textSecondary transition hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:saifullahwasim1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-textSecondary transition hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://wa.me/923123639722"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-textSecondary transition hover:text-accent"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs text-textMuted">© 2026 Saifullah Waseem. All rights reserved.</p>
      </div>
    </footer>
  );
}
