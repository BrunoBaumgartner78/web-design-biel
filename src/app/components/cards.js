import React from "react";
import '../styles/card.css';


const pricingData = [
  { title: "Basic", price: "500 CHF", lease: "50 CHF/Monat", features: ["1 Seite", "Basic SEO", "Mobile optimiert"] },
  { title: "Standard", price: "900 CHF", lease: "90 CHF/Monat", features: ["5 Seiten", "SEO Optimierung", "Kontaktformular"] },
  { title: "Business", price: "2500 CHF", lease: "250 CHF/Monat", features: ["10 Seiten", "Erweiterte SEO", "Blog-Funktion"] },
];

export default function PricingMenu() {
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
