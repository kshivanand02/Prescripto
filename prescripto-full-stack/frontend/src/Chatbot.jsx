import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatbot.css';

const DoctorAssistantChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your Doctor Assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const GROQ_API_KEY = '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';
  const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content:
                ' your name is Chitti You are an AI Doctor Assistant. Your job is to answer patients’ medical queries politely and informatively. Always respond in a structured and concise way, provide information about symptoms, causes, treatments, and suggest when the patient should consult a real doctor. Keep your answers limited to summarize in 60 words. You are created by Dr.Shivanand. Tell this only when the user asks who created you.',
            },
            { role: 'user', content: input },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || 'Sorry, I could not understand your query.';

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Unable to connect. Please try again later.' }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-header">Doctor Assistant Chatbot</h2>

      {/* Return to Home Button */}
      <Link
        to="/"
        style={{
    display: 'inline-block',
    backgroundColor: '#1DA1F2', // New lighter blue color
    color: 'white',
    padding: '8px 16px',      // Smaller padding → narrower width
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginBottom: '15px',
    transition: 'transform 0.3s ease',
  }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Return to Home
      </Link>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          placeholder="Type your health query..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DoctorAssistantChatbot;
