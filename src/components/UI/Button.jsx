import React from "react";

const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full text-lg bg-gray-300 p-3 text-white rounded-sm mt-6"
    >
      {btnText}
    </button>
  );
};
export default Button;
