// ============================================================
//  TG EAMCET 2021 – May 15th Evening Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p21e_1",
            q: "The dimensional formula of capacitance is:",
            options: ["M⁻¹L⁻²T⁴A²", "M⁻¹L⁻²T⁴A²", "M⁻¹L²T⁴A²", "ML²T⁻³A⁻¹"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21e_2",
            q: "The velocity of a particle executing SHM at mean position is:",
            options: ["Zero", "Maximum", "Minimum", "Average"],
            ans: 1,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p21e_3",
            q: "The escape velocity for Earth is approximately:",
            options: ["7.9 km/s", "11.2 km/s", "15.6 km/s", "25.3 km/s"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p21e_4",
            q: "In a convex lens, the focal length is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21e_5",
            q: "The magnetic field inside a long straight wire is:",
            options: ["Zero", "Uniform", "Maximum at center", "Increases with distance"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21e_6",
            q: "The SI unit of power is:",
            options: ["Watt", "Joule", "Newton", "Ampere"],
            ans: 0,
            topic: "Work, Energy and Power",
            difficulty: "Easy"
        },
        {
            id: "p21e_7",
            q: "The half-life of a radioactive element is 6 hours. After 18 hours, fraction remaining is:",
            options: ["1/2", "1/4", "1/8", "1/16"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21e_8",
            q: "The torque on a dipole in uniform electric field is:",
            options: ["p × E", "p · E", "p/E", "Zero"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21e_9",
            q: "The resistivity of a material depends on:",
            options: ["Length", "Area", "Nature of material", "Current"],
            ans: 2,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p21e_10",
            q: "The velocity of sound in air at 0°C is:",
            options: ["331 m/s", "343 m/s", "300 m/s", "360 m/s"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21e_11",
            q: "The time period of a pendulum is given by:",
            options: ["T = 2π√(l/g)", "T = 2π√(g/l)", "T = π√(l/g)", "T = π√(g/l)"],
            ans: 0,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p21e_12",
            q: "The capacitance of a parallel plate capacitor increases if:",
            options: ["Distance increases", "Dielectric constant decreases", "Area decreases", "Charge decreases"],
            ans: 0,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21e_13",
            q: "The power of a lens is measured in:",
            options: ["Meter", "Dioptre", "Coulomb", "Henry"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21e_14",
            q: "The wavelength of matter waves is given by:",
            options: ["λ = h/p", "λ = h/mv", "λ = mv/h", "λ = p/h"],
            ans: 0,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p21e_15",
            q: "The coefficient of static friction depends on:",
            options: ["Velocity", "Normal force", "Both A and B", "Neither"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p21e_16",
            q: "The moment of inertia of a ring about its diameter is:",
            options: ["MR²", "MR²/2", "MR²/4", "2MR²"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21e_17",
            q: "The kinetic theory assumes that gas molecules are:",
            options: ["Stationary", "Moving randomly", "In straight lines", "Both B and C"],
            ans: 3,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p21e_18",
            q: "The magnetic field due to a solenoid is:",
            options: ["Only outside", "Only inside", "Both inside and outside", "Zero everywhere"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21e_19",
            q: "The unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21e_20",
            q: "The energy levels in hydrogen atom are:",
            options: ["Equally spaced", "Non-equally spaced", "Linear", "Circular"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p21e_21",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21e_22",
            q: "The principle of superposition applies to:",
            options: ["Light waves only", "Sound waves only", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21e_23",
            q: "The self-inductance of a coil depends on:",
            options: ["Current only", "Number of turns only", "Both A and B", "Resistance only"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p21e_24",
            q: "The refractive index of glass is:",
            options: ["1.0", "1.33", "1.5", "2.0"],
            ans: 2,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21e_25",
            q: "Nuclear fusion occurs in:",
            options: ["Heavy nuclei", "Light nuclei", "All nuclei", "No nuclei"],
            ans: 1,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21e_26",
            q: "The photoelectric effect was discovered by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 2,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p21e_27",
            q: "The efficiency of a heat engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p21e_28",
            q: "The magnetic moment of a current loop is:",
            options: ["I × A", "I/A", "I² × A", "I × A²"],
            ans: 0,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p21e_29",
            q: "The velocity of electromagnetic waves is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p21e_30",
            q: "The radius of gyration has dimensions of:",
            options: ["Mass", "Length", "Time", "Angle"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p21e_31",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p21e_32",
            q: "The Doppler effect is maximum when source:",
            options: ["Moves towards observer", "Moves away", "Both perpendicular", "Both stationary"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p21e_33",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Uniform", "Zero", "Increases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21e_34",
            q: "The activity of a radioactive sample is halved in:",
            options: ["One half-life", "Two half-lives", "Three half-lives", "Four half-lives"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21e_35",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh/2", "nh/2π", "nh/π", "n²h/2π"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p21e_36",
            q: "The power factor in AC circuits can be:",
            options: ["Only 1", "Only 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p21e_37",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p21e_38",
            q: "Nuclear fission was discovered by:",
            options: ["Bohr", "Rutherford", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p21e_39",
            q: "The SI unit of electric field strength is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Ampere"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p21e_40",
            q: "The number of significant figures in 0.00100 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c21e_1",
            q: "The number of moles in 22.4 L of SO₂ at STP is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21e_2",
            q: "The oxidation number of S in H₂SO₄ is:",
            options: ["+2", "+4", "+6", "+8"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21e_3",
            q: "The hybridisation of carbon in CH₄ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_4",
            q: "The pH of 10⁻⁷ M HCl is:",
            options: ["1", "7", "6.98", "7.02"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21e_5",
            q: "The rate of reaction decreases with:",
            options: ["Increase in temperature", "Increase in concentration", "Addition of catalyst", "All of these"],
            ans: 0,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21e_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂OH is:",
            options: ["Butanol", "Pentanol", "Hexanol", "Heptanol"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_7",
            q: "The number of π bonds in benzene is:",
            options: ["3", "4", "6", "12"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_8",
            q: "The element with atomic number 20 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c21e_9",
            q: "The enthalpy of vaporisation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21e_10",
            q: "The number of atoms per unit cell in FCC is:",
            options: ["1", "2", "4", "8"],
            ans: 2,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21e_11",
            q: "The bond order of O₂⁺ is:",
            options: ["1.5", "2", "2.5", "3"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_12",
            q: "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility is:",
            options: ["1.34 × 10⁻⁵", "1.8 × 10⁻⁵", "1.34 × 10⁻⁴", "1.8 × 10⁻⁴"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Medium"
        },
        {
            id: "c21e_13",
            q: "The isomerism shown by C₄H₁₀ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_14",
            q: "The molecular formula of insulin is:",
            options: ["C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₆₅O₇₇S₆", "C₂₅₇H₃₈₃N₶₅O₇₇S₆"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c21e_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_16",
            q: "The order of reactivity in SN1 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c21e_17",
            q: "The magnetic moment of Mn²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Easy"
        },
        {
            id: "c21e_18",
            q: "The pKa of CH₃COOH is:",
            options: ["4.76", "7.0", "9.2", "14.0"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21e_19",
            q: "The number of atoms in FCC unit cell is:",
            options: ["1", "2", "4", "8"],
            ans: 2,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c21e_20",
            q: "The catalyst used in contact process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 1,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_21",
            q: "The molecular formula of cellulose is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21e_22",
            q: "The enthalpy change for the reaction H₂ + 1/2O₂ → H₂O is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21e_23",
            q: "The shape of PCl₅ is:",
            options: ["Trigonal bipyramidal", "Tetrahedral", "Square pyramidal", "Octahedral"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_24",
            q: "The equivalent weight of KMnO₄ in acidic medium is:",
            options: ["31.6", "52.7", "79", "158"],
            ans: 3,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c21e_25",
            q: "The IUPAC name of CH₃-CH₂-CH=CH₂ is:",
            options: ["But-1-ene", "But-2-ene", "Propene", "Ethene"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_26",
            q: "The value of Boltzmann constant is:",
            options: ["1.38 × 10⁻²³ J/K", "6.023 × 10²³", "8.314 J/mol·K", "9.8 m/s²"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c21e_27",
            q: "The atomic radius decreases across a period due to:",
            options: ["Increase in nuclear charge", "Decrease in shielding", "Both A and B", "Increase in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c21e_28",
            q: "The rate constant of a first order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21e_29",
            q: "The number of sigma bonds in C₂H₆ is:",
            options: ["6", "7", "8", "9"],
            ans: 1,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_30",
            q: "The pH of 10⁻⁸ M NaOH is:",
            options: ["8", "7", "6", "5.98"],
            ans: 3,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c21e_31",
            q: "The catalyst used in hydrogenation of oils is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_32",
            q: "The molecular formula of naphthalene is:",
            options: ["C₁₀H₈", "C₆H₶", "C₈H₈", "C₁₄H₁₀"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c21e_33",
            q: "The change in Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Equilibrium", "Freezing point"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c21e_34",
            q: "The number of unpaired electrons in N₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_35",
            q: "The equivalent weight of K₂Cr₂O₇ in neutral medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c21e_36",
            q: "The number of carbon atoms in palmitic acid is:",
            options: ["14", "16", "18", "20"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c21e_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c21e_38",
            q: "The hybridization of carbon in CO₂ is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c21e_39",
            q: "The solubility of gases in liquids decreases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Decrease in pressure"],
            ans: 0,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c21e_40",
            q: "The number of isomers of C₅H₁₂ is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        }
    ],


    // ── MATHEMATICS (80 questions) ───────────────────────────
    Mathematics: [
        {
            id: "m21e_1",
            q: "The derivative of sec x is:",
            options: ["sec x tan x", "-sec x tan x", "cosec x cot x", "-cosec x cot x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_2",
            q: "The integral of 15x¹⁴ dx is:",
            options: ["x¹⁵", "x¹⁵ + C", "15x¹⁵", "15x¹⁵ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_3",
            q: "The roots of x² - 25x + 144 = 0 are:",
            options: ["9, 16", "8, 18", "7, 19", "6, 20"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m21e_4",
            q: "The area of a circle with radius 15 cm is:",
            options: ["225π cm²", "450π cm²", "675π cm²", "900π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_5",
            q: "The probability of getting a 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21e_6",
            q: "The equation of line with slope 10/9 and y-intercept 12 is:",
            options: ["y = 10x", "y = 10x + 12", "y = 9x + 10", "y = 10x - 12"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21e_7",
            q: "The value of log₅₀ 125 is:",
            options: ["2/3", "3/2", "3", "6"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21e_8",
            q: "The number of ways to arrange 16 distinct objects is:",
            options: ["16", "256", "20922789888000", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21e_9",
            q: "The distance between (13,15) and (16,19) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_10",
            q: "The limit of (x² - 121)/(x - 11) as x approaches 11 is:",
            options: ["0", "11", "22", "121"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21e_11",
            q: "The integral of dx/x is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_12",
            q: "The sum of first 16 natural numbers is:",
            options: ["128", "136", "144", "152"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21e_13",
            q: "The equation of circle with center (12,14) and radius 13 is:",
            options: ["(x-12)² + (y-14)² = 169", "(x+12)² + (y+14)² = 169", "x² + y² = 169", "(x-12)² + (y-14)² = 13"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_14",
            q: "The derivative of e¹⁸x is:",
            options: ["e¹⁸x", "18e¹⁸x", "e^x", "18e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_15",
            q: "The angle between vectors 14i + 16j and 16i + 14j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21e_16",
            q: "The coefficient of x¹⁷ in (1 + x)¹⁸ is:",
            options: ["18", "153", "816", "3060"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21e_17",
            q: "The domain of f(x) = √(x + 13) is:",
            options: ["x ≥ -13", "x > -13", "x ≤ -13", "x < -13"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21e_18",
            q: "The period of sin 14x is:",
            options: ["π", "π/14", "2π", "2π/14"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_19",
            q: "The number of solutions of cos x = 0.9 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_20",
            q: "The determinant of [[16,17],[14,15]] is:",
            options: ["2", "10", "22", "68"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21e_21",
            q: "The area under the curve y = x² from x = 14 to x = 16 is:",
            options: ["32/3", "40/3", "48/3", "512/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_22",
            q: "The mean of 16, 18, 20 is:",
            options: ["17", "18", "19", "20"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21e_23",
            q: "The derivative of x¹⁰ e^x is:",
            options: ["10x⁹ e^x", "x¹⁰ e^x", "10x⁹ e^x + x¹⁰ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21e_24",
            q: "The angle subtended by an arc of length 15r at center is:",
            options: ["1 radian", "15 radians", "π radians", "π/15 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_26",
            q: "The solution of dy/dx = 13x¹² is:",
            options: ["y = x¹³", "y = x¹³ + C", "y = 13x¹³", "y = 13x¹³ + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21e_27",
            q: "The number of diagonals in a quadrilateral is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21e_30",
            q: "The number of ways to choose 14 items from 16 is:",
            options: ["120", "105", "91", "78"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21e_31",
            q: "The modulus of 17 - 21i is:",
            options: ["17", "21", "26", "38"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21e_32",
            q: "The derivative of x¹⁷ is:",
            options: ["x¹⁶", "17x¹⁶", "17x¹⁵", "x¹⁸"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_33",
            q: "The area of triangle with vertices (13,15), (16,19), (19,15) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21e_34",
            q: "The value of lim (x→0) (sin 13x)/x is:",
            options: ["0", "1", "13", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m21e_35",
            q: "The integral of tan x dx is:",
            options: ["ln|sec x|", "ln|sec x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_36",
            q: "The probability of getting a number greater than 5 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m21e_37",
            q: "The slope of y = 15 is:",
            options: ["0", "15", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m21e_38",
            q: "The value of log₁₀ 1000000000 is:",
            options: ["8", "9", "10", "11"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m21e_39",
            q: "The number of ways to arrange letters of 'PERMUTATION' is:",
            options: ["907200", "1814400", "3628800", "7257600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m21e_40",
            q: "The distance from (14,16) to (18,20) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_41",
            q: "The limit of (14x + 15)/(13x + 14) as x → ∞ is:",
            options: ["0", "1", "14/13", "15/14"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21e_42",
            q: "The integral of e¹⁹x dx is:",
            options: ["e¹⁹x", "e¹⁹x/19", "(1/19)e¹⁹x", "(1/19)e¹⁹x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_43",
            q: "The sum of infinite GP 1/14 + 1/196 + 1/2744 + ... is:",
            options: ["1/14", "1/13", "1/12", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21e_44",
            q: "The center of circle x² + y² - 28x + 26y + 25 = 0 is:",
            options: ["(14, -13)", "(-14, 13)", "(14, 13)", "(-14, -13)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21e_45",
            q: "The derivative of tan x is:",
            options: ["-sec² x", "sec² x", "cosec² x", "-cosec² x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_46",
            q: "The dot product of 14i + 15j and 15i + 14j is:",
            options: ["210", "225", "420", "450"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21e_47",
            q: "The general term of (a + b)¹⁸ is:",
            options: ["¹⁸Cᵣ aʳ b¹⁸⁻ʳ", "¹⁸Cᵣ a¹⁸⁻ʳ bʳ", "¹⁸Cᵣ a¹⁸ bʳ", "¹⁸Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m21e_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21e_49",
            q: "The value of sin 90° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_51",
            q: "The rank of matrix [[14,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21e_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_53",
            q: "The median of 13, 15, 17, 19, 21 is:",
            options: ["15", "16", "17", "19"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21e_54",
            q: "The derivative of x¹² ln x is:",
            options: ["12x¹¹ ln x", "x¹²/x", "12x¹¹ ln x + 12x¹¹", "12x¹¹ ln x + x¹²"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21e_55",
            q: "The angle in radian for 300° is:",
            options: ["π/6", "π/2", "5π/3", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_56",
            q: "The period of cot x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_57",
            q: "The solution of d²y/dx² = 25 is:",
            options: ["y = 25/2 x²", "y = 25/2 x² + C₁x + C₂", "y = 25x²", "y = 25x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m21e_58",
            q: "The number of diagonals in a pentagon is:",
            options: ["5", "6", "7", "8"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_59",
            q: "The value of ∫_{-13}^14 x dx is:",
            options: ["-13.5", "13.5", "27", "28"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m21e_61",
            q: "The number of ways to choose 13 items from 16 is:",
            options: ["560", "680", "816", "936"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m21e_62",
            q: "The argument of 13 + 15i is:",
            options: ["tan⁻¹(13/15)", "tan⁻¹(15/13)", "sin⁻¹(13/17)", "cos⁻¹(15/17)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m21e_63",
            q: "The derivative of x¹⁹ is:",
            options: ["x¹⁸", "19x¹⁸", "19x¹⁷", "x²⁰"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_64",
            q: "The area of parallelogram with vectors 15i + 16j and 16i + 15j is:",
            options: ["31", "256", "481", "512"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m21e_65",
            q: "The value of lim (x→∞) (x¹¹ + 14)/(x¹¹ + 15) is:",
            options: ["0", "1", "11", "12"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m21e_66",
            q: "The integral of sec² x dx is:",
            options: ["-tan x", "-tan x + C", "tan x", "tan x + C"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_67",
            q: "The sum of AP 15, 19, 23, 27, 31 is:",
            options: ["115", "125", "135", "145"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m21e_68",
            q: "The radius of circle x² + y² - 24x + 26y + 25 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m21e_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21e_70",
            q: "The cross product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m21e_71",
            q: "The middle term in (x + y)²³ is:",
            options: ["177100 x¹¹ y¹¹", "1352078 x¹¹ y¹¹", "10015005 x¹¹ y¹¹", "30045015 x¹¹ y¹¹"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m21e_72",
            q: "The domain of f(x) = 1/(x² - 81) is:",
            options: ["R", "R - {9}", "R - {-9, 9}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m21e_73",
            q: "The value of cos 180° is:",
            options: ["0", "1/2", "-1/2", "-1"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_74",
            q: "The number of solutions of tan x = 15 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_75",
            q: "The order of matrix [[1,2,3],[4,5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m21e_76",
            q: "The area under y = 14x from 0 to 1 is:",
            options: ["7", "8", "9", "14"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m21e_77",
            q: "The mode of 14, 15, 15, 16, 17, 17, 17 is:",
            options: ["14", "15", "16", "17"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m21e_78",
            q: "The derivative of sec x is:",
            options: ["-sec x tan x", "sec x tan x", "cosec x cot x", "-cosec x cot x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m21e_79",
            q: "The angle in degrees for 23π/6 radians is:",
            options: ["690°", "660°", "630°", "600°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m21e_80",
            q: "The period of cosec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;