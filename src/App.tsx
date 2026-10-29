import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TattooGallery } from './components/TattooGallery';
import { PiercingGallery } from './components/PiercingGallery';
import { Services } from './components/Services';
import { HygieneStandards } from './components/HygieneStandards';
import { GoogleReviews } from './components/GoogleReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1EB] selection:bg-[#C6A56B] selection:text-[#0B0B0B] font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Fullscreen Editorial Hero */}
        <Hero />

        {/* Studio Story & Core Pillars */}
        <About />

        {/* Tattoo Portfolio Gallery */}
        <TattooGallery />

        {/* Body Piercing Gallery */}
        <PiercingGallery />

        {/* Complete Studio Services */}
        <Services />

        {/* Hospital-Grade Hygiene Standards */}
        <HygieneStandards />

        {/* Dedicated Google Reviews Section & Customer Carousel */}
        <GoogleReviews />

        {/* Final Conversion, Appointment & Dual Branch Contact Section */}
        <ContactSection />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
