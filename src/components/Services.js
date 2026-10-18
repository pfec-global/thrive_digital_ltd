import { ArrowIcon, OutlineIcon } from "@/components/icons";
import { services } from "@/lib/services";

const icons = {
  "social-media-marketing": (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
  "search-engine-optimisation": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M8 13l2-2 1.5 1.5L14 9" />
    </>
  ),
  "paid-advertising": <path d="M3 11v2a1 1 0 001 1h2l5 4V6l-5 4H4a1 1 0 00-1 1zm13-3a5 5 0 010 8m2.5-10.5a8.5 8.5 0 010 13" />,
  "website-design-development": (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8m-4-4v4M9.5 8.5L7.5 10.5l2 2m5-4l2 2-2 2" />
    </>
  ),
  "content-creation-branding": (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  "digital-marketing-strategy": <path d="M21.2 15.9A10 10 0 118 2.8M22 12A10 10 0 0012 2v10z" />,
};

function ServiceCard({ service, index }) {
  return (
    <li data-reveal="up" style={{ "--reveal-delay": `${(index % 3) * 120}ms` }} className="flex">
      <article className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-brand-500/10 sm:p-8">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-500/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-500/30"
        />

        <div className="relative flex items-start justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
            <OutlineIcon className="h-6 w-6">{icons[service.slug]}</OutlineIcon>
          </span>
          <span
            aria-hidden="true"
            className="bg-gradient-to-b from-white/25 to-white/0 bg-clip-text font-display text-5xl font-extrabold text-transparent transition-all duration-500 group-hover:from-brand-300/80"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="relative mt-7 font-display text-xl font-bold text-white">{service.title}</h3>
        <p className="relative mt-2 font-semibold text-brand-300">{service.tagline}</p>
        <p className="relative mt-4 leading-relaxed text-white/60">{service.description}</p>

        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300 transition-transform duration-500 group-hover:scale-x-100"
        />
      </article>
    </li>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand-700/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-brand-500 to-brand-300" />
              Our Services
            </p>
            <h2
              id="services-title"
              className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
            >
              Everything You Need to <span className="text-gradient">Grow Online</span>
            </h2>
            <p className="mt-5 font-display text-xl font-semibold text-white/85 sm:text-2xl">
              Smart Digital Solutions. Powerful Business Results.
            </p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              We provide digital marketing solutions designed to help your business reach the right people, build
              meaningful connections, and generate sustainable growth.
            </p>
            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
            >
              View All Services
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
