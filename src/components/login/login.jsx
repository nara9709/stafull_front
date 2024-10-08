import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";

const Login = () => {
  const user = useAuth();
  const { t } = useTranslation();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigate();

  console.log(user);
  console.log(id, password);

  useEffect(() => {
    if (user.user) {
      navigation("/");
    }
  }, [user.user, navigation]);
  return (
    <>
      {" "}
      <section className=" absolute top-0 bg-white w-full p-5">
        <h1 className="text-4xl font-light text-left mt-28">
          {t("loginLine")}
          <div className=" font-bold text-5xl text-[green]">STAFull</div>
        </h1>
        <div className="flex flex-col mt-5 gap-4">
          <Input
            type={"text"}
            placeholder={`${t("id")}`}
            onChange={setId}
            value={id}
            name="id"
            isRequired={true}
            isError={false}
            errorMessage={""}
            clickDelete={setId}
          />
          <Input
            type={"password"}
            placeholder={`${t("password")}`}
            onChange={setPassword}
            value={[password]}
            name="password"
            isRequired={true}
            isError={false}
            errorMessage={""}
            clickDelete={setPassword}
          />
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
            <img
              src={"/images/google_logo.png"}
              alt="googlelogo"
              className="w-10 h-10"
            />
          </span>
        </div>
        <div>
          <p className="mt-7">
            {t("notuser")}{" "}
            <Link to={"/signup"}>
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
