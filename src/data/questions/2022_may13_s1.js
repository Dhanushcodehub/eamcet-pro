// ============================================================
//  TG EAMCET 2022 – May 13th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p22m_1",
            q: "The number of significant figures in 0.00602 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p22m_2",
            q: "A body is thrown vertically upwards. Its velocity at the highest point is:",
            options: ["Zero", "Maximum", "Minimum", "Constant"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p22m_3",
            q: "The orbital velocity of a satellite orbiting close to Earth depends on:",
            options: ["Mass of satellite", "Radius of orbit", "Both", "None"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p22m_4",
            q: "In Young's double slit experiment, if the distance between slits is doubled, the fringe width:",
            options: ["Doubles", "Halves", "Quadruples", "Remains same"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p22m_5",
            q: "The magnetic field due to a straight wire at distance r is inversely proportional to:",
            options: ["r", "r²", "√r", "1/r"],
            ans: 3,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p22m_6",
            q: "The potential difference between two points in an electric field is measured in:",
            options: ["Volt", "Coulomb", "Ampere", "Ohm"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p22m_7",
            q: "The activity of a radioactive sample reduces to 1/1024 of initial value in:",
            options: ["8 half-lives", "9 half-lives", "10 half-lives", "11 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p22m_8",
            q: "The centripetal force for circular motion depends on:",
            options: ["Mass only", "Speed only", "Radius only", "Mass, speed and radius"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p22m_9",
            q: "The resistance of a wire is directly proportional to:",
            options: ["Length", "Area", "Both", "None"],
            ans: 0,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p22m_10",
            q: "The speed of sound in air at 15°C is approximately:",
            options: ["340 m/s", "342 m/s", "344 m/s", "346 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p22m_11",
            q: "The time period of a simple pendulum is proportional to:",
            options: ["√l", "l", "1/√l", "1/l"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p22m_12",
            q: "The capacitance of a parallel plate capacitor increases when:",
            options: ["Distance between plates increases", "Area decreases", "Dielectric constant increases", "Charge decreases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p22m_13",
            q: "The focal length of a concave lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p22m_14",
            q: "The de Broglie wavelength λ = h/p, where p is:",
            options: ["Mass", "Momentum", "Energy", "Velocity"],
            ans: 1,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p22m_15",
            q: "The coefficient of static friction depends on:",
            options: ["Velocity", "Normal force", "Nature of surfaces", "Area of contact"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p22m_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p22m_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p22m_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero", "Non-uniform", "Uniform", "Depends on current"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p22m_19",
            q: "The resistivity of a material depends on:",
            options: ["Length", "Area", "Material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p22m_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p22m_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p22m_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p22m_23",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "Both", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p22m_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p22m_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p22m_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p22m_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p22m_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p22m_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p22m_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p22m_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p22m_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p22m_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p22m_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p22m_35",
            q: "The half-life of a radioactive substance is 7 days. After 21 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p22m_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p22m_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p22m_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p22m_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p22m_40",
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
            id: "c22m_1",
            q: "The number of moles in 5.6 L of CO₂ at STP is:",
            options: ["0.25", "0.5", "0.75", "1"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c22m_2",
            q: "The oxidation state of Mn in MnO₄⁻ is:",
            options: ["+5", "+6", "+7", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c22m_3",
            q: "The shape of BF₃ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c22m_4",
            q: "The pH of 10⁻⁷ M H⁺ is:",
            options: ["1", "7", "13", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c22m_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c22m_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂CH₂OH is:",
            options: ["Hexanol", "Pentanol", "Butanol", "Propanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_7",
            q: "The number of π bonds in ethyne is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_8",
            q: "The element with atomic number 18 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c22m_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c22m_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c22m_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c22m_12",
            q: "The solubility product of Ag₂CrO₄ is 1.1 × 10⁻¹². Its solubility is:",
            options: ["1.1 × 10⁻⁴", "6.5 × 10⁻⁵", "1.3 × 10⁻⁴", "2.2 × 10⁻⁴"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c22m_13",
            q: "The isomerism shown by C₅H₁₂ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c22m_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c22m_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c22m_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c22m_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c22m_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c22m_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c22m_23",
            q: "The shape of ICl₃ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c22m_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c22m_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c22m_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c22m_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c22m_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c22m_30",
            q: "The pH of 10⁻⁹ M HCl is:",
            options: ["1", "7", "9", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c22m_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c22m_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c22m_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c22m_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c22m_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c22m_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c22m_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c22m_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c22m_40",
            q: "The number of isomers of C₇H₁₆ is:",
            options: ["7", "8", "9", "10"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m22m_1",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m22m_2",
            q: "The integral of 12x¹¹ dx is:",
            options: ["x¹²", "x¹² + C", "12x¹²", "12x¹² + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_3",
            q: "The roots of x² - 24x + 144 = 0 are:",
            options: ["12, 12", "6, 18", "-12, -12", "12, -12"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m22m_4",
            q: "The area of a circle with radius 12 cm is:",
            options: ["144π cm²", "288π cm²", "432π cm²", "576π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_5",
            q: "The probability of getting a 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m22m_6",
            q: "The equation of line with slope 5/7 and y-intercept 8 is:",
            options: ["y = 5x", "y = 5x + 8", "y = 7x + 5", "y = 5x - 8"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m22m_7",
            q: "The value of log₂₅ 125 is:",
            options: ["2/3", "3/2", "1", "5"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m22m_8",
            q: "The number of ways to arrange 13 distinct objects is:",
            options: ["13", "169", "6227020800", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m22m_9",
            q: "The distance between (10,12) and (14,16) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_10",
            q: "The limit of (x² - 169)/(x - 13) as x approaches 13 is:",
            options: ["0", "13", "26", "169"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m22m_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_12",
            q: "The sum of first 14 natural numbers is:",
            options: ["91", "98", "105", "112"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m22m_13",
            q: "The equation of circle with center (9,11) and radius 8 is:",
            options: ["(x-9)² + (y-11)² = 64", "(x+9)² + (y+11)² = 64", "x² + y² = 64", "(x-9)² + (y-11)² = 8"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_14",
            q: "The derivative of e¹³x is:",
            options: ["e¹³x", "13e¹³x", "e^x", "13e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_15",
            q: "The angle between vectors 10i + 12j and 12i + 10j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m22m_16",
            q: "The coefficient of x¹⁴ in (1 + x)¹⁷ is:",
            options: ["17", "119", "680", "2380"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m22m_17",
            q: "The domain of f(x) = √(x + 11) is:",
            options: ["x ≥ -11", "x > -11", "x ≤ -11", "x < -11"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m22m_18",
            q: "The period of sin 10x is:",
            options: ["π", "π/10", "2π", "2π/10"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_19",
            q: "The number of solutions of sin x = 0.8 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_20",
            q: "The determinant of [[12,13],[10,11]] is:",
            options: ["2", "10", "22", "46"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m22m_21",
            q: "The area under the curve y = x² from x = 9 to x = 11 is:",
            options: ["32/3", "40/3", "48/3", "320/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_22",
            q: "The mean of 11, 13, 15 is:",
            options: ["12", "13", "14", "15"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m22m_23",
            q: "The derivative of x⁹ e^x is:",
            options: ["9x⁸ e^x", "x⁹ e^x", "9x⁸ e^x + x⁹ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m22m_24",
            q: "The angle subtended by an arc of length 12r at center is:",
            options: ["1 radian", "12 radians", "π radians", "π/12 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_26",
            q: "The solution of dy/dx = 10x⁹ is:",
            options: ["y = x¹⁰", "y = x¹⁰ + C", "y = 10x¹⁰", "y = 10x¹⁰ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m22m_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m22m_30",
            q: "The number of ways to choose 9 items from 12 is:",
            options: ["55", "66", "77", "88"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m22m_31",
            q: "The modulus of 13 - 16i is:",
            options: ["13", "16", "19", "25"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m22m_32",
            q: "The derivative of x¹⁴ is:",
            options: ["x¹³", "14x¹³", "14x¹²", "x¹⁵"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_33",
            q: "The area of triangle with vertices (10,12), (13,16), (16,12) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m22m_34",
            q: "The value of lim (x→0) (sin 9x)/x is:",
            options: ["0", "1", "9", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m22m_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_36",
            q: "The probability of getting a number divisible by 3 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m22m_37",
            q: "The slope of y = 10 is:",
            options: ["0", "10", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m22m_38",
            q: "The value of log₁₀ 100000000 is:",
            options: ["6", "7", "8", "9"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m22m_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m22m_40",
            q: "The distance from (11,13) to (15,17) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_41",
            q: "The limit of (9x + 11)/(8x + 10) as x → ∞ is:",
            options: ["0", "1", "9/8", "11/10"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m22m_42",
            q: "The integral of e¹⁵x dx is:",
            options: ["e¹⁵x", "e¹⁵x/15", "(1/15)e¹⁵x", "(1/15)e¹⁵x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_43",
            q: "The sum of infinite GP 1/11 + 1/121 + 1/1331 + ... is:",
            options: ["1/11", "1/10", "1/9", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m22m_44",
            q: "The center of circle x² + y² - 24x + 20y + 25 = 0 is:",
            options: ["(12, -10)", "(-12, 10)", "(12, 10)", "(-12, -10)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m22m_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_46",
            q: "The dot product of 11i + 13j and 13i + 11j is:",
            options: ["143", "169", "286", "338"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m22m_47",
            q: "The general term of (a + b)¹⁴ is:",
            options: ["¹⁴Cᵣ aʳ b¹⁴⁻ʳ", "¹⁴Cᵣ a¹⁴⁻ʳ bʳ", "¹⁴Cᵣ a¹⁴ bʳ", "¹⁴Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m22m_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m22m_49",
            q: "The value of sin 0° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_51",
            q: "The rank of matrix [[9,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m22m_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_53",
            q: "The median of 10, 12, 14, 16, 18 is:",
            options: ["12", "13", "14", "16"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m22m_54",
            q: "The derivative of x¹⁰ ln x is:",
            options: ["10x⁹ ln x", "x¹⁰/x", "10x⁹ ln x + 10x⁹", "10x⁹ ln x + x¹⁰"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m22m_55",
            q: "The angle in radian for 270° is:",
            options: ["π/2", "π", "3π/2", "2π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_57",
            q: "The solution of d²y/dx² = 24 is:",
            options: ["y = 12x²", "y = 12x² + C₁x + C₂", "y = 24x²", "y = 24x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m22m_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_59",
            q: "The value of ∫_{-10}^9 x dx is:",
            options: ["-9.5", "9.5", "19", "20"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m22m_61",
            q: "The number of ways to choose 11 items from 14 is:",
            options: ["364", "400", "436", "472"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m22m_62",
            q: "The argument of 10 + 15i is:",
            options: ["tan⁻¹(10/15)", "tan⁻¹(15/10)", "sin⁻¹(10/18)", "cos⁻¹(15/18)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m22m_63",
            q: "The derivative of x¹⁶ is:",
            options: ["x¹⁵", "16x¹⁵", "16x¹⁴", "x¹⁷"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_64",
            q: "The area of parallelogram with vectors 12i + 14j and 14i + 12j is:",
            options: ["24", "196", "336", "676"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m22m_65",
            q: "The value of lim (x→∞) (x⁹ + 10)/(x⁹ + 11) is:",
            options: ["0", "1", "9", "10"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m22m_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m22m_67",
            q: "The sum of AP 12, 16, 20, 24, 28 is:",
            options: ["80", "85", "90", "100"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m22m_68",
            q: "The radius of circle x² + y² - 18x + 22y + 21 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m22m_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m22m_70",
            q: "The cross product of k × i is:",
            options: ["0", "1", "-1", "-j"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m22m_71",
            q: "The middle term in (x + y)²⁴ is:",
            options: ["24 x¹² y¹²", "276 x¹² y¹²", "10626 x¹² y¹²", "42504 x¹² y¹²"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m22m_72",
            q: "The domain of f(x) = 1/(x² - 64) is:",
            options: ["R", "R - {8}", "R - {-8, 8}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m22m_73",
            q: "The value of cos 225° is:",
            options: ["0", "1/2", "-1/2", "-√2/2"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_74",
            q: "The number of solutions of tan x = 10 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m22m_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m22m_76",
            q: "The area under y = 11x from 0 to 1 is:",
            options: ["5.5", "6", "7", "11"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m_77",
            q: "The mode of 11, 12, 12, 13, 14, 14, 14 is:",
            options: ["11", "12", "13", "14"],
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
            q: "The angle in degrees for 19π/6 radians is:",
            options: ["570°", "540°", "510°", "480°"],
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