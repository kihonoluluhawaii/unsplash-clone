import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/_reset.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
