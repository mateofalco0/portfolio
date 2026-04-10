"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="relative w-full max-w-7xl mx-auto px-10 md:px-10 flex flex-col md:flex-row items-center gap-14 md:gap-20 pt-28 pb-16 md:py-0">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="hero-photo-container"
        >
          <Image
            src="/MyPhoto.PNG"
            alt="Mateo Falco"
            fill
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 480px"
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full" style={{ paddingLeft: "32px", paddingRight: "32px" }}>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{
              color: "#0f0f0f",
              lineHeight: 1.0,
              fontSize: "clamp(2.75rem, 8vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
            }}
          >
            Mateo Falco
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            style={{
              color: "#1d4ed8",
              fontSize: "clamp(1rem, 3vw, 1.375rem)",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            {t.hero.role}
          </motion.p>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease }}
            style={{
              color: "#0f0f0f",
              fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "16px",
              maxWidth: "540px",
            }}
          >
            {t.hero.headline1}<br />{t.hero.headline2}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease }}
            style={{
              color: "#64748b",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center mx-6 md:mx-0 transition-all duration-200 hover:bg-gray-100"
              style={{
                color: "#0f0f0f",
                border: "2px solid #0f0f0f",
                height: "52px",
                paddingLeft: "32px",
                paddingRight: "32px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {t.hero.contactBtn}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
