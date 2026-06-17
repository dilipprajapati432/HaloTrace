import { useEffect, useRef } from "react";
import { card, card2, border, border2, neon, cyan, muted, textCol, red, orange } from "../../styles/tokens";

export default function ThreatMap() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const W = c.width, H = c.height;

    const nodes = Array.from({ length: 30 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - .5) * .45,
      vy: (Math.random() - .5) * .45,
      r: Math.random() * 2.5 + 1.5,
      col: Math.random() > .55 ? neon : Math.random() > .5 ? cyan : red,
      pulse: Math.random() * Math.PI * 2,
    }));

    let af;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Connections
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 115) {
          const alpha = Math.floor((1 - d / 115) * 40).toString(16).padStart(2, "0");
          ctx.strokeStyle = `${cyan}${alpha}`;
          ctx.lineWidth = .8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }));

      // Nodes
      nodes.forEach(n => {
        n.pulse += 0.04;
        const glowR = n.r + Math.sin(n.pulse) * 1.2;
        ctx.save();
        ctx.shadowColor = n.col; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = n.col; ctx.fill();
        ctx.restore();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      af = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(af);
  }, []);

  return (
    <div style={{ border: `1px solid ${border2}`, borderRadius: 12, overflow: "hidden",
      background: "rgba(4, 10, 18, 0.4)", backdropFilter: "blur(12px)", boxShadow: `0 0 40px ${cyan}10` }}>
      
      <div style={{ padding: "16px 20px 10px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: textCol, letterSpacing: .8 }}>
          <span style={{ color: "#d9e3b1" }}>LIVE CYBER</span> THREAT MAP
        </span>
      </div>

      <canvas ref={ref} width={420} height={220}
        style={{ display: "block", width: "100%", height: 220, background: "url('/map-bg.png') center/cover no-repeat" }} />

      <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px 10px" }}>
        {[["LIVE ATTACKS", "24,318,774", neon], ["TARGETS", "142", cyan], ["COUNTRIES", "96", orange]].map(([l, v, co]) => (
          <div key={l} style={{ textAlign: "left" }}>
            <div style={{ fontSize: 11, color: textCol, fontWeight: 700, marginBottom: 4, letterSpacing: .6 }}>{l}</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: co, lineHeight: 1, textShadow: `0 0 18px ${co}60` }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "left", padding: "0 20px 20px", fontSize: 11, color: muted }}>
        <span style={{ color: neon, marginRight: 6 }}>●</span>Real-time attack visualization
      </div>
    </div>
  );
}
