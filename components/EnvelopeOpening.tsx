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
        {/* Sacred Invocation & Mystery Invitation Header (NO names on cover for surprise factor) */}
        <div className="mb-2 flex items-center space-x-3 text-[#E6C97E]">
          <span className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#E6C97E] to-[#C9A24B]" />
          <span className="font-hindi-royal text-base sm:text-xl tracking-widest font-bold text-[#FFE6A3] drop-shadow-md">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#E6C97E] to-[#C9A24B]" />
        </div>

        <h1 className="font-hindi-royal text-2xl sm:text-3xl md:text-4xl text-[#E6C97E] font-bold tracking-wider leading-snug drop-shadow-md">
          {lang === "hi" ? "॥ स्नेह निमंत्रण पत्रिका ॥" : "Royal Wedding Invitation"}
        </h1>

        <p className="font-serif-italic text-xs sm:text-sm text-[#D4AF37]/90 tracking-widest uppercase mt-1 mb-2">
          {lang === "hi" ? "पावन परिणय उत्सव • पट्टी, प्रतापगढ़ (उ.प्र.)" : "A Sacred Royal Union • Pratapgarh"}
        </p>

        {/* Large, Hyper-Realistic Royal Envelope & Emerging Card Container */}
        <div
          onClick={handleEnvelopeClick}
          className={`group relative mt-4 cursor-pointer select-none transition-transform duration-700 w-[350px] sm:w-[480px] md:w-[540px] max-w-[94vw] h-[262px] sm:h-[360px] md:h-[405px] ${
            isStarted ? "" : "hover:scale-[1.02] active:scale-98"
          }`}
        >
          {/* Ambient golden aura glow behind envelope */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#C9A24B] via-[#F5B82E] to-[#C9A24B] opacity-40 blur-2xl group-hover:opacity-75 transition duration-1000 animate-pulse" />

          {/* ========================================================
              THE INNER INVITATION CARD (Surprise Reveal: Slides majestically UP!)
             ======================================================== */}
          <div
            className={`absolute left-3 right-3 sm:left-6 sm:right-6 z-15 flex flex-col items-center justify-center rounded-t-[40px] sm:rounded-t-[50px] rounded-b-xl border-2 border-[#C9A24B] bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFF3DC] p-4 sm:p-6 shadow-2xl transition-all duration-1000 ease-out ${
              isCardOut
                ? "-translate-y-40 sm:-translate-y-56 md:-translate-y-64 scale-[1.06] shadow-[0_25px_60px_rgba(201,162,75,0.7)]"
                : "translate-y-4 opacity-90 scale-95 pointer-events-none"
            }`}
            style={{ height: "230px", top: "10px" }}
          >
            {/* Arch Top with Radha Krishna Icon & Titles */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#C9A24B] shadow-md mb-1.5">
                <Image
                  src="/images/radha_krishna.jpg"
                  alt="राधा कृष्ण"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-hindi-royal text-[11px] sm:text-xs font-bold text-[#8C631F] tracking-wider">
                ॥ श्री राधा-कृष्णाय नमः ॥
              </span>
              {/* Couple Names in Mozart Script - The Surprise Unveiled! */}
              <p className="font-script text-3xl sm:text-4xl md:text-5xl text-copper-gold-gradient leading-tight mt-1 py-1">
                Vipul & Sejal
              </p>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#6E1F2E] mt-0.5">
                <span className="font-numeral tracking-wider font-bold">11 • 12 • 2026</span>
                <span>•</span>
                <span className="font-hindi-royal">पट्टी, प्रतापगढ़</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              THE REALISTIC ROYAL ENVELOPE BASE
             ======================================================== */}
          <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl border-2 border-[#D4AF37]/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(201,162,75,0.3)] bg-[#FFFDF9]">
            {/* Authentic Photorealistic Royal Silk Envelope with Embossed Gold Foil */}
            <Image
              src="/images/royal_envelope_clean.png"
              alt="Royal Wedding Envelope"
              fill
              priority
              className="object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Subtle luxury light sheen reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/15 pointer-events-none" />

            {/* Pulsing golden aura over the antique wax seal */}
            <div
              className={`absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none transition-all duration-500 ${
                isStarted ? "scale-150 opacity-0" : "group-hover:scale-110"
              }`}
            >
              <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full border border-[#FFF0BA]/60 animate-ping opacity-35" />
            </div>
          </div>
        </div>

        {/* Tap Instruction Button */}
        <div
          onClick={handleEnvelopeClick}
          className={`mt-6 sm:mt-7 flex cursor-pointer items-center space-x-2.5 rounded-full border border-[#E6C97E]/80 bg-gradient-to-r from-[#4A1824]/90 via-[#6E1F2E]/90 to-[#4A1824]/90 px-6 py-2.5 sm:py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#FFE6A3] active:scale-95 ${
            isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Sparkles className="h-4 w-4 text-[#F5B82E] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="font-hindi-royal text-sm sm:text-base font-semibold text-[#FFF5DE] tracking-wide">
            {lang === "hi"
              ? "शाही लिफाफा स्पर्श कर निमंत्रण खोलें"
              : "Tap the royal envelope to reveal"}
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
