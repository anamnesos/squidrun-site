import Image from "next/image";
import type { CSSProperties } from "react";

type LaneTone = "success" | "warn" | "muted";

type TerminalLine = {
  at: number;
  text: string;
  tone?: LaneTone;
};

const architectTerminalLines: TerminalLine[] = [
  { at: 0.7, text: "(ARCHITECT #1): Builder, patch auth token replay + rotation." },
  { at: 3.1, text: "(BUILDER #14): ACK. Implementing and running auth tests.", tone: "success" },
  { at: 6.3, text: "(ARCHITECT #2): Oracle, investigate deploy retry burst signals." },
  { at: 9.2, text: "(ORACLE #9): Correlated spikes to missing retry debounce.", tone: "warn" },
  { at: 13.1, text: "(BUILDER #15): auth-suite 47/47 passing. Patch ready.", tone: "success" },
  { at: 17.8, text: "(ORACLE #10): Recommendation: 500ms debounce + jitter.", tone: "warn" },
  { at: 21.8, text: "(ARCHITECT #3): Consolidated decision -> GO, monitor 15 minutes.", tone: "success" },
];

const builderTerminalLines: TerminalLine[] = [
  { at: 1.0, text: "# Running pane-host cleanup check...", tone: "muted" },
  { at: 4.0, text: "$ pnpm test --filter pane-host" },
  { at: 7.4, text: "(BUILDER #9): ACK. Applying mockup alignment fixes.", tone: "success" },
  { at: 11.8, text: "> Investigating pane host window cleanup...", tone: "muted" },
  { at: 16.2, text: "> Write tests for #filename", tone: "muted" },
];

const oracleTerminalLines: TerminalLine[] = [
  { at: 1.6, text: "# Role/shim audit + addendum in progress", tone: "muted" },
  { at: 5.3, text: "$ rg -n \"spawn agent\" ui/modules/main" },
  { at: 9.6, text: "(ORACLE #9): Delivered findings with ack: delivered.verified.", tone: "success" },
  { at: 14.2, text: "> Top issues flagged and recommendations sent.", tone: "muted" },
  { at: 18.3, text: "> Awaiting Architect merge decision", tone: "warn" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-x-clip bg-background text-foreground antialiased">
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
              href="https://github.com/anamnesos/hivemind"
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
        <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
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
                href="https://github.com/anamnesos/hivemind/releases/latest"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-semibold text-white transition-all hover:translate-y-[-1px] hover:bg-accent-light hover:shadow-[0_0_28px_rgba(109,90,252,0.45)]"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Latest Release
              </a>
              <a
                href="https://github.com/anamnesos/hivemind"
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

          <div className="animate-fade-in-up opacity-0 delay-500 relative min-w-0">
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
            <div className="mx-auto w-full max-w-[760px] overflow-hidden lg:ml-auto">
              <TerminalPreview />
            </div>
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
            description="Three independent CLI sessions run simultaneously, each with separated pane context and state."
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
            icon={<ScaleIcon />}
            title="Autonomous Builder Scaling"
            description="When work gets heavy, Builder can spawn up to three background worker agents to parallelize implementation, tests, and fixes before reporting back to Architect."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Local by Default"
            description="Core orchestration is local-first with no required cloud relay. Optional Telegram and SMS channels are opt-in."
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
              description="Architect delegates across Builder and Oracle. Builder can autonomously fan out into background workers for multi-file tasks, then consolidate results upstream."
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
              href="https://github.com/anamnesos/hivemind/releases/latest"
              className="inline-flex h-13 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(109,90,252,0.45)]"
            >
              <DownloadIcon className="h-5 w-5" />
              Download Release
            </a>
            <a
              href="https://github.com/anamnesos/hivemind"
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
  const toneClass: Record<LaneTone, string> = {
    success: "text-emerald-300",
    warn: "text-amber-300",
    muted: "text-zinc-500",
  };

  const buildLineStyle = (line: TerminalLine): CSSProperties =>
    ({
      "--line-delay": `${line.at}s`,
      "--line-steps": Math.max(24, line.text.length),
    }) as CSSProperties;

  return (
    <div className="relative w-full max-w-full overflow-x-hidden rounded-2xl border border-cyan-900/40 bg-[#030914] p-1 shadow-[0_35px_110px_rgba(0,0,0,0.62)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(0,210,255,0.12),transparent_40%),radial-gradient(circle_at_15%_90%,rgba(73,245,170,0.08),transparent_42%)]" />
      <div className="relative rounded-xl border border-cyan-950/80 bg-[#040b1a]">
        <div className="border-b border-cyan-900/50 bg-[#061225]">
          <div className="flex flex-wrap items-center justify-between gap-y-1 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-semibold tracking-tight text-cyan-300">SquidRun</span>
              <span className="rounded-md border border-emerald-700/50 bg-emerald-900/35 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                Session 42
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-1.5 text-[9px] font-medium text-zinc-300 sm:text-[10px]">
              <span className="rounded-md border border-cyan-700/50 bg-cyan-900/30 px-2 py-1 text-cyan-200">Project</span>
              <span className="rounded-md border border-zinc-700 px-2 py-1">Actions</span>
              <span className="rounded-md border border-zinc-700 px-2 py-1">Settings</span>
              <span className="rounded-md border border-cyan-700/50 bg-cyan-900/30 px-2 py-1 text-cyan-200">Panel</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-cyan-950/80 px-3 py-1.5 text-[10px]">
            <span className="max-w-full truncate text-zinc-500">
              Project: <span className="text-cyan-300">/home/dev/my-project</span>
            </span>
            <span className="text-zinc-600 sm:ml-auto">Session: 0:40</span>
          </div>
        </div>

        <div className="grid h-[420px] min-w-0 grid-cols-[1.4fr_1fr] bg-cyan-950/40">
          <section className="flex min-h-0 min-w-0 flex-col border-r border-cyan-900/55 bg-[#050c1c]">
            <div className="flex items-center justify-between border-b border-cyan-950/70 px-3 py-2 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="rounded-full border border-amber-600/60 bg-amber-900/30 px-2 py-0.5 font-semibold text-amber-300">Arch</span>
                <span className="rounded-md border border-orange-700/60 bg-orange-900/30 px-2 py-0.5 font-semibold text-orange-200">CLAUDE CODE</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="rounded-md border border-zinc-700 px-2 py-0.5 text-zinc-400">Claude</span>
                <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-[10px] text-cyan-300">□</span>
                <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-[10px] text-cyan-300">○</span>
                <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-[10px] text-cyan-300">↻</span>
              </div>
            </div>
            <div className="flex-1 space-y-1 overflow-hidden px-3 py-3 font-mono text-[11px] leading-[1.56] text-zinc-300">
              {architectTerminalLines.map((line, index) => (
                <div key={`architect-${index}`} className={`terminal-line flex min-h-[1.1rem] gap-1.5 overflow-hidden ${line.tone ? toneClass[line.tone] : "text-zinc-300"}`}>
                  <span className="select-none text-zinc-600">$</span>
                  <span className="terminal-line-text" style={buildLineStyle(line)}>
                    {line.text}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-zinc-400">
                <span className="select-none text-zinc-600">$</span>
                <span>Awaiting next Architect directive</span>
                <span className="h-3 w-[2px] bg-cyan-300/90 animate-caret" />
              </div>
            </div>
          </section>

          <section className="grid min-h-0 min-w-0 grid-rows-2 bg-[#040b18]">
            <article className="flex min-h-0 min-w-0 flex-col border-b border-cyan-950/70">
              <div className="flex items-center justify-between border-b border-cyan-950/70 px-2.5 py-2 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-sm border border-cyan-700/50 bg-cyan-900/30 px-1.5 py-0.5 text-cyan-200">Builder</span>
                  <span className="rounded-sm border border-cyan-700/50 bg-cyan-950/40 px-1.5 py-0.5 text-cyan-300">CODEX</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500">
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5">Code</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">□</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">○</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">↻</span>
                </div>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden px-3 py-2 font-mono text-[10px] leading-[1.55] text-zinc-400">
                {builderTerminalLines.map((line, index) => (
                  <div key={`builder-${index}`} className={`terminal-line flex min-h-[0.95rem] gap-1 overflow-hidden ${line.tone ? toneClass[line.tone] : "text-zinc-400"}`}>
                    <span className="select-none text-zinc-600">$</span>
                    <span className="terminal-line-text" style={buildLineStyle(line)}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1 text-zinc-500">
                  <span className="select-none text-zinc-600">$</span>
                  <span>Builder running...</span>
                  <span className="h-2.5 w-[2px] bg-cyan-300/90 animate-caret" />
                </div>
              </div>
            </article>
            <article className="flex min-h-0 min-w-0 flex-col">
              <div className="flex items-center justify-between border-b border-cyan-950/70 px-2.5 py-2 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-sm border border-cyan-700/50 bg-cyan-900/30 px-1.5 py-0.5 text-cyan-200">Oracle</span>
                  <span className="rounded-sm border border-violet-700/50 bg-violet-950/40 px-1.5 py-0.5 text-violet-300">GEMINI</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500">
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5">Code</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">□</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">○</span>
                  <span className="rounded-sm border border-cyan-900/70 px-1 py-0.5 text-cyan-300">↻</span>
                </div>
              </div>
              <div className="flex-1 space-y-1 overflow-hidden px-3 py-2 font-mono text-[10px] leading-[1.55] text-zinc-400">
                {oracleTerminalLines.map((line, index) => (
                  <div key={`oracle-${index}`} className={`terminal-line flex min-h-[0.95rem] gap-1 overflow-hidden ${line.tone ? toneClass[line.tone] : "text-zinc-400"}`}>
                    <span className="select-none text-zinc-600">$</span>
                    <span className="terminal-line-text" style={buildLineStyle(line)}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1 text-zinc-500">
                  <span className="select-none text-zinc-600">$</span>
                  <span>Oracle analyzing...</span>
                  <span className="h-2.5 w-[2px] bg-cyan-300/90 animate-caret" />
                </div>
              </div>
            </article>
          </section>
        </div>

        <div className="border-t border-cyan-900/55 bg-[#050e1e] px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 flex-1 items-center rounded-md border border-cyan-900/60 bg-[#041022] px-3 text-[11px] text-zinc-500">
              <span>Type here to message Architect (Enter to send)</span>
              <span className="ml-1.5 h-3 w-[2px] bg-cyan-300/90 animate-caret" />
            </div>
            <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-800/60 bg-cyan-950/35 text-cyan-200">
              ◉
            </button>
            <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-800/60 bg-cyan-900/30 text-cyan-200">
              ▸
            </button>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-zinc-600">
            <span className="max-w-full truncate">screenshot-1771565860398.png  SYNC  CTC  BLK  ERR</span>
            <span className="sm:ml-auto">Press Ctrl+1-4 to focus pane | Enter to send to Architect | Use /task to auto-route</span>
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

function ScaleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="12" y2="6" />
      <line x1="12" y1="6" x2="20" y2="3" />
      <line x1="4" y1="12" x2="12" y2="12" />
      <line x1="12" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="12" y2="18" />
      <line x1="12" y1="18" x2="20" y2="21" />
      <circle cx="3" cy="6" r="1.5" />
      <circle cx="3" cy="12" r="1.5" />
      <circle cx="3" cy="18" r="1.5" />
      <circle cx="21" cy="3" r="1.5" />
      <circle cx="21" cy="12" r="1.5" />
      <circle cx="21" cy="21" r="1.5" />
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
