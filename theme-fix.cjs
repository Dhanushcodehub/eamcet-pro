const fs = require('fs');

let code = fs.readFileSync('src/App.jsx', 'utf-8');

const reps = [
  // Backgrounds
  [/#0a0e1a|#080c18/g, '#f8faff'],
  [/#0[56]0[89]1[02]a/g, '#f8faff'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.025?\)/g, '#ffffff'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.03\)/g, '#ffffff'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.04\)/g, '#ffffff'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.05\)/g, '#ffffff'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.06\)/g, '#e2e8f0'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.07\)/g, '#e2e8f0'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.08\)/g, '#e2e8f0'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.12?\)/g, '#f1f5f9'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.15\)/g, '#e2e8f0'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.2\)/g, 'rgba(37,99,235,0.1)'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.32?\)/g, '#64748b'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.35?\)/g, '#64748b'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.4\)/g, '#64748b'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.65?\)/g, '#475569'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.75\)/g, '#334155'],
  [/rgba\(\d{1,3},\d{1,3},\d{1,3},0\.85?\)/g, '#0f172a'],
  
  // Specific border color cases
  [/border: `1px solid \$\{sc\}30`/g, 'border: `1px solid ${sc}55`'],
  [/background: `\$\{sc\}18`/g, 'background: `${sc}18`'],
  
  // Hardcoded whites and darks
  [/color: '#fff'/gi, 'color: \"#0f172a\"'],
  [/color: \"#fff\"/gi, 'color: \"#0f172a\"'],
  [/#fff/g, '#0f172a'], // Some texts use #fff exactly without color: 
  [/rgba\(255,[ ]?255,[ ]?255,[ ]?1\)/g, '#0f172a'],
  
  [/#6366f1/gi, '#2563eb'],
  [/#8b5cf6/gi, '#1d4ed8'],
  [/#a5b4fc/g, '#3b82f6'],
];

reps.forEach(([re, repl]) => {
  code = code.replace(re, repl);
});

// Since we mapped "#fff" to dark blue "#0f172a", many backgrounds might have been broken if they explicitly used #fff.
// We should fix them. Wait, if #fff was replaced with #0f172a, let's fix it backward where it's a background
code = code.replace(/background: "#0f172a"/g, 'background: "#ffffff"');
code = code.replace(/background: '#0f172a'/g, 'background: "#ffffff"');
// Specifically fix the main container wrapping everything
code = code.replace(/background: "#0a0e1a"/g, 'background: "#f0f4ff"'); // just in case

// Fix 'boxShadow' to use light mode shadows
code = code.replace(/0 0 6px rgba\(\d+,\d+,\d+,\d+\.?\d*\)/g, '0 1px 3px rgba(0,0,0,0.05)');
code = code.replace(/0 0 20px rgba\(37,99,235,0\.4\)/g, '0 4px 12px rgba(37,99,235,0.15)');

// specific fix for inputs and buttons text
code = code.replace(/color: "#0f172a", background: "#ffffff"/g, 'color: "#0f172a", background: "#f8faff"');

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx converted to white/blue theme!');
