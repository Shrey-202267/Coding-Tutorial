import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="navbar__right">
        <div className="links">
          <Link className="nav__links" to="/">
            Home
          </Link>
          <Link className="nav__links" to="/resources">
            Resorces
          </Link>
          <Link className="nav__links" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
