import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Menu main-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
      </div>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <div
        role="presentation"
        className={` bubble menu-container custom-scroll top left with-footer opacity-transition ${
          isOpen ? "open" : "not-open"
        }`}
        style={{ transformOrigin: "left top" }}
      >
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-saved-messages"></i>
          <p>Saved Messages</p>
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-user"></i>Contacts
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-play-story"></i>My Stories
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-settings"></i>Settings
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-darkmode"></i>
          <span className="menu-item-name">Night Mode</span>
          <label className="Switcher no-animation" title="Disable night mode">
            <input type="checkbox" id="darkmode" />
            <span className="widget"></span>
          </label>
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-animations"></i>
          <span className="menu-item-name capitalize">animations</span>
          <div className="eGD1rubd Toggle" aria-hidden="true">
            <i className="kudEBJOk LdztzMx0"></i>
            <i className="EXXsQxeq LdztzMx0"></i>
          </div>
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-help"></i>Telegram Features
        </div>
        <div role="menuitem" tabIndex="0" className="menuitem">
          <i className="icon icon-bug"></i>Report a Bug
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
