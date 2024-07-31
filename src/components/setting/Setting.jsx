import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { language } from "../../state";

const Setting = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    console.log(languageInfo);
    i18n.changeLanguage(languageInfo);
    console.log(i18n.language);
  };

  const [languageInfo, setLanguage] = useRecoilState(language);

  return (
    <div>
      <button
        onClick={() => {
          setLanguage("kr");
          changeLanguage();
        }}
      >
        한국어
      </button>
      <button
        onClick={() => {
          setLanguage("en");
          changeLanguage();
        }}
      >
        English
      </button>
    </div>
  );
};

export default Setting;
