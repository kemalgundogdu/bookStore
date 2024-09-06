import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./output.css";
import { BookProvider } from "./context/BookContext";
import { BasketProvider } from "./context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
  </BookProvider>
);

reportWebVitals();
