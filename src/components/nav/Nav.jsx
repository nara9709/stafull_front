import React from "react";
import { useTranslation } from "react-i18next";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  // Get icon's color by pathname
  const getIconColor = (iconName) => {
    console.log(location.split("/")[1]);
    if (iconName === location.split("/")[1]) {
      return "green";
    } else if (iconName === "" && location.split("/")[1] === "calendar") {
      console.log("icon", iconName, "location", location.split("/")[1]);
      console.log("got it");
      return "green";
    }
  };

  return (
    <section className="p-5 flex flex-row gap-14 bg-white absolute bottom-0 left-0 w-full">
      <Link to={"/"}>
        <div className="flex flex-col justify-center items-center">
          <CiCalendar size={"2rem"} color={getIconColor("")} />
          <span className={`text-[${getIconColor("")}]`}>{t("calendar")}</span>
        </div>
      </Link>
      <Link to={"/staff"}>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <CiUser size={"2rem"} color={getIconColor("staff")} />
          <span className={`text-[${getIconColor("staff")}]`}>
            {t("staff")}
          </span>
        </div>{" "}
      </Link>
      <Link to={"/wage"}>
        <div className="flex flex-col justify-center items-center">
          <CiDollar size={"2rem"} color={getIconColor("wage")} />
          <span className={`text-[${getIconColor("wage")}]`}>{t("wage")}</span>
        </div>
      </Link>
      <Link to={"/setting"}>
        <div className="flex flex-col justify-center items-center">
          <CiSun size={"2rem"} color={getIconColor("setting")} />
          <span className={`text-[${getIconColor("setting")}]`}>
            {t("settings")}
          </span>
        </div>
      </Link>
    </section>
  );
};

export default Nav;
