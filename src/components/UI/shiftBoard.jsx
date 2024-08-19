import React from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const ShiftBoard = ({ day, date, staffList }) => {
  const navigation = useNavigate();
  const onClick = (staffId) => {
    navigation(`/staff/${staffId}`);
  };

  return (
    <div className="flex w-full h-20 bg-greyBg text-greyText py-4 items-center rounded-lg mt-3 ">
      <div className="px-4 w-[20%]">
        <p className="text-sm">{day.split("")[0]}</p>
        <p className="text-sm">{date}</p>
      </div>
      <div className="w-[0.5px] bg-grey h-full"></div>
      <div className="flex overflow-x-auto items-center px-3 pt-4">
        {staffList?.map((staff) => {
          return (
            <div key={staff.id} className="mr-2">
              <Profile
                src={staff.imageurl}
                alt={staff.lastname}
                onClick={() => onClick(staff.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShiftBoard;
