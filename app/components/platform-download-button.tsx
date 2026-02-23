"use client";

import { useMemo } from "react";

const RELEASE_VERSION = "0.1.10";
const RELEASES_LATEST_URL = "https://github.com/anamnesos/SquidRun/releases/latest";
const RELEASE_BASE_URL = `https://github.com/anamnesos/SquidRun/releases/download/v${RELEASE_VERSION}`;

type PlatformTarget = "mac" | "windows" | "linux" | "unknown";

function detectPlatformFromNavigator(nav: Navigator): PlatformTarget {
  const userAgent = nav.userAgent.toLowerCase();
  const platform = nav.platform.toLowerCase();

  if (platform.includes("win") || userAgent.includes("windows")) {
    return "windows";
  }

  if (platform.includes("linux") || userAgent.includes("linux")) {
    return "linux";
  }

  if (platform.includes("mac") || userAgent.includes("mac os")) {
    return "mac";
  }

  return "unknown";
}

function mapPlatformToDownload(platform: PlatformTarget) {
  switch (platform) {
    case "mac":
      return {
        href: `${RELEASE_BASE_URL}/SquidRun-${RELEASE_VERSION}-universal.dmg`,
        label: "Download for Mac",
      };
    case "windows":
      return {
        href: `${RELEASE_BASE_URL}/SquidRun.Setup.${RELEASE_VERSION}.exe`,
        label: "Download for Windows",
      };
    case "linux":
      return {
        href: `${RELEASE_BASE_URL}/SquidRun-${RELEASE_VERSION}.AppImage`,
        label: "Download for Linux",
      };
    default:
      return {
        href: RELEASES_LATEST_URL,
        label: "Download Latest Release",
      };
  }
}

export function PlatformDownloadButton({ className }: { className: string }) {
  const platform = useMemo<PlatformTarget>(() => {
    if (typeof window === "undefined") {
      return "unknown";
    }

    return detectPlatformFromNavigator(window.navigator);
  }, []);

  const { href, label } = useMemo(() => mapPlatformToDownload(platform), [platform]);

  return (
    <a href={href} className={className}>
      <DownloadIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
