import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import movie from "redux/modules/movie";

const history = createBrowserHistory();

const env = process.env.NODE_ENV;

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducers = combineReducers({
  movie,
  router: connectRouter(history)
});

let store = initialState =>
  createStore(reducers, applyMiddleware(...middlewares));

export { history };

export default store();
