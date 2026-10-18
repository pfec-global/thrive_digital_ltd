"use client";

import { useEffect, useRef } from "react";

const clamp = (n) => Math.min(Math.max(n, 0), 1);

// Wraps the process steps and draws the connector line that fills as you scroll.
// Mobile: vertical line from the first to the last step marker. Desktop: horizontal line.
export default function ProcessTimeline({ children }) {
  const wrapRef = useRef(null);
  const vTrackRef = useRef(null);
  const vFillRef = useRef(null);
  const hFillRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const nodes = wrap?.querySelectorAll("[data-step-node]");
      if (!nodes?.length) return;

      const wrapTop = wrap.getBoundingClientRect().top;
      const first = nodes[0].getBoundingClientRect();
      const last = nodes[nodes.length - 1].getBoundingClientRect();
      const start = first.top + first.height / 2 - wrapTop;
      const end = last.top + last.height / 2 - wrapTop;
      const vh = window.innerHeight;

      // Vertical: track spans marker centres; fill follows a line at 60% of the viewport.
      vTrackRef.current.style.top = `${start}px`;
      vTrackRef.current.style.height = `${Math.max(end - start, 0)}px`;
      const vProgress = reduce ? 1 : clamp((vh * 0.6 - (wrapTop + start)) / (end - start || 1));
      vFillRef.current.style.transform = `scaleY(${vProgress})`;

      // Horizontal: fills while the row of markers moves from 85% to 40% of the viewport.
      const hProgress = reduce ? 1 : clamp((vh * 0.85 - first.top) / (vh * 0.45));
      hFillRef.current.style.transform = `scaleX(${hProgress})`;
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

  return (
    <div ref={wrapRef} className="relative mt-16 lg:mt-24">
      <div ref={vTrackRef} aria-hidden="true" className="absolute left-7 w-px -translate-x-1/2 bg-white/10 lg:hidden">
        <div
          ref={vFillRef}
          style={{ transform: "scaleY(0)" }}
          className="h-full w-full origin-top bg-gradient-to-b from-brand-500 to-brand-300 shadow-[0_0_10px_rgba(30,120,247,0.8)]"
        />
      </div>
      <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-white/10 lg:block">
        <div
          ref={hFillRef}
          style={{ transform: "scaleX(0)" }}
          className="h-full w-full origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300 shadow-[0_0_10px_rgba(30,120,247,0.8)]"
        />
      </div>
      {children}
    </div>
  );
}
