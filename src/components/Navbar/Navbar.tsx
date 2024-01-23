import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__left">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </div>
      <div className="navbar__right">
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1740433716420427776/N2KAWeln_400x400.jpg"
        />
        <span className="nav__name">John Doe</span>
        <button className="nav__button logout">Log Out</button>
      </div>
    </nav>
  );
};
export default Navbar;
