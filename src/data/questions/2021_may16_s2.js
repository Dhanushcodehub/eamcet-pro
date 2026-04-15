// ============================================================
//  TG EAMCET 2021 – May 16th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p21g_1",
            q: "The work done in moving a charge between two points depends on:",
            options: ["Path taken", "Potential difference", "Both A and B", "Neither"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21g_2",
            q: "The acceleration of a particle executing SHM is maximum at:",
            options: ["Mean position", "Extreme position", "Any position", "None"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p21g_3",
            q: "The time period of a satellite depends on:",
            options: ["Mass of satellite", "Radius of orbit", "Both A and B", "Neither"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p21g_4",
            q: "In Young's double slit experiment, the central fringe is:",
            options: ["Bright", "Dark", "Colored", "None"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p21g_5",
            q: "The magnetic field at the center of a straight wire is:",
            options: ["Zero", "Maximum", "Minimum", "Uniform"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21g_6",
            q: "The SI unit of electric current is:",
            options: ["Volt", "Coulomb", "Ampere", "Ohm"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21g_7",
            q: "The number of protons in a nucleus is:",
            options: ["A", "Z", "A - Z", "A + Z"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21g_8",
            q: "The centripetal acceleration depends on:",
            options: ["Mass only", "Velocity only", "Radius only", "Mass, velocity and radius"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p21g_9",
            q: "The resistance of a wire depends on:",
            options: ["Length", "Area", "Material", "All of these"],
            ans: 3,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p21g_10",
            q: "The speed of sound in air increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Decrease in pressure"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21g_11",
            q: "The time period of a pendulum increases with:",
            options: ["Increase in length", "Decrease in length", "Increase in mass", "Decrease in mass"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p21g_12",
            q: "The capacitance decreases when:",
            options: ["Distance between plates increases", "Dielectric constant increases", "Area decreases", "Charge decreases"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21g_13",
            q: "The focal length of a convex lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21g_14",
            q: "The de Broglie wavelength depends on:",
            options: ["Mass only", "Velocity only", "Both A and B", "Energy only"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p21g_15",
            q: "The static friction is:",
            options: ["Less than kinetic friction", "Equal to kinetic friction", "Greater than kinetic friction", "Zero"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p21g_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²", "MR²/2", "MR²/4", "2MR²"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21g_17",
            q: "The kinetic theory explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p21g_18",
            q: "The magnetic field inside a solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21g_19",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21g_20",
            q: "The energy levels in hydrogen atom are:",
            options: ["Equally spaced", "Non-equally spaced", "Linear", "Circular"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p21g_21",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21g_22",
            q: "The principle of superposition applies to:",
            options: ["Light waves only", "Sound waves only", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21g_23",
            q: "The self-inductance depends on:",
            options: ["Current", "Number of turns", "Both A and B", "Resistance"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p21g_24",
            q: "The refractive index of glass is:",
            options: ["1.0", "1.33", "1.5", "2.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21g_25",
            q: "Nuclear fusion requires:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21g_26",
            q: "The photoelectric effect was discovered by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 2,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p21g_27",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p21g_28",
            q: "The magnetic moment is measured in:",
            options: ["Tesla", "Weber", "Ampere-meter²", "Henry"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21g_29",
            q: "The velocity of electromagnetic waves is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p21g_30",
            q: "The radius of gyration has units of:",
            options: ["Mass", "Length", "Time", "Angle"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21g_31",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p21g_32",
            q: "The Doppler effect is observed when:",
            options: ["Source moves towards observer", "Source moves away", "Both A and B", "Source is stationary"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21g_33",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Uniform", "Zero", "Increases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21g_34",
            q: "The half-life of a radioactive substance is:",
            options: ["Time for half the atoms to decay", "Time for all atoms to decay", "Time for quarter atoms to decay", "None"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21g_35",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh/2", "nh/2π", "nh/π", "n²h/2π"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p21g_36",
            q: "The power factor in AC circuits can be:",
            options: ["Only 1", "Only 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21g_37",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21g_38",
            q: "Nuclear fission was discovered by:",
            options: ["Bohr", "Rutherford", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21g_39",
            q: "The SI unit of electric field is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Ampere"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21g_40",
            q: "The number of significant figures in 0.00100 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c21g_1",
            q: "The number of moles in 5.6 L of O₂ at STP is:",
            options: ["0.125", "0.25", "0.5", "1"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21g_2",
            q: "The oxidation state of Mn in KMnO₄ is:",
            options: ["+4", "+5", "+6", "+7"],
            ans: 3,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21g_3",
            q: "The shape of CO₂ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_4",
            q: "The pH of 10⁻⁵ M H⁺ is:",
            options: ["1", "5", "7", "9"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21g_5",
            q: "The rate of reaction decreases with:",
            options: ["Increase in temperature", "Increase in concentration", "Addition of catalyst", "All of these"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21g_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₃ is:",
            options: ["Pentane", "Hexane", "Heptane", "Butane"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_7",
            q: "The number of π bonds in C₂H₄ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_8",
            q: "The element with atomic number 18 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c21g_9",
            q: "The enthalpy of vaporisation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21g_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["1", "2", "4", "8"],
            ans: 2,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21g_11",
            q: "The bond order of N₂ is:",
            options: ["1", "2", "2.5", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_12",
            q: "The solubility product of BaSO₄ is 1.0 × 10⁻¹⁰. Its solubility is:",
            options: ["1.0 × 10⁻⁵", "1.0 × 10⁻⁴", "1.0 × 10⁻³", "1.0 × 10⁻²"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21g_13",
            q: "The isomerism shown by C₃H₈ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 3,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c21g_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_16",
            q: "The order of reactivity in SN1 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c21g_17",
            q: "The magnetic moment of Fe²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Easy"
        },
        {
            id: "c21g_18",
            q: "The pKa of H₃PO₄ is:",
            options: ["2.12", "7.2", "9.2", "12.3"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21g_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21g_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_21",
            q: "The molecular formula of cellulose is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21g_22",
            q: "The enthalpy change for the reaction H₂ + 1/2O₂ → H₂O is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21g_23",
            q: "The shape of XeF₄ is:",
            options: ["Trigonal bipyramidal", "Tetrahedral", "Square planar", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_24",
            q: "The equivalent weight of Na₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21g_25",
            q: "The IUPAC name of CH₃-CH₂-CH=CH-CH₃ is:",
            options: ["Pent-2-ene", "Pent-1-ene", "Hex-2-ene", "But-1-ene"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_26",
            q: "The value of Faraday constant is:",
            options: ["96485 C/mol", "8.314 J/mol·K", "6.023 × 10²³", "9.8 m/s²"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21g_27",
            q: "The ionization energy decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c21g_28",
            q: "The rate constant of a first order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21g_29",
            q: "The number of sigma bonds in CH₄ is:",
            options: ["2", "3", "4", "5"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_30",
            q: "The pH of 10⁻⁹ M NaOH is:",
            options: ["5", "7", "9", "11"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21g_31",
            q: "The catalyst used in hydrogenation of vegetable oils is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_32",
            q: "The molecular formula of naphthalene is:",
            options: ["C₁₀H₈", "C₆H₆", "C₈H₈", "C₁₄H₁₀"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21g_33",
            q: "The change in free energy is zero at:",
            options: ["Melting point", "Boiling point", "Equilibrium", "Freezing point"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21g_34",
            q: "The number of unpaired electrons in N₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_35",
            q: "The equivalent weight of K₂Cr₂O₇ in neutral medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c21g_36",
            q: "The number of carbon atoms in palmitic acid is:",
            options: ["14", "16", "18", "20"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21g_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21g_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21g_39",
            q: "The solubility of gases in liquids increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c21g_40",
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
            id: "m21g_1",
            q: "The derivative of cos x is:",
            options: ["-sin x", "sin x", "tan x", "-tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_2",
            q: "The integral of 17x¹⁶ dx is:",
            options: ["x¹⁷", "x¹⁷ + C", "17x¹⁷", "17x¹⁷ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_3",
            q: "The roots of x² - 28x + 196 = 0 are:",
            options: ["14, 14", "8, 22", "7, 21", "6, 22"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m21g_4",
            q: "The area of a circle with radius 15 cm is:",
            options: ["225π cm²", "450π cm²", "675π cm²", "900π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_5",
            q: "The probability of getting a 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21g_6",
            q: "The equation of line with slope 12/11 and y-intercept 14 is:",
            options: ["y = 12x", "y = 12x + 14", "y = 11x + 12", "y = 12x - 14"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21g_7",
            q: "The value of log₅₀ 125 is:",
            options: ["2/3", "3/2", "3", "6"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21g_8",
            q: "The number of ways to arrange 16 distinct objects is:",
            options: ["16", "256", "20922789888000", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21g_9",
            q: "The distance between (13,15) and (16,19) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_10",
            q: "The limit of (x² - 121)/(x - 11) as x approaches 11 is:",
            options: ["0", "11", "22", "121"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21g_11",
            q: "The integral of dx/x is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_12",
            q: "The sum of first 16 natural numbers is:",
            options: ["128", "136", "144", "152"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21g_13",
            q: "The equation of circle with center (12,14) and radius 13 is:",
            options: ["(x-12)² + (y-14)² = 169", "(x+12)² + (y+14)² = 169", "x² + y² = 169", "(x-12)² + (y-14)² = 13"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_14",
            q: "The derivative of e¹⁸x is:",
            options: ["e¹⁸x", "18e¹⁸x", "e^x", "18e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_15",
            q: "The angle between vectors 14i + 16j and 16i + 14j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21g_16",
            q: "The coefficient of x¹⁷ in (1 + x)¹⁸ is:",
            options: ["18", "153", "816", "3060"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21g_17",
            q: "The domain of f(x) = √(x + 13) is:",
            options: ["x ≥ -13", "x > -13", "x ≤ -13", "x < -13"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21g_18",
            q: "The period of sin 14x is:",
            options: ["π", "π/14", "2π", "2π/14"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_19",
            q: "The number of solutions of cos x = 0.9 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_20",
            q: "The determinant of [[16,17],[14,15]] is:",
            options: ["2", "10", "22", "68"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21g_21",
            q: "The area under the curve y = x² from x = 14 to x = 16 is:",
            options: ["32/3", "40/3", "48/3", "512/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_22",
            q: "The mean of 16, 18, 20 is:",
            options: ["17", "18", "19", "20"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21g_23",
            q: "The derivative of x¹⁰ e^x is:",
            options: ["10x⁹ e^x", "x¹⁰ e^x", "10x⁹ e^x + x¹⁰ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21g_24",
            q: "The angle subtended by an arc of length 15r at center is:",
            options: ["1 radian", "15 radians", "π radians", "π/15 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_26",
            q: "The solution of dy/dx = 13x¹² is:",
            options: ["y = x¹³", "y = x¹³ + C", "y = 13x¹³", "y = 13x¹³ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21g_27",
            q: "The number of diagonals in a quadrilateral is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21g_30",
            q: "The number of ways to choose 14 items from 16 is:",
            options: ["120", "105", "91", "78"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21g_31",
            q: "The modulus of 17 - 21i is:",
            options: ["17", "21", "26", "38"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21g_32",
            q: "The derivative of x¹⁷ is:",
            options: ["x¹⁶", "17x¹⁶", "17x¹⁵", "x¹⁸"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_33",
            q: "The area of triangle with vertices (13,15), (16,19), (19,15) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21g_34",
            q: "The value of lim (x→0) (sin 13x)/x is:",
            options: ["0", "1", "13", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m21g_35",
            q: "The integral of tan x dx is:",
            options: ["ln|sec x|", "ln|sec x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_36",
            q: "The probability of getting a number greater than 5 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21g_37",
            q: "The slope of y = 15 is:",
            options: ["0", "15", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21g_38",
            q: "The value of log₁₀ 10000000000 is:",
            options: ["9", "10", "11", "12"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21g_39",
            q: "The number of ways to arrange letters of 'PERMUTATION' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m21g_40",
            q: "The distance from (14,16) to (18,20) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_41",
            q: "The limit of (14x + 15)/(13x + 14) as x → ∞ is:",
            options: ["0", "1", "14/13", "15/14"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21g_42",
            q: "The integral of e¹⁹x dx is:",
            options: ["e¹⁹x", "e¹⁹x/19", "(1/19)e¹⁹x", "(1/19)e¹⁹x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_43",
            q: "The sum of infinite GP 1/14 + 1/196 + 1/2744 + ... is:",
            options: ["1/14", "1/13", "1/12", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21g_44",
            q: "The center of circle x² + y² - 28x + 26y + 25 = 0 is:",
            options: ["(14, -13)", "(-14, 13)", "(14, 13)", "(-14, -13)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21g_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_46",
            q: "The dot product of 14i + 15j and 15i + 14j is:",
            options: ["210", "225", "420", "450"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21g_47",
            q: "The general term of (a + b)¹⁸ is:",
            options: ["¹⁸Cᵣ aʳ b¹⁸⁻ʳ", "¹⁸Cᵣ a¹⁸⁻ʳ bʳ", "¹⁸Cᵣ a¹⁸ bʳ", "¹⁸Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21g_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21g_49",
            q: "The value of sin 270° is:",
            options: ["0", "1/2", "-1/2", "-1"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_51",
            q: "The rank of matrix [[14,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21g_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_53",
            q: "The median of 13, 15, 17, 19, 21 is:",
            options: ["15", "16", "17", "19"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21g_54",
            q: "The derivative of x¹² ln x is:",
            options: ["12x¹¹ ln x", "x¹²/x", "12x¹¹ ln x + 12x¹¹", "12x¹¹ ln x + x¹²"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21g_55",
            q: "The angle in radian for 300° is:",
            options: ["π/6", "π/2", "5π/3", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_56",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_57",
            q: "The solution of d²y/dx² = 25 is:",
            options: ["y = 25/2 x²", "y = 25/2 x² + C₁x + C₂", "y = 25x²", "y = 25x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21g_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_59",
            q: "The value of ∫_{-13}^14 x dx is:",
            options: ["-13.5", "13.5", "27", "28"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m21g_61",
            q: "The number of ways to choose 13 items from 16 is:",
            options: ["560", "680", "816", "936"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21g_62",
            q: "The argument of 13 + 15i is:",
            options: ["tan⁻¹(13/15)", "tan⁻¹(15/13)", "sin⁻¹(13/17)", "cos⁻¹(15/17)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21g_63",
            q: "The derivative of x¹⁹ is:",
            options: ["x¹⁸", "19x¹⁸", "19x¹⁷", "x²⁰"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_64",
            q: "The area of parallelogram with vectors 15i + 16j and 16i + 15j is:",
            options: ["31", "256", "481", "512"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21g_65",
            q: "The value of lim (x→∞) (x¹¹ + 14)/(x¹¹ + 15) is:",
            options: ["0", "1", "11", "12"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21g_66",
            q: "The integral of sec² x dx is:",
            options: ["-tan x", "-tan x + C", "tan x", "tan x + C"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_67",
            q: "The sum of AP 16, 20, 24, 28, 32 is:",
            options: ["120", "130", "140", "150"],
            ans: 0,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21g_68",
            q: "The radius of circle x² + y² - 26x + 28y + 25 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21g_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21g_70",
            q: "The cross product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21g_71",
            q: "The middle term in (x + y)²³ is:",
            options: ["177100 x¹¹ y¹¹", "646646 x¹¹ y¹¹", "10015005 x¹¹ y¹¹", "30045015 x¹¹ y¹¹"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m21g_72",
            q: "The domain of f(x) = 1/(x² - 81) is:",
            options: ["R", "R - {9}", "R - {-9, 9}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21g_73",
            q: "The value of cos 180° is:",
            options: ["0", "1/2", "-1/2", "-1"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_74",
            q: "The number of solutions of tan x = 14 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21g_76",
            q: "The area under y = 14x from 0 to 1 is:",
            options: ["7", "8", "9", "14"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21g_77",
            q: "The mode of 14, 15, 15, 16, 17, 17, 17 is:",
            options: ["14", "15", "16", "17"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21g_78",
            q: "The derivative of sec x is:",
            options: ["-sec x tan x", "sec x tan x", "cosec x cot x", "-cosec x cot x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21g_79",
            q: "The angle in degrees for 22π/6 radians is:",
            options: ["660°", "630°", "600°", "570°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21g_80",
            q: "The period of cosec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;