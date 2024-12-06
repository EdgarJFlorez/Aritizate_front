// src/components/LandingPage.js

import React from 'react';
import '../styles/LandingPage.css';
import Hero from './Hero';
import { Link } from 'react-router-dom';

function LandingPage({ handleLogin }) {
  return (
    <div className="landing-page">
      {/* Puedes incluir el Hero si lo deseas */}
      <Hero showPhoto={true} />
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label>Nombre de Usuario</label>
          <input type="text" name="username" required />
          <label>Contraseña</label>
          <input type="password" name="password" required />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
