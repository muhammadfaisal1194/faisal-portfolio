import { ImageResponse } from "next/og";
import { site } from "@/content/content";

export const runtime = "edge";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const barHeights = [28, 52, 38, 76, 48, 96, 64, 110, 70, 88, 50, 100, 60, 80, 44, 68, 54, 40, 58, 32];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0f0d",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.18), transparent 70%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#34d399",
              marginBottom: 28,
            }}
          >
            Voice AI Agents
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            AI agents that answer your business calls 24/7.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 600 }}>{site.shortName}</div>
            <div style={{ fontSize: 24, color: "#a1a1aa", marginTop: 6 }}>
              AI receptionists · appointment booking · missed call automation
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {barHeights.map((height, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height,
                  borderRadius: 6,
                  backgroundColor: i % 3 === 0 ? "#10b981" : "#1b3a2f",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
