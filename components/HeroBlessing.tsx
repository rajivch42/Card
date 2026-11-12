"use client";

import React from "react";
import Image from "next/image";
import { invitationConfig } from "@/config/invitation";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import KalashMotif from "./motifs/KalashMotif";
import ToranMotif from "./motifs/ToranMotif";

interface HeroBlessingProps {
  lang: "hi" | "en";
}

export default function HeroBlessing({ lang }: HeroBlessingProps) {
  const { couple, blessing, city, state } = invitationConfig;

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 pt-16 pb-8">
      <ScrollReveal animation="scale-up" duration={900}>
        {/* Outer Royal Card with Arch and Double Gold Border */}
        <div className="relative rounded-t-[120px] rounded-b-3xl border-2 border-[#C9A24B] bg-[#FFFDF9]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">

          {/* Inner Delicate Inset Border */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[110px] rounded-b-[20px] border border-[#E6C97E]/30" />

          {/* Toran decoration */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-1">
            <ToranMotif width={300} />
          </div>

          {/* Subtle decorative gold corner ornaments */}
          <div className="absolute top-4 left-6 text-[#C9A24B] opacity-70 text-lg select-none">❧</div>
          <div className="absolute top-4 right-6 text-[#C9A24B] opacity-70 text-lg select-none">☙</div>
          <div className="absolute bottom-4 left-6 text-[#C9A24B] opacity-70 text-base select-none">✤</div>
          <div className="absolute bottom-4 right-6 text-[#C9A24B] opacity-70 text-base select-none">✤</div>

          {/* 1. Divine Radha-Krishna Emblem */}
          <div className="relative mx-auto mt-8 flex flex-col items-center text-center">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-3 border-[#C9A24B] shadow-lg animate-pulse-glow">
              <Image
                src={blessing.motifImage}
                alt="राधा कृष्ण"
                fill
                priority
                className="object-cover"
              />
            </div>

            <p className="mt-3 font-hindi-royal text-sm sm:text-base font-semibold tracking-widest text-[#8C631F]">
              ॥ ॐ श्री राधाकृष्णाभ्यां नमः ॥
            </p>
          </div>

          {/* 2. Sacred Sanskrit Shloka */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="mt-5 rounded-2xl border border-[#E6C97E]/40 bg-[#FDF7ED]/70 p-4 sm:p-5 text-center shadow-inner">
              <div className="mx-auto mb-1 flex items-center justify-center space-x-2 text-[#C9A24B]">
                <span className="h-px w-6 bg-[#C9A24B]" />
                <span className="text-xs">卐</span>
                <span className="h-px w-6 bg-[#C9A24B]" />
              </div>
              <p className="font-hindi-shloka text-base sm:text-lg font-bold leading-relaxed text-[#6E1F2E] whitespace-pre-line">
                {blessing.shloka}
              </p>
              <p className="mt-2 font-serif-italic text-sm sm:text-base text-[#5C4033] leading-relaxed">
                {blessing.shlokaMeaning[lang]}
              </p>
            </div>
          </ScrollReveal>

          {/* 3. Auspicious Blessing Line */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="mt-6 text-center">
              <p className="font-serif-luxury text-sm sm:text-base text-[#4A2E2B] leading-relaxed font-medium px-2">
                {blessing.line[lang]}
              </p>
            </div>
          </ScrollReveal>

          {/* 4. Luxury Reference Typography Section */}
          <ScrollReveal animation="fade-up" delay={450}>
            <div className="mt-8 text-center">

              {/* Eyebrow: celebration of / पावन परिणय सूत्र */}
              <p className="font-serif-italic text-sm sm:text-base text-[#8C6F5A] tracking-widest uppercase mb-2">
                {lang === "hi" ? "॥ पावन परिणय सूत्र ॥" : "celebration of"}
              </p>

              {/* Groom Name: Mozart Script */}
              <div className="my-2 overflow-visible">
                {lang === "hi" ? (
                  <>
                    <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6E1F2E] tracking-wide leading-tight">
                      {couple.groom.name.hi}
                    </h2>
                    <p className="font-script text-5xl sm:text-6xl md:text-7xl text-copper-gold-gradient py-1 overflow-visible leading-tight">
                      Vipul
                    </p>
                  </>
                ) : (
                  <h2 className="font-script text-6xl sm:text-7xl md:text-8xl font-normal text-copper-gold-gradient py-2 overflow-visible leading-tight drop-shadow-sm">
                    Vipul
                  </h2>
                )}
              </div>

              {/* Groom Parents */}
              <p className="mt-2 font-serif-luxury text-sm sm:text-base font-semibold text-[#2D1B1B] leading-relaxed">
                {couple.groom.parents[lang]}
              </p>

              {/* Groom Grandparents */}
              <p className="mt-0.5 font-serif-italic text-sm sm:text-base text-[#6D5248] leading-normal">
                ({couple.groom.grandparents[lang]})
              </p>

              {/* Elegant Divider */}
              <div className="my-6 flex items-center justify-center space-x-3 sm:space-x-4">
                <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C9A24B] to-[#C9A24B]/80" />
                <span className="font-script text-5xl sm:text-6xl text-[#C9A24B] leading-none px-3 select-none">
                  &
                </span>
                <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C9A24B] to-[#C9A24B]/80" />
              </div>

              {/* Bride Name: Mozart Script */}
              <div className="my-2 overflow-visible">
                {lang === "hi" ? (
                  <>
                    <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6E1F2E] tracking-wide leading-tight">
                      {couple.bride.name.hi}
                    </h2>
                    <p className="font-script text-5xl sm:text-6xl md:text-7xl text-copper-gold-gradient py-1 overflow-visible leading-tight">
                      Sejal
                    </p>
                  </>
                ) : (
                  <h2 className="font-script text-6xl sm:text-7xl md:text-8xl font-normal text-copper-gold-gradient py-2 overflow-visible leading-tight drop-shadow-sm">
                    Sejal
                  </h2>
                )}
              </div>

              {/* Bride Parents */}
              <p className="mt-2 font-serif-luxury text-sm sm:text-base font-semibold text-[#2D1B1B] leading-relaxed">
                {couple.bride.parents[lang]}
              </p>

              {/* Bride Grandparents */}
              <p className="mt-0.5 font-serif-italic text-sm sm:text-base text-[#6D5248] leading-normal">
                ({couple.bride.grandparents[lang]})
              </p>
            </div>
          </ScrollReveal>

          {/* Bottom Location & Date Bar */}
          <div className="mt-10 border-t border-[#E6C97E]/40 pt-4 text-center">
            <KalashMotif size={32} className="mx-auto mb-1" />
            <p className="font-royal-eyebrow text-sm sm:text-base font-semibold tracking-widest text-[#8C631F]">
              {city[lang]} • {state[lang]}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
