'use client';
import React from 'react';
import CookieBanner from '@/app/components/cookieBanner';
import Menu from '@/app/components/menu';
import PhotoCarousel0 from '@/app/components/photoCaruselA';
import '../src/app/styles/global.css';
import '../src/app/styles/home.css';
import '../src/app/styles/about-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast
import '../src/app/styles/print.css';

const Career = () => {
 

  return (
    <div>
      <CookieBanner/>
      <Menu />
      <main>
    <section id="about" className="about-us-section">
    <PhotoCarousel0/>
   
      <div>
      <div className="career-section">
  <h2>Karriere bei Baumgartner Development</h2>
  <p>
    Vielen Dank für Ihr Interesse an Baumgartner Development. Aktuell sind keine Stellen zu besetzen, aber wir freuen uns immer über Initiativbewerbungen von talentierten und engagierten Personen.
  </p>
  <p>
    Bitte senden Sie Ihre Bewerbung mit Lebenslauf und einem kurzen Anschreiben an unsere E-Mail-Adresse. Wir werden Ihre Unterlagen sorgfältig prüfen und uns bei Bedarf mit Ihnen in Verbindung setzen.
  </p>
  <p>
    Baumgartner Development – Gemeinsam für eine barrierefreie digitale Zukunft.
  </p>
</div>
<div className="protected-work-container">
    <h2>Geschützte Arbeitsstelle für Kreative mit Behinderung</h2>
    <p>
        Das <strong>Kollektiv behinderter Personen aus der Kreativ- und Digitalbranche</strong> bietet geschützte Arbeitsstellen für Webdesigner, Grafiker und Programmierer.  
    </p>
    <p>
        Jeder Mitarbeitende arbeitet selbstständig im Homeoffice und wird für seine Beteiligung an Projekten mit einem Honorar vergütet. Die Arbeit erfolgt ausschließlich remote.  
    </p>
    <p>
        Unser Kollektiv organisiert regelmäßig Treffen, um sich auszutauschen und anstehende Projekte zu verteilen. Die Aufträge werden entsprechend der individuellen Fähigkeiten und Kapazitäten vergeben.  
    </p>
    <p>
        Wenn du Interesse hast, Teil unseres Kollektivs zu werden, melde dich bei uns!  
    </p>
</div>

</div>
      <PhotoCarousel0/>
    </section>
    </main>
    </div>
  );
};


export default Career;
