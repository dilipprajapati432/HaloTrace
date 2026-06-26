import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { bg, card, border2, cyan, white, muted, textCol, neon, red } from "../styles/tokens";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });
  const [modalContent, setModalContent] = useState(null);
  const navigate = useNavigate();

  const showToast = (message, type = "info") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type: "info" }), 3000);
  };

  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const passwordsMismatch = password && confirmPassword && password !== confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      showToast("Please fill in all fields.", "error");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }
    if (password.length < 8) {
      showToast("Password must be at least 8 characters.", "error");
      return;
    }
    if (!agreedTerms) {
      showToast("You must agree to the Terms & Conditions.", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOTP(true);
      showToast(`Verification code sent to ${email}`, "info");
    }, 1200);
  };

  const handleOTPChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOTPVerify = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      setOtpError("Please enter the 6-digit code.");
      return;
    }
    setLoading(true);
    setOtpError("");
    showToast("Account verified! Redirecting to login...", "success");
    setTimeout(() => navigate("/login"), 1500);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(5, 13, 26, 0.8)",
    border: `1px solid ${field === "confirmPassword" && passwordsMismatch
      ? red
      : field === "confirmPassword" && passwordsMatch
        ? neon
        : focusedField === field
          ? cyan
          : "rgba(255,255,255,0.1)"
      }`,
    boxShadow:
      field === "confirmPassword" && passwordsMismatch
        ? `0 0 10px ${red}22`
        : field === "confirmPassword" && passwordsMatch
          ? `0 0 10px ${neon}22`
          : focusedField === field
            ? `0 0 12px ${cyan}33, inset 0 0 6px ${cyan}11`
            : "none",
    color: white,
    padding: "13px 16px",
    paddingRight: field === "password" ? 48 : 16,
    borderRadius: 10,
    outline: "none",
    fontFamily: "inherit",
    fontSize: 14,
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  });

  const labelStyle = {
    display: "block",
    fontSize: 11.5,
    fontWeight: 700,
    color: muted,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  };

  return (
    <main style={{
      background: bg,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 20px 80px",
      color: textCol,
      position: "relative",
      overflow: "hidden",
    }}>
      <Helmet>
        <title>Register | HaloTrace</title>
        <meta name="description" content="Request portal access for the HaloTrace Client Portal." />
      </Helmet>

      {/* Background Glow Effects */}
      <div style={{
        position: "absolute", top: "15%", right: "30%",
        width: 300, height: 300, borderRadius: "50%",
        background: `radial-gradient(circle, ${neon}12 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", left: "20%",
        width: 280, height: 280, borderRadius: "50%",
        background: `radial-gradient(circle, ${cyan}15 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Toast Alert */}
      <div style={{
        position: "fixed", top: 100, right: 40,
        background: "rgba(4, 10, 18, 0.95)",
        border: `1px solid ${toast.type === "error" ? red : toast.type === "success" ? neon : cyan}`,
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        borderRadius: 10, padding: "14px 22px", color: white, zIndex: 9999,
        fontSize: 13.5, fontWeight: 600,
        transform: toast.visible ? "translateX(0)" : "translateX(140%)",
        opacity: toast.visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s ease",
        pointerEvents: toast.visible ? "auto" : "none",
      }}>
        {toast.message}
      </div>

      {/* Register Card */}
      <div style={{
        background: `linear-gradient(170deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%), ${card}`,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 20,
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        maxWidth: 440,
        width: "100%",
        padding: "44px 40px",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Top Accent Gradient Bar */}
        <div style={{
          position: "absolute", top: 0, left: 20, right: 20, height: 3,
          borderRadius: "0 0 3px 3px",
          background: `linear-gradient(90deg, ${neon}, ${cyan})`,
        }} />

        {showOTP ? (
          <div style={{ animation: "fadeIn 0.3s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `linear-gradient(135deg, ${cyan}22, ${neon}15)`,
                border: `1px solid ${cyan}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 18px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: white, margin: "0 0 8px 0", letterSpacing: 0.5 }}>
                Verify Email
              </h1>
              <p style={{ color: muted, fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                We've sent a 6-digit code to<br/>
                <strong style={{ color: cyan }}>{email}</strong>
              </p>
            </div>

            <form onSubmit={handleOTPVerify}>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 24 }}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    style={{
                      width: 44, height: 48,
                      background: "rgba(5, 13, 26, 0.8)",
                      border: `1px solid ${digit ? cyan : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 10,
                      color: white, fontSize: 20, fontWeight: 700, textAlign: "center",
                      boxShadow: digit ? `0 0 12px ${cyan}33, inset 0 0 6px ${cyan}11` : "none",
                      transition: "all 0.2s"
                    }}
                    onFocus={e => e.target.style.borderColor = neon}
                    onBlur={e => e.target.style.borderColor = digit ? cyan : "rgba(255,255,255,0.1)"}
                  />
                ))}
              </div>
              
              {otpError && <div style={{ color: red, fontSize: 12, textAlign: "center", marginBottom: 16 }}>{otpError}</div>}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%", padding: "14px", fontSize: 14, fontWeight: 700, fontFamily: "inherit",
                  background: loading ? `${cyan}88` : `linear-gradient(135deg, ${cyan}, #0099dd)`,
                  border: "none", borderRadius: 10, color: "#050d1a",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: `0 4px 16px ${cyan}33`, letterSpacing: 0.5,
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${cyan}44`; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 4px 16px ${cyan}33`; }}
              >
                {loading ? "Verifying..." : "Verify & Create Account"}
              </button>

              <div style={{ marginTop: 28, textAlign: "center", fontSize: 13.5, color: muted }}>
                Didn't receive the code?{" "}
                <button type="button" onClick={() => showToast("New code sent!", "info")} style={{
                  background: "none", border: "none", padding: 0,
                  color: neon, textDecoration: "none", fontWeight: 600,
                  cursor: "pointer", transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Resend Code
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              {/* User Plus Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `linear-gradient(135deg, ${neon}22, ${cyan}15)`,
                border: `1px solid ${neon}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 18px",
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
              </div>
              <h1 style={{
                fontSize: 24, fontWeight: 800, color: white,
                margin: "0 0 8px 0",
                letterSpacing: 0.5,
              }}>
                Create Account
              </h1>
              <p style={{ color: muted, fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                Register for secure portal access
              </p>
            </div>

            <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Full Name</label>
            <input
              id="register-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              placeholder="Jane Doe"
              style={inputStyle("name")}
              required
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Email Address</label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="jane@company.com"
              style={inputStyle("email")}
              required
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                placeholder="Min. 8 characters"
                style={inputStyle("password")}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                  background: "transparent", border: "none", color: muted,
                  cursor: "pointer", fontSize: 13, padding: 4,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = cyan}
                onMouseLeave={e => e.currentTarget.style.color = muted}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={labelStyle}>Confirm Password</label>
              {passwordsMatch && (
                <span style={{ fontSize: 11, color: neon, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={neon}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  Match
                </span>
              )}
              {passwordsMismatch && (
                <span style={{ fontSize: 11, color: red, fontWeight: 600 }}>
                  Mismatch
                </span>
              )}
            </div>
            <input
              id="register-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedField("confirmPassword")}
              onBlur={() => setFocusedField(null)}
              placeholder="Re-enter your password"
              style={inputStyle("confirmPassword")}
              required
            />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div style={{ marginBottom: 26 }}>
            <label
              htmlFor="register-terms"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                cursor: "pointer",
                fontSize: 13,
                color: muted,
                lineHeight: 1.5,
                userSelect: "none",
              }}
            >
              <div
                onClick={() => setAgreedTerms(!agreedTerms)}
                style={{
                  width: 20, height: 20, minWidth: 20,
                  borderRadius: 6,
                  border: `1.5px solid ${agreedTerms ? cyan : "rgba(255,255,255,0.18)"}`,
                  background: agreedTerms ? `${cyan}22` : "rgba(5, 13, 26, 0.8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s ease",
                  marginTop: 1,
                  cursor: "pointer",
                  boxShadow: agreedTerms ? `0 0 8px ${cyan}33` : "none",
                }}
              >
                {agreedTerms && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span>
                I agree to the{" "}
                <span
                  style={{ color: cyan, fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s", textDecoration: "underline", textDecorationColor: `${cyan}44`, textUnderlineOffset: 2 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalContent("terms"); }}
                >
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span
                  style={{ color: cyan, fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s", textDecoration: "underline", textDecorationColor: `${cyan}44`, textUnderlineOffset: 2 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalContent("privacy"); }}
                >
                  Privacy Policy
                </span>
              </span>
              <input
                type="checkbox"
                id="register-terms"
                checked={agreedTerms}
                onChange={e => setAgreedTerms(e.target.checked)}
                style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            id="register-submit"
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "inherit",
              background: loading ? `${neon}88` : `linear-gradient(135deg, ${neon}, #00cc7a)`,
              border: "none",
              borderRadius: 10,
              color: "#050d1a",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: `0 4px 16px ${neon}33`,
              letterSpacing: 0.5,
            }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${neon}44`; } }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 4px 16px ${neon}33`; }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Login Link */}
          <div style={{ marginTop: 28, textAlign: "center", fontSize: 13.5, color: muted }}>
            Already have an account?{" "}
            <Link to="/login" style={{
              color: cyan, textDecoration: "none", fontWeight: 600,
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Log In
            </Link>
          </div>
        </form>
        </>
        )}
      </div>

      {/* Terms & Conditions / Privacy Policy Modal */}
      {modalContent && (
        <div
          onClick={() => setModalContent(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(2, 6, 12, 0.85)",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
            animation: "fadeInModal 0.25s ease",
          }}
        >
          <style>{`@keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: `linear-gradient(170deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%), ${card}`,
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
              maxWidth: 560, width: "100%",
              maxHeight: "80vh",
              display: "flex", flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Modal Accent Bar */}
            <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 3, borderRadius: "0 0 3px 3px", background: `linear-gradient(90deg, ${cyan}, ${neon})` }} />

            {/* Modal Header */}
            <div style={{
              padding: "28px 32px 16px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              flexShrink: 0,
            }}>
              <h2 style={{
                fontSize: 18, fontWeight: 800, color: white,
                margin: 0, letterSpacing: 0.5,
              }}>
                {modalContent === "terms" ? "Terms & Conditions" : "Privacy Policy"}
              </h2>
              <button
                onClick={() => setModalContent(null)}
                style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8, width: 34, height: 34,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "background 0.2s",
                  color: muted,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = white; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = muted; }}
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body — Scrollable */}
            <div style={{
              padding: "24px 32px 32px",
              overflowY: "auto",
              fontSize: 13.5, lineHeight: 1.75,
              color: textCol,
            }}>
              {modalContent === "terms" ? (
                <>
                  <p style={{ color: muted, fontSize: 12, marginBottom: 20 }}>Last updated: June 2026</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>1. Acceptance of Terms</h3>
                  <p style={{ marginBottom: 18 }}>By accessing and using the HaloTrace platform and its associated services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>2. Service Description</h3>
                  <p style={{ marginBottom: 18 }}>HaloTrace provides cybersecurity services including but not limited to Vulnerability Assessment and Penetration Testing (VAPT), Digital Forensics and Incident Response (DFIR), network security auditing, web application security, and cybersecurity training through its Skillnetics division.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>3. User Accounts</h3>
                  <p style={{ marginBottom: 18 }}>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. HaloTrace shall not be liable for any loss arising from unauthorized access to your account due to your failure to safeguard your credentials.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>4. Acceptable Use Policy</h3>
                  <p style={{ marginBottom: 18 }}>You agree not to misuse our platform or services. This includes but is not limited to: unauthorized scanning or testing of systems you do not own, sharing confidential assessment reports with unauthorized parties, attempting to gain unauthorized access to HaloTrace systems, or using our training materials for malicious purposes.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>5. Intellectual Property</h3>
                  <p style={{ marginBottom: 18 }}>All content, methodologies, tools, reports, and training materials provided through HaloTrace and Skillnetics are the intellectual property of their respective owners. Unauthorized reproduction, distribution, or modification is strictly prohibited.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>6. Limitation of Liability</h3>
                  <p style={{ marginBottom: 18 }}>HaloTrace provides security assessments and recommendations based on industry best practices. However, no security solution can guarantee complete protection. HaloTrace shall not be held liable for any damages resulting from security incidents that occur despite our recommendations being implemented.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>7. Modifications</h3>
                  <p style={{ marginBottom: 0 }}>HaloTrace reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms. Users will be notified of significant changes via email or platform notification.</p>
                </>
              ) : (
                <>
                  <p style={{ color: muted, fontSize: 12, marginBottom: 20 }}>Last updated: June 2026</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>1. Information We Collect</h3>
                  <p style={{ marginBottom: 18 }}>We collect information you provide directly, such as your name, email address, organization details, and account credentials. We also collect technical data including IP addresses, browser information, and usage analytics to improve our services and ensure platform security.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>2. How We Use Your Information</h3>
                  <p style={{ marginBottom: 18 }}>Your information is used to: provide and maintain our cybersecurity services, communicate assessment findings and security recommendations, deliver training content through Skillnetics, process transactions and send billing notifications, improve our platform performance and user experience, and comply with legal obligations.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>3. Data Security</h3>
                  <p style={{ marginBottom: 18 }}>We implement industry-standard security measures including end-to-end encryption, secure data storage, role-based access controls, and regular security audits. All assessment reports and client data are stored in encrypted environments with strict access protocols.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>4. Data Sharing</h3>
                  <p style={{ marginBottom: 18 }}>We do not sell or rent your personal information to third parties. Data may be shared only with: authorized team members involved in your service delivery, regulatory authorities when required by law, and trusted service providers under strict confidentiality agreements necessary for platform operations.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>5. Data Retention</h3>
                  <p style={{ marginBottom: 18 }}>We retain your data for as long as your account is active or as needed to provide services. Assessment reports are retained for a minimum period as agreed in service contracts. You may request deletion of your personal data at any time, subject to legal retention requirements.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>6. Your Rights</h3>
                  <p style={{ marginBottom: 18 }}>You have the right to: access your personal data, request correction of inaccurate data, request deletion of your data, object to data processing, and receive a copy of your data in a portable format. To exercise these rights, contact our data protection team.</p>

                  <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3 }}>7. Contact Us</h3>
                  <p style={{ marginBottom: 0 }}>For any privacy-related inquiries or to exercise your data rights, please contact us at <span style={{ color: cyan, fontWeight: 600 }}>halotrace.enquiry@gmail.com</span>.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
