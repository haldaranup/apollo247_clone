import React from "react";
import { Box } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Home from "../../Pages/HomePage";


const BoxContent = ({ img, text }) => {
  return (
    <>
        <Box
          className="box"
          borderRadius={"10px"}
          w="100%"
          h="50px"
          bgGradient="linear(to-l, #4aaec5, #19526c)"
        >
          <div>
            <img className="cartoonImg" src={img} alt="" />
          </div>
          <div>
            <p>{text}</p>
          </div>
          <div>
            <img
              src="https://newassets.apollo247.com/images/ic_arrow_right_white.svg"
              alt=""
            />
          </div>
        </Box>

    </>
  );
};

export default BoxContent;
