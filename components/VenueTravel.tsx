"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Train, Plane, Car, ExternalLink, Clock } from "lucide-react";
import { invitationConfig } from "@/config/invitation";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import ToranMotif from "./motifs/ToranMotif";

interface VenueTravelProps {
  lang: "hi" | "en";
}

export default function VenueTravel({ lang }: VenueTravelProps) {
  const { venueDetails, events } = invitationConfig;

  // Google Maps embed URL (free, no API key needed)
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600!2d82.269428!3d25.911768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4KSw4KWH4KSh4KWA4KSX4KSw4KS-4KSq4KWB4KSwIOCkquCkn-CljeCkn-ClgA!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin`;

  // Ceremony schedule summary for venue card
  const scheduleRows = events.map((e) => ({
    key: e.key,
    icon: e.key === "havan" ? "🔥" : e.key === "haldi" ? "💛" : "💍",
    name: e.name[lang].split("(")[0].trim().split("एवं")[0].trim(),
    date: e.date[lang],
    time: e.time[lang],
  }));

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 py-8">
      <ScrollReveal animation="fade-up">
        <div className="overflow-hidden rounded-t-[100px] rounded-b-3xl border-2 border-[#C9A24B] bg-[#FFFDF9]/95 shadow-2xl backdrop-blur-md">
          {/* Inner decorative border */}
          <div className="pointer-events-none absolute inset-1.5 rounded-t-[90px] rounded-b-[18px] border border-[#E6C97E]/30 z-10" />

          {/* Toran decoration at arch top */}
          <div className="relative z-10 flex justify-center pt-2">
            <ToranMotif width={280} />
          </div>

          {/* Venue Painting Image */}
          <div className="relative h-56 sm:h-64 w-full border-b-2 border-[#C9A24B]/30">
            <Image
              src={venueDetails.image}
              alt="विवाह स्थल प्रतापगढ़"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#240C12]/85 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="font-royal-eyebrow text-sm font-semibold text-[#F5B82E] tracking-widest uppercase">
                {venueDetails.title[lang]}
              </span>
              <h4 className="font-hindi-royal text-xl sm:text-2xl font-bold text-[#FFF5DE]">
                {venueDetails.venueName[lang]}
              </h4>
            </div>
          </div>

          {/* Travel Information Content */}
          <div className="p-6 sm:p-8 space-y-6">

            {/* ── Ceremony Schedule Summary ── */}
            <div className="rounded-2xl border border-[#C9A24B]/50 bg-gradient-to-b from-[#FFF9EE] to-[#FFFDF9] p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-4 w-4 text-[#6E1F2E]" />
                <h5 className="font-hindi-royal text-sm sm:text-base font-bold text-[#6E1F2E]">
                  {lang === "hi" ? "कार्यक्रम सारणी" : "Event Schedule"}
                </h5>
              </div>
              <div className="space-y-2.5">
                {scheduleRows.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center space-x-3 rounded-xl bg-white/70 border border-[#E6C97E]/30 px-3 py-2.5 sm:py-3"
                  >
                    <span className="text-lg shrink-0">{row.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-hindi-royal text-sm sm:text-base font-bold text-[#6E1F2E] truncate">
                        {row.name}
                      </p>
                      <p className="font-serif-luxury text-xs sm:text-sm text-[#5C4033]">
                        {row.date}
                      </p>
                    </div>
                    <span className="font-numeral text-xs sm:text-sm font-bold text-[#C9A24B] shrink-0 text-right">
                      {row.time.replace("से", "").replace("onwards", "").trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Inline Map Preview ── */}
            <div className="rounded-2xl overflow-hidden border border-[#C9A24B]/50 shadow-inner">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === "hi" ? "विवाह स्थल मानचित्र" : "Venue Map"}
                className="w-full"
              />
            </div>

            {/* Exact Address */}
            <div className="flex items-start space-x-3 rounded-2xl border border-[#E6C97E]/50 bg-[#FFF9EE] p-4">
              <MapPin className="h-5 w-5 shrink-0 text-[#6E1F2E] mt-1" />
              <div>
                <p className="font-hindi-royal text-sm sm:text-base font-bold text-[#8C631F]">
                  {lang === "hi" ? "विस्तृत पता (Address)" : "Address"}
                </p>
                <p className="font-serif-luxury text-sm sm:text-base font-semibold text-[#4A2E2B] leading-relaxed mt-0.5">
                  {venueDetails.address[lang]}
                </p>
              </div>
            </div>

            {/* Travel Grid (Station, Airport, Parking) */}
            <div className="space-y-4">

              {/* Railway Station */}
              <div className="flex items-start space-x-3 text-sm sm:text-base text-[#4A2E2B]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                  <Train className="h-4 w-4 text-[#6E1F2E]" />
                </div>
                <div className="flex-1">
                  <p className="font-hindi-royal font-bold text-[#6E1F2E]">
                    {lang === "hi"
                      ? "निकटतम रेलवे स्टेशन"
                      : "Nearest Railway Station"}
                  </p>
                  <p className="font-serif-luxury text-sm sm:text-base text-[#5C4033] mt-0.5">
                    {venueDetails.station[lang]}
                  </p>
                </div>
              </div>

              {/* Airport */}
              <div className="flex items-start space-x-3 text-sm sm:text-base text-[#4A2E2B]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                  <Plane className="h-4 w-4 text-[#6E1F2E]" />
                </div>
                <div className="flex-1">
                  <p className="font-hindi-royal font-bold text-[#6E1F2E]">
                    {lang === "hi"
                      ? "निकटतम हवाई अड्डा"
                      : "Nearest Airport"}
                  </p>
                  <p className="font-serif-luxury text-sm sm:text-base text-[#5C4033] mt-0.5">
                    {venueDetails.airport[lang]}
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start space-x-3 text-sm sm:text-base text-[#4A2E2B]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                  <Car className="h-4 w-4 text-[#6E1F2E]" />
                </div>
                <div className="flex-1">
                  <p className="font-hindi-royal font-bold text-[#6E1F2E]">
                    {lang === "hi"
                      ? "पार्किंग व्यवस्था"
                      : "Parking Facility"}
                  </p>
                  <p className="font-serif-luxury text-sm sm:text-base text-[#5C4033] mt-0.5">
                    {venueDetails.parking[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button: Get Directions */}
            <div className="pt-2">
              <a
                href={venueDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-[#C9A24B] bg-gradient-to-r from-[#7A281E] via-[#8E2337] to-[#6E1F2E] px-4 py-3 font-hindi-royal text-sm sm:text-base font-semibold text-[#FFF4DE] shadow-lg transition-all hover:brightness-110 active:scale-98"
              >
                <MapPin className="h-4 w-4 text-[#F5B82E]" />
                <span>
                  {lang === "hi"
                    ? "गूगल मैप्स नेविगेशन शुरू करें"
                    : "Open in Google Maps"}
                </span>
                <ExternalLink className="h-4 w-4 text-[#E6C97E]" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
