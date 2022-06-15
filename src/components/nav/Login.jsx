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
  Box,
  Button,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./login.scss";

function WalkthroughPopover() {
  const initialFocusRef = React.useRef();
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
          Manage Your Channels
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">Step 2 of 4</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">Setup Email</Button>
            <Button colorScheme="blue" ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default WalkthroughPopover;
