import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createHashHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import movie from "redux/modules/movie";

const history = createHashHistory({
  hashType: "slash",
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

const env = process.env.NODE_ENV;

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducers = combineReducers({
  movie,
  router: connectRouter(history),
});

let store;
if (env === "development") {
  store = (initialState) =>
    createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = (initialState) =>
    createStore(reducers, applyMiddleware(...middlewares));
}
export { history };

export default store();
