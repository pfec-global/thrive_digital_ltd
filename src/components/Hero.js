import Image from "next/image";
import { ArrowIcon, OutlineIcon } from "@/components/icons";

const pillars = [
  {
    label: "Strategy",
    icon: <path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 100 8 4 4 0 000-8z" />,
  },
  {
    label: "Creativity",
    icon: <path d="M9 18h6m-5 3h4M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />,
  },
  {
    label: "Technology",
    icon: <path d="M8 9l-3 3 3 3m8-6l3 3-3 3M14 5l-4 14" />,
  },
];

const stages = [
  { label: "Brand Awareness", width: "w-[62%]", delay: "[animation-delay:900ms]" },
  { label: "Quality Leads", width: "w-[78%]", delay: "[animation-delay:1100ms]" },
  { label: "Conversions", width: "w-[92%]", delay: "[animation-delay:1300ms]" },
];

function GrowthVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:400ms]">
      {/* glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/20 blur-3xl" />

      {/* main card */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Growth Journey</p>
            <p className="mt-1 font-display text-lg font-bold text-white">Strategy in motion</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        <svg viewBox="0 0 400 180" className="mt-6 h-auto w-full overflow-visible">
          <defs>
            <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1e78f7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1e78f7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0855c2" />
              <stop offset="100%" stopColor="#5a9bfb" />
            </linearGradient>
          </defs>
          {[45, 90, 135].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
          ))}
          <path
            d="M0 160 C 40 150, 70 140, 100 130 S 160 120, 190 100 S 250 95, 280 70 S 350 40, 400 18 L 400 180 L 0 180 Z"
            fill="url(#hero-area)"
            className="animate-fade-up [animation-delay:1200ms]"
          />
          <path
            d="M0 160 C 40 150, 70 140, 100 130 S 160 120, 190 100 S 250 95, 280 70 S 350 40, 400 18"
            fill="none"
            stroke="url(#hero-line)"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            className="animate-draw"
          />
          <circle cx="400" cy="18" r="7" fill="#5a9bfb" className="animate-fade-up [animation-delay:2600ms]" />
          <circle cx="400" cy="18" r="14" fill="#5a9bfb" fillOpacity="0.25" className="animate-fade-up [animation-delay:2600ms]" />
        </svg>

        <ul className="mt-6 space-y-4">
          {stages.map((s) => (
            <li key={s.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-white/80">{s.label}</span>
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11l4-4 3 3 4-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className={`h-full origin-left animate-grow-x rounded-full bg-gradient-to-r from-brand-700 to-brand-400 ${s.width} ${s.delay}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* floating chips */}
      <div className="absolute -left-4 top-[34%] hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-left-16">
        <Image src="/logo-mark.png" alt="" width={442} height={384} className="h-7 w-auto" />
        <div className="leading-tight">
          <p className="text-xs text-white/50">Your partner in</p>
          <p className="text-sm font-semibold text-white">Digital Growth</p>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-3 hidden animate-float-slow items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-2xl shadow-brand-900/40 sm:flex lg:-right-10">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 14l5-5 3 3 6-6m0 0h-4m4 0v4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="leading-tight">
          <p className="text-xs text-navy-950/50">Data-driven</p>
          <p className="text-sm font-bold text-navy-950">Measurable Results</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-20 text-white lg:pt-28"
    >
      {/* background layers */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] animate-float-slow rounded-full bg-brand-500/30 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 h-[32rem] w-[32rem] animate-float rounded-full bg-brand-700/40 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="max-w-2xl">
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 py-1.5 pl-1.5 pr-4 text-sm font-medium text-brand-200">
            <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-semibold text-white">Thrive Digital Ltd.</span>
            Your Digital Growth Partner
          </p>

          <h1
            id="hero-title"
            className="mt-6 animate-fade-up font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight [animation-delay:100ms] sm:text-6xl xl:text-7xl"
          >
            Your Growth.
            <br />
            Our Strategy.
            <br />
            <span className="text-gradient">Real Results.</span>
          </h1>

          <p className="mt-6 animate-fade-up text-xl font-semibold text-white sm:text-2xl [animation-delay:200ms]">
            We Turn Digital Opportunities Into Business Growth.
          </p>

          <div className="mt-5 max-w-xl animate-fade-up space-y-4 text-base leading-relaxed text-white/65 sm:text-lg [animation-delay:300ms]">
            <p>
              At Thrive Digital Ltd., we help brands stand out, connect with the right audience, and achieve measurable
              growth through creative, data-driven digital marketing solutions.
            </p>
            <p>
              From building brand awareness to generating quality leads and increasing conversions, we bring together
              strategy, creativity, and technology to move your business forward.
            </p>
          </div>

          <div className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row [animation-delay:400ms]">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-4 font-semibold text-white shadow-xl shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-500/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
            >
              Let&apos;s Grow Together
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
            >
              Explore Our Services
            </a>
          </div>

          <ul className="mt-10 flex animate-fade-up flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 [animation-delay:500ms]">
            {pillars.map((p) => (
              <li key={p.label} className="flex items-center gap-2.5 text-sm font-medium text-white/75">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <OutlineIcon className="h-[18px] w-[18px]">{p.icon}</OutlineIcon>
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <GrowthVisual />
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white/70 md:flex"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-current pt-1.5">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
