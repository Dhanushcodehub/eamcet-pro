export const FLASHCARDS = {
  Physics: [
    {
      chapter: "Physical World & Measurement",
      cards: [
        { front: "What is dimensional analysis?", back: "A method to check the correctness of equations by comparing dimensions of physical quantities on both sides." },
        { front: "What are fundamental quantities?", back: "Length (m), Mass (kg), Time (s), Current (A), Temperature (K), Amount (mol), Luminous intensity (cd)." },
        { front: "What is a derived unit? Give example.", back: "Unit derived from fundamental units. e.g., velocity = m/s, force = kg·m/s² (Newton)." },
        { front: "State the principle of homogeneity.", back: "Only quantities with the same dimensions can be added, subtracted, or equated." },
        { front: "What is the SI unit of luminous intensity?", back: "Candela (cd)." },
        { front: "Significant figures rule: 0.00307 has how many sig figs?", back: "3 significant figures (leading zeros don't count)." },
      ]
    },
    {
      chapter: "Kinematics",
      cards: [
        { front: "Equation of motion: velocity after time t?", back: "v = u + at, where u = initial velocity, a = acceleration, t = time." },
        { front: "Equation of motion: displacement?", back: "s = ut + ½at²" },
        { front: "Equation of motion: velocity-displacement relation?", back: "v² = u² + 2as" },
        { front: "Range of a projectile?", back: "R = u²sin(2θ)/g. Maximum range at θ = 45°." },
        { front: "Time of flight for a projectile?", back: "T = 2u·sinθ/g" },
        { front: "What is relative velocity?", back: "Velocity of object A relative to B = v_A − v_B." },
        { front: "Maximum height of a projectile?", back: "H = u²sin²θ / (2g)" },
      ]
    },
    {
      chapter: "Laws of Motion",
      cards: [
        { front: "State Newton's First Law.", back: "A body at rest or in uniform motion continues so unless acted upon by a net external force (Law of Inertia)." },
        { front: "State Newton's Second Law.", back: "F = ma. Net force = rate of change of momentum." },
        { front: "State Newton's Third Law.", back: "Every action has an equal and opposite reaction. Forces act on different bodies." },
        { front: "What is the impulse-momentum theorem?", back: "Impulse = Change in momentum. J = FΔt = Δp." },
        { front: "Coefficient of static friction (μs) vs kinetic (μk)?", back: "μs > μk always. Static friction ≤ μs·N." },
        { front: "Condition for equilibrium of a particle?", back: "Net force = 0 in all directions (ΣF = 0)." },
      ]
    },
    {
      chapter: "Work, Energy & Power",
      cards: [
        { front: "Work done formula?", back: "W = F·d·cosθ, where θ is angle between force and displacement." },
        { front: "Work-Energy theorem?", back: "Net work done = Change in kinetic energy. W = ½mv² − ½mu²." },
        { front: "What is conservation of mechanical energy?", back: "KE + PE = constant when only conservative forces act." },
        { front: "Elastic vs Inelastic collision?", back: "Elastic: KE conserved. Inelastic: KE not conserved. Both conserve momentum." },
        { front: "Power formula?", back: "P = W/t = F·v (force × velocity)." },
        { front: "Potential energy stored in a spring?", back: "U = ½kx², where k = spring constant, x = compression/extension." },
      ]
    },
    {
      chapter: "Rotational Motion",
      cards: [
        { front: "Torque formula?", back: "τ = r × F = rF·sinθ. SI unit: N·m." },
        { front: "Moment of inertia of a disc about its axis?", back: "I = ½MR²" },
        { front: "Angular momentum formula?", back: "L = Iω = mvr. Conserved when no external torque." },
        { front: "Relation between torque and angular acceleration?", back: "τ = Iα (analogous to F = ma)." },
        { front: "Moment of inertia of a solid sphere?", back: "I = 2/5 MR²" },
        { front: "Rolling without slipping condition?", back: "v = Rω, where v = linear speed, R = radius, ω = angular speed." },
      ]
    },
    {
      chapter: "Gravitation",
      cards: [
        { front: "Newton's law of gravitation?", back: "F = Gm₁m₂/r². G = 6.67×10⁻¹¹ N·m²/kg²." },
        { front: "Escape velocity formula?", back: "v_e = √(2GM/R) = √(2gR) ≈ 11.2 km/s for Earth." },
        { front: "Orbital velocity of a satellite?", back: "v_o = √(GM/r) = √(gR²/r)" },
        { front: "State Kepler's Third Law.", back: "T² ∝ a³. Square of orbital period is proportional to cube of semi-major axis." },
        { front: "Acceleration due to gravity at height h?", back: "g' = g(1 − 2h/R) for h << R." },
        { front: "Geostationary satellite conditions?", back: "Period = 24 h, orbit in equatorial plane, altitude ≈ 36,000 km." },
      ]
    },
    {
      chapter: "Properties of Matter",
      cards: [
        { front: "Hooke's Law?", back: "Stress ∝ Strain (within elastic limit). Stress = E × Strain, where E = Young's modulus." },
        { front: "Bernoulli's equation?", back: "P + ½ρv² + ρgh = constant (along a streamline)." },
        { front: "Surface tension definition?", back: "Force per unit length acting along the surface. Unit: N/m." },
        { front: "Stokes' law?", back: "F = 6πηrv. Viscous drag on a sphere of radius r moving at velocity v in fluid of viscosity η." },
        { front: "Equation of continuity?", back: "A₁v₁ = A₂v₂ (conservation of mass in fluid flow)." },
        { front: "Young's modulus formula?", back: "Y = (F/A) / (ΔL/L) = Stress / Longitudinal Strain." },
      ]
    },
    {
      chapter: "Thermodynamics",
      cards: [
        { front: "First Law of Thermodynamics?", back: "ΔU = Q − W. Change in internal energy = heat added − work done by system." },
        { front: "Second Law of Thermodynamics (Kelvin)?", back: "No engine can convert heat completely into work without rejecting some heat." },
        { front: "Efficiency of Carnot engine?", back: "η = 1 − T_L/T_H, where T in Kelvin." },
        { front: "Isothermal process characteristic?", back: "Temperature constant (ΔU = 0). All heat converts to work." },
        { front: "Adiabatic process characteristic?", back: "No heat exchange (Q = 0). PVγ = constant." },
        { front: "What is entropy?", back: "Measure of disorder. ΔS = Q_rev/T. Always increases in irreversible processes." },
      ]
    },
    {
      chapter: "Waves & Oscillations",
      cards: [
        { front: "Time period of a simple pendulum?", back: "T = 2π√(L/g). Independent of mass and amplitude (for small angles)." },
        { front: "Wave speed relation?", back: "v = fλ, where f = frequency, λ = wavelength." },
        { front: "Doppler effect: source approaching observer?", back: "Apparent frequency f' = f(v+v_o)/(v−v_s). Higher pitch heard." },
        { front: "Standing wave condition?", back: "Formed by superposition of two identical waves traveling in opposite directions." },
        { front: "Resonance condition?", back: "Maximum amplitude when driving frequency = natural frequency of system." },
        { front: "Speed of sound in air at 0°C?", back: "≈ 332 m/s. Increases with temperature: v ∝ √T." },
      ]
    },
    {
      chapter: "Electrostatics",
      cards: [
        { front: "Coulomb's law?", back: "F = kq₁q₂/r². k = 9×10⁹ N·m²/C². Force along line joining charges." },
        { front: "Electric field due to point charge?", back: "E = kQ/r² (away from +ve, toward −ve charge)." },
        { front: "Capacitance of parallel plate capacitor?", back: "C = ε₀A/d. With dielectric: C = Kε₀A/d." },
        { front: "Gauss's Law?", back: "∮ E·dA = Q_enc/ε₀. Total flux through closed surface = enclosed charge/ε₀." },
        { front: "Energy stored in a capacitor?", back: "U = ½CV² = Q²/2C = ½QV." },
        { front: "Electric potential due to point charge?", back: "V = kQ/r. Potential is scalar." },
      ]
    },
    {
      chapter: "Current Electricity",
      cards: [
        { front: "Ohm's Law?", back: "V = IR. Current proportional to voltage at constant temperature." },
        { front: "Kirchhoff's Current Law (KCL)?", back: "Sum of currents entering a node = sum leaving. ΣI = 0 at junction." },
        { front: "Kirchhoff's Voltage Law (KVL)?", back: "Sum of EMFs = sum of potential drops in a closed loop. ΣV = 0." },
        { front: "Wheatstone bridge balance condition?", back: "P/Q = R/S. No current through galvanometer." },
        { front: "Resistors in series vs parallel?", back: "Series: R_total = R₁+R₂+… Parallel: 1/R_total = 1/R₁+1/R₂+…" },
        { front: "Power dissipated in a resistor?", back: "P = IV = I²R = V²/R." },
      ]
    },
    {
      chapter: "Magnetism",
      cards: [
        { front: "Biot-Savart Law (concept)?", back: "dB = μ₀/4π · IdL×r̂/r². Magnetic field due to current element." },
        { front: "Force on a current-carrying conductor in B?", back: "F = BIL·sinθ. Direction by Fleming's left-hand rule." },
        { front: "Ampere's Law?", back: "∮ B·dl = μ₀I_enc. For a long solenoid: B = μ₀nI." },
        { front: "Faraday's Law of Electromagnetic Induction?", back: "EMF = −dΦ/dt. Induced EMF = rate of change of magnetic flux." },
        { front: "Lenz's Law?", back: "Induced current direction opposes the change causing it (conservation of energy)." },
        { front: "Magnetic force on a moving charge?", back: "F = qv×B = qvBsinθ. (Lorentz force)" },
      ]
    },
    {
      chapter: "Optics",
      cards: [
        { front: "Snell's Law?", back: "n₁sinθ₁ = n₂sinθ₂. Ratio of sin of angles of incidence and refraction." },
        { front: "Lens maker's formula?", back: "1/f = (n−1)(1/R₁ − 1/R₂)" },
        { front: "Mirror formula?", back: "1/f = 1/v + 1/u. Sign convention: distances from pole." },
        { front: "Condition for total internal reflection?", back: "Light goes from denser to rarer medium at angle > critical angle. sinC = 1/n." },
        { front: "Young's double slit fringe width?", back: "β = λD/d, where D = screen distance, d = slit separation." },
        { front: "What is polarization?", back: "Restriction of vibration of light to one plane. Natural light is unpolarized." },
      ]
    },
    {
      chapter: "Modern Physics",
      cards: [
        { front: "Photoelectric effect: Einstein's equation?", back: "KE_max = hf − φ, where φ = work function, h = Planck's constant." },
        { front: "de Broglie wavelength?", back: "λ = h/mv = h/p. Wave nature of matter." },
        { front: "Bohr's model: radius of nth orbit?", back: "r_n = n²a₀ (a₀ = 0.529 Å for hydrogen)." },
        { front: "Radioactive decay law?", back: "N = N₀e^(−λt). Half-life T₁/₂ = 0.693/λ." },
        { front: "Mass-energy equivalence?", back: "E = mc². Small mass converts to enormous energy." },
        { front: "Alpha, Beta, Gamma radiation types?", back: "α = ⁴₂He nucleus. β = electron/positron. γ = high-energy photon." },
      ]
    },
    {
      chapter: "Semiconductors",
      cards: [
        { front: "p-type vs n-type semiconductor?", back: "p-type: doped with trivalent (Al, B) → holes majority. n-type: pentavalent (As, P) → electrons majority." },
        { front: "Rectifier function?", back: "Converts AC to DC. Half-wave uses 1 diode; full-wave uses 4 diodes (bridge)." },
        { front: "NPN transistor: current relation?", back: "I_E = I_B + I_C. Base current controls collector current." },
        { front: "NAND gate: output?", back: "Output = 0 only when both inputs are 1. Universal gate." },
        { front: "Zener diode use?", back: "Voltage regulation. Operates in reverse breakdown region." },
        { front: "Boolean: De Morgan's first theorem?", back: "(A+B)' = A'·B'. NOR equals AND of complements." },
      ]
    },
  ],

  Chemistry: [
    {
      chapter: "Basic Concepts",
      cards: [
        { front: "Define mole.", back: "Amount of substance containing 6.022×10²³ (Avogadro's number) particles." },
        { front: "Molarity formula?", back: "M = moles of solute / litres of solution." },
        { front: "What is the limiting reagent?", back: "Reactant that is completely consumed first, determining the amount of product formed." },
        { front: "Empirical vs Molecular formula?", back: "Empirical: simplest ratio of atoms. Molecular: actual number. e.g., CH₂O vs C₆H₁₂O₆." },
        { front: "Percentage yield formula?", back: "(Actual yield / Theoretical yield) × 100%" },
        { front: "STP conditions for gases?", back: "0°C (273 K), 1 atm. 1 mole of any gas = 22.4 L at STP." },
      ]
    },
    {
      chapter: "Atomic Structure",
      cards: [
        { front: "Four quantum numbers?", back: "n (principal), l (azimuthal), m_l (magnetic), m_s (spin: +½ or −½)." },
        { front: "Aufbau principle?", back: "Electrons fill orbitals in order of increasing energy: 1s 2s 2p 3s 3p 4s 3d…" },
        { front: "Hund's rule?", back: "Electrons occupy degenerate orbitals singly before pairing (parallel spins)." },
        { front: "Pauli Exclusion Principle?", back: "No two electrons in an atom can have the same four quantum numbers." },
        { front: "Heisenberg Uncertainty Principle?", back: "Δx·Δp ≥ h/4π. Cannot simultaneously know exact position and momentum." },
        { front: "Electronic config of Fe (Z=26)?", back: "[Ar] 3d⁶ 4s²" },
      ]
    },
    {
      chapter: "Chemical Bonding",
      cards: [
        { front: "VSEPR: shape of water (H₂O)?", back: "Bent/V-shape. 2 bonding pairs + 2 lone pairs → bond angle ≈ 104.5°." },
        { front: "VSEPR: shape of NH₃?", back: "Trigonal pyramidal. 3 bonding pairs + 1 lone pair → bond angle ≈ 107°." },
        { front: "What is hybridization of BF₃?", back: "sp² hybridization. Trigonal planar, bond angle 120°." },
        { front: "Ionic bond vs Covalent bond?", back: "Ionic: electron transfer between metals and non-metals. Covalent: electron sharing between non-metals." },
        { front: "What are hydrogen bonds?", back: "Electrostatic attraction between H (bonded to F, O, N) and electronegative atom on another molecule." },
        { front: "Bond order in O₂ molecule (MO theory)?", back: "Bond order = (8−4)/2 = 2. O₂ is paramagnetic (2 unpaired electrons)." },
      ]
    },
    {
      chapter: "States of Matter",
      cards: [
        { front: "Ideal gas equation?", back: "PV = nRT. R = 8.314 J/mol·K." },
        { front: "Graham's law of effusion?", back: "Rate ∝ 1/√M. Lighter gases effuse faster." },
        { front: "Van der Waals equation?", back: "(P + an²/V²)(V − nb) = nRT. Accounts for real gas behavior." },
        { front: "Raoult's Law?", back: "P_A = x_A · P°_A. Partial pressure = mole fraction × vapor pressure of pure A." },
        { front: "Boiling point elevation?", back: "ΔT_b = K_b · m, where m = molality, K_b = ebullioscopic constant." },
        { front: "Osmotic pressure formula?", back: "π = MRT, where M = molarity." },
      ]
    },
    {
      chapter: "Thermochemistry",
      cards: [
        { front: "Hess's Law?", back: "Total enthalpy change is same regardless of route. ΔH is a state function." },
        { front: "Exothermic vs Endothermic reaction?", back: "Exothermic: ΔH < 0 (heat released). Endothermic: ΔH > 0 (heat absorbed)." },
        { front: "Standard enthalpy of formation?", back: "Enthalpy change when 1 mole of compound forms from elements in standard state (ΔH°f)." },
        { front: "Gibbs free energy equation?", back: "G = H − TS. ΔG = ΔH − TΔS. Spontaneous if ΔG < 0." },
        { front: "Bond enthalpy concept?", back: "Energy to break 1 mole of bonds in gaseous state. ΔH_rxn = ΣBE(reactants) − ΣBE(products)." },
        { front: "Entropy change for spontaneity?", back: "ΔS_universe = ΔS_system + ΔS_surroundings > 0 for spontaneous process." },
      ]
    },
    {
      chapter: "Equilibrium",
      cards: [
        { front: "Law of Mass Action?", back: "K_c = [Products]^p / [Reactants]^r at equilibrium." },
        { front: "Relation between K_p and K_c?", back: "K_p = K_c(RT)^Δn, where Δn = moles of gaseous products − reactants." },
        { front: "Le-Chatelier's Principle?", back: "If equilibrium is disturbed, system shifts to counteract the disturbance." },
        { front: "Effect of catalyst on equilibrium?", back: "Speeds up both forward and backward reactions equally. Doesn't change K or equilibrium position." },
        { front: "Henderson-Hasselbalch equation?", back: "pH = pKa + log([A⁻]/[HA]). Used for buffer solutions." },
        { front: "Common ion effect?", back: "Addition of a common ion shifts equilibrium, reducing solubility (suppresses ionization)." },
      ]
    },
    {
      chapter: "Redox & Electrochemistry",
      cards: [
        { front: "How to identify oxidation and reduction?", back: "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain." },
        { front: "Nernst equation?", back: "E = E° − (RT/nF)lnQ = E° − (0.0592/n)logQ at 25°C." },
        { front: "Standard hydrogen electrode (SHE)?", back: "Reference electrode with E° = 0 V. Pt|H₂(1atm)|H⁺(1M)." },
        { front: "Faraday's law of electrolysis?", back: "Mass deposited m = ZIt = (M/nF)·Q. 1 Faraday = 96500 C." },
        { front: "Cell EMF formula?", back: "E_cell = E_cathode − E_anode. Spontaneous if E_cell > 0." },
        { front: "Kohlrausch's law?", back: "Λ°m(electrolyte) = sum of individual ionic conductances at infinite dilution." },
      ]
    },
    {
      chapter: "Chemical Kinetics",
      cards: [
        { front: "First-order rate law?", back: "Rate = k[A]. t₁/₂ = 0.693/k. Independent of initial concentration." },
        { front: "Arrhenius equation?", back: "k = Ae^(−Ea/RT). Ea = activation energy. ln(k₂/k₁) = Ea/R(1/T₁−1/T₂)." },
        { front: "Order of reaction definition?", back: "Sum of exponents of concentration terms in rate law. Can be 0, 1, 2, or fractional." },
        { front: "Zero-order reaction characteristics?", back: "Rate = k (constant). [A] = [A₀] − kt. t₁/₂ = [A₀]/2k." },
        { front: "How does a catalyst work?", back: "Provides alternate pathway with lower activation energy. Doesn't affect ΔH or equilibrium." },
        { front: "Molecularity vs Order?", back: "Molecularity: theoretical, always integer (1,2,3). Order: experimental, can be fractional." },
      ]
    },
    {
      chapter: "Coordination Chemistry",
      cards: [
        { front: "What is a ligand?", back: "Ion or molecule that donates lone pair to central metal atom. e.g., NH₃, Cl⁻, en." },
        { front: "IUPAC naming: [Co(NH₃)₆]³⁺?", back: "Hexaamminecobalt(III) ion. Ligands named before metal; Roman numeral for oxidation state." },
        { front: "Crystal Field Theory (CFT) concept?", back: "d-orbitals split in presence of ligands. Difference in energy = Δ (crystal field splitting)." },
        { front: "Strong vs weak field ligands?", back: "Strong (CN⁻, CO): large Δ, low spin. Weak (Cl⁻, F⁻): small Δ, high spin." },
        { front: "Chelate effect?", back: "Polydentate ligands form more stable complexes than monodentate due to entropy gain." },
        { front: "Linkage isomerism example?", back: "[Co(NO₂)(NH₃)₅]²⁺ and [Co(ONO)(NH₃)₅]²⁺ — NO₂ bonded via N or O." },
      ]
    },
    {
      chapter: "Organic: Basics",
      cards: [
        { front: "Inductive effect definition?", back: "Electron shift through sigma bonds due to electronegativity difference. −I effect withdraws, +I donates." },
        { front: "Resonance/Mesomeric effect?", back: "Electron delocalization through pi bonds or lone pairs. +M = donation, −M = withdrawal." },
        { front: "What is a carbocation?", back: "Carbon with positive charge and 6 electrons. Stability: 3° > 2° > 1° > methyl." },
        { front: "SN1 vs SN2 mechanism?", back: "SN1: 2 steps, carbocation intermediate, racemization. SN2: 1 step, inversion of configuration, bimolecular." },
        { front: "Markovnikov's rule?", back: "In addition to unsymmetric alkene, H adds to C with more H (carbocation stability)." },
        { front: "Hofmann bromamide reaction product?", back: "Primary amine with one less carbon than original amide (degradation reaction)." },
      ]
    },
    {
      chapter: "Organic: Reactions",
      cards: [
        { front: "Lucas test distinguishes?", back: "1°, 2°, 3° alcohols. 3° reacts immediately, 2° after few minutes, 1° no reaction with ZnCl₂/HCl." },
        { front: "Aldol condensation condition?", back: "Aldehydes/ketones with α-H react in base/acid to give β-hydroxy carbonyl compounds." },
        { front: "Cannizzaro reaction?", back: "Aldehydes without α-H undergo disproportionation in conc. NaOH (one oxidized, one reduced)." },
        { front: "Fehling's test positive for?", back: "Aldehydes (except aromatic). Gives brick-red Cu₂O precipitate. Ketones don't react." },
        { front: "Ester formation (Fischer esterification)?", back: "Acid + Alcohol ⇌ Ester + H₂O (acid catalyst). Equilibrium reaction." },
        { front: "Hofmann vs Saytzeff elimination?", back: "Hofmann: less substituted alkene (bulky base). Saytzeff: more substituted alkene (major product)." },
      ]
    },
    {
      chapter: "Aromatic Chemistry",
      cards: [
        { front: "Hückel's rule for aromaticity?", back: "Cyclic, planar, fully conjugated molecule with (4n+2) π electrons (n=0,1,2…)." },
        { front: "EAS: ortho/para vs meta directors?", back: "o/p directors: EDG (−OH, −NH₂, −alkyl). Meta directors: EWG (−NO₂, −CN, −COOH)." },
        { front: "Electrophile in nitration of benzene?", back: "NO₂⁺ (nitronium ion), generated by H₂SO₄ + HNO₃." },
        { front: "Friedel-Crafts alkylation?", back: "Benzene + RCl + AlCl₃ → alkylbenzene. Carbocation is electrophile." },
        { front: "Phenol vs alcohol acidity?", back: "Phenol (pKa ≈ 10) more acidic than alcohol (pKa ≈ 16) due to resonance stabilization of phenoxide." },
        { front: "Diazonium salt reaction (Sandmeyer)?", back: "ArN₂⁺ + CuCl → ArCl. Replaces −N₂⁺ with halide." },
      ]
    },
    {
      chapter: "Biomolecules & Polymers",
      cards: [
        { front: "Glucose structure (D-glucose)?", back: "Aldohexose (C₆H₁₂O₆). Open chain has aldehyde group. Forms 6-membered pyranose ring." },
        { front: "Peptide bond formation?", back: "−COOH of one amino acid + −NH₂ of another → −CO−NH− (peptide bond) + H₂O." },
        { front: "Primary, secondary, tertiary protein structure?", back: "1°: sequence. 2°: α-helix/β-sheet (H-bonds). 3°: 3D folding. 4°: multiple subunits." },
        { front: "DNA vs RNA difference?", back: "DNA: deoxyribose sugar, thymine, double helix. RNA: ribose, uracil, single strand." },
        { front: "Addition vs Condensation polymer?", back: "Addition: no by-product (polyethylene). Condensation: small molecule lost (nylon, polyester)." },
        { front: "Enzyme characteristics?", back: "Biological catalysts (proteins). Highly specific, work best at optimal pH and temperature." },
      ]
    },
    {
      chapter: "s & p-Block Elements",
      cards: [
        { front: "Why Li is different from other alkali metals?", back: "Smallest size, highest charge density, diagonal relationship with Mg." },
        { front: "Anomalous behavior of nitrogen vs phosphorus?", back: "N: no d-orbitals, max covalency 4, forms pπ-pπ bonds. P: has d-orbitals, forms pπ-dπ bonds." },
        { front: "Bleaching powder formula?", back: "Ca(OCl)Cl or CaOCl₂. Bleaching agent due to nascent oxygen release." },
        { front: "Halogens trend in oxidizing power?", back: "F₂ > Cl₂ > Br₂ > I₂. F₂ is strongest oxidizing agent." },
        { front: "Why noble gases are inert?", back: "Complete ns²np⁶ outer shell (except He: 1s²). No tendency to lose/gain electrons." },
        { front: "Structure of ozone?", back: "O₃: bent shape, bond angle 117°. Resonance structure with bond order 1.5." },
      ]
    },
    {
      chapter: "d & f-Block, Metallurgy",
      cards: [
        { front: "Why transition metals show variable oxidation states?", back: "Small energy difference between (n-1)d and ns orbitals — both can be used in bonding." },
        { front: "Lanthanide contraction?", back: "Steady decrease in atomic/ionic radius across lanthanides due to poor d-orbital shielding." },
        { front: "Thermite reaction?", back: "Fe₂O₃ + 2Al → Al₂O₃ + 2Fe + heat. Used in welding railway tracks." },
        { front: "Froth flotation used for?", back: "Concentration of sulphide ores. Oil wets ore, water wets gangue." },
        { front: "Zone refining used for?", back: "Purification of semiconductors (Si, Ge). Impurities move with the molten zone." },
        { front: "Copper extraction from chalcopyrite?", back: "CuFeS₂ → roasting → Cu₂S → partial roasting → Cu₂O + Cu₂S → Cu (self-reduction)." },
      ]
    },
  ],

  Mathematics: [
    {
      chapter: "Sets, Relations & Functions",
      cards: [
        { front: "A ∪ B formula for n(A ∪ B)?", back: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)." },
        { front: "Domain of f(x) = √x?", back: "x ≥ 0, i.e., [0, ∞)." },
        { front: "What is a bijective function?", back: "Both one-one (injective) and onto (surjective). Has an inverse function." },
        { front: "Even vs odd function?", back: "Even: f(−x) = f(x) (symmetric about y-axis). Odd: f(−x) = −f(x) (symmetric about origin)." },
        { front: "Number of subsets of a set with n elements?", back: "2ⁿ subsets (including empty set and the set itself)." },
        { front: "Composition of functions: (fog)(x)?", back: "f(g(x)). Apply g first, then f. fog ≠ gof in general." },
      ]
    },
    {
      chapter: "Complex Numbers",
      cards: [
        { front: "Modulus of z = a + bi?", back: "|z| = √(a² + b²)" },
        { front: "Argument of z = a + bi?", back: "arg(z) = arctan(b/a). Take quadrant into account." },
        { front: "De Moivre's Theorem?", back: "(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ)" },
        { front: "Cube roots of unity: ω?", back: "ω = e^(2πi/3) = (−1+i√3)/2. 1 + ω + ω² = 0; ω³ = 1." },
        { front: "Polar form of a complex number?", back: "z = r(cosθ + i sinθ) = re^(iθ), where r = |z|, θ = arg(z)." },
        { front: "Conjugate of z = a + bi?", back: "z̄ = a − bi. z·z̄ = |z|²." },
      ]
    },
    {
      chapter: "Matrices & Determinants",
      cards: [
        { front: "Condition for invertible matrix?", back: "det(A) ≠ 0. A is non-singular." },
        { front: "A⁻¹ formula for 2×2 matrix?", back: "A⁻¹ = (1/det A) × adj(A). For [[a,b],[c,d]]: det = ad−bc." },
        { front: "Cramer's Rule application?", back: "For Ax = b: x_i = det(A_i)/det(A), where A_i replaces i-th column with b." },
        { front: "Properties of determinants?", back: "Swapping rows/columns: sign changes. Identical rows: det = 0. Scalar multiplied to one row only." },
        { front: "Rank of a matrix?", back: "Maximum number of linearly independent rows (or columns)." },
        { front: "Cayley-Hamilton theorem?", back: "Every square matrix satisfies its own characteristic equation." },
      ]
    },
    {
      chapter: "Quadratic Equations",
      cards: [
        { front: "Quadratic formula?", back: "x = [−b ± √(b²−4ac)] / 2a." },
        { front: "Nature of roots from discriminant?", back: "D > 0: real & unequal. D = 0: real & equal. D < 0: complex conjugate roots." },
        { front: "Sum and product of roots?", back: "α + β = −b/a. αβ = c/a." },
        { front: "Form quadratic with roots α, β?", back: "x² − (α+β)x + αβ = 0." },
        { front: "Condition for both roots positive?", back: "D ≥ 0, α+β > 0, αβ > 0." },
        { front: "What is the range of f(x) = ax²+bx+c?", back: "If a > 0: minimum at vertex = −D/4a. If a < 0: maximum at vertex." },
      ]
    },
    {
      chapter: "Progressions & Series",
      cards: [
        { front: "Sum of n terms of AP?", back: "S_n = n/2 × [2a + (n−1)d] = n/2 × (first + last)" },
        { front: "nth term of GP?", back: "T_n = ar^(n−1), where a = first term, r = common ratio." },
        { front: "Sum of infinite GP (|r|<1)?", back: "S∞ = a / (1−r)." },
        { front: "AM ≥ GM ≥ HM inequality?", back: "For positive numbers: Arithmetic Mean ≥ Geometric Mean ≥ Harmonic Mean. Equality when all are equal." },
        { front: "Binomial theorem: general term?", back: "T_{r+1} = ⁿCᵣ · aⁿ⁻ʳ · xʳ" },
        { front: "Sum of squares: 1²+2²+…+n²?", back: "n(n+1)(2n+1)/6" },
      ]
    },
    {
      chapter: "Permutations & Combinations",
      cards: [
        { front: "nPr formula?", back: "nPr = n! / (n−r)!. Number of arrangements of r items from n." },
        { front: "nCr formula?", back: "nCr = n! / [r!(n−r)!]. Number of selections of r items from n." },
        { front: "nC0 = nCn = ?", back: "1. Also nCr = nC(n−r)." },
        { front: "Circular permutations of n distinct objects?", back: "(n−1)! arrangements (fix one object as reference)." },
        { front: "Arrangements with identical objects?", back: "n! / (p!q!r!…) where p, q, r… are counts of identical types." },
        { front: "Number of ways to distribute n identical items into r groups?", back: "ⁿ⁺ʳ⁻¹Cᵣ₋₁ (Stars and bars)." },
      ]
    },
    {
      chapter: "Probability",
      cards: [
        { front: "Classical probability formula?", back: "P(A) = (Favorable outcomes) / (Total outcomes)." },
        { front: "Addition theorem of probability?", back: "P(A∪B) = P(A) + P(B) − P(A∩B)." },
        { front: "Conditional probability?", back: "P(A|B) = P(A∩B) / P(B)." },
        { front: "Bayes' theorem?", back: "P(A|B) = P(B|A)·P(A) / P(B). Updates probability with new evidence." },
        { front: "Mean of Binomial distribution?", back: "μ = np. Variance = npq, SD = √(npq)." },
        { front: "Independent events condition?", back: "P(A∩B) = P(A)·P(B). Events don't influence each other." },
      ]
    },
    {
      chapter: "Trigonometry",
      cards: [
        { front: "sin²θ + cos²θ = ?", back: "1. Similarly: 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ." },
        { front: "sin(A+B) formula?", back: "sin(A+B) = sinA cosB + cosA sinB." },
        { front: "cos 2θ formulas?", back: "cos2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ." },
        { front: "Principal value of sin⁻¹(x)?", back: "[−π/2, π/2]." },
        { front: "General solution of sinθ = sinα?", back: "θ = nπ + (−1)ⁿα, n ∈ Z." },
        { front: "Sine rule?", back: "a/sinA = b/sinB = c/sinC = 2R (circumradius)." },
      ]
    },
    {
      chapter: "Coordinate: Straight Lines",
      cards: [
        { front: "Slope of line through (x₁,y₁) and (x₂,y₂)?", back: "m = (y₂−y₁)/(x₂−x₁)." },
        { front: "Distance from point (x₁,y₁) to line ax+by+c=0?", back: "d = |ax₁+by₁+c| / √(a²+b²)" },
        { front: "Angle between two lines with slopes m₁, m₂?", back: "tanθ = |(m₁−m₂)/(1+m₁m₂)|. Perpendicular if m₁m₂ = −1." },
        { front: "Section formula (internal)?", back: "P = [(m·x₂+n·x₁)/(m+n), (m·y₂+n·y₁)/(m+n)]" },
        { front: "Equation of line in intercept form?", back: "x/a + y/b = 1, where a, b are x and y intercepts." },
        { front: "Area of triangle with vertices (x₁,y₁),(x₂,y₂),(x₃,y₃)?", back: "½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|" },
      ]
    },
    {
      chapter: "Coordinate: Circles & Conics",
      cards: [
        { front: "Standard equation of circle with center (h,k) and radius r?", back: "(x−h)² + (y−k)² = r²." },
        { front: "Standard equation of parabola (opens right)?", back: "y² = 4ax. Focus: (a,0). Directrix: x = −a." },
        { front: "Standard equation of ellipse?", back: "x²/a² + y²/b² = 1 (a>b). Eccentricity e = c/a, c² = a²−b²." },
        { front: "Standard equation of hyperbola?", back: "x²/a² − y²/b² = 1. Asymptotes: y = ±(b/a)x." },
        { front: "Length of latus rectum of parabola y²=4ax?", back: "4a." },
        { front: "Condition for tangent to circle x²+y²=r²?", back: "y = mx + c is tangent if c² = r²(1+m²), i.e., c = ±r√(1+m²)." },
      ]
    },
    {
      chapter: "3D Geometry",
      cards: [
        { front: "Distance formula in 3D?", back: "d = √[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]" },
        { front: "Direction cosines relation?", back: "l²+m²+n² = 1, where l=cosα, m=cosβ, n=cosγ." },
        { front: "Equation of plane through 3 points?", back: "Use the determinant form or find normal vector using cross product of two direction vectors." },
        { front: "Distance from point to plane ax+by+cz+d=0?", back: "D = |ax₁+by₁+cz₁+d| / √(a²+b²+c²)." },
        { front: "Angle between two planes?", back: "cosθ = |a₁a₂+b₁b₂+c₁c₂| / (√Σa₁²·√Σa₂²)." },
        { front: "Symmetric equation of a line in 3D?", back: "(x−x₁)/l = (y−y₁)/m = (z−z₁)/n, where l,m,n are direction ratios." },
      ]
    },
    {
      chapter: "Vectors",
      cards: [
        { front: "Dot product a·b?", back: "a·b = |a||b|cosθ. If perpendicular, a·b = 0." },
        { front: "Cross product |a×b|?", back: "|a×b| = |a||b|sinθ. Direction by right-hand rule. If parallel, a×b = 0." },
        { front: "Scalar triple product [a b c]?", back: "a·(b×c). Equals volume of parallelepiped. Zero if coplanar." },
        { front: "Unit vector formula?", back: "â = a/|a|. Magnitude 1 in direction of a." },
        { front: "Position vector of midpoint?", back: "(a + b)/2." },
        { front: "Projection of a on b?", back: "(a·b)/|b|. Vector projection: [(a·b)/|b|²]·b." },
      ]
    },
    {
      chapter: "Differential Calculus",
      cards: [
        { front: "Definition of derivative?", back: "f'(x) = lim[h→0] [f(x+h)−f(x)]/h." },
        { front: "Chain rule?", back: "d/dx[f(g(x))] = f'(g(x))·g'(x)." },
        { front: "Rolle's theorem conditions?", back: "f continuous on [a,b], differentiable on (a,b), f(a)=f(b) → ∃c: f'(c)=0." },
        { front: "L'Hôpital's rule?", back: "If limit gives 0/0 or ∞/∞ form: lim f/g = lim f'/g'." },
        { front: "Condition for maxima at x = c?", back: "f'(c) = 0 and f''(c) < 0 (second derivative test)." },
        { front: "Derivative of xⁿ?", back: "d/dx[xⁿ] = nxⁿ⁻¹. (Power rule)." },
      ]
    },
    {
      chapter: "Integral Calculus",
      cards: [
        { front: "∫xⁿ dx = ?", back: "xⁿ⁺¹/(n+1) + C, for n ≠ −1." },
        { front: "∫eˣ dx = ?", back: "eˣ + C." },
        { front: "Integration by parts formula?", back: "∫u dv = uv − ∫v du. (ILATE: Inverse, Log, Algebraic, Trig, Exponential)." },
        { front: "Definite integral as area?", back: "Area = ∫[a to b] |f(x)| dx. Area between two curves = ∫(upper−lower)dx." },
        { front: "∫sin x dx = ?", back: "−cos x + C. ∫cos x dx = sin x + C." },
        { front: "Fundamental Theorem of Calculus?", back: "d/dx[∫[a to x] f(t)dt] = f(x). Links differentiation and integration." },
      ]
    },
    {
      chapter: "Differential Equations",
      cards: [
        { front: "Order and degree of DE?", back: "Order: highest derivative. Degree: power of highest derivative (after rationalizing)." },
        { front: "Variable separable form?", back: "dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx." },
        { front: "Linear first-order DE form?", back: "dy/dx + Py = Q. Integrating factor: e^(∫P dx). Solution: y·IF = ∫Q·IF dx + C." },
        { front: "Homogeneous DE definition?", back: "dy/dx = F(y/x). Substitute y = vx, then separate variables." },
        { front: "General solution vs Particular solution?", back: "General: includes arbitrary constants. Particular: constants determined from initial conditions." },
        { front: "Bernoulli's equation form?", back: "dy/dx + Py = Qyⁿ. Substitute v = y^(1−n) to linearize." },
      ]
    },
  ]
};
