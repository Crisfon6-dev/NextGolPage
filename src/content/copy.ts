import type { Lang } from "../config";

/**
 * Copy bilingüe (verbatim del handoff de diseño).
 * El mismo objeto se usa para render server-side (idioma default) y para el
 * swap client-side del toggle ES/EN (importado por el script de interacciones).
 */
export interface Copy {
  /** Per-locale SEO metadata (server-rendered into <head>). */
  meta: { title: string; description: string; ogAlt: string };
  nav: { services: string; who: string; process: string; faq: string; cta: string };
  hero: {
    eyebrow: string;
    badge: string;
    pre: string;
    accent: string;
    post: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    micro: string[];
  };
  trust: string;
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    s1: { title: string; desc: string; benefit: string };
    s2: { title: string; desc: string };
    s3: { title: string; desc: string };
    s4: { title: string; desc: string };
    s5: { title: string; desc: string };
  };
  who: {
    eyebrow: string;
    title: string;
    laneA: { tag: string; title: string; text: string; bullets: string[] };
    laneB: { tag: string; title: string; text: string; bullets: string[] };
  };
  diff: {
    eyebrow: string;
    title: string;
    d1: { title: string; text: string };
    d2: { title: string; text: string };
    d3: { title: string; text: string };
    d4: { title: string; text: string };
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; t: string; d: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  /** Risk-reversal microcopy shown under primary CTAs. */
  ctaNote: string;
  social: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  final: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    community: string;
    legal: string;
  };
}

export const copy: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "NextGol — Tu equipo de tecnología | Software, IA y Automatización",
      description:
        "Construimos, automatizamos e integramos el software que tu negocio necesita para crecer. Ingeniería senior y bilingüe, enfocada en resultados. Llamada gratis.",
      ogAlt: "NextGol — tu equipo de tecnología: software, IA y automatización.",
    },
    nav: { services: "Servicios", who: "Para quién", process: "Proceso", faq: "Preguntas", cta: "Agendar llamada" },
    hero: {
      eyebrow: "Software · IA · Automatización",
      badge: "Miembros de TOP CoNNecT",
      pre: "Tu ",
      accent: "equipo de tecnología",
      post: ", sin tener que contratarlo",
      subhead:
        "Construimos, automatizamos e integramos el software que tu negocio necesita para crecer — para que tú te dediques a tu negocio, no a la parte técnica.",
      ctaPrimary: "Agendar llamada gratis",
      ctaSecondary: "Hablar por WhatsApp",
      micro: ["Diagnóstico gratis", "Ingeniería senior", "Bilingüe", "AWS"],
    },
    trust: "Construido con tecnología de nivel mundial",
    services: {
      eyebrow: "Lo que hacemos",
      title: "Un solo socio para toda tu tecnología",
      subtitle:
        "Desde tu sitio web hasta tu producto completo. Elige lo que necesitas hoy y crece con nosotros.",
      s1: {
        title: "Automatización con IA",
        desc: "Atención al cliente, agendamiento, seguimiento de leads y reportes. Menos trabajo manual, más tiempo para vender.",
        benefit: "Hasta 40–60% menos costos",
      },
      s2: { title: "Software a medida & Cloud", desc: "Apps web y móviles e infraestructura AWS, de principio a fin." },
      s3: { title: "Integraciones & Pagos", desc: "Conectamos tus herramientas y pasarelas de pago." },
      s4: { title: "Entrenamiento en IA", desc: "Capacitamos a tu equipo para multiplicar su productividad." },
      s5: { title: "Equipo para startups", desc: "Ingenieros dedicados o tu producto completo, llave en mano." },
    },
    who: {
      eyebrow: "Para quién",
      title: "Te entendemos, estés donde estés",
      laneA: {
        tag: "Dueños de negocio · PyME",
        title: "Tienes un negocio que quiere crecer",
        text: "Pierdes horas en procesos manuales, tu web no convierte o tus herramientas no se hablan entre sí. Te ayudamos a digitalizar, automatizar y vender más.",
        bullets: ["Web que convierte", "Automatización con IA", "Integraciones", "Soporte bilingüe"],
      },
      laneB: {
        tag: "Fundadores · Startups",
        title: "Tienes una idea o producto, pero no equipo técnico",
        text: "No quieres contratar ni gestionar ingenieros. Construimos tu producto o te damos un equipo dedicado, para que te enfoques en crecer.",
        bullets: ["Producto (MVP → escala)", "Equipo dedicado", "Dirección técnica", "AWS y buenas prácticas"],
      },
    },
    diff: {
      eyebrow: "Por qué NextGol",
      title: "Ni freelancer suelto, ni agencia fría",
      d1: { title: "Ingeniería senior real", text: "Backend, cloud, datos e IA — no solo páginas bonitas." },
      d2: { title: "Enfocados en tu negocio", text: "Medimos en resultados: menos costos, más ventas, menos trabajo manual." },
      d3: { title: "Cercanía y bilingüe", text: "Hablamos tu idioma (ES/EN) y somos parte de tu comunidad." },
      d4: { title: "Flexible y a tu medida", text: "Desde un proyecto puntual hasta tu departamento de tecnología completo." },
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Empezar es simple",
      steps: [
        { n: "1", t: "Llamada de diagnóstico", d: "Cuéntanos tu negocio y tu reto. Gratis y sin compromiso." },
        { n: "2", t: "Propuesta a tu medida", d: "Te entregamos un plan claro con alcance, tiempos y precio." },
        { n: "3", t: "Construimos y crecemos", d: "Ejecutamos, entregamos y te acompañamos para escalar." },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que sueles preguntarnos",
      subtitle: "Respuestas claras antes de la llamada. ¿Te queda otra duda? Escríbenos.",
      items: [
        {
          q: "¿Qué hace NextGol exactamente?",
          a: "Somos tu equipo de tecnología externo. Construimos software a medida, automatizamos procesos con IA, integramos tus herramientas y pasarelas de pago, y montamos infraestructura en la nube (AWS) — de principio a fin, para que tú te dediques a tu negocio.",
        },
        {
          q: "¿Cuánto cuesta trabajar con ustedes?",
          a: "Cada proyecto se cotiza a medida según su alcance. Trabajamos por proyectos puntuales y también con planes mensuales (retainer) para acompañamiento continuo o un equipo dedicado. En la llamada de diagnóstico gratuita definimos alcance, tiempos y precio claros.",
        },
        {
          q: "¿Trabajan en inglés y en español?",
          a: "Sí, somos completamente bilingües (ES/EN). Hablamos tu idioma y el de tus clientes, sin barreras de comunicación ni malentendidos técnicos.",
        },
        {
          q: "¿Necesito saber de tecnología para trabajar con ustedes?",
          a: "Para nada. Tú pones el conocimiento de tu negocio y nosotros lo traducimos a tecnología. Te explicamos todo en lenguaje claro y medimos el éxito en resultados: menos costos, más ventas y menos trabajo manual.",
        },
        {
          q: "¿Cómo me puede ayudar la IA en mi negocio?",
          a: "La IA automatiza tareas repetitivas: atención al cliente, agendamiento, seguimiento de leads y reportes. Negocios que la adoptan suelen reducir entre 40 % y 60 % sus costos operativos y manejar mucho más volumen sin contratar proporcionalmente.",
        },
        {
          q: "¿Cómo empezamos?",
          a: "Agenda una llamada de diagnóstico gratuita de 15 minutos. Entendemos tu reto, te damos una propuesta a tu medida y, si avanzamos, construimos y te acompañamos para escalar. Sin compromiso.",
        },
      ],
    },
    ctaNote: "Gratis · 15 min · Sin compromiso",
    social: {
      eyebrow: "Lo que dicen",
      title: "Negocios que ya dieron el salto",
      subtitle: "Resultados reales de quienes confiaron en nosotros.",
    },
    final: {
      title: "¿Listo para tu próximo gol?",
      subtitle:
        "Agenda una llamada gratis de 15 minutos. Te diremos exactamente cómo la tecnología puede hacer crecer tu negocio.",
      ctaPrimary: "Agendar llamada gratis",
      ctaSecondary: "Escríbenos por WhatsApp",
    },
    footer: {
      tagline: "Tu equipo de tecnología. Software, IA y automatización para crecer.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      community: "Orgullosos miembros de TOP CoNNecT",
      legal: "© 2026 NextGol. Todos los derechos reservados.",
    },
  },
  en: {
    meta: {
      title: "NextGol — Your tech team | Software, AI & Automation",
      description:
        "We build, automate, and integrate the software your business needs to grow. Senior, bilingual engineering focused on results. Book a free call.",
      ogAlt: "NextGol — your tech team: software, AI, and automation.",
    },
    nav: { services: "Services", who: "Who it's for", process: "Process", faq: "FAQ", cta: "Book a call" },
    hero: {
      eyebrow: "Software · AI · Automation",
      badge: "Members of TOP CoNNecT",
      pre: "Your ",
      accent: "tech team",
      post: ", without the hire",
      subhead:
        "We build, automate, and integrate the software your business needs to grow — so you can focus on your business, not the tech.",
      ctaPrimary: "Book a free call",
      ctaSecondary: "Chat on WhatsApp",
      micro: ["Free diagnosis", "Senior engineering", "Bilingual", "AWS"],
    },
    trust: "Built with world-class technology",
    services: {
      eyebrow: "What we do",
      title: "One partner for all your tech",
      subtitle:
        "From your website to your full product. Start with what you need today and grow with us.",
      s1: {
        title: "AI Automation",
        desc: "Customer support, scheduling, lead follow-up, and reporting. Less manual work, more time to sell.",
        benefit: "Up to 40–60% lower costs",
      },
      s2: { title: "Custom Software & Cloud", desc: "Web & mobile apps and AWS infrastructure, end to end." },
      s3: { title: "Integrations & Payments", desc: "We connect your tools and payment gateways." },
      s4: { title: "AI Team Training", desc: "We train your team to multiply their productivity." },
      s5: { title: "Tech team for startups", desc: "Dedicated engineers or your full product, turnkey." },
    },
    who: {
      eyebrow: "Who it's for",
      title: "We get you, wherever you are",
      laneA: {
        tag: "Business owners · SMB",
        title: "You run a business that wants to grow",
        text: "You lose hours on manual work, your site doesn't convert, or your tools don't talk to each other. We help you digitize, automate, and sell more.",
        bullets: ["Converting website", "AI automation", "Integrations", "Bilingual support"],
      },
      laneB: {
        tag: "Founders · Startups",
        title: "You have an idea or product, but no tech team",
        text: "You don't want to hire or manage engineers. We build your product or give you a dedicated team, so you can focus on growing.",
        bullets: ["Product (MVP → scale)", "Dedicated team", "Tech leadership", "AWS & best practices"],
      },
    },
    diff: {
      eyebrow: "Why NextGol",
      title: "Not a random freelancer, not a cold agency",
      d1: { title: "Real senior engineering", text: "Backend, cloud, data, and AI — not just pretty pages." },
      d2: { title: "Focused on your business", text: "We measure in results: lower costs, more sales, less manual work." },
      d3: { title: "Close & bilingual", text: "We speak your language (EN/ES) and we're part of your community." },
      d4: { title: "Flexible & tailored", text: "From a single project to your entire tech department." },
    },
    process: {
      eyebrow: "How we work",
      title: "Getting started is simple",
      steps: [
        { n: "1", t: "Diagnosis call", d: "Tell us about your business and your challenge. Free, no strings attached." },
        { n: "2", t: "Tailored proposal", d: "We deliver a clear plan with scope, timeline, and price." },
        { n: "3", t: "We build & grow", d: "We execute, deliver, and stick around to help you scale." },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What people usually ask us",
      subtitle: "Clear answers before the call. Still have a question? Just reach out.",
      items: [
        {
          q: "What does NextGol actually do?",
          a: "We're your external tech team. We build custom software, automate processes with AI, integrate your tools and payment gateways, and set up cloud infrastructure (AWS) — end to end, so you can focus on your business.",
        },
        {
          q: "How much does it cost to work with you?",
          a: "Every project is quoted to fit its scope. We work on one-off projects and also on monthly plans (retainers) for ongoing support or a dedicated team. On the free diagnosis call we define clear scope, timeline, and price.",
        },
        {
          q: "Do you work in English and Spanish?",
          a: "Yes, we're fully bilingual (EN/ES). We speak your language and your customers' — no communication barriers, no technical misunderstandings.",
        },
        {
          q: "Do I need technical knowledge to work with you?",
          a: "Not at all. You bring the business knowledge and we translate it into technology. We explain everything in plain language and measure success in results: lower costs, more sales, and less manual work.",
        },
        {
          q: "How can AI actually help my business?",
          a: "AI automates repetitive tasks: customer support, scheduling, lead follow-up, and reporting. Businesses that adopt it typically cut operating costs by 40–60% and handle far more volume without hiring proportionally.",
        },
        {
          q: "How do we get started?",
          a: "Book a free 15-minute diagnosis call. We understand your challenge, give you a tailored proposal, and if we move forward, we build and stick around to help you scale. No strings attached.",
        },
      ],
    },
    ctaNote: "Free · 15 min · No commitment",
    social: {
      eyebrow: "What they say",
      title: "Businesses that already made the leap",
      subtitle: "Real results from the people who trusted us.",
    },
    final: {
      title: "Ready for your next goal?",
      subtitle:
        "Book a free 15-minute call. We'll tell you exactly how tech can grow your business.",
      ctaPrimary: "Book a free call",
      ctaSecondary: "Message us on WhatsApp",
    },
    footer: {
      tagline: "Your tech team. Software, AI, and automation to grow.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      community: "Proud members of TOP CoNNecT",
      legal: "© 2026 NextGol. All rights reserved.",
    },
  },
};
