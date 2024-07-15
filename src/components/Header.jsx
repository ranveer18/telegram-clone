import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ headerRef, handleFocus, handleArrowLeftClick }) => {
  return (
    <div className="header-container">
      <div className="header" ref={headerRef}>
        <div className="toggle-button">
          <HamburgerMenu />
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleArrowLeftClick} />
        </div>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" onFocus={handleFocus} />
        </div>
      </div>
    </div>
  );
};

export default Header;
