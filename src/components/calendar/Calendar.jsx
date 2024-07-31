import React from "react";
import { useTranslation } from "react-i18next";

const Calendar = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("calendar")}</h1>
    </div>
  );
};

export default Calendar;
