"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="bg-slate-950/60 backdrop-blur-md border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/40 p-0.5 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                <Image
                  src="/logo.jpg"
                  alt="Stellaris Dev Solutions Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-mono">
                  STELLARIS <span className="text-cyan-400 text-xs">DEV SOLUTIONS</span>
                </span>
                <span className="text-[10px] tracking-widest text-cyan-400 font-mono font-semibold uppercase">
                  {dict.footer.tagline}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">{dict.nav.services}</a></li>
              <li><a href="#calculadora" className="hover:text-cyan-400 transition-colors">{dict.nav.calculator}</a></li>
              <li><a href="#portafolio" className="hover:text-cyan-400 transition-colors">{dict.nav.projects}</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">{dict.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono">
              Contacto Directo
            </h4>
            <p className="text-slate-300 font-mono">stellarisdev.us@gmail.com</p>
            <p className="text-slate-400">Atención global en Español e Inglés</p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left font-mono">
            {dict.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-[11px]">Next.js • Tailwind CSS • pnpm</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
