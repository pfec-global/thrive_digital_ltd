"use client";

import { useEffect } from "react";

// Reveals every [data-reveal] element once, the first time it scrolls into view.
// Hidden styles only apply while <html> has .reveal-ready (set by an inline script in layout.js).
export default function RevealObserver() {
  useEffect(() => {
    window.__revealReady = true;
    const els = document.querySelectorAll("[data-reveal]:not(.is-revealed)");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
