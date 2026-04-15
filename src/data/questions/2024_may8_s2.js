// ============================================================
//  TG EAPCET 2024 – May 8th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24e2_1",
            q: "The kinetic energy of a body becomes four times its initial value. The linear momentum becomes:",
            options: ["Half", "Same", "Double", "Four times"],
            ans: 2,
            topic: "Work, Energy & Power",
            difficulty: "Easy"
        },
        {
            id: "p24e2_2",
            q: "The dimensional formula of coefficient of viscosity is:",
            options: ["[M L T⁻¹]", "[M L⁻¹ T⁻¹]", "[M L T⁻²]", "[M⁰ L⁰ T⁰]"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p24e2_3",
            q: "The time period of a satellite depends on:",
            options: ["Mass of planet only", "Radius of orbit only", "Mass of planet and radius of orbit", "Mass of satellite"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p24e2_4",
            q: "In Young's double slit experiment, if the screen is moved away from slits, the fringe width:",
            options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_5",
            q: "The magnetic field due to a straight wire is inversely proportional to:",
            options: ["I", "r", "μ₀", "All of these"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e2_6",
            q: "The potential difference between two points is V. The work done in moving Q charge is:",
            options: ["VQ", "V/Q", "Q/V", "V²Q"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_7",
            q: "The activity of a radioactive sample becomes 1/16 of initial value in:",
            options: ["2 half-lives", "3 half-lives", "4 half-lives", "5 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_8",
            q: "The centripetal force is provided by:",
            options: ["Gravity", "Friction", "Tension", "All of these"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p24e2_9",
            q: "The resistance of a wire is R. If length is doubled, the new resistance is:",
            options: ["R/2", "R", "2R", "4R"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e2_10",
            q: "The speed of sound in water is approximately:",
            options: ["330 m/s", "1500 m/s", "5000 m/s", "10000 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e2_11",
            q: "The effective length of a simple pendulum is:",
            options: ["Distance from point of suspension to center of bob", "Length of string", "Both A and B", "None"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24e2_12",
            q: "The capacitance of a parallel plate capacitor depends on:",
            options: ["Charge", "Potential", "Area and distance", "Current"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_13",
            q: "The focal length of a concave lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_14",
            q: "The de Broglie wavelength λ = h/mv. This equation is valid for:",
            options: ["Photons only", "Electrons only", "All particles", "None"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_15",
            q: "The maximum value of coefficient of friction is called:",
            options: ["Static friction", "Kinetic friction", "Limiting friction", "Rolling friction"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24e2_16",
            q: "The moment of inertia of a sphere about its diameter is:",
            options: ["(2/5)MR²", "(1/2)MR²", "(2/3)MR²", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_17",
            q: "The kinetic theory of gases explains:",
            options: ["Pressure", "Temperature", "Both", "None"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p24e2_18",
            q: "The magnetic field at the center of a circular loop carrying current I is:",
            options: ["μ₀I/2r", "μ₀I/4πr", "μ₀I/2πr", "μ₀I/r"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24e2_19",
            q: "The resistivity of a conductor depends on:",
            options: ["Length", "Area", "Material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e2_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e2_21",
            q: "The energy of electron in nth orbit is proportional to:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p24e2_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e2_23",
            q: "The principle of superposition is applicable to:",
            options: ["Mechanical waves", "Electromagnetic waves", "Both", "None"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e2_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24e2_25",
            q: "The refractive index of diamond is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_26",
            q: "The mass defect in nuclear reaction is converted to:",
            options: ["Chemical energy", "Heat energy", "Light energy", "Mechanical energy"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_27",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p24e2_28",
            q: "The efficiency of a heat engine cannot be:",
            options: ["100%", "50%", "25%", "0%"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24e2_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e2_31",
            q: "The radius of gyration has the dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_32",
            q: "Mutual inductance between two coils depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p24e2_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source and observer move towards each other", "Source and observer move away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e2_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_35",
            q: "The half-life of a radioactive substance is 6 days. After 18 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24e2_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e2_38",
            q: "Total internal reflection occurs when light goes from:",
            options: ["Air to glass", "Glass to air", "Water to glass", "Glass to water"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_39",
            q: "Nuclear fusion requires:",
            options: ["Low temperature", "High temperature", "Room temperature", "Zero temperature"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e2_40",
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
            id: "c24e2_1",
            q: "The number of moles in 5.6 L of O₂ at STP is:",
            options: ["0.25", "0.5", "1", "2"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e2_2",
            q: "The oxidation state of Cr in Cr₂O₇²⁻ is:",
            options: ["+2", "+4", "+6", "+7"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24e2_3",
            q: "The shape of BeCl₂ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e2_4",
            q: "The pH of 10⁻⁴ M H⁺ is:",
            options: ["1", "2", "3", "4"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e2_5",
            q: "The rate of reaction depends on:",
            options: ["Temperature", "Concentration", "Catalyst", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e2_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂OH is:",
            options: ["Butanol", "Propanol", "Ethanol", "Methanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_7",
            q: "The number of σ bonds in C₂H₄ is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_8",
            q: "The element with atomic number 17 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24e2_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24e2_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e2_11",
            q: "The bond order of He₂⁺ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e2_12",
            q: "The solubility product of Ca(OH)₂ is 5.5 × 10⁻⁶. Its solubility is:",
            options: ["1.1 × 10⁻²", "2.2 × 10⁻²", "3.3 × 10⁻²", "4.4 × 10⁻²"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24e2_13",
            q: "The isomerism shown by C₃H₈ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 3,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_14",
            q: "The molecular formula of insulin is:",
            options: ["C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₆₅O₇₇S₆"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c24e2_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24e2_17",
            q: "The magnetic moment of Co²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24e2_18",
            q: "The pKa of HCOOH is:",
            options: ["3.77", "4.77", "5.77", "6.77"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e2_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e2_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_21",
            q: "The molecular formula of cellulose is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e2_22",
            q: "The enthalpy change for the reaction N₂ + 3H₂ → 2NH₃ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24e2_23",
            q: "The shape of BrF₅ is:",
            options: ["Tetrahedral", "Trigonal bipyramidal", "Square pyramidal", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e2_24",
            q: "The equivalent weight of Cu in CuSO₄ is:",
            options: ["32", "64", "128", "16"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24e2_25",
            q: "The IUPAC name of CH₃-C≡C-CH₃ is:",
            options: ["But-2-yne", "But-1-yne", "But-2-ene", "But-1-ene"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e2_27",
            q: "The ionization energy decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24e2_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e2_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e2_30",
            q: "The pH of 10⁻⁷ M HCl is:",
            options: ["1", "7", "13", "14"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e2_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_32",
            q: "The molecular formula of xylene is:",
            options: ["C₆H₆", "C₇H₈", "C₈H₁₀", "C₉H₁₂"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e2_33",
            q: "The Gibbs free energy is related to:",
            options: ["Enthalpy", "Entropy", "Temperature", "All of these"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24e2_34",
            q: "The number of unpaired electrons in NO is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e2_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c24e2_36",
            q: "The number of carbon atoms in myristic acid is:",
            options: ["12", "14", "16", "18"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e2_37",
            q: "The order of a reaction is:",
            options: ["Always integer", "Always fractional", "Can be fractional", "Always zero"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e2_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e2_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24e2_40",
            q: "The number of isomers of C₅H₁₀ is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m24e2_1",
            q: "The derivative of tan x is:",
            options: ["sec x", "sec² x", "cos x", "sin x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_2",
            q: "The integral of 5x⁴ dx is:",
            options: ["x⁵", "x⁵ + C", "5x⁵", "5x⁵ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_3",
            q: "The roots of x² - 8x + 16 = 0 are:",
            options: ["4, 4", "2, 8", "-4, -4", "4, -4"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_4",
            q: "The area of a circle with radius 5 cm is:",
            options: ["25π cm²", "50π cm²", "75π cm²", "100π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_5",
            q: "The probability of getting a 6 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e2_6",
            q: "The equation of line with slope 2 and y-intercept 3 is:",
            options: ["y = 2x", "y = 2x + 3", "y = 3x + 2", "y = 2x - 3"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e2_7",
            q: "The value of log₅ 25 is:",
            options: ["2", "5", "10", "25"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e2_8",
            q: "The number of ways to arrange 6 distinct objects is:",
            options: ["6", "36", "720", "120"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_9",
            q: "The distance between (4,5) and (7,9) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_10",
            q: "The limit of (x² - 25)/(x - 5) as x approaches 5 is:",
            options: ["0", "5", "10", "25"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e2_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_12",
            q: "The sum of first 7 natural numbers is:",
            options: ["21", "28", "35", "42"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e2_13",
            q: "The equation of circle with center (3,4) and radius 5 is:",
            options: ["(x-3)² + (y-4)² = 25", "(x+3)² + (y+4)² = 25", "x² + y² = 25", "(x-3)² + (y-4)² = 5"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_14",
            q: "The derivative of e³x is:",
            options: ["e³x", "3e³x", "e^x", "3e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_15",
            q: "The angle between vectors 4i + 3j and 3i + 4j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e2_16",
            q: "The coefficient of x² in (1 + x)⁷ is:",
            options: ["7", "14", "21", "28"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e2_17",
            q: "The domain of f(x) = √(x + 4) is:",
            options: ["x ≥ -4", "x > -4", "x ≤ -4", "x < -4"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e2_18",
            q: "The period of sin 4x is:",
            options: ["π", "π/2", "π/4", "2π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_19",
            q: "The number of solutions of sin x = 0.8 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_20",
            q: "The determinant of [[5,6],[3,4]] is:",
            options: ["2", "8", "14", "18"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e2_21",
            q: "The area under the curve y = x² from x = 2 to x = 4 is:",
            options: ["32/3", "40/3", "48/3", "56/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_22",
            q: "The mean of 4, 6, 8 is:",
            options: ["5", "6", "7", "8"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e2_23",
            q: "The derivative of x e^x is:",
            options: ["e^x", "x e^x", "e^x + x e^x", "e^x - x e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_24",
            q: "The angle subtended by an arc of length 5r at center is:",
            options: ["1 radian", "5 radians", "π radians", "π/5 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_26",
            q: "The solution of dy/dx = 3x² is:",
            options: ["y = x³", "y = x³ + C", "y = 3x³", "y = 3x³ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_30",
            q: "The number of ways to choose 3 items from 6 is:",
            options: ["10", "15", "20", "25"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_31",
            q: "The modulus of 5 - 12i is:",
            options: ["5", "12", "13", "17"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24e2_32",
            q: "The derivative of x⁶ is:",
            options: ["x⁵", "6x⁵", "6x⁴", "x⁷"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_33",
            q: "The area of triangle with vertices (3,4), (6,8), (9,4) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e2_34",
            q: "The value of lim (x→0) (sin 3x)/x is:",
            options: ["0", "1", "3", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24e2_35",
            q: "The integral of sec² x dx is:",
            options: ["tan x", "tan x + C", "-cot x", "-cot x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_36",
            q: "The probability of getting a multiple of 3 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e2_37",
            q: "The slope of y = -1 is:",
            options: ["0", "-1", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e2_38",
            q: "The value of log₁₀ 10000 is:",
            options: ["2", "3", "4", "5"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e2_39",
            q: "The number of ways to arrange letters of 'LEVEL' is:",
            options: ["30", "60", "120", "240"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Medium"
        },
        {
            id: "m24e2_40",
            q: "The distance from (3,4) to (6,8) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_41",
            q: "The limit of (3x + 4)/(x + 2) as x → ∞ is:",
            options: ["0", "1", "2", "3"],
            ans: 3,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e2_42",
            q: "The integral of e²x dx is:",
            options: ["e²x", "e²x/2", "(1/2)e²x", "(1/2)e²x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_43",
            q: "The sum of infinite GP 1/3 + 1/9 + 1/27 + ... is:",
            options: ["1/3", "1/2", "1", "2"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e2_44",
            q: "The center of circle x² + y² - 10x + 8y + 16 = 0 is:",
            options: ["(5, -4)", "(-5, 4)", "(5, 4)", "(-5, -4)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e2_45",
            q: "The derivative of sec x is:",
            options: ["sec x tan x", "-sec x tan x", "cos x", "sin x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_46",
            q: "The dot product of 3i + 2j and 2i + 3j is:",
            options: ["6", "9", "12", "13"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e2_47",
            q: "The general term of (a + b)⁶ is:",
            options: ["⁶Cᵣ aʳ b⁶⁻ʳ", "⁶Cᵣ a⁶⁻ʳ bʳ", "⁶Cᵣ a⁶ bʳ", "⁶Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e2_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e2_49",
            q: "The value of sin 180° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_51",
            q: "The rank of matrix [[2,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e2_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_53",
            q: "The median of 3, 5, 7, 9, 11 is:",
            options: ["5", "6", "7", "9"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e2_54",
            q: "The derivative of x³ ln x is:",
            options: ["3x² ln x", "x³/x", "3x² ln x + 3x²", "3x² ln x + x³"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_55",
            q: "The angle in radian for 120° is:",
            options: ["π/3", "π/2", "2π/3", "π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_56",
            q: "The period of cot x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_57",
            q: "The solution of d²y/dx² = 4 is:",
            options: ["y = 2x²", "y = 2x² + C₁x + C₂", "y = 4x²", "y = 4x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_59",
            q: "The value of ∫_{-3}^2 x dx is:",
            options: ["-5/2", "5/2", "11/2", "13/2"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24e2_61",
            q: "The number of ways to choose 5 items from 8 is:",
            options: ["35", "40", "45", "56"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e2_62",
            q: "The argument of 3 + 4i is:",
            options: ["tan⁻¹(3/4)", "tan⁻¹(4/3)", "sin⁻¹(3/5)", "cos⁻¹(4/5)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24e2_63",
            q: "The derivative of x⁸ is:",
            options: ["x⁷", "8x⁷", "8x⁶", "x⁹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_64",
            q: "The area of parallelogram with vectors 4i + 3j and 3i + 4j is:",
            options: ["7", "12", "13", "24"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e2_65",
            q: "The value of lim (x→∞) (x² + 2)/(x² + 3) is:",
            options: ["0", "1", "2", "∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e2_66",
            q: "The integral of cosec² x dx is:",
            options: ["-cot x", "-cot x + C", "cot x", "cot x + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_67",
            q: "The sum of AP 5, 9, 13, 17, 21 is:",
            options: ["45", "50", "55", "65"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e2_68",
            q: "The radius of circle x² + y² - 4x + 6y + 4 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e2_69",
            q: "The derivative of cos x sin x is:",
            options: ["sin 2x", "cos 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_70",
            q: "The cross product of k × j is:",
            options: ["0", "1", "-1", "i"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e2_71",
            q: "The middle term in (x + y)¹⁰ is:",
            options: ["45 x⁵ y⁵", "100 x⁵ y⁵", "252 x⁵ y⁵", "210 x⁵ y⁵"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24e2_72",
            q: "The domain of f(x) = 1/(x² - 4) is:",
            options: ["R", "R - {2}", "R - {-2, 2}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e2_73",
            q: "The value of cos 270° is:",
            options: ["0", "1", "-1", "1/2"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_74",
            q: "The number of solutions of tan x = 2 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e2_76",
            q: "The area under y = 4x from 0 to 1 is:",
            options: ["2", "3", "4", "5"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e2_77",
            q: "The mode of 4, 5, 5, 6, 7, 7, 7 is:",
            options: ["4", "5", "6", "7"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e2_78",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e2_79",
            q: "The angle in degrees for 5π/6 radians is:",
            options: ["120°", "135°", "150°", "180°"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e2_80",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;