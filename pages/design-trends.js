'use client';
import React from 'react';
import CookieBanner from '../src/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '../../src/app/styles/global.css';
import '../../src/app/styles/home.css';
import '../../src/app/styles/print.css';

const DesignTrends = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <main>

      <section id="design-trends" className="design-trends-section">
      <PhotoCarousel0/>
        <div className="flex">
          <div className="design-trends-text">
            <h1>Design Trends – Zukunftsweisende Gestaltung für Ihre Projekte</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für moderne und innovative Designtrends. Wir bringen die neuesten Entwicklungen und Ideen in Ihre Projekte.
            </p>

            <h2>Unsere Mission: Kreativität und Innovation vereinen</h2>
            <p>
              Trends im Design entwickeln sich ständig weiter. Wir helfen Ihnen, die neuesten Trends zu verstehen und in Ihre Projekte zu integrieren, um Ihre Marke zeitgemäß und ansprechend zu präsentieren.
            </p>
          </div>
          <div className="design-trends-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="flex2">
          <div className="design-trends-advantages">
            <h2>Warum wir? Das zeichnet uns aus:</h2>
            <p>Up-to-Date: Wir verfolgen kontinuierlich die neuesten Entwicklungen im Designbereich.</p>
            <p>Kreative Exzellenz: Wir kombinieren frische Ideen mit bewährten Designprinzipien.</p>
            <p>Benutzerzentrierung: Jedes Design wird mit Blick auf die Nutzer erstellt.</p>
            <p>Langfristiger Mehrwert: Wir schaffen Designs, die über Trends hinaus Bestand haben.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Analyse aktueller Designtrends</li>
          <li>Entwicklung trendiger und innovativer Layouts</li>
          <li>Integration moderner Animationen und Interaktionen</li>
          <li>Optimierung bestehender Designs nach neuesten Standards</li>
          <li>Beratung zu Farbtrends, Typografie und mehr</li>
        </ul>

        <h2>Warum Design Trends wichtig sind</h2>
        <div className="flex">
          <div>
            <p>
              Design ist der erste Eindruck, den Ihre Kunden von Ihrer Marke erhalten. Mit den richtigen Trends können Sie nicht nur Aufmerksamkeit erregen, sondern auch Vertrauen und Interesse aufbauen.
            </p>

            <p>
              Gemeinsam mit Ihnen setzen wir Projekte um, die nicht nur im Hier und Jetzt beeindrucken, sondern auch zukunftssicher sind.
            </p>

            <p>Kontaktieren Sie uns und lassen Sie uns gemeinsam Ihre Designvision verwirklichen.</p>

            <p>Baumgartner Development – Ihr Experte für zukunftsweisende Designtrends.</p>
          </div>
        </div>
        <PhotoCarousel0/>
      </section>
      </main>
    </div>
  );
};

export default DesignTrends;
