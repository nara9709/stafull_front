import React from "react";
import { useTranslation } from "react-i18next";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Nav = (props) => {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  console.log(location);

  return (
    <section className="p-5 flex flex-row gap-14 bg-white absolute bottom-0 left-0 w-full">
      <div className="flex flex-col justify-center items-center">
        <CiCalendar size={"2rem"} />
        <span>{t("calendar")}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CiUser size={"2rem"} />
        <span>{t("staff")}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CiDollar size={"2rem"} />
        <span>{t("wage")}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CiSun size={"2rem"} />
        <span>{t("settings")}</span>
      </div>
    </section>
  );
};

export default Nav;
