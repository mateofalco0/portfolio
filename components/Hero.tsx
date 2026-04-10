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
      <div className="relative w-full max-w-7xl mx-auto px-10 flex flex-row items-center gap-20">

        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 0 5px #1d4ed8, 0 0 50px 10px rgba(29,78,216,0.12)",
              width: 480,
              height: 480,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/MyPhoto.PNG"
              alt="Mateo Falco"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col items-start">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{
              color: "#0f0f0f",
              lineHeight: 1.0,
              fontSize: "clamp(4rem, 8vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Mateo Falco
          </motion.h1>

          {/* Role + location */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            style={{ color: "#1d4ed8", fontSize: "22px", fontWeight: 600, marginBottom: "24px" }}
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
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "20px",
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
              fontSize: "18px",
              lineHeight: 1.75,
              marginBottom: "40px",
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
            style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#contact"
              style={{
                color: "#0f0f0f",
                border: "2px solid #0f0f0f",
                height: "56px",
                paddingLeft: "32px",
                paddingRight: "32px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
              }}
              className="transition-all duration-200 hover:bg-gray-100"
            >
              {t.hero.contactBtn}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
