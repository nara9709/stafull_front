import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <h1 className=" font-extrabold text-3xl text-[green] py-5">STAFull</h1>
    </Link>
  );
};

export default Header;
