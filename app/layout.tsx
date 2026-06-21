import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saifullahwaseem.dev"),
  title: {
    default: "Saifullah Waseem | Full-Stack Developer",
    template: "%s | Saifullah Waseem"
  },
  applicationName: "Saifullah Waseem Portfolio",
  description:
    "Portfolio of Saifullah Waseem — CS student at NUST SEECS building full-stack web apps, Android apps, and AI-assisted software with React, TypeScript, Kotlin, and Firebase.",
  keywords: [
    "Saifullah Waseem",
    "Portfolio",
    "Full-stack Developer",
    "NUST SEECS",
    "React",
    "Next.js",
    "TypeScript",
    "Kotlin",
    "Firebase",
    "Supabase",
    "TensorFlow",
    "Android Developer"
  ],
  authors: [{ name: "Saifullah Waseem", url: "https://saifullahwaseem.dev" }],
  creator: "Saifullah Waseem",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Saifullah Waseem | Full-Stack Developer",
    description:
      "CS student at NUST SEECS. Full-stack developer building web apps, mobile tools, and AI-assisted software — from idea to deployment.",
    url: "https://saifullahwaseem.dev",
    siteName: "Saifullah Waseem Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Saifullah Waseem — Full-Stack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saifullah Waseem | Full-Stack Developer",
    description:
      "CS student at NUST SEECS. Full-stack developer building web apps, mobile tools, and AI-assisted software.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafe" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
