import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import pagesData from "./routes/pagesData";
import "./utils/i18n";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={pagesData}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);
