"use client";

import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import { Christiano } from "@/sections/Christiano";
import { Headquarter } from "@/sections/Headquarter";


export default function Home() {
  return (
      <main>
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <CallToAction />
        <Christiano />
        <Headquarter />
        <Footer />
      </main>
  );
}
