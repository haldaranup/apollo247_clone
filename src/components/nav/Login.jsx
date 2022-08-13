import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../state/Auth/action";
import axios from "axios";

function WalkthroughPopover() {
  const initialFocusRef = React.useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const login = (payload) => {
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        dispatch(loginSuccess(r.data.token));
        console.log(r.data.token);
      })
      .catch((e) => dispatch(loginFailure(e)));
  };

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    login(data);
  };

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
          {isAuth ? (
            `${name}`
          ) : (
            <div className="inputs">
              <p>Your name</p>
              <div>
                <Input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <p>Your email address</p>
              <div>
                <Input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <p>Your password</p>
              <div>
                <Input
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <ButtonGroup size="sm">
                <Button colorScheme="green" onClick={handleLogin}>
                  Login
                </Button>
              </ButtonGroup>
            </div>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
export default WalkthroughPopover;
