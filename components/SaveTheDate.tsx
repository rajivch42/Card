"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";
import { invitationConfig } from "@/config/invitation";

interface SaveTheDateProps {
  lang: "hi" | "en";
}

interface ScratchHeartItemProps {
  label: string;
  value: string;
  isRevealed: boolean;
  onReveal: () => void;
}

function ScratchHeartItem({ label, value, isRevealed, onReveal }: ScratchHeartItemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = 110);
    const height = (canvas.height = 110);

    // Draw rich metallic copper-gold texture
    const drawCover = () => {
      ctx.globalCompositeOperation = "source-over";
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#7A281E");
      grad.addColorStop(0.35, "#C8963E");
      grad.addColorStop(0.7, "#EBD38D");
      grad.addColorStop(1, "#8F422E");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Add "SCRATCH / खरोंचें" label
      ctx.fillStyle = "#3D141E";
      ctx.font = "bold 11px Cinzel, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SCRATCH", width / 2, height / 2 - 8);

      ctx.font = "bold 11px 'Tiro Devanagari Hindi', serif";
      ctx.fillText("खरोंचें", width / 2, height / 2 + 10);
    };

    if (!isRevealed) {
      drawCover();
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }, [isRevealed]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentCount = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) transparentCount++;
      }
      const percent = transparentCount / (pixels.length / 4);
      if (percent > 0.5) {
        onReveal();
      }
    } catch (e) {}
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={onReveal}
        className="relative flex h-28 w-28 items-center justify-center cursor-pointer select-none rounded-2xl border-2 border-[#C9A24B] bg-gradient-to-br from-[#FFF5DE] via-[#FFF9EE] to-[#FFEEDB] shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {/* Underlying revealed numeral with sculptural Playfair font */}
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <span className="font-numeral text-4xl sm:text-5xl font-extrabold text-copper-gold-gradient drop-shadow-sm leading-none">
            {value}
          </span>
          <span className="font-hindi-royal text-[11px] font-semibold text-[#8C631F] mt-1">
            {label}
          </span>
        </div>

        {/* Scratchable Canvas overlay */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="absolute inset-0 h-full w-full touch-none cursor-grab active:cursor-grabbing"
          />
        )}
      </div>
      <button
        type="button"
        onClick={onReveal}
        className="mt-2 font-serif-italic text-xs text-[#8C631F] underline decoration-dotted hover:text-[#6E1F2E]"
      >
        {isRevealed ? "प्रकट (Revealed)" : "टैप करें (Tap to reveal)"}
      </button>
    </div>
  );
}

export default function SaveTheDate({ lang }: SaveTheDateProps) {
  const { saveTheDate } = invitationConfig;
  const [revealed, setRevealed] = useState<[boolean, boolean, boolean]>([false, false, false]);
  const [allRevealed, setAllRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(saveTheDate.countdownTo).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [saveTheDate.countdownTo]);

  const handleReveal = (index: number) => {
    const updated: [boolean, boolean, boolean] = [...revealed] as any;
    updated[index] = true;
    setRevealed(updated);

    if (updated.every(Boolean) && !allRevealed) {
      setAllRevealed(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C9A24B", "#E6C97E", "#6E1F2E", "#D6455D", "#FFC843"],
        });
      } catch (e) {}
    }
  };

  const labels = [
    lang === "hi" ? "तारीख (Day)" : "Day",
    lang === "hi" ? "माह (Month)" : "Month",
    lang === "hi" ? "वर्ष (Year)" : "Year",
  ];

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 py-8">
      <div className="rounded-3xl border-2 border-[#C9A24B]/40 bg-[#FFFDF9]/95 p-6 sm:p-8 shadow-xl backdrop-blur-md text-center">
        
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-2 text-[#C9A24B]">
          <span className="h-px w-8 bg-[#C9A24B]" />
          <Heart className="h-4 w-4 fill-[#6E1F2E] text-[#6E1F2E]" />
          <span className="h-px w-8 bg-[#C9A24B]" />
        </div>

        <h3 className="mt-2 font-hindi-royal text-2xl sm:text-3xl font-extrabold text-[#6E1F2E]">
          {lang === "hi" ? "शुभ लग्न तिथि" : "Save The Auspicious Date"}
        </h3>
        <p className="mt-1 font-serif-italic text-xs sm:text-sm text-[#735A53]">
          {lang === "hi"
            ? "पावन विवाह तिथि प्रकट करने हेतु खरोंचें अथवा टैप करें"
            : "Scratch or tap each heart to reveal the wedding date"}
        </p>

        {/* 3 Scratchable Heart Cards */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ScratchHeartItem
            label={labels[0]}
            value={saveTheDate.reveals[0]}
            isRevealed={revealed[0]}
            onReveal={() => handleReveal(0)}
          />
          <ScratchHeartItem
            label={labels[1]}
            value={saveTheDate.reveals[1]}
            isRevealed={revealed[1]}
            onReveal={() => handleReveal(1)}
          />
          <ScratchHeartItem
            label={labels[2]}
            value={saveTheDate.reveals[2]}
            isRevealed={revealed[2]}
            onReveal={() => handleReveal(2)}
          />
        </div>

        {/* Live Countdown Timer with Classic Sculptural Numerals */}
        <div className="mt-8 border-t border-[#E6C97E]/40 pt-6">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-semibold text-[#8C631F]">
            <Sparkles className="h-3.5 w-3.5 text-[#C9A24B]" />
            <span className="font-hindi-royal">
              {lang === "hi" ? "विवाह मुहूर्त तक शेष समय" : "Countdown to Auspicious Ceremony"}
            </span>
            <Sparkles className="h-3.5 w-3.5 text-[#C9A24B]" />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { val: timeLeft.days, label: lang === "hi" ? "दिन" : "Days" },
              { val: timeLeft.hours, label: lang === "hi" ? "घंटे" : "Hours" },
              { val: timeLeft.minutes, label: lang === "hi" ? "मिनट" : "Mins" },
              { val: timeLeft.seconds, label: lang === "hi" ? "सेकंड" : "Secs" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-xl border border-[#C9A24B]/40 bg-gradient-to-b from-[#FFF5DE] to-[#FFFBF4] p-2.5 sm:p-3 shadow-md"
              >
                <span className="font-numeral text-2xl sm:text-3xl font-extrabold text-[#6E1F2E] leading-tight">
                  {String(item.val).padStart(2, "0")}
                </span>
                <span className="font-hindi-royal text-[10px] sm:text-xs font-semibold text-[#8C631F] mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
