import Image from "next/image";
import { ArrowIcon, OutlineIcon } from "@/components/icons";

const approach = [
  {
    title: "Fresh Ideas",
    icon: <path d="M9 18h6m-5 3h4M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 3z" />,
  },
  {
    title: "Smart Strategies",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 12l7-7m0 0h-3m3 0v3" />
      </>
    ),
  },
  {
    title: "Engaging Content",
    icon: <path d="M4 5h16v11H8l-4 4V5zm4 4h8m-8 3h5" />,
  },
  {
    title: "Performance-Focused Campaigns",
    icon: <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />,
  },
];

function ApproachCard() {
  return (
    <div data-reveal="right" style={{ "--reveal-delay": "150ms" }} className="relative mx-auto w-full max-w-xl">
      {/* offset backplate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 rotate-1 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 sm:translate-x-5 sm:translate-y-5 sm:rotate-2"
      />

      <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-7 text-white shadow-2xl shadow-navy-950/30 sm:p-10">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-700/40 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="" width={442} height={384} className="h-8 w-auto" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Our Approach</p>
              <p className="font-display text-lg font-bold">Tailored to your business goals</p>
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {approach.map((item, i) => (
              <li
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors sm:p-5 duration-300 hover:border-brand-400/40 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11 bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <OutlineIcon>{item.icon}</OutlineIcon>
                  </span>
                  <span className="font-display text-sm font-bold text-white/25">0{i + 1}</span>
                </div>
                <p className="mt-4 text-sm font-semibold leading-snug sm:text-base">{item.title}</p>
              </li>
            ))}
          </ul>

          <figure className="mt-8 border-t border-white/10 pt-7">
            <svg viewBox="0 0 32 32" className="h-7 w-7 text-brand-400" fill="currentColor" aria-hidden="true">
              <path d="M10 8C5.6 8 3 11.4 3 16v8h9v-9H7.2c.3-2.6 1.6-4 2.8-4V8zm16 0c-4.4 0-7 3.4-7 8v8h9v-9h-4.8c.3-2.6 1.6-4 2.8-4V8z" />
            </svg>
            <blockquote className="mt-3 font-display text-lg font-semibold leading-snug sm:text-xl">
              At Thrive Digital Ltd., we believe every business deserves the opportunity to grow, compete, and succeed
              online.
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="absolute right-0 top-0 h-[28rem] w-[28rem] bg-dots [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div data-reveal="left">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-brand-500 to-brand-700" />
            About Us
          </p>

          <h2
            id="about-title"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl"
          >
            Your Vision. <span className="text-gradient-brand">Our Digital Expertise.</span>
          </h2>

          <p className="mt-5 font-display text-xl font-semibold text-navy-950/80 sm:text-2xl">
            Helping Businesses Thrive in a Digital World.
          </p>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-navy-950/65 sm:text-lg">
            <p>
              We are a digital marketing agency focused on helping businesses build a stronger online presence and turn
              their marketing investments into meaningful results.
            </p>
            <p>
              Our approach combines fresh ideas, smart strategies, engaging content, and performance-focused campaigns
              tailored to your business goals.
            </p>
          </div>

          <p className="mt-7 rounded-2xl border border-brand-100 bg-brand-50/70 p-5 text-base leading-relaxed text-navy-950/80 sm:text-lg">
            Whether you&apos;re a <strong className="font-semibold text-navy-950">startup</strong> looking to establish your
            brand or an <strong className="font-semibold text-navy-950">established business</strong> ready to scale,
            we&apos;re here to help you take the next step.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-navy-950 px-7 py-4 font-semibold text-white shadow-xl shadow-navy-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
          >
            More About Us
            <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <ApproachCard />
      </div>
    </section>
  );
}
