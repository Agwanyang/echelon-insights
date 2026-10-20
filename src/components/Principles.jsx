import Reveal from "./Reveal";
import { principles } from "../content";

const principleMarks = [
  <svg key="data" viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path d="M7 39h34M11 34V23h6v11M22 34V14h6v20M33 34V8h6v26" stroke="currentColor" strokeWidth="1.5" />
    <path d="m9 18 12-8 9 3 9-8" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="39" cy="5" r="2" fill="#FF5A1F" />
  </svg>,
  <svg key="build" viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path d="M8 9h12v12H8zM28 9h12v12H28zM8 29h12v12H8z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M28 35h12M34 29v12" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="necessity" viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="#FF5A1F" />
    <path d="M24 4v5M44 24h-5M24 44v-5M4 24h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="move" viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path d="M7 37 18 26l8 6 15-19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31 13h10v10" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7" cy="37" r="2" fill="currentColor" />
    <circle cx="18" cy="26" r="2" fill="currentColor" />
    <circle cx="26" cy="32" r="2" fill="currentColor" />
  </svg>,
];

export default function Principles() {
  return (
    <section
      id="think"
      className="section-space relative isolate scroll-mt-24 overflow-hidden border-t border-line"
    >
      <div
        className="section-ambient pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 58% 55% at 84% 18%, rgba(255,255,255,0.055), transparent 72%), radial-gradient(ellipse 38% 44% at 8% 86%, rgba(255,90,31,0.035), transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-[clamp(1rem,5vw,1.5rem)]">
        <div className="mb-14 flex items-center gap-3 border-b border-line pb-5">
          <span className="section-kicker-line h-px w-7 bg-signal" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
            The principles
          </p>
        </div>

        <div className="mb-14 flex items-end justify-between gap-8 sm:mb-20">
          <Reveal>
            <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-medium leading-[0.9] tracking-[-0.055em] text-paper">
              How we
              <br />
              think<span className="text-signal">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="principle-signal mb-2 hidden h-24 w-48 items-end gap-2 sm:flex" aria-hidden="true">
              {[30, 48, 38, 70, 56, 90, 66, 100].map((height, index) => (
                <span
                  key={index}
                  className={index === 7 ? "bg-signal" : "bg-paper/30"}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {principles.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="principle-card group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012)_55%)] p-[clamp(1.25rem,4vw,2.25rem)] transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/[0.035] blur-3xl transition-colors duration-500 group-hover:bg-signal/[0.08]" aria-hidden="true" />
                <div className="relative mb-8 flex items-start justify-between sm:mb-12">
                  <span className="h-px w-8 bg-white/35" aria-hidden="true" />
                  <span className="principle-icon flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black/20 text-paper transition-transform duration-300 group-hover:scale-105">
                    {principleMarks[index]}
                  </span>
                </div>
                <h3 className="relative mb-4 text-2xl font-medium tracking-tight text-paper sm:text-3xl">
                  {item.title}
                </h3>
                <p className="relative max-w-xl text-base font-light leading-relaxed text-paper sm:text-lg">
                  {item.body}
                </p>
                <div className="relative mt-9 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px w-12 bg-signal transition-all duration-300 group-hover:w-20" />
                  <span className="h-1 w-1 rounded-full bg-paper/70" />
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
