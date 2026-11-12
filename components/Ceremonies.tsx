"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, ExternalLink, Flame, Sparkles } from "lucide-react";
import { invitationConfig, WeddingEvent } from "@/config/invitation";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import ToranMotif from "./motifs/ToranMotif";
import BaraatMotif from "./motifs/BaraatMotif";
import KalashMotif from "./motifs/KalashMotif";

interface CeremoniesProps {
  lang: "hi" | "en";
}

function TimelineCard({
  event,
  lang,
  index,
  total,
}: {
  event: WeddingEvent;
  lang: "hi" | "en";
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;

  return (
    <div className="relative pl-12 sm:pl-14 pb-10">
      {/* Timeline vertical connector line */}
      {!isLast && (
        <div
          className="absolute left-[19px] sm:left-[23px] top-5 bottom-0 w-0.5"
          style={{
            background:
              "linear-gradient(to bottom, #C9A24B, #E6C97E, #C9A24B)",
          }}
        />
      )}

      {/* Timeline dot */}
      <div className="absolute left-[10px] sm:left-[14px] top-3 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#C9A24B] bg-[#6E1F2E] shadow-md">
        <span className="h-2 w-2 rounded-full bg-[#E6C97E]" />
      </div>

      {/* Date label on timeline */}
      <div className="absolute left-0 top-10 flex flex-col items-center text-center" style={{ width: '40px' }}>
        <span className="font-numeral text-sm font-extrabold text-[#6E1F2E] leading-none">
          {event.key === "havan" ? "9" : event.key === "haldi" ? "10" : "11"}
        </span>
        <span className="font-hindi-royal text-[9px] text-[#8C631F] leading-tight mt-0.5">
          {lang === "hi" ? "दिसं" : "Dec"}
        </span>
      </div>

      {/* The ceremony card itself */}
      <ScrollReveal
        animation={index % 2 === 0 ? "slide-right" : "slide-left"}
        delay={index * 150}
      >
        <div className="relative flex flex-col overflow-hidden rounded-t-[60px] rounded-b-3xl border-2 border-[#C9A24B] bg-[#FFFDF9]/95 shadow-2xl backdrop-blur-md">
          {/* Inner decorative border */}
          <div className="pointer-events-none absolute inset-1.5 rounded-t-[52px] rounded-b-[18px] border border-[#E6C97E]/30" />

          {/* Toran decoration at the arch top */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-1">
            <ToranMotif width={260} />
          </div>

          {/* Top Image with arch */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-[58px] border-b-2 border-[#C9A24B]/30">
            <Image
              src={event.image}
              alt={event.name[lang]}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#240C12]/85 via-transparent to-[#240C12]/20" />

            {/* Date badge */}
            <div className="absolute top-12 right-4 rounded-full border border-[#E6C97E] bg-[#6E1F2E]/90 px-3.5 py-1.5 text-sm font-semibold text-[#FFF5DE] shadow-md backdrop-blur-sm">
              <span className="font-numeral font-bold mr-1">
                {event.key === "havan"
                  ? "9"
                  : event.key === "haldi"
                  ? "10"
                  : "11"}
              </span>
              <span className="font-hindi-royal">
                {lang === "hi" ? "दिसंबर" : "Dec '26"}
              </span>
            </div>

            {/* Event micro-animation overlay */}
            {event.microAnimation === "fire" && (
              <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1.5 text-sm text-[#FFB74D] backdrop-blur-sm">
                <Flame className="h-4 w-4 animate-flame text-[#FF7043]" />
                <KalashMotif size={24} animated className="mx-1" />
                <span className="font-hindi-royal font-medium">
                  {lang === "hi" ? "पवित्र अग्नि साक्षी" : "Sacred Fire"}
                </span>
              </div>
            )}

            {event.microAnimation === "haldi" && (
              <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1.5 text-sm text-[#FDD835] backdrop-blur-sm">
                <Sparkles
                  className="h-4 w-4 text-[#FDD835] animate-spin"
                  style={{ animationDuration: "5s" }}
                />
                <span className="font-hindi-royal font-medium">
                  {lang === "hi" ? "शुभ हल्दी लेपन" : "Turmeric Ritual"}
                </span>
              </div>
            )}

            {event.microAnimation === "phere" && (
              <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 rounded-full bg-[#3D141E]/80 px-3 py-1.5 text-sm text-[#FFE082] backdrop-blur-sm">
                <BaraatMotif size={28} className="mr-1" />
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <span
                      key={num}
                      className="h-2 w-2 rounded-full bg-[#FFD54F] animate-pulse"
                      style={{ animationDelay: `${num * 250}ms` }}
                    />
                  ))}
                </div>
                <span className="ml-1 font-hindi-royal font-medium">
                  {lang === "hi" ? "सप्तपदी" : "Seven Vows"}
                </span>
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <h4 className="font-hindi-royal text-2xl sm:text-3xl font-extrabold text-[#6E1F2E]">
                {event.name[lang]}
              </h4>
              {event.subtitle && (
                <p className="mt-1.5 font-serif-italic text-sm sm:text-base font-medium text-[#8C631F]">
                  {event.subtitle[lang]}
                </p>
              )}

              {/* Time & Venue details */}
              <div className="mt-4 space-y-3 border-t border-[#E6C97E]/30 pt-4">
                <div className="flex items-center space-x-2 text-sm sm:text-base text-[#4A2E2B]">
                  <Clock className="h-4 w-4 shrink-0 text-[#C9A24B]" />
                  <span className="font-serif-luxury font-semibold">
                    {event.date[lang]}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm sm:text-base text-[#4A2E2B]">
                  <Clock className="h-4 w-4 shrink-0 text-[#6E1F2E]" />
                  <span className="font-serif-luxury font-bold text-[#6E1F2E]">
                    {event.time[lang]}
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-sm sm:text-base text-[#4A2E2B]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#C9A24B] mt-0.5" />
                  <span className="font-serif-luxury">
                    {event.venue[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="mt-5">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-[#C9A24B] bg-gradient-to-r from-[#7A281E] via-[#8E2337] to-[#6E1F2E] px-4 py-3 font-hindi-royal text-sm sm:text-base font-semibold text-[#FFF4DE] shadow-md transition-all duration-300 hover:brightness-110 active:scale-98"
              >
                <MapPin className="h-4 w-4 text-[#F5B82E]" />
                <span>
                  {lang === "hi"
                    ? "गूगल मैप पर देखें"
                    : "View on Google Maps"}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-[#E6C97E]" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function Ceremonies({ lang }: CeremoniesProps) {
  const { events } = invitationConfig;

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 py-8">
      {/* Section Header */}
      <ScrollReveal animation="fade-up">
        <div className="text-center mb-8">
          <KalashMotif size={40} className="mx-auto mb-2" />
          <div className="flex items-center justify-center space-x-2 text-[#C9A24B]">
            <span className="h-px w-8 bg-[#C9A24B]" />
            <span className="text-xs">✤</span>
            <span className="h-px w-8 bg-[#C9A24B]" />
          </div>
          <h3 className="mt-2 font-hindi-royal text-2xl sm:text-3xl font-extrabold text-[#6E1F2E]">
            {lang === "hi" ? "पावन मांगलिक कार्यक्रम" : "Sacred Ceremonies"}
          </h3>
          <p className="mt-1.5 font-serif-italic text-sm sm:text-base text-[#735A53]">
            {lang === "hi"
              ? "हवन, हल्दी एवं विवाह संस्कार के पावन क्षण"
              : "The sacred timeline of wedding rituals"}
          </p>
        </div>
      </ScrollReveal>

      {/* Vertical Timeline */}
      <div className="relative">
        {events.map((event, idx) => (
          <TimelineCard
            key={event.key}
            event={event}
            lang={lang}
            index={idx}
            total={events.length}
          />
        ))}
      </div>
    </section>
  );
}
