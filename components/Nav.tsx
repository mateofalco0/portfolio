"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useLang, setLang, type Lang } from "@/contexts/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t } = useLang();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 32);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [menuOpen]);

  const links = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const LangToggle = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <Globe size={15} style={{ color: "#64748b", flexShrink: 0 }} />
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
        border: "1px solid #e2e8f0",
        borderRadius: "999px",
        padding: "3px",
        gap: "2px",
      }}>
        {(["EN", "ES"] as const).map((option) => {
          const value = option.toLowerCase() as Lang;
          const active = lang === value;
          return (
            <button
              key={option}
              onClick={() => setLang(value)}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 9px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.18s ease",
                backgroundColor: active ? "#0f0f0f" : "transparent",
                color: active ? "#ffffff" : "#64748b",
                minHeight: "30px",
                minWidth: "32px",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80"
          : ""
      }`}
    >
      {/* Main bar */}
      <div
        className="relative flex items-center justify-between md:justify-center"
        style={{ height: "72px", paddingLeft: "20px", paddingRight: "20px", boxSizing: "border-box" }}
      >
        {/* Desktop: centered nav links */}
        <nav className="hidden md:flex items-center" style={{ gap: "56px" }}>
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

        {/* Mobile: hamburger LEFT */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "#1a1a1a",
            flexShrink: 0,
          }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Right side: lang toggle (always) */}
        <div className="flex items-center md:absolute md:right-6">
          <LangToggle />
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            paddingBottom: "8px",
          }}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "17px",
                fontWeight: 500,
                color: "#1a1a1a",
                padding: "16px 24px",
                borderBottom: i < links.length - 1 ? "1px solid #f1f5f9" : "none",
                minHeight: "56px",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
