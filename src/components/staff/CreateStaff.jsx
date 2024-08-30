import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Profile from "../UI/Profile";
import { createImageFromInitials } from "../../utils/createImageFromInitials";

const CreateStaff = () => {
  const { t } = useTranslation();
  const [profileSrc, setProfileSrc] = useState(
    createImageFromInitials(500, "Staff")
  );
  const fileInputRef = useRef(null);
  const [workDay, setWorkDay] = useState([]);

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  // Set the profile image to the uploaded file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const checkWorkDay = (staffDay, day) => {
    console.log(staffDay);
    return staffDay.find((workday) => workday === day);
  };

  return (
    <section>
      <h1 className="text-2xl font-medium text-start">
        {t("staff") + t("information")}
      </h1>
      <div className="flex justify-center my-5">
        <Profile src={profileSrc} onClick={handleProfileClick} />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className="bg-[white] flex flex-col items-start p-5 text-greyText rounded-sm">
        <p>{t("name")}</p>
        <div className="flex">
          <input
            type="text"
            className=" border-b-[1px] border-grey rounded-none mr-3 w-full"
            placeholder={`${t("name")}`}
          />
          <input
            type="text"
            className=" border-b-[1px] border-grey rounded-none w-full"
            placeholder={`${t("lastName")}`}
          />
        </div>
      </div>
      <div className=" flex justify-between pt-2 pb-2">
        <span
          onClick={() => {
            debugger;
            if (checkWorkDay(workDay, "SUN")) {
              setWorkDay(() => {
                return workDay.filter((day) => day !== "SUN");
              });
            } else {
              console.log(workDay);
              setWorkDay(workDay.push("SUN"));
              console.log(workDay);
            }
          }}
          className={`${
            checkWorkDay(workDay, "SUN")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("sunday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "MON")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "MON");
              });
            } else {
              setWorkDay(workDay.push("MON"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "MON")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("monday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "TUE")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "TUE");
              });
            } else {
              setWorkDay(workDay.push("TUE"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "TUE")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("tuesday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "WEN")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "WEN");
              });
            } else {
              setWorkDay(workDay.push("WEN"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "WEN")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("wendsday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "THU")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "THU");
              });
            } else {
              setWorkDay(workDay.push("THU"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "THU")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("thursday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "FRI")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "FRI");
              });
            } else {
              setWorkDay(workDay.push("FRI"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "FRI")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("friday").substring(0, 1)}
        </span>
        <span
          onClick={() => {
            if (checkWorkDay(workDay, "SAT")) {
              return setWorkDay(() => {
                workDay.filter((day) => day !== "SAT");
              });
            } else {
              setWorkDay(workDay.push("SAT"));
            }
          }}
          className={`${
            checkWorkDay(workDay, "SAT")
              ? "bg-greenLight px-[0.5rem] py-[0.25rem] rounded-full text-greenSolid"
              : " text-grey px-[0.5rem] py-[0.25rem] "
          }`}
        >
          {t("saturday").substring(0, 1)}
        </span>
      </div>
    </section>
  );
};

export default CreateStaff;
