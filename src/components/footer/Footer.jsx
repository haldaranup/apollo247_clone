import React from "react";
import "./footer.scss";
import { Link } from "@chakra-ui/react";
import FooterText from "./FooterText"
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

      <FooterText />
      <FooterText />
      <FooterText />
      <FooterText />
      <FooterText />
      <FooterText />
      <FooterText />
      <FooterText />
    </div>
  );
};

export default Footer;
