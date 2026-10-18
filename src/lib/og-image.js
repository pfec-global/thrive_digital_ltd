import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${site.name} — ${site.tagline}`;

// Shared renderer for the Open Graph and Twitter share images.
// Everything important sits in the centre 630×630 so WhatsApp's square thumbnail crop keeps the logo.
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
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: site.colors.navy,
          backgroundImage:
            "radial-gradient(circle at 50% 38%, rgba(30,120,247,0.45), transparent 42%), radial-gradient(circle at 0% 100%, rgba(8,85,194,0.55), transparent 45%), radial-gradient(circle at 100% 0%, rgba(30,120,247,0.35), transparent 40%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain img */}
        <img src={markSrc} width={221} height={192} alt="" />
        <div style={{ display: "flex", marginTop: 36, fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          Thrive Digital
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 30, color: "#8ebeff" }}>{site.tagline}</div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "12px 28px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.18)",
            backgroundColor: "rgba(255,255,255,0.06)",
            fontSize: 24,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Your Growth. Our Strategy. Real Results.
        </div>
      </div>
    ),
    ogSize,
  );
}
