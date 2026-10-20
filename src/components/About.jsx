import Reveal from "./Reveal";
import { about } from "../content";

export default function About() {
  return (
    <section
      id="about"
      className="section-space relative isolate scroll-mt-24 overflow-hidden border-t border-line"
    >
      <div
        className="section-ambient pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 88% 38%, rgba(255,255,255,0.045), transparent 72%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-[clamp(1rem,5vw,1.5rem)]">
        <div className="mb-14 flex items-center gap-3 border-b border-line pb-5">
          <span className="section-kicker-line h-px w-7 bg-signal" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
            The group
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <Reveal>
            <h2 className="max-w-sm text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-paper">
              What
              <br />
              we are<span className="text-signal">.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4" aria-hidden="true">
              <div className="about-icon-tile flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-paper/80 sm:size-16">
                <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
                  <path d="M5 26.5h22" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 23V16h4v7M17 23V10h4v13" stroke="currentColor" strokeWidth="2" />
                  <path d="M25 23V6h2v17" stroke="#FF5A1F" strokeWidth="2" />
                </svg>
              </div>
              <div className="about-icon-tile flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-paper/80 sm:size-16">
                <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
                  <path d="M5 8.5h22M5 16h22M5 23.5h22" stroke="currentColor" strokeOpacity=".35" />
                  <path d="m6 22 6-7 5 3 9-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="26" cy="8" r="2.5" fill="#FF5A1F" />
                </svg>
              </div>
              <div className="about-icon-tile flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-paper/80 sm:size-16">
                <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
                  <path d="m8 9 8 7-5 8 12-3M16 16l7-9" stroke="currentColor" strokeWidth="1.75" />
                  <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="16" r="3" fill="#FF5A1F" />
                  <circle cx="23" cy="7" r="2.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="11" cy="24" r="2.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="23" cy="21" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 120}>
                <div className="about-copy-row border-b border-white/10 pb-8">
                  <p
                    className={
                      index === 0
                        ? "max-w-2xl text-xl font-light leading-relaxed text-paper sm:text-2xl"
                        : "max-w-2xl text-base font-normal leading-relaxed text-paper sm:text-lg"
                    }
                  >
                    {paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={240}
          className="about-closing-panel mt-16 grid gap-8 rounded-3xl bg-white/[0.035] p-7 sm:mt-20 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:p-10"
        >
          <p className="max-w-xl text-lg font-light leading-relaxed text-paper sm:text-xl">
            {about.closing}
          </p>
          <div className="about-closing-visual flex items-center justify-center gap-5 text-paper/60" aria-hidden="true">
            <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20" fill="none">
              <path d="M12 66h58M16 60V43h9v17M34 60V31h9v29M52 60V16h9v44" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15 35 34 25l13 3 20-17" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="67" cy="11" r="3" fill="#FF5A1F" />
            </svg>
            <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20" fill="none">
              <circle cx="40" cy="40" r="25" stroke="currentColor" strokeOpacity=".28" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="16" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="7" stroke="#FF5A1F" strokeWidth="1.5" />
              <path d="M40 5v10M75 40H65M40 75V65M5 40h10M64.75 15.25l-7.1 7.1M64.75 64.75l-7.1-7.1M15.25 64.75l7.1-7.1M15.25 15.25l7.1 7.1" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-paper sm:justify-self-end sm:text-xl">
            {about.closingNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
