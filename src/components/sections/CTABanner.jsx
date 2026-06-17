import { Btn } from "../ui/UI";
import { card, border, neon, white, muted } from "../../styles/tokens";

export default function CTABanner() {
  return (
    <section style={{
      padding: "52px 56px", background: card,
      borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 32, position: "relative", overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{ position: "absolute", left: "35%", top: "50%",
        transform: "translate(-50%,-50%)", width: 400, height: 200,
        background: `radial-gradient(circle,${neon}08 0%,transparent 70%)`,
        pointerEvents: "none" }} />

      <div style={{ position: "relative" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: white, margin: "0 0 8px", lineHeight: 1.35 }}>
          Ready to Start Your Cybersecurity Journey<br />
          <span style={{ color: neon }}>or Secure Your Organization?</span>
        </h2>
        <p style={{ fontSize: 13, color: muted, margin: 0 }}>
          Join thousands of learners and hundreds of organizations who trust us.
        </p>
      </div>

      <div style={{ display: "flex", gap: 14, flexShrink: 0, position: "relative" }}>
        <Btn style={{ padding: "14px 30px", fontSize: 14 }}>Explore Courses</Btn>
        <Btn variant="outline" style={{ padding: "14px 30px", fontSize: 14 }}>Book Consultation</Btn>
      </div>
    </section>
  );
}
