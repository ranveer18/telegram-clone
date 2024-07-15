import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMessages } from "../utils/api";
import { fetchChats } from "../utils/api";

import Header from "../components/Header";
import ChatList from "../components/ChatList";

import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const headerRef = useRef(null);
  const filesRef = useRef(null);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      const chatData = await fetchChats();
      setChats(chatData);
    };
    getChats();
  }, []);

  const handleFocus = () => {
    headerRef.current.classList.add("focus");
    filesRef.current.classList.add("active");
  };

  const handleArrowLeftClick = () => {
    headerRef.current.classList.remove("focus");
    filesRef.current.classList.remove("active");
  };

  useEffect(() => {
    const getMessages = async () => {
      const chatMessages = await fetchMessages(chatId);
      setMessages(chatMessages);
    };
    getMessages();
  }, [chatId]);

  return (
    <div className="App">
      <main>
        <aside className="right-side notshow">
          <Header
            headerRef={headerRef}
            handleFocus={handleFocus}
            handleArrowLeftClick={handleArrowLeftClick}
          />
          <ChatList chats={chats} />
        </aside>
        <section className="container content active ">
          <div
            className="container content active"
            id="chatBox"
            ref={chatBoxRef}
          >
            <ChatBox messages={messages} selectedChatId={chatId} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChatPage;
