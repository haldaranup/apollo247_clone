import React from "react";
import AboutApollo from "../components/body/aboutApollo/AboutApollo";
import BodyContent from "../components/body/BodyContent";
import ContactLogo from "../components/body/ContactLogo";
import CovidCard from "../components/body/covidCard/CovidCard";
import ProHealthCard from "../components/body/ProHealthCard";
import Resources from "../components/body/Resources";
import SlideShow from "../components/body/slideShow/SlideShow";
import Space from "../components/body/Space";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Products from "../components/pharmacy/products";

const Pharmacy = () => {
  return (
    <div className="container">
      <div className="main">
        <ContactLogo />
        <Navbar />
        <Space />
        <SlideShow />
        <Products />
        <Resources />
        <AboutApollo />
        <Footer />
      </div>
    </div>
  );
};

export default Pharmacy;
