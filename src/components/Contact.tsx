"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, MessageSquare, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { dict, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Landing Page",
    message: "",
  });

  const rawPhone = "59169991345";
  const displayPhone = "+591 69991345";
  const contactEmail = "stellarisdev.us@gmail.com";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = locale === "es"
      ? `*Nuevo Mensaje de Cotización*\n\n` +
        `👤 *Nombre:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Teléfono:* ${formData.phone || "No especificado"}\n` +
        `🚀 *Proyecto:* ${formData.service}\n\n` +
        `💬 *Mensaje:* ${formData.message}`
      : `*New Quote Request*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Phone:* ${formData.phone || "Not specified"}\n` +
        `🚀 *Project:* ${formData.service}\n\n` +
        `💬 *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Landing Page",
        message: "",
      });
    }, 5000);
  };

  const generateWhatsAppDirect = () => {
    const text = locale === "es"
      ? `Hola Stellaris Dev Solutions! Quisiera solicitar información sobre sus servicios de desarrollo web.`
      : `Hello Stellaris Dev Solutions! I would like to inquire about your web development services.`;
    return `https://wa.me/${rawPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{dict.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Direct Channels (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 w-fit">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">WhatsApp Directo</h3>
                <p className="text-sm font-mono text-emerald-400 font-bold mt-1">{displayPhone}</p>
                <p className="text-xs text-slate-400 mt-1">Respuesta inmediata en minutos</p>
              </div>
              <a
                href={generateWhatsAppDirect()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-all shadow-lg shadow-emerald-600/30"
              >
                <span>{dict.contact.whatsappCTA}</span>
              </a>
            </div>

            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3">
              <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-cyan-400 w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Correo Electrónico</h3>
                <a 
                  href={`mailto:${contactEmail}`}
                  className="text-xs text-cyan-300 font-mono mt-1 hover:underline block"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Form Container (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-slate-950/80">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {dict.contact.successMessage}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {locale === "es" 
                      ? "Se ha abierto WhatsApp con los datos de tu mensaje." 
                      : "WhatsApp has been opened with your message details."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        {dict.contact.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        {dict.contact.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john.doe@example.com"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        {dict.contact.formPhone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        {dict.contact.formProjectType}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Landing Page">Landing Page</option>
                        <option value="Sitio Web Corporativo">Sitio Web Corporativo</option>
                        <option value="eCommerce / Tienda">eCommerce / Tienda</option>
                        <option value="Sistema / App a Medida">Sistema / App a Medida</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {dict.contact.formMessage} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals and requirements..."
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="glow-btn w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-xl shadow-cyan-900/40"
                  >
                    <Send className="w-5 h-5" />
                    <span>{dict.contact.submit}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

