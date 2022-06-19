import { legacy_createStore, combineReducer } from "redux";

import { reducer } from "./reducers/reducers";

const rootReducer = combineReducer({
  product: reducer,
});

export const store = legacy_createStore(rootReducer)
