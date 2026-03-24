const fs = require('fs');
const path = require('path');

const CLAUDE_KEY    = process.env.CLAUDE_KEY    || '';
const CRUSTDATA_KEY = process.env.CRUSTDATA_KEY || '';

if (!CLAUDE_KEY)    console.warn('[build] Warning: CLAUDE_KEY env var not set');
if (!CRUSTDATA_KEY) console.warn('[build] Warning: CRUSTDATA_KEY env var not set');

const src  = path.join(__dirname, 'public', 'index.html');
const dest = path.join(__dirname, 'dist',   'index.html');

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });

let html = fs.readFileSync(src, 'utf8');

html = html.replace(/__CLAUDE_KEY__/g,    JSON.stringify(CLAUDE_KEY));
html = html.replace(/__CRUSTDATA_KEY__/g, JSON.stringify(CRUSTDATA_KEY));

fs.writeFileSync(dest, html, 'utf8');
console.log('[build] dist/index.html written (' + html.length + ' bytes)');
