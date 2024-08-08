import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [token, setToken] = useState(null);
  const loginAction = () => {
    console.log("login!");
    setUser({
      name: "nara lee",
      id: "nara9709",
      storeName: "참 좋은 회사",
    });

    setToken("111");
  };

  const logOut = () => {
    console.log("logout!");
    setUser(null);
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
