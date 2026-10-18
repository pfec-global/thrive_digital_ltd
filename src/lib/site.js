// Single source of truth for brand + SEO data. Update the URL and socials before launch.
export const site = {
  name: "Thrive Digital Ltd.",
  shortName: "Thrive Digital",
  tagline: "Your Digital Growth Partner",
  url: (process.env.PUBLIC_SITE_URL || "https://thrivedigitalltd.com").replace(/\/$/, ""),
  title: "Thrive Digital Ltd. | Your Digital Growth Partner",
  description:
    "Thrive Digital Ltd. is a data-driven digital marketing agency in Dhaka offering social media marketing, SEO, PPC, web design and content to grow brands.",
  keywords: [
    "Thrive Digital",
    "Thrive Digital Ltd",
    "digital marketing agency",
    "digital marketing agency in Dhaka",
    "digital marketing agency Bangladesh",
    "digital growth partner",
    "social media marketing",
    "search engine optimisation",
    "SEO agency",
    "PPC management",
    "Google Ads",
    "Meta Ads",
    "website design and development",
    "content creation",
    "branding",
    "digital marketing strategy",
    "lead generation",
  ],
  locale: "en_GB",
  language: "en-GB",
  themeColor: "#050530",
  colors: {
    primary: "#1e78f7",
    secondary: "#0855c2",
    navy: "#050530",
  },
  footerTagline: "Think Digital. Think Growth. Think Thrive.",
  phone: {
    display: "+880 1932 303 262",
    e164: "+8801932303262",
  },
  address: {
    full: "4th Floor, House # 4, Road # 27 (Old), 16 (New), Dhanmondi, Dhaka - 1209",
    street: "4th Floor, House # 4, Road # 27 (Old), 16 (New), Dhanmondi",
    locality: "Dhaka",
    postalCode: "1209",
    country: "BD",
  },
  // Add profile URLs here (used in structured data): Facebook, LinkedIn, Instagram, etc.
  socials: [],
};

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
