import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeUtil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar__container">
      <div className="navbar__left">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </div>
      <div className="navbar__right">
        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
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
