import React from "react";
import { useTranslation } from "react-i18next";
import Profile from "../UI/Profile";
import { Link, useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();

  console.log(today);

  const onClickProfile = (staffId) => {
    navigation(`/staff/${staffId}`);
  };

  return (
    <section className=" bg-greenTransparency p-4 border-greenLight border rounded-lg">
      <h1 className=" font-extrabold text-2xl text-green">{t(`${today}`)}</h1>
      <p className=" text-grey mb-4">
        {time.getMonth() < 10 && "0"}
        {time.getMonth()}.{time.getDate()}
      </p>
      <span className="w-full h-[0.5px] bg-greenLight "></span>
      <div className="flex gap-2 py-5 w-full overflow-x-scroll items-center content-center">
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
