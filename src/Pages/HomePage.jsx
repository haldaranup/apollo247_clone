import React from "react";
import BodyContent from "../components/body/BodyContent";
import Navbar from "../components/nav/Navbar";
import "./homepage.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Navbar />
        <BodyContent />
      </div>
    </div>
  );
};

export default Home;
