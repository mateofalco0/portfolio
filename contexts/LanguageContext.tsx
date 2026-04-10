"use client";

import { useState, useEffect } from "react";

export type Lang = "en" | "es";

// Module-level store — no provider wrapper needed.
// All components using useLang() subscribe and re-render when setLang is called.
let _lang: Lang = "en";
const _listeners = new Set<() => void>();

export function setLang(lang: Lang): void {
  _lang = lang;
  _listeners.forEach((fn) => fn());
}

export function useLang() {
  const [, rerender] = useState(0);

  useEffect(() => {
    const fn = () => rerender((n) => n + 1);
    _listeners.add(fn);
    return () => {
      _listeners.delete(fn);
    };
  }, []);

  return { lang: _lang, setLang, t: translations[_lang] };
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
    hero: {
      role: "Junior Developer · Montevideo, Uruguay",
      headline1: "Hands-on with real systems.",
      headline2: "Now building a career in tech.",
      description:
        "Real-world exposure to APIs, SQL, production systems, and AI-powered automations. Now focused on development and looking for a junior role where I can grow fast and do meaningful work.",
      contactBtn: "Contact me",
    },
    about: {
      label: "ABOUT ME",
      headline1: "Junior Developer from Uruguay,",
      headline2: "currently building real things",
      headline3: "and looking for a team to grow with.",
      paragraph:
        "Junior Developer from Uruguay, currently in my 4th year of Systems Engineering at ORT University. I chose this path because I'm drawn to building things that solve real problems — not just writing code, but understanding systems, finding what breaks, and making it work better. I've had hands-on exposure to APIs, SQL, and production environments before landing my first dev role, and I'm looking for a team where I can keep growing and contribute from day one.",
      experienceLabel: "EXPERIENCE",
      job1Title: "Operations Analyst",
      job1Sub: "Bonoxs · 2025 – 2026",
      job2Title: "Admissions Manager",
      job2Sub: "Woodlands School · 2024 – 2025",
      educationLabel: "EDUCATION",
      edu1Title: "Universidad ORT Uruguay",
      edu1Sub: "Systems Engineering · 2022 – Present (4th year)",
      edu2Title: "Inst. Juan XXIII",
      edu2Sub: "High School · 2020 – 2021",
      edu3Title: "Woodlands School",
      edu3Sub: "Primary & Secondary · 2007 – 2019",
      languagesLabel: "LANGUAGES",
      lang1: "Spanish",
      lang1Level: "Native",
      lang2: "English",
      lang2Level: "Advanced",
      beyondLabel: "BEYOND THE SCREEN",
      beyondTitle: "Beyond the screen.",
      beyondP1:
        "Football has been a constant in my life since I was a kid — I still play for the same school I grew up in, and that never gets old. Outside of that, I love spending time with my friends and family. Those moments are what recharge me.",
      beyondP2:
        "Traveling is something I'm genuinely passionate about. There's something about being somewhere new, figuring things out, and experiencing a different culture that I find hard to match. Last year I had the chance to study abroad in San Sebastián, Spain — one of the best decisions I've made. The city, the people, the food, the pace of life. And somewhere between all of that, I got in the water for the first time and fell in love with surfing.",
    },
    contact: {
      title: "Contact",
      subtitle: "Reach out via email or connect on my professional profiles.",
      cvBtn: "View / Download CV",
      cvLink: "/Resume Mateo Falco.pdf",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      role: "Junior Developer · Montevideo, Uruguay",
      headline1: "Con experiencia real en sistemas.",
      headline2: "Construyendo mi carrera en tecnología.",
      description:
        "Experiencia real con APIs, SQL, sistemas en producción y automatizaciones con IA. Enfocado en desarrollo y en busca de un rol junior donde pueda crecer rápido y hacer trabajo que importe.",
      contactBtn: "Contactame",
    },
    about: {
      label: "SOBRE MÍ",
      headline1: "Developer junior de Uruguay,",
      headline2: "construyendo cosas reales",
      headline3: "y buscando un equipo con el que crecer.",
      paragraph:
        "Developer junior de Uruguay, actualmente en 4to año de Ingeniería en Sistemas en la Universidad ORT. Elegí este camino porque me atrae construir cosas que resuelvan problemas reales — no solo escribir código, sino entender sistemas, encontrar lo que falla y mejorarlo. Tuve exposición real a APIs, SQL y entornos de producción antes de mi primer rol como desarrollador, y busco un equipo donde pueda seguir creciendo y aportar desde el primer día.",
      experienceLabel: "EXPERIENCIA",
      job1Title: "Analista de Operaciones",
      job1Sub: "Bonoxs · 2025 – 2026",
      job2Title: "Encargado de Admisiones",
      job2Sub: "Woodlands School · 2024 – 2025",
      educationLabel: "EDUCACIÓN",
      edu1Title: "Universidad ORT Uruguay",
      edu1Sub: "Ingeniería en Sistemas · 2022 – Presente (4to año)",
      edu2Title: "Inst. Juan XXIII",
      edu2Sub: "Secundaria · 2020 – 2021",
      edu3Title: "Woodlands School",
      edu3Sub: "Primaria y Secundaria · 2007 – 2019",
      languagesLabel: "IDIOMAS",
      lang1: "Español",
      lang1Level: "Nativo",
      lang2: "Inglés",
      lang2Level: "Avanzado",
      beyondLabel: "MÁS ALLÁ DE LA PANTALLA",
      beyondTitle: "Más allá de la pantalla.",
      beyondP1:
        "El fútbol es parte de mí desde que era chico — todavía juego para el mismo colegio donde crecí, y eso nunca cambia. Fuera de la cancha, lo que más valoro es el tiempo con mis amigos y mi familia. Esos momentos son los que me dan energía.",
      beyondP2:
        "Viajar es algo que me apasiona profundamente. Hay algo en llegar a un lugar nuevo, adaptarse y descubrir una cultura diferente que no tiene comparación. El año pasado tuve la oportunidad de estudiar en San Sebastián, España — una de las mejores decisiones que tomé. La ciudad, la gente, la comida, el ritmo de vida. Y en algún momento entre todo eso, me metí al agua por primera vez y me enamoré del surf.",
    },
    contact: {
      title: "Contacto",
      subtitle: "Escribime por mail o conectá conmigo en mis redes profesionales.",
      cvBtn: "Ver / Descargar CV",
      cvLink: "/CV Mateo Falco.pdf",
    },
  },
} as const;
