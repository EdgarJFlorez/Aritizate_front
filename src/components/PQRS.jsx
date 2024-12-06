// src/components/PQRS.js

import React, { useState } from 'react';
import API from '../api/axios'; // Importa la configuración de Axios
import '../styles/PQRS.css';

function PQRS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/pqrs', formData); // Enviar datos al backend
      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <section className="pqrs">
      <h2>PQRS</h2>
      {!submitted ? (
        <>
          <p>Envíanos tus Preguntas, Quejas, Reclamos y Sugerencias a través del siguiente formulario.</p>
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

            <label htmlFor="type">Tipo de Solicitud</label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="pregunta">Pregunta</option>
              <option value="queja">Queja</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </select>

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </>
      ) : (
        <p>Gracias por enviar tu solicitud. Nos pondremos en contacto contigo pronto.</p>
      )}
    </section>
  );
}

export default PQRS;




