import React from "react";
import { Link } from "react-router-dom";
import BodyContent from "../components/body/BodyContent";
import SlideShow from "../components/body/slideShow/SlideShow";
import Navbar from "../components/nav/Navbar";
import "./homepage.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <Link className="contactLogo" to={"google.com"}>
          <img
            src="https://newassets.apollo247.com/images/ic-mascot.png"
            alt=""
          />
        </Link>
        <Navbar />
        <BodyContent />
        <SlideShow />
      </div>
    </div>
  );
};

export default Home;
