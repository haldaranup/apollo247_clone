import React from "react";
import { Link } from "@chakra-ui/react";
import "./proHealthCard.scss";
import Home from "../../Pages/HomePage";

const ProHealthCard = () => {
  return (
    <div className="mainProHealth">
      <div className="proHealth">
        <Link className="proImgLink" to={<Home />}>
          <img
            src="https://newassets.apollo247.com/images/prohealth/prohealthSliderTwo.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default ProHealthCard;
