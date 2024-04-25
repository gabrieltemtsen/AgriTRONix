import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineSend, AiOutlineMessage} from 'react-icons/ai';
import './Chatbot.css'; // Ensure the CSS file path is correct

const Chatbot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const handleSend = async () => {
    if (!query) return;
    const userMessage = { text: query, sender: 'user' };
    setMessages([...messages, userMessage]);
    setQuery('');

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
      }, {
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json'
        }
      });

      const botMessage = { text: response.data.choices[0].message.content, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error while fetching response from OpenAI:', error);
    }
  };

  return (
    <>
      <div className={`chatbot-container ${isChatVisible ? '' : 'hidden'}`}>
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask something..."
            onKeyPress={event => event.key === 'Enter' && handleSend()}
          />
          <div onClick={handleSend} className="fas fa-paper-plane"><AiOutlineSend/></div>
        </div>
        <div className="close-chat" onClick={() => setIsChatVisible(false)}>X</div>
        </div>
    </>
  );
};

export default Chatbot;