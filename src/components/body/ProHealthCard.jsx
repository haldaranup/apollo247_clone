import React from "react";
import { Link } from "@chakra-ui/react";
import "./proHealthCard.scss";

const ProHealthCard = () => {
  return (
    <div className="mainProHealth">
      <div className="proHealth">

        <Link className="proImgLink" to={"/"}>
        
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
