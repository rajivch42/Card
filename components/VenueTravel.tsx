"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Train, Plane, Car, ExternalLink } from "lucide-react";
import { invitationConfig } from "@/config/invitation";

interface VenueTravelProps {
  lang: "hi" | "en";
}

export default function VenueTravel({ lang }: VenueTravelProps) {
  const { venueDetails } = invitationConfig;

  return (
    <section className="relative z-20 mx-auto w-full max-w-xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl border-2 border-[#C9A24B]/50 bg-[#FFFDF9]/95 shadow-2xl backdrop-blur-md">
        
        {/* Venue Painting Image */}
        <div className="relative h-56 sm:h-64 w-full border-b-2 border-[#C9A24B]/40">
          <Image
            src={venueDetails.image}
            alt="विवाह स्थल प्रतापगढ़"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E15]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="font-devanagari text-xs font-semibold text-[#F5B82E] tracking-widest uppercase">
              {venueDetails.title[lang]}
            </span>
            <h4 className="font-devanagari text-xl sm:text-2xl font-bold text-[#FFF5DE]">
              {venueDetails.venueName[lang]}
            </h4>
          </div>
        </div>

        {/* Travel Information Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Exact Address */}
          <div className="flex items-start space-x-3 rounded-2xl border border-[#E6C97E]/50 bg-[#FFF9EE] p-4">
            <MapPin className="h-5 w-5 shrink-0 text-[#6E1F2E] mt-1" />
            <div>
              <p className="font-devanagari text-xs font-bold text-[#8C631F]">
                {lang === "hi" ? "विस्तृत पता (Address)" : "Address"}
              </p>
              <p className="font-devanagari text-sm font-semibold text-[#4A2E2B] leading-relaxed mt-0.5">
                {venueDetails.address[lang]}
              </p>
            </div>
          </div>

          {/* Travel Grid (Station, Airport, Parking) */}
          <div className="space-y-4">
            
            {/* Railway Station */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#4A2E2B]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                <Train className="h-4 w-4 text-[#6E1F2E]" />
              </div>
              <div className="flex-1">
                <p className="font-devanagari font-bold text-[#6E1F2E]">
                  {lang === "hi" ? "निकटतम रेलवे स्टेशन" : "Nearest Railway Station"}
                </p>
                <p className="font-devanagari text-xs text-[#5C4033] mt-0.5">
                  {venueDetails.station[lang]}
                </p>
              </div>
            </div>

            {/* Airport */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#4A2E2B]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                <Plane className="h-4 w-4 text-[#6E1F2E]" />
              </div>
              <div className="flex-1">
                <p className="font-devanagari font-bold text-[#6E1F2E]">
                  {lang === "hi" ? "निकटतम हवाई अड्डा" : "Nearest Airport"}
                </p>
                <p className="font-devanagari text-xs text-[#5C4033] mt-0.5">
                  {venueDetails.airport[lang]}
                </p>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#4A2E2B]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0D4] border border-[#C9A24B]/50">
                <Car className="h-4 w-4 text-[#6E1F2E]" />
              </div>
              <div className="flex-1">
                <p className="font-devanagari font-bold text-[#6E1F2E]">
                  {lang === "hi" ? "पार्किंग व्यवस्था" : "Parking Facility"}
                </p>
                <p className="font-devanagari text-xs text-[#5C4033] mt-0.5">
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
              className="flex w-full items-center justify-center space-x-2 rounded-xl border border-[#C9A24B] bg-[#6E1F2E] px-4 py-3 font-devanagari text-sm font-semibold text-[#FFF4DE] shadow-lg transition-all hover:bg-[#8E2337] active:scale-98"
            >
              <MapPin className="h-4 w-4 text-[#F5B82E]" />
              <span>{lang === "hi" ? "गूगल मैप्स नेविगेशन शुरू करें" : "Open in Google Maps"}</span>
              <ExternalLink className="h-4 w-4 text-[#E6C97E]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
