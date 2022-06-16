import React from "react";
import "./smallCovidCard.scss";
const SmallCovidCard = ({ img, para }) => {
  return (
    <div className="smallCovidCard">
      <div className="covidCardIcons">{img}</div>
      <div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default SmallCovidCard;
