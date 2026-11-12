"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { invitationConfig } from "@/config/invitation";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import KalashMotif from "./motifs/KalashMotif";

interface ClosingScreenProps {
  lang: "hi" | "en";
}

export default function ClosingScreen({ lang }: ClosingScreenProps) {
  const { closing } = invitationConfig;

  return (
    <footer className="relative z-20 mt-12 w-full bg-gradient-to-b from-[#3D141E] via-[#240C12] to-[#14060A] px-4 py-16 text-[#FFF5DE] shadow-inner">
      <div className="mx-auto max-w-xl text-center">

        {/* Kalash motif at top */}
        <ScrollReveal animation="fade-in">
          <KalashMotif size={44} color="#E6C97E" className="mx-auto mb-3" />
        </ScrollReveal>

        {/* Top Auspicious Flower Emblem */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mx-auto mb-4 flex items-center justify-center space-x-2 text-[#E6C97E]">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <Heart className="h-4 w-4 fill-[#E6C97E] text-[#E6C97E]" />
            <span className="h-px w-10 bg-[#C9A24B]" />
          </div>

          {/* Title: दर्शनाभिलाषी / With Warm Regards */}
          <h3 className="font-hindi-royal text-xl sm:text-2xl font-bold tracking-widest text-[#FFE6A3]">
            {closing.darshanabhilashi[lang]}
          </h3>
        </ScrollReveal>

        {/* Royal Family Members Roll of Honor */}
        <ScrollReveal animation="fade-up" delay={250}>
          <div className="mt-5 rounded-t-[60px] rounded-b-2xl border-2 border-[#C9A24B]/50 bg-[#4A1824]/75 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            {/* Inner decorative border */}
            <div className="pointer-events-none absolute inset-1 rounded-t-[54px] rounded-b-[14px] border border-[#E6C97E]/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-left sm:text-center">
              {closing.familyMembers?.map((member, idx) => {
                const fullText = member[lang];
                const parts = fullText.split(" ");
                const prefix = parts[0];
                const name = parts.slice(1).join(" ");

                return (
                  <ScrollReveal
                    key={idx}
                    animation="fade-up-stagger"
                    delay={300 + idx * 80}
                  >
                    <div
                      className={`flex items-center justify-start sm:justify-center space-x-2 text-sm sm:text-base ${
                        lang === "hi" ? "font-hindi-royal" : "font-serif-luxury"
                      } text-[#FFF8ED] transition-transform hover:translate-x-1 sm:hover:translate-x-0`}
                    >
                      <span className="text-[#E6C97E] text-xs shrink-0">✦</span>
                      <span className="font-bold text-[#FFE6A3] tracking-wider">{prefix}</span>
                      <span className="font-semibold tracking-wide">{name}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="mt-6 border-t border-[#C9A24B]/30 pt-4 text-center">
              <p className="font-hindi-royal text-sm sm:text-base font-bold text-[#FFE6A3] tracking-widest">
                {lang === "hi" ? "॥ एवं समस्त चौरसिया परिवार ॥" : "— & All Family Members —"}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Warm Closing Note */}
        <ScrollReveal animation="fade-up" delay={500}>
          <p className="mt-8 font-serif-italic text-sm sm:text-base font-medium leading-relaxed text-[#FFE6A3] px-4">
            &ldquo;{closing.warmNote[lang]}&rdquo;
          </p>
        </ScrollReveal>

        {/* Mozart Script Couple Sign-off */}
        <ScrollReveal animation="scale-up" delay={600}>
          <div className="mt-10 border-t border-[#C9A24B]/30 pt-8">
            <p className="font-script text-5xl sm:text-6xl md:text-7xl text-copper-gold-gradient py-2 overflow-visible leading-snug drop-shadow-md">
              Vipul & Sejal
            </p>
            <div className="mt-2 flex items-center justify-center space-x-2 text-sm text-[#FFE6A3]">
              <Sparkles className="h-3 w-3" />
              <span className="font-numeral font-bold">11.12.2026</span>
              <span>•</span>
              <span className="font-hindi-royal">पट्टी, प्रतापगढ़</span>
              <Sparkles className="h-3 w-3" />
            </div>
          </div>
        </ScrollReveal>

        {/* Auspicious Sanskrit Benediction at bottom */}
        <ScrollReveal animation="fade-in" delay={700}>
          <div className="mt-8 font-hindi-royal text-sm sm:text-base text-[#FFE6A3] tracking-widest">
            ॥ शुभम भवतु ॥
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
