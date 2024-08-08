import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Login = () => {
  const user = useAuth();
  const { t } = useTranslation();

  console.log(user);

  return (
    <>
      <section>
        <h1 className="text-3xl font-light text-left mt-28">
          {t("loginLine")}
          <div className=" font-bold text-3xl text-[green]">STAFull</div>
        </h1>
        <div className="flex flex-col">
          <input type="id" />
          <input type="password" />
        </div>
        {user.user && <button onClick={user.logOut}>Logout!</button>}
        {user.user === null && (
          <button onClick={user.loginAction} className="mt-3 pt-3">
            Login
          </button>
        )}
        <button>
          {" "}
          <Link to={"/setting"}>Go To Setting</Link>
        </button>
        <button>
          {" "}
          <Link to={"/signup"}>Sign Up</Link>
        </button>
      </section>
    </>
  );
};

export default Login;
