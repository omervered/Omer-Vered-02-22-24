import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { UserMsg } from "./components/user-message/user-message";

import App from "./App";
import { store } from "./redux/store";

import "../index.scss";

ReactDOM.createRoot(document.getElementById("app-container")).render(
  <Provider store={store}>
    <Router>
      <UserMsg />
      <App />
    </Router>
  </Provider>
);
