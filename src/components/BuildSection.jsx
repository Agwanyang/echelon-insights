import Reveal from "./Reveal";
import { build } from "../content";

function SystemMark() {
  return (
    <svg viewBox="0 0 240 180" className="build-system-mark h-36 w-48 sm:h-44 sm:w-60" fill="none" aria-hidden="true">
      <path d="M120 15v34M120 131v34M30 90h36M174 90h36M57 27l25 25M158 128l25 25M183 27l-25 25M82 128l-25 25" stroke="currentColor" strokeOpacity=".3" />
      <path d="M66 90h54l38-38M120 90l38 38" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.5" />
      <circle className="build-system-orbit" cx="120" cy="90" r="41" stroke="currentColor" strokeOpacity=".32" />
      <circle className="build-system-orbit-inner" cx="120" cy="90" r="25" stroke="currentColor" strokeOpacity=".65" />
      <circle className="build-system-core" cx="120" cy="90" r="7" fill="#FF5A1F" />
      <circle cx="66" cy="90" r="4" fill="currentColor" />
      <circle cx="158" cy="52" r="4" fill="currentColor" />
      <circle cx="158" cy="128" r="4" fill="currentColor" />
      <path d="M19 15h32M19 15v24M221 165h-32M221 165v-24" stroke="currentColor" strokeOpacity=".24" />
    </svg>
  );
}

export default function BuildSection() {
  return (
    <section
      id="build"
      className="section-space relative isolate scroll-mt-24 overflow-hidden border-t border-line"
    >
      <div
        className="section-ambient pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 68% 62% at 76% 34%, rgba(245,245,245,0.11), transparent 72%), radial-gradient(ellipse 64% 60% at 20% 64%, rgba(255,90,31,0.07), transparent 76%), radial-gradient(ellipse 70% 42% at 50% 0%, rgba(255,255,255,0.045), transparent 78%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-[clamp(1rem,5vw,1.5rem)]">
        <div className="mb-12 flex items-center gap-3 border-b border-line pb-5">
          <span className="section-kicker-line h-px w-7 bg-signal" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
            In the world
          </p>
        </div>

        <div className="build-hero-glass relative overflow-hidden rounded-[1.5rem] p-[clamp(1.25rem,5vw,3.5rem)] sm:rounded-[2rem]">
          <div
            className="build-ambient-pointer pointer-events-none absolute -inset-8 blur-3xl"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 55% 72% at 78% 48%, rgba(245,245,245,0.16), transparent 72%), radial-gradient(ellipse 54% 70% at 16% 88%, rgba(255,90,31,0.11), transparent 76%)",
            }}
          />
          <div className="build-ambient-wash pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_50%,rgba(255,255,255,0.07),transparent_52%)]" aria-hidden="true" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <Reveal>
                <h2 className="text-[clamp(2.75rem,6.5vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.05em] text-paper">
                  What we
                  <br />
                  build
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <blockquote className="mt-7 max-w-2xl border-l border-white/35 py-1 pl-4 text-[clamp(1.35rem,3.5vw,2.25rem)] font-light leading-snug text-paper sm:mt-9 sm:pl-7">
                  {build.quote}
                </blockquote>
              </Reveal>
            </div>
            <Reveal delay={180} className="flex justify-center text-paper md:pr-2">
              <SystemMark />
            </Reveal>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {build.items.map((item, index) => (
            <Reveal key={item} delay={index * 100}>
              <article className="build-item-glass build-item-enter group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-3xl p-[clamp(1.25rem,3.5vw,2rem)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-72">
                <div className="flex items-center justify-between">
                  <span className="h-px w-8 bg-white/35" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-paper/70 transition-colors group-hover:bg-signal" aria-hidden="true" />
                </div>
                <p className="mt-12 text-lg font-light leading-relaxed text-paper sm:text-xl">
                  {item}
                </p>
                <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-14" />
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="build-close-glass mt-5 rounded-3xl px-6 py-7 sm:px-9 sm:py-8">
          <p className="max-w-4xl text-base font-light leading-relaxed text-paper sm:text-lg">
            {build.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
