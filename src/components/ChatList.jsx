import React from "react";
import { useNavigate } from "react-router-dom";

const ChatList = ({ chats }) => {
  const navigate = useNavigate();

  const handleChatClick = (chatId) => {
    navigate(`/${chatId}`);
  };

  const truncateMessage = (message) => {
    return message.length > 55 ? message.substring(0, 55) + "..." : message;
  };

  const formatTime = (timeString) => {
    return `${timeString.split("T")[1].split(":")[0]}:${
      timeString.split("T")[1].split(":")[1]
    }`;
  };

  return (
    <div className="body-container">
      <div className="chat-list">
        {chats.map((chat) => (
          <div
            className="chat-box"
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
          >
            <div className="chat-img">
              {chat.creator.name ? chat.creator.name[0] : "U"}
            </div>
            <div className="chat-details">
              <div className="chat-title">
                <h3 className="nameTime">
                  {chat.creator.name || "Unknown User"}{" "}
                  <span>{formatTime(chat.lastMessageTime)}</span>
                </h3>
                <span>{truncateMessage(chat.lastMessage)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
