// ============================================================
//  TG EAPCET 2024 – May 8th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24m_1",
            q: "The work done by a force F in displacing a body through distance s at angle θ is:",
            options: ["Fs", "F s cos θ", "F s sin θ", "F/s"],
            ans: 1,
            topic: "Work, Energy & Power",
            difficulty: "Easy"
        },
        {
            id: "p24m_2",
            q: "The dimensional formula of coefficient of viscosity is:",
            options: ["[M L T⁻¹]", "[M L⁻¹ T⁻¹]", "[M L T⁻²]", "[M⁰ L⁰ T⁰]"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p24m_3",
            q: "The orbital velocity of a satellite depends on:",
            options: ["Mass of planet only", "Radius of orbit only", "Mass of planet and radius of orbit", "Mass of satellite"],
            ans: 2,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p24m_4",
            q: "The minimum distance between object and its real image in a concave mirror is:",
            options: ["f", "2f", "4f", "Zero"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Medium"
        },
        {
            id: "p24m_5",
            q: "The magnetic field at a point due to a long straight wire carrying current I at distance r is:",
            options: ["μ₀I/2πr", "μ₀I/4πr", "μ₀I/2r", "μ₀I/r"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m_6",
            q: "The electric potential at a point due to a point charge is:",
            options: ["kQ/r", "kQ/r²", "kQ²/r", "kQ/r³"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m_7",
            q: "The activity of a radioactive sample decreases to 1/8 of its initial value in:",
            options: ["1 half-life", "2 half-lives", "3 half-lives", "4 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m_8",
            q: "The angular velocity of Earth is:",
            options: ["2π rad/day", "π rad/day", "2π/24 rad/hour", "π/12 rad/hour"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Medium"
        },
        {
            id: "p24m_9",
            q: "The current through a conductor is doubled. The drift velocity becomes:",
            options: ["Half", "Same", "Double", "Four times"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24m_10",
            q: "The speed of sound in air at 20°C is approximately:",
            options: ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m_11",
            q: "The time period of a simple pendulum does not depend on:",
            options: ["Length", "Mass", "Acceleration due to gravity", "Amplitude"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24m_12",
            q: "The energy stored in a capacitor when charged to V volts is:",
            options: ["CV²", "(1/2)CV²", "CV", "(1/2)CV"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m_13",
            q: "A lens has power +2D. It is:",
            options: ["Concave", "Convex", "Plano-concave", "Plano-convex"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m_14",
            q: "The rest mass of photon is:",
            options: ["Zero", "Equal to electron mass", "Infinite", "Depends on frequency"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m_15",
            q: "The coefficient of friction is:",
            options: ["Always less than 1", "Always greater than 1", "Can be greater than 1", "Zero"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24m_16",
            q: "The moment of inertia of a thin rod about its center is:",
            options: ["MR²/12", "MR²/3", "MR²/2", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24m_17",
            q: "The average kinetic energy of gas molecules is proportional to:",
            options: ["T", "T²", "√T", "1/T"],
            ans: 0,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p24m_18",
            q: "The magnetic field inside a long solenoid carrying current is:",
            options: ["Zero", "Non-uniform", "Uniform", "Depends on length"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m_19",
            q: "The resistivity of a conductor depends on:",
            options: ["Length", "Area", "Material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24m_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24m_21",
            q: "The radius of Bohr's orbit is proportional to:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p24m_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24m_23",
            q: "Diffraction is more pronounced when:",
            options: ["Wavelength > slit width", "Wavelength < slit width", "Wavelength = slit width", "No relation"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m_24",
            q: "The self-inductance of a coil is measured in:",
            options: ["Volt", "Ampere", "Henry", "Coulomb"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24m_25",
            q: "The critical angle for glass-air interface is approximately:",
            options: ["42°", "45°", "48°", "50°"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m_26",
            q: "Nuclear fission was discovered by:",
            options: ["Rutherford", "Bohr", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m_27",
            q: "The stopping potential in photoelectric effect depends on:",
            options: ["Intensity", "Frequency", "Both", "None"],
            ans: 1,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p24m_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p24m_29",
            q: "The pole strength of a magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24m_30",
            q: "The velocity of electromagnetic waves is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24m_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p24m_33",
            q: "The Doppler effect is maximum when source and observer move:",
            options: ["Towards each other", "Away from each other", "Perpendicular", "At same speed"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24m_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24m_35",
            q: "The half-life of a radioactive substance is 4 days. After 12 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24m_37",
            q: "The power factor can be:",
            options: ["Greater than 1", "Equal to 1", "Less than 1", "All of these"],
            ans: 3,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24m_38",
            q: "Total internal reflection occurs when light travels from:",
            options: ["Air to glass", "Glass to air", "Air to water", "Water to air"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24m_39",
            q: "The energy released in nuclear fission comes from:",
            options: ["Mass defect", "Kinetic energy", "Potential energy", "Heat energy"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24m_40",
            q: "The SI unit of electric field intensity is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Joule"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c24m_1",
            q: "The number of moles in 44.8 L of CO₂ at STP is:",
            options: ["1", "2", "0.5", "4"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24m_2",
            q: "The oxidation state of Mn in KMnO₄ is:",
            options: ["+2", "+4", "+6", "+7"],
            ans: 3,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24m_3",
            q: "The geometry of NH₃ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 3,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24m_4",
            q: "The pH of 0.01 M NaOH is:",
            options: ["1", "2", "12", "13"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m_5",
            q: "The rate of reaction increases with increase in:",
            options: ["Temperature", "Concentration", "Catalyst", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m_6",
            q: "The IUPAC name of CH₃CH₂CH₂OH is:",
            options: ["Ethanol", "Propanol", "Butanol", "Methanol"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_7",
            q: "The number of π bonds in C₆H₆ is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_8",
            q: "The element with highest electronegativity is:",
            options: ["F", "Cl", "Br", "I"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24m_9",
            q: "The enthalpy of vaporization is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24m_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24m_11",
            q: "The bond order of H₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m_12",
            q: "The solubility product of Ag₂CrO₄ is 1.1 × 10⁻¹². Its solubility is:",
            options: ["1.1 × 10⁻⁴", "6.5 × 10⁻⁵", "1.3 × 10⁻⁴", "2.2 × 10⁻⁴"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24m_13",
            q: "The isomerism shown by C₄H₈ is:",
            options: ["Structural", "Geometrical", "Optical", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c24m_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_16",
            q: "The order of reactivity in SN1 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24m_17",
            q: "The number of unpaired electrons in Ni²⁺ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24m_18",
            q: "The pKa of CH₃COOH is:",
            options: ["4.76", "7.0", "9.2", "14.0"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m_19",
            q: "The number of atoms in SC unit cell is:",
            options: ["1", "2", "4", "8"],
            ans: 0,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24m_20",
            q: "The catalyst used in Deacon's process is:",
            options: ["Fe", "V₂O₅", "CuCl₂", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24m_21",
            q: "The molecular formula of starch is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24m_22",
            q: "The enthalpy change for the reaction H₂ + Cl₂ → 2HCl is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24m_23",
            q: "The shape of XeF₄ is:",
            options: ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m_24",
            q: "The equivalent weight of Fe in FeSO₄ is:",
            options: ["56", "28", "112", "84"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c24m_25",
            q: "The IUPAC name of CH≡C-CH₃ is:",
            options: ["Propyne", "1-Propyne", "Prop-1-yne", "All of these"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24m_27",
            q: "The atomic radius decreases across a period due to:",
            options: ["Increase in nuclear charge", "Decrease in nuclear charge", "Increase in shielding", "Decrease in shielding"],
            ans: 0,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24m_28",
            q: "The rate constant of a first order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24m_30",
            q: "The pH of 0.001 M HCl is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24m_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_32",
            q: "The molecular formula of toluene is:",
            options: ["C₆H₆", "C₆H₅CH₃", "C₇H₈", "C₇H₁₆"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24m_33",
            q: "The Gibbs free energy change is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24m_34",
            q: "The number of unpaired electrons in O₂⁺ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m_35",
            q: "The equivalent weight of KMnO₄ in neutral medium is:",
            options: ["31.6", "63.2", "126.4", "158"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c24m_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24m_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24m_38",
            q: "The hybridization of carbon in CO₃²⁻ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24m_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24m_40",
            q: "The number of isomers of C₅H₁₂ is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m24m_1",
            q: "The derivative of cos x is:",
            options: ["sin x", "-sin x", "tan x", "-cos x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_2",
            q: "The integral of 4x³ dx is:",
            options: ["x⁴", "x⁴ + C", "4x⁴", "4x⁴ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_3",
            q: "The roots of x² - 6x + 9 = 0 are:",
            options: ["3, 3", "2, 4", "-3, -3", "3, -3"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24m_4",
            q: "The area of a circle with diameter 10 cm is:",
            options: ["25π cm²", "50π cm²", "75π cm²", "100π cm²"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_5",
            q: "The probability of rolling a 6 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24m_6",
            q: "The equation of line passing through (0,0) with slope 1/2 is:",
            options: ["y = x", "y = 2x", "y = x/2", "y = 3x"],
            ans: 2,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24m_7",
            q: "The value of log₃ 27 is:",
            options: ["2", "3", "4", "9"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24m_8",
            q: "The number of ways to arrange 5 distinct letters is:",
            options: ["5", "25", "120", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m_9",
            q: "The distance between (3,4) and (6,8) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_10",
            q: "The limit of (x² - 16)/(x - 4) as x approaches 4 is:",
            options: ["0", "4", "8", "16"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_12",
            q: "The sum of first 6 natural numbers is:",
            options: ["15", "21", "25", "30"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m_13",
            q: "The equation of circle with center (2,1) and radius 3 is:",
            options: ["(x-2)² + (y-1)² = 9", "(x+2)² + (y+1)² = 9", "x² + y² = 9", "(x-2)² + (y-1)² = 3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_14",
            q: "The derivative of e²x is:",
            options: ["e²x", "2e²x", "e^x", "2e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_15",
            q: "The angle between vectors 3i + 4j and 4i + 3j is:",
            options: ["0°", "30°", "45°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24m_16",
            q: "The coefficient of x in (1 + x)⁶ is:",
            options: ["1", "6", "15", "20"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24m_17",
            q: "The domain of f(x) = √(x + 3) is:",
            options: ["x ≥ -3", "x > -3", "x ≤ -3", "x < -3"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m_18",
            q: "The period of sin 3x is:",
            options: ["π", "π/3", "2π", "2π/3"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_19",
            q: "The number of solutions of sin x = 0.5 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_20",
            q: "The determinant of [[4,5],[2,3]] is:",
            options: ["2", "4", "6", "8"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m_21",
            q: "The area under the curve y = x² from x = 1 to x = 3 is:",
            options: ["8/3", "9/3", "10/3", "26/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_22",
            q: "The mean of 3, 5, 7 is:",
            options: ["4", "5", "6", "7"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m_23",
            q: "The derivative of x ln x is:",
            options: ["ln x", "1 + ln x", "x + ln x", "1/x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m_24",
            q: "The angle subtended by an arc of length 4r at center is:",
            options: ["1 radian", "4 radians", "π radians", "π/4 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_26",
            q: "The solution of dy/dx = x/y is:",
            options: ["x² + y² = C", "x² - y² = C", "2x² + 2y² = C", "x² + 2y² = C"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m24m_27",
            q: "The number of diagonals in a quadrilateral is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m_30",
            q: "The number of ways to choose 2 items from 5 is:",
            options: ["5", "10", "15", "20"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m_31",
            q: "The modulus of 4 - 3i is:",
            options: ["3", "4", "5", "7"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24m_32",
            q: "The derivative of x⁵ is:",
            options: ["x⁴", "5x⁴", "5x³", "x⁶"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_33",
            q: "The area of triangle with vertices (2,3), (4,6), (6,3) is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m_34",
            q: "The value of lim (x→0) (1 - cos x)/x² is:",
            options: ["0", "1/2", "1", "2"],
            ans: 1,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24m_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_36",
            q: "The probability of getting an odd number on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24m_37",
            q: "The slope of y = 3 is:",
            options: ["0", "3", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24m_38",
            q: "The value of log₁₀ 10000 is:",
            options: ["2", "3", "4", "5"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24m_39",
            q: "The number of ways to arrange letters of 'MISSISSIPPI' is:",
            options: ["34650", "3465", "346500", "3465000"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m24m_40",
            q: "The distance from (2,3) to (5,7) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_41",
            q: "The limit of (2x + 3)/(x + 1) as x → ∞ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m_42",
            q: "The integral of e^x dx is:",
            options: ["e^x", "e^x + C", "x e^x", "x e^x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_43",
            q: "The sum of infinite GP 1/4 + 1/8 + 1/16 + ... is:",
            options: ["1/4", "1/2", "1", "2"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m_44",
            q: "The center of circle x² + y² - 8x + 6y + 16 = 0 is:",
            options: ["(4, -3)", "(-4, 3)", "(4, 3)", "(-4, -3)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_46",
            q: "The dot product of 2i - j and i + 2j is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24m_47",
            q: "The general term of (a + b)⁵ is:",
            options: ["⁵Cᵣ aʳ b⁵⁻ʳ", "⁵Cᵣ a⁵⁻ʳ bʳ", "⁵Cᵣ a⁵ bʳ", "⁵Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24m_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m_49",
            q: "The value of cos 0° is:",
            options: ["0", "1/2", "1", "√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_50",
            q: "The number of solutions of cos x = 1 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_51",
            q: "The rank of matrix [[1,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m_52",
            q: "The area under y = cos x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_53",
            q: "The median of 2, 4, 6, 8, 10 is:",
            options: ["4", "5", "6", "8"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m_54",
            q: "The derivative of x² sin x is:",
            options: ["2x sin x", "x² cos x", "2x sin x + x² cos x", "2x cos x - x² sin x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m_55",
            q: "The angle in radian for 270° is:",
            options: ["π/4", "π/2", "3π/2", "2π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_57",
            q: "The solution of d²y/dx² = 6 is:",
            options: ["y = 3x²", "y = 3x² + C₁x + C₂", "y = 6x²", "y = 6x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24m_58",
            q: "The number of diagonals in a pentagon is:",
            options: ["3", "5", "7", "10"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_59",
            q: "The value of ∫_{-2}^3 x dx is:",
            options: ["5/2", "11/2", "13/2", "15/2"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24m_61",
            q: "The number of ways to choose 4 items from 7 is:",
            options: ["21", "25", "30", "35"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24m_62",
            q: "The argument of 2 + 2i is:",
            options: ["π/4", "π/3", "π/6", "π/2"],
            ans: 0,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24m_63",
            q: "The derivative of x⁷ is:",
            options: ["x⁶", "7x⁶", "7x⁵", "x⁸"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_64",
            q: "The area of parallelogram with vectors 3i + 4j and 4i + 3j is:",
            options: ["0", "1", "7", "12"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24m_65",
            q: "The value of lim (x→∞) (x + 1)/(x - 1) is:",
            options: ["0", "1", "2", "∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24m_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_67",
            q: "The sum of AP 3, 7, 11, 15, 19 is:",
            options: ["45", "50", "55", "60"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24m_68",
            q: "The radius of circle x² + y² + 2x - 4y + 1 = 0 is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24m_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m_70",
            q: "The cross product of j × i is:",
            options: ["0", "1", "-1", "-k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24m_71",
            q: "The middle term in (x + y)⁸ is:",
            options: ["28 x⁴ y⁴", "35 x⁴ y⁴", "42 x⁴ y⁴", "56 x⁴ y⁴"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24m_72",
            q: "The domain of f(x) = 1/(x² - 1) is:",
            options: ["R", "R - {1}", "R - {-1, 1}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24m_73",
            q: "The value of tan 60° is:",
            options: ["0", "1", "√3", "√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_74",
            q: "The number of solutions of tan x = 1 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_75",
            q: "The order of matrix [[1],[2],[3]] is:",
            options: ["1×1", "1×3", "3×1", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24m_76",
            q: "The area under y = 3x from 0 to 2 is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24m_77",
            q: "The mode of 2, 3, 3, 4, 5, 5, 5 is:",
            options: ["2", "3", "4", "5"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24m_78",
            q: "The derivative of cosec x is:",
            options: ["-cosec x cot x", "cosec x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24m_79",
            q: "The angle in degrees for π/6 radians is:",
            options: ["15°", "30°", "45°", "60°"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24m_80",
            q: "The period of csc x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;