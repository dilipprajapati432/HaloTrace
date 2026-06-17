import { neon, white, muted } from "../../styles/tokens";

export default function CTABanner() {
  return (
    <section style={{ padding: "0 56px 60px" }}>
      <div style={{
        backgroundColor: "rgba(4, 10, 18, 0.4)",
        border: "1px solid rgba(0, 255, 135, 0.80)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        boxShadow: `0 0 30px ${neon}20`,
        overflow: "hidden"
      }}>
        {/* Left Side: Graphic and Text */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Graphic forced to cover the left border area with a smooth fade on the right */}
          <div style={{
            width: 260, height: 115, flexShrink: 0,
            WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)"
          }}>
            <img src="/CTA%20banner.png" alt="CTA Graphic" style={{
              height: "100%", width: "100%",
              objectFit: "cover", objectPosition: "center center",
              display: "block",
              transform: "scale(1.15)"
            }} />
          </div>

          <div style={{ padding: "16px 0" }}>
            <h2 style={{ fontSize: 22, fontWeight: 500, color: white, margin: "0 0 6px", lineHeight: 1.35 }}>
              Ready to Start Your Cybersecurity Journey<br />
              or Secure Your Organization?
            </h2>
            <p style={{ fontSize: 14, color: muted, margin: 0 }}>
              Join thousands of learners and hundreds of organizations who trust us.
            </p>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div style={{ display: "flex", gap: 14, flexShrink: 0, paddingRight: 32 }}>
          <button style={{
            background: "linear-gradient(90deg, #4ade80, #22c55e)",
            color: "#040e1a", fontWeight: 700, padding: "14px 28px",
            borderRadius: 6, border: "none", cursor: "pointer", fontSize: 13,
            transition: "opacity .15s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Explore Courses
          </button>
          <button style={{
            background: "linear-gradient(90deg, #0ea5e9, #3b82f6)",
            color: white, fontWeight: 700, padding: "14px 28px",
            borderRadius: 6, border: "none", cursor: "pointer", fontSize: 13,
            transition: "opacity .15s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
