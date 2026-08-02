"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Essence from "@/components/Essence";
import Quality from "@/components/Quality";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-galaxy-subtle text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <Essence />
      <Quality />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
