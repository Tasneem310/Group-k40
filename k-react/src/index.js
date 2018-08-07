import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";

import { HashRouter, Switch } from "react-router-dom";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
