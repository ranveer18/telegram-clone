import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/Chatpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/telegram-clone/:chatId" element={<ChatPage />} />
        <Route path="/telegram-clone/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
