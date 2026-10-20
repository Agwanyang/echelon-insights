import Reveal from "./Reveal";
import { company, hero } from "../content";
import { trackEvent } from "../analytics";

const sentences = hero.sub.match(/[^.]+\./g).map((s) => s.trim());
const words = hero.headline.split(" ");
const lastWord = words.pop();

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="hero-ambient pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 68% 58% at 25% 35%, rgba(255,255,255,0.13), transparent 72%), radial-gradient(ellipse 40% 48% at 82% 72%, rgba(255,90,31,0.055), transparent 75%), linear-gradient(180deg, rgba(255,255,255,0.035), transparent 55%)",
        }}
      />
      <div className="hero-orbit pointer-events-none absolute" aria-hidden="true" />

      {/* Decorative signal line (not real data) */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] w-full"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#F5F5F5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="signal-area"
          d="M0 200 L80 190 L160 205 L240 170 L320 180 L400 140 L480 155 L560 120 L640 135 L720 95 L800 110 L880 70 L960 85 L1040 45 L1120 60 L1200 20 L1200 240 L0 240 Z"
          fill="url(#area)"
        />
        <path
          className="signal-line"
          pathLength="1"
          d="M0 200 L80 190 L160 205 L240 170 L320 180 L400 140 L480 155 L560 120 L640 135 L720 95 L800 110 L880 70 L960 85 L1040 45 L1120 60 L1200 20"
          fill="none"
          stroke="#F5F5F5"
          strokeOpacity="0.68"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-[clamp(1rem,5vw,1.5rem)] pb-28 pt-28 sm:pb-32 sm:pt-32">
        <Reveal className="hero-reveal">
          <p className="max-w-md font-mono text-sm font-medium leading-relaxed text-paper">
            {company.tagline}
          </p>
        </Reveal>

        <Reveal
          as="h1"
          delay={120}
          className="hero-reveal mt-8 max-w-5xl text-balance text-[clamp(2.5rem,7.2vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.05em] text-paper"
        >
          {words.join(" ")} {lastWord}
        </Reveal>

        <div className="mt-10 space-y-1">
          {sentences.map((s, i) => (
            <Reveal key={s} delay={380 + i * 140} className="hero-reveal">
              <p
                className={
                  i === sentences.length - 1
                    ? "text-[clamp(1.1rem,2.5vw,1.5rem)] font-normal text-paper"
                    : "text-base font-light text-paper/60 sm:text-lg"
                }
              >
                {s}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={650} className="hero-reveal mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
          <a
            href={`mailto:${company.email}`}
            onClick={() => trackEvent("contact_click", { placement: "hero" })}
            className="hero-primary-cta inline-flex min-h-12 items-center rounded-full bg-signal px-6 py-3 font-semibold text-paper transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#ff7040] hover:shadow-[0_8px_28px_rgba(255,90,31,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          >
            Reach out
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-2 py-3 font-medium text-paper transition-colors hover:text-paper"
          >
            What we are
            <span
              aria-hidden="true"
              className="hero-link-arrow transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-8 z-10 hidden sm:block">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6">
          <div className="h-10 w-px overflow-hidden bg-line">
            <div className="scroll-cue h-full w-px bg-paper/70" />
          </div>
          <span className="font-mono text-xs text-paper">Scroll</span>
        </div>
      </div>
    </section>
  );
}