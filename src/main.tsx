import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Historia from "./components/Historia/Historia.tsx";
import { setupStore } from "./redux/store.ts";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
