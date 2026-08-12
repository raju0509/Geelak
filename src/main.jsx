import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sections.css";
import "./styles/products.css";
import "./styles/contact.css";
import "./styles/responsive.css";
import "./styles/footer.css";
import "./styles/products-page.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);