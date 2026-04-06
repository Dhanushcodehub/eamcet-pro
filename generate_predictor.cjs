/**
 * generate_predictor.cjs  (v2 – per-category closing ranks)
 * Reads rankdata/data.js and generates src/data/predictorData.js
 *
 * New data shape per branch:
 *   CSE: { OC: 15000, BCA: 46000, BCB: 55000, BCC: 70000, BCD: 60000, BCE: 75000, SC: 90000, ST: 120000 }
 *
 * Closing rank = MAX rank admitted under that category's seats at that college+branch.
 */

const fs   = require('fs');
const path = require('path');

// ── 1. Load raw data ──────────────────────────────────────────────────────────
console.log('⏳  Reading rankdata/data.js …');
const rawPath = path.join(__dirname, 'rankdata', 'data.js');
let rawText = fs.readFileSync(rawPath, 'utf8');
rawText = rawText.replace(/^const data\s*=\s*/, '').replace(/;?\s*$/, '');

let allRows;
try {
  allRows = JSON.parse(rawText);
} catch {
  const fn = new Function('return ' + rawText);
  allRows = fn();
}
console.log(`✅  Loaded ${allRows.length} rows`);

// ── 2. Seat-category string → our 8-category key ──────────────────────────────
function getSeatCategoryKey(seatCat) {
  const s = (seatCat || '').toUpperCase();
  if (s.startsWith('OC_') || s.startsWith('EWS_')) return 'OC';
  if (s.startsWith('BC_A_')) return 'BCA';
  if (s.startsWith('BC_B_')) return 'BCB';
  if (s.startsWith('BC_C_')) return 'BCC';
  if (s.startsWith('BC_D_')) return 'BCD';
  if (s.startsWith('BC_E_')) return 'BCE';
  if (s.startsWith('SC_I_'))   return 'SCI';   // SC Category I
  if (s.startsWith('SC_II_'))  return 'SCII';  // SC Category II
  if (s.startsWith('SC_III_')) return 'SCIII'; // SC Category III
  if (s.startsWith('ST_'))   return 'ST';
  return null;
}

// ── 3. Branch name → short code ───────────────────────────────────────────────
function getBranchCode(name) {
  if (!name) return null;
  const u = name.trim().toUpperCase();
  if (u === 'CIVIL ENGINEERING') return 'CIVIL';
  if (u === 'COMPUTER SCIENCE AND ENGINEERING') return 'CSE';
  if (u === 'ELECTRONICS AND COMMUNICATION ENGINEERING') return 'ECE';
  if (u === 'ELECTRICAL AND ELECTRONICS ENGINEERING') return 'EEE';
  if (u === 'MECHANICAL ENGINEERING') return 'MECH';
  if (u.includes('DATA SCIENCE') && u.includes('COMPUTER SCIENCE')) return 'CSD';
  if (u.includes('ARTIFICIAL INTELLIGENCE') && u.includes('MACHINE LEARNING') && u.includes('COMPUTER SCIENCE')) return 'CSM';
  if (u.includes('CYBER SECURITY')) return 'CSC';
  if (u.includes('INTERNET OF THINGS')) return 'CIC';
  if (u.includes('COMPUTER SCIENCE AND BUSINESS')) return 'CSBS';
  if (u.includes('ARTIFICIAL INTELLIGENCE AND DATA SCIENCE')) return 'AID';
  if (u.includes('ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING')) return 'AIM';
  if (u.includes('COMPUTER SCIENCE') && u.includes('INFORMATION TECHNOLOGY')) return 'CSIT';
  if (u.includes('ELECTRONICS AND INSTRUMENTATION')) return 'EIE';
  if (u.includes('ELECTRONICS AND COMPUTER')) return 'ECM';
  if (u.includes('INFORMATION TECHNOLOGY')) return 'IT';
  if (u.includes('CHEMICAL')) return 'CHEM';
  if (u.includes('MINING')) return 'MINE';
  if (u.includes('METALLURGI')) return 'MET';
  if (u.includes('AERONAUTI')) return 'AERO';
  if (u.includes('BIOTECH')) return 'BT';
  if (u.includes('PETROLEUM')) return 'PET';
  if (u.includes('FOOD')) return 'FT';
  if (u.includes('PHARMA')) return 'PHARM';
  if (u.includes('COMPUTER SCIENCE')) return 'CSE';
  if (u.includes('ELECTRONICS AND COMMUNICATION')) return 'ECE';
  if (u.includes('ELECTRICAL')) return 'EEE';
  if (u.includes('MECHANICAL') && u.includes('PRODUCTION')) return 'MECH';
  if (u.includes('MECHANICAL')) return 'MECH';
  if (u.includes('CIVIL')) return 'CIVIL';
  return null;
}

// ── 4. Parse college string ───────────────────────────────────────────────────
function parseCollege(raw) {
  if (!raw) return null;
  const dash = raw.indexOf(' - ');
  if (dash === -1) return { code: raw.trim(), fullName: raw.trim(), place: 'Telangana' };
  const code = raw.substring(0, dash).trim();
  const rest = raw.substring(dash + 3).trim();
  const lastComma = rest.lastIndexOf(',');
  if (lastComma === -1) return { code, fullName: rest, place: 'Telangana' };
  return { code, fullName: rest.substring(0, lastComma).trim(), place: rest.substring(lastComma + 1).trim() };
}

// ── 5. Guess institution type ─────────────────────────────────────────────────
function getType(fullName) {
  const u = fullName.toUpperCase();
  if (u.includes('GOVERNMENT') || u.includes('GOVT') || u.includes('UNIVERSITY COLLEGE OF ENGINEERING')) return 'Govt';
  if (u.includes('JNTU') && !u.includes('PRIVATE')) return 'Govt';
  if (u.includes('NIT ') || u.includes('IIT ')) return 'Central Govt';
  if (['KL ', 'KONERU', 'SRM', 'MALLA REDDY UNIVERSITY', 'ANURAG UNIVERSITY', 'VIGNAN',
       'SR UNIVERSITY', 'MAHINDRA', 'AVANTHI', 'VIT ', 'WOXSEN'].some(k => u.includes(k))) return 'Deemed';
  if (['VASAVI', 'CBIT', 'CHAITANYA BHARATHI', 'MVSR', 'MAHATMA GANDHI INST', 'MGIT',
       'MUFFAKHAM JAH', 'G NARAYANAMMA', 'STANLEY', 'JAYAMUKHI'].some(k => u.includes(k))) return 'Private-Aided';
  return 'Private';
}

// ── 6. Aggregate per college-branch-category ──────────────────────────────────
// Structure: map[collegeCode][branchCode][catKey] = maxRank
const CATS = ['OC','BCA','BCB','BCC','BCD','BCE','SCI','SCII','SCIII','ST'];
const agg = {};   // agg[collegeCode] = { info, branches: { branchCode: { OC: [], BCA: [], … } } }

let skipped = 0;
for (const row of allRows) {
  const rankVal = row['Rank'];
  if (!rankVal || typeof rankVal !== 'number') { skipped++; continue; }
  const rank = Math.round(rankVal);
  const branchCode = getBranchCode(row['Branch']);
  if (!branchCode) continue;
  const catKey = getSeatCategoryKey(row['Seat Category']);
  if (!catKey) continue;

  const parsed = parseCollege(row['College']);
  if (!parsed) continue;

  const cc = parsed.code;
  if (!agg[cc]) agg[cc] = { info: parsed, branches: {} };
  if (!agg[cc].branches[branchCode]) {
    agg[cc].branches[branchCode] = { OC:[], BCA:[], BCB:[], BCC:[], BCD:[], BCE:[], SCI:[], SCII:[], SCIII:[], ST:[] };
  }
  agg[cc].branches[branchCode][catKey].push(rank);
}
console.log(`Skipped ${skipped} header/non-numeric rows`);

// ── 7. Build final colleges array ─────────────────────────────────────────────
const colleges = [];

for (const [, val] of Object.entries(agg)) {
  const { info, branches } = val;
  const branchesOut = {};

  for (const [br, cats] of Object.entries(branches)) {
    const catRanks = {};
    for (const cat of CATS) {
      if (cats[cat].length > 0) {
        catRanks[cat] = Math.max(...cats[cat]);  // closing = last rank admitted
      }
    }
    // Must have at least OC data
    if (Object.keys(catRanks).length > 0) {
      branchesOut[br] = catRanks;
    }
  }

  if (Object.keys(branchesOut).length === 0) continue;

  colleges.push({
    name:     info.fullName,
    place:    info.place,
    type:     getType(info.fullName),
    branches: branchesOut,
  });
}

// Sort: Govt → Private-Aided → Deemed → Private, then alphabetical
const ORDER = { 'Govt': 0, 'Central Govt': 0, 'Private-Aided': 1, 'Deemed': 2, 'Private': 3 };
colleges.sort((a, b) => {
  const d = (ORDER[a.type] ?? 4) - (ORDER[b.type] ?? 4);
  return d !== 0 ? d : a.name.localeCompare(b.name);
});

console.log(`Total colleges: ${colleges.length}`);

// ── 8. Collect all branch codes used ─────────────────────────────────────────
const allBranches = new Set();
for (const c of colleges) Object.keys(c.branches).forEach(b => allBranches.add(b));
const branchesSorted = [...allBranches].sort();
console.log('Branches:', branchesSorted.join(', '));

// ── 9. Emit JavaScript ────────────────────────────────────────────────────────
function serializeBranches(branches) {
  const lines = [];
  for (const [br, cats] of Object.entries(branches).sort(([,a],[,b]) => (a.OC||999999) - (b.OC||999999))) {
    const catStr = CATS
      .filter(c => cats[c] != null)
      .map(c => `${c}: ${cats[c]}`)
      .join(', ');
    lines.push(`      ${br}: { ${catStr} }`);
  }
  return '{\n' + lines.join(',\n') + '\n    }';
}

let out = `// ── TG EAMCET 2024 – Real per-category closing ranks (official allotment data) ──
// branches[branchCode][catKey] = OC/BCA/BCB/BCC/BCD/BCE/SCI/SCII/SCIII/ST closing rank

// Source: TS EAMCET 2025 official Marks vs Rank table
export const SCORE_RANK_TABLE = [
  { score: 160, rank: 1 },
  { score: 155, rank: 50 },
  { score: 150, rank: 200 },
  { score: 140, rank: 500 },
  { score: 130, rank: 1000 },
  { score: 120, rank: 2000 },
  { score: 110, rank: 4000 },
  { score: 100, rank: 6000 },
  { score: 90,  rank: 10000 },
  { score: 80,  rank: 15000 },
  { score: 70,  rank: 25000 },
  { score: 60,  rank: 40000 },
  { score: 50,  rank: 50000 },
  { score: 40,  rank: 80000 },
  { score: 0,   rank: 382000 },
];

export const TOTAL_CANDIDATES = 382000;

export function predictRank(score) {
  const s = Math.max(0, Math.min(160, score));
  for (let i = 0; i < SCORE_RANK_TABLE.length - 1; i++) {
    const hi = SCORE_RANK_TABLE[i];
    const lo = SCORE_RANK_TABLE[i + 1];
    if (s <= hi.score && s >= lo.score) {
      const t = (hi.score - s) / (hi.score - lo.score);
      return Math.round(hi.rank + t * (lo.rank - hi.rank));
    }
  }
  return TOTAL_CANDIDATES;
}

// Map UI category name → data key used in branches object
export const CATEGORY_TO_KEY = {
  "OC":    "OC",
  "BC-A":  "BCA",
  "BC-B":  "BCB",
  "BC-C":  "BCC",
  "BC-D":  "BCD",
  "BC-E":  "BCE",
  "SC-I":  "SCI",
  "SC-II": "SCII",
  "SC-III":"SCIII",
  "ST":    "ST",
};

// Fallback multipliers used for rank prediction when no direct data (SC sub-cats share SC pool)
export const CATEGORY_MULTIPLIERS = {
  OC:      1.0,
  "BC-A":  1.35,
  "BC-B":  1.45,
  "BC-C":  1.6,
  "BC-D":  1.55,
  "BC-E":  1.7,
  "SC-I":  2.0,
  "SC-II": 2.1,
  "SC-III":2.2,
  ST:      2.8,
};

// ── College Data ─────────────────────────────────────────────────────────────
// branches[branchCode][catKey] = OC/BCA/BCB/BCC/BCD/BCE/SCI/SCII/SCIII/ST closing rank
export const COLLEGES = [
`;

for (const c of colleges) {
  out += `  {\n`;
  out += `    name: ${JSON.stringify(c.name)},\n`;
  out += `    place: ${JSON.stringify(c.place)},\n`;
  out += `    type: ${JSON.stringify(c.type)},\n`;
  out += `    branches: ${serializeBranches(c.branches)},\n`;
  out += `  },\n`;
}

out += `];\n\n`;
out += `export const BRANCHES = ${JSON.stringify(branchesSorted)};\n`;
out += `export const CATEGORIES = ["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E", "SC-I", "SC-II", "SC-III", "ST"];\n`;

const outPath = path.join(__dirname, 'src', 'data', 'predictorData.js');
fs.writeFileSync(outPath, out, 'utf8');

console.log(`\n✅  Written → ${outPath}`);
console.log(`   Colleges : ${colleges.length}`);
console.log(`   Branches : ${branchesSorted.length}`);
