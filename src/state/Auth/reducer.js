import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
