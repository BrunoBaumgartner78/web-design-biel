import React from "react";
import "../styles/footer.css"; // CSS separat für bessere Übersicht

export default function Footer() {
  return (
    <footer className="footer">
      {/* Video-Hintergrund */}
      <video autoPlay loop muted className="footer-video">
        <source src="/assets/tiny.mp4" type="video/mp4" />
      </video>

      {/* Overlay für den Verlauf */}
      <div className="footer-overlay"></div>

      {/* Parallax Cards */}
      <div className="footer-content">
  <div className="footer-card">
    <a href="/contact">Kontakt</a>
  </div>
  <div className="footer-card">
    <a href="/impressum">Impressum</a>
  </div>
  <div className="footer-card">
    <a href="/datenschutz">Datenschutz</a>
  </div>
  <div className="footer-card">
    <a href="/agb">AGB</a>
  </div>
</div>

    </footer>
  );
}
