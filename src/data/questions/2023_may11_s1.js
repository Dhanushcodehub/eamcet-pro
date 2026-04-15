// ============================================================
//  TG EAMCET 2023 – May 11th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p23m_1",
            q: "The dimensional formula of impulse is:",
            options: ["[M L T⁻¹]", "[M L T⁻²]", "[M L² T⁻¹]", "[M L⁻¹ T⁻²]"],
            ans: 0,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p23m_2",
            q: "A body moves with decreasing speed. Its acceleration is:",
            options: ["Positive", "Negative", "Zero", "Constant"],
            ans: 1,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p23m_3",
            q: "The orbital velocity of a satellite orbiting at height h above Earth is:",
            options: ["√(GM/R)", "√(GM/(R+h))", "√(GM/(2R+h))", "√(GM/(R+2h))"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p23m_4",
            q: "In Young's double slit experiment, if the distance between slits increases, the fringe width:",
            options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m_5",
            q: "The magnetic field due to a straight wire at a point depends on:",
            options: ["Current only", "Distance only", "Both current and distance", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m_6",
            q: "The potential energy of a system of charges depends on:",
            options: ["Magnitude of charges", "Distance between charges", "Both A and B", "Medium only"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m_7",
            q: "The activity of a radioactive sample reduces to 1/128 of initial value in:",
            options: ["5 half-lives", "6 half-lives", "7 half-lives", "8 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m_8",
            q: "The banking angle θ for a vehicle on a curved road depends on:",
            options: ["Speed only", "Radius only", "Both speed and radius", "Mass of vehicle"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p23m_9",
            q: "The resistance of a conductor is doubled when:",
            options: ["Length is doubled", "Area is halved", "Both A and B", "Temperature increases"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23m_10",
            q: "The speed of sound in air at 30°C is approximately:",
            options: ["349 m/s", "351 m/s", "353 m/s", "355 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m_11",
            q: "The time period of a simple pendulum is proportional to:",
            options: ["√l", "l", "1/√l", "1/l"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p23m_12",
            q: "The capacitance of a capacitor increases if:",
            options: ["Dielectric constant increases", "Distance between plates increases", "Area decreases", "Charge decreases"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m_13",
            q: "The focal length of a convex lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m_14",
            q: "The de Broglie wavelength λ = h/p, where p is:",
            options: ["Mass", "Momentum", "Energy", "Velocity"],
            ans: 1,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m_15",
            q: "The static friction acts when:",
            options: ["Body is at rest", "Body is in motion", "Body is accelerating", "Body is decelerating"],
            ans: 0,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p23m_16",
            q: "The moment of inertia of a ring about its axis is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23m_17",
            q: "The kinetic theory of gases assumes that molecules have:",
            options: ["Same mass", "Different mass", "No mass", "Infinite mass"],
            ans: 0,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p23m_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m_19",
            q: "The resistivity of a material is measured in:",
            options: ["Ohm", "Ohm-meter", "Siemens", "Farad"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23m_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m_21",
            q: "The energy levels in hydrogen atom are given by:",
            options: ["E_n ∝ n", "E_n ∝ n²", "E_n ∝ 1/n", "E_n ∝ 1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p23m_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23m_23",
            q: "The principle of superposition is used in:",
            options: ["Light waves", "Sound waves", "Both", "None"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m_24",
            q: "The self-inductance depends on:",
            options: ["Current", "Voltage", "Geometry", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p23m_25",
            q: "The refractive index of water is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p23m_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p23m_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p23m_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23m_32",
            q: "Mutual inductance between two coils depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p23m_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m_35",
            q: "The half-life of a radioactive substance is 4 days. After 16 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p23m_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23m_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m_40",
            q: "The SI unit of electric field is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Joule"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c23m_1",
            q: "The number of moles in 4.48 L of CO at STP is:",
            options: ["0.2", "0.4", "0.1", "0.8"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23m_2",
            q: "The oxidation state of Mn in MnO₂ is:",
            options: ["+2", "+3", "+4", "+7"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23m_3",
            q: "The shape of NH₄⁺ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23m_4",
            q: "The pH of 10⁻⁶ M H⁺ is:",
            options: ["1", "2", "3", "6"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂OH is:",
            options: ["Pentanol", "Butanol", "Propanol", "Ethanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_7",
            q: "The number of σ bonds in ethane is:",
            options: ["6", "7", "8", "9"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_8",
            q: "The element with atomic number 17 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c23m_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23m_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23m_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m_12",
            q: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility is:",
            options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "3.6 × 10⁻⁵", "7.2 × 10⁻⁵"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c23m_13",
            q: "The isomerism shown by C₄H₈ is:",
            options: ["Structural", "Geometrical", "Optical", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_14",
            q: "The molecular formula of chlorophyll is:",
            options: ["C₅₅H₇₂O₅N₄Mg", "C₅₅H₇₂O₆N₄Mg", "C₅₅H₇₂O₇N₄Mg", "C₅₅H₇₂O₈N₄Mg"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c23m_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c23m_17",
            q: "The magnetic moment of Ti²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 1,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c23m_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23m_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23m_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23m_23",
            q: "The shape of I₃⁻ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m_24",
            q: "The equivalent weight of Zn in ZnSO₄ is:",
            options: ["32.5", "65", "130", "16.25"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23m_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23m_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c23m_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23m_30",
            q: "The pH of 10⁻⁸ M HCl is:",
            options: ["1", "6", "7", "8"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23m_34",
            q: "The number of unpaired electrons in CO is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c23m_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23m_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c23m_40",
            q: "The number of isomers of C₆H₁₄ is:",
            options: ["4", "5", "6", "7"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m23m_1",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_2",
            q: "The integral of 9x⁸ dx is:",
            options: ["x⁹", "x⁹ + C", "9x⁹", "9x⁹ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_3",
            q: "The roots of x² - 16x + 64 = 0 are:",
            options: ["8, 8", "4, 12", "-8, -8", "8, -8"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m_4",
            q: "The area of a circle with radius 9 cm is:",
            options: ["81π cm²", "162π cm²", "243π cm²", "324π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_5",
            q: "The probability of getting a 4 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23m_6",
            q: "The equation of line with slope 3/4 and y-intercept 5 is:",
            options: ["y = 3x", "y = 3x + 5", "y = 4x + 3", "y = 3x - 5"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23m_7",
            q: "The value of log₁₁ 121 is:",
            options: ["2", "3", "4", "11"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23m_8",
            q: "The number of ways to arrange 10 distinct objects is:",
            options: ["10", "100", "3628800", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m_9",
            q: "The distance between (8,9) and (11,13) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_10",
            q: "The limit of (x² - 100)/(x - 10) as x approaches 10 is:",
            options: ["0", "10", "20", "100"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_12",
            q: "The sum of first 11 natural numbers is:",
            options: ["55", "60", "65", "66"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m_13",
            q: "The equation of circle with center (7,8) and radius 6 is:",
            options: ["(x-7)² + (y-8)² = 36", "(x+7)² + (y+8)² = 36", "x² + y² = 36", "(x-7)² + (y-8)² = 6"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_14",
            q: "The derivative of e⁹x is:",
            options: ["e⁹x", "9e⁹x", "e^x", "9e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_15",
            q: "The angle between vectors 7i + 8j and 8i + 7j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23m_16",
            q: "The coefficient of x⁷ in (1 + x)¹¹ is:",
            options: ["11", "77", "330", "462"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23m_17",
            q: "The domain of f(x) = √(x + 8) is:",
            options: ["x ≥ -8", "x > -8", "x ≤ -8", "x < -8"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m_18",
            q: "The period of sin 8x is:",
            options: ["π", "π/8", "2π", "2π/8"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_19",
            q: "The number of solutions of sin x = 0.75 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_20",
            q: "The determinant of [[9,10],[7,8]] is:",
            options: ["2", "8", "14", "32"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m_21",
            q: "The area under the curve y = x² from x = 6 to x = 8 is:",
            options: ["32/3", "40/3", "48/3", "224/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_22",
            q: "The mean of 8, 10, 12 is:",
            options: ["9", "10", "11", "12"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m_23",
            q: "The derivative of x⁵ e^x is:",
            options: ["5x⁴ e^x", "x⁵ e^x", "5x⁴ e^x + x⁵ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_24",
            q: "The angle subtended by an arc of length 9r at center is:",
            options: ["1 radian", "9 radians", "π radians", "π/9 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_26",
            q: "The solution of dy/dx = 7x⁶ is:",
            options: ["y = x⁷", "y = x⁷ + C", "y = 7x⁷", "y = 7x⁷ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_30",
            q: "The number of ways to choose 7 items from 9 is:",
            options: ["36", "42", "48", "56"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m_31",
            q: "The modulus of 9 - 12i is:",
            options: ["9", "12", "15", "21"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23m_32",
            q: "The derivative of x¹⁰ is:",
            options: ["x⁹", "10x⁹", "10x⁸", "x¹¹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_33",
            q: "The area of triangle with vertices (7,8), (10,12), (13,8) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m_34",
            q: "The value of lim (x→0) (sin 6x)/x is:",
            options: ["0", "1", "6", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23m_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_36",
            q: "The probability of getting a perfect square on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23m_37",
            q: "The slope of y = 7 is:",
            options: ["0", "7", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23m_38",
            q: "The value of log₁₀ 10000000 is:",
            options: ["6", "7", "8", "10"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23m_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m23m_40",
            q: "The distance from (7,9) to (11,13) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_41",
            q: "The limit of (7x + 8)/(5x + 6) as x → ∞ is:",
            options: ["0", "1", "7/5", "8/6"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m_42",
            q: "The integral of e¹⁰x dx is:",
            options: ["e¹⁰x", "e¹⁰x/10", "(1/10)e¹⁰x", "(1/10)e¹⁰x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_43",
            q: "The sum of infinite GP 1/8 + 1/64 + 1/512 + ... is:",
            options: ["1/8", "1/7", "1/6", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m_44",
            q: "The center of circle x² + y² - 18x + 16y + 25 = 0 is:",
            options: ["(9, -8)", "(-9, 8)", "(9, 8)", "(-9, -8)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_46",
            q: "The dot product of 8i + 10j and 10i + 8j is:",
            options: ["80", "100", "164", "180"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23m_47",
            q: "The general term of (a + b)¹⁰ is:",
            options: ["¹⁰Cᵣ aʳ b¹⁰⁻ʳ", "¹⁰Cᵣ a¹⁰⁻ʳ bʳ", "¹⁰Cᵣ a¹⁰ bʳ", "¹⁰Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23m_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m_49",
            q: "The value of sin 0° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_51",
            q: "The rank of matrix [[6,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_53",
            q: "The median of 7, 9, 11, 13, 15 is:",
            options: ["9", "10", "11", "13"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m_54",
            q: "The derivative of x⁷ ln x is:",
            options: ["7x⁶ ln x", "x⁷/x", "7x⁶ ln x + 7x⁶", "7x⁶ ln x + x⁷"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_55",
            q: "The angle in radian for 210° is:",
            options: ["π/3", "π/2", "7π/6", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_57",
            q: "The solution of d²y/dx² = 18 is:",
            options: ["y = 9x²", "y = 9x² + C₁x + C₂", "y = 18x²", "y = 18x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_59",
            q: "The value of ∫_{-7}^6 x dx is:",
            options: ["-9.5", "9.5", "19.5", "21.5"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m23m_61",
            q: "The number of ways to choose 8 items from 11 is:",
            options: ["165", "180", "195", "210"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m_62",
            q: "The argument of 7 + 10i is:",
            options: ["tan⁻¹(7/10)", "tan⁻¹(10/7)", "sin⁻¹(7/√149)", "cos⁻¹(10/√149)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23m_63",
            q: "The derivative of x¹³ is:",
            options: ["x¹²", "13x¹²", "13x¹¹", "x¹⁴"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_64",
            q: "The area of parallelogram with vectors 9i + 10j and 10i + 9j is:",
            options: ["18", "25", "81", "181"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23m_65",
            q: "The value of lim (x→∞) (x⁶ + 6)/(x⁶ + 7) is:",
            options: ["0", "1", "6", "7"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_67",
            q: "The sum of AP 9, 13, 17, 21, 25 is:",
            options: ["65", "70", "75", "85"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m_68",
            q: "The radius of circle x² + y² - 12x + 16y + 15 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_70",
            q: "The cross product of k × j is:",
            options: ["0", "1", "-1", "i"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23m_71",
            q: "The middle term in (x + y)¹⁸ is:",
            options: ["1330 x⁹ y⁹", "24310 x⁹ y⁹", "48620 x⁹ y⁹", "92378 x⁹ y⁹"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m23m_72",
            q: "The domain of f(x) = 1/(x² - 36) is:",
            options: ["R", "R - {6}", "R - {-6, 6}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m_73",
            q: "The value of cos 225° is:",
            options: ["0", "1/2", "-1/2", "-√2/2"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_74",
            q: "The number of solutions of tan x = 6 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m_76",
            q: "The area under y = 8x from 0 to 1 is:",
            options: ["4", "5", "6", "8"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_77",
            q: "The mode of 8, 9, 9, 10, 11, 11, 11 is:",
            options: ["8", "9", "10", "11"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m_79",
            q: "The angle in degrees for 15π/8 radians is:",
            options: ["337.5°", "315°", "292.5°", "270°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;