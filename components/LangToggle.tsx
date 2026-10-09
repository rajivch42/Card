"use client";

import React from "react";

interface LangToggleProps {
  currentLang: "hi" | "en";
  onToggle: (lang: "hi" | "en") => void;
}

export default function LangToggle({ currentLang, onToggle }: LangToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-40 flex items-center rounded-full border border-[#C9A24B]/50 bg-[#FFFDF8]/95 p-1 shadow-md backdrop-blur-md">
      <button
        onClick={() => onToggle("hi")}
        className={`rounded-full px-3 py-1 font-hindi-royal text-xs font-semibold transition-all duration-300 ${
          currentLang === "hi"
            ? "bg-[#6E1F2E] text-[#FFF4DE] shadow-sm"
            : "text-[#7A625C] hover:text-[#2A1A1A]"
        }`}
      >
        हिंदी
      </button>
      <button
        onClick={() => onToggle("en")}
        className={`rounded-full px-3 py-1 font-royal-eyebrow text-xs font-semibold transition-all duration-300 ${
          currentLang === "en"
            ? "bg-[#6E1F2E] text-[#FFF4DE] shadow-sm"
            : "text-[#7A625C] hover:text-[#2A1A1A]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
