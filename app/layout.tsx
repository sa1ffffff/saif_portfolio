import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://saifullahwaseem.dev"),
  title: {
    default: "Saifullah Waseem | Full-Stack Developer",
    template: "%s | Saifullah Waseem"
  },
  applicationName: "Saifullah Waseem Portfolio",
  description:
    "Portfolio of Saifullah Waseem — CS student at NUST SEECS building full-stack, mobile, and AI-assisted software.",
  keywords: [
    "Saifullah Waseem",
    "Portfolio",
    "Full-stack Developer",
    "NUST SEECS",
    "React",
    "Next.js",
    "TypeScript"
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
    title: "Saifullah Waseem | Portfolio",
    description:
      "CS student at NUST SEECS. Full-stack developer and systems thinker building software that matters.",
    url: "https://saifullahwaseem.dev",
    siteName: "Saifullah Waseem Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        alt: "Saifullah Waseem portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saifullah Waseem | Portfolio",
    description:
      "CS student at NUST SEECS. Full-stack developer and systems thinker building software that matters.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
