import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { TiDelete } from "react-icons/ti";

const Signup = (props) => {
  //General info
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [passwordSec, setPasswordSec] = useState();

  // Store info
  const [storeName, setStoreName] = useState();
  const [ownerName, setOwnerName] = useState();
  const [dateOpening, setDateOpening] = useState();

  // Error state
  const [errorId, setErrorId] = useState(false);
  const [errorPw, setErrorPw] = useState(false);
  const [errorPwSec, setErrorPwSec] = useState(false);
  const [errorStoreName, setErrorStoreName] = useState(false);
  const [errorOwnerName, setErrorOwnerName] = useState(false);

  // Error message
  const [errorIdMessage, seterrorIdMessage] = useState("");

  // Validation functions
  const validationPw = (password) => {
    // pw length check (over 8)
    if (password.length < 8) {
      setErrorPw(true);
      setPassword(password);
      return;
    }

    // Uppercase check (A-Z)
    if (!/[A-Z]/.test(password)) {
      setErrorPw(true);
      setPassword(password);
      return;
    }

    // special symbol check
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorPw(true);
      setPassword(password);
      return;
    }

    setPassword(password);
    return setErrorPw(false);
  };

  const validationId = (id) => {
    // Id's length check (over 4 and under 20)
    if (id.length < 4 || id.length > 20) {
      setId(id);
      seterrorIdMessage(t("idValidationText"));
      return setErrorId(true);
    }

    // check only english and number
    if (!/^[a-zA-Z0-9]+$/.test(id)) {
      setId(id);
      seterrorIdMessage(t("idValidationText"));
      return setErrorId(true);
    }

    setErrorId(false);
    return setId(id);
  };

  const checkIdAvailability = () => {
    console.log(id);

    setErrorId(true);
    seterrorIdMessage(t("usedId"));
  };

  const { t } = useTranslation();
  return (
    <section>
      <h1 className=" text-3xl mt-10 text-left">{t("signup")}</h1>
      <p className="mt-5 mb-2 text-left text-s">
        {t("userInfo")}
        <input type="text" />
      </p>
      <div className="flex gap-2">
        <div className="flex border-[1px] rounded-md px-3 py-2 justify-between items-center ">
          <input
            type={"text"}
            placeholder={`${t("id")}`}
            onChange={(e) => validationId(e.target.value)}
            value={id}
            name="id"
            isError={errorId}
            errorMessage={t("usedId")}
            className="outline-none "
          />

          <TiDelete
            size={"1.8rem"}
            color="grey"
            onClick={() => {
              setId("");
              setErrorId(false);
              seterrorIdMessage("");
            }}
            className="hover:cursor-pointer"
          />
        </div>
        <button
          className=" bg-[green] p-4 text-white rounded-md hover:cursor-pointer"
          onClick={checkIdAvailability}
        >
          {t("checkId")}
        </button>
      </div>
      {errorId && (
        <p class="text-red-500 text-s text-left mt-2">{errorIdMessage}</p>
      )}
      <div className="mt-10 flex flex-col gap-3">
        <Input
          type={"password"}
          placeholder={`${t("typeyourpw")}`}
          onChange={validationPw}
          value={password}
          name="password"
          isError={errorPw}
          errorMessage={t("pwValidationText")}
          clickDelete={() => {
            setPassword("");
            setErrorPw(false);
          }}
        />
        <Input
          type={"password"}
          placeholder={`${t("typeyourpw2")}`}
          onChange={setPasswordSec}
          value={passwordSec}
          name="passwordSec"
          clickDelete={() => {
            setPasswordSec("");
            errorPwSec(false);
          }}
        />
      </div>{" "}
      <p className="mt-5 mb-2 text-left text-s">
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
