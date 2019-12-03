import React from "react";
import Image from "../logo-blue.png";

const Header = () => {
  return (
    <div className="header-app">
      <header className="header-css">
        <nav className="green lighten-2">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              <img src={Image} alt="benchire"></img>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
