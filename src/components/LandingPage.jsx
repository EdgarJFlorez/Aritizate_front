// src/components/LandingPage.js

import React, { useState } from 'react';
import '../styles/LandingPage.css';
import Hero from './Hero';
import { Link } from 'react-router-dom';

function LandingPage({ handleLogin }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData); // Pasamos loginData al handleLogin del App
  };

  return (
    <div className="landing-page">
      <Hero showPhoto={true} />
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={onSubmit}>
          <label>Nombre de Usuario</label>
          <input type="text" name="username" required onChange={handleChange} />
          <label>Contraseña</label>
          <input type="password" name="password" required onChange={handleChange} />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        <p>
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;

