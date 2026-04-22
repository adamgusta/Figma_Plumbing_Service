import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { PragueLanding } from "./screens/PragueLanding/PragueLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PragueLanding />} />
        <Route path="/old-home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
