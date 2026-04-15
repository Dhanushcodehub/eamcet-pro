// ============================================================
//  TG EAMCET 2023 – May 10th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p23_1",
            q: "The unit of momentum is:",
            options: ["kg m/s", "kg m²/s", "kg m/s²", "kg/m"],
            ans: 0,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p23_2",
            q: "A ball is thrown vertically upward. At the highest point, its velocity is:",
            options: ["Zero", "Maximum", "Minimum", "Constant"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p23_3",
            q: "The value of g is maximum at:",
            options: ["Equator", "Poles", "Mountains", "Sea level"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p23_4",
            q: "In Young's double slit experiment, if wavelength is doubled, the fringe width:",
            options: ["Doubles", "Halves", "Quadruples", "Remains same"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Medium"
        },
        {
            id: "p23_5",
            q: "The magnetic field due to a straight wire varies as:",
            options: ["r", "r²", "1/r", "1/r²"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23_6",
            q: "The work done in moving a charge in an electric field is:",
            options: ["Force × displacement", "Charge × potential difference", "Both A and B", "None"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23_7",
            q: "The average life of a radioactive substance is:",
            options: ["Same as half-life", "Twice the half-life", "Half the half-life", "Infinite"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p23_8",
            q: "The banking of roads is done to:",
            options: ["Increase speed", "Provide centripetal force", "Both A and B", "None"],
            ans: 1,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p23_9",
            q: "The resistance of a wire depends on:",
            options: ["Length", "Area", "Material", "All of these"],
            ans: 3,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23_10",
            q: "The speed of sound is maximum in:",
            options: ["Air", "Water", "Steel", "Vacuum"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23_11",
            q: "The time period of a simple pendulum depends on:",
            options: ["Mass of bob", "Amplitude", "Length", "Air resistance"],
            ans: 2,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p23_12",
            q: "The capacitance of a parallel plate capacitor depends on:",
            options: ["Charge", "Potential", "Area and distance", "Current"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23_13",
            q: "The power of a lens is measured in:",
            options: ["Meter", "Centimeter", "Dioptre", "Watt"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23_14",
            q: "The de Broglie wavelength is given by:",
            options: ["h/mv", "mv/h", "h/m", "m/hv"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Medium"
        },
        {
            id: "p23_15",
            q: "The limiting friction depends on:",
            options: ["Velocity", "Normal force", "Area of contact", "Both B and C"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p23_16",
            q: "The moment of inertia of a sphere about its diameter is:",
            options: ["(2/5)MR²", "(1/2)MR²", "(2/3)MR²", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p23_17",
            q: "The kinetic theory of gases assumes that:",
            options: ["Molecules are at rest", "Molecules have no energy", "Molecules collide elastically", "Molecules have same mass"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Medium"
        },
        {
            id: "p23_18",
            q: "The magnetic field at the center of a circular loop is:",
            options: ["Zero", "Maximum", "Minimum", "Uniform"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23_19",
            q: "The resistivity of a material depends on:",
            options: ["Length", "Area", "Nature of material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p23_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23_21",
            q: "The ground state energy of hydrogen atom is:",
            options: ["-13.6 eV", "-27.2 eV", "-6.8 eV", "0 eV"],
            ans: 0,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p23_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23_23",
            q: "The principle of superposition applies to:",
            options: ["Light waves", "Sound waves", "Water waves", "All waves"],
            ans: 3,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23_24",
            q: "The self-inductance depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p23_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p23_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Hydrogen", "Helium", "Uranium", "Iron"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p23_27",
            q: "The photoelectric effect was discovered by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 2,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p23_28",
            q: "The efficiency of a Carnot engine depends on:",
            options: ["Working substance", "Temperature of reservoirs", "Speed of engine", "Size of engine"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p23_29",
            q: "The magnetic moment of a current loop is:",
            options: ["IA", "I²A", "A/I", "I/A"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p23_30",
            q: "The speed of light in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p23_31",
            q: "The radius of gyration depends on:",
            options: ["Mass", "Shape", "Axis of rotation", "All of these"],
            ans: 3,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p23_32",
            q: "The mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p23_33",
            q: "The Doppler effect is observed in:",
            options: ["Light", "Sound", "Both", "Neither"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p23_34",
            q: "The electric field inside a conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p23_35",
            q: "The half-life of a first order reaction:",
            options: ["Is constant", "Depends on concentration", "Depends on temperature", "Is zero"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p23_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p23_37",
            q: "The power factor in AC circuits can be:",
            options: ["Greater than 1", "Equal to 1", "Less than 1", "Both B and C"],
            ans: 3,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p23_38",
            q: "The critical angle for glass-air interface is:",
            options: ["42°", "45°", "48°", "50°"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Medium"
        },
        {
            id: "p23_39",
            q: "Nuclear fusion occurs at:",
            options: ["Low temperature", "High temperature", "Room temperature", "Zero temperature"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p23_40",
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
            id: "c23_1",
            q: "The number of moles in 11.2 L of any gas at STP is:",
            options: ["0.5", "1", "2", "4"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23_2",
            q: "The oxidation number of sulphur in SO₄²⁻ is:",
            options: ["+2", "+4", "+6", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c23_3",
            q: "The bond angle in CH₄ is:",
            options: ["90°", "109.5°", "120°", "180°"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23_4",
            q: "The pH of 10⁻² M HCl is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23_5",
            q: "The rate of reaction depends on:",
            options: ["Temperature", "Concentration", "Catalyst", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23_6",
            q: "The IUPAC name of CH₃CH₂OH is:",
            options: ["Ethanol", "Ethanolic acid", "Methanol", "Propanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_7",
            q: "The number of π bonds in C₂H₂ is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_8",
            q: "The element with atomic number 8 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c23_9",
            q: "The enthalpy of solution is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c23_10",
            q: "The coordination number in NaCl is:",
            options: ["4", "6", "8", "12"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23_11",
            q: "The bond order of N₂⁺ is:",
            options: ["1", "1.5", "2", "2.5"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23_12",
            q: "The solubility product of CaF₂ is 4 × 10⁻¹¹. Its solubility is:",
            options: ["2 × 10⁻⁴", "4 × 10⁻⁴", "8 × 10⁻⁴", "1.6 × 10⁻³"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c23_13",
            q: "The isomerism shown by C₄H₆ is:",
            options: ["Structural", "Geometrical", "Optical", "Tautomerism"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_14",
            q: "The molecular formula of sucrose is:",
            options: ["C₁₂H₂₂O₁₁", "C₁₂H₂₂O₁₂", "C₁₂H₂₄O₁₁", "C₁₂H₂₄O₁₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Medium"
        },
        {
            id: "c23_15",
            q: "The standard hydrogen electrode has potential:",
            options: ["0 V", "1 V", "-1 V", "2 V"],
            ans: 0,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_16",
            q: "The reactivity order in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c23_17",
            q: "The magnetic moment of Cr³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c23_18",
            q: "The pKa of formic acid is:",
            options: ["3.75", "4.75", "5.75", "6.75"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23_19",
            q: "The number of atoms per unit cell in SC is:",
            options: ["1", "2", "4", "8"],
            ans: 0,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c23_20",
            q: "The catalyst used in ammonia synthesis is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 0,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_21",
            q: "The molecular formula of lactose is:",
            options: ["C₁₂H₂₂O₁₁", "C₁₂H₂₂O₁₂", "C₁₂H₂₄O₁₁", "C₁₂H₂₄O₁₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23_22",
            q: "The enthalpy change for the reaction 2H₂ + O₂ → 2H₂O is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23_23",
            q: "The shape of SF₆ molecule is:",
            options: ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23_24",
            q: "The number of moles of KMnO₄ required to oxidize 1 mole of FeSO₄ is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c23_25",
            q: "The IUPAC name of C₆H₆ is:",
            options: ["Benzene", "Toluene", "Phenol", "Aniline"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c23_27",
            q: "The electronegativity of oxygen is:",
            options: ["2.1", "3.5", "4.0", "4.5"],
            ans: 1,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c23_28",
            q: "The rate constant depends on:",
            options: ["Concentration", "Temperature", "Pressure", "Volume"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c23_29",
            q: "The number of σ bonds in C₂H₄ is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23_30",
            q: "The pH of 10⁻¹ M NaOH is:",
            options: ["1", "7", "13", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c23_31",
            q: "The catalyst used in hydrogenation of oils is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_32",
            q: "The molecular formula of ethyne is:",
            options: ["C₂H₂", "C₂H₄", "C₂H₆", "C₃H₄"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c23_33",
            q: "The Gibbs free energy is related to:",
            options: ["Enthalpy", "Entropy", "Temperature", "All of these"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c23_34",
            q: "The number of lone pairs in NH₃ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c23_35",
            q: "The equivalent weight of H₂SO₄ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c23_36",
            q: "The number of carbon atoms in glucose is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c23_37",
            q: "The unit of rate constant for first order reaction is:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Medium"
        },
        {
            id: "c23_38",
            q: "The hybridization of carbon in C₂H₂ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c23_39",
            q: "The solubility of a gas in liquid decreases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Decrease in pressure"],
            ans: 0,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c23_40",
            q: "The number of isomers of C₃H₆ is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m23_1",
            q: "The derivative of cos x is:",
            options: ["sin x", "-sin x", "tan x", "-cos x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_2",
            q: "The integral of 3x² dx is:",
            options: ["x³", "x³ + C", "3x³", "3x³ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_3",
            q: "The roots of x² - 4x + 4 = 0 are:",
            options: ["2, 2", "1, 4", "-2, -2", "2, -2"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m23_4",
            q: "The area of a circle with diameter 14 cm is:",
            options: ["49π cm²", "98π cm²", "147π cm²", "196π cm²"],
            ans: 3,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_5",
            q: "The probability of getting an even number on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23_6",
            q: "The equation of line with slope 3 and y-intercept 2 is:",
            options: ["y = 3x", "y = 3x + 2", "y = 2x + 3", "y = 3x - 2"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23_7",
            q: "The value of log₂ 16 is:",
            options: ["2", "3", "4", "8"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23_8",
            q: "The number of ways to arrange 3 distinct objects is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23_9",
            q: "The distance between (2,3) and (6,8) is:",
            options: ["4", "5", "6", "7"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_10",
            q: "The limit of (x² - 9)/(x - 3) as x approaches 3 is:",
            options: ["0", "3", "6", "9"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_12",
            q: "The sum of first 10 natural numbers is:",
            options: ["45", "50", "55", "60"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23_13",
            q: "The equation of circle with center (2,3) and radius 4 is:",
            options: ["(x-2)² + (y-3)² = 16", "(x+2)² + (y+3)² = 16", "x² + y² = 16", "(x-2)² + (y-3)² = 4"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_14",
            q: "The derivative of eˣ is:",
            options: ["eˣ", "xeˣ", "eˣ/x", "ln e"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_15",
            q: "The angle between vectors 2i + j and i + 2j is:",
            options: ["0°", "30°", "45°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23_16",
            q: "The coefficient of x³ in (1 + x)⁵ is:",
            options: ["5", "10", "15", "20"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23_17",
            q: "The domain of f(x) = √(x + 2) is:",
            options: ["x ≥ -2", "x > -2", "x ≤ -2", "x < -2"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23_18",
            q: "The period of sin 2x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_19",
            q: "The number of solutions of sin x = 1 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_20",
            q: "The determinant of [[3,4],[1,2]] is:",
            options: ["2", "4", "6", "8"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23_21",
            q: "The area under the curve y = x² from x = 1 to x = 2 is:",
            options: ["7/3", "8/3", "9/3", "10/3"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_22",
            q: "The mean of 2, 4, 6 is:",
            options: ["3", "4", "5", "6"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23_23",
            q: "The derivative of x ln x is:",
            options: ["ln x", "1 + ln x", "x + ln x", "1/x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_24",
            q: "The angle subtended by an arc of length 3r at center is:",
            options: ["1 radian", "3 radians", "π radians", "π/3 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_26",
            q: "The solution of dy/dx = x + y is:",
            options: ["y = x + C", "y = 2x + C", "y = Ceˣ - x - 1", "y = Ceˣ - x"],
            ans: 2,
            topic: "Differential Equations",
            difficulty: "Hard"
        },
        {
            id: "m23_27",
            q: "The number of diagonals in a square is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_30",
            q: "The number of ways to choose 2 items from 4 is:",
            options: ["4", "6", "8", "12"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23_31",
            q: "The modulus of 3 - 4i is:",
            options: ["3", "4", "5", "7"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m23_32",
            q: "The derivative of x⁴ is:",
            options: ["x³", "4x³", "4x²", "x⁵"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_33",
            q: "The area of triangle with vertices (1,2), (3,4), (5,2) is:",
            options: ["2", "4", "6", "8"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23_34",
            q: "The value of lim (x→0) (eˣ - 1)/x is:",
            options: ["0", "1", "2", "∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23_35",
            q: "The integral of sec² x dx is:",
            options: ["tan x", "tan x + C", "-cot x", "-cot x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_36",
            q: "The probability of getting a prime number on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m23_37",
            q: "The slope of y = -2 is:",
            options: ["0", "-2", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m23_38",
            q: "The value of log₁₀ 1000 is:",
            options: ["2", "3", "4", "10"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m23_39",
            q: "The number of ways to arrange letters of 'ABC' is:",
            options: ["3", "6", "9", "12"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23_40",
            q: "The distance from (1,2) to (4,6) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_41",
            q: "The limit of (1 + 1/n)ⁿ as n → ∞ is:",
            options: ["0", "1", "e", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m23_42",
            q: "The integral of e²ˣ dx is:",
            options: ["e²ˣ", "e²ˣ/2", "(1/2)e²ˣ", "(1/2)e²ˣ + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_43",
            q: "The sum of infinite GP 1/2 + 1/4 + 1/8 + ... is:",
            options: ["1/2", "1", "2", "∞"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23_44",
            q: "The center of circle x² + y² - 6x + 4y = 12 is:",
            options: ["(3, -2)", "(-3, 2)", "(3, 2)", "(-3, -2)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23_45",
            q: "The derivative of tan x is:",
            options: ["sec x", "sec² x", "cos x", "sin x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_46",
            q: "The dot product of i and j is:",
            options: ["0", "1", "-1", "i j"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23_47",
            q: "The coefficient of x in (x + y)⁴ is:",
            options: ["1", "4", "6", "12"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23_49",
            q: "The value of cos 90° is:",
            options: ["0", "1/2", "1", "√3/2"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_51",
            q: "The inverse of matrix [[2,3],[1,2]] is:",
            options: ["[[2,-3],[-1,2]]", "[[2,3],[1,2]]", "[[1,-1],[-1,2]]", "[[2,-1],[-1,1]]"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Medium"
        },
        {
            id: "m23_52",
            q: "The area under y = sin x from 0 to π is:",
            options: ["0", "1", "2", "π"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_53",
            q: "The median of 1, 2, 3, 4, 5 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23_54",
            q: "The derivative of x eˣ is:",
            options: ["eˣ", "x eˣ", "eˣ + x eˣ", "eˣ - x eˣ"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_55",
            q: "The angle in radian for 180° is:",
            options: ["π", "π/2", "π/4", "2π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_56",
            q: "The period of csc x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_57",
            q: "The solution of d²y/dx² = 0 is:",
            options: ["y = ax", "y = ax + b", "y = ax²", "y = ax² + bx"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m23_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m23_59",
            q: "The value of ∫_{-1}^1 x² dx is:",
            options: ["0", "1/3", "2/3", "-1/3"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m23_61",
            q: "The number of ways to choose 3 items from 5 is:",
            options: ["5", "10", "15", "20"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m23_62",
            q: "The argument of 1 - i is:",
            options: ["π/4", "-π/4", "3π/4", "-3π/4"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Medium"
        },
        {
            id: "m23_63",
            q: "The derivative of x⁷ is:",
            options: ["x⁶", "7x⁶", "7x⁵", "x⁸"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_64",
            q: "The area of parallelogram with vectors 2i + 4j and 3i + 6j is:",
            options: ["0", "2", "4", "6"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m23_65",
            q: "The value of lim (x→∞) (x² + 1)/(x² + 2) is:",
            options: ["0", "1", "2", "∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m23_66",
            q: "The integral of cosec x dx is:",
            options: ["ln|tan x/2|", "ln|tan x/2| + C", "ln|sin x|", "ln|sin x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_67",
            q: "The sum of AP 1, 4, 7, 10 is:",
            options: ["12", "16", "20", "22"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m23_68",
            q: "The radius of circle x² + y² - 2x + 4y - 4 = 0 is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m23_69",
            q: "The derivative of sin² x is:",
            options: ["sin 2x", "2 sin x cos x", "cos 2x", "sin x cos x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_70",
            q: "The cross product of j × k is:",
            options: ["0", "1", "-1", "i"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m23_71",
            q: "The middle term in (x + y)⁴ is:",
            options: ["4 x² y²", "6 x² y²", "8 x² y²", "12 x² y²"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m23_72",
            q: "The domain of f(x) = 1/(x-1) is:",
            options: ["R", "R - {1}", "R⁺", "R⁻"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m23_73",
            q: "The value of tan 45° is:",
            options: ["0", "1", "√3/2", "∞"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_74",
            q: "The number of solutions of tan x = 1 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m23_76",
            q: "The area under y = 2x from 0 to 1 is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m23_77",
            q: "The mode of 1, 2, 2, 3, 4, 4, 4 is:",
            options: ["2", "3", "4", "5"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m23_78",
            q: "The derivative of sec x is:",
            options: ["sec x tan x", "-sec x tan x", "cos x", "sin x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m23_79",
            q: "The angle in degrees for π/4 radians is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m23_80",
            q: "The period of cot x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;