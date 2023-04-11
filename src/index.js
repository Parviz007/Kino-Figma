import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import(
  "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@600;700&family=Public+Sans:wght@500&family=Roboto:wght@400;500;700;900&display=swap"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
