import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input";

const Signup = (props) => {
  //General info
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [passwordSec, setPasswordSec] = useState();

  // Store info
  const [storeName, setStoreName] = useState();
  const [ownerName, setOwnerName] = useState();
  const [dateOpening, setDateOpening] = useState();

  const { t } = useTranslation();
  return (
    <section>
      <h1 className=" text-3xl mt-10 text-left">{t("signup")}</h1>
      <p className="mt-5 mb-2 text-left text-sm">
        {t("userInfo")}
        <input type="text" />
      </p>
      <Input
        type={"text"}
        placeholder={`${t("id")}`}
        onChange={setId}
        value={id}
        name="id"
      />
      <div className="mt-10 flex flex-col gap-3">
        <Input
          type={"password"}
          placeholder={`${t("typeyourpw")}`}
          onChange={setPassword}
          value={password}
          name="password"
        />
        <Input
          type={"password"}
          placeholder={`${t("typeyourpw2")}`}
          onChange={setPasswordSec}
          value={passwordSec}
          name="passwordSec"
        />
      </div>{" "}
    </section>
  );
};

export default Signup;
