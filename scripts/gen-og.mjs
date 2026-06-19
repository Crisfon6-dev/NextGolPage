/**
 * Generates the 1200×630 Open Graph image (public/og-image.png) from an inline
 * SVG, rasterized with sharp. Run once (or whenever the brand/copy changes):
 *
 *   node scripts/gen-og.mjs
 *
 * Kept out of the build pipeline so the committed PNG is the source of truth and
 * sharp stays a dev-only, on-demand dependency.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00E5A0"/>
      <stop offset="1" stop-color="#3B82F6"/>
    </linearGradient>
    <radialGradient id="glowA" cx="14%" cy="0%" r="60%">
      <stop offset="0" stop-color="#00E5A0" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#00E5A0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="92%" cy="8%" r="55%">
      <stop offset="0" stop-color="#3B82F6" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0A0E14"/>
  <rect width="1200" height="630" fill="url(#glowA)"/>
  <rect width="1200" height="630" fill="url(#glowB)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#brand)"/>

  <!-- logo mark -->
  <g transform="translate(96,96)">
    <rect width="96" height="96" rx="24" fill="url(#brand)"/>
    <g fill="none" stroke="#06120D" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" transform="translate(24,24) scale(2)">
      <path d="M5 19V7l7-4 7 4v12"/>
      <path d="m8 13 3 3 5-6"/>
    </g>
  </g>

  <!-- wordmark -->
  <text x="96" y="320" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="116" font-weight="700" letter-spacing="-3">
    <tspan fill="#F5F7FA">Next</tspan><tspan fill="#00E5A0">Gol</tspan>
  </text>

  <!-- tagline -->
  <text x="98" y="400" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#F5F7FA">Tu equipo de tecnología</text>
  <text x="98" y="462" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="33" font-weight="400" fill="#A7B0BE">Software, IA y Automatización · Senior · Bilingüe · AWS</text>

  <!-- community chip -->
  <g transform="translate(98,520)">
    <rect width="360" height="56" rx="28" fill="#11161F" stroke="#1F2A38"/>
    <circle cx="34" cy="28" r="6" fill="#00E5A0"/>
    <text x="58" y="36" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#A7B0BE">Miembros de TOP CoNNecT</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
