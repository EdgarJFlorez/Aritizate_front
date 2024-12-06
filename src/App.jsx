// src/App.jsx

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';

// Importa tus componentes
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Estatuas from './components/Estatuas';
import Agenda from './components/Agenda';
import PQRS from './components/PQRS';
import Register from './components/Register';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';


function App() {
  // Estado para manejar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Funciones para manejar el login y logout
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación real
    setIsAuthenticated(true);
  };
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div className="App">
      {/* Mostrar el Navbar solo si el usuario está autenticado */}
      {isAuthenticated && <Navbar handleLogout={handleLogout} />}
      <Routes>
        {/* Rutas públicas */}
        {!isAuthenticated && (
          <>
            <Route
              path="/"
              element={<LandingPage handleLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
            {/* Redirigir cualquier otra ruta a la página de inicio */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}

        {/* Rutas protegidas */}
        {isAuthenticated && (
          <>
            {/* Redirigir raíz autenticada a /home */}
            <Route
              path="/"
              element={<Navigate to="/home" replace />}
            />
            {/* Ruta Home - mostrar foto */}
            <Route
              path="/home"
              element={
                <MainLayout showPhoto={true}>
                  <Home />
                </MainLayout>
              }
            />
            {/* Ruta Estatuas */}
            <Route
              path="/estatuas"
              element={
                <MainLayout showPhoto={false}>
                  <Estatuas />
                </MainLayout>
              }
            />
            {/* Ruta Agenda tu cita */}
            <Route
              path="/agenda"
              element={
                <MainLayout showPhoto={false}>
                  <Agenda />
                </MainLayout>
              }
            />
            {/* Ruta PQRS */}
            <Route
              path="/pqrs"
              element={
                <MainLayout showPhoto={false}>
                  <PQRS />
                </MainLayout>
              }
            />
            <Route
              path="/estatuas"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <MainLayout>
                    <Estatuas />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;




