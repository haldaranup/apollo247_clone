import React from "react";
import {
  ButtonGroup,
  PopoverFooter,
  PopoverArrow,
  PopoverHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./login.scss";

function WalkthroughPopover() {
  const initialFocusRef = React.useRef();
  const sendOtp = ()=>{
    alert("OTP sent Successfully!")
  }
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <FaUserCircle size={"3rem"} style={{ cursor: "pointer" }} />
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          <h2 style={{ fontSize: "2rem" }}>Hi,</h2>
          <p>Please enter your mobile number to login</p>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody></PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Input placeholder="Phone" />
          <ButtonGroup size="sm">
            <Button colorScheme="green" onClick={sendOtp}>Send OTP</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default WalkthroughPopover;
