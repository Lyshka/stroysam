import React from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <div className="h-[72px] pl-[306px] bg-white sticky top-0 pb-[30px] pt-[18px] w-full shadowHeader">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">
          Строй<span className="text-[#FFC246]">Сам</span>
        </h1>
      </Link>
    </div>
  );
};

export default HeaderAuth;
