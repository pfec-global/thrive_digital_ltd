"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site";

const sectionIds = navLinks.map((link) => link.href.slice(1));

// The section whose top has crossed this fraction of the viewport counts as "current".
const ACTIVE_LINE = 0.35;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);
  const linkRefs = useRef({});
  const indicatorRef = useRef(null);
  const progressRef = useRef(null);

  // Scroll-spy: track header style and which section is in view.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0})`;
      }
      const line = window.innerHeight * ACTIVE_LINE;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive(atBottom ? sectionIds.at(-1) : current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Slide the desktop pill under the active link (DOM write only, no re-render).
  useEffect(() => {
    const place = () => {
      const link = linkRefs.current[active];
      const pill = indicatorRef.current;
      if (!link || !pill) return;
      const list = link.closest("ul");
      pill.style.width = `${link.offsetWidth}px`;
      pill.style.height = `${link.offsetHeight}px`;
      pill.style.transform = `translate(${list.offsetLeft + link.offsetLeft}px, ${list.offsetTop + link.offsetTop}px)`;
      pill.style.opacity = "1";
    };
    place();
    document.fonts?.ready.then(place);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/90 py-3 shadow-[0_10px_40px_-15px_rgba(5,5,48,0.8)] backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          aria-label="Primary"
          className="relative hidden rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md lg:block"
        >
          <span
            aria-hidden="true"
            ref={indicatorRef}
            className="absolute left-0 top-0 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 shadow-lg shadow-brand-500/40 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
          <ul className="relative flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    ref={(el) => {
                      linkRefs.current[link.href.slice(1)] = el;
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:shadow-brand-500/50 sm:inline-flex"
          >
            Let&apos;s Grow Together
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-[3px] overflow-hidden">
        <div
          ref={progressRef}
          style={{ transform: "scaleX(0)" }}
          className="h-full w-full origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300 shadow-[0_0_12px_rgba(30,120,247,0.8)]"
        />
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-500 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <ul className="mx-5 mt-4 space-y-1 border-t border-white/10 pt-4 pb-2 sm:mx-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_10px_2px] shadow-brand-500/60" />}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 sm:hidden">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-3 text-center font-semibold text-white"
              >
                Let&apos;s Grow Together
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
