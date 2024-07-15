import React from "react";

export const truncateMessage = (message) => {
  return message.length > 35 ? message.substring(0, 35) + "..." : message;
};

export const formatTime = (timeString) => {
  return `${timeString.split("T")[1].split(":")[0]}:${
    timeString.split("T")[1].split(":")[1]
  }`;
};

export const formatDate = (dateString) => {
  return dateString.split("T")[0];
};

export const renderMessages = (messages) => {
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
