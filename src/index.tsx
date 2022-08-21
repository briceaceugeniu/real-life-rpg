import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <div style={{ height: "26vh" }}></div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
