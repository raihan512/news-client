import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Pages/Shared/Header/Header";
import HeaderTop from "./Pages/Shared/HeaderTop/HeaderTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderTop></HeaderTop>
    <Header></Header>
  </React.StrictMode>
);
