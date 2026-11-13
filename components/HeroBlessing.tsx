"use client";

import React from "react";
import Image from "next/image";
import { invitationConfig } from "@/config/invitation";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

interface HeroBlessingProps {
  lang: "hi" | "en";
}

/* ═══════════════════════════════════════════════════════════════
   INLINE SVG ORNAMENTS – all pure CSS/SVG, no images
   ═══════════════════════════════════════════════════════════════ */

/** Gold beaded toran with tassels and centre finial */
function HeroToran() {
  const w = 320;
  const h = 54;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height={h}
      className="hero-toran-sway"
      aria-hidden="true"
      style={{ maxWidth: w }}
    >
      {/* main catenary string */}
      <path
        d={`M 6 8 Q ${w / 2} 30, ${w - 6} 8`}
        stroke="url(#toranGold)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* beads along the string */}
      {Array.from({ length: 21 }).map((_, i) => {
        const t = (i + 1) / 22;
        const x = 6 + (w - 12) * t;
        const y = 8 + Math.sin(t * Math.PI) * 22;
        return <circle key={i} cx={x} cy={y} r="2.2" fill="#C9A24B" opacity="0.85" />;
      })}
      {/* small green/gold bead drops */}
      {Array.from({ length: 11 }).map((_, i) => {
        const t = (i + 1) / 12;
        const x = 6 + (w - 12) * t;
        const y = 8 + Math.sin(t * Math.PI) * 22;
        const clr = i % 2 === 0 ? "#3D9948" : "#C9A24B";
        return (
          <g key={`d${i}`}>
            <line x1={x} y1={y} x2={x} y2={y + 10} stroke="#C9A24B" strokeWidth="0.7" />
            <circle cx={x} cy={y + 12} r="2.4" fill={clr} opacity="0.8" />
          </g>
        );
      })}
      {/* left tassel */}
      <g>
        <line x1="6" y1="8" x2="2" y2="22" stroke="#C9A24B" strokeWidth="1.2" />
        <line x1="6" y1="8" x2="6" y2="24" stroke="#C9A24B" strokeWidth="1.2" />
        <line x1="6" y1="8" x2="10" y2="22" stroke="#C9A24B" strokeWidth="1.2" />
        <circle cx="2" cy="24" r="2" fill="#E9C977" />
        <circle cx="6" cy="26" r="2" fill="#C9A24B" />
        <circle cx="10" cy="24" r="2" fill="#E9C977" />
      </g>
      {/* right tassel */}
      <g>
        <line x1={w - 6} y1="8" x2={w - 10} y2="22" stroke="#C9A24B" strokeWidth="1.2" />
        <line x1={w - 6} y1="8" x2={w - 6} y2="24" stroke="#C9A24B" strokeWidth="1.2" />
        <line x1={w - 6} y1="8" x2={w - 2} y2="22" stroke="#C9A24B" strokeWidth="1.2" />
        <circle cx={w - 10} cy="24" r="2" fill="#E9C977" />
        <circle cx={w - 6} cy="26" r="2" fill="#C9A24B" />
        <circle cx={w - 2} cy="24" r="2" fill="#E9C977" />
      </g>
      {/* centre finial */}
      <g transform={`translate(${w / 2}, 2)`}>
        <path d="M 0 0 L -3 -4 L 0 -7 L 3 -4 Z" fill="#C9A24B" />
        <circle cx="0" cy="-8" r="2" fill="#E9C977" />
      </g>
      <defs>
        <linearGradient id="toranGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A87A22" />
          <stop offset="50%" stopColor="#E9C977" />
          <stop offset="100%" stopColor="#A87A22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Gold filigree corner vine – top-left (flip for top-right) */
function FiligreeCorner({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 120"
      width="60"
      height="90"
      className={`select-none ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <g fill="none" stroke="url(#cornerGold)" strokeWidth="1.2" strokeLinecap="round">
        {/* main stem */}
        <path d="M 10 5 C 12 30, 20 50, 15 80 C 12 95, 8 110, 8 120" />
        {/* curl 1 */}
        <path d="M 12 25 C 25 20, 40 28, 35 40 C 30 50, 18 45, 15 35" />
        {/* curl 2 */}
        <path d="M 13 50 C 28 45, 50 55, 42 68 C 35 78, 16 70, 14 60" />
        {/* leaf 1 */}
        <path d="M 30 32 C 38 28, 45 35, 38 42 C 32 48, 25 40, 30 32" fill="#C9A24B" fillOpacity="0.25" />
        {/* leaf 2 */}
        <path d="M 38 58 C 48 53, 55 62, 46 70 C 38 76, 30 66, 38 58" fill="#C9A24B" fillOpacity="0.2" />
        {/* tiny buds */}
        <circle cx="35" cy="37" r="2" fill="#E9C977" fillOpacity="0.5" />
        <circle cx="43" cy="64" r="2" fill="#E9C977" fillOpacity="0.5" />
      </g>
      <defs>
        <linearGradient id="cornerGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9C977" />
          <stop offset="100%" stopColor="#A87A22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Scalloped jharokha arch behind the medallion */
function JharokhaArch() {
  return (
    <svg viewBox="0 0 220 180" width="220" height="180" className="select-none" aria-hidden="true">
      <defs>
        <linearGradient id="jharokhaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E8C8" />
          <stop offset="100%" stopColor="#EDE0C4" />
        </linearGradient>
      </defs>
      {/* scalloped arch shape */}
      <path
        d="M 30 175 L 30 70 C 30 20, 110 -10, 110 30 C 110 -10, 190 20, 190 70 L 190 175 Z"
        fill="url(#jharokhaFill)"
        stroke="#D4B86A"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* inner scallop edge */}
      <path
        d="M 42 170 L 42 75 C 42 32, 110 5, 110 38 C 110 5, 178 32, 178 75 L 178 170"
        fill="none"
        stroke="#D4B86A"
        strokeWidth="0.8"
        opacity="0.4"
        strokeDasharray="3 2"
      />
    </svg>
  );
}



/** Gold divider: thin lines + diamond end-caps + centre element — ornate version */
function GoldDivider({ centre = "lotus" }: { centre?: "lotus" | "rings" | "diamond" }) {
  return (
    <div className="flex items-center justify-center w-full my-5 px-2 select-none" aria-hidden="true">
      {/* left line + diamond */}
      <svg viewBox="0 0 120 14" className="flex-1 h-3.5 max-w-[120px]">
        <defs>
          <linearGradient id="divGoldL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="#E9C977" />
          </linearGradient>
        </defs>
        <line x1="0" y1="7" x2="105" y2="7" stroke="url(#divGoldL)" strokeWidth="1.2" />
        <polygon points="107,7 112,2 118,7 112,12" fill="#C9A24B" />
      </svg>

      {/* centre icon */}
      <div className="mx-2.5 shrink-0">
        {centre === "lotus" && <LotusIcon />}
        {centre === "rings" && <WeddingRingsIcon />}
        {centre === "diamond" && (
          <svg viewBox="0 0 14 14" width="14" height="14">
            <polygon points="7,0 14,7 7,14 0,7" fill="#C9A24B" />
          </svg>
        )}
      </div>

      {/* right line + diamond */}
      <svg viewBox="0 0 120 14" className="flex-1 h-3.5 max-w-[120px]">
        <defs>
          <linearGradient id="divGoldR2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E9C977" />
            <stop offset="60%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon points="2,7 8,2 13,7 8,12" fill="#C9A24B" />
        <line x1="15" y1="7" x2="120" y2="7" stroke="url(#divGoldR2)" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

/** Ornate gold lotus — multi-layered petals matching reference */
function LotusIcon() {
  return (
    <svg viewBox="0 0 64 44" width="56" height="38">
      <defs>
        <linearGradient id="lotusGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9C977" />
          <stop offset="100%" stopColor="#A87A22" />
        </linearGradient>
        <linearGradient id="lotusInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6B8" />
          <stop offset="100%" stopColor="#C9A24B" />
        </linearGradient>
      </defs>
      {/* outer petals (widest spread) */}
      <ellipse cx="32" cy="26" rx="5" ry="16" fill="url(#lotusGold)" opacity="0.3" transform="rotate(-65 32 26)" />
      <ellipse cx="32" cy="26" rx="5" ry="16" fill="url(#lotusGold)" opacity="0.3" transform="rotate(65 32 26)" />
      <ellipse cx="32" cy="26" rx="5" ry="16" fill="url(#lotusGold)" opacity="0.3" transform="rotate(-50 32 26)" />
      <ellipse cx="32" cy="26" rx="5" ry="16" fill="url(#lotusGold)" opacity="0.3" transform="rotate(50 32 26)" />
      {/* mid petals */}
      <ellipse cx="32" cy="26" rx="5.5" ry="15" fill="url(#lotusGold)" opacity="0.4" transform="rotate(-35 32 26)" />
      <ellipse cx="32" cy="26" rx="5.5" ry="15" fill="url(#lotusGold)" opacity="0.4" transform="rotate(35 32 26)" />
      <ellipse cx="32" cy="26" rx="5.5" ry="15" fill="url(#lotusGold)" opacity="0.4" transform="rotate(-18 32 26)" />
      <ellipse cx="32" cy="26" rx="5.5" ry="15" fill="url(#lotusGold)" opacity="0.4" transform="rotate(18 32 26)" />
      {/* inner petals */}
      <ellipse cx="32" cy="26" rx="5" ry="13" fill="url(#lotusInner)" opacity="0.55" transform="rotate(-10 32 26)" />
      <ellipse cx="32" cy="26" rx="5" ry="13" fill="url(#lotusInner)" opacity="0.55" transform="rotate(10 32 26)" />
      <ellipse cx="32" cy="26" rx="4.5" ry="12" fill="url(#lotusInner)" opacity="0.6" />
      {/* centre jewel */}
      <circle cx="32" cy="24" r="4" fill="#E9C977" />
      <circle cx="32" cy="24" r="2.2" fill="#C9A24B" />
      {/* base cradle */}
      <path d="M 20 36 Q 26 32, 32 34 Q 38 32, 44 36" fill="none" stroke="#C9A24B" strokeWidth="1.5" />
      <path d="M 22 38 Q 27 35, 32 36.5 Q 37 35, 42 38" fill="none" stroke="#C9A24B" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

/** Gold interlocking wedding rings */
function WeddingRingsIcon() {
  return (
    <svg viewBox="0 0 36 24" width="36" height="24">
      <circle cx="13" cy="12" r="7" fill="none" stroke="#C9A24B" strokeWidth="2" />
      <circle cx="23" cy="12" r="7" fill="none" stroke="#C9A24B" strokeWidth="2" />
      {/* sparkle strokes */}
      <line x1="18" y1="2" x2="18" y2="5" stroke="#E9C977" strokeWidth="1" />
      <line x1="15" y1="3" x2="16.5" y2="5.5" stroke="#E9C977" strokeWidth="0.8" />
      <line x1="21" y1="3" x2="19.5" y2="5.5" stroke="#E9C977" strokeWidth="0.8" />
    </svg>
  );
}

/** Ornate nameplate pill — double gold border, cusped decorative ends (matches reference) */
function CuspedPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* left decorative end-cap line + diamond */}
      <svg viewBox="0 0 70 16" className="h-4 w-12 sm:w-16 shrink-0">
        <defs>
          <linearGradient id="cpLineL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="60%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="#E9C977" />
          </linearGradient>
        </defs>
        <line x1="0" y1="8" x2="56" y2="8" stroke="url(#cpLineL)" strokeWidth="1.2" />
        <polygon points="58,8 63,3 70,8 63,13" fill="#C9A24B" />
      </svg>

      {/* ornate nameplate frame */}
      <div className="relative mx-0.5">
        {/* outer gold border */}
        <div
          className="rounded-sm px-5 py-1.5 sm:px-6 sm:py-2"
          style={{
            background: "linear-gradient(135deg, #E9C977, #C9A24B, #A87A22, #C9A24B, #E9C977)",
            borderRadius: "4px",
            clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
          }}
        >
          {/* cream gap */}
          <div
            style={{
              background: "#FFF8EC",
              padding: "2px",
              clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
            }}
          >
            {/* inner gold border */}
            <div
              style={{
                background: "linear-gradient(135deg, #E9C977, #C9A24B)",
                padding: "1px",
                clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
              }}
            >
              {/* cream content area */}
              <div
                className="px-4 py-1 sm:px-5"
                style={{
                  background: "linear-gradient(180deg, #FFF8EC, #FBEFD9)",
                  clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        {/* tiny diamond at cusped points */}
        <svg className="absolute -left-1 top-1/2 -translate-y-1/2" viewBox="0 0 8 8" width="6" height="6">
          <polygon points="4,0 8,4 4,8 0,4" fill="#C9A24B" />
        </svg>
        <svg className="absolute -right-1 top-1/2 -translate-y-1/2" viewBox="0 0 8 8" width="6" height="6">
          <polygon points="4,0 8,4 4,8 0,4" fill="#C9A24B" />
        </svg>
      </div>

      {/* right decorative end-cap line + diamond */}
      <svg viewBox="0 0 70 16" className="h-4 w-12 sm:w-16 shrink-0">
        <defs>
          <linearGradient id="cpLineR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E9C977" />
            <stop offset="40%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon points="0,8 7,3 12,8 7,13" fill="#C9A24B" />
        <line x1="14" y1="8" x2="70" y2="8" stroke="url(#cpLineR)" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

/** Bottom corner flower clusters — AI-generated watercolor illustration */
function FlowerCluster({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`select-none pointer-events-none ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
      style={{ width: 140, height: 140 }}
    >
      <Image
        src="/images/flower_corner.jpg"
        alt=""
        width={140}
        height={140}
        className="object-contain"
        style={{ mixBlendMode: "multiply", filter: "saturate(1.1) contrast(1.05)" }}
      />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   MAIN HERO BLESSING CARD
   ═══════════════════════════════════════════════════════════════ */
export default function HeroBlessing({ lang }: HeroBlessingProps) {
  const { couple, blessing, city, state } = invitationConfig;

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-3 sm:px-4 pt-16 pb-8">
      <ScrollReveal animation="scale-up" duration={900}>
        {/* ── OUTER CARD ── double gold border, arched top, cream bg with paisley texture */}
        <div
          className="hero-card-outer relative"
          style={{
            borderRadius: "48% 48% 24px 24px / 140px 140px 24px 24px",
            padding: "3px",
            background: "linear-gradient(135deg, #E9C977, #C9A24B, #A87A22, #C9A24B, #E9C977)",
            boxShadow: "0 8px 32px rgba(168,122,34,0.18), 0 2px 8px rgba(168,122,34,0.12)",
          }}
        >
          {/* gap between borders */}
          <div
            style={{
              borderRadius: "47% 47% 22px 22px / 136px 136px 22px 22px",
              padding: "8px",
              background: "#FFF8EC",
              overflow: "visible",
            }}
          >
            {/* ── INNER CARD ── thick inner gold border */}
            <div
              className="hero-card-inner relative"
              style={{
                borderRadius: "46% 46% 20px 20px / 130px 130px 20px 20px",
                border: "2px solid #C9A24B",
                background: "linear-gradient(180deg, #FFF8EC 0%, #FBEFD9 100%)",
                boxShadow: "inset 0 0 60px rgba(168,122,34,0.06)",
              }}
            >
              {/* embossed paisley texture overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  borderRadius: "inherit",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 C20 15 10 25 15 35 C20 45 30 45 30 55 C30 45 40 45 45 35 C50 25 40 15 30 5z' fill='%23D4AF37' fill-opacity='0.03'/%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />

              {/* ── FILIGREE CORNERS ── */}
              <div className="absolute top-6 left-2 z-10 opacity-60">
                <FiligreeCorner />
              </div>
              <div className="absolute top-6 right-2 z-10 opacity-60">
                <FiligreeCorner flip />
              </div>

              {/* ── CONTENT ── */}
              <div className="relative z-20 px-5 sm:px-8 pt-4 pb-6">

                {/* ── 1. TORAN ── */}
                <div className="flex justify-center -mt-1 mb-1">
                  <HeroToran />
                </div>

                {/* ── 2. JHAROKHA + MEDALLION + VINES ── */}
                <ScrollReveal animation="fade-up" delay={100} duration={600}>
                  <div className="relative flex flex-col items-center mt-2">
                    {/* scalloped jharokha behind */}
                    <div className="absolute -top-6" style={{ zIndex: 1 }}>
                      <JharokhaArch />
                    </div>

                    {/* Radha-Krishna circular medallion with double gold ring + glow */}
                    <div className="relative z-[5] mx-auto">
                      <div
                        className="rounded-full p-[3px]"
                        style={{
                          background: "linear-gradient(135deg, #E9C977, #C9A24B, #A87A22, #C9A24B, #E9C977)",
                          boxShadow: "0 0 28px rgba(233,201,119,0.45), 0 0 8px rgba(201,162,75,0.3)",
                        }}
                      >
                        <div className="rounded-full p-[3px] bg-[#FFF8EC]">
                          <div
                            className="rounded-full p-[2px]"
                            style={{
                              background: "linear-gradient(135deg, #E9C977, #A87A22)",
                            }}
                          >
                            <div className="relative h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-full">
                              <Image
                                src={blessing.motifImage}
                                alt="राधा कृष्ण"
                                fill
                                priority
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Invocation text */}
                    <p className="mt-3 font-hindi-royal text-[15px] sm:text-base font-semibold tracking-widest text-[#7A0F1F]">
                      ॥ ॐ श्री राधाकृष्णाभ्यां नमः ॥
                    </p>
                  </div>
                </ScrollReveal>

                {/* Lotus divider after invocation */}
                <GoldDivider centre="lotus" />

                {/* ── 3. SHLOKA BOX ── cusped sides, double gold border */}
                <ScrollReveal animation="fade-up" delay={200} duration={600}>
                  <div
                    className="relative mx-auto mt-1 p-[2px]"
                    style={{
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #E9C977, #C9A24B, #A87A22)",
                    }}
                  >
                    <div
                      className="p-[3px] bg-[#FFF8EC]"
                      style={{ borderRadius: "10px" }}
                    >
                      <div
                        className="relative p-4 sm:p-5 text-center border border-[#C9A24B]/50"
                        style={{
                          borderRadius: "8px",
                          background: "linear-gradient(180deg, #FFF8EC, #FBEFD9)",
                        }}
                      >

                        {/* Shloka text */}
                        <p className="font-hindi-shloka text-base sm:text-lg font-bold leading-relaxed text-[#7A0F1F] whitespace-pre-line px-6">
                          {blessing.shloka}
                        </p>
                        <p className="mt-2.5 font-serif-italic text-[15px] sm:text-base text-[#5C4033] leading-relaxed px-4">
                          {blessing.shlokaMeaning[lang]}
                        </p>

                        {/* Bottom diamond-and-leaf ornament */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                          <svg viewBox="0 0 40 16" width="40" height="16">
                            <path d="M 8 8 C 12 4, 16 4, 20 0 C 24 4, 28 4, 32 8 C 28 12, 24 12, 20 16 C 16 12, 12 12, 8 8Z" fill="#C9A24B" />
                            <path d="M 0 8 C 4 5, 6 6, 8 8 C 6 10, 4 11, 0 8Z" fill="#C9A24B" opacity="0.5" />
                            <path d="M 32 8 C 34 5, 36 6, 40 8 C 36 11, 34 10, 32 8Z" fill="#C9A24B" opacity="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ── Blessing Line ── */}
                <ScrollReveal animation="fade-up" delay={300} duration={600}>
                  <p className="mt-6 text-center font-serif-luxury text-[15px] sm:text-base text-[#7A0F1F] leading-relaxed font-medium px-2">
                    {blessing.line[lang]}
                  </p>
                </ScrollReveal>

                {/* ── 4. "पावन परिणय सूत्र" CUSPED PILL LABEL ── */}
                <ScrollReveal animation="fade-up" delay={400} duration={600}>
                  <div className="mt-6 flex justify-center">
                    <CuspedPill>
                      <span className="font-hindi-royal text-[15px] sm:text-base font-bold text-[#7A0F1F] tracking-wider">
                        {lang === "hi" ? "पावन परिणय सूत्र" : "celebration of"}
                      </span>
                    </CuspedPill>
                  </div>
                </ScrollReveal>

                {/* ── 5. GROOM NAME BLOCK ── */}
                <ScrollReveal animation="fade-up" delay={500} duration={600}>
                  <div className="mt-5 text-center">
                    {/* Devanagari name */}
                    <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A0F1F] tracking-wide leading-tight">
                      {couple.groom.name[lang]}
                    </h2>

                    {/* English script name */}
                    <div className="flex items-center justify-center my-1 overflow-visible">
                      <p className="font-script text-5xl sm:text-6xl md:text-7xl hero-gold-shimmer py-1 overflow-visible leading-tight">
                        Vipul
                      </p>
                    </div>

                    {/* Parents */}
                    <p className="mt-1 font-serif-luxury text-[15px] sm:text-base font-semibold text-[#7A0F1F] leading-relaxed">
                      {couple.groom.parents[lang]}
                    </p>
                    {/* Grandparents */}
                    <p className="mt-0.5 font-serif-italic text-[15px] sm:text-base text-[#6D5248] leading-normal">
                      ({couple.groom.grandparents[lang]})
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── DIVIDER: wedding rings ── */}
                <GoldDivider centre="rings" />

                {/* ── BRIDE NAME BLOCK ── */}
                <ScrollReveal animation="fade-up" delay={600} duration={600}>
                  <div className="text-center">
                    <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7A0F1F] tracking-wide leading-tight">
                      {couple.bride.name[lang]}
                    </h2>

                    <div className="flex items-center justify-center my-1 overflow-visible">
                      <p className="font-script text-5xl sm:text-6xl md:text-7xl hero-gold-shimmer py-1 overflow-visible leading-tight">
                        Sejal
                      </p>
                    </div>

                    <p className="mt-1 font-serif-luxury text-[15px] sm:text-base font-semibold text-[#7A0F1F] leading-relaxed">
                      {couple.bride.parents[lang]}
                    </p>
                    <p className="mt-0.5 font-serif-italic text-[15px] sm:text-base text-[#6D5248] leading-normal">
                      ({couple.bride.grandparents[lang]})
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── 6. BOTTOM ── lotus divider + ornate pill + lily clusters */}
                <GoldDivider centre="lotus" />

                <ScrollReveal animation="fade-up" delay={700} duration={600}>
                  <div className="text-center mb-2">
                    <CuspedPill>
                      <span className="font-royal-eyebrow text-[13px] sm:text-sm font-semibold tracking-widest text-[#7A0F1F]">
                        {city[lang]} • {state[lang]}
                      </span>
                    </CuspedPill>
                  </div>
                </ScrollReveal>
              </div>

              {/* ── BOTTOM CORNER FLOWER CLUSTERS ── */}
              <div className="absolute -bottom-4 -left-4 z-30">
                <FlowerCluster />
              </div>
              <div className="absolute -bottom-4 -right-4 z-30">
                <FlowerCluster flip />
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
