// src/components/ChatBotBubble.js
import React, { useState, useEffect } from 'react';
import '../styles/ChatBotBubble.css';

const ChatBotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '¡Hola! Estoy aquí para ayudarte. ¿En qué puedo asistirte?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [bubbleColor, setBubbleColor] = useState('#0a9396'); // Color predeterminado (verde)

  useEffect(() => {
    // Detectar el color de fondo de la página y ajustar el color de la burbuja
    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;

    const isLight = isBackgroundLight(bodyBgColor);
    setBubbleColor(isLight ? '#0a9396' : '#ffffff'); // Verde si el fondo es claro, blanco si es oscuro
  }, []);

  const isBackgroundLight = (bgColor) => {
    // Convertir el color de fondo en RGB y evaluar su luminosidad
    const rgb = bgColor.match(/\d+/g);
    if (!rgb) return true; // Por defecto, asumimos que es claro si no se puede calcular
    const brightness = (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1000;
    return brightness > 127.5; // Umbral de luminosidad
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: inputValue },
      { sender: 'bot', text: 'Gracias por tu mensaje. Estoy procesando...' },
    ];
    setMessages(newMessages);
    setInputValue('');
  };

  return (
    <div className="chat-bot-container">
      {/* Burbuja de notificación */}
      <div
        className="chat-bubble"
        onClick={toggleChat}
        style={{
          backgroundColor: bubbleColor,
          color: bubbleColor === '#ffffff' ? '#0a9396' : '#ffffff',
        }}
      >
        💬
      </div>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>ChatBot</h4>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotBubble;

