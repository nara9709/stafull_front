import React from "react";
import { TiDelete } from "react-icons/ti";

import { useTranslation } from "react-i18next";

const Input = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  isRequired,
  iserror,
  errormessage,
  clickDelete,
}) => {
  console.log(iserror);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex border-[1px] rounded-md px-3 py-2 justify-between items-center  ">
        <input
          type={type}
          className={`outline-none w-4/5 ${iserror && "border-red-500"}`}
          placeholder={`${t(placeholder)}`}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          required={isRequired}
        />

        <TiDelete
          size={"1.8rem"}
          color="grey"
          onClick={clickDelete ? clickDelete : () => onChange("")}
          className="hover:cursor-pointer"
        />
      </div>
      {iserror && (
        <p class="text-red-500 text-s text-left mt-2">{errormessage}</p>
      )}
    </>
  );
};

export default Input;
