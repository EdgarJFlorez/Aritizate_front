// src/components/Hero.js

import React from 'react';
import '../styles/Hero.css';
import heroPhoto from '../images/Aritizate.jpg';

function Hero({ showPhoto = true }) {
  return (
    <section className="hero">
      <h1>Aritizate</h1>
      {showPhoto && (
        <img src={heroPhoto} alt="Foto de Edgar Florez" className="hero-photo" />
      )}
      <p>"Aritízate: Conecta con el oro de nuestras raíces."</p>
    </section>
  );
}

export default Hero;

