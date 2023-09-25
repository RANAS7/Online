import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Components/Authentication";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        ROOM HUNT
      </NavLink>
      <div className="center-nav-item">
        <NavLink to="/addRoom" className="nav-link add-room">
          Add Room
        </NavLink>
      </div>
      <div className="right-menu">
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>

        {console.log(isAuthenticated)}
        {isAuthenticated ? (
          <>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
