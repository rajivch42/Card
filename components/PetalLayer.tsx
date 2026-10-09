"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  type: "rose" | "gold" | "marigold";
}

export default function PetalLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const petalCount = window.innerWidth < 768 ? 22 : 36;
    const petals: Petal[] = [];

    const types: ("rose" | "gold" | "marigold")[] = ["rose", "gold", "marigold"];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 8,
        speedY: Math.random() * 1.2 + 0.8,
        speedX: Math.random() * 0.8 - 0.4,
        angle: Math.random() * 360,
        angularSpeed: Math.random() * 1.5 - 0.75,
        opacity: Math.random() * 0.5 + 0.4,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === "rose") {
        // Soft red/pink rose petal
        ctx.fillStyle = "#D6455D";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size, -p.size * 0.8, p.size * 1.4, p.size * 0.8, 0, p.size * 1.5);
        ctx.bezierCurveTo(-p.size * 1.4, p.size * 0.8, -p.size, -p.size * 0.8, 0, 0);
        ctx.fill();

        // Subtle gradient highlight
        ctx.fillStyle = "rgba(255, 190, 200, 0.4)";
        ctx.beginPath();
        ctx.arc(0, p.size * 0.5, p.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "marigold") {
        // Golden yellow marigold petal
        ctx.fillStyle = "#E59B22";
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#FFC843";
        ctx.beginPath();
        ctx.ellipse(0, -p.size * 0.2, p.size * 0.3, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Gold dust sparkle
        ctx.fillStyle = "#F3CA65";
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 235, 170, 0.7)";
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.5;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      aria-hidden="true"
    />
  );
}
