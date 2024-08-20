import React, { useState } from "react";
import Calendar from "react-calendar";
import i18n from "../../utils/i18n";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import moment from "moment";

const Monthly = (props) => {
  const [value, onChange] = useState(new Date());
  const { t } = useTranslation();
  const lang = i18n.language;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>{""}</div>
        <div
          className={`text-sm bg-[white]  ${
            lang === "kr" ? "w-24" : "w-32"
          } py-2 px-0.5 rounded-md font-light right-0 flex items-center justify-center`}
        >
          <Link to={"/calendar"}>
            <span className=" hover:cursor-pointer">{t("daily")}</span>
          </Link>
          <span className=" bg-greenLight px-2 py-1 rounded-md ml-2 hover:cursor-pointer">
            {t("monthly")}
          </span>
        </div>
      </div>
      <Calendar
        onChange={onChange}
        locale={lang === "kr" ? "ko" : "en"}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        onClickDay={() => {
          console.log(value);
        }}
      />
    </div>
  );
};

export default Monthly;
