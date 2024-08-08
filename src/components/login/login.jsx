import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
import { TiDelete } from "react-icons/ti";
import googleLogo from "../../images/google_logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const user = useAuth();
  const { t } = useTranslation();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  console.log(user);
  console.log(id, password);

  return (
    <>
      <section>
        <h1 className="text-4xl font-light text-left mt-28">
          {t("loginLine")}
          <div className=" font-bold text-5xl text-[green]">STAFull</div>
        </h1>
        <div className="flex flex-col mt-5 gap-4">
          <div className="flex border-[1px] rounded-md px-3 py-2 justify-between  ">
            <input
              type="text"
              className=" outline-none w-4/5"
              placeholder={`${t("id")}`}
              name="id"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <TiDelete
              size={"2rem"}
              color="grey"
              onClick={() => setId("")}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex border-[1px] rounded-md px-3 py-2 justify-between  ">
            <input
              type="password"
              className=" outline-none w-4/5"
              placeholder={`${t("password")}`}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TiDelete
              size={"2rem"}
              color="grey"
              onClick={() => setPassword("")}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        {user.user && (
          <Button btnText={`${t("logout")}`} onClick={user.logOut} />
        )}
        {user.user === null && (
          <Button btnText={`${t("login")}`} onClick={user.loginAction} />
        )}
        <div className="flex flex-col items-center gap-3 mt-20">
          <p>{t("loginWithGoogle")}</p>
          <span className="w-16 h-16 bg-gray-200 flex justify-center items-center rounded-[50%] hover:cursor-pointer  ">
            <img src={googleLogo} alt="googlelogo" className="w-10 h-10" />
          </span>
        </div>
        <div>
          <p className="mt-7">
            {t("notuser")}{" "}
            <Link to={"signup"}>
              <span className=" underline hover:cursor-pointer">
                {t("signup")}
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
