import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </Router>
  </StrictMode>
);
