import Reveal from "./Reveal";
import { measure } from "../content";

const measureIcons = [
  {
    label: "Evidence",
    icon: (
      <>
        <path d="M5 29h22M8 26V17h5v9M16 26V11h5v15M24 26V6h4v20" />
        <path d="m6 13 8-5 6 2 8-6" className="measure-icon-accent" />
      </>
    ),
  },
  {
    label: "Systems",
    icon: (
      <>
        <rect x="5" y="5" width="9" height="8" rx="1.5" />
        <rect x="19" y="5" width="9" height="8" rx="1.5" />
        <rect x="12" y="21" width="9" height="8" rx="1.5" className="measure-icon-accent" />
        <path d="M9.5 13v3h12v-3M16.5 16v5" />
      </>
    ),
  },
  {
    label: "Signals",
    icon: (
      <>
        <path d="M4 18h5l3-9 5 18 4-12 2 3h5" />
        <circle cx="27" cy="18" r="2" className="measure-icon-fill" />
      </>
    ),
  },
  {
    label: "Outcomes",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="7" />
        <circle cx="16" cy="16" r="2.5" className="measure-icon-fill" />
        <path d="m17.5 14.5 9-9M21 5.5h5v5" className="measure-icon-accent" />
      </>
    ),
  },
  {
    label: "Long view",
    icon: (
      <>
        <path d="M4 26h24M6 22l6-6 5 3 9-11" />
        <path d="M20 8h6v6" className="measure-icon-accent" />
        <circle cx="26" cy="8" r="2" className="measure-icon-fill" />
      </>
    ),
  },
];

export default function MeasureSection() {
  return (
    <section
      id="measure"
      className="measure-section section-space relative isolate scroll-mt-24 overflow-hidden border-t border-line"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-[clamp(1rem,5vw,1.5rem)]">
        <div className="mb-14 flex items-center justify-between gap-4 border-b border-line pb-5">
          <div className="flex items-center gap-3">
            <span className="section-kicker-line h-px w-7 bg-signal" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
              {measure.title}
            </p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
            01 / Long view
          </span>
        </div>

        <div className="measure-intro grid gap-8 rounded-[1.5rem] border border-white/10 p-[clamp(1.25rem,5vw,3rem)] sm:rounded-[2rem] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
          <Reveal className="measure-statement-wrap">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
              A different measure of success
            </p>
            <h2 className="measure-statement max-w-3xl text-balance text-[clamp(2.5rem,6.5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-paper">
              <span className="block">{measure.headline[0]}</span>
              <span className="measure-headline-accent block">{measure.headline[1]}</span>
              <span className="measure-headline-contrast block">{measure.contrast}</span>
            </h2>
            <span className="measure-statement-rule mt-8 block h-px w-full" aria-hidden="true" />
          </Reveal>
          <Reveal delay={140} className="measure-lead md:border-l md:border-white/15 md:pl-9">
            <p className="max-w-xl text-lg font-light leading-relaxed text-paper/85 sm:text-xl">
              {measure.paragraphs[0]}
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">
              <span className="measure-live-dot size-2 rounded-full bg-signal" aria-hidden="true" />
              Built for what comes next
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={180}
          className="measure-icon-strip mt-8 grid grid-cols-5 gap-2 rounded-2xl border border-white/10 p-2 sm:mt-10 sm:gap-3 sm:p-3"
          aria-hidden="true"
        >
          {measureIcons.map(({ label, icon }, index) => (
            <div
              className="measure-icon-card flex min-w-0 flex-col items-center gap-3 rounded-xl px-1 py-3 sm:py-4"
              key={label}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="measure-icon-graphic size-8 text-paper sm:size-9"
              >
                {icon}
              </svg>
              <span className="text-center font-mono text-[8px] uppercase tracking-[0.1em] text-paper/50 sm:text-[10px] sm:tracking-[0.14em]">
                {label}
              </span>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:mt-20 sm:grid-cols-2 sm:gap-12">
          {measure.paragraphs.slice(1).map((paragraph, index) => (
            <Reveal key={paragraph} delay={160 + index * 100}>
              <article className="measure-principle h-full">
                <h3 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-paper/60">
                  <span className="measure-principle-index">0{index + 1}</span>
                  {measure.paragraphLabels[index]}
                </h3>
                <p className="max-w-xl text-base font-light leading-relaxed text-paper/75 sm:text-lg">
                  {paragraph}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="measure-horizon mt-16 px-1 pt-7 sm:mt-20 sm:pt-8">
          <div className="relative grid grid-cols-3 gap-3">
            <span className="measure-horizon-line" aria-hidden="true" />
            {measure.timeline.map((label, index) => (
              <div key={label} className={`relative flex flex-col gap-3 ${index === 1 ? "items-center text-center" : index === 2 ? "items-end text-right" : ""}`}>
                <span className={`measure-horizon-point ${index === 1 ? "measure-horizon-point-active" : ""}`} aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/50 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-right font-mono text-[9px] uppercase tracking-[0.18em] text-paper/30">
            A longer measure of progress
          </p>
        </Reveal>
      </div>
    </section>
  );
}
