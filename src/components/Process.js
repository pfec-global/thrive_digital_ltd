import { OutlineIcon } from "@/components/icons";

const steps = [
  {
    title: "Discover",
    text: "We learn about your business, audience, challenges, and growth objectives.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    title: "Strategise",
    text: "We develop a tailored digital marketing plan aligned with your business goals.",
    icon: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  },
  {
    title: "Execute",
    text: "We bring the strategy to life through creative content, targeted campaigns, and digital solutions.",
    icon: (
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 00-2.9-.1zM12 15l-3-3a22 22 0 012-3.9A12.9 12.9 0 0122 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 01-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0m1 7v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
    ),
  },
  {
    title: "Optimise & Grow",
    text: "We monitor performance, analyse results, and continuously refine our approach to improve outcomes.",
    icon: <path d="M21 12a9 9 0 11-3-6.7L21 8m0-5v5h-5M8 14l3-3 2 2 3-3" />,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-700/30 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-transparent to-brand-400" />
            Our Process
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-l from-transparent to-brand-400" />
          </p>
          <h2
            id="process-title"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            A Smarter Way to <span className="text-gradient">Grow Your Business</span>
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-8 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {/* connector: vertical on mobile, horizontal on desktop; fills as you scroll */}
          <div aria-hidden="true" className="absolute bottom-8 left-7 top-8 w-px bg-white/10 lg:hidden">
            <div className="scroll-fill-y h-full w-full origin-top bg-gradient-to-b from-brand-500 to-brand-300" />
          </div>
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-white/10 lg:block">
            <div className="scroll-fill-x h-full w-full origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300" />
          </div>

          {steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${i * 150}ms` }}
              className="relative grid grid-cols-[3.5rem_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 ring-1 ring-white/15 lg:h-20 lg:w-20">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-extrabold shadow-lg shadow-brand-500/40 lg:h-16 lg:w-16 lg:text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>

              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[0.06] sm:p-7 lg:mt-8 lg:w-full lg:text-center">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-500/30"
                />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300 transition-colors duration-500 group-hover:text-white">
                  <OutlineIcon className="h-5 w-5">{step.icon}</OutlineIcon>
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-white/60">{step.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
