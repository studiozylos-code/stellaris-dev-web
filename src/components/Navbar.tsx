"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { locale, setLocale, dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#nosotros", label: "NOSOTROS" },
    { href: "#servicios", label: dict.nav.services },
    { href: "#planes", label: "PLANES" },
    { href: "#portafolio", label: dict.nav.projects },
    { href: "#contacto", label: dict.nav.contact },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Floating Capsule Bar (Exact Image 1 Design) */}
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#080c18]/90 backdrop-blur-xl border border-white/15 py-2.5 px-6 shadow-2xl shadow-purple-950/40"
            : "bg-[#0b0f19]/70 backdrop-blur-md border border-white/10 py-3 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500/40 p-0.5 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(0,229,255,0.3)]">
              <Image
                src="/logo.jpg"
                alt="Stellaris Dev Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base font-extrabold tracking-tight text-white font-mono uppercase">
                STELLARIS
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400">
                DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group uppercase"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: i18n + Cotizar Pill Button */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* i18n Switcher */}
            <div className="flex items-center bg-slate-900/80 p-0.5 rounded-full border border-white/10 text-[11px]">
              <button
                onClick={() => setLocale("es")}
                className={`px-2.5 py-1 rounded-full font-mono font-bold transition-all ${
                  locale === "es"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full font-mono font-bold transition-all ${
                  locale === "en"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Cotizar CTA Button (Exact Pill Gradient Image 1) */}
            <a
              href="#planes"
              className="pill-gradient-btn text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-1.5 transition-transform hover:scale-105"
            >
              <span>{dict.nav.cta}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="text-[10px] font-mono font-bold bg-slate-900 border border-white/10 px-2 py-1 rounded-full text-cyan-400"
            >
              {locale.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto bg-[#080c18]/95 border border-white/15 rounded-2xl backdrop-blur-xl px-6 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full pill-gradient-btn text-white font-bold py-2.5 rounded-full mt-3 text-xs"
          >
            {dict.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
