import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const user = useAuth();
  console.log("user in route", user);
  if (!user.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
