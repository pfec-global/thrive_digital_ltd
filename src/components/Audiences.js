import { OutlineIcon } from "@/components/icons";

const audiences = [
  {
    title: "Startups",
    text: "Build brand awareness and establish your digital presence.",
    icon: <path d="M12 22V12m0 0C12 7 8 4 3 4c0 5 4 8 9 8zm0 0c0-4 3-7 8-7 0 4-3 7-8 7z" />,
  },
  {
    title: "Small & Medium Businesses",
    text: "Attract new customers and grow your market reach.",
    icon: (
      <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v1a3 3 0 006 0V9m0 1a3 3 0 006 0V9m0 1a3 3 0 006 0V9M5 13v8h14v-8m-9 8v-5h4v5" />
    ),
  },
  {
    title: "Established Brands",
    text: "Strengthen your digital performance and unlock new growth opportunities.",
    icon: <path d="M12 15a6 6 0 100-12 6 6 0 000 12zm-3.8-1.1L7 22l5-3 5 3-1.2-8.1" />,
  },
  {
    title: "E-commerce Businesses",
    text: "Drive relevant traffic, improve conversions, and increase online sales.",
    icon: (
      <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.6a2 2 0 002-1.6L21.5 7H6m4 14a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    ),
  },
];

export default function Audiences() {
  return (
    <section id="who-we-work-with" aria-labelledby="audiences-title" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-[26rem] w-[26rem] bg-dots [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-brand-500 to-brand-700" />
              Who We Work With
            </p>
            <h2
              id="audiences-title"
              className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl"
            >
              Digital Growth Solutions for <span className="text-gradient-brand">Every Stage of Business</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-navy-950/65 sm:text-lg">
            Whether you&apos;re starting fresh or scaling up, Thrive Digital Ltd. helps you navigate the digital landscape
            with confidence.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <li key={a.title} data-reveal="up" style={{ "--reveal-delay": `${i * 110}ms` }} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-navy-950/[0.07] bg-white p-7 shadow-[0_1px_2px_rgba(5,5,48,0.04),0_12px_32px_-12px_rgba(5,5,48,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-navy-950 hover:shadow-[0_28px_56px_-20px_rgba(5,5,48,0.5)]">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-500/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-500/40"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:ring-transparent">
                    <OutlineIcon className="h-6 w-6">{a.icon}</OutlineIcon>
                  </span>
                  <span aria-hidden="true" className="font-display text-sm font-bold text-navy-950/20 transition-colors duration-500 group-hover:text-white/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="relative mt-auto pt-12 font-display text-xl font-bold text-navy-950 transition-colors duration-500 group-hover:text-white">
                  {a.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-navy-950/60 transition-colors duration-500 group-hover:text-white/70">
                  {a.text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
