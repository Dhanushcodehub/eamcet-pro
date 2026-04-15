// ============================================================
//  TG EAMCET 2023 – May 10th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p23e_1",
            q: "The number of significant figures in 0.00503 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p23e_2",
            q: "A particle moves with constant velocity. Its average velocity equals:",
            options: ["Instantaneous velocity", "Final velocity", "Initial velocity", "Zero"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p23e_3",
            q: "The time period of a satellite orbiting very close to Earth is:",
            options: ["24 hours", "12 hours", "84 minutes", "42 minutes"],
            ans: 2,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p23e_4",
            q: "In Young's double slit experiment, if the slits are made narrower, the fringe width:",
            options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Medium"
        },
        {
            id: "p23e_5",
            q: "The direction of magnetic field due to a straight current-carrying wire is given by:",
            options: ["Right hand rule", "Left hand rule", "Fleming's rule", "Ampere's rule"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e_6",
            q: "The potential difference between two points in an electric field is:",
            options: ["Force per unit charge", "Charge per unit force", "Work done per unit charge", "Current per unit charge"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e_7",
            q: "The activity of a radioactive sample becomes 1/64 of initial value in:",
            options: ["4 half-lives", "5 half-lives", "6 half-lives", "7 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e_8",
            q: "The centripetal acceleration depends on:",
            options: ["Mass only", "Speed only", "Radius only", "Mass, speed and radius"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p23e_9",
            q: "The resistivity of a conductor depends on:",
            options: ["Length", "Area", "Material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23e_10",
            q: "The speed of sound in air at 25°C is approximately:",
            options: ["332 m/s", "343 m/s", "346 m/s", "350 m/s"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e_11",
            q: "The time period of a simple pendulum is independent of:",
            options: ["Length", "Mass", "Gravity", "Amplitude"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p23e_12",
            q: "The capacitance of a parallel plate capacitor depends on:",
            options: ["Charge", "Potential", "Area and distance", "Current"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e_14",
            q: "The rest mass of a photon is:",
            options: ["Zero", "Equal to electron mass", "Infinite", "Depends on wavelength"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p23e_16",
            q: "The moment of inertia of a thin rod about its end is:",
            options: ["MR²/12", "MR²/3", "MR²/2", "MR²"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23e_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Volume only"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p23e_18",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero", "Non-uniform", "Uniform", "Depends on current"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e_19",
            q: "The resistance of a wire increases with:",
            options: ["Increase in length", "Decrease in area", "Both A and B", "Increase in temperature"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23e_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23e_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p23e_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23e_23",
            q: "The principle of superposition is applicable to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p23e_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Iron", "Uranium"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p23e_28",
            q: "The efficiency of a heat engine cannot exceed:",
            options: ["50%", "75%", "90%", "100%"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p23e_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p23e_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p23e_32",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p23e_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23e_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23e_35",
            q: "The half-life of a radioactive substance is 3 days. After 9 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p23e_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23e_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23e_39",
            q: "Nuclear fission occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23e_40",
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
            id: "c23e_1",
            q: "The number of moles in 3.36 L of CO at STP is:",
            options: ["0.15", "0.2", "0.25", "0.3"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23e_2",
            q: "The oxidation state of Mn in MnO₂ is:",
            options: ["+2", "+3", "+4", "+7"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23e_3",
            q: "The shape of NH₄⁺ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23e_4",
            q: "The pH of 10⁻⁷ M H⁺ is:",
            options: ["1", "7", "13", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂OH is:",
            options: ["Pentanol", "Butanol", "Propanol", "Ethanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_7",
            q: "The number of π bonds in benzene is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_8",
            q: "The element with atomic number 16 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c23e_9",
            q: "The enthalpy of neutralization is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23e_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23e_11",
            q: "The bond order of Li₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e_12",
            q: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility is:",
            options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "3.6 × 10⁻⁵", "7.2 × 10⁻⁵"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c23e_13",
            q: "The isomerism shown by C₄H₈ is:",
            options: ["Structural", "Geometrical", "Optical", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_14",
            q: "The molecular formula of chlorophyll is:",
            options: ["C₅₅H₇₂O₅N₄Mg", "C₅₅H₇₂O₆N₄Mg", "C₅₅H₇₂O₇N₄Mg", "C₅₅H₇₂O₈N₄Mg"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c23e_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c23e_17",
            q: "The magnetic moment of Ti²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 1,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c23e_18",
            q: "The pKa of H₂S is:",
            options: ["7.0", "9.2", "14.0", "6.9"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23e_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23e_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23e_23",
            q: "The shape of I₃⁻ is:",
            options: ["Linear", "Trigonal planar", "T-shaped", "Octahedral"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23e_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23e_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c23e_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23e_30",
            q: "The pH of 10⁻⁹ M HCl is:",
            options: ["1", "7", "9", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23e_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23e_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23e_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c23e_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["10", "12", "14", "16"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23e_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23e_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23e_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c23e_40",
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
            id: "m23e_1",
            q: "The derivative of sec² x is:",
            options: ["sec x tan x", "2 sec x tan x", "sec² x tan x", "tan² x sec x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e_2",
            q: "The integral of 8x⁷ dx is:",
            options: ["x⁸", "x⁸ + C", "8x⁸", "8x⁸ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_3",
            q: "The roots of x² - 14x + 49 = 0 are:",
            options: ["7, 7", "2, 12", "-7, -7", "7, -7"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e_4",
            q: "The area of a circle with radius 8 cm is:",
            options: ["64π cm²", "128π cm²", "192π cm²", "256π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_5",
            q: "The probability of getting a 2 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23e_6",
            q: "The equation of line passing through (0,0) with slope 2/3 is:",
            options: ["y = x", "y = 2x", "y = x/2", "y = 2x/3"],
            ans: 3,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23e_7",
            q: "The value of log₉ 81 is:",
            options: ["2", "3", "4", "9"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23e_8",
            q: "The number of ways to arrange 9 distinct objects is:",
            options: ["9", "81", "362880", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e_9",
            q: "The distance between (7,8) and (10,12) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_10",
            q: "The limit of (x² - 64)/(x - 8) as x approaches 8 is:",
            options: ["0", "8", "16", "64"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23e_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_12",
            q: "The sum of first 10 natural numbers is:",
            options: ["45", "50", "55", "60"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23e_13",
            q: "The equation of circle with center (6,7) and radius 5 is:",
            options: ["(x-6)² + (y-7)² = 25", "(x+6)² + (y+7)² = 25", "x² + y² = 25", "(x-6)² + (y-7)² = 5"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_14",
            q: "The derivative of e⁷x is:",
            options: ["e⁷x", "7e⁷x", "e^x", "7e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_15",
            q: "The angle between vectors 6i + 8j and 8i + 6j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23e_16",
            q: "The coefficient of x⁵ in (1 + x)¹⁰ is:",
            options: ["10", "25", "45", "252"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23e_17",
            q: "The domain of f(x) = √(x + 7) is:",
            options: ["x ≥ -7", "x > -7", "x ≤ -7", "x < -7"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23e_18",
            q: "The period of sin 7x is:",
            options: ["π", "π/7", "2π", "2π/7"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_19",
            q: "The number of solutions of sin x = 0.9 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_20",
            q: "The determinant of [[8,9],[6,7]] is:",
            options: ["2", "8", "14", "24"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23e_21",
            q: "The area under the curve y = x² from x = 5 to x = 7 is:",
            options: ["32/3", "40/3", "48/3", "168/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_22",
            q: "The mean of 7, 9, 11 is:",
            options: ["8", "9", "10", "11"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23e_23",
            q: "The derivative of x⁴ e^x is:",
            options: ["4x³ e^x", "x⁴ e^x", "4x³ e^x + x⁴ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e_24",
            q: "The angle subtended by an arc of length 8r at center is:",
            options: ["1 radian", "8 radians", "π radians", "π/8 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_26",
            q: "The solution of dy/dx = 6x⁵ is:",
            options: ["y = x⁶", "y = x⁶ + C", "y = 6x⁶", "y = 6x⁶ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e_30",
            q: "The number of ways to choose 6 items from 9 is:",
            options: ["54", "64", "74", "84"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e_31",
            q: "The modulus of 8 - 15i is:",
            options: ["8", "15", "17", "23"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23e_32",
            q: "The derivative of x¹¹ is:",
            options: ["x¹⁰", "11x¹⁰", "11x⁹", "x¹²"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_33",
            q: "The area of triangle with vertices (6,7), (9,11), (12,7) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23e_34",
            q: "The value of lim (x→0) (sin 5x)/x is:",
            options: ["0", "1", "5", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23e_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_36",
            q: "The probability of getting a number less than 3 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23e_37",
            q: "The slope of y = 6 is:",
            options: ["0", "6", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23e_38",
            q: "The value of log₁₀ 1000000 is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23e_39",
            q: "The number of ways to arrange letters of 'COMPUTER' is:",
            options: ["5040", "10080", "15120", "20160"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m23e_40",
            q: "The distance from (6,8) to (10,12) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_41",
            q: "The limit of (6x + 7)/(4x + 5) as x → ∞ is:",
            options: ["0", "1", "3/2", "7/5"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23e_42",
            q: "The integral of e⁸x dx is:",
            options: ["e⁸x", "e⁸x/8", "(1/8)e⁸x", "(1/8)e⁸x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_43",
            q: "The sum of infinite GP 1/7 + 1/49 + 1/343 + ... is:",
            options: ["1/7", "1/6", "1/5", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23e_44",
            q: "The center of circle x² + y² - 16x + 14y + 25 = 0 is:",
            options: ["(8, -7)", "(-8, 7)", "(8, 7)", "(-8, -7)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23e_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_46",
            q: "The dot product of 7i + 9j and 9i + 7j is:",
            options: ["63", "81", "126", "144"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23e_47",
            q: "The general term of (a + b)⁹ is:",
            options: ["⁹Cᵣ aʳ b⁹⁻ʳ", "⁹Cᵣ a⁹⁻ʳ bʳ", "⁹Cᵣ a⁹ bʳ", "⁹Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23e_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23e_49",
            q: "The value of sin 270° is:",
            options: ["0", "1/2", "-1", "1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_51",
            q: "The rank of matrix [[5,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23e_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_53",
            q: "The median of 6, 8, 10, 12, 14 is:",
            options: ["8", "9", "10", "12"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23e_54",
            q: "The derivative of x⁶ ln x is:",
            options: ["6x⁵ ln x", "x⁶/x", "6x⁵ ln x + 6x⁵", "6x⁵ ln x + x⁶"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23e_55",
            q: "The angle in radian for 180° is:",
            options: ["π", "π/2", "π/4", "2π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_57",
            q: "The solution of d²y/dx² = 15 is:",
            options: ["y = (15/2)x²", "y = (15/2)x² + C₁x + C₂", "y = 15x²", "y = 15x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23e_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23e_59",
            q: "The value of ∫_{-6}^5 x dx is:",
            options: ["-9.5", "9.5", "19.5", "21.5"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23e_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m23e_61",
            q: "The number of ways to choose 8 items from 12 is:",
            options: ["495", "528", "560", "618"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23e_62",
            q: "The argument of 6 + 8i is:",
            options: ["tan⁻¹(6/8)", "tan⁻¹(8/6)", "sin⁻¹(6/10)", "cos⁻¹(8/10)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23e_63",
            q: "The derivative of x¹² is:",
            options: ["x¹¹", "12x¹¹", "12x¹⁰", "x¹³"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_64",
            q: "The area of parallelogram with vectors 8i + 9j and 9i + 8j is:",
            options: ["16", "25", "72", "145"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e3_65",
            q: "The value of lim (x→∞) (x⁵ + 4)/(x⁵ + 5) is:",
            options: ["0", "1", "4", "5"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e3_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_67",
            q: "The sum of AP 8, 12, 16, 20, 24 is:",
            options: ["60", "65", "70", "80"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e3_68",
            q: "The radius of circle x² + y² - 10x + 14y + 13 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e3_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_70",
            q: "The cross product of k × i is:",
            options: ["0", "1", "-1", "-j"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e3_71",
            q: "The middle term in (x + y)¹⁶ is:",
            options: ["120 x⁸ y⁸", "12870 x⁸ y⁸", "24310 x⁸ y⁸", "11440 x⁸ y⁸"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24e3_72",
            q: "The domain of f(x) = 1/(x² - 25) is:",
            options: ["R", "R - {5}", "R - {-5, 5}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e3_73",
            q: "The value of cos 150° is:",
            options: ["0", "1/2", "-1/2", "√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_74",
            q: "The number of solutions of tan x = 5 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e3_76",
            q: "The area under y = 7x from 0 to 1 is:",
            options: ["3.5", "4", "5", "7"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_77",
            q: "The mode of 7, 8, 8, 9, 10, 10, 10 is:",
            options: ["7", "8", "9", "10"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e3_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_79",
            q: "The angle in degrees for 13π/6 radians is:",
            options: ["390°", "330°", "300°", "270°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;