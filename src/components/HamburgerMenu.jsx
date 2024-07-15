import React, { useState, useRef } from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faBookmark,
  faCircleQuestion,
  faCircleUser,
  faContactBook,
  faGear,
  faLocation,
  faMoon,
  faPeopleArrows,
  faPhone,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`nav-container ${isActive ? "is-active" : ""} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
      tabIndex="0"
      ref={navRef}
      onBlur={handleBlur}
    >
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleNav}
        className="hamburger-icon"
      />
      <nav className="nav-items">
        <div className="profile">
          <div className="dark-profile">
            <span className="profile-img">R</span>
            {isDarkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                onClick={toggleDarkMode}
                className="mode-toggle sun"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                onClick={toggleDarkMode}
                className="mode-toggle moon"
              />
            )}
          </div>
          <div className="profile-details">
            <h3>Ranveer Kumar</h3>
            <p>+91 7564042812</p>
          </div>
        </div>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faCircleUser} />
          My Profile
        </a>
        <div className="line"></div>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faUser} />
          New Group
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faAddressBook} />
          Contacts
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faPhone} />
          Calls
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faLocation} />
          People Nearby
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faBookmark} />
          Saved Messages
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faGear} />
          Settings
        </a>
        <div className="line"></div>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faPeopleArrows} />
          Invite Friends
        </a>
        <a className="nav-item" href="#">
          <FontAwesomeIcon icon={faCircleQuestion} />
          Telegram Features
        </a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
