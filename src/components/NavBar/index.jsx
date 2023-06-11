import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          {/* NAVBAR LOGO  */}
          <Link to="/" className="navbar-logo">
            <img src="logoTransparent.png" alt="Logo" style={{ width: "50px", height: "50px" }} />
            Chess Auto Prep
          </Link>

          {/* HAMBURGER MENU ICON - OPEN AND CLOSE NAVBAR */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* LIST OF LINKS  */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* HOME  */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* ABOUT  */}
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            {/* GENERATE  */}
            <li className="nav-item">
              <Link to="/generate" className="nav-links" onClick={closeMobileMenu}>
                Generate
              </Link>
            </li>

            {/* SUBMIT  */}
            <li className="nav-item">
              <Link to="/submit" className="nav-links" onClick={closeMobileMenu}>
                Submit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;