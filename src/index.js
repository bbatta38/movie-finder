import React from "react";
import { Provider } from "react-redux";
import store, { history } from "redux/configureStore.js";
import { ConnectedRouter } from "connected-react-router";
import ReactDOM from "react-dom";
import App from "components/App";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
