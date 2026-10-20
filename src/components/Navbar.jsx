import { useEffect, useState } from "react";
import { company, nav } from "../content";
import { trackEvent } from "../analytics";

function Mark() {
  return (
    <svg className="nav-mark" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="1" y="9" width="4" height="8" fill="currentColor" />
      <rect x="7" y="4" width="4" height="13" fill="currentColor" />
      <rect x="13" y="1" width="4" height="16" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [brandFirst, ...brandRest] = company.name.split(" ");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div
        className={`glass-nav mx-auto max-w-6xl rounded-3xl transition-all duration-300 ${
          scrolled || open ? "glass-nav-scrolled" : ""
        }`}
      >
        <nav className="flex h-[3.75rem] items-center justify-between gap-2 px-3 sm:h-[4.25rem] sm:px-7">
          <a href="#top" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight sm:gap-2.5">
            <Mark />
            <span className="truncate text-sm sm:text-base">
              {brandFirst} <span className="text-signal">{brandRest.join(" ")}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 text-sm text-paper md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:font-semibold hover:text-signal focus-visible:font-semibold focus-visible:text-signal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${company.email}`}
            onClick={() => trackEvent("contact_click", { placement: "navigation" })}
            className="hidden rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-paper transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#ff7040] md:inline-flex"
          >
            Reach out <span className="ml-2" aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:hidden sm:px-4"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </nav>

        {open && (
          <div id="mobile-navigation" className="mobile-navigation border-t border-white/10 px-5 pb-5 md:hidden">
            <ul className="flex flex-col gap-1 py-3 text-base">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-paper transition-colors hover:bg-white/5 hover:font-semibold hover:text-signal focus-visible:font-semibold focus-visible:text-signal"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${company.email}`}
              onClick={() => trackEvent("contact_click", { placement: "mobile_navigation" })}
              className="inline-flex w-full items-center justify-center rounded-full bg-signal px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#ff7040]"
            >
              Reach out <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}