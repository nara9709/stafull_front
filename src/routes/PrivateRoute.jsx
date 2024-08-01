import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticate } from "./../hooks/useAuthenticate";

export const PrivateRoute = () => {
  return useAuthenticate() ? <Outlet /> : <Navigate to="/" />;
};
