"use client";

import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="about"
      className="scroll-mt-20"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* ── Part 1: Text block — individually staggered ── */}
        <div style={{ textAlign: "center", marginBottom: "120px" }}>

          {/* Label + headline together */}
          <FadeIn delay={0}>
            <p style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1d4ed8",
              marginBottom: "32px",
            }}>
              {a.label}
            </p>
            <h2 style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              margin: "0 auto 36px",
              maxWidth: "900px",
            }}>
              {a.headline1}<br />
              {a.headline2}<br />
              {a.headline3}
            </h2>
          </FadeIn>

          {/* Paragraph */}
          <FadeIn delay={0.1}>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#64748b",
              maxWidth: "680px",
              margin: "0 auto 40px",
            }}>
              {a.paragraph}
            </p>
          </FadeIn>

          {/* GitHub + LinkedIn links */}
          <FadeIn delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
              <a
                href="https://github.com/mateofalco0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: 700, color: "#0f0f0f" }}
                className="transition-opacity hover:opacity-50"
              >
                GitHub <ArrowUpRight style={{ width: "20px", height: "20px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-falco-521956237"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: 700, color: "#0f0f0f" }}
                className="transition-opacity hover:opacity-50"
              >
                LinkedIn <ArrowUpRight style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
          </FadeIn>

        </div>

        {/* ── Row 1: Experience · Education · Languages — each card staggered ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "24px" }}>

          {/* Experience */}
          <FadeIn delay={0} style={{ height: "100%" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px", height: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                {a.experienceLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    {a.job1Title}
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.job1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    {a.job2Title}
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.job2Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.1} style={{ height: "100%" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px", height: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                {a.educationLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>{a.edu1Title}</p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.edu1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>{a.edu2Title}</p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.edu2Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>{a.edu3Title}</p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.edu3Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Languages */}
          <FadeIn delay={0.2} style={{ height: "100%" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px", height: "100%" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                {a.languagesLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>{a.lang1}</p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.lang1Level}</p>
                </div>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>{a.lang2}</p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>{a.lang2Level}</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── Row 2: Beyond the Screen — full width ── */}
        <FadeIn delay={0}>
          <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px" }}>
            <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
              {a.beyondLabel}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "48px", alignItems: "start" }}>
              <p style={{ fontSize: "28px", fontWeight: 700, color: "#0f0f0f", whiteSpace: "nowrap" }}>
                {a.beyondTitle}
              </p>
              <div>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#64748b", marginBottom: "20px" }}>
                  {a.beyondP1}
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#64748b" }}>
                  {a.beyondP2}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
