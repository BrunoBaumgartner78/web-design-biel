'use client';
import React from 'react';
import './styles/home.css';
import './styles/print.css';
import Fireflies from './components/firefly';
import AnimatedCodingIcon from './components/codeing';
import AnimatedDeployIcon from './components/deploying';
import AnimatedHostingIcon from './components/hosting';
import AnimatedDesignIcon from './components/design';
import AnimatedSupportIcon from './components/support';
import AnimatedEmailIcon from './components/email';
import ParallaxSection from './components/parallax';
import PricingMenu from './components/cards';
import Footer from './components/footer';
import PhotoCarousel from './components/photoCarousel';
import LazySection from './components/lasy';
import VideoPreview from './components/video';
import PricingMenu0 from './components/cards0';


export default function Page() {
  return (
    <div className="homepage">
      <main>
    <div>
      <img src="/assets/FireMoon.webP" alt="Hintergrund" className="background-img" />
    </div>
    
    {/* Fireflies */}
    <Fireflies />

    {/* Inhalt */}
    <div className="content">
      <h1>Baumgartner Web Design Development<br />Biel / Bienne</h1>
      <h2>Exzellentes Web Design in JavaScript, React.js und Next.js</h2>
      <p>Erfahre hier mehr über unseren Service.</p>
    </div>
    <VideoPreview />
      <section style={{ height: 'fit-content' }}>
     
      <div className="flex">
    <div>
        <h1>About Us – Professionelles Webdesign für die Region Biel</h1>
<p>Willkommen bei Baumgartner Development, Ihrem zuverlässigen Partner für modernes und funktionales Webdesign in der Region Biel. Wir sind spezialisiert auf die Gestaltung und Entwicklung von Websites, die nicht nur ästhetisch überzeugen, sondern auch optimal auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.</p>

<h2>Unsere Mission: Ihr Erfolg im digitalen Raum</h2>
<p>In der heutigen digitalen Welt ist eine professionelle Online-Präsenz unverzichtbar. Unsere Mission ist es, Unternehmen in Bern und Umgebung dabei zu helfen, mit innovativen Webdesigns ihre Zielgruppen zu erreichen und sich von der Konkurrenz abzuheben.</p>
<img src="/assets/laptop.webP" alt="Laptop" className="aboutImg" />
</div>



<div className="about"
    
  />

</div>

<div className="flex0">
  <div className="about0"></div>
  <div>
<h2>Was uns auszeichnet</h2>
<p>Individuelle Lösungen: Wir hören zu und entwickeln maßgeschneiderte Websites, die genau zu Ihrem Unternehmen passen.</p>
<p>Modernes Design: Wir setzen auf ansprechende und zeitgemäße Designs, die Ihre Marke im besten Licht präsentieren.</p>
<p>Benutzerfreundlichkeit: Unsere Websites bieten eine intuitive Navigation und sind sowohl für Desktop- als auch für mobile Geräte optimiert.</p>
<p>SEO-Optimierung: Jede Website wird so gestaltet, dass sie in Suchmaschinen wie Google besser gefunden wird – speziell für die Region Biel.</p>
</div>
</div>
<h2>Unser Fokus auf Biel</h2>
<p>Als lokales Unternehmen verstehen wir die Bedürfnisse und Besonderheiten der Unternehmen in Biel und Umgebung. Ob Sie eine kleine Firma, ein Start-up oder ein etabliertes Unternehmen sind – wir kennen den regionalen Markt und helfen Ihnen, sich erfolgreich zu positionieren.</p>
<h3>Unsere Leisungen</h3>

  <ul>
    <li>
Webdesign und -entwicklung
</li><li>
Responsive Design für mobile Geräte
</li><li>
Suchmaschinenoptimierung (SEO)
</li><li>
Pflege und Wartung Ihrer Website
</li><li>
Integration moderner Tools und Funktionen
</li>
</ul>

<h2>Warum Webdesign von uns?</h2>

<div className="flex">
<div>
<p>Unser Team kombiniert Kreativität, technisches Know-how und ein tiefes Verständnis für die Online-Welt, um Websites zu schaffen, die begeistern und Ergebnisse liefern. Kunden in Bern und der ganzen Schweiz vertrauen auf unsere Expertise.</p>

<p>Lassen Sie uns gemeinsam Ihre Vision umsetzen!</p>

<p>Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch. Gemeinsam entwickeln wir eine Website, die Ihr Unternehmen in Bern und darüber hinaus erfolgreich präsentiert.</p>

<p>Baumgartner Development – Ihr Experte für Webdesign in Biel.</p>
</div>
<div className="about1">
</div>
</div>
      </section>
      <LazySection>
<div className='animation'>
<h3 className='title'>Codeing</h3>
      <div className='icon'>
      <AnimatedCodingIcon />
      </div>
      <h3 className='title'>Deploying</h3>
      <div className='icon'>
      <AnimatedDeployIcon />
      </div>
      <h3 className='title'>Hosting</h3>
      <div className='icon'>
      <AnimatedHostingIcon />
      </div>
  </div>
  <div className='animation'>
<h3 className='title'>Design</h3>
      <div className='icon'>
      <AnimatedDesignIcon />
      </div>
      <h3 className='title'>Support</h3>
      <div className='icon'>
      <AnimatedSupportIcon />
      </div>
      <h3 className='title'>E-Mail</h3>
      <div className='icon'>
      <AnimatedEmailIcon />
      </div>
      </div>
      <section style={{ height: 'fit-content'}}>
     
        <h1>Unsere Webdesign- Services in der Region Biel</h1>
       
        <p>
Wir bieten Ihnen maßgeschneiderte Webdesign-Lösungen in der Region Biel, die Ihre Marke stärken und Ihre Ziele verwirklichen. Als Experten für modernes und funktionales Webdesign wissen wir, wie wichtig ein professioneller Internetauftritt für den Erfolg Ihres Unternehmens ist. </p>

<h2>
Unsere Leistungen im Bereich Webdesign für Biel und Umgebung
</h2>
<p>
1. Individuelles Webdesign
</p>
<p>
Keine Website gleicht der anderen. Wir entwickeln Designs, die Ihre Marke perfekt repräsentieren und gleichzeitig auf die Anforderungen Ihrer Zielgruppe in der Region Biel abgestimmt sind.
</p>
<p>
2. Mobile-Optimierung
</p>
<p>
Ein Großteil der Website-Besucher nutzt heute mobile Endgeräte. Wir stellen sicher, dass Ihre Website auf Smartphones, Tablets und Desktops optimal angezeigt wird.
</p>
<p>
3. Suchmaschinenoptimierung (SEO)
</p>
<p>
Damit Sie in der Region Biel gefunden werden, legen wir großen Wert auf SEO. Mit gezielten Maßnahmen verbessern wir Ihre Sichtbarkeit und sorgen für eine Top-Platzierung in Suchmaschinen.
</p>
<p>
4. Benutzerfreundlichkeit (UX/UI)
</p>
<p>
Wir gestalten Websites, die einfach zu bedienen sind und eine klare Struktur haben. So finden Ihre Besucher schnell, wonach sie suchen.
</p>
<p>
5. Wartung und Support
</p>
<p>
Auch nach dem Launch Ihrer Website stehen wir Ihnen zur Seite. Wir kümmern uns um Updates, Sicherheitsmaßnahmen und weitere Anpassungen.
</p>

<div className="flex">
<div className="services"></div>
  <div>
<h2>
Vorteile unserer Webdesign- Services in Biel
</h2>
<p>
Lokale Expertise: Wir verstehen die spezifischen Anforderungen und Zielgruppen in der Region Biel.
</p>
<p>
Kreativität: Unsere Designs heben Ihre Marke von der Konkurrenz ab.
</p>
<p>
Technische Präzision: Von der schnellen Ladezeit bis zur Suchmaschinenfreundlichkeit – wir setzen auf Qualität.
</p>
<p>
Persönliche Betreuung: Wir begleiten Sie während des gesamten Projekts und bieten eine transparente Zusammenarbeit.
</p>
</div></div>
<h2>Warum Sie uns wählen sollten</h2>
<div className="flex">
  <div>
<p>

Wir sind Ihr zuverlässiger Partner für professionelles Webdesign in der Region Biel. Ob kleine Unternehmen, Start-ups oder größere Organisationen – wir bieten für jeden Kunden individuelle Lösungen.
</p>
<p>
Webdesign für Biel: Ihre Vorteile auf einen Blick
</p>
<p>
Höhere Sichtbarkeit in der Region Biel durch SEO
</p>
<p>
Professionelles und modernes Design
</p>
<p>
Mobile-first-Ansatz für maximale Erreichbarkeit
</p>
<p>
Langfristiger Support und Beratung
</p>
<img src="/assets/pen.webP" alt="Overlay" className="aboutImg" />
</div>
<div className="services"></div>
</div>

<h2>Bereit für eine neue Website?</h2>
<p>
Lassen Sie uns gemeinsam Ihre digitale Präsenz in der Region Biel gestalten. Kontaktieren Sie uns noch heute, um mehr über unsere Webdesign-Services zu erfahren und ein unverbindliches Angebot zu erhalten.
</p>
<p>
Baumgartner Development – Ihr Spezialist für Webdesign in Biel und Umgebung.</p>

      </section>
      
     
      <section id="technologies" style={{ height: 'fit-content' }}>
      <h1>Technologien für modernes Webdesign – Ihr Partner in der Region Biel</h1>

      <div className="flex">
        <div>
      <p>
Um Ihnen als Unternehmen in der Region Biel eine moderne, benutzerfreundliche und effektive Website zu bieten, setzen wir auf die neuesten Webdesign-Technologien. Unsere Expertise in Webentwicklung und Responsive Design garantiert Ihnen eine Website, die nicht nur gut aussieht, sondern auch reibungslos funktioniert und Ihre Zielgruppe anspricht.
</p>
<h2>
Unsere Technologien im Webdesign
</h2>

<h3>
1. HTML5 & CSS3
</h3>
<p>
Die Grundlage für jedes Webdesign-Projekt: Mit HTML5 erstellen wir die Struktur Ihrer Website, während CSS3 für modernes Styling sorgt. Das Ergebnis ist eine Website, die visuell überzeugt und technisch auf dem neuesten Stand ist.
</p>
<h3>
2. JavaScript und Frameworks
</h3>
<p>
Für dynamische und interaktive Benutzererfahrungen setzen wir JavaScript sowie Frameworks wie React.js, Vue.js oder Next.js ein. Diese Technologien machen Ihre Website leistungsstark und flexibel.
</p>
<h3>
3. Content-Management-Systeme (CMS)
</h3>
<p>
Wir arbeiten mit führenden CMS-Plattformen wie WordPress, Sanity, oder Strapi, um Ihnen eine einfache Verwaltung Ihrer Inhalte zu ermöglichen. Besonders für Unternehmen in der Region Bern sind diese Systeme ideal, da sie eine schnelle und effektive Pflege der Website erlauben.
</p>
<h3>
4. Responsive Design
</h3>
<p>
Ihre Website wird auf allen Geräten optimal angezeigt – vom Desktop bis zum Smartphone. Wir entwickeln Websites, die dank responsive Design die beste Benutzererfahrung auf jedem Bildschirm bieten.
</p>
<h3>
5. SEO-Tools und Optimierungen
</h3>
<p>
Damit Ihre Website in Suchmaschinen gefunden wird, setzen wir auf Technologien wie Google Lighthouse, Schema Markup und modernste SEO-Strategien. Besonders in der Region Bern sorgen wir dafür, dass Sie regional sichtbar bleiben.
</p>
<h3>
6. Datenbanken und Back-End-Technologien
</h3>
<p>
Für datenintensive Anwendungen verwenden wir MongoDB, MySQL und andere leistungsstarke Datenbanksysteme. Unsere Back-End-Entwicklung basiert auf robusten Frameworks wie Node.js oder Django, um Ihre Website sicher und zuverlässig zu machen.
</p>
<h3>
7. Cloud-Hosting und Skalierbarkeit
</h3>

<p>
Wir hosten Ihre Website auf modernen Plattformen wie AWS, Google Cloud oder Vercel. Dadurch bleibt Ihre Website auch bei hohem Traffic stabil und schnell.
</p>
</div>
<div className="tech"></div></div>

<h3>
Warum moderne Technologien wichtig sind
</h3>
<ul>
  <li>
Schnelle Ladezeiten: Dank optimierter Technologien wird Ihre Website schnell geladen, was die Nutzererfahrung verbessert und Ihre SEO stärkt.
</li><li>
Sicherheit: Mit den neuesten Sicherheitsstandards schützen wir Ihre Website vor Angriffen.
</li><li>
Zukunftssicherheit: Durch den Einsatz aktueller Technologien bleibt Ihre Website über Jahre hinweg auf dem neuesten Stand.
</li><li>
Flexibilität: Ob kleine Anpassungen oder große Erweiterungen – unsere Technologien ermöglichen eine einfache Skalierbarkeit.
</li>
</ul>
<img src="/assets/computerDesk.webP" alt="computer" className="aboutImg" />
<h2>
Ihre Vorteile mit uns als Partner in der Region Biel
</h2>
<p>
Wir sind stolz darauf, Unternehmen in der Region Biel mit fortschrittlichem Webdesign und modernsten Technologien zu unterstützen. Mit uns erhalten Sie nicht nur eine Website, sondern eine digitale Lösung, die perfekt auf Ihre Bedürfnisse zugeschnitten ist.
</p>
<p>
Bereit, Ihre Website auf das nächste Level zu bringen?
</p>
<p>
Kontaktieren Sie uns noch heute und erfahren Sie, wie wir mit unseren Webdesign-Technologien Ihre Online-Präsenz in der Region Biel stärken können.
</p>
<p>
Baumgartner Development – Webdesign in Biel mit modernsten Technologien.</p>
      </section>
      
      <ParallaxSection/>
      
      <section id="technologies" style={{ height: 'fit-content' }}>
     
      <h1>Technologien für modernes Webdesign – Ihr Partner in der Region Biel</h1>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
        <div>
      <p>
Um Ihnen als Unternehmen in der Region Bern eine moderne, benutzerfreundliche und effektive Website zu bieten, setzen wir auf die neuesten Webdesign-Technologien. Unsere Expertise in Webentwicklung und Responsive Design garantiert Ihnen eine Website, die nicht nur gut aussieht, sondern auch reibungslos funktioniert und Ihre Zielgruppe anspricht.
</p>
<h2>
Unsere Technologien im Webdesign
</h2>

<h3>
1. HTML5 & CSS3
</h3>
<p>
Die Grundlage für jedes Webdesign-Projekt: Mit HTML5 erstellen wir die Struktur Ihrer Website, während CSS3 für modernes Styling sorgt. Das Ergebnis ist eine Website, die visuell überzeugt und technisch auf dem neuesten Stand ist.
</p>
<h3>
2. JavaScript und Frameworks
</h3>
<p>
Für dynamische und interaktive Benutzererfahrungen setzen wir JavaScript sowie Frameworks wie React.js, Vue.js oder Next.js ein. Diese Technologien machen Ihre Website leistungsstark und flexibel.
</p>
<h3>
3. Content-Management-Systeme (CMS)
</h3>
<p>
Wir arbeiten mit führenden CMS-Plattformen wie WordPress, Sanity, oder Strapi, um Ihnen eine einfache Verwaltung Ihrer Inhalte zu ermöglichen. Besonders für Unternehmen in der Region Bern sind diese Systeme ideal, da sie eine schnelle und effektive Pflege der Website erlauben.
</p>
<h3>
4. Responsive Design
</h3>
<p>
Ihre Website wird auf allen Geräten optimal angezeigt – vom Desktop bis zum Smartphone. Wir entwickeln Websites, die dank responsive Design die beste Benutzererfahrung auf jedem Bildschirm bieten.
</p>
<h3>
5. SEO-Tools und Optimierungen
</h3>
<p>
Damit Ihre Website in Suchmaschinen gefunden wird, setzen wir auf Technologien wie Google Lighthouse, Schema Markup und modernste SEO-Strategien. Besonders in der Region Bern sorgen wir dafür, dass Sie regional sichtbar bleiben.
</p>
<h3>
6. Datenbanken und Back-End-Technologien
</h3>
<p>
Für datenintensive Anwendungen verwenden wir MongoDB, MySQL und andere leistungsstarke Datenbanksysteme. Unsere Back-End-Entwicklung basiert auf robusten Frameworks wie Node.js oder Django, um Ihre Website sicher und zuverlässig zu machen.
</p>
<h3>
7. Cloud-Hosting und Skalierbarkeit
</h3>

<p>
Wir hosten Ihre Website auf modernen Plattformen wie AWS, Google Cloud oder Vercel. Dadurch bleibt Ihre Website auch bei hohem Traffic stabil und schnell.
</p>
</div>
<div className="tech"></div></div>
<img src="/assets/mug.webP" alt="mug" className="aboutImg" />
<h3>
Warum moderne Technologien wichtig sind
</h3>

<ul>
  <li>
Schnelle Ladezeiten: Dank optimierter Technologien wird Ihre Website schnell geladen, was die Nutzererfahrung verbessert und Ihre SEO stärkt.
</li><li>
Sicherheit: Mit den neuesten Sicherheitsstandards schützen wir Ihre Website vor Angriffen.
</li><li>
Zukunftssicherheit: Durch den Einsatz aktueller Technologien bleibt Ihre Website über Jahre hinweg auf dem neuesten Stand.
</li><li>
Flexibilität: Ob kleine Anpassungen oder große Erweiterungen – unsere Technologien ermöglichen eine einfache Skalierbarkeit.
</li>
</ul>
<h2>
Ihre Vorteile mit uns als Partner in der Region Biel
</h2>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<p>
Wir sind stolz darauf, Unternehmen in der Region Biel mit fortschrittlichem Webdesign und modernsten Technologien zu unterstützen. Mit uns erhalten Sie nicht nur eine Website, sondern eine digitale Lösung, die perfekt auf Ihre Bedürfnisse zugeschnitten ist.
</p>
<p>
Bereit, Ihre Website auf das nächste Level zu bringen?
</p>
<p>
Kontaktieren Sie uns noch heute und erfahren Sie, wie wir mit unseren Webdesign-Technologien Ihre Online-Präsenz in der Region Biel stärken können.
</p>
<p>
Baumgartner Development – Webdesign in Biel mit modernsten Technologien.</p>
      </section>
      
      <h2>Pricing Menu</h2>
   <div className='flex'>
   <PricingMenu />
   <PricingMenu0 />
   </div>
  <h2>Als geschützte Werkstatt unterstützen wir:</h2>   
   <PhotoCarousel/>
    
      <Footer />
      </LazySection>
      </main>
  </div>
  
  
  
  
  
  );
}
