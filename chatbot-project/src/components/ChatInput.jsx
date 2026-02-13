import { useState } from 'react'
import { Chatbot, loadingImg } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessage, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (isLoading || !inputText.trim()) return;

    const text = inputText;
    setInputText('');
    setIsLoading(true);

    const newChatMessage = [
      ...chatMessage,
      { message: text, 
        sender: 'user', 
        id: crypto.randomUUID()
      }
    ];

    // Show loading spinner
    setChatMessages([
      ...newChatMessage,
      { 
        message: <img src={loadingImg} style={{ height: "40px", margin: "-15px" }} />,
        sender: "robot",
        id: "loading" 
      }
    ]);

    const response = await Chatbot.getResponseAsync(text);

    // Replace loading with real response
    setChatMessages([
      ...newChatMessage,
      { message: response, 
        sender: 'robot', 
        id: crypto.randomUUID(),
      }
    ]);

    setIsLoading(false);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") sendMessage();
    if (e.key === "Escape") setInputText('');
  }

  function clearMessage() {
    localStorage.removeItem('chatMessages');
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={onKeyDown}
        disabled={isLoading}
        className="chat-input"
      />
      <button onClick={sendMessage} disabled={isLoading}>
        Send
      </button>
      <button onClick={clearMessage} style={{backgroundColor: 'red'}}>Clear</button>
    </div>
  );
}