import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import RevealObserver from "@/components/RevealObserver";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport = {
  themeColor: site.themeColor,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${site.url}/icon-512.png`,
      slogan: site.tagline,
      telephone: site.phone.e164,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone.e164,
        contactType: "customer service",
        areaServed: site.address.country,
      },
      description: site.description,
      knowsAbout: services.map((s) => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            serviceType: s.title,
            provider: { "@id": `${site.url}/#organization` },
          },
        })),
      },
      ...(site.socials.length ? { sameAs: site.socials } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: site.language,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={site.language}
      className={`${jakarta.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Enable reveal animations before first paint; fall back to visible content if the app never boots. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('reveal-ready');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove('reveal-ready')},5000);",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950 focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
