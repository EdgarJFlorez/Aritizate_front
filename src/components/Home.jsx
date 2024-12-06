// src/components/Home.js

import React from 'react';
import '../styles/Home.css';
import ChatBotBubble from './ChatBotBubble';

function Home() {
  return (
    <div className="home">
      <h2>Bienvenido a Aritizate</h2>
      <p className="slogan">
        "Innovación y pasión en cada proyecto."
      </p>
      
      {/* Incluye el chatbot con forma de burbuja */}
      <ChatBotBubble />
    </div>
  );
}

export default Home;

