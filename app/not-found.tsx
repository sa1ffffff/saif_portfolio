import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 text-center">
      <div className="rounded-2xl border border-border bg-surface p-10">
        <p className="section-label">404</p>
        <h1 className="mt-3 text-4xl font-bold text-textPrimary">Page not found</h1>
        <p className="mt-4 text-textSecondary">The page you requested does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full border border-border px-5 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
