import { useState } from "react";
import {
  COLLEGES, BRANCHES, CATEGORIES, CATEGORY_TO_KEY, CATEGORY_MULTIPLIERS,
  TOTAL_CANDIDATES, predictRank,
} from "../data/predictorData.js";
import {
  Target, GraduationCap, ChevronRight, CheckCircle,
  AlertCircle, Building2, MapPin, Award, TrendingDown,
} from "lucide-react";

const TYPE_COLORS = {
  "Govt": { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
  "Private-Aided": { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  "Private": { bg: "#fafafa", color: "#475569", border: "#e2e8f0" },
  "Deemed": { bg: "#fdf4ff", color: "#9333ea", border: "#e9d5ff" },
};

function formatRank(r) {
  if (r >= 100000) return `${(r / 100000).toFixed(1)}L`;
  if (r >= 1000) return `${(r / 1000).toFixed(1)}K`;
  return String(r);
}

function Chip({ label, color, bg, border }) {
  return (
    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: bg, color, border: `1px solid ${border}` }}>
      {label}
    </span>
  );
}

const BRANCH_LABELS = {
  CSM: "CSE (AI & ML)",
  CSD: "CSE (Data Science)",
  CSC: "CSE (Cyber Security)",
  CIC: "CSE (IoT)",
  CSBS: "CS & Business Systems",
  CSIT: "CS & Information Technology",
  AID: "AI & Data Science",
  AIM: "AI & Machine Learning",
  ECM: "Electronics & Computer Engg",
  EIE: "Electronics & Instrumentation",
  IT: "Information Technology",
  CHEM: "Chemical Engineering",
  MINE: "Mining Engineering",
  MET: "Metallurgical Engineering",
  AERO: "Aeronautical Engineering",
  BT: "Biotechnology",
  PHARM: "Pharmaceutical Engineering",
  FT: "Food Technology",
  PET: "Petroleum Technology",
  CIVIL: "Civil Engineering",
  MECH: "Mechanical Engineering",
  EEE: "Electrical & Electronics Engg",
  ECE: "Electronics & Communication",
  CSE: "Computer Science Engineering",
};

export default function PredictorPage() {
  const [tab, setTab] = useState("rank");

  // Rank predictor state
  const [score, setScore] = useState("");
  const [category, setCategory] = useState("OC");
  const [rankResult, setRankResult] = useState(null);

  // College predictor state
  const [rank, setRank] = useState("");
  const [colCategory, setColCategory] = useState("OC");
  const [branch, setBranch] = useState("CSE");
  const [colResults, setColResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  // ── Rank prediction ───────────────────────────────────────────────────────
  const handlePredictRank = () => {
    const s = Number(score);
    if (isNaN(s) || s < 0 || s > 160) return;
    const generalRank = predictRank(s);
    const mult = CATEGORY_MULTIPLIERS[category] || 1;
    const catRank = Math.round(generalRank / mult);
    const percentile = ((1 - generalRank / TOTAL_CANDIDATES) * 100).toFixed(2);
    setRankResult({ generalRank, catRank, percentile, score: s, category });
  };

  // ── College prediction ────────────────────────────────────────────────────
  // Uses DIRECT per-category closing ranks – no multipliers needed.
  const handlePredictCollege = () => {
    const r = Number(rank);
    if (isNaN(r) || r < 1) return;

    const catKey = CATEGORY_TO_KEY[colCategory] || "OC";

    const results = COLLEGES
      .filter(c => c.branches[branch])
      .map(c => {
        const branchData = c.branches[branch];

        // Prefer real category closing rank; fall back to OC if unavailable
        const closing = branchData[catKey] ?? branchData["OC"] ?? null;
        if (closing == null) return null;

        const hasDirect = branchData[catKey] != null;  // was this real data or fallback?
        const ratio = r / closing;

        let chance;
        if (ratio <= 0.6) chance = "Safe";
        else if (ratio <= 0.85) chance = "Good";
        else if (ratio <= 1.0) chance = "Moderate";
        else if (ratio <= 1.2) chance = "Low";
        else chance = "Unlikely";

        return { ...c, closing, hasDirect, chance, ratio };
      })
      .filter(Boolean)
      .sort((a, b) => a.closing - b.closing);

    setColResults({ results, rank: r, branch, category: colCategory });
  };

  const copyResults = () => {
    if (!colResults) return;
    const text = colResults.results
      .slice(0, 10)
      .map((c, i) => `${i + 1}. ${c.name} (${c.place}) - ${c.chance}`)
      .join("\n");
    navigator.clipboard.writeText(`My TG EAMCET Predicted Colleges (${colResults.branch} / ${colResults.category}):\n${text}`);
    alert("Top 10 results copied to clipboard!");
  };

  const filteredResults = colResults?.results.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.place.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All" || c.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const chanceStyle = {
    Safe: { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
    Good: { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
    Moderate: { bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
    Low: { bg: "#fff7ed", color: "#ea580c", border: "#fed7aa" },
    Unlikely: { bg: "#fef2f2", color: "#dc2626", border: "#fecaca" },
  };

  return (
    <main style={{ fontFamily: "'Sora', sans-serif", paddingBottom: 40 }}>
      <style>{`
        @keyframes prFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .pr-fade { animation: prFadeUp 0.32s ease both; }
        .pr-input { width:100%; padding:11px 14px; border:1.5px solid #e2e8f0; border-radius:11px; font-size:14px; font-family:'Sora',sans-serif; color:#0f172a; background:#fafafa; outline:none; transition:all 0.18s; box-sizing:border-box; }
        .pr-input:focus { border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.1); background:#fff; }
        .pr-select { appearance:none; cursor:pointer; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:36px; }
        .pr-btn { width:100%; padding:13px; border:none; border-radius:13px; background:linear-gradient(135deg,#2563eb,#1d4ed8); color:#fff; font-size:14px; font-weight:700; cursor:pointer; font-family:'Sora',sans-serif; transition:all 0.2s; box-shadow:0 6px 18px rgba(37,99,235,0.25); display:flex; align-items:center; justify-content:center; gap:8px; box-sizing:border-box; }
        .pr-btn:hover { transform:translateY(-2px); box-shadow:0 10px 24px rgba(37,99,235,0.3); opacity:0.95; }
        .pr-btn:active { transform:translateY(0); }
        .pr-tab-container { display: inline-flex; gap: 4px; background: #f1f5f9; border-radius: 14px; padding: 4px; margin-bottom: 24px; }
        .pr-tab { flex:1; padding:10px 24px; border:none; border-radius:11px; cursor:pointer; font-family:'Sora',sans-serif; font-size:13px; font-weight:700; transition:all 0.18s; min-width: 160px; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .college-card { border-radius:14px; padding:16px 18px; border:1.5px solid #e2e8f0; background:#fff; transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .college-card:hover { transform:translateY(-3px) scale(1.005); border-color:#bfdbfe; box-shadow:0 12px 30px rgba(37,99,235,0.08); }
        .filter-chip { padding:6px 14px; border-radius:10px; font-size:12px; font-weight:600; cursor:pointer; transition:all 0.15s; border:1px solid #e2e8f0; background:#fff; color:#64748b; }
        .filter-chip.active { background:#eff6ff; border-color:#2563eb; color:#2563eb; }

        .pr-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
        .pr-form-grid { display: grid; grid-template-columns: 1.2fr 1fr 1.5fr auto; gap: 16px; align-items: end; }
        .rank-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px; }
        .pr-action-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 16px; }
        .pr-search-box { position: relative; width: 280px; }

        @media(max-width: 900px) {
          .pr-main-grid { grid-template-columns: 1fr; gap: 20px; }
          .pr-form-grid { grid-template-columns: 1fr 1fr; }
          .pr-form-grid .pr-btn { grid-column: span 2; }
        }
        @media(max-width: 600px) {
          .pr-form-grid { grid-template-columns: 1fr; }
          .pr-form-grid .pr-btn { grid-column: span 1; }
          .pr-tab-container { width: 100%; display: flex; flex-direction: column; gap: 6px; }
          .pr-tab { min-width: 0; width: 100%; }
          .rank-stat-grid { grid-template-columns: 1fr; }
          .pr-search-box { width: 100%; }
          .pr-action-bar { flex-direction: column; align-items: flex-start; }
          .header-row { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>

      {/* Header */}
      <div className="pr-fade" style={{ marginBottom: 24 }}>
        <div className="header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div>
            <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 24, fontWeight: 700, letterSpacing: -0.6 }}>College Predictor <span style={{ color: "#2563eb" }}>Pro</span></h1>
            <p style={{ margin: 0, color: "#64748b", fontSize: 13, maxWidth: 520 }}>
              Real 2024 TG EAMCET closing ranks for every category — 177+ colleges, 21 branches, OC / BC / SC / ST data.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pr-fade pr-tab-container">
        {[
          { id: "rank", label: "Rank Predictor", icon: <Target size={14} /> },
          { id: "college", label: "College Predictor", icon: <GraduationCap size={14} /> },
        ].map(t => (
          <button key={t.id} className="pr-tab" onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? "#ffffff" : "transparent",
              color: tab === t.id ? "#0f172a" : "#64748b",
              boxShadow: tab === t.id ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
            }}>
            <span style={{ color: tab === t.id ? "#2563eb" : "#94a3b8" }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── RANK PREDICTOR ── */}
      {tab === "rank" && (
        <div className="pr-fade">
          <div className="pr-main-grid">
            {/* Input Card */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "28px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#eff6ff", border: "1px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Target size={20} color="#2563eb" />
                </div>
                <div>
                  <div style={{ color: "#0f172a", fontSize: 15, fontWeight: 700 }}>Rank Estimator</div>
                  <div style={{ color: "#64748b", fontSize: 12 }}>Enter your primary score</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                    Total Score (0–160)
                  </label>
                  <input type="number" min="0" max="160" placeholder="e.g. 112"
                    value={score} onChange={e => setScore(e.target.value)}
                    className="pr-input" />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                    Caste Category
                  </label>
                  <select value={category} onChange={e => setCategory(e.target.value)}
                    className="pr-input pr-select">
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <button className="pr-btn" onClick={handlePredictRank}>
                  Calculate Predicted Rank <ChevronRight size={16} />
                </button>
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 10, background: "#f8fafc", padding: "12px", borderRadius: 12, border: "1px solid #f1f5f9" }}>
                <AlertCircle size={16} color="#94a3b8" style={{ marginTop: 2 }} />
                <p style={{ fontSize: 11, color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  Rank estimation uses historical 2024 normalization trends. Actual rank depends on current year's topper scores.
                </p>
              </div>
            </div>

            {/* Result Card */}
            {rankResult ? (
              <div style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)", borderRadius: 20, padding: "28px", color: "#fff", boxShadow: "0 10px 25px rgba(37,99,235,0.2)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "rgba(255,255,255,0.7)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={14} /> Predicted Outcome
                </div>

                <div className="rank-stat-grid">
                  {[
                    { label: "Your Score", value: `${rankResult.score}`, color: "#93c5fd" },
                    { label: "Percentile", value: `${rankResult.percentile}%`, color: "#6ee7b7" },
                    { label: "General Rank", value: formatRank(rankResult.generalRank), color: "#fde68a" },
                    { label: `${rankResult.category} Rank`, value: formatRank(rankResult.catRank), color: "#c4b5fd" },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "16px" }}>
                      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 24, fontWeight: 700, color, lineHeight: 1, marginBottom: 6 }}>{value}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontWeight: 600, textTransform: "uppercase" }}>{label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 16, padding: "16px", marginBottom: 20 }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", lineHeight: 1.7, fontWeight: 500 }}>
                    {rankResult.catRank <= 1000
                      ? "🏆 Elite Tier! Score 130+. You can aim for CSE in top Govt colleges like JNTUH or OU."
                      : rankResult.catRank <= 6000
                        ? "✨ Excellent! Score 100–129. Premium colleges like Vasavi, CBIT, and KMIT are within reach."
                        : rankResult.catRank <= 15000
                          ? "🚀 Great Rank. Score 80–99. GRIET, VNR, CVR, and many top private colleges are likely options."
                          : rankResult.catRank <= 40000
                            ? "📘 Good Rank. Score 60–79. Solid private colleges across Hyderabad and Warangal are available."
                            : "📗 Keep Going. Score below 60. Check the college predictor — many colleges are still accessible."}
                  </div>
                </div>

                <button onClick={() => { setRank(String(rankResult.catRank)); setColCategory(rankResult.category); setTab("college"); }}
                  style={{ width: "100%", padding: "14px", background: "#fff", border: "none", borderRadius: 14, color: "#2563eb", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "transform 0.2s" }}>
                  Explore Eligible Colleges <ChevronRight size={16} />
                </button>
              </div>
            ) : (
              <div style={{ background: "#f8faff", border: "2px dashed #e2e8f0", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 40px", gap: 16, textAlign: "center", minHeight: 400 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.03)" }}>
                  <TrendingDown size={32} color="#cbd5e1" />
                </div>
                <div>
                  <div style={{ color: "#64748b", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Ready to predict?</div>
                  <div style={{ color: "#94a3b8", fontSize: 13, maxWidth: 280, lineHeight: 1.6 }}>Enter your score to see your estimated rank and admission eligibility across all categories.</div>
                </div>
              </div>
            )}
          </div>

          {/* Reference Table */}
          <div style={{ marginTop: 24, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Award size={16} color="#64748b" />
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>
                2025 TS EAMCET Score vs Rank Reference
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 10 }}>
              {[
                { score: "155–160", rank: "Top 50" },
                { score: "150–154", rank: "51–200" },
                { score: "140–149", rank: "201–500" },
                { score: "130–139", rank: "501–1K" },
                { score: "120–129", rank: "1K–2K" },
                { score: "110–119", rank: "2K–4K" },
                { score: "100–109", rank: "4K–6K" },
                { score: "90–99", rank: "6K–10K" },
                { score: "80–89", rank: "10K–15K" },
                { score: "70–79", rank: "15K–25K" },
                { score: "60–69", rank: "25K–40K" },
                { score: "50–59", rank: "40K–50K" },
                { score: "40–49", rank: "50K–80K" },
                { score: "< 40", rank: "> 80K" },
              ].map(({ score: s, rank: r }) => (
                <div key={s} style={{ background: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: 12, padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, fontWeight: 700, color: "#2563eb" }}>{s}</span>
                  <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── COLLEGE PREDICTOR ── */}
      {tab === "college" && (
        <div className="pr-fade">
          {/* Main Controls */}
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "28px", marginBottom: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f0fdf4", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={20} color="#16a34a" />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 15, fontWeight: 700 }}>Eligibility Matcher</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>Real 2025 closing ranks — compared by your exact category</div>
              </div>
            </div>

            <div className="pr-form-grid">
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>Your Rank</label>
                <input type="number" min="1" placeholder="e.g. 15000"
                  value={rank} onChange={e => setRank(e.target.value)}
                  className="pr-input" />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>Category</label>
                <select value={colCategory} onChange={e => setColCategory(e.target.value)}
                  className="pr-input pr-select">
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>Preferred Branch</label>
                <select value={branch} onChange={e => setBranch(e.target.value)}
                  className="pr-input pr-select">
                  {BRANCHES.map(b => (
                    <option key={b} value={b}>{BRANCH_LABELS[b] || b}</option>
                  ))}
                </select>
              </div>
              <button className="pr-btn" onClick={handlePredictCollege}
                style={{ width: "auto", padding: "12px 32px", whiteSpace: "nowrap" }}>
                Find Colleges <Search size={16} />
              </button>
            </div>
          </div>

          {/* Results */}
          {colResults && (
            <div className="pr-fade">
              <div className="pr-action-bar">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["All", "Govt", "Private-Aided", "Private", "Deemed"].map(type => (
                    <button key={type} onClick={() => setTypeFilter(type)} className={`filter-chip ${typeFilter === type ? "active" : ""}`}>
                      {type}
                    </button>
                  ))}
                </div>
                <div className="pr-search-box">
                  <Search size={14} color="#94a3b8" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                  <input type="text" placeholder="Search college name..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                    style={{ width: "100%", padding: "10px 14px 10px 38px", borderRadius: 12, border: "1.5px solid #e2e8f0", fontSize: 13, outline: "none", fontFamily: "'Sora',sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              {/* Legend & Actions */}
              <div className="pr-action-bar" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "14px 20px", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>{filteredResults.length} Matches Found</div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {["Safe", "Good", "Moderate", "Low", "Unlikely"].map(l => (
                      <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: chanceStyle[l].border }} />
                        <span style={{ fontSize: 11, color: "#64748b" }}>{l}</span>
                      </div>
                    ))}
                  </div>
                  {/* Data quality note */}
                  <div style={{ fontSize: 10, color: "#94a3b8", fontStyle: "italic" }}>
                    ✦ = real {colResults.category} data &nbsp;◦ = OC fallback
                  </div>
                </div>
                <button onClick={copyResults} style={{ background: "transparent", border: "none", color: "#2563eb", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle size={14} /> Copy Top Results
                </button>
              </div>

              {/* College Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                {filteredResults.length > 0 ? filteredResults.map((col, i) => {
                  const cs = chanceStyle[col.chance];
                  const tc = TYPE_COLORS[col.type] || TYPE_COLORS["Private"];
                  return (
                    <div key={col.name + i} className="college-card" style={{ animationDelay: `${i * 0.03}s` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        {/* Status Icon */}
                        <div style={{ width: 44, height: 44, borderRadius: 14, background: cs.bg, border: `1.5px solid ${cs.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Building2 size={20} color={cs.color} />
                        </div>

                        {/* Info */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
                            <Chip label={col.type} {...tc} />
                            <Chip label={col.chance} bg={cs.bg} color={cs.color} border={cs.border} />
                            {/* Show if this is real category data or OC fallback */}
                            {col.hasDirect
                              ? <Chip label={`${colResults.category} data`} bg="#f0fdf4" color="#15803d" border="#bbf7d0" />
                              : <Chip label="OC fallback" bg="#fffbeb" color="#92400e" border="#fde68a" />
                            }
                          </div>
                          <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{col.name}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#64748b", fontSize: 11, fontWeight: 500 }}>
                            <MapPin size={12} /> {col.place}
                          </div>
                        </div>

                        {/* Cutoff */}
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>
                            {col.hasDirect ? colResults.category : "OC"} Closing
                          </div>
                          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{col.closing.toLocaleString()}</div>
                          <div style={{ fontSize: 10, color: cs.color, fontWeight: 700, marginTop: 2 }}>{col.ratio <= 1 ? "Eligible" : "Stretch"}</div>
                        </div>
                      </div>
                    </div>
                  );
                }) : (
                  <div style={{ padding: "40px", textAlign: "center", background: "#f8fafc", borderRadius: 16, border: "1px dashed #e2e8f0" }}>
                    <div style={{ color: "#94a3b8", fontSize: 14 }}>No colleges match your current search/filter.</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {!colResults && (
            <div style={{ background: "#f8faff", border: "2px dashed #e2e8f0", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", gap: 20, textAlign: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}>
                <GraduationCap size={40} color="#cbd5e1" />
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Discover Your Future College</div>
                <div style={{ color: "#94a3b8", fontSize: 14, maxWidth: 400, lineHeight: 1.7 }}>
                  177+ colleges, 21 branches, real 2024 closing ranks for OC / BC-A / BC-B / BC-C / BC-D / BC-E / SC / ST — no guesswork, actual allotment data.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

// Inline Search icon
function Search({ size, color, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
