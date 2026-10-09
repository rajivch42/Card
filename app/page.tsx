"use client";

import React, { useState, useEffect } from "react";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import PetalLayer from "@/components/PetalLayer";
import MuteButton from "@/components/MuteButton";
import LangToggle from "@/components/LangToggle";
import HeroBlessing from "@/components/HeroBlessing";
import SaveTheDate from "@/components/SaveTheDate";
import Ceremonies from "@/components/Ceremonies";
import VenueTravel from "@/components/VenueTravel";
import ClosingScreen from "@/components/ClosingScreen";
import { invitationConfig } from "@/config/invitation";

export default function WeddingInvitationPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [lang, setLang] = useState<"hi" | "en">(invitationConfig.defaultLang);

  // Check if previously opened in current session
  useEffect(() => {
    const opened = sessionStorage.getItem("invitation_opened");
    if (opened === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleOpenInvitation = () => {
    sessionStorage.setItem("invitation_opened", "true");
    setIsUnlocked(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-jali-pattern selection:bg-[#C9A24B] selection:text-white">
      {/* 1. Envelope Opening Gate (Tap envelope to break seal & open with bright light) */}
      {!isUnlocked && (
        <EnvelopeOpening onOpen={handleOpenInvitation} lang={lang} />
      )}

      {/* 2. Persistent Falling Petal Canvas Layer */}
      <PetalLayer />

      {/* 3. Floating Language Switcher (EN / हिंदी) */}
      <LangToggle currentLang={lang} onToggle={setLang} />

      {/* 4. Floating Mute/Unmute Audio Button */}
      <MuteButton isVisible={isUnlocked} />

      {/* Main Invitation Content (Appears once envelope opens) */}
      <div
        className={`transition-opacity duration-1000 ${
          isUnlocked ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Section 2: Hero Blessing Card with Radha-Krishna & Lineages */}
        <HeroBlessing lang={lang} />

        {/* Section 4: Save the Date (3 Scratch Hearts + Confetti + Live Countdown) */}
        <SaveTheDate lang={lang} />

        {/* Section 5: Sacred Ceremonies (Carousel with Micro-animations & Maps) */}
        <Ceremonies lang={lang} />

        {/* Section 6: Venue & Travel Guide */}
        <VenueTravel lang={lang} />

        {/* Section 9: Royal Closing with Family Blessings */}
        <ClosingScreen lang={lang} />
      </div>
    </main>
  );
}
