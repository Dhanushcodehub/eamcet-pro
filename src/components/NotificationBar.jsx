function NotificationBar({ message, type = "error", onClose }) {
  if (!message) return null;
  const isError = type === "error";
  return (
    <div style={{
      position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", zIndex: 9999,
      background: isError ? "#fef2f2" : "#fffbeb",
      border: `1px solid ${isError ? "#fecaca" : "#fde68a"}`,
      padding: "16px 24px", borderRadius: 12, boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
      display: "flex", alignItems: "flex-start", gap: 14, width: "90%", maxWidth: 420,
      animation: "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translate(-50%, -24px) scale(0.96); } to { opacity: 1; transform: translate(-50%, 0) scale(1); } }
      `}</style>
      <div style={{ color: isError ? "#ef4444" : "#f59e0b", marginTop: 1 }}>
        {isError
          ? <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          : <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        }
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ color: isError ? "#b91c1c" : "#b45309", fontSize: 13.5, margin: 0, fontWeight: 600, letterSpacing: "-0.2px" }}>{isError ? "Authentication Error" : "Warning"}</p>
        <p style={{ color: isError ? "#dc2626" : "#d97706", fontSize: 13, margin: "4px 0 0 0", lineHeight: 1.4 }}>{message}</p>
      </div>
      <button onClick={onClose} style={{ background: "none", border: "none", color: isError ? "#f87171" : "#fbbf24", cursor: "pointer", padding: 4, display: "flex", borderRadius: 6, transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = isError ? "#fee2e2" : "#fef3c7"} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  );
}

export default NotificationBar;
