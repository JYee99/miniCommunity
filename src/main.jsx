import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Write from "./Write/Write.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Community from "./Community/Community.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
