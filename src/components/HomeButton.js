import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

import "./HomeButton.css";
const HomeButton = () => {
  return (
    <span className="home-btn">
      <Link to="/">
        <IoCloseOutline />
      </Link>
    </span>
  );
};

export default HomeButton;
