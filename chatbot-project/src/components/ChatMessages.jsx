import useAutoScroll from '../hooks/useAutoScroll'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessage }) {
  // Use the custom hook for auto-scroll
  const chatMessageRef = useAutoScroll([chatMessage]);

  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {chatMessage.map((chat) => (
        <ChatMessage
          message={chat.message}
          sender={chat.sender}
          key={chat.id}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
