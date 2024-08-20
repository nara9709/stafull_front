import React from "react";
import { useTranslation } from "react-i18next";
import Profile from "../UI/Profile";
import { Link, useNavigate } from "react-router-dom";
import ShiftBoard from "../UI/shiftBoard";
import i18n from "../../utils/i18n";

const DAY = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wendsday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

const Calendar = () => {
  const { t } = useTranslation();
  const time = new Date();
  const today = DAY[`${time.getDay()}`];
  const tomorrow = DAY[`${time.getDay() + 1}`];
  const aftertomr = DAY[`${time.getDay() + 2}`];
  const navigation = useNavigate();

  const onClickProfile = (staffId) => {
    navigation(`/staff/${staffId}`);
  };
  const lang = i18n.language;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className=" text-left text-xl font-semibold">{t("todayStaff")}</h1>
        <div
          className={`text-sm bg-[white]  ${
            lang === "kr" ? "w-24" : "w-32"
          } py-2 px-0.5 rounded-md font-light `}
        >
          <span className="bg-greenLight px-2 py-1 rounded-md mr-2 hover:cursor-pointer">
            {t("daily")}
          </span>
          <Link to={"/calendar/monthly"}>
            <span className="hover:cursor-pointer">{t("monthly")}</span>
          </Link>
        </div>
      </div>
      <div className="bg-[white]  p-4  rounded-lg overflow-x-auto">
        <h1 className="font-bold text-xl text-green">{t(`${today}`)}</h1>
        <p className="text-grey mb-4">
          {time.getMonth() + 1 < 10
            ? `0${time.getMonth() + 1}`
            : time.getMonth() + 1}
          .{time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}
        </p>
        <div className="w-full h-[0.5px] bg-greenLight"></div>
        <div className="flex gap-2 pt-5 w-full overflow-x-auto items-center">
          {staffs.map((staff, i) => (
            <Profile
              src={staff.imageurl}
              alt={staff.lastname}
              key={i}
              onClick={() => onClickProfile(staff.id)}
              text={staff.lastname}
            />
          ))}
        </div>
      </div>
      <h2 className=" text-left text-lg mt-6">{t("nextShift")}</h2>
      <ShiftBoard
        day={t(tomorrow)}
        date={`${
          time.getMonth() + 1 < 10
            ? `0${time.getMonth() + 1}`
            : time.getMonth() + 1
        }.${
          time.getDate() + 1 < 10
            ? `0${time.getDate() + 1}`
            : time.getDate() + 1
        }`}
        staffList={staffs}
      />
      <ShiftBoard
        day={t(aftertomr)}
        date={`${
          time.getMonth() + 2 < 10
            ? `0${time.getMonth() + 2}`
            : time.getMonth() + 2
        }.${
          time.getDate() + 2 < 10
            ? `0${time.getDate() + 2}`
            : time.getDate() + 2
        }`}
        staffList={staffs}
      />
    </section>
  );
};

export default Calendar;

const staffs = [
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "123",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "133",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "1333",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "2123",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "12333",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "2123",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
    id: "12333",
  },
];
