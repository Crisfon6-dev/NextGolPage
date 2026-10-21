import type { Lang } from "../config";

/**
 * Copy de la landing. Fase 1 = solo español: `copy.es` es la única fuente de
 * verdad (textos de docs/audit-2026-10.md §3). Reglas duras: siempre "agente de
 * IA", sin cifras / precios / clientes inventados, trato de "tú". Se verifican
 * con `npm run lint:copy`.
 */
export interface Copy {
  /** Per-locale SEO metadata (server-rendered into <head>). */
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    process: string;
    offer: string;
    cases: string;
    founder: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    badge: string;
    pre: string;
    accent: string;
    post: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    audience: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; t: string; d: string }[];
  };
  offer: {
    eyebrow: string;
    title: string;
    text: string;
    items: { t: string; d: string }[];
    closing: string;
    scarcity: string;
    topconnect: string;
    cta: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Max 3. Framed as possibility, never as client history. */
    items: { title: string; text: string }[];
  };
  founder: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    text: string;
    proofTitle: string;
    linkedin: string;
    instagram: string;
  };
  /** Bloque de prueba del fundador, aislado (decisión 0.5: "nosotros" vs 3ª persona). */
  proof: string[];
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  /** Risk-reversal microcopy shown under primary CTAs. */
  ctaNote: string;
  final: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaBooking: string;
    ctaLinkedin: string;
    ctaEmail: string;
    note: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    writeUs: string;
    privacy: string;
    community: string;
    legal: string;
  };
}

/**
 * Prueba honesta (banco A6). Constante aparte para poder pasarla a tercera
 * persona ("Cristhian construyó…") en una sola edición. Nunca nombra la fintech.
 */
const proofEs: string[] = [
  "Construimos agentes de IA que consultan bases de datos en lenguaje normal, y comparamos sus cifras con la fuente hasta que cuadraron exacto.",
  "Los atacamos a propósito con más de 30 formas distintas de intentar sacar datos, hasta que ninguna sacó nada.",
  "Usamos un panel de revisión: dos revisores de IA, por separado, revisan cada entrega; un tercero junta lo encontrado y se corrige solo lo confirmado.",
  "Una regla que no cambia: el agente de IA propone y una persona de tu equipo aprueba lo importante.",
];

const es: Copy = {
  meta: {
    title: "NextGol: agentes de IA para tu negocio | Pide tu Mapa gratis",
    description:
      "Consultora de software e innovación con IA. Encontramos qué proceso de tu negocio conviene pasarle a un agente de IA, lo construimos con tu equipo y lo dejamos funcionando. Diagnóstico gratis de 30 min.",
    ogAlt: "NextGol: agentes de IA para tu negocio. Pide tu Mapa gratis.",
  },
  nav: {
    process: "Cómo funciona",
    offer: "El Mapa",
    cases: "Casos",
    founder: "Quién está detrás",
    faq: "Preguntas",
    cta: "Agendar llamada",
  },
  hero: {
    eyebrow: "Consultora de software e innovación con IA",
    badge: "Miembro de TopConnect",
    pre: "Agentes de IA que hacen el trabajo de tu negocio. ",
    accent: "Tú apruebas lo importante.",
    post: "",
    subhead:
      "ChatGPT te dice cómo hacerlo; un agente de IA lo hace por ti. Encontramos qué proceso de tu negocio conviene pasarle primero, lo construimos con tu equipo y lo dejamos funcionando.",
    ctaPrimary: "Escribe MAPA por WhatsApp",
    ctaSecondary: "Prefiero agendar una llamada",
    audience:
      "Para dueños de negocio en seguros, impuestos, legal, bienes raíces y servicios, en EE. UU. y Latinoamérica.",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Tres pasos, sin humo",
    steps: [
      {
        n: "1",
        t: "Diagnóstico",
        d: "Hablamos 30 minutos por videollamada sobre cómo funciona tu negocio hoy. Te decimos qué proceso conviene pasarle primero a un agente de IA y, si ninguno vale la pena todavía, también te lo decimos.",
      },
      {
        n: "2",
        t: "Lo construimos con tu equipo",
        d: "Diseñamos el agente de IA con las personas que hacen ese trabajo todos los días. Lo probamos con casos reales tuyos antes de que toque a un solo cliente.",
      },
      {
        n: "3",
        t: "Lo ponemos a funcionar y lo ajustamos",
        d: "El agente de IA empieza a trabajar y tu equipo aprueba lo importante. Medimos, corregimos y lo ajustamos hasta que funciona como acordamos.",
      },
    ],
  },
  offer: {
    eyebrow: "Para empezar",
    title: "Mapa de tu primer agente de IA",
    text: "Una videollamada de 30 minutos y, en 48 horas, una página hecha para tu negocio con tres respuestas:",
    items: [
      {
        t: "Qué automatizar primero",
        d: "El proceso que más horas te quita y conviene pasarle a un agente de IA.",
      },
      {
        t: "Cómo se resolvería",
        d: "Qué hace el agente de IA, qué revisa tu equipo y qué aprueba una persona.",
      },
      {
        t: "Cuánto cuesta",
        d: "Un precio cerrado para ese proyecto, sin sorpresas.",
      },
    ],
    closing: "El diagnóstico es gratis y la página es tuya aunque no trabajes con nosotros.",
    scarcity: "Hacemos pocos Mapas por semana para poder dedicarle tiempo a cada uno.",
    topconnect: "Si vienes de TopConnect, los 3 primeros proyectos tienen precio de lanzamiento.",
    cta: "Escribe MAPA por WhatsApp",
  },
  useCases: {
    eyebrow: "Lo que podría hacer",
    title: "Qué puede hacer un agente de IA en tu negocio",
    subtitle:
      "Tres ejemplos de lo que haría un agente de IA en tu negocio. Son posibilidades que definimos contigo en el Mapa, no resultados de otros clientes.",
    items: [
      {
        title: "Lo urgente de cada mañana",
        text: "Cada mañana, un agente de IA revisaría tu correo, tu agenda y tus pendientes, y te dejaría listo qué atender primero. Tú solo decides.",
      },
      {
        title: "Pregúntale a tus números",
        text: "Le harías una pregunta en lenguaje normal, como «¿cuánto facturé este mes?», y un agente de IA consultaría tus datos y te daría la respuesta.",
      },
      {
        title: "Del mensaje al expediente listo",
        text: "Un cliente te escribe y un agente de IA recogería sus datos y documentos, armaría el expediente y te lo dejaría listo para revisar y aprobar.",
      },
    ],
  },
  founder: {
    eyebrow: "Quién está detrás",
    title: "Hablas con quien construye",
    name: "Cristhian Fonseca",
    role: "Fundador de NextGol",
    text: "NextGol lo fundó Cristhian Fonseca. Además de dirigir NextGol, trabaja en una fintech estadounidense con presencia en México y Colombia que facilita el acceso al crédito dentro de superapps de telecomunicaciones. Allí lleva funcionalidades de punta a punta, desde la idea hasta producción. Esa misma forma de trabajar es la que trae a NextGol: un equipo que diseña, construye y prueba, y que se queda hasta que la solución funciona.",
    proofTitle: "Cómo trabajamos con la información delicada",
    linkedin: "LinkedIn de Cristhian",
    instagram: "Instagram @nextgol.tech",
  },
  proof: proofEs,
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que suele preguntar un dueño de negocio",
    subtitle: "Respuestas claras antes de escribirnos.",
    items: [
      {
        q: "¿Qué es un agente de IA?",
        a: "Un programa que hace un proceso completo dentro de tu negocio: recibe el caso, busca lo que necesita en tus sistemas, hace los pasos y te lo deja listo para aprobar. ChatGPT te dice cómo hacerlo; un agente de IA lo hace por ti.",
      },
      {
        q: "¿Necesito saber de tecnología?",
        a: "No. Tú conoces tu negocio y nosotros nos encargamos de la parte técnica, con explicaciones en lenguaje claro.",
      },
      {
        q: "¿Qué pasa si el agente de IA se equivoca?",
        a: "Por eso trabaja con control: se prueba con casos tuyos antes de tocar a un cliente, y una persona de tu equipo aprueba lo importante.",
      },
      {
        q: "¿Mis datos están seguros?",
        a: "Trabajamos con el mínimo acceso necesario, en cuentas a nombre de tu negocio, y lo definimos contigo en el diagnóstico.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del proceso. Por eso el Mapa incluye un precio cerrado para tu caso antes de que decidas nada.",
      },
      {
        q: "¿En qué idioma trabajan?",
        a: "En español, y también en inglés si tu equipo o tus clientes lo necesitan.",
      },
    ],
  },
  ctaNote: "Diagnóstico gratis de 30 min · Cupos limitados por semana",
  final: {
    title: "¿Qué tarea te quita más horas a la semana?",
    subtitle:
      "Cuéntanos en 30 minutos. En 48 horas te enviamos el Mapa con qué automatizar primero, cómo y cuánto cuesta. Gratis, y es tuyo aunque no sigamos.",
    ctaPrimary: "Escribe MAPA por WhatsApp",
    ctaBooking: "Agendar llamada",
    ctaLinkedin: "LinkedIn de Cristhian",
    ctaEmail: "Escríbenos por correo",
    note: "Gratis · 30 min por videollamada · Cupos limitados por semana",
  },
  footer: {
    tagline: "Consultora de software e innovación con IA. Especialistas en agentes de IA.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    writeUs: "Escríbenos",
    privacy: "Privacidad",
    community: "Miembro de TopConnect",
    legal: "© 2026 NextGol. Todos los derechos reservados.",
  },
};

/**
 * EN: TODO fase 2. Hasta entonces `en` hereda todo el texto de `es` y solo se
 * sobreescribe lo que se traduzca en `enOverrides`. `/en/` no se publica
 * (302 → `/` en vercel.json), así que este contenido nunca se muestra.
 */
const enOverrides: Partial<Copy> = {}; // TODO fase 2

export const copy: Record<Lang, Copy> = {
  es,
  en: { ...es, ...enOverrides },
};
