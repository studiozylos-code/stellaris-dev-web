"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator as CalcIcon, CheckCircle2, MessageSquare, Send, Sparkles, Clock, DollarSign } from "lucide-react";

export default function Calculator() {
  const { dict, locale } = useLanguage();

  // Selection states
  const [selectedService, setSelectedService] = useState<string>("landing");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["i18n"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  // Base service definitions
  const baseServices = [
    { id: "landing", name: dict.services.items[0].title, basePrice: 199, baseDays: 4 },
    { id: "corporate", name: dict.services.items[1].title, basePrice: 399, baseDays: 8 },
    { id: "ecommerce", name: dict.services.items[2].title, basePrice: 599, baseDays: 14 },
    { id: "custom", name: dict.services.items[3].title, basePrice: 899, baseDays: 21 },
  ];

  const addonsList = [
    { id: "auth", name: dict.calculator.addonsList[0].name, price: 100, days: 2 },
    { id: "payments", name: dict.calculator.addonsList[1].name, price: 150, days: 3 },
    { id: "admin", name: dict.calculator.addonsList[2].name, price: 200, days: 4 },
    { id: "i18n", name: dict.calculator.addonsList[3].name, price: 100, days: 2 },
    { id: "ai", name: dict.calculator.addonsList[4].name, price: 250, days: 4 },
    { id: "seo_adv", name: dict.calculator.addonsList[5].name, price: 120, days: 2 },
  ];

  // Toggle addon selection
  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Compute total price and days
  const activeServiceObj = baseServices.find((s) => s.id === selectedService) || baseServices[0];
  const activeAddonsCost = addonsList
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, item) => sum + item.price, 0);
  const activeAddonsDays = addonsList
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((sum, item) => sum + item.days, 0);

  const subtotalPrice = activeServiceObj.basePrice + activeAddonsCost;
  const isExpress = selectedTimeline === "express";
  
  const totalPrice = Math.round(subtotalPrice * (isExpress ? 1.3 : 1.0));
  const totalDays = Math.max(
    3,
    Math.round((activeServiceObj.baseDays + activeAddonsDays) * (isExpress ? 0.7 : 1.0))
  );

  // WhatsApp Link generator
  const generateWhatsAppMessage = () => {
    const addonNames = addonsList
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)
      .join(", ");
    
    const text = locale === "es"
      ? `Hola Stellaris Dev Solutions! Me interesa cotizar un proyecto:\n- Servicio: ${activeServiceObj.name}\n- Módulos extras: ${addonNames || "Ninguno"}\n- Modalidad: ${isExpress ? "Express" : "Estándar"}\n- Presupuesto estimado: ~$${totalPrice} USD (${totalDays} días hábiles).`
      : `Hello Stellaris Dev Solutions! I would like to request a quote:\n- Service: ${activeServiceObj.name}\n- Extra add-ons: ${addonNames || "None"}\n- Delivery: ${isExpress ? "Express" : "Standard"}\n- Estimated budget: ~$${totalPrice} USD (${totalDays} business days).`;
    
    return `https://wa.me/5215500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculadora" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>{dict.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.calculator.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {dict.calculator.subtitle}
          </p>
        </div>

        {/* Wizard Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Options Controls (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Base Project Type */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                {dict.calculator.step1}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {baseServices.map((service) => {
                  const isSelected = selectedService === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`text-left p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                          : "bg-slate-900/60 border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-sm">{service.name}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-semibold">
                        Base: ${service.basePrice} USD
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addon Modules */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                {dict.calculator.step2}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-blue-600/20 border-cyan-400 text-white"
                          : "bg-slate-900/40 border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isChecked ? "bg-cyan-500 border-cyan-400 text-black" : "border-slate-600"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-semibold shrink-0 ml-2">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Timeline */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                {dict.calculator.step3}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.calculator.timelines.map((timeline) => {
                  const isSelected = selectedTimeline === timeline.id;
                  return (
                    <button
                      key={timeline.id}
                      onClick={() => setSelectedTimeline(timeline.id)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border-cyan-400 text-white font-bold"
                          : "bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <span className="text-sm block">{timeline.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card (4 Cols Sticky) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,102,255,0.2)] bg-slate-950/80 space-y-6">
              
              <div className="pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {dict.calculator.estimatedTitle}
                </span>
                <div className="text-4xl font-extrabold text-white font-mono mt-2 text-gradient-cosmic flex items-baseline gap-1">
                  <span>${totalPrice}</span>
                  <span className="text-xs text-cyan-400 font-sans font-semibold">USD</span>
                </div>
              </div>

              {/* Time Estimate */}
              <div className="flex items-center justify-between text-xs text-slate-300 bg-blue-950/40 p-3 rounded-xl border border-blue-500/20">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {dict.calculator.timeEstimateLabel}
                </span>
                <span className="font-bold text-white font-mono">
                  ~{totalDays} {dict.calculator.days}
                </span>
              </div>

              {/* Summary Items List */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{activeServiceObj.name}:</span>
                  <span className="font-mono text-cyan-300">${activeServiceObj.basePrice}</span>
                </div>
                {activeAddonsCost > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Módulos Adicionales:</span>
                    <span className="font-mono text-cyan-300">+${activeAddonsCost}</span>
                  </div>
                )}
                {isExpress && (
                  <div className="flex justify-between text-amber-400">
                    <span>Entrega Prioritaria Express (+30%):</span>
                    <span className="font-mono">+${Math.round(subtotalPrice * 0.3)}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <a
                  href="#contacto"
                  className="glow-btn w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{dict.calculator.requestCTA}</span>
                </a>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-semibold py-3.5 rounded-xl border border-emerald-500/40 flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{dict.calculator.whatsappCTA}</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-400 leading-tight">
                {dict.calculator.note}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
