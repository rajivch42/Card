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
      {/* Outer Card with Royal Arch and Gold Double Borders */}
      <div className="relative rounded-t-[120px] rounded-b-3xl border-2 border-[#C9A24B]/50 bg-[#FFFDF9]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        
        {/* Ornate Gold Filigree Corner Accents */}
        <div className="absolute top-4 left-6 text-[#C9A24B] opacity-80 text-xl select-none">❧</div>
        <div className="absolute top-4 right-6 text-[#C9A24B] opacity-80 text-xl select-none">☙</div>
        <div className="absolute bottom-4 left-4 text-[#C9A24B] opacity-80 text-lg select-none">✤</div>
        <div className="absolute bottom-4 right-4 text-[#C9A24B] opacity-80 text-lg select-none">✤</div>

        {/* Inner Golden Inset Border */}
        <div className="pointer-events-none absolute inset-2 rounded-t-[112px] rounded-b-[20px] border border-[#E6C97E]/40" />

        {/* 1. Divine Radha-Krishna Emblem */}
        <div className="relative mx-auto mt-2 flex flex-col items-center text-center">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-[#C9A24B] shadow-lg animate-pulse-glow">
            <Image
              src={blessing.motifImage}
              alt="राधा कृष्ण"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p className="mt-3 font-devanagari text-xs sm:text-sm font-semibold tracking-wider text-[#8C631F]">
            ॥ ॐ श्री राधा-कृष्णाय नमः ॥
          </p>
        </div>

        {/* 2. Sacred Sanskrit Shloka */}
        <div className="mt-6 rounded-2xl border border-[#E6C97E]/50 bg-[#FDF5E6]/60 p-4 text-center shadow-inner">
          <div className="mx-auto mb-1 flex items-center justify-center space-x-2 text-[#C9A24B]">
            <span className="h-px w-6 bg-[#C9A24B]" />
            <span className="text-xs">卐</span>
            <span className="h-px w-6 bg-[#C9A24B]" />
          </div>
          <p className="font-devanagari text-sm sm:text-base font-bold leading-relaxed text-[#6E1F2E] whitespace-pre-line">
            {blessing.shloka}
          </p>
          <p className="mt-2 font-devanagari text-[11px] sm:text-xs text-[#7A625C] italic">
            {blessing.shlokaMeaning[lang]}
          </p>
        </div>

        {/* 3. Auspicious Family Blessing Line */}
        <div className="mt-6 text-center">
          <p className="font-devanagari text-sm sm:text-base text-[#4A2E2B] leading-relaxed font-medium">
            {blessing.line[lang]}
          </p>
        </div>

        {/* 4. Couple Names & Family Lineage */}
        <div className="mt-8 space-y-6 text-center">
          
          {/* Groom Section */}
          <div className="rounded-2xl border border-[#C9A24B]/30 bg-gradient-to-b from-[#FFF9EE] to-[#FFFDF9] p-5 shadow-sm">
            <span className="inline-block rounded-full border border-[#C9A24B]/40 bg-[#FFF5E0] px-3 py-0.5 font-devanagari text-xs font-semibold text-[#8C631F]">
              {lang === "hi" ? "आयुष्मान" : "Groom"}
            </span>
            <h2 className="mt-1 font-devanagari text-3xl sm:text-4xl font-extrabold text-[#6E1F2E] tracking-wide drop-shadow-sm">
              {couple.groom.name[lang]}
            </h2>
            <div className="mt-2 space-y-1 font-devanagari text-xs sm:text-sm text-[#5C4033]">
              <p className="font-semibold text-[#6E1F2E]">
                {couple.groom.parents[lang]}
              </p>
              <p className="text-[#8C631F]">
                {couple.groom.grandparents[lang]}
              </p>
            </div>
          </div>

          {/* Golden Sang / Ampersand Flourish */}
          <div className="relative flex items-center justify-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
            <div className="mx-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A24B] bg-[#FFF5DE] shadow-md">
              <span className="font-devanagari text-lg font-bold text-[#6E1F2E]">
                {lang === "hi" ? "संग" : "weds"}
              </span>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
          </div>

          {/* Bride Section */}
          <div className="rounded-2xl border border-[#C9A24B]/30 bg-gradient-to-b from-[#FFF9EE] to-[#FFFDF9] p-5 shadow-sm">
            <span className="inline-block rounded-full border border-[#C9A24B]/40 bg-[#FFF5E0] px-3 py-0.5 font-devanagari text-xs font-semibold text-[#8C631F]">
              {lang === "hi" ? "आयुष्मती" : "Bride"}
            </span>
            <h2 className="mt-1 font-devanagari text-3xl sm:text-4xl font-extrabold text-[#6E1F2E] tracking-wide drop-shadow-sm">
              {couple.bride.name[lang]}
            </h2>
            <div className="mt-2 space-y-1 font-devanagari text-xs sm:text-sm text-[#5C4033]">
              <p className="font-semibold text-[#6E1F2E]">
                {couple.bride.parents[lang]}
              </p>
              <p className="text-[#8C631F]">
                {couple.bride.grandparents[lang]}
              </p>
            </div>
          </div>

        </div>

        {/* Location Banner */}
        <div className="mt-6 border-t border-[#E6C97E]/50 pt-4 text-center">
          <p className="font-devanagari text-xs sm:text-sm font-semibold tracking-wider text-[#8C631F]">
            {city[lang]} • {state[lang]}
          </p>
        </div>

      </div>
    </section>
  );
}
