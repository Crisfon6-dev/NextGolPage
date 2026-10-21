/**
 * Generates the QR for the TopConnect event (public/qr/topconnect-okr.png).
 * It encodes the SHORT link, never the long one, so the destination can change
 * in vercel.json without reprinting.
 *
 *   npm run gen:qr
 */
import QRCode from "qrcode";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "public/qr/topconnect-okr.png");
mkdirSync(dirname(out), { recursive: true });

await QRCode.toFile(out, "https://nextgol.com/r/okr", {
  width: 1200,
  margin: 4,
  errorCorrectionLevel: "M",
  color: { dark: "#000000", light: "#FFFFFF" },
});
console.log("Wrote", out);
