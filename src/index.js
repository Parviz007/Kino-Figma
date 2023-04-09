import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import(
  "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@600;700&family=Public+Sans:wght@500&family=Roboto:wght@400;500;700;900&display=swap"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
