import Reveal from "./Reveal";
import { company, footer, nav, work } from "../content";
import { trackEvent } from "../analytics";

const currentYear = new Date().getFullYear();
const inputClass =
  "w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3.5 text-base text-paper placeholder:text-paper/45 outline-none transition-colors focus:border-signal focus:ring-1 focus:ring-signal/40";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-[0.12em] text-paper">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function WorkSection() {
  const [invitation, response] = work.paragraphs[1].split("reach out.");
  const companyNameParts = company.name.split(" ");

  function handleSubmit(event) {
    event.preventDefault();
    trackEvent("contact_form_submit");
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const companyName = String(formData.get("company") || "");
    const message = String(formData.get("message") || "");
    const subject = `Enquiry: ${firstName} ${lastName}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Company: ${companyName || "-"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <section
        id="work"
        className="section-space relative isolate scroll-mt-24 overflow-hidden border-t border-line bg-ink"
      >
        <div
          className="section-ambient pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 58% 54% at 82% 34%, rgba(245,245,245,0.055), transparent 72%), radial-gradient(ellipse 42% 42% at 12% 88%, rgba(255,90,31,0.045), transparent 76%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-[clamp(1rem,5vw,1.5rem)]">
          <div className="mb-14 flex items-center gap-3 border-b border-line pb-5">
            <span className="section-kicker-line h-px w-7 bg-signal" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
              The open door
            </p>
          </div>

          <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(3rem,7vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.05em] text-paper">
                Working
                <br />
                with us<span className="text-paper/50">.</span>
              </h2>
            </Reveal>
            <div className="max-w-2xl space-y-5">
              <Reveal delay={100}>
                <p className="text-lg font-light leading-relaxed text-paper sm:text-xl">
                  {work.paragraphs[0]}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-lg font-light leading-relaxed text-paper sm:text-xl">
                  {invitation}
                  <a
                    href={`mailto:${company.email}`}
                    className="mx-1 inline-flex items-center rounded-full bg-signal px-4 py-1.5 align-baseline text-sm font-bold text-paper no-underline transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#ff7040] hover:shadow-[0_6px_20px_rgba(255,90,31,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:text-base"
                  >
                    reach out
                  </a>
                  {response}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="work-form-glass w-full rounded-3xl p-[clamp(1.25rem,4vw,2.5rem)]">
                <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <h3 className="text-2xl font-normal text-paper sm:text-3xl">
                      Start a conversation
                    </h3>
                    <p className="mt-2 text-sm font-light text-paper">
                      Tell us a little about what you have in mind.
                    </p>
                  </div>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                </div>

                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="firstName" label="First name">
                      <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="Your first name" className={inputClass} />
                    </Field>
                    <Field id="lastName" label="Last name">
                      <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Your last name" className={inputClass} />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Email address">
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
                    </Field>
                    <Field id="phone" label="Phone number">
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={inputClass} />
                    </Field>
                  </div>
                  <Field id="company" label="Company / organisation">
                    <input id="company" name="company" autoComplete="organization" placeholder="Optional" className={inputClass} />
                  </Field>
                  <Field id="message" label="Your message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you looking to build?"
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-between rounded-xl bg-signal px-5 py-4 font-medium text-paper transition-colors hover:bg-paper hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
                  >
                    <span>Send us a message</span>
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </Reveal>

            <Reveal delay={140} className="flex flex-col gap-6">
              <div className="work-contact-glass rounded-3xl p-6 sm:p-7">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-paper">
                    Prefer a direct line?
                  </p>
                  <p className="mt-5 max-w-sm text-2xl font-light leading-snug text-paper sm:text-3xl">
                    We answer serious messages seriously.
                  </p>
                </div>
                <div className="my-10 flex items-center gap-3" aria-hidden="true">
                  <div className="work-contact-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] text-paper">
                    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
                      <path d="M6 33h28M10 29V19h5v10M19 29V12h5v17M28 29V7h4v22" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m8 15 9-5 7 2 9-7" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="work-contact-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] text-paper">
                    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
                      <path d="M5 22h8l4-11 7 20 4-9h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="33" cy="22" r="2.5" fill="#FF5A1F" />
                    </svg>
                  </div>
                  <div className="work-contact-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] text-paper">
                    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
                      <path d="m10 11 10 9-7 10 16-4M20 20l9-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="20" cy="20" r="3" fill="#FF5A1F" />
                      <circle cx="29" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="13" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="29" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="ml-1 h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-center justify-between gap-4 border-b border-white/20 pb-4 text-paper transition-colors hover:border-signal hover:text-signal"
                >
                  <span className="break-all text-base sm:text-lg">{company.email}</span>
                  <span className="shrink-0 text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
              </div>
              <div
                className="work-data-panel relative isolate overflow-hidden rounded-[2rem] p-5 sm:p-6"
                aria-hidden="true"
              >
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  <span>Signal flow</span>
                  <span className="flex items-center gap-2 text-signal">
                    <span className="work-signal-pulse size-1.5 rounded-full bg-signal" />
                    Live / 01
                  </span>
                </div>
                <svg
                  viewBox="0 0 520 150"
                  fill="none"
                  className="h-auto w-full overflow-visible"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="signal-stroke" x1="32" y1="112" x2="486" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF5A1F" stopOpacity=".25" />
                      <stop offset=".52" stopColor="#FF5A1F" />
                      <stop offset="1" stopColor="#F5F5F5" stopOpacity=".82" />
                    </linearGradient>
                    <linearGradient id="signal-fill" x1="260" y1="26" x2="260" y2="132" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF5A1F" stopOpacity=".2" />
                      <stop offset="1" stopColor="#FF5A1F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M20 130H500M20 94H500M20 58H500M20 22H500" stroke="white" strokeOpacity=".07" />
                  <path d="M34 130V108M74 130V96M114 130V114M154 130V82M194 130V92M234 130V68M274 130V84M314 130V52M354 130V70M394 130V38M434 130V56M474 130V20" stroke="#F5F5F5" strokeOpacity=".1" strokeWidth="8" strokeLinecap="round" />
                  <path d="M34 130V108M114 130V114M194 130V92M274 130V84M354 130V70M434 130V56" stroke="#FF5A1F" strokeOpacity=".48" strokeWidth="3" strokeLinecap="round" />
                  <path d="M20 112L74 98L114 116L154 82L194 91L234 67L274 84L314 51L354 69L394 37L434 55L486 18V140H20V112Z" fill="url(#signal-fill)" />
                  <path className="work-signal-line" d="M20 112L74 98L114 116L154 82L194 91L234 67L274 84L314 51L354 69L394 37L434 55L486 18" stroke="url(#signal-stroke)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {[74, 154, 234, 314, 394, 474].map((x, index) => {
                    const y = [98, 82, 67, 51, 37, 24][index];
                    return (
                      <g key={x} className="work-signal-node" style={{ animationDelay: `${index * 180}ms` }}>
                        <circle cx={x} cy={y} r="8" fill="#FF5A1F" fillOpacity=".16" />
                        <circle cx={x} cy={y} r="3" fill="#FF5A1F" stroke="#0A0A0A" strokeWidth="1.5" />
                      </g>
                    );
                  })}
                </svg>
                <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-paper/35">
                  <span>Observe</span>
                  <span>Measure</span>
                  <span>Build</span>
                  <span>Move</span>
                </div>
              </div>
              <div className="work-process-panel overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                    Signal to action
                  </h3>
                  <span className="text-xs font-medium text-paper/70">No guesswork.</span>
                </div>
                <div className="relative grid grid-cols-4">
                  <span className="work-process-track" aria-hidden="true" />
                  {["Notice", "Test", "Build", "Learn"].map((step, index) => (
                    <div className="relative flex flex-col items-center gap-2" key={step}>
                      <span
                        className="work-process-node"
                        style={{ animationDelay: `${index * 350}ms` }}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-paper/60 sm:text-[10px]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 px-2 text-paper">
                <span className="h-px w-8 bg-signal" aria-hidden="true" />
                <p className="text-sm font-light">Independent by choice. Open to what’s real.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink pt-12 sm:pt-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-[clamp(1rem,5vw,1.5rem)] sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1fr_auto_auto] lg:gap-16">
          <div className="max-w-sm">
            <p className="text-sm font-light leading-relaxed text-paper/70">{footer}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-paper/50">
              Explore
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper transition-colors hover:text-signal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-paper/50">
              Contact
            </h2>
            <a
              href={`mailto:${company.email}`}
              className="break-all text-sm text-paper transition-colors hover:text-signal"
            >
              {company.email}
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="group mt-5 flex size-14 items-center justify-center rounded-full border border-signal/70 bg-signal text-ink shadow-[0_0_28px_rgba(255,90,31,0.24)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-paper hover:bg-paper hover:shadow-[0_0_32px_rgba(245,245,245,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="size-6 transition-transform duration-300 group-hover:-translate-y-1"
              >
                <path d="M12 19V5m0 0L6.5 10.5M12 5l5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-y border-white/10 px-[clamp(0.5rem,2vw,1.5rem)] py-5 sm:mt-16 sm:py-7">
          <Reveal>
            <p
              aria-hidden="true"
              className="footer-wordmark text-balance text-center font-sans text-[clamp(2rem,12.5vw,16rem)] font-bold leading-[0.82] tracking-[-0.085em] text-paper"
            >
              {companyNameParts.slice(0, -1).join(" ")}{" "}
              <span className="font-bold text-signal">{companyNameParts.at(-1)}</span>
            </p>
          </Reveal>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-[clamp(1rem,5vw,1.5rem)] py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
          <p>Independent by choice.</p>
        </div>
      </footer>
    </>
  );
}
