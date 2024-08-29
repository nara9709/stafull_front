import React from "react";

const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full text-lg bg-greenSolid p-3 text-[white] rounded-md mt-6"
    >
      {btnText}
    </button>
  );
};
export default Button;
