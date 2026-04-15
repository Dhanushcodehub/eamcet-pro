// ============================================================
//  TG EAPCET 2024 – May 7th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p24e_1",
            q: "The SI unit of force is:",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p24e_2",
            q: "A particle moves with uniform velocity. Its acceleration is:",
            options: ["Zero", "Constant", "Variable", "Infinite"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Easy"
        },
        {
            id: "p24e_3",
            q: "The value of g on moon is 1/6th of that on earth. The weight of a body on moon is:",
            options: ["Same", "1/6th", "6 times", "Zero"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p24e_4",
            q: "In Young's double slit experiment, if the distance between slits is doubled, the fringe width:",
            options: ["Doubles", "Halves", "Remains same", "Becomes zero"],
            ans: 1,
            topic: "Wave Optics",
            difficulty: "Medium"
        },
        {
            id: "p24e_5",
            q: "The magnetic field inside a long solenoid is:",
            options: ["Zero", "Uniform and strong", "Non-uniform", "Depends on length"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e_6",
            q: "The potential difference between two points is 10V. The work done in moving 2C charge is:",
            options: ["5 J", "10 J", "20 J", "40 J"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e_7",
            q: "The half-life of a radioactive substance is 8 days. After 24 days, the fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p24e_8",
            q: "A body is moving in a circle with constant speed. Its acceleration is:",
            options: ["Zero", "Tangential", "Centripetal", "Both B and C"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p24e_9",
            q: "The power consumed by a 10Ω resistor when 2A current flows is:",
            options: ["5 W", "10 W", "20 W", "40 W"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e_10",
            q: "The speed of sound in air increases with:",
            options: ["Pressure", "Humidity", "Temperature", "Density"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e_11",
            q: "The time period of a simple pendulum depends on:",
            options: ["Mass", "Amplitude", "Length", "Material"],
            ans: 2,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p24e_12",
            q: "The energy stored in a capacitor of capacitance 2μF charged to 100V is:",
            options: ["0.01 J", "0.02 J", "0.03 J", "0.04 J"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Medium"
        },
        {
            id: "p24e_13",
            q: "The power of a lens is -2D. Its focal length is:",
            options: ["-0.5 m", "-1 m", "-2 m", "-4 m"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e_14",
            q: "The wavelength of electron moving with velocity v is given by:",
            options: ["h/mv", "mv/h", "h/m", "m/hv"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Medium"
        },
        {
            id: "p24e_15",
            q: "The coefficient of static friction depends on:",
            options: ["Velocity", "Area of contact", "Normal force", "Nature of surfaces"],
            ans: 3,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p24e_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²", "MR²/2", "MR²/4", "MR²/8"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p24e_17",
            q: "The pressure of an ideal gas depends on:",
            options: ["Mass of molecules", "Size of molecules", "Collisions", "All of these"],
            ans: 2,
            topic: "Kinetic Theory",
            difficulty: "Medium"
        },
        {
            id: "p24e_18",
            q: "The magnetic field at the center of a circular current loop is:",
            options: ["Zero", "Maximum", "Minimum", "Uniform"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24e_19",
            q: "The resistivity of a material depends on:",
            options: ["Length", "Area", "Temperature", "All of these"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p24e_20",
            q: "The unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p24e_21",
            q: "The total energy of electron in nth orbit is proportional to:",
            options: ["n", "n²", "1/n", "1/n²"],
            ans: 3,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p24e_22",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e_23",
            q: "The principle of superposition applies to:",
            options: ["Light waves only", "Sound waves only", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e_24",
            q: "The self-inductance of a coil depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p24e_25",
            q: "The refractive index of glass is approximately:",
            options: ["1.33", "1.5", "2.4", "3.0"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p24e_26",
            q: "The binding energy of nucleus is:",
            options: ["Always positive", "Always negative", "Zero", "Can be negative"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e_27",
            q: "The threshold wavelength for photoelectric effect depends on:",
            options: ["Frequency of incident light", "Work function", "Intensity", "Both A and B"],
            ans: 1,
            topic: "Photoelectric Effect",
            difficulty: "Medium"
        },
        {
            id: "p24e_28",
            q: "The efficiency of a heat engine is:",
            options: ["Always 100%", "Always less than 100%", "Can be more than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p24e_29",
            q: "The magnetic moment of a bar magnet is:",
            options: ["Pole strength × length", "Pole strength / length", "Pole strength × distance", "Pole strength²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p24e_30",
            q: "The speed of electromagnetic waves in vacuum is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e_31",
            q: "The radius of gyration depends on:",
            options: ["Mass only", "Shape only", "Axis only", "All of these"],
            ans: 3,
            topic: "Rotational Mechanics",
            difficulty: "Medium"
        },
        {
            id: "p24e_32",
            q: "The mutual inductance between two coils depends on:",
            options: ["Current in coils", "Number of turns", "Flux linkage", "Both B and C"],
            ans: 3,
            topic: "Electromagnetic Induction",
            difficulty: "Medium"
        },
        {
            id: "p24e_33",
            q: "The Doppler effect is observed in:",
            options: ["Light", "Sound", "Both", "Neither"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p24e_34",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Minimum", "Zero", "Uniform"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p24e_35",
            q: "The half-life of a first order reaction:",
            options: ["Is constant", "Depends on concentration", "Depends on temperature", "Is zero"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Medium"
        },
        {
            id: "p24e_36",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh/2", "nh/2π", "n²h/2π", "nh"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p24e_37",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "More than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p24e_38",
            q: "The critical angle for glass-air interface is approximately:",
            options: ["42°", "45°", "48°", "50°"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Medium"
        },
        {
            id: "p24e_39",
            q: "In nuclear fission, mass defect is converted to:",
            options: ["Light energy", "Heat energy", "Sound energy", "Chemical energy"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p24e_40",
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
            id: "c24e_1",
            q: "The atomic mass of an element is:",
            options: ["Number of protons", "Number of neutrons", "Average mass of isotopes", "Mass of proton"],
            ans: 2,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e_2",
            q: "The oxidation number of carbon in CO₂ is:",
            options: ["+2", "+4", "-2", "-4"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c24e_3",
            q: "The shape of CH₄ molecule is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e_4",
            q: "The pH of 10⁻³ M HCl is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e_6",
            q: "The IUPAC name of C₂H₅OH is:",
            options: ["Ethanol", "Ethanolic acid", "Methanol", "Propanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_7",
            q: "The number of sigma bonds in ethene is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24e_8",
            q: "The element with atomic number 11 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c24e_9",
            q: "The enthalpy of combustion is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c24e_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["2", "4", "6", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e_11",
            q: "The bond order of O₂ is:",
            options: ["1", "1.5", "2", "2.5"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e_12",
            q: "The solubility product of BaSO₄ is 1.0 × 10⁻¹⁰. Its solubility is:",
            options: ["1.0 × 10⁻⁵", "1.0 × 10⁻³", "1.0 × 10⁻⁷", "1.0 × 10⁻¹⁰"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c24e_13",
            q: "The isomerism shown by C₃H₆ is:",
            options: ["Structural", "Geometrical", "Optical", "Position"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_14",
            q: "The empirical formula of glucose is:",
            options: ["CH₂O", "C₆H₁₂O₆", "C₃H₆O₃", "CH₃O"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e_15",
            q: "The standard hydrogen electrode has potential:",
            options: ["0 V", "1 V", "-1 V", "2 V"],
            ans: 0,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c24e_17",
            q: "The magnetic moment of Mn²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c24e_18",
            q: "The pKa of acetic acid is:",
            options: ["3.76", "4.76", "5.76", "6.76"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e_19",
            q: "The number of atoms in BCC unit cell is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c24e_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_21",
            q: "The molecular formula of fructose is:",
            options: ["C₆H₁₂O₆", "C₆H₁₂O₅", "C₆H₁₀O₅", "C₅H₁₀O₅"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e_22",
            q: "The enthalpy change for the reaction 2H₂ + O₂ → 2H₂O is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24e_23",
            q: "The geometry of PCl₅ is:",
            options: ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e_24",
            q: "The number of moles of KMnO₄ required to oxidize 1 mole of Fe²⁺ is:",
            options: ["1/5", "1", "5", "10"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c24e_25",
            q: "The IUPAC name of CH≡CH is:",
            options: ["Ethyne", "Acetylene", "Both A and B", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c24e_27",
            q: "The electronegativity of chlorine is:",
            options: ["2.1", "3.0", "3.5", "4.0"],
            ans: 1,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c24e_28",
            q: "The rate constant depends on:",
            options: ["Concentration", "Temperature", "Pressure", "Volume"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c24e_29",
            q: "The number of π bonds in ethyne is:",
            options: ["1", "2", "3", "4"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c24e_30",
            q: "The pH of 0.1 M NaOH is:",
            options: ["1", "7", "13", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c24e_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_32",
            q: "The molecular formula of acetylene is:",
            options: ["C₂H₂", "C₂H₄", "C₂H₆", "C₃H₄"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c24e_33",
            q: "The Gibbs free energy change is related to:",
            options: ["Enthalpy", "Entropy", "Both", "Temperature"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Medium"
        },
        {
            id: "c24e_34",
            q: "The number of unpaired electrons in NO is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e_35",
            q: "The equivalent weight of H₂SO₄ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c24e_36",
            q: "The number of carbon atoms in stearic acid is:",
            options: ["16", "17", "18", "19"],
            ans: 2,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c24e_37",
            q: "The unit of rate constant for zero order reaction is:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Medium"
        },
        {
            id: "c24e_38",
            q: "The hybridization of carbon in CO₂ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c24e_39",
            q: "The solubility of gas in liquid increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c24e_40",
            q: "The number of isomers of C₄H₈ is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m24e_1",
            q: "The derivative of sin²x is:",
            options: ["sin 2x", "2 sin x cos x", "cos 2x", "sin x cos x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_2",
            q: "The integral of 2x dx is:",
            options: ["x²", "x² + C", "2x²", "2x² + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_3",
            q: "The discriminant of x² + 2x + 1 = 0 is:",
            options: ["0", "2", "4", "8"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e_4",
            q: "The circumference of a circle with radius 3 cm is:",
            options: ["6π cm", "9π cm", "12π cm", "18π cm"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_5",
            q: "The probability of getting a tail when a coin is tossed is:",
            options: ["0", "1/2", "1", "2"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e_6",
            q: "The equation of line passing through (0,0) and (2,4) is:",
            options: ["y = x", "y = 2x", "y = 3x", "y = 4x"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e_7",
            q: "The value of log₂ 8 is:",
            options: ["2", "3", "4", "8"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e_8",
            q: "The number of ways to arrange 4 distinct books is:",
            options: ["4", "12", "24", "48"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e_9",
            q: "The midpoint of (1,2) and (3,4) is:",
            options: ["(2,3)", "(1,3)", "(2,2)", "(3,3)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_10",
            q: "The limit of (x² - 4)/(x - 2) as x approaches 2 is:",
            options: ["0", "2", "4", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e_11",
            q: "The integral of 1/x² dx is:",
            options: ["-1/x", "-1/x + C", "ln x", "ln x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_12",
            q: "The sum of first 5 natural numbers is:",
            options: ["10", "15", "20", "25"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e_13",
            q: "The equation of circle with center (1,1) and radius 2 is:",
            options: ["(x-1)² + (y-1)² = 4", "(x+1)² + (y+1)² = 4", "x² + y² = 4", "(x-1)² + (y-1)² = 2"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_14",
            q: "The derivative of ln x is:",
            options: ["x", "1/x", "eˣ", "ln x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_15",
            q: "The magnitude of vector 3i + 4j is:",
            options: ["3", "4", "5", "7"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e_16",
            q: "The coefficient of x in (1 + x)⁴ is:",
            options: ["1", "4", "6", "12"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e_17",
            q: "The range of f(x) = x² is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e_18",
            q: "The period of cos 3x is:",
            options: ["π", "π/3", "2π", "2π/3"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Medium"
        },
        {
            id: "m24e_19",
            q: "The number of solutions of sin x = 0 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_20",
            q: "The inverse of matrix [[2,1],[1,1]] is:",
            options: ["[[1,-1],[-1,2]]", "[[1,1],[1,2]]", "[[2,-1],[-1,1]]", "[[1,-1],[1,2]]"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Hard"
        },
        {
            id: "m24e_21",
            q: "The area under the curve y = 2x from x = 0 to x = 2 is:",
            options: ["2", "4", "6", "8"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_22",
            q: "The variance of 1, 2, 3 is:",
            options: ["0", "2/3", "1", "4/3"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Medium"
        },
        {
            id: "m24e_23",
            q: "The derivative of e²ˣ is:",
            options: ["e²ˣ", "2e²ˣ", "eˣ", "2eˣ"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_24",
            q: "The angle subtended by arc of length 2r at center is:",
            options: ["1 radian", "2 radians", "π radians", "π/2 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_25",
            q: "The period of tan x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_26",
            q: "The solution of dy/dx = 2x is:",
            options: ["y = x²", "y = x² + C", "y = 2x²", "y = 2x² + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e_27",
            q: "The number of diagonals in a pentagon is:",
            options: ["3", "5", "7", "10"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_28",
            q: "The value of ∫_0^π cos x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_29",
            q: "The equation of tangent to y = x³ at x = 1 is:",
            options: ["y = 3x", "y = 3x - 2", "y = 3x - 1", "y = x + 2"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24e_30",
            q: "The number of ways to choose 3 items from 6 is:",
            options: ["10", "15", "20", "25"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e_31",
            q: "The conjugate of 2 + 3i is:",
            options: ["2 - 3i", "-2 + 3i", "2 + 3i", "-2 - 3i"],
            ans: 0,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m24e_32",
            q: "The derivative of x⁵ is:",
            options: ["x⁴", "5x⁴", "5x³", "x⁶"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_33",
            q: "The area of triangle with vertices (1,1), (2,3), (4,1) is:",
            options: ["2", "3", "4", "5"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e_34",
            q: "The value of lim (x→0) (sin 2x)/x is:",
            options: ["0", "1", "2", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m24e_35",
            q: "The integral of tan x dx is:",
            options: ["ln|sec x|", "ln|sec x| + C", "-ln|cos x|", "-ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_36",
            q: "The probability of getting 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m24e_37",
            q: "The slope of y = 2 is:",
            options: ["0", "2", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m24e_38",
            q: "The value of log₁₀ 0.1 is:",
            options: ["-1", "1", "0", "10"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m24e_39",
            q: "The number of ways to arrange letters of 'ABAB' is:",
            options: ["6", "12", "24", "48"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Medium"
        },
        {
            id: "m24e_40",
            q: "The distance from (1,1) to (4,5) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_41",
            q: "The limit of (1 + 2/n)ⁿ as n → ∞ is:",
            options: ["1", "2", "e", "e²"],
            ans: 3,
            topic: "Limits",
            difficulty: "Hard"
        },
        {
            id: "m24e_42",
            q: "The integral of e³ˣ dx is:",
            options: ["e³ˣ", "e³ˣ/3", "(1/3)e³ˣ", "(1/3)e³ˣ + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_43",
            q: "The sum of infinite GP 2 + 1 + 1/2 + ... is:",
            options: ["2", "3", "4", "∞"],
            ans: 2,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e_44",
            q: "The center of circle x² + y² - 4x + 2y = 4 is:",
            options: ["(2, -1)", "(-2, 1)", "(2, 1)", "(-2, -1)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e_45",
            q: "The derivative of cot x is:",
            options: ["-cosec² x", "cosec² x", "sec² x", "-sec² x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_46",
            q: "The scalar product of 2i + j and i + 2j is:",
            options: ["4", "5", "6", "7"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e_47",
            q: "The general term of (a + b)ⁿ is:",
            options: ["ⁿCᵣ aʳ bⁿ⁻ʳ", "ⁿCᵣ aⁿ⁻ʳ bʳ", "ⁿCᵣ aⁿ bʳ", "ⁿCᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m24e_48",
            q: "The domain of f(x) = √(x + 1) is:",
            options: ["x ≥ -1", "x > -1", "x ≤ -1", "x < -1"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e_49",
            q: "The value of cos 60° is:",
            options: ["0", "1/2", "1", "√3/2"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_50",
            q: "The number of solutions of cos x = 1 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_51",
            q: "The adjoint of matrix [[1,2],[3,4]] is:",
            options: ["[[4,-2],[-3,1]]", "[[4,2],[3,1]]", "[[1,2],[3,4]]", "[[4,-3],[-2,1]]"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Medium"
        },
        {
            id: "m24e_52",
            q: "The area under y = cos x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_53",
            q: "The standard deviation of 2, 4, 6 is:",
            options: ["0", "1", "2", "√2"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m24e_54",
            q: "The derivative of x² ln x is:",
            options: ["2x ln x", "x ln x + x", "2x ln x + 2x", "x²/x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_55",
            q: "The angle in radian for 90° is:",
            options: ["π/4", "π/2", "π", "2π"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_56",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_57",
            q: "The solution of d²y/dx² = 0 is:",
            options: ["y = ax", "y = ax + b", "y = ax²", "y = ax² + bx"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m24e_58",
            q: "The number of diagonals in a heptagon is:",
            options: ["7", "14", "21", "28"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e_59",
            q: "The value of ∫_{-2}^2 x dx is:",
            options: ["0", "2", "4", "-2"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m24e_61",
            q: "The number of ways to choose 4 items from 8 is:",
            options: ["35", "40", "45", "50"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m24e_62",
            q: "The argument of -1 + i is:",
            options: ["π/4", "3π/4", "5π/4", "7π/4"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Medium"
        },
        {
            id: "m24e_63",
            q: "The derivative of x⁶ is:",
            options: ["x⁵", "6x⁵", "6x⁴", "x⁷"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_64",
            q: "The area of parallelogram with vectors 3i + j and i + 3j is:",
            options: ["8", "9", "10", "11"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m24e_65",
            q: "The value of lim (x→∞) (2x + 1)/(x + 1) is:",
            options: ["0", "1", "2", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m24e_66",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_67",
            q: "The sum of AP 2, 5, 8, 11, 14 is:",
            options: ["20", "25", "30", "35"],
            ans: 0,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m24e_68",
            q: "The radius of circle x² + y² + 6x - 8y + 16 = 0 is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m24e_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_70",
            q: "The vector product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m24e_71",
            q: "The middle term in (x + y)⁶ is:",
            options: ["15 x³ y³", "20 x³ y³", "15 x² y⁴", "6 x³ y³"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m24e_72",
            q: "The range of f(x) = 1/x² is:",
            options: ["(0, ∞)", "[0, ∞)", "(0, ∞]", "[1, ∞)"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m24e_73",
            q: "The value of sin 30° is:",
            options: ["0", "1/2", "1", "√3/2"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_74",
            q: "The number of solutions of tan x = 0 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_75",
            q: "The order of matrix [[1,2,3]] is:",
            options: ["1×1", "1×3", "3×1", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m24e_76",
            q: "The area under y = x from 1 to 2 is:",
            options: ["1.5", "2", "2.5", "3"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m24e_77",
            q: "The variance of 1, 2, 2, 3, 3, 3 is:",
            options: ["0", "0.5", "1", "1.5"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Hard"
        },
        {
            id: "m24e_78",
            q: "The derivative of cosec x is:",
            options: ["-cosec x cot x", "cosec x cot x", "sec x tan x", "-sec x tan x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m24e_79",
            q: "The angle in degrees for π/3 radians is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m24e_80",
            q: "The period of cosec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;