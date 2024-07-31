import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Setting = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button
        onClick={() => {
          changeLanguage("kr");
        }}
      >
        한국어
      </button>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
      >
        English
      </button>
      <Link to={"/calendar"}>
        <button>Go to home!</button>
      </Link>
    </div>
  );
};

export default Setting;
