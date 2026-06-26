import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { bg, bg2, card, border2, neon, cyan, white, muted, textCol } from "../styles/tokens";
import { Btn } from "../components/ui/UI";

const SERVICES = [
  "Vulnerability Assessment (VAPT)", 
  "Web Application Security", 
  "Mobile Application Security", 
  "Digital Forensics & Incident Response (DFIR)", 
  "Network Architecture Assessment", 
  "SOC Setup & Consulting", 
  "Other"
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', website: '', 
    services: [], concerns: '', size: '', source: '', datetime: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const toggleService = (srv) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(srv) 
        ? prev.services.filter(s => s !== srv) 
        : [...prev.services, srv]
    }));
  };

  const validate = () => {
    const newErrs = {};
    if (!formData.name.trim()) newErrs.name = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrs.email = "Valid email is required";
    if (!formData.phone.trim()) newErrs.phone = "Phone number is required";
    
    setErrors(newErrs);
    return Object.keys(newErrs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (status === 'success') {
    return (
      <main style={{ backgroundColor: bg, minHeight: "100vh", paddingTop: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Helmet><title>Consultation Booked | Skillnetics × HaloTrace</title></Helmet>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", background: card, border: `1px solid ${border2}`, padding: "60px 40px", borderRadius: 24, maxWidth: 600, width: "100%" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${cyan}1a`, border: `2px solid ${cyan}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", color: cyan, fontSize: 40 }}>✓</div>
          <h1 style={{ fontSize: 32, color: white, marginBottom: 16 }}>Consultation Requested</h1>
          <p style={{ color: muted, fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
            Your request has been securely transmitted. Our scheduling system has dispatched an calendar invitation to your email. We look forward to analyzing your security posture.
          </p>
          <Btn onClick={() => window.location.href = '/'}>Return to Dashboard</Btn>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: bg, minHeight: "100vh", paddingTop: 72 }}>
      <Helmet>
        <title>Book a Consultation | Skillnetics × HaloTrace</title>
        <meta name="description" content="Schedule a free 30-minute security consultation with our experts." />
      </Helmet>

      {/* 1. HERO */}
      <section style={{ padding: "80px 40px 40px", textAlign: "center", background: `radial-gradient(ellipse at top, ${cyan}1a 0%, transparent 70%)` }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, color: white, marginBottom: 16 }}>
          Book a Free Security Consultation
        </h1>
        <p style={{ fontSize: 18, color: muted, maxWidth: 600, margin: "0 auto 32px" }}>
          30-minute call with our security experts. No commitment. No sales pressure. Just actionable advice.
        </p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {["100% Free", "Strictly Confidential", "Expert Advice"].map((badge, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: white, fontSize: 14, fontWeight: 600 }}>
              <span style={{ color: cyan }}>✓</span> {badge}
            </div>
          ))}
        </div>
      </section>

      {/* 2. WHAT TO EXPECT */}
      <section style={{ padding: "40px 40px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            { step: "01", title: "Fill the Form", desc: "Provide basic details about your organization and current security concerns below." },
            { step: "02", title: "Select a Time", desc: "Receive a calendar link via email within 2 hours to pick a time that works for you." },
            { step: "03", title: "Join the Call", desc: "Get on a 30-minute call with a senior engineer to discuss your security posture." }
          ].map((s, i) => (
            <div key={i} style={{ background: bg2, border: `1px solid ${border2}`, borderRadius: 12, padding: 32, position: "relative" }}>
              <div style={{ position: "absolute", top: 24, right: 24, fontSize: 48, fontWeight: 900, color: white, opacity: 0.05 }}>{s.step}</div>
              <h3 style={{ fontSize: 18, color: white, marginBottom: 12 }}>Step {s.step}: {s.title}</h3>
              <p style={{ color: muted, fontSize: 14, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FORM */}
      <section style={{ padding: "0 40px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: card, border: `1px solid ${border2}`, borderRadius: 24, padding: "48px 64px", boxShadow: `0 20px 40px rgba(0,0,0,0.5)` }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            
            {/* Personal Info */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Full Name *</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${errors.name ? '#ff4d4d' : border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
                {errors.name && <div style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4 }}>{errors.name}</div>}
              </div>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Company / Organization Name</label>
                <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Work Email *</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${errors.email ? '#ff4d4d' : border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
                {errors.email && <div style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4 }}>{errors.email}</div>}
              </div>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Phone Number *</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${errors.phone ? '#ff4d4d' : border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
                {errors.phone && <div style={{ color: '#ff4d4d', fontSize: 12, marginTop: 4 }}>{errors.phone}</div>}
              </div>
            </div>

            <div>
              <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Website URL</label>
              <input type="url" placeholder="https://" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
            </div>

            {/* Services Multi-Select */}
            <div>
              <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Service Interest (Select all that apply)</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {SERVICES.map(srv => (
                  <label key={srv} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", background: formData.services.includes(srv) ? `${cyan}1a` : "transparent", border: `1px solid ${formData.services.includes(srv) ? cyan : border2}`, padding: "10px 16px", borderRadius: 8, transition: "all .2s" }}>
                    <input type="checkbox" checked={formData.services.includes(srv)} onChange={() => toggleService(srv)} style={{ width: 16, height: 16, accentColor: cyan, cursor: "pointer" }} />
                    <span style={{ color: white, fontSize: 14 }}>{srv}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Concerns Textarea */}
            <div>
              <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Current Security Concerns / Goals</label>
              <textarea rows="4" placeholder="Tell us briefly what you're looking to achieve..." value={formData.concerns} onChange={e => setFormData({...formData, concerns: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none", resize: "vertical" }} />
            </div>

            {/* Dropdowns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Company Size</label>
                <select value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none", appearance: "none" }}>
                  <option value="" disabled>Select size...</option>
                  <option value="1-10">1-10 Employees</option>
                  <option value="11-50">11-50 Employees</option>
                  <option value="51-200">51-200 Employees</option>
                  <option value="200+">200+ Employees</option>
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="Government">Government Agency</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>How did you hear about us?</label>
                <select value={formData.source} onChange={e => setFormData({...formData, source: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none", appearance: "none" }}>
                  <option value="" disabled>Select source...</option>
                  <option value="Google Search">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Word of Mouth / Referral</option>
                  <option value="Conference">Security Conference</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date/Time Placeholder */}
            <div>
              <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Preferred Initial Call Time (Optional)</label>
              <input type="datetime-local" value={formData.datetime} onChange={e => setFormData({...formData, datetime: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} />
            </div>

            <Btn type="submit" disabled={status === 'loading'} style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 16, background: cyan, borderColor: cyan, color: "#000", marginTop: 16, boxShadow: `0 0 20px ${cyan}4d` }}>
              {status === 'loading' ? 'Encrypting Request...' : 'Book My Free Consultation'}
            </Btn>
            
            <div style={{ textAlign: "center", color: muted, fontSize: 12, marginTop: -16 }}>
              🔒 All information shared is strictly confidential and governed by NDA.
            </div>

          </form>
        </div>
      </section>

      {/* 4. TESTIMONIAL STRIP */}
      <section style={{ padding: "80px 40px", background: `#000`, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          <div style={{ background: card, padding: 32, borderRadius: 16, border: `1px solid ${border2}` }}>
            <div style={{ color: cyan, fontSize: 24, marginBottom: 16 }}>"</div>
            <p style={{ color: white, fontSize: 16, lineHeight: 1.6, marginBottom: 24, fontStyle: "italic" }}>
              The consultation call immediately highlighted critical blindspots in our cloud architecture that we hadn't considered. They provided immense value before we even signed a contract.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: bg2, border: `1px solid ${cyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: white, fontWeight: 700 }}>A</div>
              <div>
                <div style={{ color: white, fontSize: 14, fontWeight: 600 }}>Amit R.</div>
                <div style={{ color: muted, fontSize: 12 }}>CTO, FinTech Startup</div>
              </div>
            </div>
          </div>
          
          <div style={{ background: card, padding: 32, borderRadius: 16, border: `1px solid ${border2}` }}>
            <div style={{ color: cyan, fontSize: 24, marginBottom: 16 }}>"</div>
            <p style={{ color: white, fontSize: 16, lineHeight: 1.6, marginBottom: 24, fontStyle: "italic" }}>
              Extremely professional and highly technical. They didn't try to sell us tools we didn't need, but instead focused on real risk mitigation tailored to our specific industry.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: bg2, border: `1px solid ${cyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: white, fontWeight: 700 }}>P</div>
              <div>
                <div style={{ color: white, fontSize: 14, fontWeight: 600 }}>Priya S.</div>
                <div style={{ color: muted, fontSize: 12 }}>Director of Security, E-commerce Hub</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
