import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faSearch,
  faEllipsisV,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = ({ messages, selectedChatId }) => {
  const formatTime = (timeString) => {
    return `${timeString.split("T")[1].split(":")[0]}:${
      timeString.split("T")[1].split(":")[1]
    }`;
  };

  const formatDate = (dateString) => {
    return dateString.split("T")[0];
  };

  const renderMessages = (messages) => {
    let lastDate = null;
    return messages.map((message) => {
      const currentDate = formatDate(message.created_at);
      const showDate = currentDate !== lastDate;
      lastDate = currentDate;
      return (
        <React.Fragment key={message.id}>
          {showDate && <span className="message-date">{currentDate}</span>}
          <div className="chat-msg">
            <p>{message.message}</p>
            <span className="time">{formatTime(message.created_at)}</span>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <div className="content-header">
        <div className="chat-img">
          {messages.length > 0 && (
            <h3>
              {messages[0].sender.name ? messages[0].sender.name[0] : "U"}
            </h3>
          )}
        </div>
        <div className="details">
          {messages.length > 0 && (
            <h3>
              {messages[0].sender.name ? messages[0].sender.name : "Unknown"}
            </h3>
          )}
          <p>last seen within a month</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      <div className="chat-container">{renderMessages(messages)}</div>
      <div className="message-box">
        <div className="message-content">
          <input type="text" placeholder="Message" />
          <FontAwesomeIcon className="clip" icon={faPaperclip} />
        </div>
        <div className="micro">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
