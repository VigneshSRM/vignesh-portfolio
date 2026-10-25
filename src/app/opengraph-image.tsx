import { ImageResponse } from "next/og";
export const alt =
  "Vignesh — Built from the ground up. Infrastructure. Automation. Founder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#EAE6DE",
        display: "flex",
        flexDirection: "column",
        padding: 65,
        color: "#191919",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 20,
          letterSpacing: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>VIGNESH.</span>
        <span>INFRASTRUCTURE / AUTOMATION / FOUNDER</span>
      </div>
      <div
        style={{
          fontSize: 100,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -6,
          display: "flex",
          flexDirection: "column",
          marginTop: 70,
        }}
      >
        <span>BUILT FROM</span>
        <span>
          THE <span style={{ color: "#226192" }}>GROUND</span> UP.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          borderTop: "1px solid #bdb9af",
          paddingTop: 25,
          justifyContent: "space-between",
          fontSize: 20,
        }}
      >
        <span>From managing infrastructure to building the future.</span>
        <span style={{ color: "#226192" }}>2022 → 2027</span>
      </div>
      <div
        style={{
          position: "absolute",
          right: 65,
          top: 240,
          width: 55,
          height: 55,
          background: "#EF8557",
          borderRadius: "50%",
        }}
      />
    </div>,
    size,
  );
}
