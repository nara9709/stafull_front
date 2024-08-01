import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div>login</div>
      <div>{authenticated ? "Logged In" : "Logged Out"}</div>
      <button onClick={() => setAuthenticated(true)}>Login!</button>
    </>
  );
};

export default Login;
