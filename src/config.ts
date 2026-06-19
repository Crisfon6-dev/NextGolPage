export type Lang = "es" | "en";

/**
 * Configuración central de la landing.
 *
 * ⚠️ PENDIENTE — reemplazar antes de lanzar:
 *   - CALENDLY_URL  → link real de Calendly/Cal.com (destino de todos los CTA primarios)
 *   - WHATSAPP_URL  → https://wa.me/<número con código de país> (CTA secundarios)
 *   - EMAIL         → confirmar dirección de contacto
 */
export const CONFIG = {
  CALENDLY_URL: "https://calendly.com/PENDIENTE",
  WHATSAPP_URL: "https://wa.me/573219265622",
  EMAIL: "hola@nextgol.com",
  DEFAULT_LANG: "es" as Lang,
  SITE_URL: "https://nextgol.com",
} as const;

/**
 * Resolved action links. While CALENDLY_URL / WHATSAPP_URL are PENDIENTE, every
 * CTA falls back to a working `mailto:` instead of shipping a dead link — a
 * conversion safeguard (a dead primary CTA = 0 conversions). Replace the
 * placeholders in CONFIG above and the fallbacks disappear automatically.
 */
const isPlaceholder = (u: string) => u.includes("PENDIENTE");

export const LINKS = {
  booking: isPlaceholder(CONFIG.CALENDLY_URL) ? `mailto:${CONFIG.EMAIL}` : CONFIG.CALENDLY_URL,
  whatsapp: isPlaceholder(CONFIG.WHATSAPP_URL) ? `mailto:${CONFIG.EMAIL}` : CONFIG.WHATSAPP_URL,
  hasCalendly: !isPlaceholder(CONFIG.CALENDLY_URL),
  hasWhatsApp: !isPlaceholder(CONFIG.WHATSAPP_URL),
} as const;

/**
 * Social proof. Add real client testimonials here and the Social Proof section
 * renders automatically. Left EMPTY on purpose — fabricated testimonials are
 * dishonest and legally risky. Each quote is bilingual.
 */
export interface Testimonial {
  quote: { es: string; en: string };
  author: string;
  role: { es: string; en: string };
}

export const TESTIMONIALS: Testimonial[] = [];

/** Stack mostrado en la Trust bar. */
export const STACK = [
  "AWS",
  "Python",
  "FastAPI",
  "Node.js",
  "React",
  "Angular",
  "Svelte",
  "Flutter",
  "PostgreSQL",
  "Docker",
] as const;
