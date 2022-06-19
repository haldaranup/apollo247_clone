import React from "react";
import { Link } from "react-router-dom";
import "./bodyContent.scss";

import BoxContent from "./BoxContent";
import SmallBox from "./SmallBox";
const BodyContent = () => {
  return (
    <div className="bodyContainer">
      <div className="leftBody">
        <div className="topBody">
          <h1>Hello There!</h1>
          <p>Always caring about your health, we are here to help you!</p>
        </div>

        <div className="midBody">
          <div>
            <BoxContent
              img={"https://newassets.apollo247.com/images/ic-doctor.svg"}
              text={"Book Appoinments with Apollo Doctors"}
            />
          </div>

          <div>
            <Link to={"/pharmacy"}>
              <BoxContent
                img={"https://newassets.apollo247.com/images/ic_medicines.png"}
                text={"Buy Medicines and Essentials"}
              />
            </Link>
          </div>
        </div>

        <div className="bottomBody">
          <SmallBox
            img={"https://newassets.apollo247.com/images/ic_home_test.svg"}
            text={"Book Lab Tests"}
          />
          <SmallBox
            img={"https://newassets.apollo247.com/images/ic-prescription.svg"}
            text={"View Health Records"}
          />
        </div>
      </div>

      <div className="docImg">

        <Link className="imgLink" to={"/"}>


          <img
            src="https://newassets.apollo247.com/images/img-doctors@1x.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default BodyContent;
