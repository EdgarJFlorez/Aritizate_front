// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import profilePhoto from '../images/miniAritizate.jpg';

function Navbar({ handleLogout }) {
  return (
    <header className="navbar">
      <img src={profilePhoto} alt="Foto de perfil" className="profile-photo" />
      <nav className="nav-links">
        <Link to="/home">Inicio</Link>
        <Link to="/estatuas">Estatuas</Link>
        <Link to="/agenda">Agenda tu cita</Link>
        <Link to="/pqrs">PQRS</Link>
        <button className="btn" onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
    </header>
  );
}

export default Navbar;

