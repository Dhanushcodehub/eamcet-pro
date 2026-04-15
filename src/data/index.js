// ============================================================
//  Data Index — single import point for the app
//
//  HOW TO ADD A NEW PAPER:
//  1. Create  src/data/questions/<paper_id>.js
//     (copy the template from any existing placeholder file)
//  2. Add an import for it below
//  3. Add an entry to PAPER_SETS in paperSets.js with available: true
//  That's it — no changes needed in App.jsx or ExamPage.
// ============================================================

import { PAPER_SETS } from "./paperSets.js";

// ── Question file imports (one per shift) ──────────────────
import q_2025_may2_s1 from "./questions/2025_may2_s1.js";
import q_2025_may2_s2 from "./questions/2025_may2_s2.js";
import q_2025_may3_s2 from "./questions/2025_may3_s2.js";
import q_2025_may4_s1 from "./questions/2025_may4_s1.js";
import q_2024_may7_s1 from "./questions/2024_may7_s1.js";
import q_2024_may7_s2 from "./questions/2024_may7_s2.js";
import q_2024_may8_s1 from "./questions/2024_may8_s1.js";
import q_2024_may8_s2 from "./questions/2024_may8_s2.js";
import q_2024_may9_s1 from "./questions/2024_may9_s1.js";
import q_2024_may9_s2 from "./questions/2024_may9_s2.js";
import q_2023_may10_s1 from "./questions/2023_may10_s1.js";
import q_2023_may10_s2 from "./questions/2023_may10_s2.js";
import q_2023_may11_s1 from "./questions/2023_may11_s1.js";
import q_2023_may11_s2 from "./questions/2023_may11_s2.js";
import q_2023_may12_s1 from "./questions/2023_may12_s1.js";
import q_2022_may13_s1 from "./questions/2022_may13_s1.js";
import q_2022_may13_s2 from "./questions/2022_may13_s2.js";
import q_2022_may14_s1 from "./questions/2022_may14_s1.js";
import q_2022_may14_s2 from "./questions/2022_may14_s2.js";
import q_2020_may12_s1 from "./questions/2020_may12_s1.js";
import q_2020_may12_s2 from "./questions/2020_may12_s2.js";
import q_2020_may13_s1 from "./questions/2020_may13_s1.js";
import q_2020_may13_s2 from "./questions/2020_may13_s2.js";
import q_2021_may15_s1 from "./questions/2021_may15_s1.js";
import q_2021_may15_s2 from "./questions/2021_may15_s2.js";
import q_2021_may16_s1 from "./questions/2021_may16_s1.js";
import q_2021_may16_s2 from "./questions/2021_may16_s2.js";

// ── Assemble QUESTION_BANK keyed by paper id ───────────────
export const QUESTION_BANK = {
    "2025_may2_s1": q_2025_may2_s1,
    "2025_may2_s2": q_2025_may2_s2,
    "2025_may3_s2": q_2025_may3_s2,
    "2025_may4_s1": q_2025_may4_s1,
    "2024_may7_s1": q_2024_may7_s1,
    "2024_may7_s2": q_2024_may7_s2,
    "2024_may8_s1": q_2024_may8_s1,
    "2024_may8_s2": q_2024_may8_s2,
    "2024_may9_s1": q_2024_may9_s1,
    "2024_may9_s2": q_2024_may9_s2,
    "2023_may10_s1": q_2023_may10_s1,
    "2023_may10_s2": q_2023_may10_s2,
    "2023_may11_s1": q_2023_may11_s1,
    "2023_may11_s2": q_2023_may11_s2,
    "2023_may12_s1": q_2023_may12_s1,
    "2022_may13_s1": q_2022_may13_s1,
    "2022_may13_s2": q_2022_may13_s2,
    "2022_may14_s1": q_2022_may14_s1,
    "2022_may14_s2": q_2022_may14_s2,
    "2020_may12_s1": q_2020_may12_s1,
    "2020_may12_s2": q_2020_may12_s2,
    "2020_may13_s1": q_2020_may13_s1,
    "2020_may13_s2": q_2020_may13_s2,
    "2021_may15_s1": q_2021_may15_s1,
    "2021_may15_s2": q_2021_may15_s2,
    "2021_may16_s1": q_2021_may16_s1,
    "2021_may16_s2": q_2021_may16_s2,
};

export { PAPER_SETS };