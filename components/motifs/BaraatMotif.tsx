"use client";

import React from "react";

interface BaraatMotifProps {
  className?: string;
  size?: number;
}

/**
 * Animated Ghodi/Baraat (घोड़ी/बारात) — wedding horse silhouette.
 * Displayed on the vivah ceremony card. Subtle trotting animation.
 */
export default function BaraatMotif({
  className = "",
  size = 56,
}: BaraatMotifProps) {
  return (
    <div
      className={`inline-flex items-end animate-baraat-trot ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horse body */}
        <path
          d="M25 45 C22 35, 28 28, 35 26 L45 24 C50 23, 56 26, 58 32 L60 40 C62 44, 60 48, 56 50 L28 50 C24 50, 22 48, 25 45Z"
          fill="#C9A24B"
          opacity="0.9"
        />

        {/* Horse neck and head */}
        <path
          d="M35 26 C33 20, 30 16, 28 12 L26 10 C25 8, 26 6, 28 7 L32 10 C34 11, 35 14, 34 18 L35 26Z"
          fill="#C9A24B"
          opacity="0.9"
        />

        {/* Horse ear */}
        <path
          d="M28 10 L26 5 L30 8Z"
          fill="#E6C97E"
        />

        {/* Horse eye */}
        <circle cx="28" cy="10" r="1" fill="#3D141E" />

        {/* Decorative blanket/jhool */}
        <path
          d="M34 30 L54 28 L56 40 L32 42Z"
          fill="#6E1F2E"
          opacity="0.85"
        />
        {/* Blanket border */}
        <path
          d="M34 30 L54 28"
          stroke="#FFE6A3"
          strokeWidth="1.5"
        />
        <path
          d="M32 42 L56 40"
          stroke="#FFE6A3"
          strokeWidth="1"
        />
        {/* Blanket decoration dots */}
        <circle cx="40" cy="35" r="1" fill="#FFE6A3" />
        <circle cx="45" cy="34.5" r="1" fill="#FFE6A3" />
        <circle cx="50" cy="34" r="1" fill="#FFE6A3" />

        {/* Sehra (groom veil) on horse */}
        <path
          d="M36 24 C38 20, 42 22, 40 26"
          stroke="#FFE6A3"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Front legs */}
        <g className="animate-horse-front-leg">
          <line x1="34" y1="50" x2="32" y2="64" stroke="#C9A24B" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="50" x2="38" y2="62" stroke="#C9A24B" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Back legs */}
        <g className="animate-horse-back-leg">
          <line x1="50" y1="50" x2="52" y2="64" stroke="#C9A24B" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="49" x2="57" y2="62" stroke="#C9A24B" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Hooves */}
        <ellipse cx="32" cy="65" rx="2.5" ry="1.5" fill="#8B5E3C" className="animate-horse-front-leg" />
        <ellipse cx="38" cy="63" rx="2.5" ry="1.5" fill="#8B5E3C" className="animate-horse-front-leg" />
        <ellipse cx="52" cy="65" rx="2.5" ry="1.5" fill="#8B5E3C" className="animate-horse-back-leg" />
        <ellipse cx="57" cy="63" rx="2.5" ry="1.5" fill="#8B5E3C" className="animate-horse-back-leg" />

        {/* Tail */}
        <path
          d="M58 34 C62 30, 66 32, 64 38 C62 42, 60 40, 58 38"
          stroke="#C9A24B"
          strokeWidth="2"
          fill="none"
          className="animate-horse-tail"
        />

        {/* Ground dust particles */}
        <circle cx="30" cy="68" r="1" fill="#C9A24B" opacity="0.3" className="animate-dust-1" />
        <circle cx="36" cy="67" r="0.8" fill="#C9A24B" opacity="0.2" className="animate-dust-2" />
        <circle cx="54" cy="68" r="1" fill="#C9A24B" opacity="0.3" className="animate-dust-3" />
      </svg>
    </div>
  );
}

