import { Parallax } from 'react-parallax';

const MyParallax = () => {
  return (
    <Parallax
      bgImage="/Parallax.webP"
      strength={300} // Parallax-Effekt-Stärke
      style={{ width: '100%', height: '500px' }} // Setzt die Breite auf 100%
    >
      <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>Baumgartner Webdesign Development</h1>
      </div>
    </Parallax>
  );
};

export default MyParallax;
