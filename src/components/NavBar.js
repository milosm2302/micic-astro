import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavLink to="/about" className="navLink">
        About
      </NavLink>
      <NavLink to="/research" className="navLink">
        Research
      </NavLink>
      <NavLink to="/projects" className="navLink">
        Media/Projects
      </NavLink>
      <NavLink to="/cv" className="navLink">
        CV
      </NavLink>
      <NavLink to="/contact" className="navLink">
        Contact Me
      </NavLink>
    </nav>
  );
};

export default NavBar;
