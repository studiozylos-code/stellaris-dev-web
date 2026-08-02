"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";

export default function Process() {
  const { dict } = useLanguage();

  return (
    <section id="metodologia" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.process.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {dict.process.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-4xl font-extrabold font-mono text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress bar line indicator */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
