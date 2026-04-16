import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main style={{ minHeight: "100vh", background: "#f8faff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 20 }}>
      {/* ... previous SEO and content ... */}
      <SEO title="404 Not Found" description="The page you are looking for does not exist." />
      <div style={{ fontSize: "clamp(80px, 15vw, 120px)", fontWeight: 900, color: "rgba(37,99,235,0.08)", lineHeight: 1, marginBottom: 20 }}>404</div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>Page Not Found</h1>
      <p style={{ color: "#64748b", maxWidth: 400, marginBottom: 32, lineHeight: 1.6 }}>
        The link might be broken, or the page may have been moved. Let's get you back on track.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "12px 28px",
          background: "#2563eb",
          color: "#ffffff",
          borderRadius: 12,
          border: "none",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 10px 15px -3px rgba(37,99,235,0.25)",
          fontFamily: "'Sora', sans-serif",
          transition: "transform 0.1s"
        }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
        onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
      >
        Back to Dashboard
      </button>
    </main>
  );
}

export default NotFound;
