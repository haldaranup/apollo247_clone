import React from "react";
import { Link } from "react-router-dom";
import "./bodyContent.scss";
import { Box } from "@chakra-ui/react";
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
            <Box className="box"
            borderRadius={"10px"}
              w="100%"
              h="50px"
              bgGradient="linear(to-l, #68dadc, #19526c)"
            >
                <div>
                    <Link to={"google.com"}>
                    <img src="https://newassets.apollo247.com/images/ic-doctor.svg" alt="" />
                    </Link>
                </div>
                <div>
                    <p>Book Appoinments with Apollo Doctors</p>
                </div>
                <div>
                    <img src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg" alt="" />
                </div>
            </Box>
          </div>

          <div>
          <Box className="box"
            borderRadius={"10px"}
              w="100%"
              h="50px"
              bgGradient="linear(to-l, #68dadc, #19526c)"
            >
                <div>
                    <Link to={"google.com"}>
                    <img src="https://newassets.apollo247.com/images/ic-doctor.svg" alt="" />
                    </Link>
                </div>
                <div>
                    <p>Book Appoinments with Apollo Doctors</p>
                </div>
                <div>
                    <img src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg" alt="" />
                </div>
            </Box>
          </div>
        </div>

        <div></div>
      </div>

      <div className="docImg">
        <Link className="imgLink" to={"google.com"}>
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
