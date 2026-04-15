// ============================================================
//  TG EAPCET 2024 – May 9th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24m3_1",
            q: "The potential energy of a spring is 1/2 kx². The work done to stretch it by x is:",
            options: ["1/2 kx²", "kx²", "2kx²", "kx"],
            ans: 0,
            topic: "Work, Energy & Power",
            difficulty: "Easy"
        },
        {
            id: "p24m3_2",
            q: "The dimensional formula of universal gravitational constant G is:",
            options: ["[M L T⁻²]", "[M⁻¹ L³ T⁻²]", "[M L² T⁻¹]", "[M L T⁻³]"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p24m3_3",
            q: "The time period of a satellite depends on:",
            options: ["Mass of satellite", "Radius of orbit", "Both", "None"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p24m3_4",
            q: "In Young's double slit experiment, the path difference for destructive interference is:",
            options: ["λ", "λ/2", "2λ", "λ/4"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_5",
            q: "The magnetic field due to a long straight wire at distance r is:",
            options: ["μ₀I/2πr", "μ₀I/4πr", "μ₀I/2r", "μ₀I/r"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m3_6",
            q: "The capacitance C of a capacitor depends on:",
            options: ["Charge", "Potential", "Area and distance", "Current"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_7",
            q: "The decay constant λ is related to half-life T½ as:",
            options: ["λ = T½", "λ = 0.693/T½", "λ = T½/0.693", "λ = 1/T½"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_8",
            q: "The centripetal acceleration is:",
            options: ["dv/dt", "v²/r", "Both", "None"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p24m3_9",
            q: "The resistivity ρ of a material is:",
            options: ["R A/l", "R l/A", "R A l", "R/l A"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24m3_10",
            q: "The speed of sound in air at 0°C is:",
            options: ["330 m/s", "332 m/s", "334 m/s", "336 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m3_11",
            q: "The time period of a simple pendulum is:",
            options: ["T = 2π √(l/g)", "T = 2π √(g/l)", "T = π √(l/g)", "T = π √(g/l)"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24m3_12",
            q: "The energy stored in a capacitor is:",
            options: ["CV", "(1/2)CV²", "CV²", "(1/2)CV"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_13",
            q: "The focal length of a convex lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_14",
            q: "The photoelectric effect shows that light behaves as:",
            options: ["Wave", "Particle", "Both", "None"],
            ans: 1,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_15",
            q: "The coefficient of static friction is:",
            options: ["μ_s = F/N", "μ_s = N/F", "μ_s = F × N", "μ_s = F + N"],
            ans: 0,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24m3_16",
            q: "The moment of inertia of a thin rod about its end is:",
            options: ["MR²/12", "MR²/3", "MR²/2", "MR²"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_17",
            q: "The kinetic theory of gases assumes molecules are:",
            options: ["Stationary", "In random motion", "Arranged in order", "At same speed"],
            ans: 1,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p24m3_18",
            q: "The magnetic field inside a solenoid is:",
            options: ["Zero", "Non-uniform", "Uniform", "Depends on length"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m3_19",
            q: "The resistance of a wire depends on:",
            options: ["Length", "Area", "Material", "All of these"],
            ans: 3,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24m3_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m3_21",
            q: "The radius of Bohr's orbit is proportional to:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p24m3_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24m3_23",
            q: "The principle of superposition is used in:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m3_24",
            q: "The self-inductance of a coil is measured in:",
            options: ["Volt", "Ampere", "Henry", "Coulomb"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24m3_25",
            q: "The refractive index of water is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_27",
            q: "The work function of a metal is 4 eV. The threshold wavelength is:",
            options: ["310 nm", "400 nm", "500 nm", "620 nm"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Hard"
        },
        {
            id: "p24m3_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_29",
            q: "The magnetic moment of a current loop is:",
            options: ["IA", "I²A", "A/I", "I/A"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m3_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m3_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p24m3_33",
            q: "The Doppler effect is observed in:",
            options: ["Light", "Sound", "Both", "Neither"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m3_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_35",
            q: "The half-life of a radioactive substance is 5 days. After 15 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24m3_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24m3_38",
            q: "The critical angle for glass-air interface is:",
            options: ["42°", "45°", "48°", "50°"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Medium"
        },
        {
            id: "p24m3_39",
            q: "Nuclear fusion occurs at:",
            options: ["Low temperature", "High temperature", "Room temperature", "Zero temperature"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m3_40",
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
            id: "c24m3_1",
            q: "The number of moles in 2.24 L of CO₂ at STP is:",
            options: ["0.1", "0.2", "0.5", "1"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24m3_2",
            q: "The oxidation number of S in SO₃ is:",
            options: ["+2", "+4", "+6", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24m3_3",
            q: "The shape of CO₂ molecule is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24m3_4",
            q: "The pH of 10⁻⁵ M H⁺ is:",
            options: ["1", "2", "3", "5"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m3_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m3_6",
            q: "The IUPAC name of CH₃-CH₂-CH₂-CH₂-CH₃ is:",
            options: ["Pentane", "Butane", "Propane", "Ethane"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_7",
            q: "The number of π bonds in C₃H₄ is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_8",
            q: "The element with atomic number 15 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24m3_9",
            q: "The enthalpy of fusion is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24m3_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24m3_11",
            q: "The bond order of Li₂ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24m3_12",
            q: "The solubility product of CaCO₃ is 4.5 × 10⁻⁹. Its solubility is:",
            options: ["6.7 × 10⁻³", "4.5 × 10⁻³", "2.3 × 10⁻³", "1.1 × 10⁻³"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24m3_13",
            q: "The isomerism shown by C₄H₉OH is:",
            options: ["Structural", "Geometrical", "Optical", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c24m3_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24m3_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24m3_18",
            q: "The pKa of H₂CO₃ is:",
            options: ["6.37", "7.0", "9.2", "14.0"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m3_19",
            q: "The number of atoms in SC unit cell is:",
            options: ["1", "2", "4", "8"],
            ans: 0,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24m3_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24m3_22",
            q: "The enthalpy change for the reaction 2C + O₂ → 2CO is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24m3_23",
            q: "The shape of ICl₃ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m3_24",
            q: "The equivalent weight of Zn in ZnSO₄ is:",
            options: ["32.5", "65", "130", "16.25"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24m3_25",
            q: "The IUPAC name of CH₃-CH=CH₂ is:",
            options: ["Propene", "Propylene", "1-Propene", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24m3_27",
            q: "The electronegativity increases across a period due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Both", "None"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24m3_28",
            q: "The rate constant of a first order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m3_29",
            q: "The number of lone pairs in NH₃ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24m3_30",
            q: "The pH of 10⁻⁶ M HCl is:",
            options: ["1", "6", "7", "8"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m3_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_32",
            q: "The molecular formula of naphthalene is:",
            options: ["C₆H₆", "C₈H₈", "C₁₀H₈", "C₁₂H₁₀"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m3_33",
            q: "The Gibbs free energy change is negative for:",
            options: ["Spontaneous reaction", "Non-spontaneous reaction", "Equilibrium", "All reactions"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24m3_34",
            q: "The number of unpaired electrons in CO is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m3_35",
            q: "The equivalent weight of H₂C₂O₄ in acidic medium is:",
            options: ["45", "90", "63", "31.5"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c24m3_36",
            q: "The number of carbon atoms in oleic acid is:",
            options: ["16", "17", "18", "19"],
            ans: 2,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24m3_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m3_38",
            q: "The hybridization of carbon in CH₃⁺ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m3_39",
            q: "The solubility of a gas in liquid decreases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 0,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24m3_40",
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
            id: "m24m3_1",
            q: "The derivative of sec x is:",
            options: ["sec x tan x", "-sec x tan x", "cos x", "sin x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_2",
            q: "The integral of 6x⁵ dx is:",
            options: ["x⁶", "x⁶ + C", "6x⁶", "6x⁶ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_3",
            q: "The roots of x² - 10x + 25 = 0 are:",
            options: ["5, 5", "2, 8", "-5, -5", "5, -5"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_4",
            q: "The area of a circle with radius 6 cm is:",
            options: ["36π cm²", "72π cm²", "108π cm²", "144π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_5",
            q: "The probability of rolling a 7 on a die is:",
            options: ["0", "1/6", "1/7", "1"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24m3_6",
            q: "The equation of line passing through (0,0) with slope 1/3 is:",
            options: ["y = x", "y = 3x", "y = x/3", "y = 2x"],
            ans: 2,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24m3_7",
            q: "The value of log₇ 49 is:",
            options: ["2", "7", "14", "49"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24m3_8",
            q: "The number of ways to arrange 7 distinct objects is:",
            options: ["7", "49", "5040", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_9",
            q: "The distance between (5,6) and (8,10) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_10",
            q: "The limit of (x² - 36)/(x - 6) as x approaches 6 is:",
            options: ["0", "6", "12", "36"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m3_11",
            q: "The integral of 1/x² dx is:",
            options: ["-1/x", "-1/x + C", "ln x", "ln x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_12",
            q: "The sum of first 8 natural numbers is:",
            options: ["28", "32", "36", "40"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m3_13",
            q: "The equation of circle with center (4,5) and radius 3 is:",
            options: ["(x-4)² + (y-5)² = 9", "(x+4)² + (y+5)² = 9", "x² + y² = 9", "(x-4)² + (y-5)² = 3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_14",
            q: "The derivative of e⁴x is:",
            options: ["e⁴x", "4e⁴x", "e^x", "4e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_15",
            q: "The angle between vectors 5i + 12j and 12i + 5j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24m3_16",
            q: "The coefficient of x³ in (1 + x)⁸ is:",
            options: ["8", "28", "56", "70"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24m3_17",
            q: "The domain of f(x) = √(x + 5) is:",
            options: ["x ≥ -5", "x > -5", "x ≤ -5", "x < -5"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m3_18",
            q: "The period of sin 5x is:",
            options: ["π", "π/5", "2π", "2π/5"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_19",
            q: "The number of solutions of sin x = 0.6 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_20",
            q: "The determinant of [[6,7],[4,5]] is:",
            options: ["-2", "2", "11", "23"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m3_21",
            q: "The area under the curve y = x² from x = 3 to x = 5 is:",
            options: ["32/3", "40/3", "48/3", "152/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_22",
            q: "The mean of 5, 7, 9 is:",
            options: ["6", "7", "8", "9"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m3_23",
            q: "The derivative of x² e^x is:",
            options: ["2x e^x", "x² e^x", "2x e^x + x² e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_24",
            q: "The angle subtended by an arc of length 6r at center is:",
            options: ["1 radian", "6 radians", "π radians", "π/6 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_26",
            q: "The solution of dy/dx = 4x³ is:",
            options: ["y = x⁴", "y = x⁴ + C", "y = 4x⁴", "y = 4x⁴ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_27",
            q: "The number of diagonals in a quadrilateral is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_30",
            q: "The number of ways to choose 4 items from 7 is:",
            options: ["21", "25", "30", "35"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_31",
            q: "The modulus of 6 - 8i is:",
            options: ["6", "8", "10", "14"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24m3_32",
            q: "The derivative of x⁷ is:",
            options: ["x⁶", "7x⁶", "7x⁵", "x⁸"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_33",
            q: "The area of triangle with vertices (4,5), (7,9), (10,5) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m3_34",
            q: "The value of lim (x→0) (1 - cos 2x)/x² is:",
            options: ["0", "1", "2", "4"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24m3_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_36",
            q: "The probability of getting a number greater than 4 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24m3_37",
            q: "The slope of y = 4 is:",
            options: ["0", "4", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24m3_38",
            q: "The value of log₁₀ 100000 is:",
            options: ["4", "5", "6", "10"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24m3_39",
            q: "The number of ways to arrange letters of 'COMMITTEE' is:",
            options: ["22680", "45360", "90720", "181440"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m24m3_40",
            q: "The distance from (4,6) to (8,10) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_41",
            q: "The limit of (4x + 5)/(2x + 3) as x → ∞ is:",
            options: ["0", "1", "2", "4/3"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m3_42",
            q: "The integral of e³x dx is:",
            options: ["e³x", "e³x/3", "(1/3)e³x", "(1/3)e³x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_43",
            q: "The sum of infinite GP 1/5 + 1/25 + 1/125 + ... is:",
            options: ["1/5", "1/4", "1/3", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m3_44",
            q: "The center of circle x² + y² - 12x + 10y + 25 = 0 is:",
            options: ["(6, -5)", "(-6, 5)", "(6, 5)", "(-6, -5)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m3_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_46",
            q: "The dot product of 4i + 5j and 5i + 4j is:",
            options: ["20", "25", "36", "41"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24m3_47",
            q: "The general term of (a + b)⁷ is:",
            options: ["⁷Cᵣ aʳ b⁷⁻ʳ", "⁷Cᵣ a⁷⁻ʳ bʳ", "⁷Cᵣ a⁷ bʳ", "⁷Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24m3_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m3_49",
            q: "The value of sin 270° is:",
            options: ["0", "1/2", "-1", "1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_51",
            q: "The rank of matrix [[3,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m3_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_53",
            q: "The median of 4, 6, 8, 10, 12 is:",
            options: ["6", "7", "8", "10"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m3_54",
            q: "The derivative of x⁴ ln x is:",
            options: ["4x³ ln x", "x⁴/x", "4x³ ln x + 4x³", "4x³ ln x + x⁴"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_55",
            q: "The angle in radian for 135° is:",
            options: ["π/4", "π/2", "3π/4", "π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_57",
            q: "The solution of d²y/dx² = 9 is:",
            options: ["y = (9/2)x²", "y = (9/2)x² + C₁x + C₂", "y = 9x²", "y = 9x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_59",
            q: "The value of ∫_{-4}^3 x dx is:",
            options: ["-5/2", "5/2", "11/2", "13/2"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24m3_61",
            q: "The number of ways to choose 6 items from 9 is:",
            options: ["54", "64", "74", "84"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m3_62",
            q: "The argument of 4 + 3i is:",
            options: ["tan⁻¹(3/4)", "tan⁻¹(4/3)", "sin⁻¹(3/5)", "cos⁻¹(4/5)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24m3_63",
            q: "The derivative of x⁹ is:",
            options: ["x⁸", "9x⁸", "9x⁷", "x¹⁰"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_64",
            q: "The area of parallelogram with vectors 5i + 6j and 6i + 5j is:",
            options: ["11", "25", "36", "61"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24m3_65",
            q: "The value of lim (x→∞) (x³ + 2)/(x³ + 3) is:",
            options: ["0", "1", "2", "∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m3_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_67",
            q: "The sum of AP 6, 10, 14, 18, 22 is:",
            options: ["50", "55", "60", "70"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m3_68",
            q: "The radius of circle x² + y² - 6x + 10y + 9 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m3_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_70",
            q: "The cross product of k × i is:",
            options: ["0", "1", "-1", "-j"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24m3_71",
            q: "The middle term in (x + y)¹² is:",
            options: ["66 x⁶ y⁶", "132 x⁶ y⁶", "220 x⁶ y⁶", "495 x⁶ y⁶"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24m3_72",
            q: "The domain of f(x) = 1/(x² - 9) is:",
            options: ["R", "R - {3}", "R - {-3, 3}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m3_73",
            q: "The value of cos 120° is:",
            options: ["0", "1/2", "-1/2", "√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_74",
            q: "The number of solutions of tan x = 3 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m3_76",
            q: "The area under y = 5x from 0 to 1 is:",
            options: ["2.5", "3", "4", "5"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m3_77",
            q: "The mode of 5, 6, 6, 7, 8, 8, 8 is:",
            options: ["5", "6", "7", "8"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m3_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m3_79",
            q: "The angle in degrees for 7π/6 radians is:",
            options: ["210°", "225°", "240°", "270°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m3_80",
            q: "The period of csc x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;