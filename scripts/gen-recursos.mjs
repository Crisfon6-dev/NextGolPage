/**
 * Builds the downloadable resource files from a single source:
 *   src/content/recursos/tu-negocio-en-numeros.md
 *     → public/recursos/tu-negocio-en-numeros.md
 *     → public/recursos/tu-negocio-en-numeros.zip  (tu-negocio-en-numeros/SKILL.md)
 *
 *   npm run gen:recursos
 *
 * Both outputs are committed; the Vercel build does not run this script.
 */
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SLUG = "tu-negocio-en-numeros";
const src = join(root, "src/content/recursos", `${SLUG}.md`);
const outDir = join(root, "public/recursos");
const outMd = join(outDir, `${SLUG}.md`);
const outZip = join(outDir, `${SLUG}.zip`);

function fail(msg) {
  console.error(`✗ gen-recursos: ${msg}`);
  process.exit(1);
}

// --- Validate frontmatter (skill rules for claude.ai) ---
const text = readFileSync(src, "utf8");
const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!fm) fail("falta el frontmatter YAML al inicio del archivo");
const field = (key) => fm[1].match(new RegExp(`^${key}:\\s*(.*)$`, "m"))?.[1].trim() ?? "";
const name = field("name");
const description = field("description");

if (!/^[a-z0-9-]{1,64}$/.test(name)) fail(`name «${name}» no cumple ^[a-z0-9-]{1,64}$`);
if (/claude|anthropic/i.test(name)) fail(`name «${name}» no puede contener «claude» ni «anthropic»`);
if (name !== SLUG) fail(`name «${name}» debe ser «${SLUG}»`);
if (description.length < 1 || description.length > 200) {
  fail(`description tiene ${description.length} caracteres (debe tener entre 1 y 200)`);
}

// --- Copy the .md ---
mkdirSync(outDir, { recursive: true });
copyFileSync(src, outMd);

// --- Build the zip from a temp dir: root contains ONLY <slug>/SKILL.md ---
if (existsSync(outZip)) rmSync(outZip);
const tmp = mkdtempSync(join(tmpdir(), "recurso-"));
try {
  mkdirSync(join(tmp, SLUG));
  copyFileSync(src, join(tmp, SLUG, "SKILL.md"));
  execFileSync("zip", ["-X", "-D", "-r", outZip, SLUG], { cwd: tmp, stdio: "pipe" });
} catch (e) {
  fail(`no se pudo crear el zip: ${e.message}`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(`OK name=${name} description=${description.length} chars`);
console.log("Wrote", outMd);
console.log("Wrote", outZip);
