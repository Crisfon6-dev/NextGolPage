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

  <!-- logo mark: same glyph as the site nav (public/logo-mark.svg, 64-unit grid scaled to 64px) -->
  <g transform="translate(80,64)">
    <g transform="scale(1)">
      <rect width="64" height="64" rx="18" fill="url(#brand)"/>
      <g fill="none" stroke="#06120D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 46V20"/><path d="M20 20 42 46"/><path d="M42 46V18"/>
      </g>
      <circle cx="42" cy="10" r="4.6" fill="#06120D"/>
    </g>
  </g>
  <text x="160" y="110" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="46" font-weight="700" letter-spacing="-1">
    <tspan fill="#F5F7FA">Next</tspan><tspan fill="#00E5A0">Gol</tspan>
  </text>

  <!-- headline -->
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-2.5" fill="#F5F7FA">
    <tspan x="80" y="262">Agentes de IA</tspan>
    <tspan x="80" y="356">para tu negocio</tspan>
  </text>

  <!-- slogan -->
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="34" font-weight="400" fill="#A7B0BE">
    <tspan x="82" y="426">ChatGPT te dice cómo hacerlo;</tspan>
    <tspan x="82" y="470">un agente de IA lo hace por ti.</tspan>
  </text>

  <!-- CTA pill + community -->
  <g transform="translate(80,516)">
    <rect width="330" height="64" rx="32" fill="url(#brand)"/>
    <text x="165" y="42" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" font-weight="700" fill="#06120D">Pide tu Mapa gratis</text>
  </g>
  <g transform="translate(446,516)">
    <circle cx="12" cy="32" r="6" fill="#00E5A0"/>
    <text x="30" y="41" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#A7B0BE">Miembro de TopConnect</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
