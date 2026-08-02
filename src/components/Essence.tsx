"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Essence() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 relative bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Section Title */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase block">
              {dict.essence.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {dict.essence.titlePrefix}
              <span className="text-gradient-purple-cyan block mt-1">
                {dict.essence.titleHighlight}
              </span>
            </h2>
          </div>

          {/* RIGHT COLUMN: Description & 2 Vertical Accent Cards */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              En Stellaris, transformamos tu presencia en línea en un{" "}
              <strong className="text-white font-semibold">ecosistema vivo</strong>. Nuestro enfoque combina la innovación tecnológica con una arquitectura diseñada para el crecimiento real.
            </p>

            {/* 2 Cards Grid with Colored Vertical Borders (Exact Image 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Innovación (Cyan Left Accent Line) */}
              <div className="bg-[#0b0f1d]/70 backdrop-blur-md p-6 rounded-2xl border-l-2 border-l-cyan-400 border border-white/5 space-y-2 group hover:border-l-cyan-300 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {dict.essence.card1Title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {dict.essence.card1Desc}
                </p>
              </div>

              {/* Card 2: Rendimiento (Purple Left Accent Line) */}
              <div className="bg-[#0b0f1d]/70 backdrop-blur-md p-6 rounded-2xl border-l-2 border-l-purple-500 border border-white/5 space-y-2 group hover:border-l-purple-400 transition-all">
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {dict.essence.card2Title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {dict.essence.card2Desc}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
