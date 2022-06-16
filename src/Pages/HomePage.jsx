import React from "react";

import BodyContent from "../components/body/BodyContent";
import ContactLogo from "../components/body/ContactLogo";
import CovidCard from "../components/body/covidCard/CovidCard";
import ProHealthCard from "../components/body/ProHealthCard";
import SlideShow from "../components/body/slideShow/SlideShow";
import Navbar from "../components/nav/Navbar";
import "./homepage.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <ContactLogo />
        <Navbar />
        <BodyContent />
        <SlideShow />
        <CovidCard />
        <ProHealthCard />
      </div>
    </div>
  );
};

export default Home;
