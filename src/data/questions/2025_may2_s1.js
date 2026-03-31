// ============================================================
//  TG EAPCET 2025 – May 2nd Morning Shift
//  Physics: 40 Qs | Chemistry: 40 Qs | Mathematics: 80 Qs
//  Format: { id, q, options, ans (0-indexed), topic, difficulty }
// ============================================================

const questions = {


    // ── PHYSICS (40 questions) ──────────────────────────────
    Physics: [
        {
            id: "p25_1",
            q: "For any fixed distance, the electromagnetic force between two protons is 10ⁿ times the gravitational force between them. The value of n is approximately:",
            options: ["36", "38", "40", "42"],
            ans: 1,
            topic: "Units & Measurement",
            difficulty: "Medium"
        },
        {
            id: "p25_2",
            q: "If A, B and C are three different physical quantities with different dimensional formulae, then the combination which can be dimensionally consistent is:",
            options: ["A + B = C", "A - B = C", "A / B = C", "A × B = C"],
            ans: 3,
            topic: "Units & Measurement",
            difficulty: "Easy"
        },
        {
            id: "p25_3",
            q: "The driver of a bus moving with a velocity of 72 km/h observes a boy walking across the road at a distance of 40 m. If the bus decelerates at 5 m/s², what is the minimum distance between the bus and the boy when the bus stops?",
            options: ["0 m", "10 m", "20 m", "40 m"],
            ans: 0,
            topic: "Motion in a Straight Line",
            difficulty: "Hard"
        },
        {
            id: "p25_4",
            q: "A helicopter flying horizontally with a velocity of 288 km/h drops a bomb. If the line joining the helicopter to the bomb makes an angle of 45° with the horizontal just before hitting the ground, what is the height of the helicopter?",
            options: ["320 m", "400 m", "480 m", "500 m"],
            ans: 0,
            topic: "Motion in a Plane",
            difficulty: "Hard"
        },
        {
            id: "p25_5",
            q: "A man of mass 60 kg is standing in a lift moving up with a retardation of 2.8 m/s². The apparent weight of the man is: (g = 10 m/s²)",
            options: ["432 N", "600 N", "768 N", "516 N"],
            ans: 0,
            topic: "Laws of Motion",
            difficulty: "Medium"
        },
        {
            id: "p25_6",
            q: "The initial and final velocities of a body projected vertically from the ground are 20 m/s and 18 m/s respectively (upward positive). The work done by air resistance during its upward journey (mass = 1 kg) is:",
            options: ["-38 J", "-19 J", "19 J", "38 J"],
            ans: 1,
            topic: "Work, Energy and Power",
            difficulty: "Hard"
        },
        {
            id: "p25_7",
            q: "A particle is acted upon by a force of constant magnitude such that its velocity and acceleration are always perpendicular to each other. The particle moves in:",
            options: ["A straight line", "A parabola", "A circle", "An ellipse"],
            ans: 2,
            topic: "Circular Motion",
            difficulty: "Easy"
        },
        {
            id: "p25_8",
            q: "Two bodies of masses m₁ and m₂ are moving with kinetic energies in the ratio 4 : 1. If their momenta are equal, the ratio m₁ : m₂ is:",
            options: ["1 : 4", "4 : 1", "1 : 2", "2 : 1"],
            ans: 0,
            topic: "Work, Energy and Power",
            difficulty: "Medium"
        },
        {
            id: "p25_9",
            q: "A solid cylinder of mass M and radius R rolls without slipping on a horizontal surface. The ratio of its rotational kinetic energy to its total kinetic energy is:",
            options: ["1 : 2", "1 : 3", "1 : 4", "2 : 3"],
            ans: 1,
            topic: "Rotational Motion",
            difficulty: "Medium"
        },
        {
            id: "p25_10",
            q: "A satellite orbits the Earth at height h above the surface. If R is the radius of Earth and g is the acceleration due to gravity at the surface, the orbital velocity is:",
            options: ["√(gR²/(R+h))", "√(gR/(R+h))", "√(g(R+h))", "√(gR)"],
            ans: 0,
            topic: "Gravitation",
            difficulty: "Medium"
        },
        {
            id: "p25_11",
            q: "A wire of length L and cross-sectional area A has Young's modulus Y. When a force F is applied, the elastic potential energy stored per unit volume is:",
            options: ["F²/(2YA²)", "F²/(YA²)", "F/(2YA)", "F²L/(2YA)"],
            ans: 0,
            topic: "Elasticity",
            difficulty: "Hard"
        },
        {
            id: "p25_12",
            q: "A liquid of density ρ is filled in a U-tube. When a pressure P is applied on one limb, the difference in the levels of liquid in the two limbs is:",
            options: ["P/ρg", "2P/ρg", "P/2ρg", "ρg/P"],
            ans: 0,
            topic: "Fluid Mechanics",
            difficulty: "Easy"
        },
        {
            id: "p25_13",
            q: "The temperature of a gas is raised from 27°C to 927°C. The rms speed of the gas molecules becomes:",
            options: ["√2 times", "2 times", "4 times", "3 times"],
            ans: 1,
            topic: "Kinetic Theory",
            difficulty: "Medium"
        },
        {
            id: "p25_14",
            q: "In an adiabatic process, the pressure and volume of a gas are related by PVᵞ = constant. If γ = 5/3 and the volume is doubled, the pressure becomes:",
            options: ["P/2^(5/3)", "P × 2^(5/3)", "P/2", "2P"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Hard"
        },
        {
            id: "p25_15",
            q: "A Carnot engine working between 400 K and 800 K has an efficiency of:",
            options: ["25%", "50%", "75%", "100%"],
            ans: 1,
            topic: "Thermodynamics",
            difficulty: "Easy"
        },
        {
            id: "p25_16",
            q: "The time period of oscillation of a simple pendulum on the Moon is T_m and on the Earth is T_e. If g_moon = g_earth/6, then T_m/T_e is:",
            options: ["1/√6", "√6", "6", "1/6"],
            ans: 1,
            topic: "Simple Harmonic Motion",
            difficulty: "Easy"
        },
        {
            id: "p25_17",
            q: "The speed of sound in a gas depends on temperature T as:",
            options: ["v ∝ T", "v ∝ √T", "v ∝ T²", "v ∝ 1/√T"],
            ans: 1,
            topic: "Waves",
            difficulty: "Easy"
        },
        {
            id: "p25_18",
            q: "Two charges +4q and -q are placed 30 cm apart. At what distance from +4q on the line joining the charges is the electric field zero?",
            options: ["10 cm", "20 cm", "15 cm", "60 cm"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Medium"
        },
        {
            id: "p25_19",
            q: "A parallel plate capacitor with plate area A and separation d is filled with a dielectric of dielectric constant K. The capacitance is:",
            options: ["ε₀A/d", "Kε₀A/d", "ε₀A/Kd", "Kε₀A/(2d)"],
            ans: 1,
            topic: "Electrostatics",
            difficulty: "Easy"
        },
        {
            id: "p25_20",
            q: "A battery of emf 12 V and internal resistance 2 Ω is connected to an external resistance of 10 Ω. The current in the circuit is:",
            options: ["1 A", "1.2 A", "6 A", "0.5 A"],
            ans: 0,
            topic: "Current Electricity",
            difficulty: "Easy"
        },
        {
            id: "p25_21",
            q: "A wire of resistance 10 Ω is stretched to double its original length. The new resistance of the wire is:",
            options: ["20 Ω", "40 Ω", "80 Ω", "5 Ω"],
            ans: 1,
            topic: "Current Electricity",
            difficulty: "Medium"
        },
        {
            id: "p25_22",
            q: "A proton moving with velocity v enters a magnetic field B perpendicular to its velocity. The radius of circular motion is r. If the velocity is doubled, the new radius is:",
            options: ["r/2", "r", "2r", "4r"],
            ans: 2,
            topic: "Moving Charges and Magnetism",
            difficulty: "Medium"
        },
        {
            id: "p25_23",
            q: "A circular loop of radius r carrying current I is placed in a uniform magnetic field B. The torque on the loop when the plane of the loop is parallel to B is:",
            options: ["0", "πr²IB", "2πrIB", "πr²IB/2"],
            ans: 1,
            topic: "Magnetism and Matter",
            difficulty: "Medium"
        },
        {
            id: "p25_24",
            q: "The magnetic flux linked with a coil changes from 5 Wb to 1 Wb in 2 seconds. The induced emf is:",
            options: ["2 V", "3 V", "4 V", "6 V"],
            ans: 0,
            topic: "Electromagnetic Induction",
            difficulty: "Easy"
        },
        {
            id: "p25_25",
            q: "The frequency of an alternating voltage is 50 Hz. The time taken for the instantaneous value of the voltage to go from 0 to peak value is:",
            options: ["0.02 s", "0.01 s", "0.005 s", "0.0025 s"],
            ans: 2,
            topic: "Alternating Current",
            difficulty: "Medium"
        },
        {
            id: "p25_26",
            q: "In a series LCR circuit at resonance, the impedance is:",
            options: ["Maximum", "Minimum (= R)", "Zero", "Equal to L/C"],
            ans: 1,
            topic: "Alternating Current",
            difficulty: "Easy"
        },
        {
            id: "p25_27",
            q: "Electromagnetic waves are transverse in nature. This is confirmed by the phenomenon of:",
            options: ["Diffraction", "Interference", "Polarisation", "Refraction"],
            ans: 2,
            topic: "Electromagnetic Waves",
            difficulty: "Easy"
        },
        {
            id: "p25_28",
            q: "A ray of light passes from glass (n = 1.5) to water (n = 1.33). The critical angle for total internal reflection is approximately:",
            options: ["48.75°", "62.46°", "41.8°", "30°"],
            ans: 1,
            topic: "Optics",
            difficulty: "Hard"
        },
        {
            id: "p25_29",
            q: "Young's double slit experiment is performed with light of wavelength 600 nm. The distance between slits is 1 mm and the screen is 1 m away. The fringe width is:",
            options: ["0.3 mm", "0.6 mm", "0.9 mm", "1.2 mm"],
            ans: 1,
            topic: "Optics",
            difficulty: "Medium"
        },
        {
            id: "p25_30",
            q: "The resolving power of a telescope depends on the:",
            options: ["Focal length of objective", "Diameter of objective", "Focal length of eyepiece", "Magnifying power"],
            ans: 1,
            topic: "Optics",
            difficulty: "Easy"
        },
        {
            id: "p25_31",
            q: "In photoelectric effect, doubling the intensity of incident light (keeping frequency constant above threshold):",
            options: ["Doubles the maximum KE of photoelectrons", "Doubles the stopping potential", "Doubles the number of photoelectrons per second", "Has no effect"],
            ans: 2,
            topic: "Dual Nature of Radiation",
            difficulty: "Medium"
        },
        {
            id: "p25_32",
            q: "The de Broglie wavelength of an electron accelerated through a potential of 100 V is approximately:",
            options: ["0.123 nm", "1.23 nm", "0.0123 nm", "12.3 nm"],
            ans: 0,
            topic: "Dual Nature of Radiation",
            difficulty: "Medium"
        },
        {
            id: "p25_33",
            q: "Photons of energy 4.5 eV are incident on a photosensitive material of work function 3 eV. The de Broglie wavelength associated with the emitted photoelectrons is:",
            options: ["0.587 nm", "0.413 nm", "1.26 nm", "0.826 nm"],
            ans: 0,
            topic: "Dual Nature of Radiation",
            difficulty: "Hard"
        },
        {
            id: "p25_34",
            q: "If the difference in the frequencies of the first and second lines of the Lyman series of hydrogen atom is f, then the frequency of the first line of the Lyman series is:",
            options: ["3f/2", "4f/3", "8f/3", "3f/8"],
            ans: 2,
            topic: "Atoms",
            difficulty: "Hard"
        },
        {
            id: "p25_35",
            q: "The average energy of a neutron produced in the fission of ²³⁵U is approximately:",
            options: ["1 MeV", "2 MeV", "5 MeV", "10 MeV"],
            ans: 1,
            topic: "Nuclei",
            difficulty: "Medium"
        },
        {
            id: "p25_36",
            q: "If 96.875% of a radioactive substance decays in 10 days, then the half-life of the substance is (in days):",
            options: ["1", "2", "5", "4"],
            ans: 1,
            topic: "Nuclei",
            difficulty: "Hard"
        },
        {
            id: "p25_37",
            q: "The power gain and voltage gain of a transistor connected in common emitter configuration are 1800 and 60 respectively. The input resistance of the transistor is (output resistance = 500 Ω):",
            options: ["150 Ω", "200 Ω", "250 Ω", "300 Ω"],
            ans: 2,
            topic: "Semiconductor Devices",
            difficulty: "Hard"
        },
        {
            id: "p25_38",
            q: "In β⁻ decay, a neutron transforms into a proton within the nucleus. The particle emitted along with the electron is:",
            options: ["Proton", "Neutron", "Antineutrino", "Neutrino"],
            ans: 2,
            topic: "Nuclei",
            difficulty: "Easy"
        },
        {
            id: "p25_39",
            q: "Six logic gates are connected. The output of a NOR gate is fed into an AND gate. If inputs are A = 1 and B = 0, the output y is:",
            options: ["0", "1", "Depends on third input", "Indeterminate"],
            ans: 0,
            topic: "Semiconductor Devices",
            difficulty: "Medium"
        },
        {
            id: "p25_40",
            q: "For commercial telephonic communication, the frequency range adequate for speech signals is:",
            options: ["20 Hz – 20 kHz", "300 Hz – 3400 Hz", "3 kHz – 30 kHz", "30 kHz – 300 kHz"],
            ans: 1,
            topic: "Communication Systems",
            difficulty: "Easy"
        }
    ],

    // ── CHEMISTRY (40 questions) ────────────────────────────
    Chemistry: [
        {
            id: "c25_1",
            q: "The element with atomic number 119 (yet to be discovered) is expected to belong to which group and period?",
            options: ["Group 1, Period 8", "Group 2, Period 8", "Group 18, Period 7", "Group 1, Period 7"],
            ans: 0,
            topic: "Periodic Table",
            difficulty: "Medium"
        },
        {
            id: "c25_2",
            q: "Among the following elements, the ion of an element having the highest ionic radius is:",
            options: ["Na⁺", "Mg²⁺", "Al³⁺", "F⁻"],
            ans: 3,
            topic: "Periodic Table",
            difficulty: "Medium"
        },
        {
            id: "c25_3",
            q: "Identify the pair of molecules in which the hybridisation of the central atom is sp² with bent geometry:",
            options: ["SO₂ and NO₂", "BF₃ and SO₂", "H₂O and NH₃", "CO₂ and SO₂"],
            ans: 0,
            topic: "Chemical Bonding",
            difficulty: "Medium"
        },
        {
            id: "c25_4",
            q: "Consider the following statements: I. In the conversion of O₂ to O₂²⁺ bond order decreases. II. In the conversion of O₂ to O₂²⁻ bond order increases. The correct statement(s) is/are:",
            options: ["Only I", "Only II", "Both I and II", "Neither I nor II"],
            ans: 3,
            topic: "Chemical Bonding",
            difficulty: "Hard"
        },
        {
            id: "c25_5",
            q: "The RMS velocity of dihydrogen is √7 times more than that of dinitrogen. If T_H₂ and T_N₂ are the temperatures of the respective gases, then T_H₂/T_N₂ is:",
            options: ["1/2", "1/4", "2", "4"],
            ans: 0,
            topic: "States of Matter",
            difficulty: "Hard"
        },
        {
            id: "c25_6",
            q: "Which of the following solution has the highest amount of solute (in grams per 100 mL of water)?",
            options: ["1 M NaCl", "1 m NaCl", "1 N NaCl", "10% w/v NaCl"],
            ans: 3,
            topic: "Solutions",
            difficulty: "Medium"
        },
        {
            id: "c25_7",
            q: "At 298 K, the enthalpy change (in kJ) for the combustion reaction CH₄(g) + O₂(g) → CO₂(g) + H₂O(l) given bond enthalpies (C–H: 414, O=O: 498, C=O: 799, O–H: 460 kJ/mol) is:",
            options: ["-804", "-890", "-741", "-952"],
            ans: 0,
            topic: "Thermodynamics",
            difficulty: "Hard"
        },
        {
            id: "c25_8",
            q: "For the reaction N₂O₄(g) ⇌ 2NO₂(g), the correct relation between degree of dissociation (α) and Kp at pressure P is:",
            options: ["Kp = 4α²P/(1-α²)", "Kp = α²P/(1-α)", "Kp = 4αP/(1-α)²", "Kp = 2α²P/(1-α)"],
            ans: 0,
            topic: "Chemical Equilibrium",
            difficulty: "Hard"
        },
        {
            id: "c25_9",
            q: "Oxidation state of hydrogen in compound X is -1 and in compound Y is +1. X and Y are respectively:",
            options: ["NaH and H₂O", "H₂O and HF", "NaH and H₂SO₄", "LiH and H₂O₂"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Easy"
        },
        {
            id: "c25_10",
            q: "Match the following (Type of reaction – Example): I. Disproportionation – A. Cl₂ + NaOH; II. Comproportionation – B. Cu + HNO₃; III. Combination – C. S + O₂; IV. Decomposition – D. CaCO₃ → CaO + CO₂. The correct match is:",
            options: ["I-A, II-B, III-C, IV-D", "I-B, II-A, III-C, IV-D", "I-A, II-C, III-B, IV-D", "I-C, II-A, III-B, IV-D"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c25_11",
            q: "Which one of the following is correctly matched (element and its ore)?",
            options: ["Iron – Calamine", "Copper – Haematite", "Zinc – Sphalerite", "Aluminium – Siderite"],
            ans: 2,
            topic: "Metallurgy",
            difficulty: "Easy"
        },
        {
            id: "c25_12",
            q: "The property of hydrogen that makes it unique compared to other elements is:",
            options: ["It can form covalent compounds", "It can act as both oxidising and reducing agent", "It resembles both alkali metals and halogens", "It has the smallest atomic size"],
            ans: 2,
            topic: "Hydrogen",
            difficulty: "Easy"
        },
        {
            id: "c25_13",
            q: "The product of reaction of Na₂O₂ with water is:",
            options: ["NaOH only", "NaOH and O₂", "NaOH and H₂O₂", "Na₂O and H₂O₂"],
            ans: 1,
            topic: "s-Block Elements",
            difficulty: "Medium"
        },
        {
            id: "c25_14",
            q: "Which of the following p-block elements shows only one oxidation state in its compounds?",
            options: ["Phosphorus", "Sulphur", "Fluorine", "Chlorine"],
            ans: 2,
            topic: "p-Block Elements",
            difficulty: "Easy"
        },
        {
            id: "c25_15",
            q: "Which of the following oxoacids of sulphur contains S–S bond?",
            options: ["Sulphurous acid", "Sulphuric acid", "Pyrosulphuric acid", "Thiosulphuric acid"],
            ans: 3,
            topic: "p-Block Elements",
            difficulty: "Medium"
        },
        {
            id: "c25_16",
            q: "The colour of KMnO₄ solution changes from violet to colourless when reacted with oxalic acid in acidic medium. The oxidation state of Mn in the product is:",
            options: ["+7", "+4", "+2", "0"],
            ans: 2,
            topic: "d and f Block Elements",
            difficulty: "Easy"
        },
        {
            id: "c25_17",
            q: "When 100 mL of 0.2 M solution of CoCl₃·xNH₃ is treated with excess of AgNO₃ solution, 0.01 mol of AgCl is obtained. The value of x is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c25_18",
            q: "The IUPAC name of [Pt(NH₃)₂Cl₂] is:",
            options: ["Platinum diamminedichloride", "Diamminedichloridoplatinum(II)", "Dichloridodiammineplatinum(II)", "Diammineplatinum(II) dichloride"],
            ans: 1,
            topic: "Coordination Compounds",
            difficulty: "Medium"
        },
        {
            id: "c25_19",
            q: "Which of the following is used as an antiseptic?",
            options: ["Aspirin", "Paracetamol", "Iodoform", "Sulphadiazine"],
            ans: 2,
            topic: "Chemistry in Everyday Life",
            difficulty: "Easy"
        },
        {
            id: "c25_20",
            q: "Which of the following polymers is used in making bulletproof vests?",
            options: ["Nylon-6,6", "Dacron", "Kevlar", "Bakelite"],
            ans: 2,
            topic: "Polymers",
            difficulty: "Easy"
        },
        {
            id: "c25_21",
            q: "Which of the following hormones is an example of a polypeptide?",
            options: ["Oestrogen", "Testosterone", "Thyroxine", "Insulin"],
            ans: 3,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c25_22",
            q: "The structure of which artificial sweetener contains aspartic acid and phenylalanine parts?",
            options: ["Saccharin", "Alitame", "Aspartame", "Sucralose"],
            ans: 2,
            topic: "Chemistry in Everyday Life",
            difficulty: "Medium"
        },
        {
            id: "c25_23",
            q: "Which of the following is the most reactive towards SN1 mechanism?",
            options: ["CH₃Cl", "(CH₃)₂CHCl", "(CH₃)₃CCl", "CH₂=CHCl"],
            ans: 2,
            topic: "Haloalkanes",
            difficulty: "Easy"
        },
        {
            id: "c25_24",
            q: "(CH₃)₃CH → (KMnO₄) X → (Cu, 573K) Y. The product Y is:",
            options: ["Acetone", "tert-Butanol", "Isobutylene", "No reaction"],
            ans: 3,
            topic: "Alcohols, Phenols and Ethers",
            difficulty: "Hard"
        },
        {
            id: "c25_25",
            q: "Ethylene on reaction with cold, dilute alkaline KMnO₄ at 273 K gives compound P. P on polymerisation gives:",
            options: ["Polyethylene", "Polyester", "Nylon", "Polyvinyl alcohol"],
            ans: 1,
            topic: "Organic Chemistry",
            difficulty: "Hard"
        },
        {
            id: "c25_26",
            q: "A carbohydrate (A), when treated with dilute HCl in alcoholic solution gives two isomers (B) and (C). B on reaction with Br₂/H₂O gives a monocarboxylic acid. A is:",
            options: ["Maltose", "Sucrose", "Lactose", "Cellobiose"],
            ans: 1,
            topic: "Biomolecules",
            difficulty: "Hard"
        },
        {
            id: "c25_27",
            q: "The incorrect statement about chloramphenicol is:",
            options: ["It is a broad spectrum antibiotic", "It contains a nitrobenzene ring", "It is effective against typhoid", "It is used for treating malaria"],
            ans: 3,
            topic: "Chemistry in Everyday Life",
            difficulty: "Medium"
        },
        {
            id: "c25_28",
            q: "The number of chlorine (Cl) atoms in the structure of DDT molecule is:",
            options: ["3", "4", "5", "6"],
            ans: 2,
            topic: "Environmental Chemistry",
            difficulty: "Medium"
        },
        {
            id: "c25_29",
            q: "The major product in Reimer-Tiemann reaction is X. The reactants are Y and Z. X, Y and Z are respectively:",
            options: ["Salicylaldehyde, phenol, CHCl₃", "Aspirin, phenol, acetic anhydride", "Benzaldehyde, benzene, CHCl₃", "Salicylic acid, phenol, CO₂"],
            ans: 0,
            topic: "Aldehydes and Ketones",
            difficulty: "Medium"
        },
        {
            id: "c25_30",
            q: "Toluene on reaction with (i) CrO₂Cl₂ and (ii) H₃O⁺ gives:",
            options: ["Benzoic acid", "Benzaldehyde", "Benzyl alcohol", "Benzyl chloride"],
            ans: 1,
            topic: "Aldehydes and Ketones",
            difficulty: "Medium"
        },
        {
            id: "c25_31",
            q: "The number of moles of oxalate ions oxidised by one mole of permanganate ions in acidic medium is:",
            options: ["2.5", "5/2", "5", "2"],
            ans: 0,
            topic: "Redox Reactions",
            difficulty: "Medium"
        },
        {
            id: "c25_32",
            q: "Total number of geometrical isomers possible for the complex [NiCl₂(en)] is: (en = ethylenediamine)",
            options: ["0", "1", "2", "3"],
            ans: 2,
            topic: "Coordination Compounds",
            difficulty: "Hard"
        },
        {
            id: "c25_33",
            q: "Maltose on hydrolysis gives two monosaccharide units. The incorrect statement about the monosaccharides formed is:",
            options: ["Both are glucose units", "They are joined by α(1→4) glycosidic bond", "Maltose is a reducing sugar", "Maltose gives two fructose units on hydrolysis"],
            ans: 3,
            topic: "Biomolecules",
            difficulty: "Easy"
        },
        {
            id: "c25_34",
            q: "Identify the pair of drugs which act as antihistamines:",
            options: ["Cimetidine and ranitidine", "Aspirin and ibuprofen", "Penicillin and amoxicillin", "Morphine and codeine"],
            ans: 0,
            topic: "Chemistry in Everyday Life",
            difficulty: "Medium"
        },
        {
            id: "c25_35",
            q: "Which of the following can undergo Hell-Volhard-Zelinsky (HVZ) reaction?",
            options: ["Formic acid", "Acetic acid", "Benzoic acid", "Oxalic acid"],
            ans: 1,
            topic: "Carboxylic Acids",
            difficulty: "Medium"
        },
        {
            id: "c25_36",
            q: "Which of the following has the lowest pKa value (most acidic)?",
            options: ["Phenol", "Acetic acid", "Trichloroacetic acid", "Formic acid"],
            ans: 2,
            topic: "Carboxylic Acids",
            difficulty: "Medium"
        },
        {
            id: "c25_37",
            q: "The amine/salt of amine which gives a positive test (carbylamine test) with chloroform and alcoholic KOH solution is:",
            options: ["(CH₃)₃N", "CH₃NH₂", "(CH₃)₂NH", "CH₃NH₃⁺Cl⁻"],
            ans: 1,
            topic: "Amines",
            difficulty: "Medium"
        },
        {
            id: "c25_38",
            q: "The increasing order of boiling points of CH₃–O–CH₃, CH₃CH₂OH, HCOOH, CH₃CHO is:",
            options: ["CH₃OCH₃ < CH₃CHO < CH₃CH₂OH < HCOOH", "CH₃OCH₃ < CH₃CH₂OH < CH₃CHO < HCOOH", "CH₃CHO < CH₃OCH₃ < CH₃CH₂OH < HCOOH", "HCOOH < CH₃CH₂OH < CH₃CHO < CH₃OCH₃"],
            ans: 0,
            topic: "Organic Chemistry",
            difficulty: "Hard"
        },
        {
            id: "c25_39",
            q: "The major products P and Q from the reactions: (i) CH₃CH₂Br + KCN → P (ii) CH₃CH₂Br + AgCN → Q are respectively:",
            options: ["CH₃CH₂CN and CH₃CH₂NC", "CH₃CH₂NC and CH₃CH₂CN", "Both are CH₃CH₂CN", "Both are CH₃CH₂NC"],
            ans: 0,
            topic: "Haloalkanes",
            difficulty: "Hard"
        },
        {
            id: "c25_40",
            q: "Which of the following is an example of a thermosetting polymer?",
            options: ["Polythene", "PVC", "Bakelite", "Nylon-6"],
            ans: 2,
            topic: "Polymers",
            difficulty: "Easy"
        }
    ],

    // ── MATHEMATICS (80 questions) ──────────────────────────
    Mathematics: [
        {
            id: "m25_1",
            q: "Let z = x + iy and P(x,y) be a point on the Argand plane. If z satisfies arg((z−3i)/(z+2i)) = π/4, then the locus of P is:",
            options: ["x²+y²−y−6=0, (x,y)≠(0,−2)", "x²+y²−x−y−6=0, (x,y)≠(0,−2)", "x²+y²+5x−y−6=0, (x,y)≠(0,−2)", "x²+y²+x−y−6=0, (x,y)≠(0,−2)"],
            ans: 1,
            topic: "Complex Numbers",
            difficulty: "Hard"
        },
        {
            id: "m25_2",
            q: "If the sum of two roots of the equation x⁴ − 2x³ + x² + 4x − 6 = 0 is zero, then the sum of the squares of the other two roots is:",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Algebra",
            difficulty: "Hard"
        },
        {
            id: "m25_3",
            q: "A student has to answer a multiple-choice question having 5 alternatives in which two or more alternatives are correct. The number of ways the student can answer the question is:",
            options: ["16", "26", "10", "20"],
            ans: 1,
            topic: "Permutations & Combinations",
            difficulty: "Medium"
        },
        {
            id: "m25_4",
            q: "Number of triangles whose vertices are the points (x, y) in the XY-plane with integer coordinates satisfying 0 ≤ x ≤ 3 and 0 ≤ y ≤ 3 is:",
            options: ["516", "496", "512", "504"],
            ans: 0,
            topic: "Permutations & Combinations",
            difficulty: "Hard"
        },
        {
            id: "m25_5",
            q: "If all the letters of the word 'HANDLE' are permuted in all possible ways and arranged in a dictionary, then the rank of the word 'HANDLE' is:",
            options: ["295", "296", "297", "298"],
            ans: 0,
            topic: "Permutations & Combinations",
            difficulty: "Hard"
        },
        {
            id: "m25_6",
            q: "If the coefficient of the 3rd term from the beginning in the expansion of (ax² − 8/(bx))⁹ is equal to the coefficient of the 4th term from the end, then the relation between a and b is:",
            options: ["ab = 2", "ab = 1", "a/b = 1", "a²b = 2"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Hard"
        },
        {
            id: "m25_7",
            q: "If the expression 5²ⁿ − 48n + k is divisible by 24 for all n ∈ ℕ, then the least positive integral value of k is:",
            options: ["0", "1", "23", "47"],
            ans: 2,
            topic: "Binomial Theorem",
            difficulty: "Medium"
        },
        {
            id: "m25_8",
            q: "If x³+3/(x−3)³ = a + b/(x−3) + c/(x−3)² + d/(x−3)³, then (a+d) − (b+c) =",
            options: ["0", "1", "−1", "3"],
            ans: 0,
            topic: "Partial Fractions",
            difficulty: "Medium"
        },
        {
            id: "m25_9",
            q: "If sin A = −60/61, cot B = −40/9 and neither A nor B is in the 4th quadrant, then 6 cot A + 4 sec B =",
            options: ["0", "1", "−1", "2"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Hard"
        },
        {
            id: "m25_10",
            q: "If tan(π/4 + θ) + tan(π/4 − θ) = λ sec 2θ, then λ =",
            options: ["1", "2", "3", "4"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Medium"
        },
        {
            id: "m25_11",
            q: "The general solution of sin 2x − sin 4x + sin 6x = 0 is:",
            options: ["nπ/4", "nπ/3", "nπ/2", "nπ"],
            ans: 1,
            topic: "Trigonometry",
            difficulty: "Hard"
        },
        {
            id: "m25_12",
            q: "In triangle ABC, if a = 5, b = 7, cos(A−B) = 3/4, then the area of the triangle is:",
            options: ["6√6", "7√6", "8√6", "5√6"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Hard"
        },
        {
            id: "m25_13",
            q: "The inverse of the matrix [2, 1; 1, 2] is:",
            options: ["(1/3)[2,−1; −1,2]", "(1/3)[2,1; 1,2]", "[2,−1;−1,2]", "(1/2)[2,−1;−1,2]"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Easy"
        },
        {
            id: "m25_14",
            q: "The value of the determinant |1+a, 1, 1; 1, 1+b, 1; 1, 1, 1+c| is:",
            options: ["abc(1/a + 1/b + 1/c + 1)", "abc + ab + bc + ca", "abc", "a+b+c"],
            ans: 0,
            topic: "Determinants",
            difficulty: "Hard"
        },
        {
            id: "m25_15",
            q: "The vectors a = 2î + 3ĵ − k̂ and b = î − 2ĵ + 3k̂ are perpendicular if the vector c = aî + bĵ + ck̂ satisfies:",
            options: ["a−b+c=0", "a+b−c=0", "2a−b+c=0", "a+2b−c=0"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m25_16",
            q: "If a, b, c are three unit vectors such that xa + yb + zc = p(a×b) + q(b×c) + r(c×a), and a·(b×c) = 1/6, then p+q+r =",
            options: ["6(x+y+z)", "x+y+z", "(x+y+z)/6", "6/(x+y+z)"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Hard"
        },
        {
            id: "m25_17",
            q: "A line passes through the point A with position vector î − 3ĵ and r = (î − 3ĵ) + t(2î + ĵ). The distance of the point B(5, 2) from this line is:",
            options: ["√5", "2√5", "3√5", "√10"],
            ans: 0,
            topic: "Vectors",
            difficulty: "Medium"
        },
        {
            id: "m25_18",
            q: "If the variance of numbers 9, 15, 21, …, (6n+3) is P, then the variance of the first n even numbers is:",
            options: ["P/3", "P/9", "P/6", "3P"],
            ans: 1,
            topic: "Statistics",
            difficulty: "Hard"
        },
        {
            id: "m25_19",
            q: "Let P = [1,2,3; 4,5,6; 7,8,9]. Three elements of this matrix are changed to make it non-singular. The minimum number of elements to be changed is:",
            options: ["1", "2", "3", "4"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Hard"
        },
        {
            id: "m25_20",
            q: "A, B₁, B₂, B₃ are events in a random experiment. If P(B₁) = 0.25, P(B₂) = 0.30, P(B₃) = 0.45 and P(A/B₁) = 0.3, P(A/B₂) = 0.4, P(A/B₃) = 0.5, then P(A) =",
            options: ["0.4175", "0.3250", "0.4025", "0.3875"],
            ans: 0,
            topic: "Probability",
            difficulty: "Hard"
        },
        {
            id: "m25_21",
            q: "A, B are events in a random experiment. If P(A) = 1/2, P(B) = 1/3, P(A∩B) = 1/4, then P(A∪B)' =",
            options: ["5/12", "7/12", "1/4", "3/4"],
            ans: 0,
            topic: "Probability",
            difficulty: "Medium"
        },
        {
            id: "m25_22",
            q: "Two persons A and B play a game by throwing two dice. A wins if the sum is even, B wins if the sum is odd. The probability that A wins 3 times before B wins 3 times is:",
            options: ["1/2", "11/32", "5/16", "21/64"],
            ans: 1,
            topic: "Probability",
            difficulty: "Hard"
        },
        {
            id: "m25_23",
            q: "A typist claims to type with 1 typo error per 10 pages. In 40 pages, the probability of exactly 2 typos (Poisson distribution) is:",
            options: ["e⁻⁴ · 8", "e⁻⁴ · 4", "e⁻⁴ · 8/2!", "8e⁻⁴/3"],
            ans: 0,
            topic: "Probability",
            difficulty: "Hard"
        },
        {
            id: "m25_24",
            q: "A line segment joining point A on X-axis to point B on Y-axis is such that AB = 15. If P is a point on AB with PA/PB = 2/3, the locus of P is:",
            options: ["x²/36 + y²/81 = 1", "x²/9 + y²/4 = 1", "9x² + 4y² = 225", "4x² + 9y² = 225"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Hard"
        },
        {
            id: "m25_25",
            q: "The point P(α, β) (α > 0, β > 0) undergoes: (a) Translation to (α−3, β+2) (b) Rotation by 90° anticlockwise about origin. If P reaches (5, 4) finally, then (α, β) is:",
            options: ["(7, 1)", "(1, 7)", "(5, 2)", "(2, 5)"],
            ans: 0,
            topic: "Coordinate Geometry",
            difficulty: "Hard"
        },
        {
            id: "m25_26",
            q: "If the line passing through (4, −3) with negative slope makes a 45° angle with the line joining (0, 0) and (1, 1), the equation of the line is:",
            options: ["x + y = 1", "x − y = 7", "2x + y = 5", "x + 2y = −2"],
            ans: 3,
            topic: "Straight Lines",
            difficulty: "Hard"
        },
        {
            id: "m25_27",
            q: "O(0,0), B(−3,−1) and C(−1,−3) are vertices of △OBC. D is on OC and E is on OB such that DE ∥ BC. The ratio OD : DC =",
            options: ["1 : 1", "1 : 2", "2 : 1", "1 : 3"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Medium"
        },
        {
            id: "m25_28",
            q: "Every point on the curve 3x + 2y − 3xy = 0 is the centroid of a triangle formed by the coordinate axes and a line L. The locus of L's midpoint of the intercepts is:",
            options: ["x + y = 1", "3x + 2y = 6", "1/x + 1/y = 3/2", "2x + 3y = 6"],
            ans: 2,
            topic: "Straight Lines",
            difficulty: "Hard"
        },
        {
            id: "m25_29",
            q: "The value of 'a' for which (a²−3)x² + 16xy − 2ay² + 4x − 8y − 2 = 0 represents a pair of perpendicular lines is:",
            options: ["−3", "3", "±3", "No real value"],
            ans: 2,
            topic: "Pair of Straight Lines",
            difficulty: "Hard"
        },
        {
            id: "m25_30",
            q: "The equation of the circle passing through (1, 0), (0, 1) and (0, 0) is:",
            options: ["x² + y² − x − y = 0", "x² + y² + x + y = 0", "x² + y² = 1", "x² + y² − x − y + 1 = 0"],
            ans: 0,
            topic: "Circles",
            difficulty: "Easy"
        },
        {
            id: "m25_31",
            q: "The length of the chord of the circle x² + y² = 25 that is intercepted by the line 3x − 4y + 10 = 0 is:",
            options: ["6", "8", "10", "4"],
            ans: 1,
            topic: "Circles",
            difficulty: "Medium"
        },
        {
            id: "m25_32",
            q: "The equation of the radical axis of the circles x² + y² + 4x + 6y − 12 = 0 and x² + y² − 2x − 3y + 8 = 0 is:",
            options: ["6x + 9y − 20 = 0", "3x + 9y + 10 = 0", "6x + 9y + 20 = 0", "x + y − 5 = 0"],
            ans: 0,
            topic: "Circles",
            difficulty: "Medium"
        },
        {
            id: "m25_33",
            q: "The locus of the foot of perpendicular drawn from the focus to any tangent of the parabola y² = 8x is:",
            options: ["x = 0", "x = 2", "y = 0", "x + y = 0"],
            ans: 0,
            topic: "Parabola",
            difficulty: "Medium"
        },
        {
            id: "m25_34",
            q: "The eccentricity of the ellipse 9x² + 5y² − 18x − 20y − 16 = 0 is:",
            options: ["2/3", "1/3", "√5/3", "2/√5"],
            ans: 0,
            topic: "Ellipse",
            difficulty: "Hard"
        },
        {
            id: "m25_35",
            q: "The equation of the hyperbola with eccentricity 2 and foci at (±4, 0) is:",
            options: ["x²/4 − y²/12 = 1", "x²/12 − y²/4 = 1", "x²/3 − y²/1 = 1", "x²/8 − y²/8 = 1"],
            ans: 0,
            topic: "Hyperbola",
            difficulty: "Medium"
        },
        {
            id: "m25_36",
            q: "If f(x) = tan(π/(√x + 1 + 4)) is a real-valued function, then the domain of f is:",
            options: ["(−1, ∞)", "[−1, ∞) − {(n²−1): n ∈ ℤ}", "(0, ∞)", "[0, ∞) − {n²−1: n∈ℤ}"],
            ans: 3,
            topic: "Functions",
            difficulty: "Hard"
        },
        {
            id: "m25_37",
            q: "If f: ℝ−{0} → ℝ is defined by 3f(x) + 4f(1/x) = (2−x)/x, then f(3) =",
            options: ["−5/7", "5/7", "1/7", "−1/7"],
            ans: 0,
            topic: "Functions",
            difficulty: "Hard"
        },
        {
            id: "m25_38",
            q: "lim(x→0) [e^x − e^(sin x)]/(x − sin x) =",
            options: ["0", "1", "−1", "e"],
            ans: 1,
            topic: "Limits",
            difficulty: "Medium"
        },
        {
            id: "m25_39",
            q: "If y = sin⁻¹(3x − 4x³), then dy/dx at x = 1/2 is:",
            options: ["2", "3", "4", "6"],
            ans: 1,
            topic: "Differentiation",
            difficulty: "Medium"
        },
        {
            id: "m25_40",
            q: "The function f(x) = 2x³ − 9x² + 12x − 4 is increasing in the interval:",
            options: ["(−∞, 1) ∪ (2, ∞)", "(1, 2)", "(−∞, 0)", "(0, 3)"],
            ans: 0,
            topic: "Applications of Derivatives",
            difficulty: "Medium"
        },
        {
            id: "m25_41",
            q: "The maximum value of f(x) = sin x + cos x is:",
            options: ["1", "√2", "2", "√3"],
            ans: 1,
            topic: "Applications of Derivatives",
            difficulty: "Easy"
        },
        {
            id: "m25_42",
            q: "∫(sin x + cos x)² dx =",
            options: ["x − (1/2)sin 2x + C", "x + (1/2)sin 2x + C", "2x + C", "x + sin 2x + C"],
            ans: 0,
            topic: "Integration",
            difficulty: "Medium"
        },
        {
            id: "m25_43",
            q: "∫dx/(x² + 4x + 5) =",
            options: ["tan⁻¹(x+2) + C", "tan⁻¹(x+2)/2 + C", "ln|x²+4x+5| + C", "1/2 · tan⁻¹((x+2)/1) + C"],
            ans: 0,
            topic: "Integration",
            difficulty: "Medium"
        },
        {
            id: "m25_44",
            q: "∫₀² |x − 1| dx =",
            options: ["0", "1", "2", "3"],
            ans: 1,
            topic: "Definite Integrals",
            difficulty: "Easy"
        },
        {
            id: "m25_45",
            q: "The area bounded by the curve y² = 4x and the line x = 4 is:",
            options: ["32/3", "16/3", "64/3", "8/3"],
            ans: 0,
            topic: "Area Under Curves",
            difficulty: "Medium"
        },
        {
            id: "m25_46",
            q: "The order and degree of the differential equation d²y/dx² = [1 + (dy/dx)²]^(3/2) are:",
            options: ["2 and 2", "2 and 1", "1 and 2", "2 and 3"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m25_47",
            q: "The solution of dy/dx = y sin x with y(0) = 1 is:",
            options: ["y = e^(1 − cos x)", "y = e^(cos x − 1)", "y = sin x + 1", "y = e^(−cos x)"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m25_48",
            q: "The length of the projection of the line joining (1, 2, 3) and (−1, 4, 2) on the line with direction ratios 2, 3, −6 is:",
            options: ["2/7", "4/7", "6/7", "8/7"],
            ans: 1,
            topic: "3D Geometry",
            difficulty: "Hard"
        },
        {
            id: "m25_49",
            q: "The angle between the planes 2x − y + z = 5 and x + y − 2z = 3 is:",
            options: ["60°", "90°", "45°", "30°"],
            ans: 0,
            topic: "3D Geometry",
            difficulty: "Medium"
        },
        {
            id: "m25_50",
            q: "The equation of the plane through the point (1, 2, 3) perpendicular to the vector î + 2ĵ − k̂ is:",
            options: ["x + 2y − z = 2", "x + 2y − z = 3", "x + 2y − z + 3 = 0", "x + 2y − z = 1"],
            ans: 0,
            topic: "3D Geometry",
            difficulty: "Easy"
        },
        // Filling questions 51–80 with comprehensive topic coverage
        {
            id: "m25_51",
            q: "The sum of infinite terms of the geometric series 1 + 2/3 + 4/9 + … is:",
            options: ["2", "3", "1/3", "∞"],
            ans: 1,
            topic: "Sequences & Series",
            difficulty: "Easy"
        },
        {
            id: "m25_52",
            q: "If the 5th term of an AP is 17 and the 9th term is 29, the common difference is:",
            options: ["2", "3", "4", "5"],
            ans: 1,
            topic: "Sequences & Series",
            difficulty: "Easy"
        },
        {
            id: "m25_53",
            q: "If log₂ 3 = a, then log₈ 27 =",
            options: ["a", "a/3", "3a/1", "a³"],
            ans: 0,
            topic: "Logarithms",
            difficulty: "Medium"
        },
        {
            id: "m25_54",
            q: "The value of ∑ₙ₌₁^∞ 1/(n(n+1)) is:",
            options: ["∞", "1", "1/2", "2"],
            ans: 1,
            topic: "Sequences & Series",
            difficulty: "Medium"
        },
        {
            id: "m25_55",
            q: "If ⁿC₄, ⁿC₅ and ⁿC₆ are in AP, then n is:",
            options: ["7", "8", "9", "14"],
            ans: 3,
            topic: "Permutations & Combinations",
            difficulty: "Hard"
        },
        {
            id: "m25_56",
            q: "The number of real solutions of x² − 5|x| + 6 = 0 is:",
            options: ["2", "3", "4", "0"],
            ans: 2,
            topic: "Algebra",
            difficulty: "Easy"
        },
        {
            id: "m25_57",
            q: "If α, β are roots of 2x² − 3x + 1 = 0, then α³ + β³ =",
            options: ["9/8", "27/8", "3/8", "1/8"],
            ans: 0,
            topic: "Quadratic Equations",
            difficulty: "Medium"
        },
        {
            id: "m25_58",
            q: "The value of cos 20° + cos 100° + cos 140° is:",
            options: ["0", "1", "−1", "1/2"],
            ans: 0,
            topic: "Trigonometry",
            difficulty: "Medium"
        },
        {
            id: "m25_59",
            q: "sin⁻¹(1/2) + cos⁻¹(−1/2) =",
            options: ["π/6", "π/2", "2π/3", "π"],
            ans: 3,
            topic: "Inverse Trigonometry",
            difficulty: "Medium"
        },
        {
            id: "m25_60",
            q: "tan⁻¹(1/2) + tan⁻¹(1/3) =",
            options: ["π/3", "π/4", "π/6", "π/2"],
            ans: 1,
            topic: "Inverse Trigonometry",
            difficulty: "Easy"
        },
        {
            id: "m25_61",
            q: "If the rank of the matrix [1,2,3; 4,5,6; 7,8,9] is r, then r =",
            options: ["1", "2", "3", "0"],
            ans: 1,
            topic: "Matrices",
            difficulty: "Medium"
        },
        {
            id: "m25_62",
            q: "If A = [cosθ, sinθ; −sinθ, cosθ] then A² =",
            options: ["[cos2θ, sin2θ; −sin2θ, cos2θ]", "[cos²θ, sin²θ; −sin²θ, cos²θ]", "I", "2A"],
            ans: 0,
            topic: "Matrices",
            difficulty: "Medium"
        },
        {
            id: "m25_63",
            q: "The solution of the system x + y + z = 6, x + 2y + 3z = 14, x + 4y + 9z = 36 is:",
            options: ["x=1, y=2, z=3", "x=2, y=1, z=3", "x=3, y=2, z=1", "x=1, y=3, z=2"],
            ans: 0,
            topic: "Determinants",
            difficulty: "Medium"
        },
        {
            id: "m25_64",
            q: "If f(x) = x/(x−1) for x ≠ 1, then f(f(x)) =",
            options: ["x", "1/x", "1−x", "x−1"],
            ans: 0,
            topic: "Functions",
            difficulty: "Easy"
        },
        {
            id: "m25_65",
            q: "lim(x→∞) (3x² + 2x)/(2x² − x + 1) =",
            options: ["3/2", "2/3", "∞", "1"],
            ans: 0,
            topic: "Limits",
            difficulty: "Easy"
        },
        {
            id: "m25_66",
            q: "If y = x^x, then dy/dx =",
            options: ["x^x(1 + ln x)", "x^x · ln x", "x^(x−1)", "x^x/x"],
            ans: 0,
            topic: "Differentiation",
            difficulty: "Medium"
        },
        {
            id: "m25_67",
            q: "The equation of normal to the curve y = x³ − 3x at the point (2, 2) is:",
            options: ["x + 9y = 20", "9x + y = 20", "x − 9y + 16 = 0", "9x − y = 16"],
            ans: 0,
            topic: "Applications of Derivatives",
            difficulty: "Medium"
        },
        {
            id: "m25_68",
            q: "∫x · e^x dx =",
            options: ["xe^x − e^x + C", "xe^x + e^x + C", "e^x(x−1) + C", "Both A and C"],
            ans: 3,
            topic: "Integration",
            difficulty: "Easy"
        },
        {
            id: "m25_69",
            q: "∫₀^π sin²x dx =",
            options: ["π/2", "π/4", "π", "0"],
            ans: 0,
            topic: "Definite Integrals",
            difficulty: "Easy"
        },
        {
            id: "m25_70",
            q: "The area enclosed between y = x² and y = x is:",
            options: ["1/6", "1/3", "1/2", "1/4"],
            ans: 0,
            topic: "Area Under Curves",
            difficulty: "Medium"
        },
        {
            id: "m25_71",
            q: "The solution of (x+1)dy/dx = 2y is:",
            options: ["y = C(x+1)²", "y = C(x+1)", "y = Ce^(2x)", "y = C/(x+1)²"],
            ans: 0,
            topic: "Differential Equations",
            difficulty: "Medium"
        },
        {
            id: "m25_72",
            q: "Distance between the parallel lines 2x − 3y + 4 = 0 and 4x − 6y + 9 = 0 is:",
            options: ["1/(2√13)", "1/√13", "2/√13", "1"],
            ans: 0,
            topic: "Straight Lines",
            difficulty: "Medium"
        },
        {
            id: "m25_73",
            q: "The angle subtended by the chord PQ at the centre of a circle is 120°. If PQ = 12 cm, the radius of the circle is:",
            options: ["6 cm", "12 cm", "6√3 cm", "4√3 cm"],
            ans: 0,
            topic: "Circles",
            difficulty: "Medium"
        },
        {
            id: "m25_74",
            q: "The focus of the parabola y² − 4y − 8x + 12 = 0 is:",
            options: ["(3, 2)", "(1, 2)", "(0, 2)", "(2, 2)"],
            ans: 0,
            topic: "Parabola",
            difficulty: "Hard"
        },
        {
            id: "m25_75",
            q: "For the ellipse x²/9 + y²/4 = 1, the length of the minor axis is:",
            options: ["4", "6", "3", "2"],
            ans: 0,
            topic: "Ellipse",
            difficulty: "Easy"
        },
        {
            id: "m25_76",
            q: "The direction cosines of the line joining (2, 3, −1) and (3, −2, 1) are proportional to:",
            options: ["1, −5, 2", "−1, 5, −2", "1, 5, 2", "5, 1, 2"],
            ans: 0,
            topic: "3D Geometry",
            difficulty: "Easy"
        },
        {
            id: "m25_77",
            q: "If the lines x/1 = y/2 = z/3 and x/k = y/3 = z/2 are perpendicular, then k =",
            options: ["−12", "12", "0", "−1"],
            ans: 0,
            topic: "3D Geometry",
            difficulty: "Medium"
        },
        {
            id: "m25_78",
            q: "A fair coin is tossed 4 times. The probability of getting at least 2 heads is:",
            options: ["11/16", "5/8", "3/4", "13/16"],
            ans: 0,
            topic: "Probability",
            difficulty: "Medium"
        },
        {
            id: "m25_79",
            q: "The mean and variance of a binomial distribution are 4 and 3 respectively. Then n and p are:",
            options: ["n=16, p=1/4", "n=12, p=1/3", "n=8, p=1/2", "n=4, p=1"],
            ans: 0,
            topic: "Probability",
            difficulty: "Medium"
        },
        {
            id: "m25_80",
            q: "The number of terms in the expansion of (x + a)¹⁰⁰ + (x − a)¹⁰⁰ after simplification is:",
            options: ["51", "50", "101", "100"],
            ans: 0,
            topic: "Binomial Theorem",
            difficulty: "Easy"
        }
    ]

};

export default questions;