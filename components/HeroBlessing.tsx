"use client";

import React from "react";
import Image from "next/image";
import { invitationConfig } from "@/config/invitation";

interface HeroBlessingProps {
  lang: "hi" | "en";
}

export default function HeroBlessing({ lang }: HeroBlessingProps) {
  const { couple, blessing, city, state } = invitationConfig;

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 pt-16 pb-8">
      {/* Outer Royal Card with Arch and Double Gold Border */}
      <div className="relative rounded-t-[120px] rounded-b-3xl border-2 border-[#C9A24B]/40 bg-[#FFFDF9]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Subtle decorative gold corner ornaments */}
        <div className="absolute top-4 left-6 text-[#C9A24B] opacity-70 text-lg select-none">❧</div>
        <div className="absolute top-4 right-6 text-[#C9A24B] opacity-70 text-lg select-none">☙</div>
        <div className="absolute bottom-4 left-6 text-[#C9A24B] opacity-70 text-base select-none">✤</div>
        <div className="absolute bottom-4 right-6 text-[#C9A24B] opacity-70 text-base select-none">✤</div>

        {/* Inner Delicate Inset Border */}
        <div className="pointer-events-none absolute inset-2.5 rounded-t-[110px] rounded-b-[20px] border border-[#E6C97E]/30" />

        {/* 1. Divine Radha-Krishna Emblem */}
        <div className="relative mx-auto mt-2 flex flex-col items-center text-center">
          <div className="relative h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-full border-3 border-[#C9A24B] shadow-lg animate-pulse-glow">
            <Image
              src={blessing.motifImage}
              alt="राधा कृष्ण"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p className="mt-3 font-hindi-royal text-xs sm:text-sm font-semibold tracking-widest text-[#8C631F]">
            ॥ ॐ श्री राधा-कृष्णाय नमः ॥
          </p>
        </div>

        {/* 2. Sacred Sanskrit Shloka */}
        <div className="mt-5 rounded-2xl border border-[#E6C97E]/40 bg-[#FDF7ED]/70 p-4 text-center shadow-inner">
          <div className="mx-auto mb-1 flex items-center justify-center space-x-2 text-[#C9A24B]">
            <span className="h-px w-6 bg-[#C9A24B]" />
            <span className="text-xs">卐</span>
            <span className="h-px w-6 bg-[#C9A24B]" />
          </div>
          <p className="font-hindi-shloka text-sm sm:text-base font-bold leading-relaxed text-[#6E1F2E] whitespace-pre-line">
            {blessing.shloka}
          </p>
          <p className="mt-2 font-serif-italic text-xs text-[#735A53]">
            {blessing.shlokaMeaning[lang]}
          </p>
        </div>

        {/* 3. Auspicious Blessing Line */}
        <div className="mt-6 text-center">
          <p className="font-serif-luxury text-sm sm:text-base text-[#4A2E2B] leading-relaxed font-medium px-2">
            {blessing.line[lang]}
          </p>
        </div>

        {/* 4. Luxury Reference Typography Section */}
        <div className="mt-8 text-center">
          
          {/* Eyebrow: celebration of / शुभ परिणय उत्सव */}
          <p className="font-serif-italic text-sm sm:text-base text-[#8C6F5A] tracking-wider mb-2">
            {lang === "hi" ? "पावन परिणय सूत्र" : "celebration of"}
          </p>

          {/* Groom Name: Mozart Script (with Pinyon fallback) for English, existing font for Hindi */}
          <div className="my-1 overflow-visible">
            {lang === "hi" ? (
              <>
                <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6E1F2E] tracking-wide leading-tight">
                  {couple.groom.name.hi}
                </h2>
                <p className="font-script text-4xl sm:text-5xl md:text-6xl text-copper-gold-gradient py-1 overflow-visible leading-snug">
                  Vipul
                </p>
              </>
            ) : (
              <h2 className="font-script text-5xl sm:text-6xl md:text-7xl font-normal text-copper-gold-gradient py-2 overflow-visible leading-snug">
                Vipul
              </h2>
            )}
          </div>

          {/* Groom Parents */}
          <p className="mt-3 font-serif-luxury text-sm sm:text-base font-medium text-[#3A2A24] leading-relaxed">
            {couple.groom.parents[lang]}
          </p>

          {/* Groom Grandparents (Italicized in parentheses like reference) */}
          <p className="mt-1 font-serif-italic text-xs sm:text-sm text-[#6D5248] leading-normal">
            ({couple.groom.grandparents[lang]})
          </p>

          {/* Elegant Divider: —— & —— with Mozart Script ampersand */}
          <div className="my-6 flex items-center justify-center space-x-3 sm:space-x-4">
            <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C9A24B] to-[#C9A24B]/80" />
            <span className="font-script text-4xl sm:text-5xl text-[#C9A24B] leading-none px-2 select-none">
              &
            </span>
            <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C9A24B] to-[#C9A24B]/80" />
          </div>

          {/* Bride Name: Mozart Script (with Pinyon fallback) for English, existing font for Hindi */}
          <div className="my-1 overflow-visible">
            {lang === "hi" ? (
              <>
                <h2 className="font-hindi-royal text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6E1F2E] tracking-wide leading-tight">
                  {couple.bride.name.hi}
                </h2>
                <p className="font-script text-4xl sm:text-5xl md:text-6xl text-copper-gold-gradient py-1 overflow-visible leading-snug">
                  Sejal
                </p>
              </>
            ) : (
              <h2 className="font-script text-5xl sm:text-6xl md:text-7xl font-normal text-copper-gold-gradient py-2 overflow-visible leading-snug">
                Sejal
              </h2>
            )}
          </div>

          {/* Bride Parents */}
          <p className="mt-3 font-serif-luxury text-sm sm:text-base font-medium text-[#3A2A24] leading-relaxed">
            {couple.bride.parents[lang]}
          </p>

          {/* Bride Grandparents */}
          <p className="mt-1 font-serif-italic text-xs sm:text-sm text-[#6D5248] leading-normal">
            ({couple.bride.grandparents[lang]})
          </p>

        </div>

        {/* Bottom Location & Date Bar */}
        <div className="mt-10 border-t border-[#E6C97E]/40 pt-4 text-center">
          <p className="font-royal-eyebrow text-xs sm:text-sm font-semibold tracking-widest text-[#8C631F]">
            {city[lang]} • {state[lang]}
          </p>
        </div>

      </div>
    </section>
  );
}
