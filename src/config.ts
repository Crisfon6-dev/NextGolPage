export type Lang = "es" | "en";

/**
 * Configuración central de la landing.
 *
 * Pendientes de Cristhian (ver openspec/changes/nextgol-topconnect-mapa/tasks.md, grupo 0):
 *   - LINKEDIN_URL      → vacío: los links a LinkedIn se ocultan hasta que haya URL
 *   - CALENDLY_URL      → evento de 30 min
 *   - UMAMI_WEBSITE_ID  → vacío: Base.astro no emite el script de analytics
 */
export const CONFIG = {
  // TODO(0.2): swap to the 30-min event URL (calendly.com/crisfon6/30min once it exists).
  // Never mention the duration in UI copy until then.
  CALENDLY_URL: "https://calendly.com/crisfon6/15min",
  // Pending (0.1). Empty = every LinkedIn link is hidden.
  LINKEDIN_URL: "",
  INSTAGRAM_URL: "https://instagram.com/nextgol.tech",
  EMAIL: "disruptivecrisfon6@gmail.com",
  // Pending (0.7). Empty = no analytics script.
  UMAMI_WEBSITE_ID: "",
  DEFAULT_LANG: "es" as Lang,
  SITE_URL: "https://nextgol.com",
} as const;

/* ---------------- WhatsApp MAPA (primary CTA) ---------------- */

export const WA_NUMBER = "573219265622";

export type Source = "topconnect" | "linkedin" | "email" | "direct";

/** Texto precargado por fuente: el origen llega escrito dentro del mensaje. */
export const MESSAGES: Record<Source, string> = {
  topconnect: "Hola, vengo de TopConnect. Quiero mi MAPA",
  linkedin: "Hola, vengo de LinkedIn. Quiero mi MAPA",
  email: "Hola, vengo por correo. Quiero mi MAPA",
  direct: "Hola, vi la página de NextGol. Quiero mi MAPA",
};

/** Cualquier `utm_source` desconocido o vacío cae en "direct". */
export function normalizeSource(raw: string | null | undefined): Source {
  const v = (raw ?? "").trim().toLowerCase();
  return v === "topconnect" || v === "linkedin" || v === "email" ? v : "direct";
}

export function waLink(source: Source): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(MESSAGES[source])}`;
}

export const LINKS = {
  /** SSR default = tráfico de TopConnect; interactions.ts lo reescribe según utm_source. */
  whatsapp: waLink("topconnect"),
  booking: CONFIG.CALENDLY_URL,
  /** "" cuando está pendiente → ocultar. */
  linkedin: CONFIG.LINKEDIN_URL,
  instagram: CONFIG.INSTAGRAM_URL,
} as const;
