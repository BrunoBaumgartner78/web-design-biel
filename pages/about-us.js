'use client';

import React from 'react';
import CookieBanner from '@/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '@/app/styles/global.css';
import '@/app/styles/home.css';
import '../src/app/styles/print.css';

const AboutUs = () => {
  return (
    <div className="homepage">
      <CookieBanner />
      <Menu />
<main>
      <section id="about" className="about-us-section">
        <PhotoCarousel0 />

        <div className="flex">
          <div className="about-us-text">
            <h1>About Us – Professionelles Webdesign für die Region Biel</h1>
            <p>
              Willkommen bei Baumgartner Development, Ihrem zuverlässigen Partner für modernes und funktionales Webdesign in der Region Biel. Wir gestalten Websites, die optisch überzeugen und optimal auf Ihr Unternehmen zugeschnitten sind.
            </p>

            <h2>Unsere Mission: Ihr Erfolg im digitalen Raum</h2>
            <p>
              In der heutigen digitalen Welt ist eine professionelle Online-Präsenz unverzichtbar. Unsere Mission ist es, Unternehmen in Bern und Umgebung mit innovativen Webdesigns zu helfen, ihre Zielgruppen zu erreichen.
            </p>
          </div>
          
          
        </div>

        <div className="flex2">
          <div className="about-us-advantages">
            <h2>Was uns auszeichnet</h2>
            <ul>
              <li><strong>Individuelle Lösungen:</strong> Wir hören zu und entwickeln maßgeschneiderte Websites.</li>
              <li><strong>Modernes Design:</strong> Zeitgemäße, ansprechende Designs für Ihre Marke.</li>
              <li><strong>Benutzerfreundlichkeit:</strong> Intuitive Navigation für Desktop und Mobile.</li>
              <li><strong>SEO-Optimierung:</strong> Bessere Auffindbarkeit in Suchmaschinen.</li>
            </ul>
          </div>
        </div>

        <h2>Unser Fokus auf Biel</h2>
        <p>
          Als lokales Unternehmen verstehen wir die Bedürfnisse der Firmen in Bern. Ob kleine Firma oder etabliertes Unternehmen – wir helfen Ihnen, sich erfolgreich zu positionieren.
        </p>

        <h3>Unsere Leistungen</h3>
        <ul>
          <li>Webdesign und -entwicklung</li>
          <li>Responsive Design für mobile Geräte</li>
          <li>Suchmaschinenoptimierung (SEO)</li>
          <li>Pflege und Wartung Ihrer Website</li>
          <li>Integration moderner Tools und Funktionen</li>
        </ul>

        <h2>Warum Webdesign von uns?</h2>
        <div className="flex">
          <div>
            <p>
              Unser Team kombiniert Kreativität, technisches Know-how und ein tiefes Verständnis für die Online-Welt. Kunden in Biel und der ganzen Schweiz vertrauen auf unsere Expertise.
            </p>
            <p>Lassen Sie uns gemeinsam Ihre Vision umsetzen!</p>
            <p>Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.</p>
          </div>
          
      
        </div>

        <PhotoCarousel0 />
      </section>
      </main>
    </div>
  );
};

export default AboutUs;
