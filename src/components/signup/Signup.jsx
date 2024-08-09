import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input";
import Button from "../UI/Button";

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
      <p className="mt-5 mb-2 text-left text-sm">
        {t("storeInfo")}
        <input type="text" />
      </p>
      <div className=" flex flex-col gap-3">
        <Input
          type={"text"}
          placeholder={`${t("storeName")}`}
          onChange={setStoreName}
          value={storeName}
          name="storeName"
        />
        <Input
          type={"text"}
          placeholder={`${t("ownerName")}`}
          onChange={setOwnerName}
          value={ownerName}
          name="ownerName"
        />
        <Input
          type={"date"}
          placeholder={`${t("openingDate")}`}
          onChange={setDateOpening}
          value={dateOpening}
          name="dateOpening"
        />
      </div>{" "}
      <Button
        btnText={t("signup")}
        onClick={() => {
          console.log("signup");
        }}
      />
    </section>
  );
};

export default Signup;
