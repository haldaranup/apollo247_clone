import React from "react";
import { Link } from "react-router-dom";
import { links } from "./navData.json";
import "./navbar.scss";
import { MdShoppingCart } from "react-icons/md";
import {FaUserCircle} from "react-icons/fa"


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Link to="/">
            <img
              src="https://newassets.apollo247.com/images/ic_logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="right">

        {links.map((i) => {
          return (
            <div className="links">
              <p>{i.head}</p>
              <div className="line"></div>
              <p>{i.paraOne}</p>
              <p>{i.paraTwo}</p>
            </div>
          );
        })}

        <div>
          <MdShoppingCart />
          <FaUserCircle />
        </div>
        </div>        

      </nav>
    </>
  );
};

export default Navbar;
