import Image from "next/image";

type LaneTone = "success" | "warn" | "muted";

type TerminalLine = {
  text: string;
  tone?: LaneTone;
};

type TerminalLane = {
  title: string;
  agent: string;
  lines: TerminalLine[];
};

const terminalLanes: TerminalLane[] = [
  {
    title: "Pane 1 - Architect",
    agent: "claude",
    lines: [
      { text: "Reading session handoff..." },
      { text: "0 blockers | 0 unresolved claims", tone: "success" },
      { text: "Dispatching auth refactor -> Builder" },
      { text: "Dispatching spike analysis -> Oracle" },
      { text: "Waiting on consolidated report...", tone: "muted" },
    ],
  },
  {
    title: "Pane 2 - Builder",
    agent: "codex",
    lines: [
      { text: "Task accepted: auth token hardening", tone: "success" },
      { text: "Editing src/auth/middleware.ts" },
      { text: "Adding refresh-rotation guard" },
      { text: "Jest: 47/47 passing", tone: "success" },
      { text: "Replying to Architect with patch id", tone: "muted" },
    ],
  },
  {
    title: "Pane 3 - Oracle",
    agent: "gemini",
    lines: [
      { text: "Investigating /api/sync burst profile" },
      { text: "Correlation: 3x retry storm at deploy", tone: "warn" },
      { text: "Root cause: missing 500ms debounce", tone: "warn" },
      { text: "Recommendation attached with evidence", tone: "success" },
      { text: "Monitoring post-fix behavior...", tone: "muted" },
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground antialiased">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,90,252,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(139,125,255,0.18),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent transition-all group-hover:scale-[1.03] group-hover:border-accent/70">
              <Image
                src="/favicon-64.png"
                alt="SquidRun logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm object-cover"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight sm:text-xl">
              SquidRun
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-zinc-400 transition-colors hover:text-white">
              How It Works
            </a>
            <a
              href="https://github.com/anamnesos/squidrun-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
          <a
            href="#download"
            className="rounded-xl border border-accent/50 bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-[0_0_28px_rgba(109,90,252,0.35)]"
          >
            Download
          </a>
        </div>
      </nav>

      <section className="relative px-4 pb-20 pt-30 sm:px-6 sm:pt-36 lg:pb-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="animate-fade-in-up opacity-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium tracking-[0.14em] text-zinc-300 uppercase">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                Open Source Multi-Agent Runtime
              </div>
            </div>

            <h1 className="animate-fade-in-up opacity-0 delay-100 mt-6 text-4xl leading-[1.03] font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Coordinate three coding agents at once.
              <span className="mt-2 block bg-gradient-to-r from-accent via-accent-light to-indigo-300 bg-clip-text text-transparent">
                Keep one clear command center.
              </span>
            </h1>

            <p className="animate-fade-in-up opacity-0 delay-200 mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              SquidRun runs Architect, Builder, and Oracle in parallel terminal panes so architecture, implementation, and investigation happen at the same time.
              Local-first, model-agnostic, and built for focused execution.
            </p>

            <div className="animate-fade-in-up opacity-0 delay-300 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://github.com/anamnesos/squidrun-site/releases/latest"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-semibold text-white transition-all hover:translate-y-[-1px] hover:bg-accent-light hover:shadow-[0_0_28px_rgba(109,90,252,0.45)]"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Latest Release
              </a>
              <a
                href="https://github.com/anamnesos/squidrun-site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-7 text-base font-medium text-zinc-200 transition-all hover:border-zinc-600 hover:bg-surface-light hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
                Browse Source
              </a>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-400 mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <MetricPill label="Panes" value="3" />
              <MetricPill label="Roles" value="Architect, Builder, Oracle" compact />
              <MetricPill label="Runtime" value="Local-first" />
              <MetricPill label="Mode" value="Parallel" />
            </div>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-500 relative">
            <div className="mb-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[330px]">
                <Image
                  src="/squidrun-logo.png"
                  alt="SquidRun logo"
                  width={768}
                  height={1366}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(109,90,252,0.3)]"
                />
              </div>
            </div>
            <TerminalPreview />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why single-agent loops break down
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            One model doing everything burns context and forces serial work. SquidRun splits strategy, execution, and investigation across dedicated lanes with structured comms.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          <FeatureCard
            icon={<PanesIcon />}
            title="Parallel Panes"
            description="Three independent CLI sessions run simultaneously, each with isolated context and quota."
          />
          <FeatureCard
            icon={<BrainIcon />}
            title="Role Discipline"
            description="Architect coordinates, Builder executes, Oracle investigates. Less context thrash, faster handoffs."
          />
          <FeatureCard
            icon={<SwapIcon />}
            title="Model Agnostic"
            description="Assign Claude, Codex, or Gemini per pane and change at runtime without disrupting role boundaries."
          />
          <FeatureCard
            icon={<MessageIcon />}
            title="Structured Comms"
            description="Agents route updates through a protocol-first channel for reproducible delegation and traceability."
          />
          <FeatureCard
            icon={<MemoryIcon />}
            title="Automatic Memory"
            description="Session artifacts and handoffs are materialized automatically so agents resume with operational continuity."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Local by Default"
            description="No cloud relay layer. Keys and project data remain on your machine while CLIs authenticate directly."
          />
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border/80 bg-surface/55 px-4 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            From prompt to shipped change
          </h2>
          <div className="mt-12 space-y-10 sm:mt-16">
            <Step
              number={1}
              title="Connect your AI CLIs"
              description="Install Claude Code, Codex, or Gemini CLI. SquidRun detects available runtimes and maps them to panes."
            />
            <Step
              number={2}
              title="Launch and assign roles"
              description="Architect owns planning, Builder handles implementation, Oracle runs investigations and evidence checks."
            />
            <Step
              number={3}
              title="Drive through Architect"
              description="You issue instructions to one control lane while the other agents execute in parallel and report upstream."
            />
            <Step
              number={4}
              title="Review and ship"
              description="Parallel execution increases throughput while preserving clean boundaries for verification and release."
            />
          </div>
        </div>
      </section>

      <section id="download" className="px-4 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-accent/25 bg-gradient-to-br from-surface to-background p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to run the squad?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            SquidRun is open source and local-first. Install once, map your models to roles, and run coordinated engineering loops from a single command center.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/anamnesos/squidrun-site/releases/latest"
              className="inline-flex h-13 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(109,90,252,0.45)]"
            >
              <DownloadIcon className="h-5 w-5" />
              Download Release
            </a>
            <a
              href="https://github.com/anamnesos/squidrun-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-border bg-surface px-7 text-base font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
              Star on GitHub
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Node.js 18+ and at least one CLI runtime required.
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-9 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/favicon-64.png"
              alt="SquidRun logo"
              width={20}
              height={20}
              className="h-5 w-5 rounded-sm object-cover"
            />
            <span className="text-sm font-medium">SquidRun</span>
          </div>
          <p className="text-sm text-zinc-500">
            Built by{" "}
            <a href="https://github.com/anamnesos" target="_blank" rel="noopener noreferrer" className="text-zinc-300 transition-colors hover:text-white">
              anamnesos
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Components ─── */

function TerminalPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-1 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,125,255,0.18),transparent_40%)]" />
      <div className="relative rounded-xl border border-border/80 bg-background/95">
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span className="ml-2 text-xs text-zinc-500">squidrun runtime - session 186</span>
          </div>
          <span className="rounded-md border border-accent/40 bg-accent/15 px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-accent uppercase">
            3 agents active
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {terminalLanes.map((lane) => (
            <TerminalPane key={lane.title} title={lane.title} agent={lane.agent} lines={lane.lines} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
            <span className="text-zinc-600">architect&gt;</span>
            <span>Assign release checklist and stage deploy notes</span>
            <span className="h-3 w-[2px] bg-accent/85 animate-caret" />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <span className="rounded-md border border-border px-2 py-1">latency: 12ms</span>
            <span className="rounded-md border border-border px-2 py-1">handoff: clean</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricPill({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="rounded-xl border border-border/90 bg-surface/70 px-3 py-3 text-left">
      <p className="text-[10px] tracking-[0.12em] text-zinc-500 uppercase">{label}</p>
      <p className={`mt-1 text-sm text-zinc-200 ${compact ? "truncate" : ""}`}>{value}</p>
    </div>
  );
}

function TerminalPane({
  title,
  agent,
  lines,
}: {
  title: string;
  agent: string;
  lines: TerminalLine[];
}) {
  const agentColors: Record<string, string> = {
    claude: "text-orange-300",
    codex: "text-emerald-300",
    gemini: "text-sky-300",
  };
  const tones: Record<string, string> = {
    success: "text-emerald-300",
    warn: "text-amber-300",
    muted: "text-zinc-500",
  };

  return (
    <div className="bg-background px-4 py-4 font-mono text-[11px] leading-[1.65] sm:px-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-zinc-500">{title}</span>
        <span className={`rounded-md border border-current/25 px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase ${agentColors[agent] || "text-zinc-500"}`}>
          {agent}
        </span>
      </div>
      <div className="space-y-1.5">
        {lines.map((line, index) => (
          <div key={`${title}-${index}`} className={`flex gap-1.5 ${tones[line.tone || ""] || "text-zinc-400"}`}>
            <span className="select-none text-zinc-600">$</span>
            <span>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-6 transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/35 hover:bg-surface-light">
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-xl transition-opacity group-hover:opacity-100" />
      <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="relative text-lg font-semibold tracking-tight">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-sm font-bold text-accent">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

/* ─── Icons (inline SVG) ─── */

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function PanesIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 4H9l-1-4c-1.5-1.5-3-3.5-3-6a7 7 0 017-7z" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function MemoryIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 2v4" />
      <path d="M10 2v4" />
      <path d="M14 2v4" />
      <path d="M18 2v4" />
      <path d="M6 18v4" />
      <path d="M10 18v4" />
      <path d="M14 18v4" />
      <path d="M18 18v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
