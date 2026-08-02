"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Background Celestial Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/celestial-hero-bg.png"
          alt="Celestial Hero Galaxy Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040612]/80 via-[#040612]/40 to-[#040612]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Main Title & CTAs (Exact Image 1) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-xs font-mono font-bold tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              <span>{dict.hero.badge}</span>
            </div>

            {/* Main Title (Image 1 Style) */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {dict.hero.titlePrefix}
              <span className="text-gradient-purple-cyan text-5xl sm:text-7xl lg:text-7xl">
                {dict.hero.titleHighlight}
              </span>
              {dict.hero.titleSuffix}
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {dict.hero.subtitle}
            </p>

            {/* Action Button: Iniciar Proyecto */}
            <div className="pt-2">
              <a
                href="#contacto"
                className="pill-gradient-btn inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full text-base tracking-wide group shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Large 3D Illustration */}
          <div className="lg:col-span-7 relative flex justify-center items-center">

            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/25 via-purple-600/25 to-blue-600/15 rounded-full blur-3xl opacity-70 pointer-events-none" />

            {/* Illustration — no frame, no animation */}
            <div className="relative w-full">
              <Image
                src="/hero-illustration-optimized.webp"
                alt="Stellaris Dev Solutions 3D Digital Devices Showcase"
                width={1400}
                height={1050}
                className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
