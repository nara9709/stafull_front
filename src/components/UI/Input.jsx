import React from "react";
import { TiDelete } from "react-icons/ti";

import { useTranslation } from "react-i18next";

const Input = ({ type, placeholder, onChange, value }) => {
  const { t } = useTranslation();
  return (
    <div className="flex border-[1px] rounded-md px-3 py-2 justify-between  ">
      <input
        type={type}
        className=" outline-none w-4/5"
        placeholder={`${t(placeholder)}`}
        name="id"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <TiDelete
        size={"2rem"}
        color="grey"
        onClick={() => onChange("")}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default Input;
