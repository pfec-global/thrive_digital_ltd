import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name} — ${site.tagline}`;

// Shared renderer for the Open Graph and Twitter share images.
export async function renderOgImage() {
  const mark = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          backgroundColor: site.colors.navy,
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(30,120,247,0.55), transparent 45%), radial-gradient(circle at 10% 95%, rgba(8,85,194,0.6), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain img */}
          <img src={markSrc} width={74} height={64} alt="" />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Your Growth. Our Strategy.
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, color: "#5a9bfb", letterSpacing: -2 }}>
            Real Results.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)" }}>{site.tagline}</div>
      </div>
    ),
    ogSize,
  );
}
