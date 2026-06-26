import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { bg, bg2, card, border, border2, neon, cyan, white, muted, textCol, red, orange } from "../styles/tokens";
import { Btn, Tag, Check } from "../components/ui/UI";

const LABS_CSS = `
  .labs-page {
    background-color: ${bg};
    color: ${textCol};
    min-height: 100vh;
  }
  
  .tech-glow-text {
    text-shadow: 0 0 20px ${neon}80, 0 0 40px ${neon}40;
    animation: pulseGlow 3s infinite alternate;
  }
  
  @keyframes pulseGlow {
    from { text-shadow: 0 0 10px ${neon}4d, 0 0 20px ${neon}33; }
    to { text-shadow: 0 0 20px ${neon}b3, 0 0 30px ${neon}66, 0 0 40px ${neon}33; }
  }

  .demo-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }
  
  .demo-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, ${neon}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .demo-card:hover {
    transform: translateY(-5px);
    border-color: ${neon}4d !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${neon}1a !important;
  }
  
  .demo-card:hover::before {
    opacity: 1;
  }
  
  /* Matrix Rain Container */
  .matrix-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: 0;
    background: #000000;
  }
  
  .matrix-col {
    position: absolute;
    top: -100%;
    font-family: monospace;
    font-size: 14px;
    color: ${neon};
    text-shadow: 0 0 5px ${neon};
    line-height: 1.2;
    white-space: pre-wrap;
    word-break: break-all;
    width: 20px;
    text-align: center;
    opacity: 0.4;
    animation: fall linear infinite;
  }

  @keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(200vh); }
  }

  /* Terminals */
  .terminal-window {
    background: rgba(2, 6, 12, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 13px;
  }
  .terminal-header {
    background: rgba(2, 6, 12, 0.6);
    padding: 8px 12px;
    display: flex;
    gap: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .terminal-dot { width: 10px; height: 10px; border-radius: 50%; }
  
  /* NMAP Animations */
  .anim-line { opacity: 0; animation: fadeIn 0.1s forwards; margin-bottom: 4px; }
  .anim-line:nth-child(1) { animation-delay: 0.5s; }
  .anim-line:nth-child(2) { animation-delay: 1.5s; }
  .anim-line:nth-child(3) { animation-delay: 2.2s; color: ${neon}; }
  .anim-line:nth-child(4) { animation-delay: 2.9s; color: ${neon}; }
  .anim-line:nth-child(5) { animation-delay: 3.6s; }

  @keyframes fadeIn { to { opacity: 1; } }

  /* Wireshark Table */
  .wire-table { width: 100%; border-collapse: collapse; font-family: monospace; font-size: 11px; }
  .wire-table th { background: ${border2}; padding: 4px 8px; text-align: left; color: ${white}; }
  .wire-table td { padding: 4px 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
  .wire-row { opacity: 0; animation: slideIn 0.3s forwards; }
  .wire-row.tcp { background: ${cyan}1a; color: ${cyan}; }
  .wire-row.tls { background: ${neon}1a; color: ${neon}; }
  .wire-row.dns { background: ${orange}1a; color: ${orange}; }
  
  .wire-row:nth-child(1) { animation-delay: 1.0s; }
  .wire-row:nth-child(2) { animation-delay: 2.5s; }
  .wire-row:nth-child(3) { animation-delay: 4.0s; }
  .wire-row:nth-child(4) { animation-delay: 5.5s; }

  @keyframes slideIn { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

  /* Malware Alert */
  .malware-alert {
    padding: 8px; margin-bottom: 8px; border-left: 3px solid ${red};
    background: ${red}0d; color: ${red};
    animation: flashAlert 2s infinite;
  }
  @keyframes flashAlert { 0%, 100% { background: ${red}0d; } 50% { background: ${red}26; } }

  /* OSINT Nodes */
  .osint-node {
    padding: 8px 16px; background: rgba(2, 6, 12, 0.6); border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 4px; display: inline-block; position: relative; z-index: 2;
    font-size: 12px; color: ${cyan};
  }
  .osint-line {
    position: absolute; background: ${border2}; z-index: 1;
  }
  .node-pulse { animation: pulseBorder 3s infinite; }
  @keyframes pulseBorder { 0% { box-shadow: 0 0 0 0 ${cyan}66; } 70% { box-shadow: 0 0 0 8px ${cyan}00; } 100% { box-shadow: 0 0 0 0 ${cyan}00; } }

  /* Scanner Progress */
  .progress-track { width: 100%; height: 6px; background: rgba(2, 6, 12, 0.6); border-radius: 3px; overflow: hidden; margin: 12px 0; }
  .progress-fill { height: 100%; background: ${neon}; width: 0%; animation: scanLoad 4s infinite linear; }
  @keyframes scanLoad { 0% { width: 0%; } 80% { width: 100%; } 100% { width: 100%; } }

  /* Reduce Motion */
  @media (prefers-reduced-motion: reduce) {
    .matrix-col, .anim-line, .wire-row, .malware-alert, .node-pulse, .progress-fill {
      animation: none !important;
      opacity: 1 !important;
      width: 100% !important;
      transform: none !important;
    }
    .matrix-col { display: none; }
  }
`;


const ScanProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) % 4000;
      if (elapsed < 3200) {
        setPct(Math.floor((elapsed / 3200) * 100));
      } else {
        setPct(100);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return <span style={{ color: neon }}>Running [{pct}%]</span>;
};

const MatrixRain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const colCount = Math.floor(window.innerWidth / 20);
    const container = containerRef.current;

    if (!container) return;

    for (let i = 0; i < colCount; i++) {
      const col = document.createElement("div");
      col.className = "matrix-col";
      col.style.left = `${i * 20}px`;
      col.style.animationDuration = `${Math.random() * 3 + 2}s`;
      col.style.animationDelay = `${Math.random() * 2}s`;

      let str = "";
      for (let j = 0; j < 30; j++) {
        str += chars[Math.floor(Math.random() * chars.length)] + "\n";
      }
      col.innerText = str;
      container.appendChild(col);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};





export default function Labs() {
  const navigate = useNavigate();
  return (
    <div className="labs-page">
      <Helmet>
        <title>Cyber Labs & Demos | Skillnetics × HaloTrace</title>
      </Helmet>
      <style>{LABS_CSS}</style>

      {/* 1. PAGE HERO */}
      <section style={{
        position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center", padding: "80px 20px 40px",
        overflow: "hidden"
      }}>
        <MatrixRain />

        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, background: `radial-gradient(circle, ${neon}1a 0%, transparent 60%)`, filter: "blur(40px)", zIndex: 1, pointerEvents: "none" }}></div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 800 }}>
          <div style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 8, background: "${red}26", padding: "8px 16px", border: `1px solid ${red}`, borderRadius: 999 }}>
            <span style={{ color: red, fontSize: 16 }}>⚠</span>
            <span style={{ color: white, fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>All demonstrations are educational and conducted in authorized environments only</span>
          </div>

          <div style={{ display: "inline-block", padding: "4px 16px", border: `1px solid ${neon}4d`, borderRadius: 4, background: `${neon}1a`, color: neon, fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 24 }}>
            [ // CLASSIFIED LAB ACCESS ]
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: white, margin: "0 0 16px", lineHeight: 1.1, textTransform: "uppercase", letterSpacing: 1 }}>
            CYBER LABS &amp; <span style={{ color: cyan }} className="tech-glow-text">DEMONSTRATIONS</span>
          </h1>
          <p style={{ fontSize: 18, color: muted, marginBottom: 40, lineHeight: 1.6 }}>
            Authorized educational security demonstrations and hands-on lab environments to validate your skills in real-world scenarios.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} style={{ padding: "14px 32px", fontSize: 15 }}>Explore Labs ↓</Btn>
            <Btn onClick={() => navigate('/login')} variant="outline" style={{ padding: "14px 32px", fontSize: 15, borderColor: neon, color: neon }}>
              Access Student Labs
            </Btn>
          </div>
        </div>

        {/* Gradient fade to main content */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 150, background: `linear-gradient(to top, ${bg}, transparent)`, zIndex: 5 }} />
      </section>

      {/* 2. FEATURED LAB DEMOS */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: white, margin: 0 }}>FEATURED LAB DEMOS</h2>
          <div style={{ width: 60, height: 4, background: neon, marginTop: 16 }}></div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: 32 }}>

          {/* CARD 1 — Network Scanning Lab */}
          <div className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <div className="terminal-window" style={{ height: 200, marginBottom: 20 }}>
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f56" }} />
                <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ background: "#27c93f" }} />
                <span style={{ color: muted, fontSize: 11, marginLeft: 8 }}>kali@sec-lab:~</span>
              </div>
              <div style={{ padding: 16, color: muted }}>
                <div className="anim-line"><span style={{ color: white }}>$</span> nmap -sV -p 1-1000 192.168.1.0/24</div>
                <div className="anim-line">Starting Nmap scan...</div>
                <div className="anim-line">Discovered open port 22/tcp — ssh</div>
                <div className="anim-line">Discovered open port 80/tcp — http</div>
                <div className="anim-line">Nmap done: 256 IP addresses scanned in 12.4s</div>
              </div>
            </div>
            <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>Network Scanning Lab</h3>
            <p style={{ fontSize: 14, color: muted, marginBottom: 16 }}>Learn to enumerate networks using Nmap and identify open ports and services.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <Tag color={cyan}>Nmap</Tag><Tag color={cyan}>Networking</Tag><Tag color={cyan}>Reconnaissance</Tag>
            </div>
            <Btn onClick={() => navigate('/login')} variant="ghost" style={{ padding: "8px 16px" }}>View Demo →</Btn>
          </div>

          {/* CARD 2 — Wireshark Packet Analysis */}
          <div className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <div className="terminal-window" style={{ height: 200, marginBottom: 20, background: "${card2}" }}>
              <div className="terminal-header" style={{ background: "${border2}", borderBottom: "none" }}>
                <span style={{ color: white, fontSize: 11, fontWeight: 700 }}>Wireshark - eth0</span>
              </div>
              <table className="wire-table">
                <thead>
                  <tr><th>No.</th><th>Time</th><th>Source</th><th>Dest</th><th>Proto</th><th>Length</th><th>Info</th></tr>
                </thead>
                <tbody>
                  <tr className="wire-row tcp"><td>1</td><td>0.000</td><td>10.0.0.5</td><td>10.0.0.20</td><td>TCP</td><td>60</td><td>54321 → 80 [SYN]</td></tr>
                  <tr className="wire-row tcp"><td>2</td><td>0.001</td><td>10.0.0.20</td><td>10.0.0.5</td><td>TCP</td><td>60</td><td>80 → 54321 [SYN, ACK]</td></tr>
                  <tr className="wire-row tls"><td>3</td><td>0.015</td><td>10.0.0.5</td><td>10.0.0.20</td><td>TLS</td><td>250</td><td>Client Hello</td></tr>
                  <tr className="wire-row dns"><td>4</td><td>0.120</td><td>10.0.0.5</td><td>8.8.8.8</td><td>DNS</td><td>75</td><td>Standard query A</td></tr>
                </tbody>
              </table>
            </div>
            <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>Wireshark Packet Analysis</h3>
            <p style={{ fontSize: 14, color: muted, marginBottom: 16 }}>Analyze network traffic and identify anomalies, credentials, and suspicious behavior.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <Tag color={cyan}>Wireshark</Tag><Tag color={cyan}>Packet Analysis</Tag><Tag color={cyan}>Network Forensics</Tag>
            </div>
            <Btn variant="ghost" style={{ padding: "8px 16px" }}>View Demo →</Btn>
          </div>

          {/* CARD 3 — Malware Traffic Analysis */}
          <div className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <div className="terminal-window" style={{ height: 200, marginBottom: 20, border: `1px solid ${red}4d` }}>
              <div className="terminal-header" style={{ background: "${red}1a", borderBottom: `1px solid ${red}4d` }}>
                <span style={{ color: red, fontSize: 11, fontWeight: 700 }}>SIEM Dashboard // Alerts</span>
              </div>
              <div style={{ padding: 16, fontFamily: "monospace", fontSize: 12 }}>
                <div className="malware-alert">
                  <strong>[CRITICAL]</strong> C2 Beacon Detected<br />
                  <span style={{ color: muted }}>Dest: 185.15.xx.xx | Port: 443 | Payload: Encrypted</span>
                </div>
                <div className="malware-alert" style={{ animationDelay: "1s" }}>
                  <strong>[HIGH]</strong> Suspicious PowerShell Execution<br />
                  <span style={{ color: muted }}>Host: DESKTOP-X921 | User: Admin | encodedCommand</span>
                </div>
              </div>
            </div>
            <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>Malware Traffic Analysis</h3>
            <p style={{ fontSize: 14, color: muted, marginBottom: 16 }}>Identify malicious traffic patterns and C2 communication signatures.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <Tag color={red}>Malware</Tag><Tag color={red}>SIEM</Tag><Tag color={red}>Threat Detection</Tag>
            </div>
            <Btn variant="ghost" style={{ padding: "8px 16px" }}>View Demo →</Btn>
          </div>

          {/* CARD 4 — OSINT Investigation */}
          <div className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <div className="terminal-window" style={{ height: 200, marginBottom: 20, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="osint-line" style={{ width: 60, height: 2, left: "25%", top: "50%" }}></div>
              <div className="osint-line" style={{ width: 2, height: 40, left: "50%", top: "25%" }}></div>
              <div className="osint-line" style={{ width: 60, height: 2, right: "25%", top: "50%" }}></div>

              <div className="osint-node node-pulse" style={{ position: "absolute", left: "10%", top: "45%" }}>@target_usr</div>
              <div className="osint-node" style={{ position: "absolute", left: "40%", top: "10%" }}>Social Profiles</div>
              <div className="osint-node node-pulse" style={{ position: "absolute", left: "40%", top: "45%", animationDelay: "1s" }}>Email</div>
              <div className="osint-node" style={{ position: "absolute", right: "5%", top: "45%" }}>Location (redacted)</div>
            </div>
            <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>OSINT Investigation</h3>
            <p style={{ fontSize: 14, color: muted, marginBottom: 16 }}>OSINT Footprinting &amp; Investigation techniques utilizing public records.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <Tag color={cyan}>OSINT</Tag><Tag color={cyan}>Recon</Tag><Tag color={cyan}>Intelligence</Tag>
            </div>
            <Btn variant="ghost" style={{ padding: "8px 16px" }}>View Demo →</Btn>
          </div>

          {/* CARD 5 — Web Vulnerability Scanner (Full Width) */}
          <div className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.3)", gridColumn: "1 / -1" }}>
            <div className="terminal-window" style={{ height: 180, marginBottom: 20, display: "flex", flexDirection: "column" }}>
              <div className="terminal-header">
                <span style={{ color: white, fontSize: 11 }}>Vulnerability_Scanner_v4.2</span>
              </div>
              <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: muted, fontSize: 12, marginBottom: 4 }}>
                  <span>Scanning target: https://demo-bank.local...</span>
                  <ScanProgress />
                </div>
                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 16, fontSize: 12 }}>
                  <div style={{ color: red }}>■ CRITICAL: 1</div>
                  <div style={{ color: orange }}>■ HIGH: 3</div>
                  <div style={{ color: "${orange}" }}>■ MEDIUM: 5</div>
                  <div style={{ color: cyan }}>■ LOW: 12</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>Web Application Vulnerability Assessment Simulation</h3>
                <p style={{ fontSize: 14, color: muted, marginBottom: 16 }}>Simulated automated scanning and manual validation of web vulnerabilities.</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Tag color={neon}>VAPT</Tag><Tag color={neon}>OWASP</Tag><Tag color={neon}>Web Security</Tag>
                </div>
              </div>
              <Btn onClick={() => navigate('/login')} variant="solid" style={{ padding: "10px 24px" }}>Launch Web Scanner Demo</Btn>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTF SECTION */}
      <section style={{
        padding: "100px 40px",
        background: `radial-gradient(rgba(0, 204, 255, 0.1) 1px, transparent 1px), ${bg2}`,
        backgroundSize: "20px 20px",
        borderTop: `1px solid rgba(255, 255, 255, 0.05)`,
        borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
        position: "relative"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: white, textAlign: "center", marginBottom: 48 }}>CAPTURE THE FLAG (CTF) CHALLENGES</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 48 }}>
            {[
              { name: "Web Exploitation", pts: 500, diff: "★★★☆☆" },
              { name: "Network Analytics", pts: 350, diff: "★★☆☆☆" },
              { name: "Cryptography", pts: 800, diff: "★★★★☆" },
              { name: "Reverse Engineering", pts: 1000, diff: "★★★★★" },
              { name: "Digital Forensics", pts: 600, diff: "★★★☆☆" },
              { name: "Binary Exploitation", pts: 900, diff: "★★★★☆" },
              { name: "OSINT Investigation", pts: 250, diff: "★☆☆☆☆" },
              { name: "Cloud Security", pts: 750, diff: "★★★★☆" }
            ].map(ctf => (
              <div key={ctf.name} className="demo-card" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), rgba(2, 6, 12, 0.8)`, border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 16, padding: 24, textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <h4 style={{ color: white, fontSize: 18, marginBottom: 8 }}>{ctf.name}</h4>
                <div style={{ color: cyan, marginBottom: 8, fontSize: 14 }}>Difficulty: {ctf.diff}</div>
                <div style={{ color: neon, fontWeight: 700, fontSize: 24, marginBottom: 24 }}>{ctf.pts} PTS</div>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Btn variant="outline" style={{ width: "100%", justifyContent: "center" }}>Solve Challenge</Btn>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Btn onClick={() => navigate('/register')} style={{ padding: "16px 40px", fontSize: 16 }}>Join our next CTF competition</Btn>
          </div>
        </div>
      </section>

      {/* 4. LAB ENVIRONMENT SECTION */}
      <section style={{ padding: "80px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          <div style={{ paddingRight: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: white, marginBottom: 16 }}>Student Lab Infrastructure</h2>
            <p style={{ color: muted, marginBottom: 40, fontSize: 16 }}>Enterprise-grade virtual environments deployed on-demand for every student. Fully isolated, fully vulnerable, and ready for exploitation.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { name: "Kali Attack VMs", desc: "Browser-based offensive OS", status: "ONLINE" },
                { name: "Metasploitable", desc: "Intentionally vulnerable targets", status: "ONLINE" },
                { name: "Active Directory", desc: "Corporate network simulation", status: "ONLINE" },
                { name: "DVWA & WebApps", desc: "OWASP Top 10 web targets", status: "ONLINE" },
                { name: "Malware Sandbox", desc: "Isolated detonation chamber", status: "SECURE" },
                { name: "SIEM Dashboard", desc: "Live ELK stack analytics", status: "ONLINE" }
              ].map(node => (
                <div key={node.name} className="demo-card" style={{ background: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.05)`, borderRadius: 12, padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ color: neon, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                      <div className="terminal-dot" style={{ background: neon, boxShadow: `0 0 10px ${neon}` }}></div>
                      {node.status}
                    </div>
                  </div>
                  <h4 style={{ color: white, fontSize: 16, marginBottom: 6 }}>{node.name}</h4>
                  <div style={{ color: muted, fontSize: 13 }}>{node.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: `rgba(8, 20, 36, 0.4)`, border: `1px solid rgba(255, 255, 255, 0.1)`, borderRadius: 24, padding: 48, backdropFilter: "blur(20px)", boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
            {/* background decorative circle */}
            <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: `radial-gradient(circle, ${neon}1a 0%, transparent 70%)`, filter: "blur(40px)", zIndex: 0 }}></div>

            <div style={{ position: "relative", zIndex: 10 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: white, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: neon }}>//</span> How to Access
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(0, 255, 156, 0.1)`, border: `1px solid ${neon}4d`, color: neon, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, fontSize: 18 }}>1</div>
                  <div>
                    <h4 style={{ color: white, fontSize: 18, margin: "0 0 8px 0" }}>Enroll in a course</h4>
                    <p style={{ color: muted, margin: 0, fontSize: 14 }}>Register for any of our professional training tracks.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(0, 255, 156, 0.1)`, border: `1px solid ${neon}4d`, color: neon, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, fontSize: 18 }}>2</div>
                  <div>
                    <h4 style={{ color: white, fontSize: 18, margin: "0 0 8px 0" }}>Get Lab Credentials</h4>
                    <p style={{ color: muted, margin: 0, fontSize: 14 }}>Receive your secure VPN profile and dashboard login.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(0, 255, 156, 0.1)`, border: `1px solid ${neon}4d`, color: neon, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0, fontSize: 18 }}>3</div>
                  <div>
                    <h4 style={{ color: white, fontSize: 18, margin: "0 0 8px 0" }}>Connect & Hack</h4>
                    <p style={{ color: muted, margin: 0, fontSize: 14 }}>Access environments seamlessly via browser or SSH.</p>
                  </div>
                </div>
              </div>

              <Btn onClick={() => navigate('/login')} style={{ width: "100%", justifyContent: "center", marginTop: 40, padding: "18px", background: neon, color: "#000", borderColor: neon, fontSize: 16, fontWeight: 700, boxShadow: `0 0 20px ${neon}4d` }}>Initialize Lab Access</Btn>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
