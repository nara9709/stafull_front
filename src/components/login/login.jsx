import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const user = useAuth();

  console.log(user);

  return (
    <>
      <div>login</div>
      {user.user && <button onClick={user.logOut}>Logout!</button>}
      {user.user === null && (
        <button onClick={user.loginAction} className="mt-3 pt-3">
          Login
        </button>
      )}
    </>
  );
};

export default Login;
