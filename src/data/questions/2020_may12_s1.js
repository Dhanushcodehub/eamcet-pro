// ============================================================
//  TG EAMCET 2020 – May 12th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p20m_1",
            q: "The SI unit of pressure is:",
            options: ["Pascal", "Newton", "Joule", "Watt"],
            ans: 0,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p20m_2",
            q: "The velocity-time graph of a particle moving with constant acceleration is:",
            options: ["Straight line", "Parabola", "Hyperbola", "Circle"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p20m_3",
            q: "The orbital velocity of a satellite orbiting close to Earth depends on:",
            options: ["Mass of satellite", "Height above Earth", "Both A and B", "Neither"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p20m_4",
            q: "In Young's double slit experiment, the path difference for destructive interference is:",
            options: ["λ", "λ/2", "λ/4", "3λ/2"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p20m_5",
            q: "The magnetic field due to a straight wire at a distance r is proportional to:",
            options: ["r", "r²", "1/r", "1/r²"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20m_6",
            q: "The potential difference between two points is measured in:",
            options: ["Volt", "Coulomb", "Ampere", "Ohm"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20m_7",
            q: "The activity of a radioactive sample reduces to 1/16 in:",
            options: ["2 half-lives", "3 half-lives", "4 half-lives", "5 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20m_8",
            q: "The centripetal force depends on:",
            options: ["Mass only", "Velocity only", "Radius only", "Mass, velocity and radius"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p20m_9",
            q: "The resistance of a wire is doubled when:",
            options: ["Length is doubled", "Area is halved", "Both A and B", "Temperature increases"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p20m_10",
            q: "The speed of sound in air at 0°C is approximately:",
            options: ["331 m/s", "343 m/s", "300 m/s", "360 m/s"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20m_11",
            q: "The time period of a simple pendulum is proportional to:",
            options: ["√l", "l", "1/√l", "1/l"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p20m_12",
            q: "The capacitance of a capacitor decreases if:",
            options: ["Dielectric constant increases", "Distance between plates increases", "Area decreases", "Charge increases"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20m_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20m_14",
            q: "The de Broglie wavelength λ = h/mv, where m is:",
            options: ["Mass", "Momentum", "Energy", "Velocity"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p20m_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 3,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p20m_16",
            q: "The moment of inertia of a disc about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p20m_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p20m_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20m_19",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20m_20",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p20m_21",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p20m_22",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20m_23",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p20m_24",
            q: "The refractive index of water is:",
            options: ["1.0", "1.33", "1.5", "2.0"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20m_25",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20m_26",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p20m_27",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p20m_28",
            q: "The magnetic moment of a current carrying loop is:",
            options: ["I × A", "I/A", "I² × A", "I × A²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20m_29",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p20m_30",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p20m_31",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p20m_32",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20m_33",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Uniform", "Zero", "Increases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20m_34",
            q: "The half-life of a radioactive substance is 4 hours. After 8 hours, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20m_35",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p20m_36",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p20m_37",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20m_38",
            q: "Nuclear fission was discovered by:",
            options: ["Bohr", "Rutherford", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20m_39",
            q: "The SI unit of electric field strength is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Ampere"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20m_40",
            q: "The number of significant figures in 0.00807 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c20m_1",
            q: "The number of moles in 11.2 L of CO at STP is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c20m_2",
            q: "The oxidation state of Mn in KMnO₄ is:",
            options: ["+4", "+5", "+6", "+7"],
            ans: 3,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c20m_3",
            q: "The shape of NH₃ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 3,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20m_4",
            q: "The pH of 10⁻⁸ M H⁺ is:",
            options: ["1", "7", "8", "9"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20m_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20m_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂OH is:",
            options: ["Butanol", "Pentanol", "Hexanol", "Heptanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_7",
            q: "The number of π bonds in ethyne is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_8",
            q: "The element with atomic number 19 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c20m_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20m_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c20m_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c20m_12",
            q: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility is:",
            options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "1.34 × 10⁻⁴", "1.8 × 10⁻⁴"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Medium"
        },
        {
            id: "c20m_13",
            q: "The isomerism shown by C₆H₁₄ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c20m_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c20m_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c20m_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20m_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c20m_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c20m_22",
            q: "The enthalpy of formation of CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20m_23",
            q: "The shape of ICl₃ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c20m_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c20m_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c20m_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c20m_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20m_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20m_30",
            q: "The pH of 10⁻¹¹ M HCl is:",
            options: ["1", "7", "11", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20m_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₶", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20m_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20m_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c20m_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c20m_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c20m_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20m_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c20m_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c20m_40",
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
            id: "m20m_1",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_2",
            q: "The integral of 15x¹⁴ dx is:",
            options: ["x¹⁵", "x¹⁵ + C", "15x¹⁵", "15x¹⁵ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_3",
            q: "The roots of x² - 25x + 144 = 0 are:",
            options: ["9, 16", "8, 18", "7, 19", "6, 20"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m20m_4",
            q: "The area of a circle with radius 14 cm is:",
            options: ["196π cm²", "392π cm²", "588π cm²", "784π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_5",
            q: "The probability of getting a 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m20m_6",
            q: "The equation of line with slope 9/10 and y-intercept 11 is:",
            options: ["y = 9x", "y = 9x + 11", "y = 10x + 9", "y = 9x - 11"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m20m_7",
            q: "The value of log₃₆ 216 is:",
            options: ["2/3", "3/2", "3", "6"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m20m_8",
            q: "The number of ways to arrange 16 distinct objects is:",
            options: ["16", "256", "20922789888000", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20m_9",
            q: "The distance between (12,14) and (15,18) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_10",
            q: "The limit of (x² - 100)/(x - 10) as x approaches 10 is:",
            options: ["0", "10", "20", "100"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20m_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_12",
            q: "The sum of first 15 natural numbers is:",
            options: ["120", "135", "150", "165"],
            ans: 0,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20m_13",
            q: "The equation of circle with center (11,13) and radius 12 is:",
            options: ["(x-11)² + (y-13)² = 144", "(x+11)² + (y+13)² = 144", "x² + y² = 144", "(x-11)² + (y-13)² = 12"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_14",
            q: "The derivative of e¹⁷x is:",
            options: ["e¹⁷x", "17e¹⁷x", "e^x", "17e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_15",
            q: "The angle between vectors 13i + 15j and 15i + 13j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m20m_16",
            q: "The coefficient of x¹⁶ in (1 + x)¹⁷ is:",
            options: ["17", "136", "680", "2380"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m20m_17",
            q: "The domain of f(x) = √(x + 12) is:",
            options: ["x ≥ -12", "x > -12", "x ≤ -12", "x < -12"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20m_18",
            q: "The period of sin 13x is:",
            options: ["π", "π/13", "2π", "2π/13"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_19",
            q: "The number of solutions of cos x = 0.8 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_20",
            q: "The determinant of [[15,16],[13,14]] is:",
            options: ["2", "10", "22", "68"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20m_21",
            q: "The area under the curve y = x² from x = 13 to x = 15 is:",
            options: ["32/3", "40/3", "48/3", "512/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_22",
            q: "The mean of 15, 17, 19 is:",
            options: ["16", "17", "18", "19"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20m_23",
            q: "The derivative of x⁹ e^x is:",
            options: ["9x⁸ e^x", "x⁹ e^x", "9x⁸ e^x + x⁹ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_24",
            q: "The angle subtended by an arc of length 14r at center is:",
            options: ["1 radian", "14 radians", "π radians", "π/14 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_26",
            q: "The solution of dy/dx = 12x¹¹ is:",
            options: ["y = x¹²", "y = x¹² + C", "y = 12x¹²", "y = 12x¹² + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m20m_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_30",
            q: "The number of ways to choose 13 items from 15 is:",
            options: ["78", "105", "120", "136"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20m_31",
            q: "The modulus of 16 - 20i is:",
            options: ["16", "20", "24", "36"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m20m_32",
            q: "The derivative of x¹⁶ is:",
            options: ["x¹⁵", "16x¹⁵", "16x¹⁴", "x¹⁷"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_33",
            q: "The area of triangle with vertices (12,14), (15,18), (18,14) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20m_34",
            q: "The value of lim (x→0) (sin 12x)/x is:",
            options: ["0", "1", "12", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m20m_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_36",
            q: "The probability of getting a number greater than 4 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m20m_37",
            q: "The slope of y = 14 is:",
            options: ["0", "14", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m20m_38",
            q: "The value of log₁₀ 10000000000 is:",
            options: ["9", "10", "11", "12"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m20m_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m20m_40",
            q: "The distance from (13,15) to (17,19) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_41",
            q: "The limit of (13x + 14)/(12x + 13) as x → ∞ is:",
            options: ["0", "1", "13/12", "14/13"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20m_42",
            q: "The integral of e¹⁸x dx is:",
            options: ["e¹⁸x", "e¹⁸x/18", "(1/18)e¹⁸x", "(1/18)e¹⁸x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_43",
            q: "The sum of infinite GP 1/13 + 1/169 + 1/2197 + ... is:",
            options: ["1/13", "1/12", "1/11", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20m_44",
            q: "The center of circle x² + y² - 26x + 24y + 25 = 0 is:",
            options: ["(13, -12)", "(-13, 12)", "(13, 12)", "(-13, -12)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20m_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_46",
            q: "The dot product of 13i + 14j and 14i + 13j is:",
            options: ["182", "196", "364", "392"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m20m_47",
            q: "The general term of (a + b)¹⁷ is:",
            options: ["¹⁷Cᵣ aʳ b¹⁷⁻ʳ", "¹⁷Cᵣ a¹⁷⁻ʳ bʳ", "¹⁷Cᵣ a¹⁷ bʳ", "¹⁷Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m20m_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20m_49",
            q: "The value of sin 0° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_51",
            q: "The rank of matrix [[13,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20m_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_53",
            q: "The median of 12, 14, 16, 18, 20 is:",
            options: ["14", "15", "16", "18"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20m_54",
            q: "The derivative of x¹¹ ln x is:",
            options: ["11x¹⁰ ln x", "x¹¹/x", "11x¹⁰ ln x + 11x¹⁰", "11x¹⁰ ln x + x¹¹"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_55",
            q: "The angle in radian for 270° is:",
            options: ["π/6", "π/2", "3π/2", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_56",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_57",
            q: "The solution of d²y/dx² = 24 is:",
            options: ["y = 12x²", "y = 12x² + C₁x + C₂", "y = 24x²", "y = 24x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m20m_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_59",
            q: "The value of ∫_{-12}^13 x dx is:",
            options: ["-12.5", "12.5", "25", "26"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m20m_61",
            q: "The number of ways to choose 12 items from 15 is:",
            options: ["455", "560", "680", "816"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20m_62",
            q: "The argument of 12 + 14i is:",
            options: ["tan⁻¹(12/14)", "tan⁻¹(14/12)", "sin⁻¹(12/16)", "cos⁻¹(14/16)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m20m_63",
            q: "The derivative of x¹⁸ is:",
            options: ["x¹⁷", "18x¹⁷", "18x¹⁶", "x¹⁹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_64",
            q: "The area of parallelogram with vectors 14i + 15j and 15i + 14j is:",
            options: ["29", "225", "421", "450"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m20m_65",
            q: "The value of lim (x→∞) (x¹⁰ + 13)/(x¹⁰ + 14) is:",
            options: ["0", "1", "10", "11"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20m_66",
            q: "The integral of sec² x dx is:",
            options: ["-tan x", "-tan x + C", "tan x", "tan x + C"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_67",
            q: "The sum of AP 14, 18, 22, 26, 30 is:",
            options: ["110", "120", "130", "140"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20m_68",
            q: "The radius of circle x² + y² - 22x + 24y + 25 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20m_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_70",
            q: "The cross product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m20m_71",
            q: "The middle term in (x + y)²² is:",
            options: ["1540 x¹¹ y¹¹", "646646 x¹¹ y¹¹", "10015005 x¹¹ y¹¹", "30045015 x¹¹ y¹¹"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m20m_72",
            q: "The domain of f(x) = 1/(x² - 64) is:",
            options: ["R", "R - {8}", "R - {-8, 8}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20m_73",
            q: "The value of cos 120° is:",
            options: ["0", "1/2", "-1/2", "-1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_74",
            q: "The number of solutions of tan x = 13 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20m_76",
            q: "The area under y = 13x from 0 to 1 is:",
            options: ["6.5", "7", "8", "13"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20m_77",
            q: "The mode of 13, 14, 14, 15, 16, 16, 16 is:",
            options: ["13", "14", "15", "16"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20m_78",
            q: "The derivative of sec x is:",
            options: ["-sec x tan x", "sec x tan x", "cosec x cot x", "-cosec x cot x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20m_79",
            q: "The angle in degrees for 21π/6 radians is:",
            options: ["630°", "600°", "570°", "540°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20m_80",
            q: "The period of cosec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;