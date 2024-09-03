import React from "react";

import "./Home.css";
import NavBar from "../../components/NavBar";
const Home = () => {
  return (
    <div>
      <div className="blur-home"></div>
      <div className="header">
        <h1>MARKO MIĆIĆ</h1>
        <h2>Dodge Family Postdoctoral Fellow</h2>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
