import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { bg, card, border2, cyan, white, muted, textCol, neon } from "../styles/tokens";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("login");
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });
  const navigate = useNavigate();

  const showToast = (message, type = "info") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type: "info" }), 3000);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showToast("Please enter your email address.", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast(`Password reset link sent to ${email}`, "success");
      setTimeout(() => setView("login"), 2000);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast("Please enter both email and password.", "error");
      return;
    }
    setLoading(true);
    showToast("Login successful! Redirecting...", "success");
    sessionStorage.setItem("userToken", "SecureAuth_Active");
    sessionStorage.setItem("userEmail", email);
    setTimeout(() => navigate("/"), 1200);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "rgba(5, 13, 26, 0.8)",
    border: `1px solid ${focusedField === field ? cyan : "rgba(255,255,255,0.1)"}`,
    boxShadow: focusedField === field ? `0 0 12px ${cyan}33, inset 0 0 6px ${cyan}11` : "none",
    color: white,
    padding: "13px 16px",
    paddingRight: field === "password" ? 48 : 16,
    borderRadius: 10,
    outline: "none",
    fontFamily: "inherit",
    fontSize: 14,
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
    letterSpacing: field === "password" && !showPassword ? 2 : 0,
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
        <title>Login | HaloTrace</title>
        <meta name="description" content="Access the HaloTrace Client Portal. Enter your credentials to log in securely." />
      </Helmet>

      {/* Background Glow Effects */}
      <div style={{
        position: "absolute", top: "20%", left: "30%",
        width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, ${cyan}15 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "25%",
        width: 260, height: 260, borderRadius: "50%",
        background: `radial-gradient(circle, ${neon}12 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Toast Alert */}
      <div style={{
        position: "fixed", top: 100, right: 40,
        background: "rgba(4, 10, 18, 0.95)",
        border: `1px solid ${toast.type === "error" ? "#ff4040" : toast.type === "success" ? neon : cyan}`,
        boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
        borderRadius: 10, padding: "14px 22px", color: white, zIndex: 9999,
        fontSize: 13.5, fontWeight: 600,
        transform: toast.visible ? "translateX(0)" : "translateX(140%)",
        opacity: toast.visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s ease",
        pointerEvents: toast.visible ? "auto" : "none",
      }}>
        {toast.message}
      </div>

      {/* Login Card */}
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
          background: `linear-gradient(90deg, ${cyan}, ${neon})`,
        }} />

        {view === "forgot" ? (
          <div style={{ animation: "fadeIn 0.3s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `linear-gradient(135deg, ${cyan}22, ${neon}15)`,
                border: `1px solid ${cyan}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 18px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: white, margin: "0 0 8px 0", letterSpacing: 0.5 }}>
                Reset Password
              </h1>
              <p style={{ color: muted, fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleForgotSubmit}>
              <div style={{ marginBottom: 26 }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="name@company.com"
                  style={inputStyle("email")}
                  required
                />
              </div>

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
                {loading ? "Sending..." : "Send Reset Link"}
              </button>

              <div style={{ marginTop: 28, textAlign: "center", fontSize: 13.5, color: muted }}>
                Remember your password?{" "}
                <button type="button" onClick={() => setView("login")} style={{
                  background: "none", border: "none", padding: 0,
                  color: cyan, textDecoration: "none", fontWeight: 600,
                  cursor: "pointer", transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              {/* Shield Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `linear-gradient(135deg, ${cyan}22, ${neon}15)`,
                border: `1px solid ${cyan}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 18px",
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h1 style={{
                fontSize: 24, fontWeight: 800, color: white,
                margin: "0 0 8px 0",
                letterSpacing: 0.5,
              }}>
                Client Portal
              </h1>
              <p style={{ color: muted, fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                Enter your credentials to access your dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div style={{ marginBottom: 22 }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="name@company.com"
                  style={inputStyle("email")}
                  required
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your password"
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

              {/* Forgot Password */}
              <div style={{ textAlign: "right", marginBottom: 28 }}>
                <span
                  onClick={() => setView("forgot")}
                  style={{
                    color: cyan, fontSize: 12.5, cursor: "pointer",
                    transition: "opacity 0.2s", fontWeight: 500,
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Forgot Password?
                </span>
              </div>

              {/* Submit Button */}
              <button
                id="login-submit"
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  background: loading ? `${cyan}88` : `linear-gradient(135deg, ${cyan}, #0099dd)`,
                  border: "none",
                  borderRadius: 10,
                  color: "#050d1a",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: `0 4px 16px ${cyan}33`,
                  letterSpacing: 0.5,
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${cyan}44`; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 4px 16px ${cyan}33`; }}
              >
                {loading ? "Authenticating..." : "Log In"}
              </button>

              {/* Register Link */}
              <div style={{ marginTop: 28, textAlign: "center", fontSize: 13.5, color: muted }}>
                Don't have portal access?{" "}
                <Link to="/register" style={{
                  color: cyan, textDecoration: "none", fontWeight: 600,
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Register Here
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
