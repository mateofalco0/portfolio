"use client";

import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* ── Part 1: Text block ── */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "120px" }}>

            <p style={{
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1d4ed8",
              marginBottom: "32px",
            }}>
              About me
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
              Junior Developer from Uruguay,<br />
              currently building real things<br />
              and looking for a team to grow with.
            </h2>

            <p style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#64748b",
              maxWidth: "680px",
              margin: "0 auto 40px",
            }}>
              Junior Developer from Uruguay, currently in my 4th year of Systems
              Engineering at ORT University. I chose this path because I&apos;m drawn
              to building things that solve real problems — not just writing code,
              but understanding systems, finding what breaks, and making it work
              better. I&apos;ve had hands-on exposure to APIs, SQL, and production
              environments before landing my first dev role, and I&apos;m looking for
              a team where I can keep growing and contribute from day one.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
              <a
                href="https://github.com/mateofalco"
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

          </div>
        </FadeIn>

        {/* ── Row 1: Experience · Education · Languages ── */}
        <FadeIn delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "24px" }}>

            {/* Experience */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                Experience
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Operations Analyst
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>
                    Bonoxs · 2025 – 2026
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Admissions Manager
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>
                    Woodlands School · 2024 – 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                Education
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Universidad ORT Uruguay
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>
                    Systems Engineering · 2022 – Present (4th year)
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Inst. Juan XXIII
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>
                    High School · 2020 – 2021
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Woodlands School
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>
                    Primary &amp; Secondary · 2007 – 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px" }}>
              <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
                Languages
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    Spanish
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>Native</p>
                </div>
                <div>
                  <p style={{ fontSize: "22px", fontWeight: 700, color: "#0f0f0f", marginBottom: "6px" }}>
                    English
                  </p>
                  <p style={{ fontSize: "16px", color: "#64748b" }}>Advanced</p>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* ── Row 2: Beyond the Screen — full width ── */}
        <FadeIn delay={0.2}>
          <div style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "48px" }}>
            <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#1d4ed8", marginBottom: "36px" }}>
              Beyond the screen
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "48px", alignItems: "start" }}>
              <p style={{ fontSize: "28px", fontWeight: 700, color: "#0f0f0f", whiteSpace: "nowrap" }}>
                Beyond the screen.
              </p>
              <div>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#64748b", marginBottom: "20px" }}>
                  Football has been a constant in my life since I was a kid — I still play for the same
                  school I grew up in, and that never gets old. Outside of that, I love spending time with
                  my friends and family. Those moments are what recharge me.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#64748b" }}>
                  Traveling is something I&apos;m genuinely passionate about. There&apos;s something about being
                  somewhere new, figuring things out, and experiencing a different culture that I find hard
                  to match. Last year I had the chance to study abroad in San Sebasti&aacute;n, Spain — one of
                  the best decisions I&apos;ve made. The city, the people, the food, the pace of life. And
                  somewhere between all of that, I got in the water for the first time and fell in love
                  with surfing.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
