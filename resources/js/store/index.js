import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import links from "./links.js";
import singleLink from "./singleLink.js";
import error from "./error.js";

const reducer = combineReducers({ links, error });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./links.js";
//export * from "./singleLink.js";
export * from "./error.js";
export * from "./actionCreators.js";
