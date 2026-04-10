"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/80"
          : ""
      }`}
    >
      <div
        className="flex items-center justify-center"
        style={{ height: "84px" }}
      >
        <nav className="flex items-center gap-14">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: "18px", fontWeight: 500, color: "#1a1a1a" }}
              className="transition-opacity duration-200 hover:opacity-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
