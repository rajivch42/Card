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
  const [isOpening, setIsOpening] = useState(false);

  const handleEnvelopeClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger haptic vibration if supported on phone
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([40, 60, 40]);
      } catch (e) {
        // Ignore if unsupported
      }
    }

    // Start authentic wedding instrumental music on this gesture
    audioPlayer.play();

    // Smooth transition into the main invitation
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2B0F16] px-4 transition-all duration-1000 ${
        isOpening ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.25)_0%,rgba(43,15,22,0.95)_75%)]" />

      {/* Floating divine sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-[#E6C97E] animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-[#F5B82E] animate-pulse opacity-70" />
        <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-[#E6C97E] animate-bounce opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center">
        {/* Sacred Invocation */}
        <div className="mb-4 flex items-center space-x-2 text-[#E6C97E]">
          <span className="h-px w-8 bg-[#C9A24B]" />
          <span className="font-devanagari text-lg tracking-widest font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="h-px w-8 bg-[#C9A24B]" />
        </div>

        <h1 className="font-devanagari text-2xl md:text-3xl font-bold text-[#FFF6E5] drop-shadow-md">
          {lang === "hi" ? "पावन परिणय सूत्र निमंत्रण" : "Royal Wedding Invitation"}
        </h1>

        <p className="mt-1 font-script text-3xl md:text-4xl text-[#E6C97E] tracking-wide">
          Vipul & Sejal
        </p>

        {/* Interactive Royal Envelope Card */}
        <div
          onClick={handleEnvelopeClick}
          className={`group relative mt-6 cursor-pointer transition-transform duration-700 select-none ${
            isOpening ? "scale-110" : "hover:scale-[1.03] active:scale-95"
          }`}
        >
          {/* Pulsing golden aura glow behind envelope */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#C9A24B] via-[#F5B82E] to-[#C9A24B] opacity-60 blur-xl group-hover:opacity-90 animate-envelope-glow transition duration-1000" />

          {/* Envelope Body */}
          <div className="relative overflow-hidden rounded-xl border-2 border-[#E6C97E] bg-[#FFFBF4] p-3 shadow-2xl w-[320px] sm:w-[380px] h-[240px] sm:h-[270px] flex flex-col items-center justify-between">
            {/* Top Triangular Flap Simulation */}
            <div className="absolute top-0 left-0 right-0 h-1/2 border-b-2 border-[#E6C97E]/70 bg-gradient-to-b from-[#FFF5DE] to-[#FFFBF4] shadow-sm flex items-center justify-center">
              <div className="h-full w-full bg-[radial-gradient(#C9A24B_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-25" />
            </div>

            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute top-2 right-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute bottom-2 left-2 text-[#C9A24B] text-xs">✤</div>
            <div className="absolute bottom-2 right-2 text-[#C9A24B] text-xs">✤</div>

            {/* Center Royal Wax Seal Medallion */}
            <div className="relative z-20 my-auto flex flex-col items-center">
              <div
                className={`relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-3 border-[#FFE6A3] bg-gradient-to-br from-[#E6C97E] via-[#C9A24B] to-[#8C631F] shadow-2xl transition-all duration-700 ${
                  isOpening ? "scale-125 rotate-45 opacity-0" : "group-hover:scale-105"
                }`}
              >
                {/* Wax seal ring impression */}
                <div className="absolute inset-1.5 rounded-full border border-[#FFF0BA]/80" />
                <div className="flex flex-col items-center justify-center text-[#3D1A22] text-center px-1">
                  <span className="font-devanagari text-xs font-bold leading-tight">
                    श्री
                  </span>
                  <span className="font-devanagari text-sm font-extrabold tracking-wider leading-tight">
                    शुभ विवाह
                  </span>
                  <span className="text-[10px] tracking-widest text-[#5C232F] font-semibold mt-0.5">
                    11.12.2026
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Envelope Branding */}
            <div className="relative z-10 w-full flex items-center justify-between px-3 text-[11px] font-devanagari text-[#8C631F]">
              <span>॥ वक्रतुण्डाय हुम् ॥</span>
              <span>पट्टी, प्रतापगढ़</span>
            </div>
          </div>
        </div>

        {/* Tap Instruction Button / Hint */}
        <div
          onClick={handleEnvelopeClick}
          className="mt-6 flex cursor-pointer items-center space-x-2 rounded-full border border-[#E6C97E]/70 bg-[#3D141E]/80 px-5 py-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#521C29] active:scale-95"
        >
          <Sparkles className="h-4 w-4 text-[#F5B82E] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="font-devanagari text-sm font-medium text-[#FFF4DE]">
            {lang === "hi"
              ? "लिफाफे को स्पर्श कर निमंत्रण खोलें"
              : "Tap the royal envelope to open"}
          </span>
          <Sparkles className="h-4 w-4 text-[#F5B82E]" />
        </div>
      </div>

      {/* Radiant Golden Light Flare on open */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-gradient-to-t from-[#FFEAA7] via-[#FFF9E6] to-[#FFEAA7] transition-opacity duration-1000 ${
          isOpening ? "opacity-95" : "opacity-0"
        }`}
      />
    </div>
  );
}
