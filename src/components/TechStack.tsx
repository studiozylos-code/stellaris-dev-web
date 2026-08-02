"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Code, Server, Cloud, Cpu, Database, ShieldCheck, Zap } from "lucide-react";

export default function TechStack() {
  const { dict } = useLanguage();

  const technologies = [
    { name: "Next.js 14/15", category: "Frontend", icon: Code },
    { name: "React 19", category: "Frontend", icon: Zap },
    { name: "TypeScript", category: "Language", icon: Code },
    { name: "Tailwind CSS", category: "Styling", icon: Sparkles },
    { name: "Node.js", category: "Backend", icon: Server },
    { name: "PostgreSQL / Prisma", category: "Database", icon: Database },
    { name: "Vercel / AWS", category: "Cloud & Hosting", icon: Cloud },
    { name: "OpenAI / Claude APIs", category: "AI & Automation", icon: Cpu },
  ];

  return (
    <section id="tecnologias" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-semibold text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{dict.tech.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.tech.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {dict.tech.subtitle}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center space-y-3 group"
              >
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
