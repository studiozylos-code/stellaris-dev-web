"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, Zap, Globe, ShoppingCart, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "landing",
    icon: <Zap className="w-6 h-6" />,
    iconColor: "text-cyan-400",
    glowColor: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
    accentColor: "bg-cyan-400",
    badge: null,
    title: "Landing Page",
    subtitle: "Ideal para presentar tu marca o producto con impacto.",
    price: "$100",
    period: "USD",
    features: [
      "Diseño moderno y profesional",
      "Optimizada para convertir visitas en clientes",
      "Adaptada a móviles y tablets",
      "Formulario de contacto integrado",
      "SEO básico incluido",
      "Entrega en 7 días",
    ],
    cta: "Quiero mi Landing",
  },
  {
    id: "website",
    icon: <Globe className="w-6 h-6" />,
    iconColor: "text-purple-400",
    glowColor: "from-purple-500/25 to-purple-600/15",
    borderColor: "border-purple-500/50",
    accentColor: "bg-purple-500",
    badge: "MÁS POPULAR",
    title: "Sitio Web Corporativo",
    subtitle: "Tu presencia digital completa para empresas y profesionales.",
    price: "$200",
    period: "USD",
    features: [
      "Hasta 8 secciones personalizadas",
      "Blog o noticias integrado",
      "Galería de proyectos / portafolio",
      "Formulario de contacto avanzado",
      "SEO completo + Google Analytics",
      "Dominio y hosting primer año",
      "Soporte por 3 meses",
    ],
    cta: "Quiero mi Sitio Web",
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    iconColor: "text-blue-400",
    glowColor: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    accentColor: "bg-blue-400",
    badge: null,
    title: "eCommerce",
    subtitle: "Tu tienda online lista para vender desde el primer día.",
    price: "$499",
    period: "USD",
    features: [
      "Catálogo de productos ilimitado",
      "Carrito y checkout optimizado",
      "Pagos con tarjeta, transferencia y más",
      "Gestión de pedidos e inventario",
      "Panel de administración propio",
      "SEO + velocidad premium",
      "Soporte por 6 meses",
    ],
    cta: "Quiero mi Tienda",
  },
];

export default function Pricing() {
  const { dict } = useLanguage();

  return (
    <section id="planes" className="py-24 relative">
      {/* Subtle top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block">
            PLANES & PRECIOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Elige el plan{" "}
            <span className="text-gradient-purple-cyan">perfecto</span>{" "}
            para tu negocio
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Sin sorpresas. Sin costos ocultos. Todo incluido desde el primer día.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-[#0a0e1c]/80 backdrop-blur-md rounded-3xl border ${plan.borderColor} p-8 shadow-2xl group hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`} />

              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span className="text-[10px] font-mono font-black tracking-widest bg-purple-500 text-white px-3 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center mb-6 ${plan.iconColor} group-hover:border-white/20 transition-colors`}>
                {plan.icon}
              </div>

              {/* Title & subtitle */}
              <h3 className="text-2xl font-extrabold text-white mb-1">{plan.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-slate-400 text-sm font-mono">desde</span>
                  <span className="text-4xl font-black text-white font-mono">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-mono mb-1">{plan.period}</span>
                </div>
                <div className={`h-0.5 w-12 ${plan.accentColor} rounded-full mt-3 opacity-80`} />
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.iconColor}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contacto"
                className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 border ${plan.borderColor} text-white hover:bg-white/10 group/btn`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 text-xs font-mono mt-10">
          ¿Necesitas algo personalizado?{" "}
          <a href="#contacto" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4">
            Hablemos y armamos tu propuesta a medida.
          </a>
        </p>

      </div>
    </section>
  );
}
