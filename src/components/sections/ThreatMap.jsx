import { useEffect, useRef } from "react";
import { card, card2, border, border2, neon, cyan, muted, textCol, red, orange } from "../../styles/tokens";

export default function ThreatMap() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const W = c.width, H = c.height;

    const continents = [
      [[0.05, 0.2], [0.09, 0.15], [0.14, 0.12], [0.2, 0.13], [0.25, 0.18], [0.26, 0.3], [0.22, 0.38], [0.18, 0.45], [0.14, 0.5], [0.1, 0.48], [0.07, 0.42], [0.05, 0.32]],
      [[0.2, 0.5], [0.25, 0.48], [0.28, 0.52], [0.29, 0.62], [0.26, 0.72], [0.22, 0.78], [0.18, 0.75], [0.16, 0.65], [0.17, 0.55]],
      [[0.42, 0.12], [0.48, 0.1], [0.54, 0.12], [0.56, 0.18], [0.52, 0.26], [0.46, 0.28], [0.42, 0.24], [0.4, 0.18]],
      [[0.44, 0.28], [0.5, 0.26], [0.56, 0.28], [0.58, 0.38], [0.56, 0.52], [0.52, 0.62], [0.46, 0.62], [0.42, 0.52], [0.4, 0.4]],
      [[0.54, 0.12], [0.68, 0.08], [0.82, 0.1], [0.9, 0.18], [0.9, 0.3], [0.82, 0.38], [0.72, 0.42], [0.62, 0.4], [0.56, 0.32], [0.54, 0.22]],
      [[0.74, 0.56], [0.82, 0.52], [0.9, 0.56], [0.9, 0.66], [0.84, 0.7], [0.76, 0.68], [0.72, 0.62]],
    ];

    const nodes = Array.from({ length: 26 }, () => ({
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

      // Grid
      ctx.strokeStyle = `${cyan}12`; ctx.lineWidth = .5;
      for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Continents
      continents.forEach(pts => {
        ctx.beginPath();
        pts.forEach(([px, py], i) => {
          i === 0 ? ctx.moveTo(px * W, py * H) : ctx.lineTo(px * W, py * H);
        });
        ctx.closePath();
        ctx.fillStyle = `${cyan}12`;
        ctx.fill();
        ctx.strokeStyle = `${cyan}28`;
        ctx.lineWidth = .7;
        ctx.stroke();
      });

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
    <div style={{
      border: `1px solid ${border2}`, borderRadius: 12, overflow: "hidden",
      background: card, boxShadow: `0 0 40px ${cyan}10`
    }}>
      <div style={{
        padding: "9px 14px", borderBottom: `1px solid ${border}`,
        display: "flex", alignItems: "center", gap: 8, background: card2
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%", background: red,
          display: "inline-block", boxShadow: `0 0 6px ${red}`,
          animation: "blink 1s infinite"
        }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: textCol, letterSpacing: 1.2 }}>
          LIVE CYBER THREAT MAP
        </span>
      </div>
      <canvas ref={ref} width={400} height={200}
        style={{ display: "block", width: "100%", height: 200 }} />
      <div style={{
        display: "flex", justifyContent: "space-around",
        padding: "12px 16px", borderTop: `1px solid ${border}`
      }}>
        {[["LIVE ATTACKS", "24,318,774", neon], ["TARGETS", "142", cyan], ["COUNTRIES", "96", orange]].map(([l, v, co]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: 22, fontWeight: 900, color: co, lineHeight: 1,
              textShadow: `0 0 18px ${co}60`
            }}>{v}</div>
            <div style={{ fontSize: 10, color: muted, marginTop: 3, letterSpacing: .6 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "0 0 10px", fontSize: 10, color: muted }}>
        <span style={{ color: neon, marginRight: 4 }}>●</span>Real-time attack visualization
      </div>
    </div>
  );
}
