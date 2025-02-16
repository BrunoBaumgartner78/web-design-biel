'use client';
import React from 'react';
import CookieBanner from '../src/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '../../src/app/styles/global.css';
import '../../src/app/styles/home.css';
import '../../src/app/styles/print.css';

const DesignThinkingServices = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <main>
      <section id="design-thinking" className="design-thinking-section">
      <PhotoCarousel0/>
        
        <div className="flex">
          <div className="design-thinking-text">
            <h1>Design Thinking – Kreative Lösungen für komplexe Herausforderungen</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für nutzerzentrierte und innovative Problemlösungen. Mit Design Thinking entwickeln wir Ansätze, die die Bedürfnisse Ihrer Zielgruppe in den Mittelpunkt stellen.
            </p>

            <h2>Unsere Mission: Innovation durch Empathie und Zusammenarbeit</h2>
            <p>
              Wir nutzen die Prinzipien des Design Thinking, um kreative und praktikable Lösungen zu entwickeln. Durch enge Zusammenarbeit und Iteration schaffen wir nachhaltige Ergebnisse, die echten Mehrwert bieten.
            </p>
          </div>
          
        </div>
        
        <div className="flex2">
          <div className="design-thinking-advantages">
            <h2>Warum Sie uns wählen sollten</h2>
            <p>Empathie-basiertes Arbeiten: Wir stellen die Bedürfnisse Ihrer Kunden in den Fokus.</p>
            <p>Kreative Problemlösungen: Innovative Ansätze für komplexe Herausforderungen.</p>
            <p>Interdisziplinäre Teams: Zusammenarbeit von Experten aus verschiedenen Bereichen.</p>
            <p>Schnelle Prototypen: Ideen werden schnell visualisiert und getestet.</p>
          </div>
        </div>
        <h2>Unser Design Thinking Prozess</h2>
        <ul>
          <li>Verstehen: Bedürfnisse und Herausforderungen der Nutzer analysieren</li>
          <li>Definieren: Zielsetzung und Problemstellung klar formulieren</li>
          <li>Ideenfindung: Kreative Lösungen entwickeln</li>
          <li>Prototyping: Schnelle Erstellung von Konzepten</li>
          <li>Testen: Feedback einholen und Lösungen optimieren</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="flex">
          <div>
            <p>
              Unser Ansatz vereint Kreativität, Empathie und strategisches Denken. Wir helfen Ihnen, innovative Lösungen zu finden, die Ihre Kunden begeistern und langfristigen Erfolg ermöglichen.
            </p>

            <p>
              Lassen Sie uns gemeinsam an Ihren Herausforderungen arbeiten und nachhaltige Innovationen schaffen.
            </p>

            <p>Kontaktieren Sie uns und starten Sie Ihr nächstes Projekt mit Baumgartner Development.</p>

            <p>Baumgartner Development – Ihr Partner für Design Thinking und Innovation.</p>
          </div>
        </div>
        <PhotoCarousel0/>
      </section>
      </main>
    </div>
  );
};

export default DesignThinkingServices;
