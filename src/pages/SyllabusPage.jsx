import { useState } from "react";
import { Atom, FlaskConical, Compass } from "lucide-react";

function SyllabusPage() {
  const [active, setActive] = useState("Physics");

  const syllabus = {
    Physics: {
      color: "#2563eb",
      icon: <Atom size={20} color="#2563eb" />,
      units: [
        { name: "Physical World and Measurement", topics: ["Units and dimensions", "Dimensional analysis", "Significant figures"] },
        { name: "Kinematics", topics: ["Motion in straight line", "Projectile motion", "Circular motion", "Relative velocity"] },
        { name: "Laws of Motion", topics: ["Newton's laws", "Friction", "Circular dynamics", "Work–Energy theorem"] },
        { name: "Work, Energy and Power", topics: ["Work by constant/variable force", "Kinetic & potential energy", "Conservation of energy", "Collisions"] },
        { name: "Rotational Motion", topics: ["Torque & angular momentum", "Moment of inertia", "Rolling motion"] },
        { name: "Gravitation", topics: ["Kepler's laws", "Universal gravitation", "Escape velocity", "Satellites"] },
        { name: "Properties of Matter", topics: ["Elasticity", "Viscosity", "Surface tension", "Fluid statics & dynamics"] },
        { name: "Thermodynamics", topics: ["Laws of thermodynamics", "Carnot engine", "Heat transfer", "Specific heat"] },
        { name: "Waves & Oscillations", topics: ["SHM", "Wave motion", "Sound waves", "Doppler effect"] },
        { name: "Electrostatics", topics: ["Coulomb's law", "Electric field", "Potential", "Capacitors"] },
        { name: "Current Electricity", topics: ["Ohm's law", "Kirchhoff's laws", "Wheatstone bridge", "RC circuits"] },
        { name: "Magnetism", topics: ["Biot-Savart law", "Ampere's law", "Magnetic force", "EMF & induction"] },
        { name: "Optics", topics: ["Reflection", "Refraction", "Lenses", "Wave optics", "Diffraction"] },
        { name: "Modern Physics", topics: ["Photoelectric effect", "Bohr model", "Radioactivity", "Nuclear reactions"] },
        { name: "Semiconductors", topics: ["p-n junction", "Transistors", "Logic gates", "Communication systems"] },
      ],
    },
    Chemistry: {
      color: "#10b981",
      icon: <FlaskConical size={20} color="#10b981" />,
      units: [
        { name: "Basic Concepts", topics: ["Mole concept", "Atomic mass", "Stoichiometry", "Limiting reagent"] },
        { name: "Atomic Structure", topics: ["Quantum numbers", "Orbitals", "Electronic configuration", "Periodic trends"] },
        { name: "Chemical Bonding", topics: ["Ionic, covalent & metallic bonds", "VSEPR", "Hybridisation", "Molecular orbital theory"] },
        { name: "States of Matter", topics: ["Ideal gas law", "Real gases", "Liquids & solids", "Colligative properties"] },
        { name: "Thermochemistry", topics: ["Enthalpy", "Hess's law", "Bond energies", "Gibb's free energy"] },
        { name: "Equilibrium", topics: ["Law of mass action", "Kp & Kc", "Le-Chatelier's principle", "Ionic equilibrium"] },
        { name: "Redox & Electrochemistry", topics: ["Oxidation states", "Galvanic cells", "Nernst equation", "Electrolysis"] },
        { name: "Chemical Kinetics", topics: ["Rate laws", "Order of reaction", "Arrhenius equation", "Catalysis"] },
        { name: "Coordination Chemistry", topics: ["IUPAC nomenclature", "Isomerism", "Crystal field theory", "Stability constants"] },
        { name: "Organic: Basics", topics: ["IUPAC naming", "Isomerism", "Inductive & mesomeric effects", "Reaction intermediates"] },
        { name: "Organic: Reactions", topics: ["Halogenation", "Alcohols/Ethers", "Aldehydes/Ketones", "Carboxylic acids"] },
        { name: "Aromatic Chemistry", topics: ["Benzene structure", "EAS", "Phenols", "Diazonium salts"] },
        { name: "Biomolecules & Polymers", topics: ["Carbohydrates", "Proteins", "Nucleic acids", "Synthetic polymers"] },
        { name: "s & p-Block Elements", topics: ["Alkali metals", "Halogens", "Noble gases", "Oxoacids"] },
        { name: "d & f-Block, Metallurgy", topics: ["Transition metals", "Lanthanides", "Extraction of metals"] },
      ],
    },
    Mathematics: {
      color: "#f59e0b",
      icon: <Compass size={20} color="#f59e0b" />,
      units: [
        { name: "Sets, Relations & Functions", topics: ["Types of sets", "Functions & inverse", "Composition", "Real-valued functions"] },
        { name: "Algebra: Complex Numbers", topics: ["Argand plane", "Modulus & argument", "De Moivre's theorem"] },
        { name: "Algebra: Matrices", topics: ["Types of matrices", "Determinants", "Inverse", "Linear equations (Cramer)"] },
        { name: "Quadratic Equations", topics: ["Nature of roots", "Sum/product of roots", "Inequalities"] },
        { name: "Progressions & Series", topics: ["AP, GP, HP", "Sum of series", "Binomial theorem"] },
        { name: "Permutations & Combinations", topics: ["Fundamental principle", "nPr, nCr", "Circular arrangements"] },
        { name: "Probability", topics: ["Classical definition", "Conditional probability", "Bayes' theorem", "Distributions"] },
        { name: "Trigonometry", topics: ["Ratios & identities", "Multiple angles", "Inverse trig", "Heights & distances"] },
        { name: "Coordinate: Straight Lines", topics: ["Forms of lines", "Angle bisectors", "Distance formula"] },
        { name: "Coordinate: Circles, Conics", topics: ["Circle equation", "Tangents", "Parabola", "Ellipse", "Hyperbola"] },
        { name: "3D Geometry", topics: ["Direction cosines", "Line in 3D", "Plane equations", "Distance"] },
        { name: "Vectors", topics: ["Dot & cross product", "Scalar triple product", "Applications"] },
        { name: "Differential Calculus", topics: ["Limits & continuity", "Differentiation", "Rolle's & MVT", "Maxima/Minima"] },
        { name: "Integral Calculus", topics: ["Indefinite integrals", "Definite integrals", "Area under curves"] },
        { name: "Differential Equations", topics: ["Order & degree", "Variable separable", "Linear DE", "Exact DE"] },
      ],
    },
  };

  const subjects = Object.keys(syllabus);
  const { color, icon, units } = syllabus[active];

  return (
    <div>
      <style>{`
        @keyframes sylFadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .syl-fade { animation: sylFadeUp 0.32s ease both; }
        .syl-unit-card { background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:16px; transition:border-color 0.15s, background 0.15s; }
        .syl-unit-card:hover { background:#ffffff; }
        .syl-topic-pill { display:inline-block; background:#ffffff; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:11px; color:#334155; margin:3px 3px 0 0; }
        @media(max-width:700px){ .syl-grid { grid-template-columns:1fr !important; } }
      `}</style>

      {/* Header */}
      <div className="syl-fade" style={{ marginBottom: 22 }}>
        <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Syllabus</h1>
        <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Complete TG EAPCET chapter-by-chapter breakdown</p>
      </div>

      {/* Subject Tabs */}
      <div className="syl-fade" style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
        {subjects.map(s => {
          const isActive = s === active;
          const c = syllabus[s].color;
          return (
            <button key={s} onClick={() => setActive(s)} style={{ padding: "8px 18px", borderRadius: 22, border: `1px solid ${isActive ? c + "55" : "#ffffff"}`, background: isActive ? `${c}18` : "transparent", color: isActive ? c : "#64748b", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 6 }}>
              {syllabus[s].icon} {s}
            </button>
          );
        })}
      </div>

      {/* Stats Bar */}
      <div className="syl-fade" style={{ display: "flex", gap: 10, marginBottom: 18, background: `${color}10`, border: `1px solid ${color}28`, borderRadius: 12, padding: "10px 16px", alignItems: "center" }}>
        <span style={{ color, fontSize: 20 }}>{icon}</span>
        <div>
          <span style={{ color: "#0f172a", fontSize: 13, fontWeight: 700 }}>{active}</span>
          <span style={{ color: "#64748b", fontSize: 12, marginLeft: 8 }}>{units.length} units  •  {units.reduce((a, u) => a + u.topics.length, 0)} topics</span>
        </div>
      </div>

      {/* Units Grid */}
      <div className="syl-grid syl-fade" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
        {units.map((unit, i) => (
          <div key={i} className="syl-unit-card" style={{ animationDelay: `${i * 0.03}s` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, fontWeight: 700, color }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span style={{ color: "#0f172a", fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{unit.name}</span>
            </div>
            <div>
              {unit.topics.map((t, j) => (
                <span key={j} className="syl-topic-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SyllabusPage;
