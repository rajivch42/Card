"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { audioPlayer } from "./audioPlayer";

interface EnvelopeOpeningProps {
  onOpen: () => void;
  lang: "hi" | "en";
}

export default function EnvelopeOpening({ onOpen, lang }: EnvelopeOpeningProps) {
  const [animationStage, setAnimationStage] = useState<"idle" | "opening" | "cardExtracting" | "flashing" | "done">("idle");

  const handleEnvelopeClick = () => {
    if (animationStage !== "idle") return;

    // 1. Immediate synchronous audio trigger on user gesture
    try {
      const domAudio = document.getElementById("wedding-bg-audio") as HTMLAudioElement | null;
      if (domAudio) {
        domAudio.muted = false;
        domAudio.volume = 0.9;
        domAudio.play().catch(() => {});
      }
      audioPlayer.play();
    } catch (e) {
      console.warn("Audio start error:", e);
    }

    // 2. Haptic feedback on mobile if supported
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([35, 50, 35]);
      } catch (e) {}
    }

    // 3. Stage sequence:
    // Stage 1: Break seal & open flap
    setAnimationStage("opening");

    // Stage 2: Card smoothly slides out of envelope
    setTimeout(() => {
      setAnimationStage("cardExtracting");
    }, 400);

    // Stage 3: Smooth golden radiant flash beam
    setTimeout(() => {
      setAnimationStage("flashing");
    }, 1100);

    // Stage 4: Reveal main invitation hero
    setTimeout(() => {
      setAnimationStage("done");
      onOpen();
    }, 1700);
  };

  const isStarted = animationStage !== "idle";
  const isCardOut = animationStage === "cardExtracting" || animationStage === "flashing" || animationStage === "done";
  const isFlashing = animationStage === "flashing";

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#200A10] px-4 transition-all duration-1000 ${
        animationStage === "done" ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "1000px" }}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.3)_0%,rgba(32,10,16,0.98)_75%)] pointer-events-none" />

      {/* Floating divine sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-[#E6C97E] animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-[#F5B82E] animate-pulse opacity-70" />
        <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-[#E6C97E] animate-bounce opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center">
        {/* Sacred Invocation */}
        <div className="mb-3 flex items-center space-x-2 text-[#E6C97E]">
          <span className="h-px w-8 bg-[#C9A24B]" />
          <span className="font-hindi-royal text-base sm:text-lg tracking-widest font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="h-px w-8 bg-[#C9A24B]" />
        </div>

        <p className="font-serif-italic text-sm sm:text-base text-[#D4AF37] tracking-wider">
          {lang === "hi" ? "शुभ परिणय निमंत्रण" : "Royal Wedding Invitation"}
        </p>

        {/* Couple Names in Mozart Script */}
        <h1 className="mt-1 font-script text-5xl sm:text-6xl md:text-7xl text-copper-gold-gradient py-2 overflow-visible leading-snug">
          Vipul & Sejal
        </h1>

        {/* Interactive Royal Envelope & Emerging Card Container */}
        <div
          onClick={handleEnvelopeClick}
          className={`group relative mt-4 cursor-pointer select-none transition-transform duration-700 ${
            isStarted ? "" : "hover:scale-[1.03] active:scale-98"
          }`}
          style={{ width: "320px", height: "250px" }}
        >
          {/* Pulsing golden aura glow behind envelope */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#C9A24B] via-[#F5B82E] to-[#C9A24B] opacity-60 blur-xl group-hover:opacity-95 transition duration-1000 animate-pulse" />

          {/* ========================================================
              THE INNER INVITATION CARD (Sliding smoothly UP out of the pocket!)
             ======================================================== */}
          <div
            className={`absolute left-4 right-4 z-15 flex flex-col items-center justify-center rounded-t-[50px] rounded-b-xl border border-[#C9A24B] bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6] p-4 shadow-2xl transition-all duration-1000 ease-out ${
              isCardOut
                ? "-translate-y-36 sm:-translate-y-44 scale-[1.08] shadow-[0_20px_50px_rgba(201,162,75,0.6)]"
                : "translate-y-4 opacity-90 scale-95"
            }`}
            style={{ height: "220px", top: "10px" }}
          >
            {/* Arch Top with Radha Krishna Icon & Titles */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#C9A24B] shadow-sm mb-1">
                <Image
                  src="/images/radha_krishna.jpg"
                  alt="राधा कृष्ण"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-hindi-royal text-[11px] font-bold text-[#8C631F]">
                ॥ श्री राधा-कृष्णाय नमः ॥
              </span>
              <p className="font-script text-2xl sm:text-3xl text-copper-gold-gradient leading-tight mt-1">
                Vipul & Sejal
              </p>
              <span className="font-numeral text-xs font-bold text-[#6E1F2E] mt-0.5">
                11 • 12 • 2026
              </span>
            </div>
          </div>

          {/* ========================================================
              THE ENVELOPE BASE (Pocket Front)
             ======================================================== */}
          <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl border-2 border-[#E6C97E] bg-[#FFFBF4] shadow-2xl flex flex-col justify-between p-3">
            
            {/* Top Triangular Flap with 3D Rotate Open Effect */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 origin-top border-b-2 border-[#E6C97E]/70 bg-gradient-to-b from-[#FFF5DE] to-[#FFFBF4] shadow-md transition-transform duration-700 ease-in-out ${
                isStarted ? "-rotate-x-180 opacity-20 pointer-events-none" : "rotate-x-0 opacity-100"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-full w-full bg-[radial-gradient(#C9A24B_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-25" />
            </div>

            {/* Corner Filigree Ornaments */}
            <div className="absolute top-2 left-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute top-2 right-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute bottom-2 left-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute bottom-2 right-2 text-[#C9A24B] text-xs">✤</div>

            {/* Center Royal Wax Seal Medallion */}
            <div
              className={`relative z-30 my-auto flex flex-col items-center transition-all duration-500 ${
                isStarted ? "scale-125 opacity-0 pointer-events-none" : "group-hover:scale-105"
              }`}
            >
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-3 border-[#FFE6A3] bg-gradient-to-br from-[#E6C97E] via-[#C9A24B] to-[#8C631F] shadow-2xl">
                <div className="absolute inset-1.5 rounded-full border border-[#FFF0BA]/80" />
                <div className="flex flex-col items-center justify-center text-[#3D1A22] text-center px-1">
                  <span className="font-hindi-royal text-xs font-bold leading-tight">
                    श्री
                  </span>
                  <span className="font-hindi-royal text-sm font-extrabold tracking-wider leading-tight">
                    शुभ विवाह
                  </span>
                  <span className="font-numeral text-xs tracking-wider text-[#5C232F] font-bold mt-0.5">
                    11.12.2026
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Pocket Banner */}
            <div className="relative z-25 w-full flex items-center justify-between px-3 text-[11px] font-hindi-royal text-[#8C631F]">
              <span>॥ वक्रतुण्डाय हुम् ॥</span>
              <span>पट्टी, प्रतापगढ़</span>
            </div>
          </div>
        </div>

        {/* Tap Instruction Button */}
        <div
          onClick={handleEnvelopeClick}
          className={`mt-6 flex cursor-pointer items-center space-x-2 rounded-full border border-[#E6C97E]/70 bg-[#3D141E]/80 px-5 py-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#521C29] active:scale-95 ${
            isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Sparkles className="h-4 w-4 text-[#F5B82E] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="font-hindi-royal text-sm font-medium text-[#FFF4DE]">
            {lang === "hi"
              ? "लिफाफे को स्पर्श कर निमंत्रण खोलें"
              : "Tap the royal envelope to open"}
          </span>
          <Sparkles className="h-4 w-4 text-[#F5B82E]" />
        </div>
      </div>

      {/* ========================================================
          DIVINE RADIANT GOLDEN FLASH BEAM
         ======================================================== */}
      <div
        className={`pointer-events-none fixed inset-0 z-60 bg-[radial-gradient(circle_at_center,rgba(255,248,220,1)_0%,rgba(230,201,126,0.95)_45%,rgba(110,31,46,0.4)_100%)] transition-opacity duration-700 ease-in-out ${
          isFlashing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
