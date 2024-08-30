import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useTranslation } from "react-i18next";
import Profile from "../UI/Profile";
import { useNavigate } from "react-router-dom";

const Staff = (props) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState();
  const navigation = useNavigate();

  const checkWorkDay = (staffDay, day) => {
    console.log(staffDay.find((workday) => workday === day));
    return staffDay.find((workday) => workday === day);
  };

  const onCreateStaff = () => {
    navigation("/staff/create");
  };

  return (
    <section>
      <Input
        placeholder={`${t("searchWithName")}`}
        value={keyword}
        onChange={setKeyword}
      />
      <Button btnText={`${t("CreateNewStaff")}`} onClick={onCreateStaff} />

      <p className=" mt-3 text-right font-thin">
        {t("total")} <span className=" font-bold"> {data.length}</span>
        {t("people")}
      </p>

      {data.map((staff) => {
        return (
          <div className=" bg-[white] mt-4 py-3 px-5 rounded-sm">
            <div className=" flex  items-center gap-1">
              <Profile src={staff.imageurl} />
              <span>{staff.lastName + " " + staff.firstName}</span>
            </div>
            <div className=" flex justify-between pt-2 pb-2">
              <span
                className={`${
                  checkWorkDay(staff.workday, "SUN")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("sunday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "MON")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("monday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "TUE")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("tuesday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "WEN")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("wendsday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "THU")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("thursday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "FRI")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("friday").substring(0, 1)}
              </span>
              <span
                className={`${
                  checkWorkDay(staff.workday, "SAT")
                    ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
                    : " text-grey px-[0.5rem] py-[0.25rem] "
                }`}
              >
                {t("saturday").substring(0, 1)}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const data = [
  {
    id: "dfdfsfsdfs",
    firstName: "first",
    lastName: "last",
    imageurl: "/images/profile_sample.png",
    workday: ["MON", "TUE", "FRI"],
  },
  {
    id: "dfdfsddddfsdfs",
    firstName: "first2",
    lastName: "last2",
    imageurl: "/images/profile_sample.png",
    workday: ["TUE", "FRI", "SUN"],
  },
];

export default Staff;
