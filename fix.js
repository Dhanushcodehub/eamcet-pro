const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace escaped backticks and dollar signs that were in the original file
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('src/App.jsx', code);
console.log('Fixed syntax errors in src/App.jsx');
