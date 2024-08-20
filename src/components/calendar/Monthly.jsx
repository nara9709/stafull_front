import React, { useState } from "react";
import Calendar from "react-calendar";
import i18n from "../../utils/i18n";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import moment from "moment";
import Profile from "../UI/Profile";

const DAY = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wendsday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

const Monthly = () => {
  const [date, onChange] = useState(new Date());
  const { t } = useTranslation();
  const lang = i18n.language;
  const today = DAY[`${date.getDay()}`];
  const navigation = useNavigate();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const yyyymmdd = `${year}${month}${day}`;

  const onClickProfile = (staffId) => {
    navigation(`/staff/${staffId}`);
  };

  const onClickShiftboard = () => {
    navigation(`/calendar/daily/${yyyymmdd}`);
  };

  return (
    <section className="gap-4">
      <div>
        <div className="flex justify-between mb-4">
          <div></div>
        </div>
        <Calendar
          onChange={onChange}
          locale={lang === "kr" ? "ko" : "en"}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={date}
          onClickDay={() => {
            console.log(yyyymmdd);
          }}
        />
      </div>
      {/* Shift Board */}
      <div
        className="bg-[white]  p-4  rounded-lg overflow-x-auto hover:cursor-pointer"
        onClick={onClickShiftboard}
      >
        <h1 className="font-bold text-xl text-greenSolid">{t(`${today}`)}</h1>
        <p className="text-grey mb-4">
          {date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1}
          .{date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
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
      {/* Shift Board End */}
    </section>
  );
};

export default Monthly;

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
