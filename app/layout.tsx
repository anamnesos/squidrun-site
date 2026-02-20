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
  metadataBase: new URL("https://squidrun.com"),
  title: "SquidRun — Multi-Agent AI Orchestrator",
  description:
    "Run multiple AI coding agents in parallel. Claude, Codex, and Gemini working together in coordinated panes. One desktop app, unlimited arms.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon-32.png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "SquidRun — Multi-Agent AI Orchestrator",
    description:
      "Run multiple AI coding agents in parallel. One desktop app, unlimited arms.",
    url: "https://squidrun.com",
    siteName: "SquidRun",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 768,
        height: 1366,
        alt: "SquidRun logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SquidRun — Multi-Agent AI Orchestrator",
    description:
      "Run multiple AI coding agents in parallel. One desktop app, unlimited arms.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.scrollTo(0,0)` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
