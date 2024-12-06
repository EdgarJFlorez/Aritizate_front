// src/components/MainLayout.js

import React from 'react';
import Hero from './Hero';
import ChatBotBubble from './ChatBotBubble';

function MainLayout({ children, showPhoto }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Hero showPhoto={showPhoto} />
      <div style={{ paddingBottom: '80px' /* Espacio para el footer */ }}>{children}</div>
      {/* Incluye la burbuja de chatbot */}
      <ChatBotBubble />
    </div>
  );
}

export default MainLayout;



