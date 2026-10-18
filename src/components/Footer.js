import Logo from "@/components/Logo";
import { OutlineIcon } from "@/components/icons";
import { mapUrl, site } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "Social Media Marketing",
  "SEO",
  "Paid Advertising",
  "Website Development",
  "Content & Branding",
  "Digital Strategy",
];

function FooterHeading({ children }) {
  return <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">{children}</h2>;
}

const linkClass = "text-white/60 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-title" className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-700/25 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-500/15 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.4fr] lg:gap-10">
          <div data-reveal="up" className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <h2 id="footer-title" className="mt-6 font-display text-lg font-bold">
              {site.name}
            </h2>
            <p className="mt-2 font-display font-semibold text-gradient">{site.footerTagline}</p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/60">
              Helping businesses grow through creativity, innovation, and results-focused digital marketing solutions.
            </p>
          </div>

          <nav aria-label="Quick links" data-reveal="up" style={{ "--reveal-delay": "100ms" }}>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our services" data-reveal="up" style={{ "--reveal-delay": "200ms" }}>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="contact-details" data-reveal="up" style={{ "--reveal-delay": "300ms" }} className="scroll-mt-28">
            <FooterHeading>Get in Touch</FooterHeading>
            <address className="mt-5 space-y-5 not-italic">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300 transition-colors group-hover:border-brand-400/50 group-hover:text-white">
                  <OutlineIcon>
                    <path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </OutlineIcon>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/40">Address</span>
                  <span className="mt-1 block leading-relaxed text-white/70 transition-colors group-hover:text-white">
                    {site.address.full}
                  </span>
                </span>
              </a>
              <a href={`tel:${site.phone.e164}`} className="group flex gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300 transition-colors group-hover:border-brand-400/50 group-hover:text-white">
                  <OutlineIcon>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                  </OutlineIcon>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/40">Cell</span>
                  <span className="mt-1 block font-semibold text-white/80 transition-colors group-hover:text-white">
                    {site.phone.display}
                  </span>
                </span>
              </a>
            </address>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none text-center font-display bg-gradient-to-b from-white/[0.09] to-white/0 bg-clip-text text-[17vw] font-extrabold leading-[0.85] tracking-tighter text-transparent lg:text-[12.5rem]"
        >
          THRIVE
        </p>

        <div className="border-t border-white/10 py-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {site.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
