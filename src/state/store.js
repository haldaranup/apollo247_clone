import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { reducer as app } from "./App/reducer";
import { reducer as auth } from "./Auth/reducer";

const rootReducer = combineReducers({
  app: app,
  auth: auth,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
