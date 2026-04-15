// ============================================================
//  TG EAPCET 2024 – May 9th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24e3_1",
            q: "The force between two point charges q1 and q2 separated by distance r is:",
            options: ["k q1 q2 / r", "k q1 q2 / r²", "k q1 q2 / r³", "k q1 q2"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_2",
            q: "The dimensional formula of stress is:",
            options: ["[M L T⁻¹]", "[M L⁻¹ T⁻²]", "[M L T⁻²]", "[M⁰ L⁰ T⁰]"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p24e3_3",
            q: "The orbital velocity of a satellite orbiting close to Earth is approximately:",
            options: ["7.9 km/s", "11.2 km/s", "17.8 km/s", "28.4 km/s"],
            ans: 0,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p24e3_4",
            q: "In Young's double slit experiment, the central fringe is:",
            options: ["Bright", "Dark", "Colored", "Absent"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_5",
            q: "The magnetic field at the center of a circular current carrying wire is:",
            options: ["μ₀I/2πr", "μ₀I/4πr", "μ₀I/2r", "μ₀I/r"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e3_6",
            q: "The potential difference between two points is:",
            options: ["Force × displacement", "Work done per unit charge", "Current × resistance", "Charge × current"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_7",
            q: "The activity of a radioactive sample reduces to 1/32 of initial value in:",
            options: ["3 half-lives", "4 half-lives", "5 half-lives", "6 half-lives"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_8",
            q: "The banking angle θ for a vehicle moving with speed v on a curve of radius r is:",
            options: ["tan θ = v²/gr", "tan θ = v²/rg", "sin θ = v²/gr", "cos θ = v²/gr"],
            ans: 1,
            topic: "Circular Motion",
            difficulty: "Medium"
        },
        {
            id: "p24e3_9",
            q: "The resistance of a conductor increases when:",
            options: ["Length increases", "Area increases", "Temperature decreases", "Current increases"],
            ans: 0,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e3_10",
            q: "The speed of sound in solids is maximum in:",
            options: ["Wood", "Water", "Air", "Steel"],
            ans: 3,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e3_11",
            q: "The time period of a simple pendulum depends on:",
            options: ["Mass of bob", "Amplitude", "Length", "Material"],
            ans: 2,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24e3_12",
            q: "The capacitance of a parallel plate capacitor increases when:",
            options: ["Distance between plates increases", "Area decreases", "Dielectric constant increases", "Charge decreases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_13",
            q: "The power of a concave lens is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_14",
            q: "The de Broglie wavelength is associated with:",
            options: ["Photons", "Electrons", "All particles", "None"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_15",
            q: "The coefficient of kinetic friction is:",
            options: ["Always less than static friction", "Always greater than static friction", "Equal to static friction", "Zero"],
            ans: 0,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24e3_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²/2", "MR²/3", "MR²/4", "MR²"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_17",
            q: "The average kinetic energy of gas molecules depends on:",
            options: ["Mass of molecules", "Temperature", "Pressure", "Volume"],
            ans: 1,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p24e3_18",
            q: "The magnetic field inside a long solenoid depends on:",
            options: ["Length of solenoid", "Number of turns", "Current", "Both B and C"],
            ans: 3,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e3_19",
            q: "The resistivity of a material depends on:",
            options: ["Length", "Area", "Nature of material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e3_20",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e3_21",
            q: "The energy of electron in hydrogen atom varies as:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p24e3_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e3_23",
            q: "The principle of superposition applies to:",
            options: ["Light waves only", "Sound waves only", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e3_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Geometry", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24e3_25",
            q: "The refractive index of glass is:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_26",
            q: "The binding energy per nucleon is maximum for:",
            options: ["Deuterium", "Helium", "Carbon", "Iron"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_27",
            q: "The photoelectric effect was discovered by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 2,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p24e3_28",
            q: "The efficiency of a Carnot engine cannot exceed:",
            options: ["50%", "75%", "90%", "100%"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["M × l", "M/l", "M²/l", "M × l²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24e3_30",
            q: "The velocity of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e3_31",
            q: "The radius of gyration has dimensions of:",
            options: ["Length", "Mass", "Time", "Angle"],
            ans: 0,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_32",
            q: "Mutual inductance between two coils depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p24e3_33",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both move perpendicular", "Both at rest"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e3_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_35",
            q: "The half-life of a radioactive substance is 4 days. After 16 days, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 3,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh", "nh/2", "nh/2π", "n²h/2π"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24e3_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e3_38",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_39",
            q: "Nuclear fission was discovered by:",
            options: ["Rutherford", "Bohr", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e3_40",
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
            id: "c24e3_1",
            q: "The number of moles in 4.48 L of CO at STP is:",
            options: ["0.2", "0.4", "0.1", "0.8"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e3_2",
            q: "The oxidation state of Mn in KMnO₄ is:",
            options: ["+2", "+4", "+6", "+7"],
            ans: 3,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24e3_3",
            q: "The shape of BF₃ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e3_4",
            q: "The pH of 10⁻⁶ M H⁺ is:",
            options: ["1", "2", "3", "6"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e3_5",
            q: "The rate of reaction depends on:",
            options: ["Temperature", "Concentration", "Catalyst", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e3_6",
            q: "The IUPAC name of CH₃-CH₂-CH₂-CH₂-CH₂-OH is:",
            options: ["Pentanol", "Butanol", "Propanol", "Ethanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_7",
            q: "The number of σ bonds in ethane is:",
            options: ["6", "7", "8", "9"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_8",
            q: "The element with atomic number 19 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24e3_9",
            q: "The enthalpy of sublimation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24e3_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e3_11",
            q: "The bond order of F₂ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e3_12",
            q: "The solubility product of BaSO₄ is 1.0 × 10⁻¹⁰. Its solubility is:",
            options: ["1.0 × 10⁻⁵", "1.0 × 10⁻³", "1.0 × 10⁻⁷", "1.0 × 10⁻¹⁰"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24e3_13",
            q: "The isomerism shown by C₅H₁₂ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_14",
            q: "The molecular formula of chlorophyll is:",
            options: ["C₅₅H₇₂O₅N₄Mg", "C₅₅H₇₂O₆N₄Mg", "C₅₅H₇₂O₇N₄Mg", "C₅₅H₇₂O₈N₄Mg"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c24e3_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24e3_17",
            q: "The magnetic moment of V³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 1,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24e3_18",
            q: "The pKa of NH₄⁺ is:",
            options: ["4.76", "7.0", "9.2", "9.25"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e3_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e3_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_21",
            q: "The molecular formula of amylopectin is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₶)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e3_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24e3_23",
            q: "The shape of SF₄ is:",
            options: ["Tetrahedral", "Trigonal bipyramidal", "See-saw", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e3_24",
            q: "The equivalent weight of Fe in Fe₂(SO₄)₃ is:",
            options: ["28", "56", "112", "168"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24e3_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e3_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24e3_28",
            q: "The rate constant of a zero order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e3_29",
            q: "The number of lone pairs in H₂O is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e3_30",
            q: "The pH of 10⁻⁸ M HCl is:",
            options: ["1", "6", "7", "8"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e3_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₆", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e3_33",
            q: "The Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Freezing point", "Equilibrium"],
            ans: 3,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24e3_34",
            q: "The number of unpaired electrons in B₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e3_35",
            q: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c24e3_36",
            q: "The number of carbon atoms in arachidic acid is:",
            options: ["16", "18", "20", "22"],
            ans: 2,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e3_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e3_38",
            q: "The hybridization of carbon in C₂H₄ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e3_39",
            q: "The solubility of a gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24e3_40",
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
            id: "m24e3_1",
            q: "The derivative of csc x is:",
            options: ["-csc x cot x", "csc x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_2",
            q: "The integral of 7x⁶ dx is:",
            options: ["x⁷", "x⁷ + C", "7x⁷", "7x⁷ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_3",
            q: "The roots of x² - 12x + 36 = 0 are:",
            options: ["6, 6", "3, 9", "-6, -6", "6, -6"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_4",
            q: "The area of a circle with radius 7 cm is:",
            options: ["49π cm²", "98π cm²", "147π cm²", "196π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_5",
            q: "The probability of getting a 1 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e3_6",
            q: "The equation of line with slope 2 and y-intercept 1 is:",
            options: ["y = 2x", "y = 2x + 1", "y = x + 2", "y = 2x - 1"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e3_7",
            q: "The value of log₈ 64 is:",
            options: ["2", "3", "4", "8"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e3_8",
            q: "The number of ways to arrange 8 distinct objects is:",
            options: ["8", "64", "40320", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_9",
            q: "The distance between (6,7) and (9,11) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_10",
            q: "The limit of (x² - 49)/(x - 7) as x approaches 7 is:",
            options: ["0", "7", "14", "49"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e3_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_12",
            q: "The sum of first 9 natural numbers is:",
            options: ["36", "40", "45", "50"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e3_13",
            q: "The equation of circle with center (5,6) and radius 4 is:",
            options: ["(x-5)² + (y-6)² = 16", "(x+5)² + (y+6)² = 16", "x² + y² = 16", "(x-5)² + (y-6)² = 4"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_14",
            q: "The derivative of e⁵x is:",
            options: ["e⁵x", "5e⁵x", "e^x", "5e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_15",
            q: "The angle between vectors 5i + 6j and 6i + 5j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e3_16",
            q: "The coefficient of x⁴ in (1 + x)⁹ is:",
            options: ["9", "36", "126", "84"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e3_17",
            q: "The domain of f(x) = √(x + 6) is:",
            options: ["x ≥ -6", "x > -6", "x ≤ -6", "x < -6"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e3_18",
            q: "The period of sin 6x is:",
            options: ["π", "π/6", "2π", "2π/6"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_19",
            q: "The number of solutions of sin x = 0.7 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_20",
            q: "The determinant of [[7,8],[5,6]] is:",
            options: ["2", "8", "14", "22"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e3_21",
            q: "The area under the curve y = x² from x = 4 to x = 6 is:",
            options: ["32/3", "40/3", "48/3", "168/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_22",
            q: "The mean of 6, 8, 10 is:",
            options: ["7", "8", "9", "10"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e3_23",
            q: "The derivative of x³ e^x is:",
            options: ["3x² e^x", "x³ e^x", "3x² e^x + x³ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_24",
            q: "The angle subtended by an arc of length 7r at center is:",
            options: ["1 radian", "7 radians", "π radians", "π/7 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_26",
            q: "The solution of dy/dx = 5x⁴ is:",
            options: ["y = x⁵", "y = x⁵ + C", "y = 5x⁵", "y = 5x⁵ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_30",
            q: "The number of ways to choose 5 items from 8 is:",
            options: ["35", "40", "45", "56"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_31",
            q: "The modulus of 7 - 24i is:",
            options: ["7", "24", "25", "31"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24e3_32",
            q: "The derivative of x⁸ is:",
            options: ["x⁷", "8x⁷", "8x⁶", "x⁹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_33",
            q: "The area of triangle with vertices (5,6), (8,10), (11,6) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e3_34",
            q: "The value of lim (x→0) (sin 4x)/x is:",
            options: ["0", "1", "4", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24e3_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_36",
            q: "The probability of getting a prime number on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 2,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e3_37",
            q: "The slope of y = 5 is:",
            options: ["0", "5", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e3_38",
            q: "The value of log₁₀ 1000000 is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e3_39",
            q: "The number of ways to arrange letters of 'ARRANGE' is:",
            options: ["504", "1008", "1512", "2520"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m24e3_40",
            q: "The distance from (5,7) to (9,11) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_41",
            q: "The limit of (5x + 6)/(3x + 4) as x → ∞ is:",
            options: ["0", "1", "5/3", "3/5"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e3_42",
            q: "The integral of e⁴x dx is:",
            options: ["e⁴x", "e⁴x/4", "(1/4)e⁴x", "(1/4)e⁴x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_43",
            q: "The sum of infinite GP 1/6 + 1/36 + 1/216 + ... is:",
            options: ["1/6", "1/5", "1/4", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e3_44",
            q: "The center of circle x² + y² - 14x + 12y + 49 = 0 is:",
            options: ["(7, -6)", "(-7, 6)", "(7, 6)", "(-7, -6)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e3_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_46",
            q: "The dot product of 5i + 7j and 7i + 5j is:",
            options: ["35", "49", "74", "84"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e3_47",
            q: "The general term of (a + b)⁸ is:",
            options: ["⁸Cᵣ aʳ b⁸⁻ʳ", "⁸Cᵣ a⁸⁻ʳ bʳ", "⁸Cᵣ a⁸ bʳ", "⁸Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e3_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e3_49",
            q: "The value of sin 90° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_51",
            q: "The rank of matrix [[4,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e3_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_53",
            q: "The median of 5, 7, 9, 11, 13 is:",
            options: ["7", "8", "9", "11"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e3_54",
            q: "The derivative of x⁵ ln x is:",
            options: ["5x⁴ ln x", "x⁵/x", "5x⁴ ln x + 5x⁴", "5x⁴ ln x + x⁵"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e3_55",
            q: "The angle in radian for 150° is:",
            options: ["π/3", "π/2", "5π/6", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_56",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_57",
            q: "The solution of d²y/dx² = 12 is:",
            options: ["y = 6x²", "y = 6x² + C₁x + C₂", "y = 12x²", "y = 12x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_59",
            q: "The value of ∫_{-5}^4 x dx is:",
            options: ["-9/2", "9/2", "19/2", "21/2"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24e3_61",
            q: "The number of ways to choose 7 items from 10 is:",
            options: ["70", "80", "90", "120"],
            ans: 3,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e3_62",
            q: "The argument of 5 + 12i is:",
            options: ["tan⁻¹(5/12)", "tan⁻¹(12/5)", "sin⁻¹(5/13)", "cos⁻¹(12/13)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24e3_63",
            q: "The derivative of x¹⁰ is:",
            options: ["x⁹", "10x⁹", "10x⁸", "x¹¹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_64",
            q: "The area of parallelogram with vectors 6i + 7j and 7i + 6j is:",
            options: ["12", "25", "42", "85"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e3_65",
            q: "The value of lim (x→∞) (x⁴ + 3)/(x⁴ + 4) is:",
            options: ["0", "1", "3", "4"],
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
            q: "The sum of AP 7, 11, 15, 19, 23 is:",
            options: ["55", "60", "65", "75"],
            ans: 3,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e3_68",
            q: "The radius of circle x² + y² - 8x + 12y + 11 = 0 is:",
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
            q: "The cross product of k × j is:",
            options: ["0", "1", "-1", "i"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e3_71",
            q: "The middle term in (x + y)¹⁴ is:",
            options: ["91 x⁷ y⁷", "3432 x⁷ y⁷", "3003 x⁷ y⁷", "2002 x⁷ y⁷"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24e3_72",
            q: "The domain of f(x) = 1/(x² - 16) is:",
            options: ["R", "R - {4}", "R - {-4, 4}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e3_73",
            q: "The value of cos 180° is:",
            options: ["0", "1", "-1", "1/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e3_74",
            q: "The number of solutions of tan x = 4 in [0, π] is:",
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
            q: "The area under y = 6x from 0 to 1 is:",
            options: ["3", "4", "5", "6"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e3_77",
            q: "The mode of 6, 7, 7, 8, 9, 9, 9 is:",
            options: ["6", "7", "8", "9"],
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
            q: "The angle in degrees for 11π/6 radians is:",
            options: ["330°", "300°", "270°", "240°"],
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