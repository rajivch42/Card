"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { invitationConfig } from "@/config/invitation";

interface ClosingScreenProps {
  lang: "hi" | "en";
}

export default function ClosingScreen({ lang }: ClosingScreenProps) {
  const { closing } = invitationConfig;

  return (
    <footer className="relative z-20 mt-12 w-full bg-gradient-to-b from-[#3D141E] via-[#240C12] to-[#14060A] px-4 py-16 text-[#FFF5DE] shadow-inner">
      <div className="mx-auto max-w-xl text-center">
        
        {/* Top Auspicious Flower Emblem */}
        <div className="mx-auto mb-4 flex items-center justify-center space-x-2 text-[#E6C97E]">
          <span className="h-px w-10 bg-[#C9A24B]" />
          <Heart className="h-4 w-4 fill-[#E6C97E] text-[#E6C97E]" />
          <span className="h-px w-10 bg-[#C9A24B]" />
        </div>

        {/* Title: दर्शनाभिलाषी / With Warm Regards */}
        <h3 className="font-hindi-royal text-xl sm:text-2xl font-bold tracking-widest text-[#E6C97E]">
          {closing.darshanabhilashi[lang]}
        </h3>

        {/* Royal Family Members Roll of Honor */}
        <div className="mt-5 rounded-2xl border border-[#C9A24B]/40 bg-[#4A1824]/75 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-left sm:text-center">
            {closing.familyMembers?.map((member, idx) => {
              const fullText = member[lang];
              const parts = fullText.split(" ");
              const prefix = parts[0];
              const name = parts.slice(1).join(" ");

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-start sm:justify-center space-x-2 text-sm sm:text-base ${
                    lang === "hi" ? "font-hindi-royal" : "font-serif-luxury"
                  } text-[#FFF8ED] transition-transform hover:translate-x-1 sm:hover:translate-x-0`}
                >
                  <span className="text-[#E6C97E] text-xs shrink-0">✦</span>
                  <span className="font-bold text-[#F5D580] tracking-wider">{prefix}</span>
                  <span className="font-semibold tracking-wide">{name}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-t border-[#C9A24B]/30 pt-4 text-center">
            <p className="font-hindi-royal text-sm sm:text-base font-bold text-[#E6C97E] tracking-widest">
              {lang === "hi" ? "॥ एवं समस्त चौरसिया परिवार ॥" : "— & All Family Members —"}
            </p>
          </div>
        </div>

        {/* Warm Closing Note */}
        <p className="mt-8 font-serif-italic text-sm sm:text-base font-medium leading-relaxed text-[#EAD098] px-4">
          &ldquo;{closing.warmNote[lang]}&rdquo;
        </p>

        {/* Mozart Script Couple Sign-off (--font-script) */}
        <div className="mt-10 border-t border-[#C9A24B]/30 pt-8">
          <p className="font-script text-5xl sm:text-6xl md:text-7xl text-copper-gold-gradient py-2 overflow-visible leading-snug drop-shadow-md">
            Vipul & Sejal
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2 text-xs text-[#C9A24B]/90">
            <Sparkles className="h-3 w-3" />
            <span className="font-numeral font-bold">11.12.2026</span>
            <span>•</span>
            <span className="font-hindi-royal">पट्टी, प्रतापगढ़</span>
            <Sparkles className="h-3 w-3" />
          </div>
        </div>

        {/* Auspicious Sanskrit Benediction at bottom */}
        <div className="mt-8 font-hindi-royal text-xs sm:text-sm text-[#D4AF37] tracking-widest">
          ॥ शुभम भवतु ॥
        </div>

      </div>
    </footer>
  );
}
