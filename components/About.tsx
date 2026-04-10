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
      style={{ backgroundColor: "#f8f9fa", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Part 1: Text block ── */}
        <div className="text-center mb-16 md:mb-28">

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
            }}>
              {a.paragraph}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          <FadeIn delay={0} style={{ height: "100%" }}>
            <div className="h-full rounded-2xl p-6 md:p-10" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "28px" }}>
                {a.experienceLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>
                    {a.job1Title}
                  </p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.job1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>
                    {a.job2Title}
                  </p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.job2Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} style={{ height: "100%" }}>
            <div className="h-full rounded-2xl p-6 md:p-10" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "28px" }}>
                {a.educationLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>{a.edu1Title}</p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.edu1Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>{a.edu2Title}</p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.edu2Sub}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>{a.edu3Title}</p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.edu3Sub}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} style={{ height: "100%" }}>
            <div className="h-full rounded-2xl p-6 md:p-10" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}>
              <p style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "28px" }}>
                {a.languagesLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div>
                  <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>{a.lang1}</p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.lang1Level}</p>
                </div>
                <div>
                  <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", fontWeight: 700, color: "#0f0f0f", marginBottom: "5px" }}>{a.lang2}</p>
                  <p style={{ fontSize: "15px", color: "#64748b" }}>{a.lang2Level}</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── Row 2: Beyond the Screen ── */}
        <FadeIn delay={0}>
          <div className="rounded-2xl p-6 md:p-12" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}>
            <p style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "28px" }}>
              {a.beyondLabel}
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <p className="md:whitespace-nowrap" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 700, color: "#0f0f0f", flexShrink: 0 }}>
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
