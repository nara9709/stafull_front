import React from "react";
import { useTranslation } from "react-i18next";

const Setting = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("kr")}>한국어</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};

export default Setting;
