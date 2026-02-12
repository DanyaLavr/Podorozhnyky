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
        <Historia
          title="Колумбія"
          author="Олександр Петренко"
          date="12.03.2024"
          continent="Південна Америка"
          imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/250px-Flag_of_Colombia.svg.png"
          description="Колумбія - це країна, розташована в північній частині Південної Америки. Вона відома своєю багатою культурою, різноманітною природою та історією. Колумбія має багато визначних місць, таких як Картахена, Медельїн та Богота. Країна також славиться своєю музикою, танцями та кухнею."
        />
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
