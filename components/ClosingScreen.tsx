"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { invitationConfig } from "@/config/invitation";

interface ClosingScreenProps {
  lang: "hi" | "en";
}

export default function ClosingScreen({ lang }: ClosingScreenProps) {
  const { closing, couple } = invitationConfig;

  return (
    <footer className="relative z-20 mt-12 w-full bg-gradient-to-b from-[#3D141E] via-[#2A0E15] to-[#1C090E] px-4 py-16 text-[#FFF5DE] shadow-inner">
      <div className="mx-auto max-w-xl text-center">
        
        {/* Top Auspicious Flower Emblem */}
        <div className="mx-auto mb-4 flex items-center justify-center space-x-2 text-[#E6C97E]">
          <span className="h-px w-10 bg-[#C9A24B]" />
          <Heart className="h-4 w-4 fill-[#E6C97E] text-[#E6C97E]" />
          <span className="h-px w-10 bg-[#C9A24B]" />
        </div>

        {/* Title: दर्शनाभिलाषी */}
        <h3 className="font-devanagari text-xl sm:text-2xl font-bold tracking-widest text-[#E6C97E]">
          {closing.darshanabhilashi[lang]}
        </h3>

        {/* Host Names */}
        <div className="mt-4 rounded-2xl border border-[#C9A24B]/30 bg-[#4A1824]/60 p-6 shadow-lg backdrop-blur-sm">
          <p className="font-devanagari text-base sm:text-lg font-semibold leading-relaxed text-[#FFF8ED] whitespace-pre-line">
            {closing.family[lang]}
          </p>
        </div>

        {/* Warm Closing Note */}
        <p className="mt-8 font-devanagari text-sm sm:text-base font-medium leading-relaxed text-[#EAD098] px-4">
          &ldquo;{closing.warmNote[lang]}&rdquo;
        </p>

        {/* Gold Script Couple Sign-off */}
        <div className="mt-10 border-t border-[#C9A24B]/30 pt-8">
          <p className="font-script text-4xl sm:text-5xl text-[#E6C97E] tracking-wider drop-shadow-md">
            Vipul & Sejal
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2 text-xs font-devanagari text-[#C9A24B]/80">
            <Sparkles className="h-3 w-3" />
            <span>11 दिसंबर 2026 • पट्टी, प्रतापगढ़</span>
            <Sparkles className="h-3 w-3" />
          </div>
        </div>

        {/* Auspicious Sanskrit Benediction at bottom */}
        <div className="mt-8 text-xs font-devanagari text-[#A88842]">
          ॥ शुभम भवतु ॥
        </div>

      </div>
    </footer>
  );
}
