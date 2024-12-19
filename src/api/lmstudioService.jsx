import axios from 'axios';

// Configuración de la API de LM Studio
const LMStudioAPI = axios.create({
  baseURL: 'http://127.0.0.1:1234/v1/chat/completions', // URL de LM Studio
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessageToLMStudio = async (prompt) => {
  try {
    const payload = {
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7, // Ajusta la creatividad del modelo
      max_tokens: 150, // Máximo de tokens para la respuesta
    };

    const response = await LMStudioAPI.post('', payload);
    return response.data.choices[0]?.message?.content || 'Sin respuesta';
  } catch (error) {
    console.error('Error al conectar con LM Studio:', error);
    return 'Error al conectar con LM Studio';
  }
};
