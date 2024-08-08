import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./utils/i18n";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./contexts/AuthContext";

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
