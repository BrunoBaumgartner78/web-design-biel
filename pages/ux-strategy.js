'use client';
import React from 'react';
import CookieBanner from '@/src/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '../../src/app/styles/global.css';
import '../../src/app/styles/home.css';
import '../../src/app/styles/about-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast
import '../../src/app/styles/print.css';

const UXStrategy = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      
<main>
      <section id="ux-strategy" className="ux-strategy-section">
      <PhotoCarousel0/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="ux-strategy-text">
            <h1>UX-Strategie – Benutzerzentrierte Ansätze für nachhaltigen Erfolg</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Experten für durchdachte UX-Strategien. Wir entwickeln maßgeschneiderte Konzepte, die Ihre Benutzer in den Mittelpunkt stellen und nachhaltige Ergebnisse liefern.
            </p>

            <h2>Unsere Mission: Herausragende Nutzererlebnisse schaffen</h2>
            <p>
              Mit einer klaren UX-Strategie sorgen wir dafür, dass Ihre digitalen Produkte sowohl funktional als auch ansprechend sind. Unsere benutzerzentrierten Ansätze fördern nicht nur die Zufriedenheit, sondern auch die Loyalität Ihrer Kunden.
            </p>
          </div>
          <div className="ux-strategy-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="ux-strategy-advantages">
            <h2>Warum eine UX-Strategie wichtig ist</h2>
            <p>Optimierte Nutzererfahrung: Wir schaffen intuitive Designs, die leicht zu bedienen sind.</p>
            <p>Steigerung der Kundenbindung: Positive Erlebnisse fördern die langfristige Treue Ihrer Benutzer.</p>
            <p>Effizientere Entwicklung: Eine klare Strategie spart Zeit und Ressourcen.</p>
            <p>Wettbewerbsvorteil: Mit einer starken UX-Strategie heben Sie sich von der Konkurrenz ab.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Entwicklung und Implementierung von UX-Strategien</li>
          <li>Benutzerforschung und Analyse</li>
          <li>Erstellung von Wireframes und Prototypen</li>
          <li>Usability-Tests und Feedback-Integration</li>
          <li>Workshops und Schulungen zu UX-Methoden</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Unser Team kombiniert langjährige Erfahrung mit innovativen Ansätzen, um UX-Strategien zu entwickeln, die Ihre Produkte und Dienstleistungen auf das nächste Level bringen.
            </p>

            <p>
              Lassen Sie uns gemeinsam herausragende Nutzererlebnisse schaffen und Ihre Vision in die Realität umsetzen.
            </p>

            <p>Kontaktieren Sie uns und starten Sie mit Baumgartner Development in eine neue Ära der Nutzerfreundlichkeit.</p>

            <p>Baumgartner Development – Ihr Partner für erfolgreiche UX-Strategien.</p>
          </div>
        </div>
        <PhotoCarousel0/>
      </section>
      </main>
    </div>
  );
};

export default UXStrategy;
