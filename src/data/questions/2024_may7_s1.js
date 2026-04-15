// ============================================================
//  TG EAPCET 2024 – May 7th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24_1",
            q: "The dimension of Planck's constant is:",
            options: ["[M L² T⁻¹]", "[M L T⁻¹]", "[M L² T⁻²]", "[M L³ T⁻¹]"],
            ans: 0,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p24_2",
            q: "A particle moves in a straight line with constant acceleration. If its velocity increases from 10 m/s to 30 m/s in 4 seconds, the acceleration is:",
            options: ["2.5 m/s²", "5 m/s²", "7.5 m/s²", "10 m/s²"],
            ans: 1,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p24_3",
            q: "The escape velocity for a planet depends on:",
            options: ["Mass only", "Radius only", "Mass and radius", "Density only"],
            ans: 2,
            topic: "Gravitation",
            difficulty: "Medium"
        },
        {
            id: "p24_4",
            q: "In Young's double slit experiment, the fringe width is 0.5 mm. If the wavelength of light is doubled, the new fringe width will be:",
            options: ["0.25 mm", "0.5 mm", "1 mm", "2 mm"],
            ans: 2,
            topic: "Wave Optics",
            difficulty: "Medium"
        },
        {
            id: "p24_5",
            q: "The magnetic field due to a straight current-carrying wire at a distance r is proportional to:",
            options: ["r", "r²", "1/r", "1/r²"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24_6",
            q: "The work done in moving a charge q from point A to B in an electric field is equal to:",
            options: ["q(V_A - V_B)", "q(V_B - V_A)", "q(V_A + V_B)", "q/(V_A - V_B)"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Medium"
        },
        {
            id: "p24_7",
            q: "The half-life of a radioactive substance is 10 days. What fraction of the substance will remain after 30 days?",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p24_8",
            q: "A body of mass m is rotating in a circular path of radius r with angular velocity ω. The centripetal force is:",
            options: ["mω²r", "mωr²", "mω/r", "mω²/r"],
            ans: 0,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p24_9",
            q: "The power dissipated in a resistor of resistance R when a current I flows through it is:",
            options: ["IR", "I²R", "V²/R", "√(IR)"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24_10",
            q: "The velocity of sound in air at 0°C is 332 m/s. At what temperature will it be 340 m/s?",
            options: ["15°C", "20°C", "25°C", "30°C"],
            ans: 1,
            topic: "Waves",
            difficulty: "Medium"
        },
        {
            id: "p24_11",
            q: "The time period of a simple pendulum depends on:",
            options: ["Mass of bob", "Length of string", "Both mass and length", "Neither mass nor length"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24_12",
            q: "The energy stored in a capacitor of capacitance C charged to potential V is:",
            options: ["CV", "CV²", "(1/2)CV²", "(1/2)CV"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Medium"
        },
        {
            id: "p24_13",
            q: "The focal length of a convex lens is 20 cm. Its power is:",
            options: ["0.05 D", "5 D", "-5 D", "-0.05 D"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24_14",
            q: "The de Broglie wavelength of an electron moving with velocity v is:",
            options: ["h/mv", "mv/h", "h/m", "m/hv"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Medium"
        },
        {
            id: "p24_15",
            q: "The coefficient of friction between two surfaces depends on:",
            options: ["Area of contact", "Nature of surfaces", "Both area and nature", "None of these"],
            ans: 1,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24_16",
            q: "The moment of inertia of a thin rod about an axis perpendicular to its length and passing through its center is:",
            options: ["(1/2)MR²", "(1/3)MR²", "(1/12)MR²", "MR²"],
            ans: 2,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p24_17",
            q: "The pressure exerted by an ideal gas is due to:",
            options: ["Mass of molecules", "Collision of molecules", "Both mass and collision", "None of these"],
            ans: 1,
            topic: "Kinetic Theory",
            difficulty: "Medium"
        },
        {
            id: "p24_18",
            q: "The magnetic field inside a solenoid is:",
            options: ["Uniform", "Non-uniform", "Zero", "Depends on current"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24_19",
            q: "The resistance of a conductor increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in length", "Both A and C"],
            ans: 3,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24_20",
            q: "The unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24_21",
            q: "The total energy of an electron in hydrogen atom is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p24_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24_23",
            q: "The principle of superposition is used in:",
            options: ["Wave optics", "Ray optics", "Geometrical optics", "Physical optics"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p24_24",
            q: "The SI unit of inductance is:",
            options: ["Volt", "Ampere", "Henry", "Coulomb"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24_25",
            q: "The refractive index of diamond is approximately:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24_26",
            q: "The binding energy of a nucleus is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p24_27",
            q: "The work function of a metal is 4.2 eV. The threshold wavelength is:",
            options: ["295 nm", "420 nm", "590 nm", "840 nm"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Hard"
        },
        {
            id: "p24_28",
            q: "The efficiency of a Carnot engine depends on:",
            options: ["Working substance", "Temperature of source and sink", "Both A and B", "None of these"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "p24_29",
            q: "The magnetic moment of a current loop is:",
            options: ["IA", "I/A", "A/I", "I²A"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24_30",
            q: "The speed of light in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24_31",
            q: "The radius of gyration of a body depends on:",
            options: ["Mass", "Shape", "Axis of rotation", "All of these"],
            ans: 3,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p24_32",
            q: "The self-inductance of a coil depends on:",
            options: ["Current through coil", "Number of turns", "Both A and B", "None of these"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24_33",
            q: "The Doppler effect is observed in:",
            options: ["Light waves only", "Sound waves only", "Both light and sound waves", "Neither"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24_34",
            q: "The electric field inside a charged spherical conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Medium"
        },
        {
            id: "p24_35",
            q: "The half-life of a first-order reaction is:",
            options: ["Constant", "Variable", "Depends on initial concentration", "None of these"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p24_36",
            q: "The angular momentum of an electron in Bohr's model is:",
            options: ["nh/2", "nh/2π", "n²h/2π", "nh"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24_37",
            q: "The power factor of an AC circuit is:",
            options: ["Always 1", "Always less than 1", "Can be greater than 1", "Zero"],
            ans: 1,
            topic: "Alternating Current",
            difficulty: "Medium"
        },
        {
            id: "p24_38",
            q: "The critical angle for glass-air interface is:",
            options: ["42°", "45°", "48°", "50°"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Medium"
        },
        {
            id: "p24_39",
            q: "The mass defect in nuclear fission is converted to:",
            options: ["Heat energy", "Light energy", "Sound energy", "Mechanical energy"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24_40",
            q: "The unit of electric field intensity is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Joule/Coulomb"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c24_1",
            q: "The number of moles in 22.4 L of any gas at STP is:",
            options: ["1", "2", "0.5", "4"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24_2",
            q: "The oxidation state of sulphur in H₂SO₄ is:",
            options: ["+2", "+4", "+6", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24_3",
            q: "The hybridization of carbon in CH₄ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24_4",
            q: "The pH of 0.01 M HCl solution is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24_5",
            q: "The rate of reaction depends on:",
            options: ["Temperature only", "Concentration only", "Both A and B", "None of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Medium"
        },
        {
            id: "c24_6",
            q: "The IUPAC name of CH₃COOH is:",
            options: ["Acetic acid", "Ethanolic acid", "Methanoic acid", "Propanoic acid"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_7",
            q: "The number of sigma bonds in benzene is:",
            options: ["6", "12", "18", "24"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24_8",
            q: "The atomic number of an element is 6. It belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24_9",
            q: "The enthalpy of formation of a compound is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24_10",
            q: "The coordination number of Na⁺ in NaCl is:",
            options: ["4", "6", "8", "12"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24_11",
            q: "The bond order of N₂ is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24_12",
            q: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility is:",
            options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "3.6 × 10⁻⁵", "7.2 × 10⁻⁵"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24_13",
            q: "The isomerism shown by C₄H₁₀ is:",
            options: ["Structural", "Geometrical", "Optical", "All of these"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_14",
            q: "The molecular formula of chlorophyll is:",
            options: ["C₅₅H₇₂O₅N₄Mg", "C₅₅H₇₂O₆N₄Mg", "C₅₅H₇₂O₇N₄Mg", "C₅₅H₇₂O₈N₄Mg"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c24_15",
            q: "The standard reduction potential of hydrogen is:",
            options: ["0 V", "+1 V", "-1 V", "2 V"],
            ans: 0,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_16",
            q: "The order of reactivity of alkyl halides in SN1 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "1° > 3° > 2°", "2° > 3° > 1°"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24_17",
            q: "The magnetic moment of Fe³⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24_18",
            q: "The pKa value of acetic acid is:",
            options: ["4.76", "7.0", "9.2", "14.0"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24_19",
            q: "The number of atoms in a unit cell of FCC is:",
            options: ["2", "4", "6", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Medium"
        },
        {
            id: "c24_20",
            q: "The catalyst used in Haber's process is:",
            options: ["V₂O₅", "Fe", "Pt", "Ni"],
            ans: 1,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_21",
            q: "The molecular formula of glucose is:",
            options: ["C₆H₁₂O₆", "C₆H₁₂O₅", "C₆H₁₂O₇", "C₆H₁₀O₅"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24_22",
            q: "The enthalpy change for the reaction H₂ + ½O₂ → H₂O is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24_23",
            q: "The geometry of SF₆ is:",
            options: ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24_24",
            q: "The number of moles of KMnO₄ required to oxidize 1 mole of FeSO₄ is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c24_25",
            q: "The IUPAC name of CH₂=CH-CH₃ is:",
            options: ["Propene", "Propylene", "1-Propene", "Ethylene"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵", "6.023 × 10²⁶"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24_27",
            q: "The electronegativity of fluorine is:",
            options: ["2.1", "3.0", "4.0", "4.5"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24_28",
            q: "The rate constant of a reaction depends on:",
            options: ["Concentration", "Temperature", "Pressure", "Volume"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24_29",
            q: "The number of π bonds in C₂H₄ is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24_30",
            q: "The pH of blood is:",
            options: ["4.0", "7.0", "9.0", "11.0"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24_31",
            q: "The catalyst used in contact process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 1,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_32",
            q: "The molecular formula of benzene is:",
            options: ["C₆H₆", "C₆H₈", "C₆H₁₀", "C₆H₁₂"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24_33",
            q: "The Gibbs free energy change is related to:",
            options: ["Enthalpy only", "Entropy only", "Both enthalpy and entropy", "Temperature only"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24_34",
            q: "The number of unpaired electrons in O₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24_35",
            q: "The equivalent weight of KMnO₄ in acidic medium is:",
            options: ["31.6", "63.2", "126.4", "158"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Hard"
        },
        {
            id: "c24_36",
            q: "The number of carbon atoms in one molecule of palmitic acid is:",
            options: ["14", "16", "18", "20"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Medium"
        },
        {
            id: "c24_37",
            q: "The unit of rate constant for first order reaction is:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Medium"
        },
        {
            id: "c24_38",
            q: "The hybridization of sulphur in SF₆ is:",
            options: ["sp³", "sp³d", "sp³d²", "sp³d³"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24_39",
            q: "The solubility of a gas in liquid decreases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Decrease in pressure"],
            ans: 0,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24_40",
            q: "The number of isomers of C₄H₁₀ is:",
            options: ["2", "3", "4", "5"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m24_1",
            q: "The derivative of sin x is:",
            options: ["cos x", "-cos x", "tan x", "-sin x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_2",
            q: "The value of ∫x dx is:",
            options: ["x²", "x²/2", "x²/2 + C", "x + C"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_3",
            q: "The roots of the equation x² - 5x + 6 = 0 are:",
            options: ["2, 3", "1, 6", "-2, -3", "2, -3"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24_4",
            q: "The area of a circle with radius 7 cm is:",
            options: ["49π cm²", "98π cm²", "147π cm²", "196π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_5",
            q: "The probability of getting a head when a coin is tossed is:",
            options: ["0", "1/2", "1", "2"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24_6",
            q: "The slope of the line 3x + 4y = 12 is:",
            options: ["3/4", "-3/4", "4/3", "-4/3"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24_7",
            q: "The value of log₁₀ 100 is:",
            options: ["1", "2", "10", "100"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24_8",
            q: "The number of ways to arrange 5 distinct books on a shelf is:",
            options: ["5", "25", "120", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24_9",
            q: "The distance between points (2,3) and (5,7) is:",
            options: ["√13", "5", "√29", "7"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_10",
            q: "The limit of (x² - 1)/(x - 1) as x approaches 1 is:",
            options: ["0", "1", "2", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24_11",
            q: "The integral of 1/x dx is:",
            options: ["x", "ln x", "ln x + C", "1/x²"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_12",
            q: "The sum of first n natural numbers is:",
            options: ["n(n+1)", "n(n+1)/2", "n²", "n(n-1)/2"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24_13",
            q: "The equation of a circle with center (0,0) and radius 5 is:",
            options: ["x² + y² = 5", "x² + y² = 25", "(x-5)² + (y-5)² = 25", "(x+5)² + (y+5)² = 25"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_14",
            q: "The derivative of eˣ is:",
            options: ["eˣ", "xeˣ", "eˣ/x", "ln e"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_15",
            q: "The angle between vectors i + j and i - j is:",
            options: ["0°", "45°", "90°", "180°"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24_16",
            q: "The coefficient of x² in (x + 1)³ is:",
            options: ["1", "3", "6", "9"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24_17",
            q: "The domain of f(x) = √(x - 2) is:",
            options: ["x ≥ 2", "x > 2", "x ≤ 2", "x < 2"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24_18",
            q: "The period of sin 2x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_19",
            q: "The number of solutions of sin x = 1/2 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Medium"
        },
        {
            id: "m24_20",
            q: "The inverse of matrix [[1,2],[3,4]] is:",
            options: ["[[-2,1],[1.5,-0.5]]", "[[4,-2],[-3,1]]", "[[-4,2],[3,-1]]", "[[2,-1],[-1.5,0.5]]"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Hard"
        },
        {
            id: "m24_21",
            q: "The area under the curve y = x² from x = 0 to x = 1 is:",
            options: ["1/2", "1/3", "1/4", "1"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_22",
            q: "The mean of 1, 2, 3, 4, 5 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24_23",
            q: "The derivative of ln x is:",
            options: ["1/x", "x", "eˣ", "ln x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_24",
            q: "The angle subtended by an arc of length r at the center is:",
            options: ["radians", "degrees", "both", "neither"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_25",
            q: "The range of f(x) = sin x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_26",
            q: "The solution of dx/dy = x/y is:",
            options: ["xy = C", "x/y = C", "x² + y² = C", "ln x - ln y = C"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m24_27",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_28",
            q: "The value of ∫₀^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_30",
            q: "The number of ways to choose 2 items from 5 is:",
            options: ["5", "10", "15", "20"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24_31",
            q: "The modulus of 3 + 4i is:",
            options: ["3", "4", "5", "7"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24_32",
            q: "The derivative of x³ is:",
            options: ["x²", "3x²", "3x", "x⁴"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_33",
            q: "The area of triangle with vertices (0,0), (3,0), (0,4) is:",
            options: ["6", "8", "10", "12"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_34",
            q: "The value of lim (x→0) sin x/x is:",
            options: ["0", "1", "∞", "-∞"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24_35",
            q: "The integral of cos x dx is:",
            options: ["sin x", "sin x + C", "-sin x", "-sin x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_36",
            q: "The probability of getting 6 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24_37",
            q: "The slope of x = 5 is:",
            options: ["0", "1", "5", "∞"],
            ans: 3,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24_38",
            q: "The value of 2 log₁₀ 5 is:",
            options: ["log₁₀ 25", "log₁₀ 10", "log₁₀ 2", "log₁₀ 7"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24_39",
            q: "The number of ways to arrange letters of 'AAB' is:",
            options: ["3", "6", "9", "12"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Medium"
        },
        {
            id: "m24_40",
            q: "The distance from (0,0) to (3,4) is:",
            options: ["3", "4", "5", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24_41",
            q: "The limit of (1 + 1/n)ⁿ as n → ∞ is:",
            options: ["0", "1", "e", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24_42",
            q: "The integral of eˣ dx is:",
            options: ["eˣ", "eˣ + C", "x eˣ", "x eˣ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_43",
            q: "The sum of infinite GP 1 + 1/2 + 1/4 + ... is:",
            options: ["1", "2", "3", "∞"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24_44",
            q: "The center of circle x² + y² + 2x - 4y = 4 is:",
            options: ["(-1, 2)", "(1, -2)", "(-1, -2)", "(1, 2)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24_45",
            q: "The derivative of tan x is:",
            options: ["sec x", "sec² x", "cos x", "sin x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_46",
            q: "The dot product of i and j is:",
            options: ["0", "1", "-1", "i j"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24_47",
            q: "The coefficient of x in (1 + x)⁵ is:",
            options: ["1", "5", "10", "15"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24_49",
            q: "The value of sin 90° is:",
            options: ["0", "1/2", "1", "√3/2"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_51",
            q: "The determinant of [[1,2],[3,4]] is:",
            options: ["-2", "2", "4", "6"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24_52",
            q: "The area under y = sin x from 0 to π is:",
            options: ["0", "1", "2", "π"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_53",
            q: "The median of 1, 3, 5, 7, 9 is:",
            options: ["3", "5", "7", "9"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24_54",
            q: "The derivative of x ln x is:",
            options: ["ln x", "1 + ln x", "x + ln x", "1/x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_55",
            q: "The angle in radian for 180° is:",
            options: ["π", "π/2", "π/4", "2π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_56",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_57",
            q: "The solution of dy/dx = ky is:",
            options: ["y = Ceᵏˣ", "y = Ce⁻ᵏˣ", "y = kx + C", "y = kx"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m24_58",
            q: "The number of diagonals in a octagon is:",
            options: ["16", "20", "24", "28"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24_59",
            q: "The value of ∫_{-1}^1 x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_60",
            q: "The equation of normal to y = x² at x = 1 is:",
            options: ["y = -1/2 x + 3/2", "y = -1/2 x + 1/2", "y = 2x - 1", "y = -2x + 3"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24_61",
            q: "The number of ways to choose 3 items from 6 is:",
            options: ["10", "15", "20", "25"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24_62",
            q: "The argument of 1 + i is:",
            options: ["π/4", "π/2", "π/3", "π/6"],
            ans: 0,
            topic: "Complex Numbers",
            difficulty: "Medium"
        },
        {
            id: "m24_63",
            q: "The derivative of x⁴ is:",
            options: ["x³", "4x³", "4x²", "x⁵"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_64",
            q: "The area of parallelogram with vectors 2i + 3j and i + 2j is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24_65",
            q: "The value of lim (x→∞) (1 + 1/x)ˣ is:",
            options: ["0", "1", "e", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Hard"
        },
        {
            id: "m24_66",
            q: "The integral of sec² x dx is:",
            options: ["tan x", "tan x + C", "-cot x", "-cot x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_67",
            q: "The sum of AP 1, 3, 5, 7, 9 is:",
            options: ["15", "20", "25", "30"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24_68",
            q: "The radius of circle x² + y² + 4x - 6y + 9 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24_69",
            q: "The derivative of cos x is:",
            options: ["sin x", "-sin x", "tan x", "-cos x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24_70",
            q: "The cross product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24_71",
            q: "The general term of (1 + x)ⁿ is:",
            options: ["ⁿCᵣ xʳ", "ⁿCᵣ", "xʳ", "ⁿCᵣ xʳ yⁿ⁻ʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24_72",
            q: "The domain of f(x) = 1/x is:",
            options: ["R", "R - {0}", "R⁺", "R⁻"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24_73",
            q: "The value of tan 45° is:",
            options: ["0", "1", "√3/2", "∞"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_74",
            q: "The number of solutions of tan x = 1 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_75",
            q: "The rank of matrix [[1,0],[0,1]] is:",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24_76",
            q: "The area under y = eˣ from 0 to 1 is:",
            options: ["e", "e - 1", "e + 1", "1/e"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_77",
            q: "The mode of 1, 2, 2, 3, 3, 3, 4 is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24_78",
            q: "The derivative of sec x is:",
            options: ["sec x tan x", "-sec x tan x", "cos x", "sin x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24_79",
            q: "The angle in degrees for π radians is:",
            options: ["90°", "180°", "270°", "360°"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24_80",
            q: "The range of sec x is:",
            options: ["[-1, 1]", "(-∞, -1] ∪ [1, ∞)", "[0, ∞)", "[-∞, ∞]"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;