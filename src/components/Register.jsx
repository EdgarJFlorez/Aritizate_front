// src/components/Register.js

import React, { useState } from 'react';
import '../styles/Auth.css';
import Hero from './Hero';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar al usuario
    console.log('Datos de registro:', formData);
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
  };

  return (
    <div className="auth-page">
      <Hero showPhoto={true} />
      <div className="auth-form">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre de Usuario</label>
          <input type="text" name="username" onChange={handleChange} required />
          <label>Correo Electrónico</label>
          <input type="email" name="email" onChange={handleChange} required />
          <label>Contraseña</label>
          <input type="password" name="password" onChange={handleChange} required />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
