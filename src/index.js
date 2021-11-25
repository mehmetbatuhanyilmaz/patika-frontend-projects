import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./contexts/BasketContext";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <BasketProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BasketProvider>,

  document.getElementById("root")
);
