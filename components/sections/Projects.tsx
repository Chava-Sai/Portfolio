"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  CircuitBoard,
  Database,
  ExternalLink,
  FileText,
  Gamepad2,
  LineChart,
  GitBranch,
  Github,
  Maximize2,
  MousePointer2,
  ScanLine,
  Sparkles,
  Star,
  Volume2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/effects/Reveal";
import { Sparkle } from "@/components/effects/Sparkle";
import { TechPill } from "@/components/ui/TechPill";
import { assetPath, cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/data";

const CATEGORIES: Array<Project["category"] | "All"> = [
  "All",
  "AI / ML",
  "Research",
  "Full-Stack",
  "Mobile",
];

const CATEGORY_ICON: Record<
  Project["category"],
  React.ComponentType<{ className?: string }>
> = {
  "AI / ML": Sparkles,
  Research: FileText,
  "Full-Stack": Database,
  Mobile: Gamepad2,
  "Data Science": LineChart,
};

export function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );
  const [spotlight, rest] = useMemo(() => {
    const featured = filtered.find((p) => p.featured) ?? filtered[0];
    const remaining = filtered.filter((p) => p.slug !== featured?.slug);
    // Explicit rail ordering — slugs not in the list keep their relative order
    // and are appended at the front, while listed slugs render in this exact
    // sequence (question-paper-t5 stays pinned to the very end).
    const RAIL_ORDER: ReadonlyArray<string> = [
      "codemix-rag",
      "hatelens",
      "auto-grader",
      "sidewalk-validator",
      "transit-equity",
      "fakehate",
      "chat-buddy",
    ];
    const inList = (slug: string) => RAIL_ORDER.includes(slug);
    const others = remaining.filter((p) => !inList(p.slug));
    const sorted = RAIL_ORDER.map((slug) =>
      remaining.find((p) => p.slug === slug)
    ).filter((p): p is Project => Boolean(p));
    const ordered: Project[] = [...others, ...sorted];
    return [featured, ordered] as [Project | undefined, Project[]];
  }, [filtered]);

  return (
    <section id="projects" className="relative scroll-mt-24 py-32">
      <div className="container-tight">
        <SectionHeader
          label="04 · Projects"
          title={
            <>
              Production-grade{" "}
              <span className="text-gradient-accent">engineering work.</span>
            </>
          }
          description="Selected work spanning weakly supervised vision, code-mixed NLP, retrieval-augmented systems and civic data — each with the numbers it actually produced."
        />

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={cn(
                "shine relative rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300",
                filter === c
                  ? "border-foreground bg-foreground text-background shadow-[0_10px_30px_-12px_hsl(var(--foreground)/0.6)]"
                  : "glass text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {spotlight && (
          <Reveal className="mt-10">
            <SpotlightCard project={spotlight} />
          </Reveal>
        )}

        {rest.length > 0 && <ProjectRail projects={rest} />}

        <Reveal className="mt-10">
          <MoreOnGithubCard />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Spotlight                                                                  */
/* -------------------------------------------------------------------------- */

function SpotlightCard({ project }: { project: Project }) {
  const Icon = CATEGORY_ICON[project.category];
  const [archOpen, setArchOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.0, 0.98]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useSpring(scaleRaw, { stiffness: 70, damping: 22 });
  const y = useSpring(yRaw, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : { scale, y }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="card-elevated relative overflow-hidden rounded-3xl"
    >
      <Sparkle density={0.7} hue={project.accentHue} className="opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-25 mask-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `hsl(${project.accentHue} 85% 60% / 0.18)` }}
      />

      <div className="relative grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
            style={{
              color: `hsl(${project.accentHue} 90% 70%)`,
              borderColor: `hsl(${project.accentHue} 80% 70% / 0.4)`,
              background: `hsl(${project.accentHue} 80% 60% / 0.08)`,
            }}
          >
            <Star className="h-3 w-3" />
            Featured · {project.category}
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            <span className="text-gradient">{project.title}</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                Problem
              </p>
              <p className="mt-1">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                Solution
              </p>
              <p className="mt-1">{project.solution}</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5">
                <span
                  className="mt-2 inline-block h-1 w-1 flex-none rounded-full"
                  style={{ background: `hsl(${project.accentHue} 90% 65%)` }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <TechPill key={s} tech={s} category={project.category} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.links.length ? (
              project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="shine focus-ring group/lnk inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border-strong))] bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_36px_-14px_hsl(var(--foreground)/0.45)] active:scale-[0.98]"
                >
                  <ExternalLink className="h-3 w-3 transition group-hover/lnk:rotate-12" />
                  <span>Link · {l.label}</span>
                  <ArrowUpRight className="h-3 w-3 -translate-x-0.5 transition group-hover/lnk:translate-x-0" />
                </a>
              ))
            ) : (
              <span className="font-mono text-[11px] text-muted-foreground">
                Internal / academic — code on request
              </span>
            )}

            <button
              type="button"
              onClick={() => setArchOpen(true)}
              className="shine focus-ring inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border-strong))] px-3.5 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-[2px] hover:text-foreground"
            >
              <Maximize2 className="h-3 w-3" />
              View architecture
            </button>
          </div>

          <ArchitectureDialog
            project={project}
            open={archOpen}
            onOpenChange={setArchOpen}
          />
        </div>

        {/* Visual preview side */}
        <div className="relative">
          <ProjectPreview project={project} />

          <div className="mt-4 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="hairline relative overflow-hidden rounded-xl bg-background/60 p-3 transition-colors hover:border-foreground/40"
                style={{
                  boxShadow: `inset 0 0 0 1px hsl(${project.accentHue} 80% 60% / 0.18), 0 12px 30px -22px hsl(${project.accentHue} 80% 40% / 0.55)`,
                }}
              >
                <div
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: `hsl(${project.accentHue} 90% 70%)` }}
                >
                  {m.value}
                </div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Parallax horizontal scroller — vertical scroll drives lateral travel       */
/* -------------------------------------------------------------------------- */

function ProjectRail({ projects: items }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [maxShift, setMaxShift] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const itemsKey = items.map((p) => p.slug).join("|");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const measure = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      const track = trackRef.current;
      if (!desktop || !track) {
        setMaxShift(0);
        return;
      }
      const cards = track.querySelectorAll<HTMLElement>("[data-rail-card]");
      const last = cards[cards.length - 1];
      if (!last) {
        setMaxShift(0);
        return;
      }
      // Measure where the cards actually end rather than track.scrollWidth:
      // the trailing spacer after the last card would otherwise inflate the
      // width and convince a rail that already fits that it needs to pan.
      // Both rects shift with the x transform, so their difference does not.
      const trackLeft = track.getBoundingClientRect().left;
      const contentWidth = last.getBoundingClientRect().right - trackLeft;
      // documentElement.clientWidth excludes vertical scrollbar — true visible
      // width, unlike window.innerWidth which overstates by ~15px on Windows.
      const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
      // Small +80 buffer + the pr-* track padding give the last card a
      // comfortable margin from the viewport edge without leaving dead space.
      setMaxShift(Math.max(0, contentWidth - viewportWidth + 80));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // Keyed on the slugs, not the count: two filters can yield the same number
    // of cards, and a stale measurement survives that.
  }, [itemsKey]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // x is mapped directly from scroll progress with NO spring — eliminates the
  // ~0.6s settling lag that was leaving the last card half-clipped. The 0.85
  // upper bound means x reaches -maxShift at 85% of section scroll, and the
  // remaining 15% is a settle-pause where the rail sits motionless at its end
  // position so the user has clear time to read the last card.
  const x = useTransform(scrollYProgress, [0, 0.85], [0, -maxShift]);

  // Slight depth-of-field on the inner cards
  const innerScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);
  const innerScale = useSpring(innerScaleRaw, {
    stiffness: 90,
    damping: 26,
  });

  // Section height drives how much vertical scroll the rail consumes.
  // 100vh baseline (sticky room) + ~0.2 × maxShift extra vh of pan travel.
  // Tuned so a typical desktop layout takes ~13 mouse-wheel notches to
  // traverse from start of pan to the settle-pause at the end.
  const heightVh = useMemo(() => {
    if (!isDesktop || maxShift === 0) return 0;
    return Math.round(100 + maxShift * 0.2);
  }, [isDesktop, maxShift]);

  // Whether the rail has anything to pan. Everything pinned hangs off this.
  const pans = isDesktop && !reduced && maxShift > 0;

  // Mobile / reduced-motion fallback: native horizontal scroll, no parallax.
  if (!isDesktop || reduced) {
    return (
      <div className="relative mt-10">
        <RailHeader />
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
          {items.map((p, i) => (
            <div key={p.slug} className="w-[min(92vw,420px)] flex-none snap-start">
              <Reveal delay={i * 0.04}>
                <ProjectCard project={p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative mt-10"
      // Only claim scroll height while the rail actually pans. A filtered view
      // fits on screen, which made heightVh 0 while the sticky child stayed a
      // full screen tall — so it escaped the section and covered whatever came
      // next. Unpinned, the section just grows with its content.
      style={pans ? { height: `${heightVh}vh` } : undefined}
    >
      <div
        className={cn(
          "flex flex-col justify-start pb-6 pt-6 sm:pt-8",
          pans && "sticky top-0 min-h-screen overflow-hidden"
        )}
      >
        <div className="container-tight">
          <RailHeader pans={pans} />
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className={cn(
            "mt-6 flex w-max items-stretch gap-6",
            pans ? "pl-6 sm:pl-10" : "px-6 sm:px-10"
          )}
        >
          {items.map((p, i) => {
            const isLast = i === items.length - 1;
            return (
              <motion.div
                key={p.slug}
                data-rail-card
                style={{ scale: innerScale }}
                className={cn(
                  "w-[440px] flex-none",
                  // Trailing spacer after the last card = exactly one card's
                  // width (440px) of blank space, so the rail visually ends
                  // where an "imaginary fifth card" would have sat. Without a
                  // pan there is no overflow to hide it, so it would simply
                  // push the page sideways.
                  isLast && pans && "mr-[440px]"
                )}
              >
                <Reveal delay={i * 0.06}>
                  <ProjectCard project={p} />
                </Reveal>
              </motion.div>
            );
          })}
        </motion.div>

        {pans && <ScrollProgressBar progress={scrollYProgress} />}
      </div>
    </section>
  );
}

function RailHeader({ pans = true }: { pans?: boolean }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          More Projects
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {pans
            ? "Scroll down to drive the rail across."
            : "The rest of the work in this category."}
        </p>
      </div>
      {pans && (
        <div className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:inline-flex">
          <MousePointer2 className="h-3 w-3" />
          scroll ↓ · pans →
        </div>
      )}
    </div>
  );
}

function MoreOnGithubCard() {
  return (
    <div className="card-elevated relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <Sparkle density={0.4} className="opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-indigo-500/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-fuchsia-500/[0.08] blur-3xl"
      />
      <div className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            More work
          </p>
          <h4 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
            <span className="text-gradient">
              Many more projects, code & experiments live on GitHub.
            </span>
          </h4>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Source code, case studies, and side experiments — explore the full engineering
            portfolio at{" "}
            <span className="font-mono text-foreground/80">github.com/Chava-Sai</span>.
          </p>
        </div>
        <a
          href="https://github.com/Chava-Sai"
          target="_blank"
          rel="noreferrer"
          className="shine focus-ring group/glnk inline-flex items-center justify-center gap-2 self-start rounded-lg border border-[hsl(var(--border-strong))] bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_18px_40px_-18px_hsl(var(--foreground)/0.45)] sm:self-center"
        >
          <Github className="h-4 w-4" />
          <span>Link · View on GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover/glnk:translate-x-0.5 group-hover/glnk:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

function ScrollProgressBar({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="container-tight mt-6">
      <div className="relative h-px overflow-hidden bg-border-strong/40">
        <motion.div
          style={{ width }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Compact card                                                              */
/* -------------------------------------------------------------------------- */

function ProjectCard({ project }: { project: Project }) {
  const Icon = CATEGORY_ICON[project.category];
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="card-elevated shine relative flex h-full flex-col overflow-hidden rounded-2xl p-0"
    >
      <div className="relative p-3 sm:p-4">
        <ProjectPreview project={project} compact />
      </div>
      <div className="relative flex-1 p-6 pt-2 sm:pt-3">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl"
          style={{ background: `hsl(${project.accentHue} 80% 60% / 0.1)` }}
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]"
              style={{
                color: `hsl(${project.accentHue} 90% 70%)`,
                borderColor: `hsl(${project.accentHue} 80% 70% / 0.4)`,
                background: `hsl(${project.accentHue} 80% 60% / 0.08)`,
              }}
            >
              <Icon className="h-3 w-3" />
              {project.category}
            </div>
            <div className="flex items-center gap-1.5">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={`Link · ${l.label}`}
                  aria-label={`Link to ${l.label}`}
                  className="shine focus-ring inline-flex items-center gap-1 rounded-md border border-[hsl(var(--border-strong))] bg-foreground px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-background transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-10px_hsl(var(--foreground)/0.45)]"
                >
                  Link <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((s) => (
              <TechPill key={s} tech={s} category={project.category} />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="hairline rounded-lg bg-background/70 p-2">
                <div
                  className="text-xs font-semibold"
                  style={{ color: `hsl(${project.accentHue} 90% 70%)` }}
                >
                  {m.value}
                </div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Opens a dialog rather than expanding in place: these cards live in
              a pinned rail where vertical scroll pans sideways and the track
              clips overflow, so anything taller than the card was unreachable. */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center gap-1.5 self-start font-mono text-[11px] text-muted-foreground transition hover:text-foreground"
          >
            View architecture
            <Maximize2 className="h-3.5 w-3.5" />
          </button>

          <ArchitectureDialog project={project} open={open} onOpenChange={setOpen} />
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  ArchitectureDialog — the architecture on its own surface                  */
/* -------------------------------------------------------------------------- */

function ArchitectureDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const hue = project.accentHue;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-[180] bg-background/80 backdrop-blur-md"
              />
            </Dialog.Overlay>
            {/* Centring lives on this wrapper, which animates opacity only.
                Framer Motion writes an inline transform while it animates and
                resets it to none afterwards, which silently wipes Tailwind's
                -translate-x-1/2, so a transform-centred panel lands at 50%
                rather than centred. pointer-events-none lets clicks reach the
                overlay underneath so click-outside still closes. */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="pointer-events-none fixed inset-0 z-[181] flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ y: 12, scale: 0.985 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="pointer-events-auto flex max-h-[88vh] w-[min(1120px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-strong))] bg-card shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-border/60 px-5 py-4">
                    <div className="min-w-0">
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: `hsl(${hue} 90% 70%)` }}
                      >
                        Architecture
                      </p>
                      <Dialog.Title className="mt-1 truncate text-base font-semibold tracking-tight">
                        {project.title}
                      </Dialog.Title>
                      <Dialog.Description className="mt-0.5 truncate text-xs text-muted-foreground">
                        {project.subtitle}
                      </Dialog.Description>
                    </div>
                    <Dialog.Close
                      aria-label="Close architecture"
                      className="focus-ring shrink-0 rounded-full border border-border/60 p-1.5 text-muted-foreground transition hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Dialog.Close>
                  </div>

                  {/* The dialog owns its own scroll, so the diagram is reachable
                    no matter how tall it is — the rail behind stays put. */}
                  <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
                    {project.architectureImage ? (
                      <figure>
                        {/* Paper figures are drawn on white; a light plate keeps
                          them legible instead of inverting their fills. */}
                        <div className="overflow-x-auto rounded-xl bg-white p-3">
                          <Image
                            src={assetPath(project.architectureImage)}
                            alt={`${project.title} architecture diagram`}
                            width={project.architectureWidth ?? 2400}
                            height={project.architectureHeight ?? 840}
                            className="h-auto w-full min-w-[720px]"
                            sizes="(max-width: 1120px) 100vw, 1080px"
                          />
                        </div>
                        <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Scroll sideways on narrow screens to follow the pipeline.
                        </figcaption>
                      </figure>
                    ) : (
                      <div className="hairline rounded-xl bg-background/70 p-4">
                        <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
                          {generateAsciiArchitecture(project)}
                        </pre>
                      </div>
                    )}

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                          Problem
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                          Solution
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

/* -------------------------------------------------------------------------- */
/*  ProjectPreview — image slot or animated artistic placeholder              */
/* -------------------------------------------------------------------------- */

function ProjectPreview({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const hue = project.accentHue;

  // Spotlight preview: pin the container's aspect-ratio to the image's natural
  // width/height so it fills edge-to-edge without crop. Rail cards instead use
  // a *uniform* 2:1 preview window — keeps every card in the parallax rail the
  // same height regardless of each screenshot's native dimensions. The image
  // itself is `object-cover` so it still reads correctly inside the 2:1 box.
  const hasNaturalSize =
    !compact &&
    Boolean(project.image) &&
    typeof project.imageWidth === "number" &&
    typeof project.imageHeight === "number";

  const aspectClass = hasNaturalSize ? "" : compact ? "aspect-[2/1]" : "aspect-[5/3]";

  const containerStyle: React.CSSProperties = {
    background: `radial-gradient(120% 80% at 30% 0%, hsl(${hue} 80% 55% / 0.18), transparent 60%), radial-gradient(120% 80% at 80% 100%, hsl(${(hue + 40) % 360} 90% 60% / 0.18), transparent 60%), hsl(var(--card))`,
    ...(hasNaturalSize
      ? { aspectRatio: `${project.imageWidth} / ${project.imageHeight}` }
      : {}),
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        aspectClass,
        !compact && "card-elevated"
      )}
      style={containerStyle}
    >
      <Sparkle density={0.4} hue={hue} className="opacity-60" />

      {project.image ? (
        <Image
          src={assetPath(project.image)}
          alt={`${project.title} preview`}
          fill
          sizes={
            compact ? "(min-width: 768px) 440px, 92vw" : "(min-width: 1024px) 540px, 92vw"
          }
          priority={!compact}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <ArtisticPlaceholder project={project} compact={compact} />
      )}

      {/* Scanline + vignette overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(transparent 50%, hsl(var(--foreground) / 0.025) 50%)",
          backgroundSize: "100% 4px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, transparent 60%, hsl(var(--background) / 0.6) 100%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-foreground/[0.07] to-transparent"
        style={{ animation: "shine-sweep 6s ease-in-out 1.4s infinite" }}
      />

      {!compact && (
        <div className="absolute inset-x-3 bottom-3 z-[2] flex items-center justify-between rounded-xl border border-border/70 bg-background/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-xl">
          <span className="inline-flex items-center gap-1.5">
            <GitBranch className="h-3 w-3" /> {project.slug}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ScanLine className="h-3 w-3" /> preview · v1
          </span>
        </div>
      )}
    </div>
  );
}

function ArtisticPlaceholder({
  project,
  compact,
}: {
  project: Project;
  compact: boolean;
}) {
  // Only reached when a project has no image of its own.
  switch (project.slug) {
    case "chat-buddy":
      return <PlaceholderPlatformer hue={project.accentHue} />;
    case "transit-equity":
      return <PlaceholderTimeseries hue={project.accentHue} />;
    case "hatelens":
      return <PlaceholderAttention hue={project.accentHue} />;
    case "fakehate":
      return <PlaceholderSchema hue={project.accentHue} />;
    default:
      return <PlaceholderPipeline hue={project.accentHue} compact={compact} />;
  }
}

function PlaceholderTimeseries({ hue }: { hue: number }) {
  const points = useMemo(() => {
    let s = 13;
    const r = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    };
    return Array.from(
      { length: 60 },
      (_, i) => 32 + Math.sin(i * 0.35) * 18 + (r() - 0.5) * 6
    );
  }, []);
  const path = points
    .map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${y}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="anomaly-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 90% 65%)`} stopOpacity="0.5" />
          <stop offset="100%" stopColor={`hsl(${hue} 90% 65%)`} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 60 L 0 60 Z`} fill="url(#anomaly-grad)" />
      <path
        d={path}
        fill="none"
        stroke={`hsl(${hue} 90% 70%)`}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      {[15, 32, 51].map((i) => (
        <circle
          key={i}
          cx={(i / 59) * 100}
          cy={points[i]}
          r="1.2"
          fill={`hsl(${(hue + 30) % 360} 95% 70%)`}
        >
          <animate
            attributeName="r"
            values="1.2;2.4;1.2"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <text
        x="2"
        y="6"
        fontSize="3"
        fontFamily="ui-monospace, monospace"
        fill="currentColor"
        className="text-muted-foreground"
      >
        CPC · CPM forecast
      </text>
    </svg>
  );
}

function PlaceholderPipeline({ hue, compact }: { hue: number; compact: boolean }) {
  const c = `hsl(${hue} 90% 70%)`;
  return (
    <div className="absolute inset-0 grid place-items-center p-6 font-mono text-[10px] text-muted-foreground">
      <div className="grid w-full grid-cols-3 items-center gap-3">
        <div
          className="hairline rounded-lg bg-background/60 p-3 text-center"
          style={{ boxShadow: `inset 0 0 0 1px ${c}33` }}
        >
          <div className="text-[11px] text-foreground">OCR</div>
          <div className="mt-1">scan → text</div>
        </div>
        <div className="flex items-center gap-1 text-foreground/60">
          <div className="h-px w-full" style={{ background: c, opacity: 0.5 }} />
          <ChevronRight className="h-3 w-3" style={{ color: c }} />
        </div>
        <div
          className="hairline rounded-lg bg-background/60 p-3 text-center"
          style={{ boxShadow: `inset 0 0 0 1px ${c}33` }}
        >
          <div className="text-[11px] text-foreground">T5</div>
          <div className="mt-1">summ + Qgen</div>
        </div>
      </div>
      {!compact && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-2 py-1">
          <Volume2 className="h-3 w-3" style={{ color: c }} />
          MCQ · Short · True/False · &lt; 2 min
        </div>
      )}
    </div>
  );
}

function PlaceholderAttention({ hue }: { hue: number }) {
  return (
    <div className="absolute inset-0 grid grid-cols-8 gap-[2px] p-6">
      {Array.from({ length: 64 }).map((_, i) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const intensity = (Math.sin(x * 0.7) + Math.cos(y * 0.9) + 2) / 4;
        return (
          <div
            key={i}
            className="rounded-[2px]"
            style={{
              background: `hsl(${hue} 90% ${30 + intensity * 50}% / ${0.2 + intensity * 0.6})`,
            }}
          />
        );
      })}
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground">
        <CircuitBoard className="h-3 w-3" style={{ color: `hsl(${hue} 95% 70%)` }} />
        attention map
      </div>
    </div>
  );
}

function PlaceholderSchema({ hue }: { hue: number }) {
  const c = `hsl(${hue} 90% 65%)`;
  return (
    <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
      <g stroke={c} strokeOpacity="0.5" strokeWidth="0.4" fill="none">
        <line x1="22" y1="20" x2="50" y2="30" />
        <line x1="78" y1="20" x2="50" y2="30" />
        <line x1="50" y1="30" x2="50" y2="50" />
      </g>
      {[
        { x: 22, y: 20, label: "users" },
        { x: 78, y: 20, label: "cocktails" },
        { x: 50, y: 30, label: "reviews" },
        { x: 50, y: 50, label: "tags" },
      ].map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 9}
            y={n.y - 3}
            width="18"
            height="6"
            rx="1.5"
            fill="hsl(var(--card))"
            stroke={c}
            strokeOpacity="0.5"
            strokeWidth="0.4"
          />
          <text
            x={n.x}
            y={n.y + 1}
            fontSize="2.6"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fill="currentColor"
            className="text-foreground"
          >
            {n.label}
          </text>
        </g>
      ))}
      <text
        x="2"
        y="58"
        fontSize="3"
        fontFamily="ui-monospace, monospace"
        fill="currentColor"
        className="text-muted-foreground"
      >
        3NF · m-to-m · FastAPI · MySQL
      </text>
    </svg>
  );
}

function PlaceholderPlatformer({ hue }: { hue: number }) {
  const c = `hsl(${hue} 90% 65%)`;
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 100 60" className="h-full w-full">
        <defs>
          <linearGradient id="duck-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={`hsl(${hue} 95% 70%)`} stopOpacity="0.3" />
            <stop
              offset="100%"
              stopColor={`hsl(${(hue + 40) % 360} 95% 65%)`}
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>
        <rect width="100" height="60" fill="url(#duck-sky)" />
        {[10, 30, 55, 80].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={42 - (i % 2) * 6}
            width="14"
            height="3"
            rx="1"
            fill={c}
            opacity="0.7"
          />
        ))}
        {/* duck */}
        <g transform="translate(20 30)">
          <circle r="3.5" fill={`hsl(${(hue - 10 + 360) % 360} 95% 70%)`} />
          <circle cx="2" cy="-1.5" r="0.8" fill="black" />
          <path
            d="M 3 0 L 6 -0.5 L 5 1 Z"
            fill={`hsl(${(hue - 30 + 360) % 360} 80% 50%)`}
          />
        </g>
        <text
          x="2"
          y="6"
          fontSize="3"
          fontFamily="ui-monospace, monospace"
          fill="currentColor"
          className="text-muted-foreground"
        >
          Where is my Duck? · 1000+ DL
        </text>
      </svg>
    </div>
  );
}

function generateAsciiArchitecture(p: Project): string {
  switch (p.slug) {
    case "violence-detection":
      return [
        "UCF-Crime clips ──▶ VideoMAE-B (frozen) ──▶ snippet features",
        "                                               │",
        "                                               ▼",
        "                        RTFM-style multiple-instance learning",
        "                                               │",
        "                        ┌──────────────────────┴───────────────┐",
        "                        ▼                                      ▼",
        "          3 seeds ──▶ 0.922 AUC (sd 0.010)     1 ckpt ──▶ XD · RWF · ShanghaiTech",
      ].join("\n");
    case "hatelens":
      return [
        "Tamil code-mixed text ──▶ MuRIL + XLM-R encoders",
        "                                   │",
        "                                   ├──▶ QLoRA-adapted 7B models",
        "                                   ▼",
        "                    Factorized heads (5 hierarchy levels)",
        "                                   │",
        "                                   ▼",
        "          Prior calibration ──▶ per-level ensemble ──▶ 0.4603 macro-F1",
      ].join("\n");
    case "auto-grader":
      return [
        "PDF · PPTX · XLSX ──▶ OCR + vision extraction",
        "                              │",
        "                              ▼",
        "                  ChromaDB lecture retrieval (RAG)",
        "                              │",
        "              ┌───────────────┼───────────────┐",
        "              ▼               ▼               ▼",
        "           OpenAI          Claude          Gemini",
        "              └───────────────┼───────────────┘",
        "                              ▼",
        "            Rubric scoring ──▶ calibration ──▶ gap 14 → 2",
      ].join("\n");
    case "sidewalk-validator":
      return [
        "GeoJSON sidewalk network ──▶ rule-based audit engine",
        "                                      │",
        "        street imagery ──▶ PyTorch + Llama vision advisor",
        "                                      │",
        "                                      ▼",
        "            FastAPI ◀──▶ React/Vite ──▶ location-aware fixes",
      ].join("\n");
    case "transit-equity":
      return [
        "MBTA ridership · reliability · demographics",
        "                     │",
        "                     ▼",
        "          Join ──▶ route-level feature table",
        "                     │",
        "        ┌────────────┴────────────┐",
        "        ▼                         ▼",
        "   Clustering              Predictive model",
        "        └────────────┬────────────┘",
        "                     ▼",
        "          Service-gap + delay-driver report",
      ].join("\n");
    case "fakehate":
      return [
        "Multilingual posts ──▶ transliteration ──▶ translation",
        "                                   │",
        "                                   ▼",
        "                      Transformer embeddings",
        "                                   │",
        "                     ┌─────────────┴─────────────┐",
        "                     ▼                           ▼",
        "            Fake-news head              Hate-speech head",
        "                     └─────────────┬─────────────┘",
        "                                   ▼",
        "                  Cluster features ──▶ class-wise F1 gains",
      ].join("\n");
    case "chat-buddy":
      return [
        "Flutter client (iOS · Android)",
        "        │",
        "        ├──▶ Firebase Auth ──▶ session + presence",
        "        ├──▶ Firestore realtime sync ──▶ message delivery",
        "        └──▶ ZegoCloud SDK ──▶ 1:1 video calling",
      ].join("\n");
    default:
      return "Architecture diagram coming soon.";
  }
}
