"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink, ChevronLeft, ChevronRight, Flame, Sparkles } from "lucide-react";
import { invitationConfig, WeddingEvent } from "@/config/invitation";

interface CeremoniesProps {
  lang: "hi" | "en";
}

function CeremonyCard({ event, lang }: { event: WeddingEvent; lang: "hi" | "en" }) {
  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-3xl border-2 border-[#C9A24B]/50 bg-[#FFFDF9]/95 shadow-2xl backdrop-blur-md">
      
      {/* Top Image Container with Arch and Micro-animation */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b-2 border-[#C9A24B]/40">
        <Image
          src={event.image}
          alt={event.name[lang]}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E15]/75 via-transparent to-transparent" />

        {/* Date badge on top right */}
        <div className="absolute top-4 right-4 rounded-full border border-[#E6C97E] bg-[#6E1F2E]/90 px-3.5 py-1 text-xs font-semibold text-[#FFF5DE] shadow-md backdrop-blur-sm">
          {event.date[lang]}
        </div>

        {/* Event-specific Micro-animation Overlay */}
        {event.microAnimation === "fire" && (
          <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1 text-xs text-[#FFB74D] backdrop-blur-sm">
            <Flame className="h-4 w-4 animate-flame text-[#FF7043]" />
            <span className="font-devanagari font-medium">पवित्र अग्नि साक्षी</span>
          </div>
        )}

        {event.microAnimation === "haldi" && (
          <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1 text-xs text-[#FDD835] backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#FDD835] animate-spin" style={{ animationDuration: "5s" }} />
            <span className="font-devanagari font-medium">शुभ हल्दी लेपन</span>
          </div>
        )}

        {event.microAnimation === "phere" && (
          <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1 text-xs text-[#FFE082] backdrop-blur-sm">
            {/* 7 Phere lights */}
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <span
                  key={num}
                  className="h-2 w-2 rounded-full bg-[#FFD54F] animate-pulse"
                  style={{ animationDelay: `${num * 250}ms` }}
                />
              ))}
            </div>
            <span className="ml-1 font-devanagari font-medium">सप्तपदी (७ फेरे)</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h4 className="font-devanagari text-2xl sm:text-3xl font-extrabold text-[#6E1F2E]">
            {event.name[lang]}
          </h4>
          {event.subtitle && (
            <p className="mt-1 font-devanagari text-xs sm:text-sm font-medium text-[#8C631F]">
              {event.subtitle[lang]}
            </p>
          )}

          {/* Time & Venue details */}
          <div className="mt-4 space-y-2 border-t border-[#E6C97E]/40 pt-4">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-[#4A2E2B]">
              <Clock className="h-4 w-4 shrink-0 text-[#C9A24B]" />
              <span className="font-devanagari font-semibold">{event.time[lang]}</span>
            </div>
            <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#4A2E2B]">
              <MapPin className="h-4 w-4 shrink-0 text-[#C9A24B] mt-0.5" />
              <span className="font-devanagari">{event.venue[lang]}</span>
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <div className="mt-6">
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center space-x-2 rounded-xl border border-[#C9A24B] bg-gradient-to-r from-[#8E2337] to-[#6E1F2E] px-4 py-3 font-devanagari text-xs sm:text-sm font-semibold text-[#FFF4DE] shadow-md transition-all duration-300 hover:brightness-110 active:scale-98"
          >
            <MapPin className="h-4 w-4 text-[#F5B82E]" />
            <span>{lang === "hi" ? "गूगल मैप पर देखें (दिशा मार्ग)" : "View on Google Maps"}</span>
            <ExternalLink className="h-3.5 w-3.5 text-[#E6C97E]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Ceremonies({ lang }: CeremoniesProps) {
  const { events } = invitationConfig;
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 text-[#C9A24B]">
          <span className="h-px w-8 bg-[#C9A24B]" />
          <span className="text-xs">✤</span>
          <span className="h-px w-8 bg-[#C9A24B]" />
        </div>
        <h3 className="mt-2 font-devanagari text-2xl sm:text-3xl font-extrabold text-[#6E1F2E]">
          {lang === "hi" ? "पावन मांगलिक कार्यक्रम" : "Sacred Ceremonies"}
        </h3>
        <p className="mt-1 font-devanagari text-xs sm:text-sm text-[#7A625C]">
          {lang === "hi"
            ? "हवन, हल्दी एवं विवाह संस्कार के पावन क्षण"
            : "The sacred timeline of wedding rituals"}
        </p>
      </div>

      {/* Carousel Navigation on Mobile & Desktop */}
      <div className="relative">
        <CeremonyCard event={events[activeIndex]} lang={lang} />

        {/* Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Ceremony"
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A24B] bg-[#FFFBF4] text-[#6E1F2E] shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Ceremony"
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A24B] bg-[#FFFBF4] text-[#6E1F2E] shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="mt-6 flex items-center justify-center space-x-3">
        {events.map((ev, idx) => (
          <button
            key={ev.key}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center space-x-1.5 rounded-full px-3 py-1 font-devanagari text-xs transition-all ${
              activeIndex === idx
                ? "bg-[#6E1F2E] font-bold text-[#FFF5DE] shadow-md scale-105"
                : "border border-[#C9A24B]/40 bg-[#FFFDF9] text-[#8C631F] hover:bg-[#FFF5DE]"
            }`}
          >
            <span>{idx + 1}.</span>
            <span>{ev.name[lang].split(" ")[0]}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
