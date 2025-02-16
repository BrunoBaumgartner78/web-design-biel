'use client';
import React from 'react';
import CookieBanner from '../src/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '../../src/app/styles/global.css';
import '../../src/app/styles/home.css';
import '../../src/app/styles/print.css';

const WireframesPrototypes = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
     <main>

      <section id="wireframes-prototypes" className="wireframes-prototypes-section">
      <PhotoCarousel0/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="wireframes-prototypes-text">
            <h1>Wireframes & Prototypen – Ihr Fahrplan für erfolgreiche Projekte</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für klare, durchdachte Wireframes und Prototypen. Mit unseren visuellen Konzepten legen wir den Grundstein für nutzerzentrierte Designs und effiziente Entwicklungsprozesse.
            </p>

            <h2>Unsere Mission: Struktur und Klarheit von Anfang an</h2>
            <p>
              Wireframes und Prototypen sind unerlässlich, um Ihre Ideen zu visualisieren und den Entwicklungsprozess zu optimieren. Wir erstellen präzise und funktionale Entwürfe, die als Blaupause für Ihr Projekt dienen.
            </p>
          </div>
          <div className="wireframes-prototypes-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="wireframes-prototypes-advantages">
            <h2>Warum Sie uns wählen sollten</h2>
            <p>Benutzerfokus: Entwürfe, die auf die Bedürfnisse Ihrer Zielgruppe zugeschnitten sind.</p>
            <p>Effizienz: Klare Strukturen minimieren Missverständnisse und sparen Zeit.</p>
            <p>Iterative Entwicklung: Wir erstellen Prototypen, die getestet und optimiert werden können.</p>
            <p>Nahtlose Übergänge: Von Wireframes bis zur finalen Entwicklung – alles aus einer Hand.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Erstellung von Low-Fidelity-Wireframes</li>
          <li>High-Fidelity-Prototypen für detaillierte Visualisierungen</li>
          <li>Interaktive Prototypen für Usability-Tests</li>
          <li>Beratung zur Struktur und Benutzerführung</li>
          <li>Werkzeuge wie Figma, Adobe XD und mehr</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Mit unserer Expertise in Wireframes und Prototypen helfen wir Ihnen, Risiken zu minimieren und Ihre Vision effizient umzusetzen. Wir legen Wert auf klaren, benutzerzentrierten Aufbau und arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu erreichen.
            </p>

            <p>
              Lassen Sie uns gemeinsam den perfekten Startpunkt für Ihr Projekt schaffen – mit durchdachten Wireframes und Prototypen, die überzeugen.
            </p>

            <p>Kontaktieren Sie uns und starten Sie mit Baumgartner Development in Ihr nächstes Projekt.</p>

            <p>Baumgartner Development – Ihr Experte für Wireframes & Prototypen.</p>
          </div>
        </div>
        <PhotoCarousel0/>
      </section>
      </main>
    </div>
  );
};

export default WireframesPrototypes;
