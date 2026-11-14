import { ImageResponse } from "next/og";
import { invitationConfig } from "@/config/invitation";

export const alt = "Sejal & Vipul Wedding Invitation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const { couple, city, state } = invitationConfig;
  const groomName = couple.groom.name.en.split(" ")[0]; // Vipul
  const brideName = couple.bride.name.en.split(" ")[0]; // Sejal
  const venueLocation = `${city.en} • ${state.en}`;

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
          background: "linear-gradient(135deg, #240C12 0%, #3D141E 50%, #200A10 100%)",
          position: "relative",
          padding: "40px",
          fontFamily: "serif",
        }}
      >
        {/* Outer Gold Border */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "2px solid #C9A24B",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        {/* Inner Gold Border */}
        <div
          style={{
            position: "absolute",
            inset: "34px",
            border: "1px solid rgba(230, 201, 126, 0.4)",
            borderRadius: "14px",
            display: "flex",
          }}
        />

        {/* Auspicious Invocation Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "#E6C97E",
              letterSpacing: "4px",
              fontWeight: 700,
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#FFE6A3",
            marginBottom: "12px",
            fontWeight: 600,
          }}
        >
          ROYAL WEDDING INVITATION
        </div>

        {/* Couple Names */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "76px",
            fontWeight: 800,
            color: "#FFE6A3",
            letterSpacing: "2px",
            margin: "8px 0",
            textShadow: "0 4px 20px rgba(201, 162, 75, 0.5)",
          }}
        >
          {brideName} & {groomName}
        </div>

        {/* Decorative Lotus / Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "12px 0 20px 0",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #C9A24B, #FFE6A3)",
            }}
          />
          <div
            style={{
              margin: "0 16px",
              fontSize: "22px",
              color: "#C9A24B",
            }}
          >
            💍
          </div>
          <div
            style={{
              width: "120px",
              height: "2px",
              background: "linear-gradient(90deg, #FFE6A3, #C9A24B, transparent)",
            }}
          />
        </div>

        {/* Date & Venue Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(201, 162, 75, 0.15)",
            border: "1px solid #C9A24B",
            borderRadius: "9999px",
            padding: "10px 32px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#FFF5DE",
              letterSpacing: "1px",
            }}
          >
            11 December 2026 • {venueLocation}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
