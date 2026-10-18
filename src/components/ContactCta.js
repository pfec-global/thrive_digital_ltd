import { ArrowIcon, OutlineIcon } from "@/components/icons";
import { mapUrl, site } from "@/lib/site";

export default function ContactCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-white pb-24 sm:pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          data-reveal="zoom"
          className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 px-6 py-16 text-center text-white shadow-2xl shadow-brand-700/30 sm:rounded-[2.5rem] sm:px-12 lg:py-24"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-300/40 blur-3xl" />
            <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-navy-950/50 blur-3xl" />
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border border-white/10" />
          </div>

          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            Your Next Stage of Growth Starts Here.
          </p>

          <h2
            id="contact-title"
            className="mx-auto mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ready to Take Your Business to the Next Level?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Let&apos;s turn your business goals into a powerful digital strategy. Partner with Thrive Digital Ltd. and discover
            what smarter digital marketing can do for your brand.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${site.phone.e164}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-navy-950 shadow-xl shadow-navy-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-navy-950/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Let&apos;s Talk About Your Business
              <ArrowIcon className="h-5 w-5 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact-details"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Contact Us
              <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mx-auto mt-12 flex max-w-3xl flex-col items-stretch justify-center gap-3 border-t border-white/15 pt-10 text-left sm:flex-row">
            <li>
              <a
                href={`tel:${site.phone.e164}`}
                className="flex h-full items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600">
                  <OutlineIcon>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                  </OutlineIcon>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/60">Call us</span>
                  <span className="block font-semibold">{site.phone.display}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600">
                  <OutlineIcon>
                    <path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </OutlineIcon>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/60">Visit us</span>
                  <span className="block text-sm font-semibold leading-snug">Dhanmondi, Dhaka - 1209</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
