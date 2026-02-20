export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <SquidIcon className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold tracking-tight">SquidRun</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a
              href="#download"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up opacity-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Now in open development
            </div>
          </div>

          <h1 className="animate-fade-in-up opacity-0 delay-100 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Multiple AI agents.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              One orchestrator.
            </span>
          </h1>

          <p className="animate-fade-in-up opacity-0 delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            SquidRun coordinates Claude, Codex, and Gemini in parallel terminal
            panes. One agent architects. The others build, investigate, and
            review — simultaneously.
          </p>

          <div className="animate-fade-in-up opacity-0 delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#download"
              className="flex h-12 items-center gap-2 rounded-lg bg-accent px-8 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              <DownloadIcon className="h-5 w-5" />
              Download for Windows
            </a>
            <a
              href="https://github.com/jkiminator/squidrun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center gap-2 rounded-lg border border-border px-8 text-base font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Terminal preview */}
        <div className="animate-fade-in-up opacity-0 delay-400 relative z-10 mx-auto mt-20 w-full max-w-5xl">
          <div className="rounded-xl border border-border bg-surface p-1 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-zinc-500">SquidRun v1.0</span>
            </div>
            <div className="grid grid-cols-3 gap-px bg-border">
              <TerminalPane title="Pane 1 — Director" agent="claude" lines={[
                "Reading session handoff...",
                "0 blockers, 0 errors",
                "Builder: online. Oracle: online.",
                "Delegating auth refactor to Builder",
                "Oracle: investigate rate limit spike",
              ]} />
              <TerminalPane title="Pane 2 — Builder" agent="codex" lines={[
                "Received task: auth refactor",
                "Reading src/auth/middleware.ts",
                "Refactoring JWT validation...",
                "Tests passing: 47/47",
                "Done. Reporting to Director.",
              ]} />
              <TerminalPane title="Pane 3 — Oracle" agent="gemini" lines={[
                "Investigating rate limit spike",
                "Scanning logs: 2024-02-19",
                "Found: 3x burst from /api/sync",
                "Root cause: missing debounce",
                "FINDING: add 500ms debounce",
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why one agent isn&apos;t enough
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Single-agent workflows bottleneck on context and quota. SquidRun
            splits work across dedicated agents — each with its own context
            window, its own quota, its own focus.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<PanesIcon />}
            title="Parallel Panes"
            description="Three terminal panes running simultaneously. Each pane is an independent AI agent with its own CLI process."
          />
          <FeatureCard
            icon={<BrainIcon />}
            title="Role Specialization"
            description="Director coordinates. Builder implements. Oracle investigates. Each agent stays in its lane — no context thrashing."
          />
          <FeatureCard
            icon={<SwapIcon />}
            title="Model Agnostic"
            description="Any pane can run Claude, Codex, or Gemini. Swap models at runtime. The role stays, the model is config."
          />
          <FeatureCard
            icon={<MessageIcon />}
            title="Inter-Agent Comms"
            description="Agents message each other through a built-in routing system. Task delegation, status reports, and findings flow automatically."
          />
          <FeatureCard
            icon={<MemoryIcon />}
            title="Automated Memory"
            description="Every message is journaled. Session handoffs are auto-generated. No agent writes its own notes — the system does it."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Your Machine, Your Keys"
            description="SquidRun runs locally. Your API keys never leave your machine. No cloud relay, no middleman, no data sharing."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-border bg-surface/50 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <div className="mt-16 space-y-12">
            <Step number={1} title="Install your AI CLIs" description="Install Claude Code, Codex, and/or Gemini CLI. SquidRun auto-detects what's available and assigns them to panes." />
            <Step number={2} title="Launch SquidRun" description="Open the desktop app. Three panes spawn with your configured AI agents. The Director agent reads the session handoff and coordinates." />
            <Step number={3} title="Talk to the Director" description="You interact with Pane 1 only. The Director delegates tasks to Builder and Oracle. They work in parallel and report back." />
            <Step number={4} title="Ship faster" description="Three agents working simultaneously means 3x the context windows, 3x the throughput, and zero context thrashing." />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to run the squad?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            SquidRun is free and open source. Download for Windows, macOS, or Linux.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/jkiminator/squidrun/releases/latest"
              className="flex h-14 items-center gap-3 rounded-lg bg-accent px-10 text-lg font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              <DownloadIcon className="h-5 w-5" />
              Download Latest Release
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Requires Node.js 18+ and at least one AI CLI (Claude Code, Codex, or Gemini).
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <SquidIcon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">SquidRun</span>
          </div>
          <p className="text-sm text-zinc-500">
            Built by{" "}
            <a href="https://github.com/jkiminator" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              James Kim
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Components ─── */

function TerminalPane({ title, agent, lines }: { title: string; agent: string; lines: string[] }) {
  const agentColors: Record<string, string> = {
    claude: "text-orange-400",
    codex: "text-green-400",
    gemini: "text-blue-400",
  };
  return (
    <div className="bg-background p-4 font-mono text-xs leading-relaxed">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-zinc-500">{title}</span>
        <span className={`text-[10px] uppercase tracking-wider ${agentColors[agent] || "text-zinc-500"}`}>
          {agent}
        </span>
      </div>
      {lines.map((line, i) => (
        <div key={i} className="text-zinc-400">
          <span className="text-zinc-600 select-none">$ </span>
          {line}
        </div>
      ))}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-zinc-700">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

/* ─── Icons (inline SVG) ─── */

function SquidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="8" rx="6" ry="5" />
      <path d="M6 11c-1 3-2 6-1 8" />
      <path d="M9 12c0 3-.5 6 0 8" />
      <path d="M12 12c0 3 0 6 0 8" />
      <path d="M15 12c0 3 .5 6 0 8" />
      <path d="M18 11c1 3 2 6 1 8" />
    </svg>
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
