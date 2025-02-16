import React from "react";
import '@/app/styles/home.css';
import '@/app/styles/book.css';
import Menu from "@/app/components/menu";
import CookieBanner from "@/app/components/cookieBanner";
import '@/src/app/styles/print.css';

const books = [
  {
    title: "Durch die Dunkelheit ins Licht",
    subtitle: "Spirituelle Heilung in der Schizophrenie",
    author: "Bruno Baumgartner",
    releaseDate: "6. Januar 2025",
    description: "Das Buch beleuchtet Schizophrenie als spirituelle Krise mit tiefgehenden Einsichten und Heilungsmethoden. Techniken wie Meditation, Achtsamkeit und Askese helfen, die spirituelle Reise zu stabilisieren.",
    price: "Jetzt Kaufen",
    image: "/assets/aus-der-dunkelheit.webP",
  },
  {
    title: "Die Qualia der Anderen: Das Bewusstsein",
    subtitle: "Band 1 bis 3",
    author: "Bruno Baumgartner",
    format: "Kindle Edition",
    description: "Dieser Band bietet eine Einführung in Bewusstseinsforschung mit philosophischen, neurowissenschaftlichen und ethischen Perspektiven.",
    price: "Jetzt Kaufen",
    image: "/assets/dieQualia.webP",
  },
  {
    title: "Schizophrenie Odyssee Dysbiose - Complexus Immunitas Mentis",
    author: "Bruno Baumgartner",
    format: "Gebundenes Buch",
    description: "Eine tiefgehende Analyse der Verbindung zwischen Darm, Mikrobiom, Darm-Hirn-Achse und psychischer Gesundheit. Zeigt, wie Darmsanierung Schizophrenie beeinflussen kann.",
    price: "24.16€",
    image: "/assets/schizophrenie.webP",
  },
];

const Book = () => {
  return (
    <div className="book-list dark-theme">
      <Menu />
      <CookieBanner/>
      {books.map((book, index) => (
        <div key={index} className="book">
          <img src={book.image} alt={book.title} className="book-image" />
          <h2>{book.title}</h2>
          {book.subtitle && <h3>{book.subtitle}</h3>}
          <p><strong>Autor:</strong> {book.author}</p>
          {book.releaseDate && <p><strong>Veröffentlichungsdatum:</strong> {book.releaseDate}</p>}
          {book.format && <p><strong>Format:</strong> {book.format}</p>}
          <p>{book.description}</p>
          <p><strong>Preis:</strong> {book.price}</p>
          <a className="buy-button" href="https://www.amazon.de/s?k=bruno+baumgartner+schizophrenie" target="_blank" rel="noopener noreferrer">
            Jetzt Kaufen
          </a>
        </div>
      ))}
    </div>
  );
};

export default Book;
