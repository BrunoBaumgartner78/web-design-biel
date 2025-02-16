'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/menu.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [shareLinks, setShareLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareLinks({
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (key) => {
    setOpenSubMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Sticky Toggle-Button auf der rechten Seite */}
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        Menu
      </button>

      {/* Menü Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="menu">
          <ul className="menu-list">
            <li><Link href="/">Home</Link></li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('uiux')}>
                UI/UX <span className="arrow">{openSubMenu === 'uiux' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'uiux' && (
                <ul className="submenu">
                  <li><Link href="/ux-strategy">UX-Strategie</Link></li>
                  <li><Link href="/usability-testing">Usability-Testing</Link></li>
                  <li><Link href="/design-thinking">Design Thinking</Link></li>
                  <li><Link href="/wireframes-prototypes">Wireframes & Prototypen</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/coding">Coding</Link></li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu('design')}>
                Web- Design<span className="arrow">{openSubMenu === 'design' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'design' && (
                <ul className="submenu">
                  <li><Link href="/ux-strategy">Responsive Design</Link></li>
                  <li><Link href="/usability-testing">Mobile First</Link></li>
                  <li><Link href="/design-thinking">Barrierefreiheit</Link></li>
                  <li><Link href="/wireframes-prototypes">Webdesign Trends</Link></li>
                </ul>
              )}
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('categories')}>
                Weitere Kategorien <span className="arrow">{openSubMenu === 'categories' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'categories' && (
                <ul className="submenu">
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about-us">About us</Link></li>
                  <li><Link href="/career">Karriere</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li><Link href="/book">Bücher</Link></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="social-sharing">
          <div className="social-icons">
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
