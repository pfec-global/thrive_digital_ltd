// Share-image design v2 (logo centred). Bump this when the design changes so link-preview caches refresh.
import { renderOgImage } from "@/lib/og-image";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
