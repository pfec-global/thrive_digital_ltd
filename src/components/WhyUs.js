import Image from "next/image";
import { ArrowIcon, OutlineIcon } from "@/components/icons";

const reasons = [
  {
    title: "Strategy-First Approach",
    text: "Every successful campaign starts with a clear understanding of your business, audience, and objectives.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z" />
      </>
    ),
  },
  {
    title: "Creative Thinking",
    text: "We combine innovative ideas with engaging content to help your brand stand out in a competitive digital landscape.",
    icon: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />,
  },
  {
    title: "Data-Driven Decisions",
    text: "Our strategies are guided by performance insights, helping us refine campaigns and focus on what matters.",
    icon: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  },
  {
    title: "Tailored Solutions",
    text: "No two businesses are the same. That's why we develop marketing solutions around your unique goals.",
    icon: <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6" />,
  },
  {
    title: "Transparent Communication",
    text: "We believe in clear communication, honest collaboration, and keeping you informed throughout the journey.",
    icon: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12zM8 11h8m-8 3h5" />,
  },
  {
    title: "Growth-Focused Mindset",
    text: "We focus on building lasting business value, not just delivering short-term attention.",
    icon: <path d="M3 17l6-6 4 4 8-8m0 0h-6m6 0v6" />,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="relative overflow-clip bg-gradient-to-b from-brand-50/80 via-white to-white py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div aria-hidden="true" className="absolute left-0 top-0 h-[26rem] w-[26rem] bg-dots [mask-image:radial-gradient(circle_at_top_left,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal="left" className="lg:sticky lg:top-32 lg:self-start">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-brand-500 to-brand-700" />
            Why Choose Thrive Digital?
          </p>
          <h2
            id="why-us-title"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl"
          >
            More Than Marketing. <span className="text-gradient-brand">We&apos;re Your Growth Partner.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-950/65 sm:text-lg">
            Great marketing isn&apos;t just about being seen. It&apos;s about reaching the right people, creating meaningful
            connections, and turning opportunities into results.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-navy-950 p-7 text-white shadow-2xl shadow-navy-950/20">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
            <div aria-hidden="true" className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_left,black,transparent)]" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <Image src="/logo-mark.png" alt="" width={442} height={384} className="h-12 w-auto shrink-0 self-start sm:self-auto" />
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-display text-lg font-bold leading-snug">
                <span>Being seen</span>
                <ArrowIcon className="h-4 w-4 text-brand-300/70" />
                <span>Meaningful connections</span>
                <ArrowIcon className="h-4 w-4 text-brand-300/70" />
                <span className="text-gradient">Real results</span>
              </p>
            </div>
            <a
              href="#contact"
              className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-500/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
            >
              Let&apos;s Grow Together
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${(i % 2) * 140}ms` }}
              className={`flex ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}
            >
              <article className="group relative w-full overflow-hidden rounded-3xl border border-navy-950/[0.07] bg-white p-7 shadow-[0_1px_2px_rgba(5,5,48,0.04),0_12px_32px_-12px_rgba(5,5,48,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/30 hover:shadow-[0_24px_48px_-16px_rgba(30,120,247,0.25)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-700 transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:ring-transparent">
                  <OutlineIcon className="h-6 w-6">{r.icon}</OutlineIcon>
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-navy-950">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-950/60">{r.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
