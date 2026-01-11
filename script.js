/* Database of all 118 Elements
   Z = Atomic Number
   A = Mass Number (Most stable/common isotope rounded)
*/
const elements = [
    { name: "Hydrogen", symbol: "H", z: 1, a: 1, fact: "Only element with no neutrons in its most common isotope (Protium)." },
    { name: "Helium", symbol: "He", z: 2, a: 4, fact: "Has the highest ionization enthalpy in the periodic table." },
    { name: "Lithium", symbol: "Li", z: 3, a: 7, fact: "Strongest reducing agent in aqueous solution due to high hydration energy." },
    { name: "Beryllium", symbol: "Be", z: 4, a: 9, fact: "BeO is amphoteric while other group 2 oxides are basic." },
    { name: "Boron", symbol: "B", z: 5, a: 11, fact: "Forms electron-deficient hydrides (boranes) with 'banana bonds'." },
    { name: "Carbon", symbol: "C", z: 6, a: 12, fact: "Shows maximum catenation property due to high C-C bond energy." },
    { name: "Nitrogen", symbol: "N", z: 7, a: 14, fact: "Inert at room temp due to high bond dissociation energy of N≡N." },
    { name: "Oxygen", symbol: "O", z: 8, a: 16, fact: "Second most electronegative element; exhibits -2, -1, +1, +2 oxidation states." },
    { name: "Fluorine", symbol: "F", z: 9, a: 19, fact: "Most electronegative element; acts only as an oxidizing agent." },
    { name: "Neon", symbol: "Ne", z: 10, a: 20, fact: "Used in discharge tubes and advertising display lights." },
    { name: "Sodium", symbol: "Na", z: 11, a: 23, fact: "Stored in kerosene to prevent reaction with air and moisture." },
    { name: "Magnesium", symbol: "Mg", z: 12, a: 24, fact: "Central metal atom in the chlorophyll pigment." },
    { name: "Aluminium", symbol: "Al", z: 13, a: 27, fact: "Most abundant metal in the Earth's crust; extracted via Hall-Heroult process." },
    { name: "Silicon", symbol: "Si", z: 14, a: 28, fact: "Base material for the semiconductor industry and silicones." },
    { name: "Phosphorus", symbol: "P", z: 15, a: 31, fact: "White phosphorus is highly reactive and chemiluminescent; Red P is stable." },
    { name: "Sulfur", symbol: "S", z: 16, a: 32, fact: "Exists as S8 puckered rings; has several allotropes (rhombic, monoclinic)." },
    { name: "Chlorine", symbol: "Cl", z: 17, a: 35, fact: "Has the highest negative electron gain enthalpy." },
    { name: "Argon", symbol: "Ar", z: 18, a: 40, fact: "Most abundant noble gas in the atmosphere (~1%)." },
    { name: "Potassium", symbol: "K", z: 19, a: 39, fact: "Its salt (KCl) is used as a fertilizer; violet flame test color." },
    { name: "Calcium", symbol: "Ca", z: 20, a: 40, fact: "Essential for muscle contraction; brick red flame test." },
    { name: "Scandium", symbol: "Sc", z: 21, a: 45, fact: "First transition element; shows only +3 oxidation state." },
    { name: "Titanium", symbol: "Ti", z: 22, a: 48, fact: "Strategic metal; used in aerospace and Ziegler-Natta catalyst (TiCl4)." },
    { name: "Vanadium", symbol: "V", z: 23, a: 51, fact: "V2O5 is used as a catalyst in the Contact Process for H2SO4." },
    { name: "Chromium", symbol: "Cr", z: 24, a: 52, fact: "Exception in config: 3d5 4s1; used in stainless steel." },
    { name: "Manganese", symbol: "Mn", z: 25, a: 55, fact: "Shows maximum number of oxidation states (+2 to +7) in 3d series." },
    { name: "Iron", symbol: "Fe", z: 26, a: 56, fact: "Most abundant transition metal; extracted in blast furnace." },
    { name: "Cobalt", symbol: "Co", z: 27, a: 59, fact: "Central atom in Vitamin B12 (Cyanocobalamin)." },
    { name: "Nickel", symbol: "Ni", z: 28, a: 59, fact: "Used in hydrogenation of oils (vegetable ghee) as a catalyst." },
    { name: "Copper", symbol: "Cu", z: 29, a: 64, fact: "Exception in config: 3d10 4s1; used in electrical wiring." },
    { name: "Zinc", symbol: "Zn", z: 30, a: 65, fact: "Not a transition element (d10 config); galvanization prevents rusting." },
    { name: "Gallium", symbol: "Ga", z: 31, a: 70, fact: "Metal with a melting point near room temp (30°C); expands on freezing." },
    { name: "Germanium", symbol: "Ge", z: 32, a: 73, fact: "Important semiconductor; predicted by Mendeleev as 'Eka-Silicon'." },
    { name: "Arsenic", symbol: "As", z: 33, a: 75, fact: "Metalloid; poisonous; used in doping semiconductors." },
    { name: "Selenium", symbol: "Se", z: 34, a: 79, fact: "Photoconductive; used in xerography (photocopying)." },
    { name: "Bromine", symbol: "Br", z: 35, a: 80, fact: "The only non-metal that is liquid at room temperature." },
    { name: "Krypton", symbol: "Kr", z: 36, a: 84, fact: "Used in high-speed photography flash lamps." },
    { name: "Rubidium", symbol: "Rb", z: 37, a: 85, fact: "Used in atomic clocks for precise timekeeping." },
    { name: "Strontium", symbol: "Sr", z: 38, a: 88, fact: "Gives a deep crimson red color in fireworks." },
    { name: "Yttrium", symbol: "Y", z: 39, a: 89, fact: "Used in YAG lasers and red phosphors for TV screens." },
    { name: "Zirconium", symbol: "Zr", z: 40, a: 91, fact: "Atomic radius is almost identical to Hafnium due to Lanthanoid contraction." },
    { name: "Niobium", symbol: "Nb", z: 41, a: 93, fact: "Used in superconducting magnets for MRI scanners." },
    { name: "Molybdenum", symbol: "Mo", z: 42, a: 96, fact: "Promoter for Iron catalyst in Haber's process (Ammonia)." },
    { name: "Technetium", symbol: "Tc", z: 43, a: 98, fact: "First artificially produced element; radioactive." },
    { name: "Ruthenium", symbol: "Ru", z: 44, a: 101, fact: "Can form +8 oxidation state (RuO4), similar to Osmium." },
    { name: "Rhodium", symbol: "Rh", z: 45, a: 103, fact: "Used in catalytic converters to reduce car emissions." },
    { name: "Palladium", symbol: "Pd", z: 46, a: 106, fact: "Adsorbs large volumes of Hydrogen gas; hydrogenation catalyst." },
    { name: "Silver", symbol: "Ag", z: 47, a: 108, fact: "Best conductor of heat and electricity." },
    { name: "Cadmium", symbol: "Cd", z: 48, a: 112, fact: "Used in control rods for nuclear reactors (absorbs neutrons)." },
    { name: "Indium", symbol: "In", z: 49, a: 115, fact: "Used in touchscreens (Indium Tin Oxide)." },
    { name: "Tin", symbol: "Sn", z: 50, a: 119, fact: "Shows allotropy (Grey Tin vs White Tin); 'Tin Cry' when bent." },
    { name: "Antimony", symbol: "Sb", z: 51, a: 122, fact: "Metalloid; used in lead-acid batteries to harden lead." },
    { name: "Tellurium", symbol: "Te", z: 52, a: 128, fact: "Rare metalloid; forms alloy with Cadmium for solar panels." },
    { name: "Iodine", symbol: "I", z: 53, a: 127, fact: "Sublimes (solid to gas); essential for thyroid function." },
    { name: "Xenon", symbol: "Xe", z: 54, a: 131, fact: "First noble gas to form true chemical compounds (XePtF6)." },
    { name: "Cesium", symbol: "Cs", z: 55, a: 133, fact: "Used in atomic clocks; has the lowest ionization energy." },
    { name: "Barium", symbol: "Ba", z: 56, a: 137, fact: "Apple green flame test; BaSO4 is used as 'Barium meal' for X-rays." },
    { name: "Lanthanum", symbol: "La", z: 57, a: 139, fact: "Prototype for the lanthanoids; actually a d-block element." },
    { name: "Cerium", symbol: "Ce", z: 58, a: 140, fact: "Most common lanthanoid; shows +4 oxidation state (oxidizing agent)." },
    { name: "Praseodymium", symbol: "Pr", z: 59, a: 141, fact: "Used in didymium glass for welder's goggles." },
    { name: "Neodymium", symbol: "Nd", z: 60, a: 144, fact: "Makes the strongest permanent magnets (NdFeB)." },
    { name: "Promethium", symbol: "Pm", z: 61, a: 145, fact: "Only radioactive lanthanoid." },
    { name: "Samarium", symbol: "Sm", z: 62, a: 150, fact: "Used in nuclear reactor control rods." },
    { name: "Europium", symbol: "Eu", z: 63, a: 152, fact: "Shows stable +2 oxidation state (strong reducing agent)." },
    { name: "Gadolinium", symbol: "Gd", z: 64, a: 157, fact: "Half-filled f-orbital (4f7); high magnetic moment." },
    { name: "Terbium", symbol: "Tb", z: 65, a: 159, fact: "Used in green phosphors for fluorescent lamps." },
    { name: "Dysprosium", symbol: "Dy", z: 66, a: 163, fact: "Has one of the highest magnetic strengths." },
    { name: "Holmium", symbol: "Ho", z: 67, a: 165, fact: "Has the highest magnetic moment of any natural element." },
    { name: "Erbium", symbol: "Er", z: 68, a: 167, fact: "Used in lasers for skin resurfacing." },
    { name: "Thulium", symbol: "Tm", z: 69, a: 169, fact: "Rare lanthanoid; used in portable X-ray devices." },
    { name: "Ytterbium", symbol: "Yb", z: 70, a: 173, fact: "Shows +2 oxidation state due to fully filled f-subshell (4f14)." },
    { name: "Lutetium", symbol: "Lu", z: 71, a: 175, fact: "Last lanthanoid; hardest and densest of the series." },
    { name: "Hafnium", symbol: "Hf", z: 72, a: 178, fact: "Chemical twin of Zirconium; hard to separate." },
    { name: "Tantalum", symbol: "Ta", z: 73, a: 181, fact: "Highly corrosion resistant; used in surgical implants." },
    { name: "Tungsten", symbol: "W", z: 74, a: 184, fact: "Highest melting point of all metals (~3422°C)." },
    { name: "Rhenium", symbol: "Re", z: 75, a: 186, fact: "One of the rarest elements; very high melting point." },
    { name: "Osmium", symbol: "Os", z: 76, a: 190, fact: "Densest naturally occurring element; forms OsO4 (+8 state)." },
    { name: "Iridium", symbol: "Ir", z: 77, a: 192, fact: "Most corrosion-resistant metal; used in standard meter bar." },
    { name: "Platinum", symbol: "Pt", z: 78, a: 195, fact: "Noble metal; used as catalyst and in jewelry." },
    { name: "Gold", symbol: "Au", z: 79, a: 197, fact: "Most malleable and ductile metal; dissolves in Aqua Regia." },
    { name: "Mercury", symbol: "Hg", z: 80, a: 201, fact: "Only metal liquid at room temp; forms amalgams." },
    { name: "Thallium", symbol: "Tl", z: 81, a: 204, fact: "+1 state is more stable than +3 due to Inert Pair Effect." },
    { name: "Lead", symbol: "Pb", z: 82, a: 207, fact: "Stable end product of Uranium decay series; radiation shield." },
    { name: "Bismuth", symbol: "Bi", z: 83, a: 209, fact: "Heaviest stable element (technically very slightly radioactive)." },
    { name: "Polonium", symbol: "Po", z: 84, a: 209, fact: "Discovered by Marie Curie; named after Poland." },
    { name: "Astatine", symbol: "At", z: 85, a: 210, fact: "Rarest naturally occurring element in Earth's crust." },
    { name: "Radon", symbol: "Rn", z: 86, a: 222, fact: "Radioactive noble gas; causes lung cancer." },
    { name: "Francium", symbol: "Fr", z: 87, a: 223, fact: "Most electropositive element; extremely rare and radioactive." },
    { name: "Radium", symbol: "Ra", z: 88, a: 226, fact: "Discovered by the Curies; used in luminous paints historically." },
    { name: "Actinium", symbol: "Ac", z: 89, a: 227, fact: "Prototype for the actinoids." },
    { name: "Thorium", symbol: "Th", z: 90, a: 232, fact: "Potential nuclear fuel; abundant in Monazite sand (India)." },
    { name: "Protactinium", symbol: "Pa", z: 91, a: 231, fact: "Rare and highly radioactive." },
    { name: "Uranium", symbol: "U", z: 92, a: 238, fact: "Fuel for nuclear reactors (U-235 isotope)." },
    { name: "Neptunium", symbol: "Np", z: 93, a: 237, fact: "First transuranic element." },
    { name: "Plutonium", symbol: "Pu", z: 94, a: 244, fact: "Used in nuclear weapons and RTGs for spacecraft." },
    { name: "Americium", symbol: "Am", z: 95, a: 243, fact: "Used in household smoke detectors." },
    { name: "Curium", symbol: "Cm", z: 96, a: 247, fact: "Named after Marie and Pierre Curie." },
    { name: "Berkelium", symbol: "Bk", z: 97, a: 247, fact: "Named after Berkeley, California." },
    { name: "Californium", symbol: "Cf", z: 98, a: 251, fact: "Very strong neutron emitter; used to start reactors." },
    { name: "Einsteinium", symbol: "Es", z: 99, a: 252, fact: "Discovered in the debris of the first H-bomb test." },
    { name: "Fermium", symbol: "Fm", z: 100, a: 257, fact: "Heaviest element that can be formed by neutron bombardment." },
    { name: "Mendelevium", symbol: "Md", z: 101, a: 258, fact: "Named after the father of the periodic table." },
    { name: "Nobelium", symbol: "No", z: 102, a: 259, fact: "Named after Alfred Nobel." },
    { name: "Lawrencium", symbol: "Lr", z: 103, a: 262, fact: "Last actinoid element." },
    { name: "Rutherfordium", symbol: "Rf", z: 104, a: 267, fact: "First transactinide element." },
    { name: "Dubnium", symbol: "Db", z: 105, a: 270, fact: "Subject of naming controversy (Transfermium Wars)." },
    { name: "Seaborgium", symbol: "Sg", z: 106, a: 271, fact: "Only element named after a person who was alive at the time." },
    { name: "Bohrium", symbol: "Bh", z: 107, a: 270, fact: "Named after Niels Bohr." },
    { name: "Hassium", symbol: "Hs", z: 108, a: 277, fact: "Predicted to behave like Osmium (Group 8)." },
    { name: "Meitnerium", symbol: "Mt", z: 109, a: 276, fact: "Named after Lise Meitner, co-discoverer of nuclear fission." },
    { name: "Darmstadtium", symbol: "Ds", z: 110, a: 281, fact: "Named after Darmstadt, Germany." },
    { name: "Roentgenium", symbol: "Rg", z: 111, a: 280, fact: "Named after Wilhelm Roentgen (X-ray discoverer)." },
    { name: "Copernicium", symbol: "Cn", z: 112, a: 285, fact: "Expected to be a liquid metal like Mercury." },
    { name: "Nihonium", symbol: "Nh", z: 113, a: 284, fact: "First element discovered in an Asian country (Japan)." },
    { name: "Flerovium", symbol: "Fl", z: 114, a: 289, fact: "Located in the 'Island of Stability' region." },
    { name: "Moscovium", symbol: "Mc", z: 115, a: 288, fact: "Synthetic element; extremely short half-life." },
    { name: "Livermorium", symbol: "Lv", z: 116, a: 293, fact: "Named after Lawrence Livermore National Lab." },
    { name: "Tennessine", symbol: "Ts", z: 117, a: 294, fact: "A halogen, but likely metallic in nature." },
    { name: "Oganesson", symbol: "Og", z: 118, a: 294, fact: "Heaviest known element; predicted to be a solid noble gas." }
];

let currentElement = {};
let score = 0;
let totalQuestions = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadNewQuestion();
});

function loadNewQuestion() {
    document.getElementById('z-input').value = '';
    document.getElementById('a-input').value = '';
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('fact-box').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    
    const randomIndex = Math.floor(Math.random() * elements.length);
    currentElement = elements[randomIndex];

    document.getElementById('element-symbol').innerText = currentElement.symbol;
    document.getElementById('element-name').innerText = currentElement.name;
}

function checkAnswer() {
    const zInput = parseInt(document.getElementById('z-input').value);
    const aInput = parseInt(document.getElementById('a-input').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(zInput) || isNaN(aInput)) {
        alert("Please enter numbers for both fields.");
        return;
    }

    totalQuestions++;
    
    // Strict atomic number check, flexible mass check (+/- 2 allow)
    const isZCorrect = zInput === currentElement.z;
    const isACorrect = Math.abs(aInput - currentElement.a) <= 2; 

    if (isZCorrect && isACorrect) {
        score++;
        feedback.className = "feedback correct";
        feedback.innerText = "✅ Correct! Well done.";
    } else {
        feedback.className = "feedback wrong";
        feedback.innerText = `❌ Incorrect. The correct answer was Z=${currentElement.z}, A=${currentElement.a}`;
    }

    feedback.classList.remove('hidden');
    document.getElementById('jee-fact').innerText = currentElement.fact;
    document.getElementById('fact-box').classList.remove('hidden');

    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');

    document.getElementById('score').innerText = score;
    document.getElementById('total').innerText = totalQuestions;
}

function nextQuestion() {
    loadNewQuestion();
}
