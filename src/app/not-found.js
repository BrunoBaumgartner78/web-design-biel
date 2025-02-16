import '@/app/styles/not-found.css';

export default function NotFound() {
    return (
      <div className="not-found-container">
        <video autoPlay loop muted className="hero-video">
          <source src="/assets/tiny.mp4" type="video/mp4" />
        </video>
        <div className='not-found'>
        <h1>404 - Seite nicht gefunden</h1>
        <p>Oops! Diese Seite existiert nicht.</p>
        <a href="/" className="home-link">Zur Startseite</a>
      </div>
      </div>
    );
  }
  