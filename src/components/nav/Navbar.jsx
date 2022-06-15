import React from "react";
import { Link } from "react-router-dom";
// import { links } from "./navData.json";
import "./navbar.scss";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Link to="/" className="apolloLogo">
            <img
              src="https://newassets.apollo247.com/images/ic_logo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="right">
          {/* <div className="links">
            {links.map((i) => {
              return (
                <div>
                  <Link to={"google.com"} className="navLinks" >
                  <h5>{i.head}</h5>
                  <div className="line"></div>
                  <p>{i.paraOne}</p>
                  <p>{i.paraTwo}</p>
                  </Link>
                </div>
              );
            })}
          </div> */}

          <div className="navIcons">
            <div>
              <MdShoppingCart size={"1.5rem"} />
            </div>
            <div>
              <FaUserCircle size={"3rem"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
