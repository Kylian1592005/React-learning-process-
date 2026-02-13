import RobotProfileImage from '../assets/robot.png'
// import UserProfileImage from '../assets/user.png'
import UserProfileImage from '../assets/profile.png'
import './ChatMessage.css'
import dayJs from 'dayjs'

export function ChatMessage({ message, sender }) {
  const time = dayJs();

  return (
    <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}

      <div className="chat-message-text">
        {message}
        <div className="time">{time.format("hh:mm A")}</div>
      </div>

      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}


