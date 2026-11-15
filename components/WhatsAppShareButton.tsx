"use client";

import React, { useState } from "react";
import { Share2, Check, Loader2 } from "lucide-react";
import { invitationConfig } from "@/config/invitation";

interface WhatsAppShareButtonProps {
  lang: "hi" | "en";
  className?: string;
  variant?: "floating" | "inline";
}

export default function WhatsAppShareButton({
  lang,
  className = "",
  variant = "inline",
}: WhatsAppShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (isSharing) return;
    setIsSharing(true);

    const { couple, venueDetails } = invitationConfig;
    const groomFirst = couple.groom.name.en.split(" ")[0]; // Vipul
    const brideFirst = couple.bride.name.en.split(" ")[0]; // Sejal
    const weddingDate = "11 December 2026";
    const venueName = venueDetails.venueName[lang];
    const invitationUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://card-omega-amber.vercel.app";

    // Dynamic invitation caption per requirements: Boys side, so "Vipul & Sejal"
    const caption = `💍 ${groomFirst} & ${brideFirst}

With immense joy, we invite you to celebrate our wedding!

📅 Date: ${weddingDate}
📍 Venue: ${venueName}

We would be delighted to have you join us and bless us on our special day.

✨ View the complete wedding invitation and event details:
${invitationUrl}`;

    try {
      // 1. Fetch cover image & convert to File object
      const coverImagePath = "/images/radha_krishna.jpg";
      const response = await fetch(coverImagePath);
      const blob = await response.blob();
      const file = new File([blob], `${groomFirst}-${brideFirst}-Wedding-Invitation.jpg`, {
        type: blob.type || "image/jpeg",
      });

      // 2. Check if browser supports Web Share API with files
      if (
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          files: [file],
          text: caption,
        });
      } else if (typeof navigator !== "undefined" && navigator.share) {
        // Fallback: Web Share without files
        await navigator.share({
          title: `${groomFirst} & ${brideFirst} Wedding Invitation`,
          text: caption,
          url: invitationUrl,
        });
      } else {
        // Fallback: Direct WhatsApp Web / App intent
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err: unknown) {
      // If user aborted or canceled share dialog, ignore gracefully
      const isAbort = err instanceof Error && err.name === "AbortError";
      if (!isAbort) {
        console.warn("Share fallback triggered:", err);
        // Fallback to direct WhatsApp URL on error
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setIsSharing(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const buttonLabel =
    lang === "hi" ? "व्हाट्सएप पर निमंत्रण भेजें" : "Share Wedding Invitation";

  if (variant === "floating") {
    return (
      <button
        onClick={handleShare}
        disabled={isSharing}
        aria-label={buttonLabel}
        className={`fixed bottom-6 right-6 z-40 flex items-center space-x-2 rounded-full border border-[#25D366]/60 bg-gradient-to-r from-[#128C7E] to-[#25D366] px-4 py-3 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 ${className}`}
      >
        {isSharing ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : copied ? (
          <Check className="h-5 w-5" />
        ) : (
          /* SVG WhatsApp Icon */
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          {copied ? (lang === "hi" ? "साझा किया!" : "Shared!") : buttonLabel}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      className={`group relative inline-flex items-center justify-center space-x-2.5 rounded-full border border-[#25D366]/70 bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#128C7E] px-6 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-2xl active:scale-95 ${className}`}
    >
      {/* WhatsApp SVG Icon */}
      {isSharing ? (
        <Loader2 className="h-5 w-5 animate-spin text-white" />
      ) : copied ? (
        <Check className="h-5 w-5 text-white" />
      ) : (
        <svg className="h-5 w-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )}
      <span className="font-hindi-royal text-sm sm:text-base font-semibold tracking-wide">
        {copied ? (lang === "hi" ? "साझा किया!" : "Invitation Shared!") : buttonLabel}
      </span>
      <Share2 className="h-4 w-4 opacity-80" />
    </button>
  );
}
