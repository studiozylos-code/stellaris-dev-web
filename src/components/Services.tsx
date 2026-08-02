"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, ShoppingBag, Sparkles, Gauge } from "lucide-react";

export default function Services() {
  const { dict } = useLanguage();

  const getBadgeIcon = (id: string) => {
    switch (id) {
      case "webdev":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "ecommerce":
        return <ShoppingBag className="w-5 h-5 text-purple-400" />;
      case "uiux":
        return <Sparkles className="w-5 h-5 text-cyan-300" />;
      case "seo":
        return <Gauge className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="servicios" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Image 3) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block">
            {dict.services.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.services.title}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Competencias Centrales Cards Grid (Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.services.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#0a0e1c]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/30 transition-all shadow-xl"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-400/40 transition-colors">
                  {getBadgeIcon(item.id)}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
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
