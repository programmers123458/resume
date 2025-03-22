import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000'); // Connect to the backend

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('receive_message', (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const messageData = { message, id: socket.id };
      socket.emit('send_message', messageData); // Send message to the server
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Real-Time Chat</h1>
      <div className="chat-window">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.id === socket.id ? 'sent' : 'received'}`}
          >
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;