import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
import { TiDelete } from "react-icons/ti";

const Login = () => {
  const user = useAuth();
  const { t } = useTranslation();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  console.log(user);

  return (
    <>
      <section>
        <h1 className="text-3xl font-light text-left mt-28">
          {t("loginLine")}
          <div className=" font-bold text-3xl text-[green]">STAFull</div>
        </h1>
        <div className="flex flex-col mt-5 gap-4">
          <div className="flex border-[1px] rounded-md px-3 py-2 justify-between  ">
            <input
              type="text"
              className=" outline-none w-4/5"
              placeholder={`${t("id")}`}
              name="id"
              onChange={(e) => setId(e.value)}
              value={id}
            />
            <TiDelete size={"2rem"} color="grey" />
          </div>
          <div className="flex border-[1px] rounded-md px-3 py-2 justify-between  ">
            <input
              type="password"
              className=" outline-none w-4/5"
              placeholder={`${t("password")}`}
              name="password"
              onChange={(e) => setPassword(e.value)}
              value={password}
            />
            <TiDelete size={"2rem"} color="grey" />
          </div>
        </div>
        {user.user && (
          <Button btnText={`${t("logout")}`} onClick={user.logOut} />
        )}
        {user.user === null && (
          <Button btnText={`${t("login")}`} onClick={user.loginAction} />
        )}
      </section>
    </>
  );
};

export default Login;
