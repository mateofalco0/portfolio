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
      style={{ backgroundColor: "#f8f9fa", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* Title + subtitle */}
        <FadeIn delay={0}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}>
              {c.title}
            </h2>
            <p style={{ fontSize: "17px", color: "#64748b", lineHeight: 1.6 }}>
              {c.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Card */}
        <FadeIn delay={0.15}>
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "40px",
          }}>

            {/* Email row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "6px" }}>
                  Email
                </p>
                <p style={{ fontSize: "17px", fontWeight: 500, color: "#0f0f0f" }}>
                  {email}
                </p>
              </div>
              <button
                onClick={copyEmail}
                title="Copy email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  color: copied ? "#1d4ed8" : "#64748b",
                  flexShrink: 0,
                  marginLeft: "16px",
                  transition: "color 0.2s",
                }}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "#e2e8f0", margin: "32px 0" }} />

            {/* GitHub + LinkedIn */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <a
                href="https://github.com/mateofalco0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "48px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f0f0f",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                className="hover:bg-gray-50"
              >
                <ExternalLink size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-falco-521956237"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "48px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f0f0f",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                className="hover:bg-gray-50"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "#e2e8f0", margin: "32px 0" }} />

            {/* Download CV */}
            <a
              href={c.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                height: "52px",
                borderRadius: "8px",
                backgroundColor: "#0f0f0f",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                width: "100%",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-80"
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
