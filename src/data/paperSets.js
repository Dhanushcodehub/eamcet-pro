// ============================================================
//  PAPER_SETS — registry of all available exam papers
//  Each entry links to a question file via its `id`.
//  The `id` must match the filename in questions/ (e.g. "2025_may2_s1" → questions/2025_may2_s1.js)
//  Set `available: false` for shifts whose questions aren't added yet.
// ============================================================

export const PAPER_SETS = [

    // ── 2025 Papers ──────────────────────────────────────────
    {
        id: "2025_may2_s1",
        year: "2025",
        label: "TG EAPCET 2025 – May 2nd Morning Shift",
        questions: 160,
        duration: 180,
        subjects: ["Physics", "Chemistry", "Mathematics"],
        shift: "Morning",
        date: "2025-05-02",
        available: true,
    },
    {
        id: "2025_may2_s2",
        year: "2025",
        label: "TG EAPCET 2025 – May 2nd Evening Shift",
        questions: 160,
        duration: 180,
        subjects: ["Physics", "Chemistry", "Mathematics"],
        shift: "Evening",
        date: "2025-05-02",
        available: false,
    },
    {
        id: "2025_may3_s2",
        year: "2025",
        label: "TG EAPCET 2025 – May 3rd Evening Shift",
        questions: 160,
        duration: 180,
        subjects: ["Physics", "Chemistry", "Mathematics"],
        shift: "Evening",
        date: "2025-05-03",
        available: true,
    },
    {
        id: "2025_may4_s1",
        year: "2025",
        label: "TG EAPCET 2025 – May 4th Morning Shift",
        questions: 160,
        duration: 180,
        subjects: ["Physics", "Chemistry", "Mathematics"],
        shift: "Morning",
        date: "2025-05-04",
        available: false,
    },

    // ── 2024 Papers ──────────────────────────────────────────
    // Add entries here when questions are ready, e.g.:
    // {
    //   id: "2024_may7_s1",
    //   year: "2024",
    //   label: "TG EAPCET 2024 – May 7th Morning Shift",
    //   questions: 160,
    //   duration: 180,
    //   subjects: ["Physics", "Chemistry", "Mathematics"],
    //   shift: "Morning",
    //   date: "2024-05-07",
    //   available: false,
    // },

    // ── 2023 Papers ──────────────────────────────────────────
    // {
    //   id: "2023_may11_s1",
    //   year: "2023",
    //   label: "TG EAMCET 2023 – May 11th Morning Shift",
    //   questions: 160,
    //   duration: 180,
    //   subjects: ["Physics", "Chemistry", "Mathematics"],
    //   shift: "Morning",
    //   date: "2023-05-11",
    //   available: false,
    // },
];