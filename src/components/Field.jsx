function Field({ label, value, onChange, placeholder, type = "text", hint = "", hintType = "error", autoComplete = "off" }) {
  const isError = hintType === "error";
  const fieldId = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={fieldId} style={{ display: "block", color: "#171c1f", fontSize: 10, fontWeight: 800, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{label}</label>
      <input
        id={fieldId}
        className="auth-input"
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "15px 18px",
          background: "#f8faff",
          border: `1.5px solid ${hint && isError ? "#fca5a5" : "#e2e8f0"}`,
          borderRadius: 14,
          color: "#171c1f",
          fontSize: 14,
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          boxSizing: "border-box"
        }}
      />
      {hint && (
        <p style={{ margin: "8px 0 0 4px", fontSize: 11, fontWeight: 600, color: isError ? "#f87171" : "#10b981", display: "flex", alignItems: "center", gap: 6, letterSpacing: -0.1 }}>
          <span style={{ fontSize: 14 }}>{isError ? "✕" : "✓"}</span> {hint}
        </p>
      )}
    </div>
  );
}

export default Field;
