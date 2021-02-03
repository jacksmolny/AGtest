import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "context/StoreContext";
import App from "./scenes/App/App";
import "styles/index.scss";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);
