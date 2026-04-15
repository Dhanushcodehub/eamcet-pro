// ============================================================
//  TG EAMCET 2021 – May 15th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p21m_1",
            q: "The number of significant figures in 0.00807 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p21m_2",
            q: "A particle moves with constant acceleration. Its displacement is:",
            options: ["Linear function of time", "Parabolic function of time", "Both A and B", "None"],
            ans: 2,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p21m_3",
            q: "The orbital velocity of a satellite orbiting very close to Earth depends on:",
            options: ["Mass of satellite", "Radius of orbit", "Both", "None"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p21m_4",
            q: "In Young's double slit experiment, the path difference for destructive interference is:",
            options: ["λ", "λ/2", "2λ", "λ/4"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p21m_5",
            q: "The magnetic field due to a straight wire at distance r is proportional to:",
            options: ["r", "r²", "1/r", "1/r²"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21m_6",
            q: "The potential difference between two points in an electric field is measured in:",
            options: ["Volt", "Coulomb", "Ampere", "Ohm"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21m_7",
            q: "The activity of a radioactive sample reduces to 1/1024 of initial value in:",
            options: ["8 half-lives", "9 half-lives", "10 half-lives", "11 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21m_8",
            q: "The centripetal force for circular motion depends on:",
            options: ["Mass only", "Speed only", "Radius only", "Mass, speed and radius"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p21m_9",
            q: "The resistance of a wire is doubled when:",
            options: ["Length is doubled", "Area is halved", "Both A and B", "Temperature increases"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p21m_10",
            q: "The speed of sound in air at 19°C is approximately:",
            options: ["340 m/s", "347 m/s", "349 m/s", "351 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21m_11",
            q: "The time period of a simple pendulum is proportional to:",
            options: ["√l", "l", "1/√l", "1/l"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p21m_12",
            q: "The capacitance of a capacitor increases if:",
            options: ["Dielectric constant decreases", "Distance between plates decreases", "Area decreases", "Charge decreases"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21m_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21m_14",
            q: "The de Broglie wavelength λ = h/p, where p is:",
            options: ["Mass", "Momentum", "Energy", "Velocity"],
            ans: 1,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p21m_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p21m_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21m_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p21m_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21m_19",
            q: "The resistivity of a material is measured in:",
            options: ["Ohm", "Ohm-meter", "Siemens", "Farad"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p21m_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21m_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p21m_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21m_23",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21m_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p21m_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21m_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21m_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p21m_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p21m_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p21m_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p21m_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21m_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p21m_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21m_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21m_35",
            q: "The half-life of a radioactive substance is 11 days. After 33 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21m_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p21m_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21m_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21m_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21m_40",
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
            id: "c21m_1",
            q: "The number of moles in 10.08 L of CO at STP is:",
            options: ["0.45", "0.5", "0.4", "0.8"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21m_2",
            q: "The oxidation state of Mn in Mn₂O₇ is:",
            options: ["+5", "+6", "+7", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21m_3",
            q: "The shape of NH₃ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 3,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21m_4",
            q: "The pH of 10⁻⁹ M H⁺ is:",
            options: ["1", "7", "9", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21m_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21m_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂CH₂CH₂OH is:",
            options: ["Heptanol", "Hexanol", "Pentanol", "Butanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_7",
            q: "The number of π bonds in ethyne is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_8",
            q: "The element with atomic number 21 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 2,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c21m_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21m_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21m_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c21m_12",
            q: "The solubility product of Ag₂CrO₄ is 1.1 × 10⁻¹². Its solubility is:",
            options: ["1.1 × 10⁻⁴", "6.5 × 10⁻⁵", "1.3 × 10⁻⁴", "2.2 × 10⁻⁴"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c21m_13",
            q: "The isomerism shown by C₆H₁₄ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c21m_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c21m_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c21m_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21m_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21m_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21m_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c21m_23",
            q: "The shape of ICl₃ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c21m_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21m_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21m_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c21m_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21m_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21m_30",
            q: "The pH of 10⁻¹¹ M HCl is:",
            options: ["1", "7", "11", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21m_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21m_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21m_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c21m_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c21m_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21m_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21m_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c21m_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c21m_40",
            q: "The number of isomers of C₈H₁₈ is:",
            options: ["15", "16", "17", "18"],
            ans: 3,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m21m_1",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_2",
            q: "The integral of 16x¹⁵ dx is:",
            options: ["x¹⁶", "x¹⁶ + C", "16x¹⁶", "16x¹⁶ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_3",
            q: "The roots of x² - 32x + 256 = 0 are:",
            options: ["16, 16", "8, 24", "-16, -16", "16, -16"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m21m_4",
            q: "The area of a circle with radius 16 cm is:",
            options: ["256π cm²", "512π cm²", "768π cm²", "1024π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_5",
            q: "The probability of getting a 6 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21m_6",
            q: "The equation of line with slope 9/10 and y-intercept 11 is:",
            options: ["y = 9x", "y = 9x + 11", "y = 10x + 9", "y = 9x - 11"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21m_7",
            q: "The value of log₃₆ 216 is:",
            options: ["2/3", "3/2", "3", "6"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21m_8",
            q: "The number of ways to arrange 17 distinct objects is:",
            options: ["17", "289", "355687428096000", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21m_9",
            q: "The distance between (12,16) and (15,20) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_10",
            q: "The limit of (x² - 169)/(x - 13) as x approaches 13 is:",
            options: ["0", "13", "26", "169"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21m_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_12",
            q: "The sum of first 17 natural numbers is:",
            options: ["136", "153", "170", "187"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21m_13",
            q: "The equation of circle with center (11,15) and radius 12 is:",
            options: ["(x-11)² + (y-15)² = 144", "(x+11)² + (y+15)² = 144", "x² + y² = 144", "(x-11)² + (y-15)² = 12"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_14",
            q: "The derivative of e¹⁹x is:",
            options: ["e¹⁹x", "19e¹⁹x", "e^x", "19e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_15",
            q: "The angle between vectors 13i + 17j and 17i + 13j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21m_16",
            q: "The coefficient of x¹⁸ in (1 + x)²¹ is:",
            options: ["21", "133", "5985", "5985"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21m_17",
            q: "The domain of f(x) = √(x + 14) is:",
            options: ["x ≥ -14", "x > -14", "x ≤ -14", "x < -14"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21m_18",
            q: "The period of sin 13x is:",
            options: ["π", "π/13", "2π", "2π/13"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_19",
            q: "The number of solutions of sin x = 0.95 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_20",
            q: "The determinant of [[17,18],[15,16]] is:",
            options: ["2", "10", "22", "68"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21m_21",
            q: "The area under the curve y = x² from x = 13 to x = 15 is:",
            options: ["32/3", "40/3", "48/3", "512/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_22",
            q: "The mean of 15, 17, 19 is:",
            options: ["16", "17", "18", "19"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21m_23",
            q: "The derivative of x¹¹ e^x is:",
            options: ["11x¹⁰ e^x", "x¹¹ e^x", "11x¹⁰ e^x + x¹¹ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_24",
            q: "The angle subtended by an arc of length 16r at center is:",
            options: ["1 radian", "16 radians", "π radians", "π/16 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_26",
            q: "The solution of dy/dx = 14x¹³ is:",
            options: ["y = x¹⁴", "y = x¹⁴ + C", "y = 14x¹⁴", "y = 14x¹⁴ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21m_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_30",
            q: "The number of ways to choose 13 items from 15 is:",
            options: ["78", "105", "120", "136"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21m_31",
            q: "The modulus of 18 - 24i is:",
            options: ["18", "24", "30", "42"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21m_32",
            q: "The derivative of x¹⁸ is:",
            options: ["x¹⁷", "18x¹⁷", "18x¹⁶", "x¹⁹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_33",
            q: "The area of triangle with vertices (14,16), (17,20), (20,16) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21m_34",
            q: "The value of lim (x→0) (sin 14x)/x is:",
            options: ["0", "1", "14", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m21m_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_36",
            q: "The probability of getting a number greater than 4 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21m_37",
            q: "The slope of y = 14 is:",
            options: ["0", "14", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21m_38",
            q: "The value of log₁₀ 10000000000 is:",
            options: ["8", "9", "10", "11"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21m_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m21m_40",
            q: "The distance from (15,17) to (19,21) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_41",
            q: "The limit of (13x + 14)/(12x + 13) as x → ∞ is:",
            options: ["0", "1", "13/12", "14/13"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21m_42",
            q: "The integral of e²⁰x dx is:",
            options: ["e²⁰x", "e²⁰x/20", "(1/20)e²⁰x", "(1/20)e²⁰x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_43",
            q: "The sum of infinite GP 1/15 + 1/225 + 1/3375 + ... is:",
            options: ["1/15", "1/14", "1/13", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21m_44",
            q: "The center of circle x² + y² - 34x + 30y + 25 = 0 is:",
            options: ["(17, -15)", "(-17, 15)", "(17, 15)", "(-17, -15)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21m_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_46",
            q: "The dot product of 15i + 17j and 17i + 15j is:",
            options: ["255", "289", "510", "578"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21m_47",
            q: "The general term of (a + b)¹⁹ is:",
            options: ["¹⁹Cᵣ aʳ b¹⁹⁻ʳ", "¹⁹Cᵣ a¹⁹⁻ʳ bʳ", "¹⁹Cᵣ a¹⁹ bʳ", "¹⁹Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21m_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21m_49",
            q: "The value of sin 0° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_51",
            q: "The rank of matrix [[13,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21m_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_53",
            q: "The median of 14, 16, 18, 20, 22 is:",
            options: ["16", "17", "18", "20"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21m_54",
            q: "The derivative of x¹³ ln x is:",
            options: ["13x¹² ln x", "x¹³/x", "13x¹² ln x + 13x¹²", "13x¹² ln x + x¹³"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_55",
            q: "The angle in radian for 330° is:",
            options: ["π/6", "π/2", "11π/6", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_57",
            q: "The solution of d²y/dx² = 28 is:",
            options: ["y = 14x²", "y = 14x² + C₁x + C₂", "y = 28x²", "y = 28x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21m_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_59",
            q: "The value of ∫_{-14}^13 x dx is:",
            options: ["-13.5", "13.5", "27", "28"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m21m_61",
            q: "The number of ways to choose 14 items from 17 is:",
            options: ["2380", "2431", "2482", "2533"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21m_62",
            q: "The argument of 14 + 18i is:",
            options: ["tan⁻¹(14/18)", "tan⁻¹(18/14)", "sin⁻¹(14/22)", "cos⁻¹(18/22)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21m_63",
            q: "The derivative of x²⁰ is:",
            options: ["x¹⁹", "20x¹⁹", "20x¹⁸", "x²¹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_64",
            q: "The area of parallelogram with vectors 16i + 17j and 17i + 16j is:",
            options: ["32", "289", "544", "1156"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21m_65",
            q: "The value of lim (x→∞) (x¹² + 15)/(x¹² + 16) is:",
            options: ["0", "1", "12", "13"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21m_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_67",
            q: "The sum of AP 16, 20, 24, 28, 32 is:",
            options: ["100", "110", "120", "130"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21m_68",
            q: "The radius of circle x² + y² - 26x + 30y + 25 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21m_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_70",
            q: "The cross product of k × j is:",
            options: ["0", "1", "-1", "i"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21m_71",
            q: "The middle term in (x + y)²⁴ is:",
            options: ["10626 x¹² y¹²", "15504 x¹² y¹²", "20030010 x¹² y¹²", "42504 x¹² y¹²"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m21m_72",
            q: "The domain of f(x) = 1/(x² - 100) is:",
            options: ["R", "R - {10}", "R - {-10, 10}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21m_73",
            q: "The value of cos 240° is:",
            options: ["0", "1/2", "-1/2", "-√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_74",
            q: "The number of solutions of tan x = 14 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21m_76",
            q: "The area under y = 15x from 0 to 1 is:",
            options: ["7.5", "8", "9", "15"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21m_77",
            q: "The mode of 15, 16, 16, 17, 18, 18, 18 is:",
            options: ["15", "16", "17", "18"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21m_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21m_79",
            q: "The angle in degrees for 25π/6 radians is:",
            options: ["750°", "720°", "690°", "660°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21m_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;