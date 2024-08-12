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
  isError,
  errorMessage,
  clickDelete,
}) => {
  console.log(isError);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex border-[1px] rounded-md px-3 py-2 justify-between items-center ">
        <input
          type={type}
          className={`outline-none w-4/5 ${
            isError === true && "border-red-500"
          }`}
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
      {isError && (
        <p class="text-red-500 text-s text-left mt-2">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
