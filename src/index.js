import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import pagesData from "./routes/pagesData";
import "./utils/i18n";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>
);
