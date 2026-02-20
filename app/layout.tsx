import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SquidRun — Multi-Agent AI Orchestrator",
  description:
    "Run multiple AI coding agents in parallel. Claude, Codex, and Gemini working together in coordinated panes. One desktop app, unlimited arms.",
  openGraph: {
    title: "SquidRun — Multi-Agent AI Orchestrator",
    description:
      "Run multiple AI coding agents in parallel. One desktop app, unlimited arms.",
    url: "https://squidrun.com",
    siteName: "SquidRun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SquidRun — Multi-Agent AI Orchestrator",
    description:
      "Run multiple AI coding agents in parallel. One desktop app, unlimited arms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
