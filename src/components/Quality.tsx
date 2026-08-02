"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Zap, Grid, Code2, Gauge, CheckCircle2, ArrowRight } from "lucide-react";

export default function Quality() {
  const { dict } = useLanguage();

  const getCardIcon = (id: string) => {
    switch (id) {
      case "fast":     return <Zap   className="w-5 h-5 text-cyan-400" />;
      case "scalable": return <Grid  className="w-5 h-5 text-purple-400" />;
      case "clean":    return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "perf":     return <Gauge className="w-5 h-5 text-purple-400" />;
      default:         return <Zap   className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="nosotros" className="py-24 relative bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Mobile + Desktop: text first, cards below on mobile; side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT TEXT COLUMN — shows first on mobile and on desktop */}
          <div className="lg:col-span-6 space-y-6 order-1">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {dict.quality.titleStart}
              <span className="text-cyan-400">{dict.quality.titleHighlight1}</span>
              {dict.quality.titleMiddle}
              <span className="text-purple-400">{dict.quality.titleHighlight2}</span>
              {dict.quality.titleEnd}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {dict.quality.description}
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                <span>{dict.quality.check1}</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-white">
                <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0" />
                <span>{dict.quality.check2}</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 pill-gradient-btn text-white font-bold px-6 py-3 rounded-full text-sm tracking-wide group"
            >
              <span>Iniciar mi proyecto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* RIGHT CARDS COLUMN — shows second on mobile (order-2), right column on desktop */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2">
            {dict.quality.cards.map((card) => {
              const isCyan = card.color === "cyan";
              return (
                <div
                  key={card.id}
                  className={`bg-[#0a0e1c]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors ${
                    isCyan ? "border-l-2 border-l-cyan-400" : "border-l-2 border-l-purple-500"
                  }`}
                >
                  <div>{getCardIcon(card.id)}</div>
                  <h3 className="text-base font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
