import React from "react";
import Menu from "@/app/components/menu";
import '@/app/styles/impressum.css';


const Impressum = () => {
  return (
    <main>
    <div className="impressum-page">
      <Menu />
     
      <div className="impressum-content">
        <h1>Impressum</h1>
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>Bruno Baumgartner<br />
        Le Prè aux boufe 222<br />
        2615 Sonvillier<br />
        Schweiz</p>
        
        <p><strong>Kontakt:</strong></p>
        <p>Telefon: +41 078 243 72 27<br />
        E-Mail: bruno@brainbloom.ch</p>
        
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
        <p>Bruno Baumgartner<br />
        Le Prè aux boufe 222<br />
        2615 Sonvillier<br />
        Schweiz</p>
        
        <p><strong>Haftungsausschluss:</strong></p>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        
        <p><strong>Externe Links:</strong></p>
        <p>Unsere Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
      </div>
     
    </div>
    </main>
  );
};

export default Impressum;
