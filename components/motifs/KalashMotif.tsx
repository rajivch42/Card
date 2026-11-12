"use client";

import React from "react";

interface KalashMotifProps {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}

/**
 * Sacred Kalash (कलश) — auspicious pot with mango leaves and coconut.
 * Traditional UP wedding symbol. Pure SVG, zero dependencies.
 */
export default function KalashMotif({
  className = "",
  size = 48,
  color = "#C9A24B",
  animated = true,
}: KalashMotifProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${animated ? "animate-kalash-bob" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base of Kalash */}
        <ellipse cx="32" cy="56" rx="14" ry="4" fill={color} opacity="0.3" />

        {/* Pot body */}
        <path
          d="M20 38 C20 50, 44 50, 44 38 L42 28 H22 Z"
          fill={color}
          opacity="0.85"
        />
        {/* Pot neck */}
        <rect x="26" y="22" width="12" height="8" rx="2" fill={color} opacity="0.9" />

        {/* Decorative band on pot */}
        <rect x="22" y="32" width="20" height="2" rx="1" fill="#FFF5DE" opacity="0.6" />
        <rect x="22" y="36" width="20" height="1" rx="0.5" fill="#FFF5DE" opacity="0.4" />

        {/* Mango leaves (आम के पत्ते) */}
        <path
          d="M32 22 C28 14, 18 16, 16 10"
          stroke="#2D7A3A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={animated ? "animate-leaf-sway-left" : ""}
        />
        <path
          d="M16 10 C17 8, 20 11, 18 13 C16 15, 14 12, 16 10Z"
          fill="#3D9948"
        />

        <path
          d="M32 22 C36 14, 46 16, 48 10"
          stroke="#2D7A3A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={animated ? "animate-leaf-sway-right" : ""}
        />
        <path
          d="M48 10 C47 8, 44 11, 46 13 C48 15, 50 12, 48 10Z"
          fill="#3D9948"
        />

        {/* Center leaf */}
        <path
          d="M32 22 C32 14, 32 8, 32 4"
          stroke="#2D7A3A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 4 C30 6, 32 9, 34 6 C32 3, 30 6, 32 4Z"
          fill="#3D9948"
        />

        {/* Coconut on top */}
        <circle cx="32" cy="18" r="5" fill="#8B5E3C" />
        <ellipse cx="32" cy="16.5" rx="3" ry="2" fill="#A0713C" opacity="0.6" />

        {/* Sacred tilak mark on pot */}
        <circle cx="32" cy="34" r="1.5" fill="#E53E3E" />

        {/* Swastik on pot */}
        <g transform="translate(32, 42)" stroke={`#FFF5DE`} strokeWidth="0.8" opacity="0.5">
          <line x1="-3" y1="0" x2="3" y2="0" />
          <line x1="0" y1="-3" x2="0" y2="3" />
          <line x1="3" y1="0" x2="3" y2="-2" />
          <line x1="-3" y1="0" x2="-3" y2="2" />
          <line x1="0" y1="-3" x2="2" y2="-3" />
          <line x1="0" y1="3" x2="-2" y2="3" />
        </g>
      </svg>
    </div>
  );
}

