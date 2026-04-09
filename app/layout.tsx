import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Saifullah Waseem | Full-Stack Developer",
  description:
    "Portfolio of Saifullah Waseem — CS student at NUST SEECS building full-stack, mobile, and AI-assisted software.",
  metadataBase: new URL("https://saifullahwaseem.dev"),
  openGraph: {
    title: "Saifullah Waseem | Portfolio",
    description:
      "CS student at NUST SEECS. Full-stack developer and systems thinker building software that matters.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
