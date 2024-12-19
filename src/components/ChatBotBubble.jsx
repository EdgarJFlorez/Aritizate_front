import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatBotBubble.css';
import { sendMessageToLMStudio } from '../api/lmstudioService'; // Importar servicio de LM Studio
import { Link } from 'react-router-dom';

const ChatBotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [bubbleColor, setBubbleColor] = useState('#0a9396');
  const chatBodyRef = useRef(null); // Referencia para el contenedor desplazable

  useEffect(() => {
    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
    setBubbleColor(isBackgroundLight(bodyBgColor) ? '#0a9396' : '#ffffff');
  }, []);

  const isBackgroundLight = (bgColor) => {
    const rgb = bgColor.match(/\d+/g);
    if (!rgb) return true;
    const brightness = (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1000;
    return brightness > 127.5;
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // Añadir mensaje de bienvenida si el chat se abre
    if (!isOpen) {
      setMessages([
        { sender: 'bot', text: 'Bienvenido, soy tu asistente virtual, Ari. ¿En qué te puedo ayudar?' },
      ]);
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = async (message) => {
    const userMessage = { sender: 'user', text: message || inputValue };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Llamada a LM Studio para obtener la respuesta
      const botReply = await sendMessageToLMStudio(userMessage.text);

      const botMessage = {
        sender: 'bot',
        text: botReply,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Lo siento, hubo un error al procesar tu pregunta.' },
      ]);
    }

    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita el comportamiento por defecto del Enter
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-bot-container">
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

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>ChatBot</h4>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender === 'bot' ? 'bot' : 'user'}`}>
                {msg.text}
                {msg.link && (
                  <Link to={msg.link.url} className="chat-link">
                    {msg.link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Detecta la tecla Enter
            />
            <button onClick={() => handleSendMessage()}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotBubble;





