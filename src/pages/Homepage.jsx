import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchChats } from "../utils/api";

import Header from "../components/Header";
import ChatList from "../components/ChatList";

const Homepage = () => {
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

  return (
    <div className="App">
      <main>
        <aside className="right-side">
          <Header
            headerRef={headerRef}
            handleFocus={handleFocus}
            handleArrowLeftClick={handleArrowLeftClick}
          />
          <ChatList chats={chats} />
        </aside>
        <section className="container content active notshow">
          <div className="container content active" id="chatBox"></div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
