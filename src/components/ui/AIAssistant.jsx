import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bg, bg2, card, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";
import { FiMessageSquare, FiSend, FiCpu, FiTerminal, FiX, FiShield } from "react-icons/fi";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "system", text: "SYSTEM ONLINE. Halo AI initialized." },
    { sender: "system", text: "Are you reporting an active security emergency, or do you have a general inquiry?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const msg = userMsg.toLowerCase();
      let reply = "I'm a virtual assistant for HaloTrace. I can help you with cybersecurity training (Skillnetics) or our enterprise security services.";

      if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        reply = "Hello! I am Halo AI. How can I assist you with your cybersecurity journey today?";
      } else if (msg.includes("emergency") || msg.includes("hacked") || msg.includes("breach") || msg.includes("incident")) {
        reply = "CRITICAL INCIDENT DETECTED. I am elevating this to our active Incident Response (DFIR) team immediately. Please hold while a human agent connects.";
      } else if (msg.includes("course") || msg.includes("enroll") || msg.includes("learn") || msg.includes("training")) {
        reply = "Looking to upskill? You can view all our certification programs on the Courses page. Our labs are fully hands-on!";
      } else if (msg.includes("price") || msg.includes("cost") || msg.includes("fee")) {
        reply = "Our pricing varies based on whether you are looking for individual certifications or corporate training packages. Would you like me to connect you with sales?";
      } else if (msg.includes("vapt") || msg.includes("pentest") || msg.includes("audit") || msg.includes("service")) {
        reply = "HaloTrace provides world-class VAPT, Red Teaming, and Security Audits. We can tailor an engagement to your exact architecture.";
      } else if (msg.includes("contact") || msg.includes("support") || msg.includes("human")) {
        reply = "You can reach our team anytime via the Contact page, or email us at halotrace.enquiry@gmail.com.";
      } else if (msg.includes("thank")) {
        reply = "You're welcome! Stay secure out there. Let me know if you need anything else.";
      } else {
        reply = "I've logged your query. While I process this, feel free to check out our FAQ or Contact page for immediate assistance.";
      }

      setMessages(prev => [...prev, { sender: "system", text: reply }]);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: "fixed", bottom: 32, right: 32, zIndex: 9999,
              height: 56, padding: "0 24px", borderRadius: 28,
              background: `linear-gradient(135deg, rgba(10, 20, 35, 0.95) 0%, #000 100%)`,
              backdropFilter: "blur(12px)",
              border: `1px solid rgba(0, 255, 156, 0.4)`, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
              boxShadow: `0 0 30px rgba(0, 255, 156, 0.2), inset 0 1px 1px rgba(255,255,255,0.1)`,
              color: neon,
              overflow: "hidden"
            }}
          >
            <motion.div
              animate={{ boxShadow: [`0 0 0 0 rgba(0, 255, 156, 0.4)`, `0 0 0 15px rgba(0, 255, 156, 0)`] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ position: "absolute", width: "100%", height: "100%", borderRadius: 28 }}
            />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${neon}, transparent)`, opacity: 0.5 }} />

            <FiMessageSquare style={{ position: "relative", zIndex: 2, fontSize: 20 }} />
            <span style={{ position: "relative", zIndex: 2, fontSize: 14, fontWeight: 700, letterSpacing: 0.5, color: white }}>Ask HALO AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            style={{
              position: "fixed", bottom: 32, right: 32, zIndex: 9999,
              width: 360, height: 520, maxHeight: "calc(100vh - 100px)",
              background: `linear-gradient(180deg, rgba(10, 20, 35, 0.9) 0%, rgba(5, 10, 15, 0.95) 100%)`,
              backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
              border: `1px solid rgba(0, 255, 156, 0.2)`, borderRadius: 24,
              display: "flex", flexDirection: "column", overflow: "hidden",
              boxShadow: `0 40px 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(0, 255, 156, 0.05)`
            }}
          >
            {/* Header */}
            <div style={{
              padding: "16px 20px",
              background: `linear-gradient(90deg, rgba(0, 255, 156, 0.08) 0%, transparent 100%)`,
              borderBottom: `1px solid rgba(0, 255, 156, 0.15)`,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              position: "relative"
            }}>
              <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: 1, background: `linear-gradient(90deg, ${neon}, transparent)`, opacity: 0.5 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: `linear-gradient(135deg, rgba(0, 255, 156, 0.15) 0%, rgba(0,0,0,0) 100%)`,
                  border: `1px solid rgba(0, 255, 156, 0.3)`,
                  display: "flex", alignItems: "center", justifyContent: "center", color: neon,
                  boxShadow: `0 0 20px rgba(0, 255, 156, 0.1)`
                }}>
                  <FiShield size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 15, color: white, fontWeight: 800, letterSpacing: 1, display: "flex", alignItems: "center", gap: 8 }}>
                    HALO AI
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      style={{ width: 6, height: 6, borderRadius: "50%", background: neon, boxShadow: `0 0 10px ${neon}` }}
                    />
                  </h3>
                  <div style={{ fontSize: 10, color: neon, textTransform: "uppercase", letterSpacing: 1, marginTop: 4, opacity: 0.8 }}>
                    Encrypted Channel Active
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: white,
                cursor: "pointer", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "50%", transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div ref={scrollRef} style={{ flex: 1, padding: "20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  key={i}
                  style={{ alignSelf: msg.sender === "user" ? "flex-end" : "flex-start", maxWidth: "85%" }}
                >
                  <div style={{
                    fontSize: 9, color: "rgba(255,255,255,0.5)", marginBottom: 6,
                    textAlign: msg.sender === "user" ? "right" : "left", textTransform: "uppercase", letterSpacing: 1.5,
                    display: "flex", alignItems: "center", gap: 6, justifyContent: msg.sender === "user" ? "flex-end" : "flex-start"
                  }}>
                    {msg.sender === "system" && <FiCpu size={10} color={neon} />}
                    {msg.sender === "user" ? "Client" : "System"}
                  </div>
                  <div style={{
                    padding: "12px 16px", borderRadius: 16, fontSize: 13, lineHeight: 1.5,
                    background: msg.sender === "user" ? `linear-gradient(135deg, rgba(0, 255, 156, 0.15) 0%, rgba(0, 255, 156, 0.05) 100%)` : `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                    color: msg.sender === "user" ? white : "rgba(255,255,255,0.9)",
                    border: `1px solid ${msg.sender === "user" ? `rgba(0, 255, 156, 0.3)` : `rgba(255,255,255,0.1)`}`,
                    borderLeft: msg.sender === "system" ? `3px solid ${neon}` : undefined,
                    borderBottomRightRadius: msg.sender === "user" ? 4 : 16,
                    borderBottomLeftRadius: msg.sender === "system" ? 4 : 16,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
                    backdropFilter: "blur(10px)"
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} style={{ alignSelf: "flex-start" }}>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1.5, display: "flex", alignItems: "center", gap: 6 }}>
                    <FiCpu size={10} color={neon} /> System
                  </div>
                  <div style={{ padding: "12px 20px", borderRadius: 16, background: `rgba(255,255,255,0.05)`, border: `1px solid rgba(255,255,255,0.1)`, borderLeft: `3px solid ${neon}`, borderBottomLeftRadius: 4, display: "flex", gap: 6 }}>
                    <motion.div animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} style={{ width: 5, height: 5, borderRadius: "50%", background: neon, boxShadow: `0 0 6px ${neon}` }} />
                    <motion.div animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} style={{ width: 5, height: 5, borderRadius: "50%", background: neon, boxShadow: `0 0 6px ${neon}` }} />
                    <motion.div animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} style={{ width: 5, height: 5, borderRadius: "50%", background: neon, boxShadow: `0 0 6px ${neon}` }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div style={{ padding: "16px 20px", background: `linear-gradient(0deg, rgba(5, 10, 15, 0.9) 0%, transparent 100%)`, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
              <form onSubmit={handleSend} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{
                  flex: 1, position: "relative", display: "flex", alignItems: "center",
                  background: `rgba(0,0,0,0.4)`, borderRadius: 12, border: `1px solid rgba(255,255,255,0.1)`,
                  boxShadow: `inset 0 2px 10px rgba(0,0,0,0.5)`,
                  transition: "all 0.3s"
                }}
                  onFocusCapture={e => { e.currentTarget.style.borderColor = `rgba(0, 255, 156, 0.5)`; e.currentTarget.style.boxShadow = `inset 0 2px 10px rgba(0,0,0,0.5), 0 0 15px rgba(0, 255, 156, 0.1)`; }}
                  onBlurCapture={e => { e.currentTarget.style.borderColor = `rgba(255,255,255,0.1)`; e.currentTarget.style.boxShadow = `inset 0 2px 10px rgba(0,0,0,0.5)`; }}
                >
                  <span style={{ position: "absolute", left: 14, color: neon, fontSize: 14, fontWeight: 900, textShadow: `0 0 10px ${neon}` }}>&gt;</span>
                  <input
                    type="text"
                    placeholder="Enter your query ...."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{
                      width: "100%", padding: "14px 14px 14px 36px",
                      background: "transparent", border: "none",
                      color: white, fontSize: 13, outline: "none", letterSpacing: 0.5
                    }}
                  />
                </div>
                <motion.button type="submit" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `linear-gradient(135deg, rgba(0, 255, 156, 0.2) 0%, rgba(0, 255, 156, 0.05) 100%)`,
                  border: `1px solid rgba(0, 255, 156, 0.4)`, color: neon,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "all 0.2s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = neon; e.currentTarget.style.color = "#000"; e.currentTarget.style.boxShadow = `0 0 20px rgba(0, 255, 156, 0.4)`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg, rgba(0, 255, 156, 0.2) 0%, rgba(0, 255, 156, 0.05) 100%)`; e.currentTarget.style.color = neon; e.currentTarget.style.boxShadow = "none"; }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiSend size={18} style={{ transform: "translateX(-2px) translateY(2px)" }} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
