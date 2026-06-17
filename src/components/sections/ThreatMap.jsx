import { useState, useEffect, useRef } from "react";
import { card, card2, border, border2, neon, cyan, muted, textCol, red, orange, white } from "../../styles/tokens";

export default function ThreatMap() {
  const ref = useRef(null);
  const [attacks, setAttacks] = useState(24318774);
  const [logs, setLogs] = useState([]);

  // Increment attack counter and generate logs
  useEffect(() => {
    const types = ["DDoS Payload", "SQL Injection", "Malware Payload", "Brute Force", "Ransomware", "Port Scan"];
    const ips = () => `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.xxx`;

    const interval = setInterval(() => {
      setAttacks(prev => prev + Math.floor(Math.random() * 5) + 1);
      
      if (Math.random() > 0.3) {
        const type = types[Math.floor(Math.random() * types.length)];
        const log = `[${new Date().toISOString().substring(11,19)}] ${type} detected from ${ips()}`;
        setLogs(prev => [log, ...prev].slice(0, 4));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Canvas animation
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const W = c.width, H = c.height;

    // Approximate locations of major regions on the map
    const cities = [
      { x: 70, y: 70 },   // US West
      { x: 110, y: 75 },  // US East
      { x: 120, y: 140 }, // Brazil
      { x: 210, y: 65 },  // Europe
      { x: 230, y: 130 }, // Africa
      { x: 300, y: 50 },  // Russia
      { x: 320, y: 90 },  // China
      { x: 350, y: 100 }, // Japan
      { x: 370, y: 170 }, // Australia
      { x: 270, y: 100 }, // India
    ];

    const colors = [neon, cyan, red, orange];
    const projectiles = [];
    const ripples = [];

    let af;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Randomly spawn new attacks
      if (Math.random() < 0.05) {
        const start = cities[Math.floor(Math.random() * cities.length)];
        let end = cities[Math.floor(Math.random() * cities.length)];
        while(end === start) end = cities[Math.floor(Math.random() * cities.length)];
        
        projectiles.push({
          sx: start.x, sy: start.y,
          tx: end.x, ty: end.y,
          p: 0, // progress from 0 to 1
          sp: 0.015 + Math.random() * 0.015, // speed
          col: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Draw cities
      cities.forEach(city => {
        ctx.fillStyle = `${cyan}40`;
        ctx.beginPath(); ctx.arc(city.x, city.y, 2, 0, Math.PI * 2); ctx.fill();
      });

      // Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.rad += 0.8;
        r.alpha -= 0.02;
        if (r.alpha <= 0) { ripples.splice(i, 1); continue; }
        
        ctx.strokeStyle = r.col;
        ctx.globalAlpha = r.alpha;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(r.x, r.y, r.rad, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Draw projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const pr = projectiles[i];
        pr.p += pr.sp;
        
        if (pr.p >= 1) {
          ripples.push({ x: pr.tx, y: pr.ty, rad: 1, alpha: 1, col: pr.col });
          projectiles.splice(i, 1);
          continue;
        }

        const cx = pr.sx + (pr.tx - pr.sx) * pr.p;
        const cy = pr.sy + (pr.ty - pr.sy) * pr.p;
        const tailX = pr.sx + (pr.tx - pr.sx) * Math.max(0, pr.p - 0.2);
        const tailY = pr.sy + (pr.ty - pr.sy) * Math.max(0, pr.p - 0.2);

        ctx.strokeStyle = pr.col;
        ctx.lineWidth = 2;
        ctx.shadowColor = pr.col; 
        ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(cx, cy); ctx.stroke();
        
        // Draw head
        ctx.fillStyle = white;
        ctx.beginPath(); ctx.arc(cx, cy, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }

      af = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(af);
  }, []);

  return (
    <div style={{ border: `1px solid ${border2}`, borderRadius: 12, overflow: "hidden", position: "relative",
      background: "rgba(4, 10, 18, 0.4)", backdropFilter: "blur(12px)", boxShadow: `0 0 40px ${cyan}10` }}>
      
      <div style={{ padding: "16px 20px 10px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 800, color: textCol, letterSpacing: .8 }}>
          <span style={{ color: "#d9e3b1" }}>LIVE CYBER</span> THREAT MAP
        </span>
      </div>

      <div style={{ position: "relative", width: "100%", height: 220 }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "url('/map-bg.png') center/cover no-repeat",
          opacity: 0.6
        }} />
        <canvas ref={ref} width={420} height={220}
          style={{ position: "absolute", inset: 0, display: "block", width: "100%", height: 220 }} />
          
        {/* Live Attack Logs Overlay */}
        <div style={{ position: "absolute", bottom: 10, right: 20, pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          {logs.map((log, i) => (
            <div key={i} style={{ 
              fontSize: 10, color: neon, fontFamily: "monospace", letterSpacing: -0.2,
              background: "rgba(0,0,0,0.5)", padding: "2px 6px", borderRadius: 4,
              opacity: 1 - (i * 0.25)
            }}>
              {log}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px 10px" }}>
        {[
          ["LIVE ATTACKS", attacks.toLocaleString(), neon], 
          ["TARGETS", "142", cyan], 
          ["COUNTRIES", "96", orange]
        ].map(([l, v, co]) => (
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
