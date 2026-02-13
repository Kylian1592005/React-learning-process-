import { useState, useEffect } from 'react'
import './App.css'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'

function App() {
  // Load initial chat messages from localStorage, or empty array if none
  const [chatMessage, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    // Add chatbot responses once on mount
    Chatbot.addResponses({
      hello: 'Hi there!',
      hi: 'Hello!',
      bye: 'Goodbye!',
      help: 'How can I help you today?'
    });
  }, []);

  // Save chat messages to localStorage whenever chatMessage changes
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessage));
  }, [chatMessage]);

  return (
    <div className="app-container">
      <ChatMessages chatMessage={chatMessage} />
      {chatMessage.length === 0 && (
        <p className="para">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatInput
        chatMessage={chatMessage}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
