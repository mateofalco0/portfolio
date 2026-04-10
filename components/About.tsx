"use client";

import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const card: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
  padding: "28px",
};

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="about"
      className="scroll-mt-20"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* ── Part 1: Text block ── */}
        <div style={{ textAlign: "center", marginBottom: "clamp(64px, 10vw, 112px)" }}>

          <FadeIn delay={0}>
            <p style={{
              fontSize: "clamp(14px, 3vw, 20px)",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1d4ed8",
              marginBottom: "24px",
            }}>
              {a.label}
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0f0f0f",
              marginBottom: "28px",
              textAlign: "center",
            }}>
              {a.headline1}<br />
              {a.headline2}<br />
              {a.headline3}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: 1.8,
              color: "#64748b",
              maxWidth: "680px",
              margin: "0 auto 32px",
              textAlign: "center",
            }}>
              {a.paragraph}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px" }}>
              <a
                href="https://github.com/mateofalco0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                style={{ fontSize: "16px", fontWeight: 700, color: "#0f0f0f" }}
              >
                GitHub <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-falco-521956237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                style={{ fontSize: "16px", fontWeight: 700, color: "#0f0f0f" }}
              >
                LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </FadeIn>

        </div>

        {/* ── Row 1: Experience · Education · Languages ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "20px" }}>

          <FadeIn delay={0} style={{ height: "100%" }}>
            <div className="h-full about-card" style={card}>
              <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "24px" }}>
                {a.experienceLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>
                    {a.job1Title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.job1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>
                    {a.job2Title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.job2Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} style={{ height: "100%" }}>
            <div className="h-full about-card" style={card}>
              <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "24px" }}>
                {a.educationLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>{a.edu1Title}</p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.edu1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>{a.edu2Title}</p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.edu2Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>{a.edu3Title}</p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.edu3Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} style={{ height: "100%" }}>
            <div className="h-full about-card" style={card}>
              <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "24px" }}>
                {a.languagesLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>{a.lang1}</p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.lang1Level}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "4px" }}>{a.lang2}</p>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>{a.lang2Level}</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── Row 2: Beyond the Screen ── */}
        <FadeIn delay={0}>
          <div className="about-card" style={card}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "24px" }}>
              {a.beyondLabel}
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <p className="md:whitespace-nowrap" style={{ fontSize: "clamp(1.125rem, 3vw, 1.5rem)", fontWeight: 700, color: "#0f0f0f", flexShrink: 0 }}>
                {a.beyondTitle}
              </p>
              <div>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#64748b", marginBottom: "16px" }}>
                  {a.beyondP1}
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#64748b" }}>
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
