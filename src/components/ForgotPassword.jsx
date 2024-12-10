// src/components/ForgotPassword.js

import React, { useState } from 'react';
import '../styles/Auth.css'; // Asegúrate de que Auth.css aplique los mismos estilos que en Register
import Hero from './Hero';
import API from '../api/axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      // Verificar email
      try {
        await API.post('/auth/check-email', { email });
        setStep(2);
      } catch (error) {
        alert('Correo no encontrado');
      }
    } else if (step === 2) {
      // Actualizar contraseña
      try {
        await API.post('/auth/reset-password', { email, newPassword });
        alert('Contraseña actualizada con éxito');
        window.location.href = '/'; // Redirige al inicio de sesión
      } catch (error) {
        alert('Error al actualizar la contraseña');
      }
    }
  };

  return (
    <div className="auth-page">
      <Hero showPhoto={true} />
      <div className="auth-form">
        {step === 1 && (
          <>
            <h2>Olvidé mi contraseña</h2>
            <form onSubmit={handleSubmit}>
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Verificar Correo</button>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Crear Nueva Contraseña</h2>
            <form onSubmit={handleSubmit}>
              <label>Nueva Contraseña</label>
              <input
                type="password"
                name="newPassword"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="submit">Actualizar Contraseña</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
