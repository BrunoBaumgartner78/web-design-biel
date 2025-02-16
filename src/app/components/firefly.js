'use client';
import React, { useEffect } from 'react';
import '../styles/firefly.css';

export default function Fireflies() {
  useEffect(() => {
    const fireflyContainer = document.createElement('div');
    fireflyContainer.classList.add('fires-overlay');
    document.body.appendChild(fireflyContainer);

    const createFirefly = () => {
      const firefly = document.createElement('div');
      firefly.classList.add('firefly');

      // Startet am unteren Rand
      firefly.style.left = `${Math.random() * 100}vw`;
      firefly.style.bottom = '0px';

      // Zufällige Größe
      const size = Math.random() * 6 + 4;
      firefly.style.width = `${size}px`;
      firefly.style.height = `${size}px`;

      // Zufällige Animation
      firefly.style.animationDuration = `${Math.random() * 5 + 3}s`; // 3 - 8 Sekunden
      firefly.style.animationDelay = `${Math.random() * 2}s`;

      fireflyContainer.appendChild(firefly);

      // Entfernen, wenn es den oberen Rand erreicht
      setTimeout(() => {
        firefly.remove();
      }, 8000);
    };

    // Regelmäßig Funken erzeugen
    const interval = setInterval(createFirefly, 200);

    return () => {
      clearInterval(interval);
      fireflyContainer.remove();
    };
  }, []);

  return null;
}
