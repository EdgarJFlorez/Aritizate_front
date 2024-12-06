// src/components/Agenda.js

import React, { useState } from 'react';
import API from '../api/axios'; // Importa la configuración de Axios
import '../styles/Agenda.css';

function Agenda() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    visitDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/appointments', formData); // Enviar datos al backend
      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <section className="agenda">
      <h2>Agenda tu cita</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="visitDate">Fecha de la visita</label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            required
            value={formData.visitDate}
            onChange={handleChange}
          />

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>¡Cita agendada con éxito! Nos pondremos en contacto contigo pronto.</p>
      )}
    </section>
  );
}

export default Agenda;


