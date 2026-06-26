import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { bg, bg2, card, border2, neon, cyan, white, muted, textCol, orange, red, pink } from "../styles/tokens";
import { Btn } from "../components/ui/UI";
import { FiMail, FiPhone, FiMessageCircle, FiMapPin } from "react-icons/fi";

const FAQS = [
  {
    q: "How do I enroll in a course?",
    a: "You can enroll in any of our certification courses by visiting the Courses page, selecting your desired track, and clicking the Enroll button. You'll be granted immediate access to the student portal upon checkout."
  },
  {
    q: "Do you offer corporate training packages?",
    a: "Yes, we specialize in corporate training. We can tailor custom workshops and dedicated labs for your security teams. Please fill out the form above or book a consultation to discuss group pricing."
  },
  {
    q: "How long does a VAPT engagement take?",
    a: "A typical web or mobile application Vulnerability Assessment and Penetration Testing (VAPT) engagement takes between 1 to 3 weeks depending on the scope, complexity, and required reporting standards."
  },
  {
    q: "Are courses available online?",
    a: "Absolutely. All of our training programs are delivered 100% online through our proprietary learning management system and cloud-based virtual labs, accessible from anywhere."
  },
  {
    q: "Do you provide certificates?",
    a: "Yes, upon successfully completing a course and passing the final practical examination, you will receive an industry-recognized certification from Skillnetics."
  },
  {
    q: "How do I report a bug or vulnerability responsibly?",
    a: "We take security seriously. If you've discovered a vulnerability in our systems, please report it via email to halotrace.enquiry@gmail.com. Please do not submit automated scanner results."
  }
];

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: 'General', message: '', captcha: false });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <main style={{ minHeight: "100vh", paddingTop: 72, display: "flex", flexDirection: "column" }}>
      <Helmet>
        <title>Contact Us | Skillnetics × HaloTrace</title>
        <meta name="description" content="Get in touch with the Skillnetics cybersecurity team." />
      </Helmet>

      {/* 1. HERO */}
      <section style={{ 
        padding: "80px 40px", textAlign: "center", borderBottom: `1px solid ${border2}`, position: "relative", overflow: "hidden",
        backgroundColor: bg, 
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px', backgroundPosition: 'center center'
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at top left, ${cyan}1a 0%, transparent 50%), radial-gradient(ellipse at top right, ${neon}1a 0%, transparent 50%)`, zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: white, marginBottom: 16, textTransform: "uppercase" }}>
            GET IN <span style={{ color: cyan }}>TOUCH</span>
          </h1>
          <p style={{ fontSize: 18, color: muted, maxWidth: 600, margin: "0 auto 32px" }}>
            Whether you're looking to enroll, request a security assessment, or just have a question — we're here.
          </p>
          <div style={{ display: "inline-block", background: `${cyan}1a`, border: `1px solid ${cyan}4d`, color: cyan, padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: cyan, marginRight: 8, boxShadow: `0 0 8px ${cyan}` }}></span>
            Avg. response time: &lt; 4 hours
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section style={{ padding: "80px 40px", backgroundColor: bg2, borderBottom: `1px solid ${border2}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
        {[
          { icon: <FiMail size={24} />, label: "Email Support", value: "halotrace.enquiry@gmail.com", action: "Click to copy" },
          { icon: <FiPhone size={24} />, label: "Direct Line", value: "+91 98765 43210", action: "Call now" },
          { icon: <FiMessageCircle size={24} />, label: "WhatsApp", value: "+91 98765 43210", action: "Chat with us" },
          { icon: <FiMapPin size={24} />, label: "Our Office", value: "Surat, India", action: "Visit us" }
        ].map((info, i) => (
          <div key={i} style={{ 
            background: "rgba(10, 15, 25, 0.6)", 
            backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${border2}`, 
            borderRadius: 16, 
            padding: "36px 24px", 
            textAlign: "center", 
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
            cursor: "pointer",
            position: "relative",
            overflow: "hidden"
          }} 
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = cyan;
            e.currentTarget.style.boxShadow = `0 15px 30px ${cyan}15`;
          }} 
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.boxShadow = "none";
          }}>
            {/* Top Glow Accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${cyan}, transparent)`, opacity: 0.8 }} />
            
            <div style={{ 
              width: 54, height: 54, margin: "0 auto 24px", borderRadius: "50%",
              background: `radial-gradient(circle at center, ${neon}22 0%, transparent 70%)`,
              border: `1px solid ${neon}33`, display: "flex", alignItems: "center", justifyContent: "center",
              color: neon, boxShadow: `0 0 20px ${neon}11`
            }}>
              {info.icon}
            </div>
            <div style={{ color: muted, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>{info.label}</div>
            <div style={{ color: white, fontSize: info.value.length > 20 ? 14 : 16, fontWeight: 600, marginBottom: 20, wordWrap: "break-word" }}>{info.value}</div>
            <div style={{ color: cyan, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color=white} onMouseLeave={e => e.currentTarget.style.color=cyan}>
              {info.action} <span style={{ fontSize: 16, transition: "transform 0.2s" }}>→</span>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* 3. MAIN SPLIT */}
      <section style={{ 
        padding: "80px 40px", backgroundColor: bg, 
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px', backgroundPosition: 'center center',
        borderBottom: `1px solid ${border2}`
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}>
        
        {/* Left: Form */}
        <div style={{ flex: "1 1 500px", background: "rgba(10, 15, 25, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${border2}`, borderRadius: 16, padding: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: white, marginBottom: 32 }}>Send a Message</h2>
          
          {formStatus === 'success' ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${neon}1a`, border: `2px solid ${neon}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: neon, fontSize: 32 }}>✓</div>
              <h3 style={{ fontSize: 24, color: white, marginBottom: 12 }}>Transmission Received</h3>
              <p style={{ color: muted }}>Thank you for reaching out. A security specialist will review your inquiry and respond shortly.</p>
              <Btn style={{ marginTop: 24 }} onClick={() => setFormStatus('idle')}>Send Another Message</Btn>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Full Name *</label>
                  <input required type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} onFocus={e => e.target.style.borderColor = neon} onBlur={e => e.target.style.borderColor = border2} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Email Address *</label>
                  <input required type="email" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} onFocus={e => e.target.style.borderColor = neon} onBlur={e => e.target.style.borderColor = border2} />
                </div>
              </div>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none" }} onFocus={e => e.target.style.borderColor = neon} onBlur={e => e.target.style.borderColor = border2} />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Inquiry Type</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none", appearance: "none" }} onFocus={e => e.target.style.borderColor = neon} onBlur={e => e.target.style.borderColor = border2}>
                    <option value="General">General Inquiry</option>
                    <option value="Course Enrollment">Course Enrollment</option>
                    <option value="Service Inquiry">Enterprise Security Services</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Internship">Internship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: textCol, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Message *</label>
                <textarea required rows="5" placeholder="How can we help you?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.3)`, color: white, outline: "none", resize: "vertical" }} onFocus={e => e.target.style.borderColor = neon} onBlur={e => e.target.style.borderColor = border2} />
              </div>

              {/* Fake Captcha */}
              <div style={{ padding: "16px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(0,0,0,0.2)`, display: "flex", alignItems: "center", gap: 12, width: "fit-content" }}>
                <input type="checkbox" required id="captcha" style={{ width: 18, height: 18, cursor: "pointer", accentColor: cyan }} />
                <label htmlFor="captcha" style={{ color: white, cursor: "pointer", fontSize: 14 }}>I'm not a robot</label>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
                <Btn type="submit" disabled={formStatus === 'loading'} style={{ padding: "14px 32px", fontSize: 16 }}>
                  {formStatus === 'loading' ? 'Encrypting & Sending...' : 'Send Message'}
                </Btn>
                <span style={{ color: muted, fontSize: 13 }}>We'll respond within 4 hours</span>
              </div>
            </form>
          )}
        </div>

        {/* Right: Info */}
        <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ background: "rgba(10, 15, 25, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${border2}`, borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: white, marginBottom: 16 }}>Business Hours</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, borderBottom: `1px dashed ${border2}`, paddingBottom: 12 }}>
              <span style={{ color: textCol }}>Monday - Friday</span>
              <span style={{ color: white, fontWeight: 600 }}>9:00 AM - 7:00 PM IST</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, borderBottom: `1px dashed ${border2}`, paddingBottom: 12 }}>
              <span style={{ color: textCol }}>Saturday</span>
              <span style={{ color: white, fontWeight: 600 }}>10:00 AM - 4:00 PM IST</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: textCol }}>Sunday</span>
              <span style={{ color: muted }}>Closed</span>
            </div>
          </div>

          <div style={{ background: "rgba(10, 15, 25, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${border2}`, borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: white, marginBottom: 16 }}>Connect With Us</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { name: "LinkedIn", url: "https://linkedin.com/company/skillnetics" },
                { name: "Twitter/X", url: "https://twitter.com/skillnetics" },
                { name: "Instagram", url: "https://instagram.com/skillnetics" },
                { name: "YouTube", url: "https://youtube.com/@skillnetics" },
                { name: "GitHub", url: "https://github.com/skillnetics" }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${border2}`, color: white, textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "background .2s" }} onMouseEnter={e => {e.target.style.background = border2; e.target.style.color = cyan;}} onMouseLeave={e => {e.target.style.background = "transparent"; e.target.style.color = white;}}>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${red}1a 0%, rgba(10, 15, 25, 0.6) 100%)`, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${red}4d`, borderRadius: 16, padding: 32 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${red}33`, color: red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>
              🚨
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: white, marginBottom: 8 }}>Emergency Incident?</h3>
            <p style={{ color: muted, fontSize: 14, marginBottom: 20 }}>
              Under active attack? Need immediate DFIR assistance? Our elite incident response team is on standby 24/7.
            </p>
            <Btn style={{ width: "100%", justifyContent: "center", background: red, borderColor: red, color: white }} onClick={() => navigate('/book-consultation')}>
              Request Immediate Assistance
            </Btn>
          </div>
        </div>
        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section style={{ padding: "80px 40px", backgroundColor: bg2, borderBottom: `1px solid ${border2}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: white, marginBottom: 16 }}>Our Location</h2>
            <p style={{ color: muted, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              Located in the heart of Surat, India. This is where our expert security team is stationed to protect organizations and train professionals worldwide.
            </p>
          </div>

          <div style={{ 
          height: 450, borderRadius: 16, border: `1px solid ${border2}`,
          display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
          background: "rgba(10, 15, 25, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)"
        }}>
          <iframe 
            title="Skillnetics Location"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=G-3,+Aditya+complex,+opp.+Kapadia+health+club,+bhatar+road,+Surat+-395001&t=m&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, opacity: 0.85, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
          ></iframe>
        </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section style={{ 
        padding: "100px 40px", backgroundColor: bg, 
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px', backgroundPosition: 'center center'
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: white, marginBottom: 40, textAlign: "center" }}>Frequently Asked Questions</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, idx) => (
            <div key={idx} style={{ background: "rgba(10, 15, 25, 0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: `1px solid ${border2}`, borderRadius: 12, overflow: "hidden" }}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ width: "100%", padding: "24px", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: white, fontSize: 16, fontWeight: 600, textAlign: "left" }}
              >
                {faq.q}
                <span style={{ color: neon, transform: openFaq === idx ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▼</span>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 24px 24px", color: muted, lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        </div>
      </section>

    </main>
  );
}
