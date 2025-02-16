import React from "react";
import '../styles/card.css';


const pricingData = [
  { title: "E-Commerce", price: "9000 CHF", lease: "900 CHF/Monat", features: ["Shop-System", "Bezahlsystem", "Produktverwaltung"] },
 { title: "Enterprise", price: "10000 CHF", lease: "1000 CHF/Monat", features: ["Komplette Branding-Lösung", "UX/UI Design", "Exklusive Features"] },
  { title: "VIP", price: "15000 CHF", lease: "1500 CHF/Monat", features: ["Individuelles Konzept", "Unbegrenzte Seiten", "Persönlicher Support"] },
];

export default function PricingMenu0() {
  return (
    <div className="pricing-container">
      {pricingData.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h2>{plan.title}</h2>
          <p className="price"><strong>Kaufen:</strong> {plan.price}</p>
          <p className="lease"><strong>Leasing:</strong> {plan.lease}</p>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="wish">Jetzt bestellen</button>
        </div>
      ))}
    </div>
  );
}
