import React from "react";
import { useTranslation } from "react-i18next";
import Profile from "../UI/Profile";
import { useNavigate } from "react-router-dom";
import ShiftBoard from "../UI/shiftBoard";

const DAY = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wendsday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

const Calendar = (props) => {
  const { t } = useTranslation();
  const time = new Date();
  const today = DAY[`${time.getDay()}`];
  const tomorrow = DAY[`${time.getDay() + 1}`];
  const aftertomr = DAY[`${time.getDay() + 2}`];
  const navigation = useNavigate();

  const onClickProfile = (staffId) => {
    navigation(`/staff/${staffId}`);
  };

  return (
    <section>
      <h1 className=" text-left text-xl font-semibold mb-4">
        {t("todayStaff")}
      </h1>
      <div className="bg-greenTransparency  p-4 border-greenLight border rounded-lg overflow-x-auto">
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
