"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SHOW_AFTER = 600;

// Floating back-to-top button with a ring that shows scroll progress.
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (ringRef.current) ringRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - progress)}`;
      setVisible(window.scrollY > SHOW_AFTER);
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

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950/90 text-white shadow-[0_12px_32px_-8px_rgba(5,5,48,0.6)] ring-1 ring-white/10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand-500 hover:to-brand-700 hover:shadow-[0_16px_40px_-8px_rgba(30,120,247,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-6 scale-75 opacity-0"
      }`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2.5" />
        <circle
          ref={ringRef}
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="url(#scroll-top-ring)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="transition-[stroke-dashoffset] duration-150 group-hover:opacity-0"
        />
        <defs>
          <linearGradient id="scroll-top-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5a9bfb" />
            <stop offset="100%" stopColor="#1e78f7" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}
