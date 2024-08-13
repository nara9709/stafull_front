import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { TiDelete } from "react-icons/ti";

const Signup = (props) => {
  //General info
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSec, setPasswordSec] = useState("");

  // Store info
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [dateOpening, setDateOpening] = useState("");

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
    setErrorId(true);
    seterrorIdMessage(t("usedId"));
  };

  const validationPwSec = (pw) => {
    if (pw !== password) {
      setPasswordSec(pw);
      return setErrorPwSec(true);
    }

    setPassword(pw);
    return setErrorPwSec(false);
  };

  const validateStoreName = (storeName) => {
    // Check if the store name contains only Korean characters, English letters, numbers, and spaces
    if (!/^[a-zA-Z0-9가-힣\s]+$/.test(storeName)) {
      setStoreName(storeName);
      return setErrorStoreName(true);
    }

    setStoreName(storeName);
    return setErrorStoreName(false);
  };

  const validationOwnerName = (ownerName) => {
    // Check if the owner name contains only Korean characters, English letters, and spaces
    // Also ensure no isolated consonants or vowels in Korean
    if (!/^[a-zA-Z\s가-힣]+$/.test(ownerName)) {
      setOwnerName(ownerName);
      return setErrorOwnerName(true);
    }

    // Check if the Korean characters are complete syllables (i.e., not isolated consonants or vowels)
    if (
      /[^가-힣]/.test(ownerName) === false &&
      /[ㄱ-ㅎㅏ-ㅣ]/.test(ownerName)
    ) {
      setOwnerName(ownerName);
      return setErrorOwnerName(true);
    }
    setOwnerName(ownerName);
    return setErrorOwnerName(false);
  };

  const { t } = useTranslation();
  return (
    <section className=" absolute top-0 bg-white w-full p-5">
      <h1 className=" text-3xl mt-10 text-left">{t("signup")}</h1>
      <p className="mt-5 mb-2 text-left text-s">{t("userInfo")}</p>
      <div className="flex gap-2">
        <div className="flex border-[1px] rounded-md px-3 py-2 w-[70%] justify-between items-center ">
          <input
            type={"text"}
            placeholder={`${t("id")}`}
            onChange={(e) => validationId(e.target.value)}
            value={id}
            name="id"
            iserror={errorId}
            errormessage={t("usedId")}
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
          className=" bg-[green] p-4 text-white rounded-md hover:cursor-pointer disabled:bg-[grey]"
          onClick={checkIdAvailability}
          disabled={errorId === true || id === "" ? true : false}
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
          iserror={errorPw}
          errormessage={t("pwValidationText")}
          clickDelete={() => {
            setPassword("");
            setErrorPw(false);
          }}
        />
        <Input
          type={"password"}
          placeholder={`${t("typeyourpw2")}`}
          onChange={validationPwSec}
          value={passwordSec}
          iserror={errorPwSec}
          errormessage={t("notMatchPw")}
          isRequired={true}
          name="passwordSec"
          clickDelete={() => {
            setPasswordSec("");
            setErrorPwSec(false);
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
          onChange={validateStoreName}
          value={storeName}
          name="storeName"
          iserror={errorStoreName}
          errormessage={t("storeNameValidationText")}
          isRequired={true}
          clickDelete={() => {
            setStoreName("");
            setErrorStoreName(false);
          }}
        />
        <Input
          type={"text"}
          placeholder={`${t("ownerName")}`}
          onChange={validationOwnerName}
          value={ownerName}
          name="ownerName"
          isRequired={true}
          iserror={errorOwnerName}
          errormessage={t("nameValidationText")}
          clickDelete={() => {
            setOwnerName("");
            setErrorOwnerName(false);
          }}
        />
        <Input
          type={"date"}
          placeholder={`${t("openingDate")}`}
          onChange={setDateOpening}
          value={dateOpening}
          name="dateOpening"
          isRequired={true}
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
