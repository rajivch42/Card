"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { audioPlayer } from "./audioPlayer";

export default function MuteButton({ isVisible }: { isVisible: boolean }) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(audioPlayer.getMutedState());
  }, []);

  if (!isVisible) return null;

  const handleToggle = () => {
    const nextState = audioPlayer.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isMuted ? "संगीत चालू करें (Unmute music)" : "संगीत बंद करें (Mute music)"}
      aria-pressed={isMuted}
      className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full border-2 border-[#E6C97E] bg-[#6E1F2E] text-[#FDF8F4] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#8E2337] focus:outline-none focus:ring-4 focus:ring-[#C9A24B]/50"
    >
      {isMuted ? (
        <VolumeX className="h-6 w-6 text-[#E6C97E]" />
      ) : (
        <div className="relative flex items-center justify-center">
          <Volume2 className="h-6 w-6 text-[#E6C97E]" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E6C97E] opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C9A24B]"></span>
          </span>
        </div>
      )}
    </button>
  );
}
