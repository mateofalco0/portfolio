"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLang, setLang, type Lang } from "@/contexts/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, t } = useLang();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/80" : ""
      }`}
    >
      <div
        style={{
          position: "relative",
          height: "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* Centered nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "56px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: "18px", fontWeight: 500, color: "#1a1a1a" }}
              className="transition-opacity duration-200 hover:opacity-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Language toggle — absolutely positioned right */}
        <div style={{ position: "absolute", right: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={16} style={{ color: "#64748b" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f5f9",
              border: "1px solid #e2e8f0",
              borderRadius: "999px",
              padding: "3px",
              gap: "2px",
            }}
          >
            {(["EN", "ES"] as const).map((option) => {
              const value = option.toLowerCase() as Lang;
              const active = lang === value;
              return (
                <button
                  key={option}
                  onClick={() => setLang(value)}
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    backgroundColor: active ? "#0f0f0f" : "transparent",
                    color: active ? "#ffffff" : "#64748b",
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
