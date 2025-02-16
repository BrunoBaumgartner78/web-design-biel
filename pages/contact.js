import React from "react";
import '../src/app/styles/global.css';
import "../src/app/styles/contact.css"; // Externe CSS-Datei für sauberen Code
import '../src/app/styles/card.css';
import '../src/app/styles/photoCarousel.css';
import '../src/app/styles/print.css';
import Fireflies from "@/app/components/firefly";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CookieBanner from "@/app/components/cookieBanner";
import LazySection from "@/app/components/lasy";
import PhotoCarousel from "@/app/components/photoCarousel";
import PricingMenu from "@/app/components/cards";
import PricingMenu0 from "@/app/components/cards0";


export default function Contact() {
  return (
    <div className="contact-page">
      <CookieBanner/>
      <Fireflies />
      <Header />
      {/* Hero-Bereich mit Video & Overlay */}
      <div className="hero">
        <video autoPlay loop muted className="hero-video">
          <source src="/assets/tiny.mp4" type="video/mp4" />
        </video>
        <img src="/assets/pera.webP" alt="Overlay" className="hero-overlay0" />
        <img src="/assets/HeroBackgroundContact.webP" alt="OverlayDesktop" className="hero-overlay-desktop" />
        <div className="hero-text">
          <h1>Kontaktiere Uns</h1>
          <p>Wir sind für dich da – per Telefon, E-Mail oder vor Ort.</p>
        </div>
      </div>

      {/* Kontakt-Informationen */}
      <div className="contact-info">
        <div className="contact-card">
          <h2>Öffnungszeiten</h2>
          <p>Mo - Fr: 14:00 - 18:00 Uhr</p>
          <p>Sa: 14:00 - 15:00 Uhr</p>
          <p>So: Geschlossen</p>
        </div>

        <div className="contact-card">
          <h2>Kontakt</h2>
          <p>📧 E-Mail: <a href="mailto:info@deinefirma.com">bruno@brainbloom.ch</a></p>
          <p>📞 Tel: <a href="tel:+41078 243 72 27">+41 078 243 72 27  </a></p>
          <p>📍 Adresse: Le Pré-aux-Boeufs 222, 2615 Sonvilier</p>
        </div>
       
      </div>
      <LazySection>
        <div className="flex">
      <PricingMenu />
      <PricingMenu0 />
      </div>
  <h2>Als geschützte Werkstatt unterstützen wir:</h2>   
   <PhotoCarousel/>
      <Footer />
      </LazySection>
    </div>
  );
}
