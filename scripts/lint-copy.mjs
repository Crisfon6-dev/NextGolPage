// Content lint (design D9): hard copy rules enforced on the BUILT output.
// Usage: npm run build && npm run lint:copy
// Scans dist/index.html (+ privacidad and the recurso page, and the recurso .md) and public/llms.txt.
import { existsSync, readFileSync } from "node:fs";

// Names that must never be published live in a gitignored file (this repo is public):
// [{ "name": "…", "pattern": "…", "flags": "gi" }]. Missing file = warn, not silently pass.
const PRIVATE_RULES = "scripts/lint-copy.private.json";
function privateRules() {
  if (!existsSync(PRIVATE_RULES)) {
    console.warn(`⚠ ${PRIVATE_RULES} no existe: se omiten los nombres prohibidos privados.`);
    return [];
  }
  return JSON.parse(readFileSync(PRIVATE_RULES, "utf8")).map(({ name, pattern, flags }) => ({
    name,
    re: new RegExp(pattern, flags ?? "gi"),
  }));
}

const RULES = [
  { name: "agente(s) sin «de IA»", re: /\bagentes?\b(?! de IA)/gi },
  ...[
    "no se equivoca",
    "reemplaza a tu equipo",
    "automatiza todo",
    "copiar y pegar",
    "nearshore",
    "fractional cto",
    "external technology team",
    "equipo de tecnología",
    "sin tener que contratarlo",
  ].map((p) => ({ name: `frase prohibida «${p}»`, re: new RegExp(p, "gi") })),
  ...privateRules(),
  { name: "freelancer", re: /freelancer/gi },
  { name: "15 minutos", re: /15\s?min|15-minute/gi },
  { name: "porcentaje", re: /\d\s?%(?![0-9A-Fa-f]{2})/g }, // (?!hex) skips URL-encoded bytes like %C3%A1
  { name: "moneda / precio", re: /\$\s?\d|USD/g },
  { name: "voseo «Escribinos»", re: /Escribinos/gi },
];

/** HTML → scannable text: drop <script>/<style> (keep ld+json), keep meta content, strip tags. */
function htmlToText(html) {
  const keep = [];
  html = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, (_, body) => {
    keep.push(body);
    return " ";
  });
  html = html.replace(/<meta\b[^>]*\bcontent=("([^"]*)"|'([^']*)')[^>]*>/gi, (_, __, a, b) => {
    keep.push(a ?? b ?? "");
    return " ";
  });
  html = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  return [html, ...keep].join(" ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ");
}

const targets = [
  { file: "dist/index.html", html: true },
  { file: "dist/privacidad/index.html", html: true, optional: true },
  { file: "dist/recursos/tu-negocio-en-numeros/index.html", html: true },
  { file: "public/llms.txt", html: false },
  // Didactic examples like "de 20% a 30%" are not NextGol figures: skip ONLY the percentage rule.
  { file: "public/recursos/tu-negocio-en-numeros.md", html: false, skip: ["porcentaje"] },
];

let failures = 0;
let scanned = 0;
for (const { file, html, optional, skip = [] } of targets) {
  if (!existsSync(file)) {
    if (optional) continue;
    console.error(`✗ falta ${file} (¿corriste "npm run build"?)`);
    process.exit(1);
  }
  const raw = readFileSync(file, "utf8");
  const text = html ? htmlToText(raw) : raw.replace(/\s+/g, " ");
  scanned++;
  for (const { name, re } of RULES) {
    if (skip.includes(name)) continue;
    for (const m of text.matchAll(re)) {
      failures++;
      const ctx = text.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40);
      console.error(`✗ ${file} — ${name}: «${m[0]}» … ${ctx} …`);
    }
  }
}

if (failures) {
  console.error(`\nlint:copy FALLÓ — ${failures} problema(s) en ${scanned} archivo(s).`);
  process.exit(1);
}
console.log(`lint:copy OK — ${scanned} archivo(s) sin problemas.`);
