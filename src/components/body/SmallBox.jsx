import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Pages/HomePage";

const SmallBox = ({ img, text }) => {
  return (
    <div className="bottomContent">
      <div style={{ width: "30%" }}>
        <Link to={"/"}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div style={{ width: "55%" }}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SmallBox;
