// ============================================================
//  TG EAMCET 2023 – May 12th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p23m3_1",
            q: "The dimensional formula of surface tension is:",
            options: ["[M L T⁻¹]", "[M L T⁻²]", "[M T⁻²]", "[M L⁻¹ T⁻²]"],
            ans: 2,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p23m3_2",
            q: "A body moves with uniform acceleration. Its displacement-time graph is:",
            options: ["Straight line", "Parabola", "Hyperbola", "Circle"],
            ans: 1,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p23m3_3",
            q: "The orbital velocity of a satellite orbiting close to Earth is approximately:",
            options: ["7.9 km/s", "11.2 km/s", "17.8 km/s", "28.4 km/s"],
            ans: 0,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p23m3_4",
            q: "In Young's double slit experiment, if the distance between slits is doubled, the fringe width:",
            options: ["Doubles", "Halves", "Quadruples", "Remains same"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_5",
            q: "The magnetic field due to a straight wire at a point depends on:",
            options: ["Current only", "Distance only", "Both current and distance", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m3_6",
            q: "The potential energy of a system of charges depends on:",
            options: ["Magnitude of charges", "Distance between charges", "Both A and B", "Medium only"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_7",
            q: "The activity of a radioactive sample reduces to 1/512 of initial value in:",
            options: ["7 half-lives", "8 half-lives", "9 half-lives", "10 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_8",
            q: "The centripetal force is provided by:",
            options: ["Gravity", "Friction", "Tension", "All of these"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p23m3_9",
            q: "The resistance of a wire is doubled when:",
            options: ["Length is doubled", "Area is halved", "Both A and B", "Temperature increases"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23m3_10",
            q: "The speed of sound in air at 32°C is approximately:",
            options: ["352 m/s", "354 m/s", "356 m/s", "358 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m3_11",
            q: "The time period of a simple pendulum is proportional to:",
            options: ["√l", "l", "1/√l", "1/l"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p23m3_12",
            q: "The capacitance of a capacitor increases if:",
            options: ["Dielectric constant decreases", "Distance between plates decreases", "Area decreases", "Charge decreases"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_14",
            q: "The de Broglie wavelength is associated with:",
            options: ["Photons", "Electrons", "All particles", "None"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p23m3_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p23m3_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m3_19",
            q: "The resistivity of a material is measured in:",
            options: ["Ohm", "Ohm-meter", "Siemens", "Farad"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23m3_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23m3_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p23m3_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23m3_23",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m3_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p23m3_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p23m3_28",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p23m3_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m3_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p23m3_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23m3_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_35",
            q: "The half-life of a radioactive substance is 6 days. After 24 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p23m3_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23m3_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23m3_40",
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
            id: "c23m3_1",
            q: "The number of moles in 8.96 L of CO at STP is:",
            options: ["0.4", "0.2", "0.6", "0.8"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23m3_2",
            q: "The oxidation state of Mn in MnO₄⁻ is:",
            options: ["+5", "+6", "+7", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23m3_3",
            q: "The shape of CO₃²⁻ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23m3_4",
            q: "The pH of 10⁻⁹ M H⁺ is:",
            options: ["1", "7", "9", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m3_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m3_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂CH₂CH₂OH is:",
            options: ["Heptanol", "Hexanol", "Pentanol", "Butanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_7",
            q: "The number of π bonds in ethyne is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_8",
            q: "The element with atomic number 21 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 2,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c23m3_9",
            q: "The enthalpy of vaporization is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23m3_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23m3_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m3_12",
            q: "The solubility product of Ag₂CrO₄ is 1.1 × 10⁻¹². Its solubility is:",
            options: ["1.1 × 10⁻⁴", "6.5 × 10⁻⁵", "1.3 × 10⁻⁴", "2.2 × 10⁻⁴"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c23m3_13",
            q: "The isomerism shown by C₆H₁₄ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c23m3_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c23m3_17",
            q: "The magnetic moment of Ti³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 0,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c23m3_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m3_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23m3_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₶H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23m3_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23m3_23",
            q: "The shape of ICl₃ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m3_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23m3_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23m3_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c23m3_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m3_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23m3_30",
            q: "The pH of 10⁻¹¹ M HCl is:",
            options: ["1", "7", "11", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23m3_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23m3_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23m3_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m3_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c23m3_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23m3_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23m3_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23m3_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c23m3_40",
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
            id: "m23m3_1",
            q: "The derivative of csc² x is:",
            options: ["-csc x cot x", "2 csc x cot x", "-2 csc x cot x", "csc² x cot x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_2",
            q: "The integral of 11x¹⁰ dx is:",
            options: ["x¹¹", "x¹¹ + C", "11x¹¹", "11x¹¹ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_3",
            q: "The roots of x² - 20x + 100 = 0 are:",
            options: ["10, 10", "5, 15", "-10, -10", "10, -10"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_4",
            q: "The area of a circle with radius 11 cm is:",
            options: ["121π cm²", "242π cm²", "363π cm²", "484π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_5",
            q: "The probability of getting a 4 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23m3_6",
            q: "The equation of line with slope 5/6 and y-intercept 7 is:",
            options: ["y = 5x", "y = 5x + 7", "y = 6x + 5", "y = 5x - 7"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23m3_7",
            q: "The value of log₂₅ 5 is:",
            options: ["1/2", "2", "1", "5"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23m3_8",
            q: "The number of ways to arrange 12 distinct objects is:",
            options: ["12", "144", "479001600", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_9",
            q: "The distance between (10,11) and (13,15) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_10",
            q: "The limit of (x² - 144)/(x - 12) as x approaches 12 is:",
            options: ["0", "12", "24", "144"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m3_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_12",
            q: "The sum of first 13 natural numbers is:",
            options: ["78", "85", "91", "96"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m3_13",
            q: "The equation of circle with center (9,10) and radius 8 is:",
            options: ["(x-9)² + (y-10)² = 64", "(x+9)² + (y+10)² = 64", "x² + y² = 64", "(x-9)² + (y-10)² = 8"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_14",
            q: "The derivative of e¹³x is:",
            options: ["e¹³x", "13e¹³x", "e^x", "13e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_15",
            q: "The angle between vectors 9i + 10j and 10i + 9j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23m3_16",
            q: "The coefficient of x¹¹ in (1 + x)¹⁵ is:",
            options: ["15", "105", "455", "1365"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23m3_17",
            q: "The domain of f(x) = √(x + 10) is:",
            options: ["x ≥ -10", "x > -10", "x ≤ -10", "x < -10"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m3_18",
            q: "The period of sin 10x is:",
            options: ["π", "π/10", "2π", "2π/10"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_19",
            q: "The number of solutions of sin x = 0.9 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_20",
            q: "The determinant of [[11,12],[9,10]] is:",
            options: ["2", "10", "22", "48"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m3_21",
            q: "The area under the curve y = x² from x = 8 to x = 10 is:",
            options: ["32/3", "40/3", "48/3", "320/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_22",
            q: "The mean of 10, 12, 14 is:",
            options: ["11", "12", "13", "14"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m3_23",
            q: "The derivative of x⁸ e^x is:",
            options: ["8x⁷ e^x", "x⁸ e^x", "8x⁷ e^x + x⁸ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_24",
            q: "The angle subtended by an arc of length 11r at center is:",
            options: ["1 radian", "11 radians", "π radians", "π/11 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_26",
            q: "The solution of dy/dx = 9x⁸ is:",
            options: ["y = x⁹", "y = x⁹ + C", "y = 9x⁹", "y = 9x⁹ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_30",
            q: "The number of ways to choose 9 items from 11 is:",
            options: ["55", "66", "77", "88"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_31",
            q: "The modulus of 12 - 16i is:",
            options: ["12", "16", "20", "28"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23m3_32",
            q: "The derivative of x¹³ is:",
            options: ["x¹²", "13x¹²", "13x¹¹", "x¹⁴"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_33",
            q: "The area of triangle with vertices (9,10), (12,14), (15,10) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m3_34",
            q: "The value of lim (x→0) (sin 8x)/x is:",
            options: ["0", "1", "8", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23m3_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_36",
            q: "The probability of getting a number greater than 3 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23m3_37",
            q: "The slope of y = 9 is:",
            options: ["0", "9", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23m3_38",
            q: "The value of log₁₀ 100000000 is:",
            options: ["6", "7", "8", "9"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23m3_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m23m3_40",
            q: "The distance from (9,11) to (13,15) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_41",
            q: "The limit of (9x + 10)/(7x + 8) as x → ∞ is:",
            options: ["0", "1", "9/7", "10/8"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m3_42",
            q: "The integral of e¹⁴x dx is:",
            options: ["e¹⁴x", "e¹⁴x/14", "(1/14)e¹⁴x", "(1/14)e¹⁴x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_43",
            q: "The sum of infinite GP 1/10 + 1/100 + 1/1000 + ... is:",
            options: ["1/10", "1/9", "1/8", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m3_44",
            q: "The center of circle x² + y² - 22x + 20y + 25 = 0 is:",
            options: ["(11, -10)", "(-11, 10)", "(11, 10)", "(-11, -10)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m3_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_46",
            q: "The dot product of 10i + 11j and 11i + 10j is:",
            options: ["100", "121", "221", "241"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23m3_47",
            q: "The general term of (a + b)¹³ is:",
            options: ["¹³Cᵣ aʳ b¹³⁻ʳ", "¹³Cᵣ a¹³⁻ʳ bʳ", "¹³Cᵣ a¹³ bʳ", "¹³Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23m3_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m3_49",
            q: "The value of sin 0° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_51",
            q: "The rank of matrix [[8,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m3_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_53",
            q: "The median of 9, 11, 13, 15, 17 is:",
            options: ["11", "12", "13", "15"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m3_54",
            q: "The derivative of x⁹ ln x is:",
            options: ["9x⁸ ln x", "x⁹/x", "9x⁸ ln x + 9x⁸", "9x⁸ ln x + x⁹"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_55",
            q: "The angle in radian for 225° is:",
            options: ["π/4", "π/2", "5π/4", "3π/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_57",
            q: "The solution of d²y/dx² = 21 is:",
            options: ["y = (21/2)x²", "y = (21/2)x² + C₁x + C₂", "y = 21x²", "y = 21x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_59",
            q: "The value of ∫_{-9}^8 x dx is:",
            options: ["-8.5", "8.5", "17", "18"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m23m3_61",
            q: "The number of ways to choose 10 items from 13 is:",
            options: ["78", "286", "1287", "1716"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23m3_62",
            q: "The argument of 9 + 12i is:",
            options: ["tan⁻¹(9/12)", "tan⁻¹(12/9)", "sin⁻¹(9/15)", "cos⁻¹(12/15)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23m3_63",
            q: "The derivative of x¹⁵ is:",
            options: ["x¹⁴", "15x¹⁴", "15x¹³", "x¹⁶"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_64",
            q: "The area of parallelogram with vectors 11i + 12j and 12i + 11j is:",
            options: ["22", "121", "264", "529"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23m3_65",
            q: "The value of lim (x→∞) (x⁸ + 9)/(x⁸ + 10) is:",
            options: ["0", "1", "8", "9"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23m3_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_67",
            q: "The sum of AP 11, 15, 19, 23, 27 is:",
            options: ["75", "80", "85", "95"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23m3_68",
            q: "The radius of circle x² + y² - 16x + 20y + 16 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23m3_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_70",
            q: "The cross product of k × i is:",
            options: ["0", "1", "-1", "-j"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23m3_71",
            q: "The middle term in (x + y)²² is:",
            options: ["231 x¹¹ y¹¹", "1540 x¹¹ y¹¹", "924 x¹¹ y¹¹", "646646 x¹¹ y¹¹"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m23m3_72",
            q: "The domain of f(x) = 1/(x² - 64) is:",
            options: ["R", "R - {8}", "R - {-8, 8}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23m3_73",
            q: "The value of cos 300° is:",
            options: ["0", "1/2", "-1/2", "1"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_74",
            q: "The number of solutions of tan x = 8 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23m3_76",
            q: "The area under y = 10x from 0 to 1 is:",
            options: ["5", "6", "7", "10"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23m3_77",
            q: "The mode of 10, 11, 11, 12, 13, 13, 13 is:",
            options: ["10", "11", "12", "13"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23m3_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23m3_79",
            q: "The angle in degrees for 19π/6 radians is:",
            options: ["570°", "540°", "510°", "480°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23m3_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;