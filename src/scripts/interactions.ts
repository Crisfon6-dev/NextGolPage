/**
 * Client-side enhancements. Language is now server-rendered per route (`/` ES,
 * `/en/` EN), so there is NO i18n swap here — only progressive UX niceties:
 * mobile menu, 3D tilt, and scroll reveals. All guarded by reduced-motion.
 */
const reduceMotion =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- Mobile menu ---------------- */

const nav = document.querySelector<HTMLElement>("[data-nav]");
const burger = document.querySelector<HTMLElement>("[data-nav-burger]");

function closeMenu(): void {
  if (!nav) return;
  nav.removeAttribute("data-menu-open");
  burger?.setAttribute("aria-expanded", "false");
}

function toggleMenu(): void {
  if (!nav) return;
  const open = nav.hasAttribute("data-menu-open");
  if (open) {
    closeMenu();
  } else {
    nav.setAttribute("data-menu-open", "");
    burger?.setAttribute("aria-expanded", "true");
  }
}

/* ---------------- 3D tilt ---------------- */

function initTilt(): void {
  if (reduceMotion) return;
  // Pointer-fine only: tilt is a hover affordance, pointless (and janky) on touch.
  if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    const max = parseFloat(card.getAttribute("data-tilt") || "6") || 6;
    let raf = 0;
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * max;
      const ry = (px - 0.5) * max;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
      });
    });
    card.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      card.style.transform = "";
    });
  });
}

/* ---------------- Scroll reveals (IntersectionObserver) ---------------- */

function initReveals(): void {
  const targets = document.querySelectorAll<HTMLElement>(".reveal");
  if (!targets.length) return;
  if (reduceMotion || typeof IntersectionObserver === "undefined") {
    // Progressive enhancement: leave content visible.
    return;
  }
  document.documentElement.classList.add("js-reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
  );
  targets.forEach((el) => observer.observe(el));
}

/* ---------------- Sticky conversion bar reveal ---------------- */

function initConvBar(): void {
  const bar = document.querySelector<HTMLElement>("[data-conv-bar]");
  const hero = document.getElementById("top");
  if (!bar || !hero || typeof IntersectionObserver === "undefined") return;

  // Reveal the bar once the hero (with its own CTAs) scrolls out of view, so we
  // don't double up CTAs while the hero is on screen.
  const observer = new IntersectionObserver(
    (entries) => {
      const heroVisible = entries[0]?.isIntersecting ?? true;
      bar.classList.toggle("is-visible", !heroVisible);
      document.documentElement.classList.toggle("js-convbar-active", !heroVisible);
    },
    { rootMargin: "-40% 0px 0px 0px" },
  );
  observer.observe(hero);
}

/* ---------------- Email de-obfuscation ---------------- */

function initEmailLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>("[data-email-b64]").forEach((el) => {
    try {
      const email = atob(el.getAttribute("data-email-b64") || "");
      if (email) el.href = `mailto:${email}`;
    } catch {
      /* malformed — leave as-is */
    }
  });
}

/* ---------------- Wire up ---------------- */

function init(): void {
  burger?.addEventListener("click", toggleMenu);
  document.querySelectorAll<HTMLElement>("[data-menu-close]").forEach((el) => {
    el.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  initTilt();
  initReveals();
  initConvBar();
  initEmailLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
