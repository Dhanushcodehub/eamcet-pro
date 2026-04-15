// ============================================================
//  TG EAMCET 2023 – May 11th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p23e2_1",
            q: "The dimensional formula of torque is:",
            options: ["[M L T⁻¹]", "[M L² T⁻²]", "[M L T⁻²]", "[M L⁻¹ T⁻²]"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p23e2_2",
            q: "A body moves with uniform velocity. Its displacement-time graph is:",
            options: ["Straight line", "Parabola", "Hyperbola", "Circle"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p23e2_3",
            q: "The value of g at the center of Earth is:",
            options: ["Zero", "Maximum", "Same as surface", "Infinite"],
            ans: 0,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p23e2_4",
            q: "In Young's double slit experiment, if the wavelength of light is doubled and distance between slits is halved, the fringe width:",
            options: ["Doubles", "Halves", "Quadruples", "Remains same"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Medium"
        },
        {
            id: "p23e2_5",
            q: "The magnetic field due to a straight wire at a point depends on:",
            options: ["Current only", "Distance only", "Both current and distance", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e2_6",
            q: "The potential energy of a system of charges depends on:",
            options: ["Magnitude of charges", "Distance between charges", "Both A and B", "Medium only"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_7",
            q: "The activity of a radioactive sample reduces to 1/256 of initial value in:",
            options: ["6 half-lives", "7 half-lives", "8 half-lives", "9 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_8",
            q: "The banking angle θ for a vehicle depends on:",
            options: ["Speed only", "Radius only", "Both speed and radius", "Mass of vehicle"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p23e2_9",
            q: "The resistance of a wire is halved when:",
            options: ["Length is halved", "Area is doubled", "Both A and B", "Temperature decreases"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23e2_10",
            q: "The speed of sound in air at 27°C is approximately:",
            options: ["330 m/s", "343 m/s", "346 m/s", "350 m/s"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e2_11",
            q: "The time period of a simple pendulum is independent of:",
            options: ["Length", "Mass", "Gravity", "Amplitude"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p23e2_12",
            q: "The capacitance of a capacitor increases if:",
            options: ["Dielectric constant decreases", "Distance between plates decreases", "Area decreases", "Charge decreases"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_14",
            q: "The de Broglie wavelength is associated with:",
            options: ["Photons", "Electrons", "All particles", "None"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p23e2_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p23e2_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e2_19",
            q: "The resistivity of a material is measured in:",
            options: ["Ohm", "Ohm-meter", "Siemens", "Farad"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23e2_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e2_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p23e2_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23e2_23",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e2_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p23e2_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p23e2_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p23e2_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e2_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p23e2_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e2_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_35",
            q: "The half-life of a radioactive substance is 5 days. After 20 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p23e2_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23e2_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e2_40",
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
            id: "c23e2_1",
            q: "The number of moles in 6.72 L of CO at STP is:",
            options: ["0.3", "0.4", "0.2", "0.6"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23e2_2",
            q: "The oxidation state of Cr in Cr₂O₇²⁻ is:",
            options: ["+2", "+3", "+6", "+7"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23e2_3",
            q: "The shape of BeCl₂ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23e2_4",
            q: "The pH of 10⁻⁸ M H⁺ is:",
            options: ["1", "7", "8", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e2_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e2_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂CH₂OH is:",
            options: ["Hexanol", "Pentanol", "Butanol", "Propanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_7",
            q: "The number of σ bonds in ethane is:",
            options: ["6", "7", "8", "9"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_8",
            q: "The element with atomic number 20 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c23e2_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23e2_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23e2_11",
            q: "The bond order of He₂ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e2_12",
            q: "The solubility product of Ag₂CrO₄ is 1.1 × 10⁻¹². Its solubility is:",
            options: ["1.1 × 10⁻⁴", "6.5 × 10⁻⁵", "1.3 × 10⁻⁴", "2.2 × 10⁻⁴"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c23e2_13",
            q: "The isomerism shown by C₅H₁₂ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c23e2_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c23e2_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c23e2_18",
            q: "The pKa of H₂CO₃ is:",
            options: ["6.37", "7.0", "9.2", "14.0"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e2_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23e2_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23e2_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23e2_23",
            q: "The shape of I₃⁻ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e2_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23e2_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23e2_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c23e2_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e2_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23e2_30",
            q: "The pH of 10⁻¹⁰ M HCl is:",
            options: ["1", "7", "10", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e2_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e2_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23e2_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e2_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c23e2_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23e2_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e2_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e2_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c23e2_40",
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
            id: "m23e2_1",
            q: "The derivative of sec² x is:",
            options: ["sec x tan x", "2 sec x tan x", "sec² x tan x", "tan² x sec x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_2",
            q: "The integral of 10x⁹ dx is:",
            options: ["x¹⁰", "x¹⁰ + C", "10x¹⁰", "10x¹⁰ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_3",
            q: "The roots of x² - 18x + 81 = 0 are:",
            options: ["9, 9", "3, 15", "-9, -9", "9, -9"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_4",
            q: "The area of a circle with radius 10 cm is:",
            options: ["100π cm²", "200π cm²", "300π cm²", "400π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_5",
            q: "The probability of getting a 3 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23e2_6",
            q: "The equation of line with slope 4/5 and y-intercept 6 is:",
            options: ["y = 4x", "y = 4x + 6", "y = 5x + 4", "y = 4x - 6"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23e2_7",
            q: "The value of log₁₄ 196 is:",
            options: ["2", "3", "4", "14"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23e2_8",
            q: "The number of ways to arrange 11 distinct objects is:",
            options: ["11", "121", "39916800", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_9",
            q: "The distance between (9,10) and (12,14) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_10",
            q: "The limit of (x² - 121)/(x - 11) as x approaches 11 is:",
            options: ["0", "11", "22", "121"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23e2_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_12",
            q: "The sum of first 12 natural numbers is:",
            options: ["66", "72", "78", "84"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23e2_13",
            q: "The equation of circle with center (8,9) and radius 7 is:",
            options: ["(x-8)² + (y-9)² = 49", "(x+8)² + (y+9)² = 49", "x² + y² = 49", "(x-8)² + (y-9)² = 7"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_14",
            q: "The derivative of e¹¹x is:",
            options: ["e¹¹x", "11e¹¹x", "e^x", "11e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_15",
            q: "The angle between vectors 8i + 9j and 9i + 8j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23e2_16",
            q: "The coefficient of x⁹ in (1 + x)¹³ is:",
            options: ["13", "78", "286", "715"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23e2_17",
            q: "The domain of f(x) = √(x + 9) is:",
            options: ["x ≥ -9", "x > -9", "x ≤ -9", "x < -9"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23e2_18",
            q: "The period of sin 9x is:",
            options: ["π", "π/9", "2π", "2π/9"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_19",
            q: "The number of solutions of sin x = 0.8 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_20",
            q: "The determinant of [[10,11],[8,9]] is:",
            options: ["2", "10", "18", "38"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23e2_21",
            q: "The area under the curve y = x² from x = 7 to x = 9 is:",
            options: ["32/3", "40/3", "48/3", "272/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_22",
            q: "The mean of 9, 11, 13 is:",
            options: ["10", "11", "12", "13"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23e2_23",
            q: "The derivative of x⁷ e^x is:",
            options: ["7x⁶ e^x", "x⁷ e^x", "7x⁶ e^x + x⁷ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_24",
            q: "The angle subtended by an arc of length 10r at center is:",
            options: ["1 radian", "10 radians", "π radians", "π/10 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_26",
            q: "The solution of dy/dx = 8x⁷ is:",
            options: ["y = x⁸", "y = x⁸ + C", "y = 8x⁸", "y = 8x⁸ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_30",
            q: "The number of ways to choose 8 items from 10 is:",
            options: ["45", "50", "55", "60"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_31",
            q: "The modulus of 10 - 24i is:",
            options: ["10", "24", "26", "34"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23e2_32",
            q: "The derivative of x¹² is:",
            options: ["x¹¹", "12x¹¹", "12x¹⁰", "x¹³"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_33",
            q: "The area of triangle with vertices (8,9), (11,13), (14,9) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23e2_34",
            q: "The value of lim (x→0) (sin 7x)/x is:",
            options: ["0", "1", "7", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23e2_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_36",
            q: "The probability of getting a number divisible by 2 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23e2_37",
            q: "The slope of y = 8 is:",
            options: ["0", "8", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23e2_38",
            q: "The value of log₁₀ 10000000 is:",
            options: ["6", "7", "8", "10"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23e2_39",
            q: "The number of ways to arrange letters of 'COMPUTER' is:",
            options: ["5040", "10080", "15120", "20160"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m23e2_40",
            q: "The distance from (8,10) to (12,14) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_41",
            q: "The limit of (8x + 9)/(6x + 7) as x → ∞ is:",
            options: ["0", "1", "8/6", "9/7"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23e2_42",
            q: "The integral of e¹²x dx is:",
            options: ["e¹²x", "e¹²x/12", "(1/12)e¹²x", "(1/12)e¹²x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_43",
            q: "The sum of infinite GP 1/9 + 1/81 + 1/729 + ... is:",
            options: ["1/9", "1/8", "1/7", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23e2_44",
            q: "The center of circle x² + y² - 20x + 18y + 25 = 0 is:",
            options: ["(10, -9)", "(-10, 9)", "(10, 9)", "(-10, -9)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23e2_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_46",
            q: "The dot product of 9i + 11j and 11i + 9j is:",
            options: ["99", "121", "198", "220"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23e2_47",
            q: "The general term of (a + b)¹² is:",
            options: ["¹²Cᵣ aʳ b¹²⁻ʳ", "¹²Cᵣ a¹²⁻ʳ bʳ", "¹²Cᵣ a¹² bʳ", "¹²Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23e2_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23e2_49",
            q: "The value of sin 90° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_51",
            q: "The rank of matrix [[7,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23e2_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_53",
            q: "The median of 8, 10, 12, 14, 16 is:",
            options: ["10", "11", "12", "14"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23e2_54",
            q: "The derivative of x⁸ ln x is:",
            options: ["8x⁷ ln x", "x⁸/x", "8x⁷ ln x + 8x⁷", "8x⁷ ln x + x⁸"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_55",
            q: "The angle in radian for 240° is:",
            options: ["π/3", "π/2", "4π/3", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_57",
            q: "The solution of d²y/dx² = 20 is:",
            options: ["y = 10x²", "y = 10x² + C₁x + C₂", "y = 20x²", "y = 20x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_59",
            q: "The value of ∫_{-8}^7 x dx is:",
            options: ["-7.5", "7.5", "15", "16"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m23e2_61",
            q: "The number of ways to choose 9 items from 12 is:",
            options: ["220", "240", "260", "280"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e2_62",
            q: "The argument of 8 + 15i is:",
            options: ["tan⁻¹(8/15)", "tan⁻¹(15/8)", "sin⁻¹(8/17)", "cos⁻¹(15/17)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23e2_63",
            q: "The derivative of x¹⁴ is:",
            options: ["x¹³", "14x¹³", "14x¹²", "x¹⁵"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_64",
            q: "The area of parallelogram with vectors 10i + 11j and 11i + 10j is:",
            options: ["21", "121", "220", "441"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23e2_65",
            q: "The value of lim (x→∞) (x⁷ + 8)/(x⁷ + 9) is:",
            options: ["0", "1", "8", "9"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23e2_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_67",
            q: "The sum of AP 10, 14, 18, 22, 26 is:",
            options: ["80", "85", "90", "100"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23e2_68",
            q: "The radius of circle x² + y² - 14x + 18y + 18 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23e2_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_70",
            q: "The cross product of k × i is:",
            options: ["0", "1", "-1", "-j"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23e2_71",
            q: "The middle term in (x + y)²⁰ is:",
            options: ["190 x¹⁰ y¹⁰", "184756 x¹⁰ y¹⁰", "15504 x¹⁰ y¹⁰", "1001 x¹⁰ y¹⁰"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m23e2_72",
            q: "The domain of f(x) = 1/(x² - 49) is:",
            options: ["R", "R - {7}", "R - {-7, 7}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23e2_73",
            q: "The value of cos 270° is:",
            options: ["0", "1", "-1", "1/2"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_74",
            q: "The number of solutions of tan x = 7 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23e2_76",
            q: "The area under y = 9x from 0 to 1 is:",
            options: ["4.5", "5", "6", "9"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e2_77",
            q: "The mode of 9, 10, 10, 11, 12, 12, 12 is:",
            options: ["9", "10", "11", "12"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23e2_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e2_79",
            q: "The angle in degrees for 17π/6 radians is:",
            options: ["510°", "480°", "450°", "420°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e2_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;