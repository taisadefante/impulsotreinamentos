"use client";
import { useState } from "react";
import { C } from "@/data/siteData";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Trainings from "@/components/Trainings";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        background: `radial-gradient(circle at top left, ${C.wine2} 0%, ${C.bg2} 34%, ${C.bg} 100%)`,
        color: C.text,
        overflowX: "hidden",
      }}
    >
      <GlobalStyle />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
      <Hero />
      <Metrics />
      <About />
      <Trainings />
      <Benefits />
      <Testimonials />
      <FAQ />

      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
