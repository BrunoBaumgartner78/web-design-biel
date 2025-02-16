import React from "react";
import Link from "next/link";
import "./src/app/styles/agb.css";
import Menu from "@/app/components/menu";

const AGB = () => {
  return (
    <div className="agb-container">
      <Menu />
      <div className="agb-content">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p>Stand: Februar 2025</p>
        
        <h2>1. Geltungsbereich</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die über diese Website abgeschlossen werden.</p>

        <h2>2. Vertragspartner</h2>
        <p>Vertragspartner ist:<br />
        Bruno Baumgartner<br />
        Le Pré-aux-Boeufs 222<br /> 
        2615 Sonvilier<br />
        Schweiz</p>

        <h2>3. Vertragsschluss</h2>
        <p>Die Darstellung der Produkte auf dieser Website stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche Einladung zur Bestellung.</p>

        <h2>4. Preise und Zahlungsbedingungen</h2>
        <p>Alle angegebenen Preise verstehen sich in Franken inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt per Kreditkarte, Bar oder Überweisung.</p>

        <h2>5. Lieferung</h2>
        <p>Die Lieferung erfolgt weltweit. Die Lieferzeiten können je nach Standort variieren.</p>

        <h2>6. Widerrufsrecht</h2>
        <p>Verbraucher haben das Recht, innerhalb von 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen.</p>

        <h2>7. Gewährleistung</h2>
        <p>Die gesetzliche Gewährleistung gilt. Bei Mängeln an den gelieferten Waren kontaktieren Sie uns bitte umgehend.</p>

        <h2>8. Schlussbestimmungen</h2>
        <p>Es gilt das Recht der Schweiz. Gerichtsstand ist Musterstadt.</p>
        
        <p>Bei Fragen kontaktieren Sie uns unter <Link href="/contact">Kontakt</Link>.</p>
      </div>
    </div>
  );
};

export default AGB;