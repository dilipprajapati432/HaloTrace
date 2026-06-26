import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { bg, bg2, neon, cyan, white, muted } from "../styles/tokens";
import { Btn } from "../components/ui/UI";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
      background: `linear-gradient(135deg, ${bg2} 0%, ${bg} 100%)`
    }}>
      <Helmet>
        <title>404 - Page Not Found | Skillnetics × HaloTrace</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div style={{ fontSize: "8rem", fontWeight: 900, color: neon, lineHeight: 1, textShadow: `0 0 40px ${neon}40` }}>
        404
      </div>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: white, margin: "20px 0 10px" }}>
        SYSTEM BREACH: PAGE NOT FOUND
      </h1>
      <p style={{ fontSize: "1.1rem", color: muted, maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.6 }}>
        The data fragment you are requesting has been corrupted, deleted, or never existed in the current server instance.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Btn style={{ padding: "14px 32px", fontSize: "1rem" }}>
          Return to Secure Sector (Home)
        </Btn>
      </Link>
    </main>
  );
}
