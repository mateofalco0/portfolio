"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Copy, Check, ExternalLink, FileText } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();
  const c = t.contact;
  const email = "Mateofalsar21@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>

        {/* Title + subtitle */}
        <FadeIn delay={0}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 8vw, 56px)" }}>
            <h2 style={{
              fontSize: "clamp(2.5rem, 10vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              lineHeight: 1.05,
              marginBottom: "12px",
            }}>
              {c.title}
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 3vw, 1.0625rem)", color: "#64748b", lineHeight: 1.6 }}>
              {c.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Card */}
        <FadeIn delay={0.15}>
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            padding: "28px",
          }}>

            {/* Email row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "5px" }}>
                  Email
                </p>
                <p style={{ fontSize: "clamp(0.875rem, 3.5vw, 1rem)", fontWeight: 500, color: "#0f0f0f", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {email}
                </p>
              </div>
              <button
                onClick={copyEmail}
                title="Copy email"
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  color: copied ? "#1d4ed8" : "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s",
                }}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "#e2e8f0", margin: "24px 0" }} />

            {/* GitHub + LinkedIn */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <a
                href="https://github.com/mateofalco0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-50 transition-colors"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "48px",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f0f0f",
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-falco-521956237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-50 transition-colors"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minHeight: "48px",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f0f0f",
                  textDecoration: "none",
                }}
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "#e2e8f0", margin: "24px 0" }} />

            {/* Download CV */}
            <a
              href={c.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                minHeight: "52px",
                borderRadius: "10px",
                backgroundColor: "#0f0f0f",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                width: "100%",
              }}
            >
              <FileText size={18} />
              {c.cvBtn}
            </a>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
