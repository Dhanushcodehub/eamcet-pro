// ============================================================
//  TG EAMCET 2020 – May 13th Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p20f_1",
            q: "The work done by a force F in displacing a body by s is:",
            options: ["F/s", "F × s", "F - s", "F + s"],
            ans: 1,
            topic: "Work, Energy and Power",
            difficulty: "Easy"
        },
        {
            id: "p20f_2",
            q: "The acceleration due to gravity at the surface of Earth is:",
            options: ["9.8 m/s²", "10 m/s²", "9.8 km/s²", "10 km/s²"],
            ans: 0,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p20f_3",
            q: "The orbital velocity of a satellite orbiting at height h above Earth is:",
            options: ["√(GM/R)", "√(GM/(R+h))", "√(GM/R²)", "√(GM/(R+h)²)"],
            ans: 1,
            topic: "Gravitation",
            difficulty: "Easy"
        },
        {
            id: "p20f_4",
            q: "In Young's double slit experiment, the condition for constructive interference is:",
            options: ["Path difference = λ", "Path difference = λ/2", "Path difference = 0", "Path difference = 3λ/2"],
            ans: 0,
            topic: "Wave Optics",
            difficulty: "Easy"
        },
        {
            id: "p20f_5",
            q: "The magnetic field at a point on the axis of a solenoid is:",
            options: ["Zero", "Maximum", "Minimum", "Uniform"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20f_6",
            q: "The SI unit of current is:",
            options: ["Volt", "Coulomb", "Ampere", "Ohm"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20f_7",
            q: "The number of beta particles emitted in the decay of C-14 to N-14 is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20f_8",
            q: "The centripetal acceleration is provided by:",
            options: ["Normal force", "Gravitational force", "Tension", "Any force towards center"],
            ans: 3,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p20f_9",
            q: "The resistance of a conductor depends on:",
            options: ["Length", "Area", "Material", "All of these"],
            ans: 3,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p20f_10",
            q: "The speed of sound in air at 25°C is approximately:",
            options: ["332 m/s", "346 m/s", "360 m/s", "400 m/s"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20f_11",
            q: "The time period of a pendulum depends on:",
            options: ["Mass of bob", "Amplitude", "Length", "Both A and B"],
            ans: 2,
            topic: "Oscillations",
            difficulty: "Easy"
        },
        {
            id: "p20f_12",
            q: "The capacitance of a parallel plate capacitor depends on:",
            options: ["Charge", "Potential difference", "Area and distance", "Dielectric constant"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20f_13",
            q: "The focal length of a concave mirror is:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20f_14",
            q: "The de Broglie wavelength is inversely proportional to:",
            options: ["Mass", "Velocity", "Momentum", "Energy"],
            ans: 2,
            topic: "Modern Physics",
            difficulty: "Easy"
        },
        {
            id: "p20f_15",
            q: "The coefficient of static friction is:",
            options: ["Less than kinetic friction", "Equal to kinetic friction", "Greater than kinetic friction", "Zero"],
            ans: 2,
            topic: "Friction",
            difficulty: "Easy"
        },
        {
            id: "p20f_16",
            q: "The moment of inertia of a thin rod about its end is:",
            options: ["MR²/12", "MR²/3", "MR²/2", "MR²"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p20f_17",
            q: "The pressure of an ideal gas is due to:",
            options: ["Molecular collisions", "Molecular attraction", "Molecular repulsion", "None"],
            ans: 0,
            topic: "Kinetic Theory",
            difficulty: "Easy"
        },
        {
            id: "p20f_18",
            q: "The magnetic field inside a solenoid is:",
            options: ["Zero outside", "Uniform inside", "Both A and B", "None"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20f_19",
            q: "The SI unit of magnetic flux is:",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            ans: 1,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20f_20",
            q: "The energy levels in hydrogen atom are:",
            options: ["Equally spaced", "Non-equally spaced", "Linear", "Circular"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Easy"
        },
        {
            id: "p20f_21",
            q: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
            ans: 0,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p20f_22",
            q: "The principle of superposition applies to:",
            options: ["Light waves", "Sound waves", "All waves", "Particles"],
            ans: 2,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20f_23",
            q: "The self-inductance depends on:",
            options: ["Current", "Voltage", "Number of turns", "Resistance"],
            ans: 2,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p20f_24",
            q: "The refractive index of water is:",
            options: ["1.0", "1.33", "1.5", "2.0"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20f_25",
            q: "Nuclear fusion occurs in:",
            options: ["Light nuclei", "Heavy nuclei", "All nuclei", "No nuclei"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20f_26",
            q: "The photoelectric effect was explained by:",
            options: ["Einstein", "Planck", "Hertz", "Rutherford"],
            ans: 0,
            topic: "Photoelectric Effect",
            difficulty: "Easy"
        },
        {
            id: "p20f_27",
            q: "The efficiency of a Carnot engine is:",
            options: ["Always 100%", "Less than 100%", "More than 100%", "Zero"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p20f_28",
            q: "The magnetic moment is measured in:",
            options: ["Tesla", "Weber", "Ampere-meter²", "Henry"],
            ans: 2,
            topic: "Magnetism",
            difficulty: "Easy"
        },
        {
            id: "p20f_29",
            q: "The velocity of electromagnetic waves is:",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁴ m/s", "3 × 10² m/s"],
            ans: 0,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p20f_30",
            q: "The radius of gyration has units of:",
            options: ["Mass", "Length", "Time", "Angle"],
            ans: 1,
            topic: "Rotational Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p20f_31",
            q: "Mutual inductance depends on:",
            options: ["Current", "Flux linkage", "Resistance", "Voltage"],
            ans: 1,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p20f_32",
            q: "The Doppler effect is maximum when:",
            options: ["Source moves towards observer", "Source moves away", "Both perpendicular", "Both stationary"],
            ans: 0,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p20f_33",
            q: "The electric field inside a hollow conductor is:",
            options: ["Maximum", "Uniform", "Zero", "Increases"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20f_34",
            q: "The half-life of a radioactive substance is:",
            options: ["Time for half atoms to decay", "Time for all atoms to decay", "Time for quarter atoms to decay", "None"],
            ans: 0,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20f_35",
            q: "The angular momentum in Bohr's model is:",
            options: ["nh/2", "nh/2π", "nh/π", "n²h/2π"],
            ans: 1,
            topic: "Atoms",
            difficulty: "Medium"
        },
        {
            id: "p20f_36",
            q: "The power factor in AC circuits is:",
            options: ["Always 1", "Always 0", "Between 0 and 1", "Greater than 1"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p20f_37",
            q: "Total internal reflection occurs when:",
            options: ["Light goes from rarer to denser", "Light goes from denser to rarer", "Both", "None"],
            ans: 1,
            topic: "Ray Optics",
            difficulty: "Easy"
        },
        {
            id: "p20f_38",
            q: "Nuclear fission was discovered by:",
            options: ["Bohr", "Rutherford", "Hahn and Strassmann", "Einstein"],
            ans: 2,
            topic: "Nuclear Physics",
            difficulty: "Easy"
        },
        {
            id: "p20f_39",
            q: "The SI unit of electric field is:",
            options: ["Volt", "Coulomb", "Newton/Coulomb", "Ampere"],
            ans: 2,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p20f_40",
            q: "The number of significant figures in 0.00807 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Easy"
        }
    ],


    // ── CHEMISTRY (40 questions) ─────────────────────────────
    Chemistry: [
        {
            id: "c20f_1",
            q: "The number of moles in 2.24 L of CO₂ at STP is:",
            options: ["0.1", "0.2", "0.5", "1"],
            ans: 0,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c20f_2",
            q: "The oxidation state of Cr in K₂Cr₂O₇ is:",
            options: ["+4", "+5", "+6", "+7"],
            ans: 2,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c20f_3",
            q: "The shape of CH₄ is:",
            options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
            ans: 2,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20f_4",
            q: "The pH of 10⁻⁶ M H⁺ is:",
            options: ["1", "6", "7", "9"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20f_5",
            q: "The rate of reaction increases with:",
            options: ["Decrease in temperature", "Decrease in concentration", "Increase in catalyst", "All of these"],
            ans: 2,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20f_6",
            q: "The IUPAC name of CH₃CH₂CH₂CH₂CH₂OH is:",
            options: ["Pentanol", "Hexanol", "Heptanol", "Butanol"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_7",
            q: "The number of σ bonds in ethyne is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_8",
            q: "The element with atomic number 17 belongs to:",
            options: ["s-block", "p-block", "d-block", "f-block"],
            ans: 1,
            topic: "Periodic Table",
            difficulty: "Easy"
        },
        {
            id: "c20f_9",
            q: "The enthalpy of condensation is:",
            options: ["Always positive", "Always negative", "Can be positive or negative", "Zero"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20f_10",
            q: "The number of atoms per unit cell in BCC is:",
            options: ["1", "2", "4", "8"],
            ans: 1,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c20f_11",
            q: "The bond order of Li₂ is:",
            options: ["0.5", "1", "1.5", "2"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20f_12",
            q: "The solubility product of BaSO₄ is 1.0 × 10⁻¹⁰. Its solubility is:",
            options: ["1.0 × 10⁻⁵", "1.0 × 10⁻⁴", "1.0 × 10⁻³", "1.0 × 10⁻²"],
            ans: 0,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20f_13",
            q: "The isomerism shown by C₄H₁₀ is:",
            options: ["Structural", "Geometrical", "Optical", "None"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_14",
            q: "The molecular formula of haemoglobin is:",
            options: ["C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe₄", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈Fe", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂S₈", "C₂₉₄₂H₄₆₆₄O₈₃₂N₇₈₂"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c20f_15",
            q: "The electrode potential depends on:",
            options: ["Concentration", "Temperature", "Nature of electrode", "All of these"],
            ans: 3,
            topic: "Electrochemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_16",
            q: "The order of reactivity in SN2 reaction is:",
            options: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "1° > 3° > 2°"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c20f_17",
            q: "The magnetic moment of Mn²⁺ is:",
            options: ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Easy"
        },
        {
            id: "c20f_18",
            q: "The pKa of H₂CO₃ is:",
            options: ["3.7", "6.4", "9.2", "14.0"],
            ans: 1,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20f_19",
            q: "The number of atoms in HCP unit cell is:",
            options: ["1", "2", "4", "6"],
            ans: 3,
            topic: "Solid State",
            difficulty: "Easy"
        },
        {
            id: "c20f_20",
            q: "The catalyst used in Ostwald process is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 2,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_21",
            q: "The molecular formula of glycogen is:",
            options: ["(C₆H₁₀O₅)ₙ", "(C₁₂H₂₂O₁₁)ₙ", "(C₆H₁₂O₆)ₙ", "(C₅H₁₀O₅)ₙ"],
            ans: 0,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c20f_22",
            q: "The enthalpy change for the reaction C + O₂ → CO₂ is:",
            options: ["ΔH_f", "ΔH_c", "ΔH_n", "ΔH_v"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20f_23",
            q: "The shape of PCl₅ is:",
            options: ["Trigonal bipyramidal", "Tetrahedral", "Square pyramidal", "Octahedral"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20f_24",
            q: "The equivalent weight of Na₂Cr₂O₇ in acidic medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c20f_25",
            q: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["But-2-ene", "But-1-ene", "But-2-yne", "But-1-yne"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_26",
            q: "The value of Avogadro's number is:",
            options: ["6.023 × 10²²", "6.023 × 10²³", "6.023 × 10²⁴", "6.023 × 10²⁵"],
            ans: 1,
            topic: "Mole Concept",
            difficulty: "Easy"
        },
        {
            id: "c20f_27",
            q: "The ionization potential decreases down the group due to:",
            options: ["Increase in nuclear charge", "Decrease in atomic size", "Increase in shielding", "Decrease in shielding"],
            ans: 2,
            topic: "Periodic Properties",
            difficulty: "Easy"
        },
        {
            id: "c20f_28",
            q: "The rate constant of a first order reaction has units:",
            options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
            ans: 1,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20f_29",
            q: "The number of lone pairs in NH₃ is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20f_30",
            q: "The pH of 10⁻¹⁰ M NaOH is:",
            options: ["4", "7", "10", "14"],
            ans: 2,
            topic: "Ionic Equilibrium",
            difficulty: "Easy"
        },
        {
            id: "c20f_31",
            q: "The catalyst used in hydrogenation is:",
            options: ["Fe", "V₂O₅", "Pt", "Ni"],
            ans: 3,
            topic: "Industrial Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_32",
            q: "The molecular formula of anthracene is:",
            options: ["C₁₄H₁₀", "C₁₀H₈", "C₆H₶", "C₈H₈"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Easy"
        },
        {
            id: "c20f_33",
            q: "The change in Gibbs free energy is zero at:",
            options: ["Melting point", "Boiling point", "Equilibrium", "Freezing point"],
            ans: 2,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "c20f_34",
            q: "The number of unpaired electrons in N₂ is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Easy"
        },
        {
            id: "c20f_35",
            q: "The equivalent weight of K₂Cr₂O₇ in neutral medium is:",
            options: ["49", "98", "196", "294"],
            ans: 1,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c20f_36",
            q: "The number of carbon atoms in lauric acid is:",
            options: ["14", "16", "18", "20"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c20f_37",
            q: "The order of a reaction can be:",
            options: ["Zero", "Fractional", "Negative", "All of these"],
            ans: 3,
            topic: "Chemical Kinetics",
            difficulty: "Easy"
        },
        {
            id: "c20f_38",
            q: "The hybridization of carbon in HCN is:",
            options: ["sp", "sp²", "sp³", "dsp²"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c20f_39",
            q: "The solubility of gases in liquids increases with:",
            options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Easy"
        },
        {
            id: "c20f_40",
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
            id: "m20f_1",
            q: "The derivative of sin x is:",
            options: ["-cos x", "cos x", "tan x", "-tan x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_2",
            q: "The integral of 15x¹⁴ dx is:",
            options: ["x¹⁵", "x¹⁵ + C", "15x¹⁵", "15x¹⁵ + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_3",
            q: "The roots of x² - 25x + 144 = 0 are:",
            options: ["9, 16", "8, 18", "7, 19", "6, 20"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Easy"
        },
        {
            id: "m20f_4",
            q: "The area of a circle with radius 14 cm is:",
            options: ["196π cm²", "392π cm²", "588π cm²", "784π cm²"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_5",
            q: "The probability of getting a 5 on a die is:",
            options: ["1/6", "1/5", "1/4", "1/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m20f_6",
            q: "The equation of line with slope 9/10 and y-intercept 11 is:",
            options: ["y = 9x", "y = 9x + 11", "y = 10x + 9", "y = 9x - 11"],
            ans: 1,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m20f_7",
            q: "The value of log₃₆ 216 is:",
            options: ["2/3", "3/2", "3", "6"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m20f_8",
            q: "The number of ways to arrange 16 distinct objects is:",
            options: ["16", "256", "20922789888000", "720"],
            ans: 2,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20f_9",
            q: "The distance between (12,14) and (15,18) is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_10",
            q: "The limit of (x² - 100)/(x - 10) as x approaches 10 is:",
            options: ["0", "10", "20", "100"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20f_11",
            q: "The integral of 1/x dx is:",
            options: ["ln x", "ln x + C", "x", "x + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_12",
            q: "The sum of first 15 natural numbers is:",
            options: ["120", "135", "150", "165"],
            ans: 0,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20f_13",
            q: "The equation of circle with center (11,13) and radius 12 is:",
            options: ["(x-11)² + (y-13)² = 144", "(x+11)² + (y+13)² = 144", "x² + y² = 144", "(x-11)² + (y-13)² = 12"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_14",
            q: "The derivative of e¹⁷x is:",
            options: ["e¹⁷x", "17e¹⁷x", "e^x", "17e^x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_15",
            q: "The angle between vectors 13i + 15j and 15i + 13j is:",
            options: ["30°", "45°", "60°", "90°"],
            ans: 1,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m20f_16",
            q: "The coefficient of x¹⁶ in (1 + x)¹⁷ is:",
            options: ["17", "136", "680", "2380"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m20f_17",
            q: "The domain of f(x) = √(x + 12) is:",
            options: ["x ≥ -12", "x > -12", "x ≤ -12", "x < -12"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20f_18",
            q: "The period of sin 13x is:",
            options: ["π", "π/13", "2π", "2π/13"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_19",
            q: "The number of solutions of cos x = 0.8 in [0, 2π] is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_20",
            q: "The determinant of [[15,16],[13,14]] is:",
            options: ["2", "10", "22", "68"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20f_21",
            q: "The area under the curve y = x² from x = 13 to x = 15 is:",
            options: ["32/3", "40/3", "48/3", "512/3"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_22",
            q: "The mean of 15, 17, 19 is:",
            options: ["16", "17", "18", "19"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20f_23",
            q: "The derivative of x⁹ e^x is:",
            options: ["9x⁸ e^x", "x⁹ e^x", "9x⁸ e^x + x⁹ e^x", "e^x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20f_24",
            q: "The angle subtended by an arc of length 14r at center is:",
            options: ["1 radian", "14 radians", "π radians", "π/14 radians"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_25",
            q: "The range of cos x is:",
            options: ["[-1, 1]", "[0, 1]", "[-∞, ∞]", "[0, ∞]"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_26",
            q: "The solution of dy/dx = 12x¹¹ is:",
            options: ["y = x¹²", "y = x¹² + C", "y = 12x¹²", "y = 12x¹² + C"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m20f_27",
            q: "The number of diagonals in a triangle is:",
            options: ["0", "1", "2", "3"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_28",
            q: "The value of ∫_0^π sin x dx is:",
            options: ["0", "1", "2", "-1"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_29",
            q: "The equation of tangent to y = x² at x = 1 is:",
            options: ["y = 2x", "y = 2x - 1", "y = x + 1", "y = 2x + 1"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20f_30",
            q: "The number of ways to choose 13 items from 15 is:",
            options: ["78", "105", "120", "136"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20f_31",
            q: "The modulus of 16 - 20i is:",
            options: ["16", "20", "24", "36"],
            ans: 2,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m20f_32",
            q: "The derivative of x¹⁶ is:",
            options: ["x¹⁵", "16x¹⁵", "16x¹⁴", "x¹⁷"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_33",
            q: "The area of triangle with vertices (12,14), (15,18), (18,14) is:",
            options: ["6", "8", "10", "12"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20f_34",
            q: "The value of lim (x→0) (sin 12x)/x is:",
            options: ["0", "1", "12", "∞"],
            ans: 2,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m20f_35",
            q: "The integral of cot x dx is:",
            options: ["ln|sin x|", "ln|sin x| + C", "ln|cos x|", "ln|cos x| + C"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_36",
            q: "The probability of getting a number greater than 4 on a die is:",
            options: ["1/6", "1/3", "1/2", "2/3"],
            ans: 1,
            topic: "Probability",
            difficulty: "Easy"
        },
        {
            id: "m20f_37",
            q: "The slope of y = 14 is:",
            options: ["0", "14", "1", "∞"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Easy"
        },
        {
            id: "m20f_38",
            q: "The value of log₁₀ 10000000000 is:",
            options: ["9", "10", "11", "12"],
            ans: 1,
            topic: "Logarithms",
            difficulty: "Easy"
        },
        {
            id: "m20f_39",
            q: "The number of ways to arrange letters of 'ARRANGEMENT' is:",
            options: ["151200", "302400", "604800", "1209600"],
            ans: 1,
            topic: "Permutations and Combinations",
            difficulty: "Hard"
        },
        {
            id: "m20f_40",
            q: "The distance from (13,15) to (17,19) is:",
            options: ["4", "5", "6", "7"],
            ans: 2,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_41",
            q: "The limit of (13x + 14)/(12x + 13) as x → ∞ is:",
            options: ["0", "1", "13/12", "14/13"],
            ans: 2,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20f_42",
            q: "The integral of e¹⁸x dx is:",
            options: ["e¹⁸x", "e¹⁸x/18", "(1/18)e¹⁸x", "(1/18)e¹⁸x + C"],
            ans: 3,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_43",
            q: "The sum of infinite GP 1/13 + 1/169 + 1/2197 + ... is:",
            options: ["1/13", "1/12", "1/11", "1"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20f_44",
            q: "The center of circle x² + y² - 26x + 24y + 25 = 0 is:",
            options: ["(13, -12)", "(-13, 12)", "(13, 12)", "(-13, -12)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20f_45",
            q: "The derivative of tan x is:",
            options: ["-cot x", "cot x", "sec² x", "-sec² x"],
            ans: 2,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_46",
            q: "The dot product of 13i + 14j and 14i + 13j is:",
            options: ["182", "196", "364", "392"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m20f_47",
            q: "The general term of (a + b)¹⁷ is:",
            options: ["¹⁷Cᵣ aʳ b¹⁷⁻ʳ", "¹⁷Cᵣ a¹⁷⁻ʳ bʳ", "¹⁷Cᵣ a¹⁷ bʳ", "¹⁷Cᵣ aʳ bʳ"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        },
        {
            id: "m20f_48",
            q: "The range of f(x) = |x| is:",
            options: ["(-∞, 0]", "[0, ∞)", "[-∞, ∞)", "[0, ∞]"],
            ans: 1,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20f_49",
            q: "The value of sin 90° is:",
            options: ["0", "1/2", "1", "-1"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_50",
            q: "The number of solutions of cos x = 0 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_51",
            q: "The rank of matrix [[13,0],[0,0]] is:",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20f_52",
            q: "The area under y = sin x from 0 to π/2 is:",
            options: ["0", "1", "π/2", "π"],
            ans: 1,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_53",
            q: "The median of 12, 14, 16, 18, 20 is:",
            options: ["14", "15", "16", "18"],
            ans: 2,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20f_54",
            q: "The derivative of x¹¹ ln x is:",
            options: ["11x¹⁰ ln x", "x¹¹/x", "11x¹⁰ ln x + 11x¹⁰", "11x¹⁰ ln x + x¹¹"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20f_55",
            q: "The angle in radian for 270° is:",
            options: ["π/6", "π/2", "3π/2", "2π/3"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_56",
            q: "The period of sec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_57",
            q: "The solution of d²y/dx² = 24 is:",
            options: ["y = 12x²", "y = 12x² + C₁x + C₂", "y = 24x²", "y = 24x² + C₁x + C₂"],
            ans: 1,
            topic: "Differential Equations",
            difficulty: "Easy"
        },
        {
            id: "m20f_58",
            q: "The number of diagonals in a hexagon is:",
            options: ["6", "9", "12", "15"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_59",
            q: "The value of ∫_{-12}^13 x dx is:",
            options: ["-12.5", "12.5", "25", "26"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_60",
            q: "The equation of normal to y = x² at x = 2 is:",
            options: ["y = -1/4 x + 2", "y = -1/4 x + 3", "y = 4x - 6", "y = -4x + 10"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Hard"
        },
        {
            id: "m20f_61",
            q: "The number of ways to choose 12 items from 15 is:",
            options: ["455", "560", "680", "816"],
            ans: 0,
            topic: "Permutations and Combinations",
            difficulty: "Easy"
        },
        {
            id: "m20f_62",
            q: "The argument of 12 + 14i is:",
            options: ["tan⁻¹(12/14)", "tan⁻¹(14/12)", "sin⁻¹(12/16)", "cos⁻¹(14/16)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Easy"
        },
        {
            id: "m20f_63",
            q: "The derivative of x¹⁸ is:",
            options: ["x¹⁷", "18x¹⁷", "18x¹⁶", "x¹⁹"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_64",
            q: "The area of parallelogram with vectors 14i + 15j and 15i + 14j is:",
            options: ["29", "225", "421", "450"],
            ans: 2,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m20f_65",
            q: "The value of lim (x→∞) (x¹⁰ + 13)/(x¹⁰ + 14) is:",
            options: ["0", "1", "10", "11"],
            ans: 1,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m20f_66",
            q: "The integral of sec² x dx is:",
            options: ["-tan x", "-tan x + C", "tan x", "tan x + C"],
            ans: 2,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_67",
            q: "The sum of AP 14, 18, 22, 26, 30 is:",
            options: ["110", "120", "130", "140"],
            ans: 1,
            topic: "Sequences and Series",
            difficulty: "Easy"
        },
        {
            id: "m20f_68",
            q: "The radius of circle x² + y² - 22x + 24y + 25 = 0 is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Coordinate Geometry",
            difficulty: "Medium"
        },
        {
            id: "m20f_69",
            q: "The derivative of sin x cos x is:",
            options: ["cos 2x", "sin 2x", "cos² x - sin² x", "(1/2) sin 2x"],
            ans: 0,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20f_70",
            q: "The cross product of i × j is:",
            options: ["0", "1", "-1", "k"],
            ans: 3,
            topic: "Vectors",
            difficulty: "Easy"
        },
        {
            id: "m20f_71",
            q: "The middle term in (x + y)²² is:",
            options: ["1540 x¹¹ y¹¹", "646646 x¹¹ y¹¹", "10015005 x¹¹ y¹¹", "30045015 x¹¹ y¹¹"],
            ans: 1,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m20f_72",
            q: "The domain of f(x) = 1/(x² - 64) is:",
            options: ["R", "R - {8}", "R - {-8, 8}", "R - {0}"],
            ans: 2,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m20f_73",
            q: "The value of cos 180° is:",
            options: ["0", "1/2", "-1/2", "-1"],
            ans: 3,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_74",
            q: "The number of solutions of tan x = 13 in [0, π] is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_75",
            q: "The order of matrix [[1,2],[3,4],[5,6]] is:",
            options: ["2×2", "2×3", "3×2", "3×3"],
            ans: 2,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m20f_76",
            q: "The area under y = 13x from 0 to 1 is:",
            options: ["6.5", "7", "8", "13"],
            ans: 0,
            topic: "Integral Calculus",
            difficulty: "Easy"
        },
        {
            id: "m20f_77",
            q: "The mode of 13, 14, 14, 15, 16, 16, 16 is:",
            options: ["13", "14", "15", "16"],
            ans: 3,
            topic: "Statistics",
            difficulty: "Easy"
        },
        {
            id: "m20f_78",
            q: "The derivative of sec x is:",
            options: ["-sec x tan x", "sec x tan x", "cosec x cot x", "-cosec x cot x"],
            ans: 1,
            topic: "Differential Calculus",
            difficulty: "Medium"
        },
        {
            id: "m20f_79",
            q: "The angle in degrees for 21π/6 radians is:",
            options: ["630°", "600°", "570°", "540°"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m20f_80",
            q: "The period of cosec x is:",
            options: ["π", "π/2", "2π", "4π"],
            ans: 2,
            topic: "Trigonometry",
            difficulty: "Easy"
        }
    ]
};

export default questions;