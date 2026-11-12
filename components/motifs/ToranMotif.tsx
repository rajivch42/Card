"use client";

import React from "react";

interface ToranMotifProps {
  className?: string;
  width?: number;
  color?: string;
}

/**
 * Mango Leaf Toran (आम के पत्तों का तोरण) — auspicious door hanging.
 * Used as a decorative top border for card sections.
 */
export default function ToranMotif({
  className = "",
  width = 320,
  color = "#C9A24B",
}: ToranMotifProps) {
  const leafCount = 11;
  const spacing = width / (leafCount + 1);

  return (
    <div className={`flex justify-center overflow-hidden ${className}`} aria-hidden="true">
      <svg
        width={width}
        height="40"
        viewBox={`0 0 ${width} 40`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Main garland rope / thread */}
        <path
          d={`M 0 6 Q ${width * 0.25} 18, ${width * 0.5} 14 Q ${width * 0.75} 10, ${width} 6`}
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Mango leaves hanging from the rope */}
        {Array.from({ length: leafCount }).map((_, i) => {
          const x = spacing * (i + 1);
          // Calculate y position on the curve
          const t = (i + 1) / (leafCount + 1);
          const y = 6 + Math.sin(t * Math.PI) * 10;
          // Deterministic rotation based on index (no Math.random)
          const rotation = -15 + ((i * 7 + 3) % 30);
          const delay = i * 0.15;

          return (
            <g
              key={i}
              transform={`translate(${x}, ${y})`}
              className="animate-toran-leaf"
              style={{ animationDelay: `${delay}s` }}
            >
              {/* Leaf stem */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="12"
                stroke="#2D7A3A"
                strokeWidth="1"
              />
              {/* Leaf body */}
              <path
                d={`M 0 12 C -4 16, -5 22, 0 28 C 5 22, 4 16, 0 12`}
                fill="#3D9948"
                opacity="0.85"
                transform={`rotate(${rotation}, 0, 20)`}
              />
              {/* Leaf vein */}
              <line
                x1="0"
                y1="14"
                x2="0"
                y2="26"
                stroke="#2D7A3A"
                strokeWidth="0.5"
                opacity="0.5"
                transform={`rotate(${rotation}, 0, 20)`}
              />
            </g>
          );
        })}

        {/* Small marigold flowers at intervals */}
        {[0.2, 0.5, 0.8].map((t, i) => {
          const x = width * t;
          const y = 6 + Math.sin(t * Math.PI) * 10;
          return (
            <g key={`flower-${i}`} transform={`translate(${x}, ${y - 2})`}>
              {/* Marigold petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-3"
                  rx="2"
                  ry="3.5"
                  fill="#E59B22"
                  opacity="0.9"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="2.5" fill="#FFC843" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
