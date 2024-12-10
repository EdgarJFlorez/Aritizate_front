import React, { useState } from 'react';
import '../styles/Auth.css';
import Hero from './Hero';
import API from '../api/axios'; // Asegúrate de importar la instancia Axios configurada

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/register', formData);
      alert(response.data); // "Usuario registrado con éxito"
      // Redirige al usuario a la página de inicio de sesión:
      window.location.href = '/'; 
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('No se pudo registrar el usuario. Revisa la consola para más detalles.');
    }
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

