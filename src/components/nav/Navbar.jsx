import React from "react";
import { Link } from "react-router-dom";
import { links } from "./navData.json";
import "./navbar.scss";
import { MdShoppingCart } from "react-icons/md";

import WalkthroughPopover from "./Login";

const Navbar = () => {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <div className="left">
          <Link to="/" className="apolloLogo">
            <img
              src="https://newassets.apollo247.com/images/ic_logo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="rightNavbar">
          <div className="links">
            {links.map((i) => {
              return (
                <div>
                  <Link to={"/"} className="navLinks">
                    <h5>{i.head}</h5>
                    <div className="line"></div>
                    <p>{i.paraOne}</p>
                    <p>{i.paraTwo}</p>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="navIcons">
            <div>
              <Link to={"/"}>
                <MdShoppingCart size={"1.5rem"} />
              </Link>
            </div>
            <div>
              <WalkthroughPopover />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
