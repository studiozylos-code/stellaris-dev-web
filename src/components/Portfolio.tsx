"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Sparkles } from "lucide-react";

export default function Portfolio() {
  const { dict } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = dict.portfolio.items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="portafolio" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.portfolio.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {dict.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.entries(dict.portfolio.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                  : "glass-panel text-slate-300 hover:text-white border-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
