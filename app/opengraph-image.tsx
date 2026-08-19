import { ImageResponse } from "next/og";

export const alt = "GoMuslimLife — Ta pratique musulmane, au quotidien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 88px",
          background: "linear-gradient(165deg, #0d1725 0%, #07111d 55%, #0b1522 100%)",
          color: "#e6edf5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#cea687",
            fontWeight: 700,
          }}
        >
          Prière · Savoir · Coran
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            marginTop: 18,
            color: "#f0d1bc",
            letterSpacing: -2,
          }}
        >
          GoMuslimLife
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 20,
            color: "#aab7c5",
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Ta pratique musulmane, au quotidien
        </div>
      </div>
    ),
    { ...size }
  );
}
