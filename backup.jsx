import React, { useRef, useState, useEffect } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faPhoneAlt,
  faEllipsisV,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const headerRef = useRef(null);
  const filesRef = useRef(null);
  const chatBoxRef = useRef(null);

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {}, [messages]);

  const fetchChats = async () => {
    try {
      const response = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats?page=1"
      );
      console.log("Chats fetched:", response.data.data.data);
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data.data)
      ) {
        const chatsWithLastMessage = await Promise.all(
          response.data.data.data.map(async (chat) => {
            const lastMessageData = await fetchLastMessage(chat.id);
            return { ...chat, ...lastMessageData };
          })
        );
        setChats(chatsWithLastMessage);
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const fetchLastMessage = async (chatId) => {
    try {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      if (response.data && Array.isArray(response.data.data)) {
        const messages = response.data.data;
        const lastMessage =
          messages[messages.length - 1]?.message || "No messages yet";
        const lastMessageTime =
          messages[messages.length - 1]?.created_at || "Unknown time";
        return { lastMessage, lastMessageTime };
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching last message:", error);
    }
    return {
      lastMessage: "Error fetching message",
      lastMessageTime: "Unknown time",
    };
  };

  const fetchMessages = async (chatId) => {
    try {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      if (response.data && Array.isArray(response.data.data)) {
        setMessages(response.data.data);
        console.log("Messages fetched:", response.data.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleChatClick = (chatId) => {
    setSelectedChatId(chatId);
    fetchMessages(chatId);
    chatBoxRef.current.classList.add("active");
  };

  const handleFocus = () => {
    headerRef.current.classList.add("focus");
    filesRef.current.classList.add("active");
  };

  const handleArrowLeftClick = () => {
    headerRef.current.classList.remove("focus");
    filesRef.current.classList.remove("active");
  };

  const truncateMessage = (message) => {
    return message.length > 55 ? message.substring(0, 55) + "..." : message;
  };

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
    <div className="App">
      <main>
        <aside className="right-side">
          <div className="header-container">
            <div className="header" ref={headerRef}>
              <div className="toggle-button">
                <HamburgerMenu />
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={handleArrowLeftClick}
                />
              </div>
              <div className="search-box">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search" onFocus={handleFocus} />
              </div>
            </div>
          </div>
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
        </aside>
        <section className="content">
          <div className="container" id="chatBox" ref={chatBoxRef}>
            <div className="content-header">
              <div className="chat-img">
                {chats.map((chat) =>
                  chat.id === selectedChatId ? (
                    <h3 key={chat.id}>
                      {chat.creator.name ? chat.creator.name[0] : "U"}
                    </h3>
                  ) : null
                )}
              </div>
              <div className="details">
                {chats.map((chat) =>
                  chat.id === selectedChatId ? (
                    <h3 key={chat.id}>
                      {chat.creator.name ? chat.creator.name : "Unknown"}
                    </h3>
                  ) : null
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
                <FontAwesomeIcon icon={faPaperclip} />
              </div>
              <div className="micro">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
