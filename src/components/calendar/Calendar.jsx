import React from "react";
import { useTranslation } from "react-i18next";
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

const Calendar = (props) => {
  const { t } = useTranslation();
  const time = new Date();
  const today = DAY[`${time.getDay()}`];

  console.log(today);

  return (
    <section className=" bg-greenTransparency p-4 border-greenLight border rounded-lg">
      <h1 className=" font-extrabold text-2xl text-green">{t(`${today}`)}</h1>
      <p className=" text-grey mb-4">
        {time.getMonth() < 10 && "0"}
        {time.getMonth()}.{time.getDate()}
      </p>
      <span className="w-full h-[1px] bg-[grey] "></span>
      <div className="flex gap-2 py-5">
        {staffs.map((staff, i) => (
          <Profile src={staff.imageurl} alt={staff.lastname} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Calendar;

const staffs = [
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
  },
  {
    firstname: "Bra",
    lastname: "kio",
    imageurl: "/images/profile_sample.png",
  },
];
