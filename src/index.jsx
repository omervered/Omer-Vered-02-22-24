import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";
import { store } from "./redux/store";

import "../index.scss";

ReactDOM.createRoot(document.getElementById("app-container")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
