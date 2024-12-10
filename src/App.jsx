import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Estatuas from './components/Estatuas';
import Agenda from './components/Agenda';
import PQRS from './components/PQRS';
import Register from './components/Register';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import API from './api/axios';

// Importa el componente ForgotPassword
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (loginData) => {
    try {
      const response = await API.post('/auth/login', loginData);
      alert(response.data); // "Inicio de sesión exitoso"
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div className="App">
      {isAuthenticated && <Navbar handleLogout={handleLogout} />}
      <Routes>
        {!isAuthenticated && (
          <>
            <Route
              path="/"
              element={<LandingPage handleLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
            {/* Nueva ruta para el flujo de olvido de contraseña */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}

        {isAuthenticated && (
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <MainLayout showPhoto={true}>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/estatuas"
              element={
                <MainLayout showPhoto={false}>
                  <Estatuas />
                </MainLayout>
              }
            />
            <Route
              path="/agenda"
              element={
                <MainLayout showPhoto={false}>
                  <Agenda />
                </MainLayout>
              }
            />
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
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;





