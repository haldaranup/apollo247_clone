import React from "react";
import "./footer.scss";
import { Link } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footerLogo">
        <Link className="footerLogoLink" to={"google.com"}>
          <img
            src="https://newassets.apollo247.com/images/ic_logo.png"
            alt=""
          />
        </Link>
      </div>

      <div className="footerText">
        <div>
          <h4>About Apollo 247</h4>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
