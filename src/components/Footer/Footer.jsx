import React from "react";
import {telegram, watsUp, viber, instagram} from "../../assets/img"

const Footer = () => {
    const socials = [
        {
            img: instagram,
            url: "",
        },
        {
            img: telegram,
            url: "",
        },
        {
            img: watsUp,
            url: "",
        },
        {
            img: viber,
            url: "",
        },
    ]

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white shadowFooter h-full pt-8 pb-4">
      <div className="max-w-[1308px] border-b pb-14 w-full flex justify-between items-center">
        <div className="flex flex-col justify-start items-start gap-y-6">
          <h1 className="text-2xl font-bold">
            Строй<span className="text-[#FFC246]">Сам</span>
          </h1>

          <ul className="flex flex-col justify-start items-start gap-y-4">
            <li className="leading-4">О компании</li>
            <li className="leading-4">Контакты</li>
            <li className="leading-4">Реклама</li>
          </ul>
        </div>
        <div className="flex justify-end items-end flex-col gap-y-2">
            <h3 className="leading-6 text-lg">info@stroysam.by</h3>
            <h3 className="leading-6 text-lg font-bold">8 029 725-86-56</h3>
            <div className="flex gap-x-4">
                {
                    socials.map(({img}, idx) => (
                        <img src={img} alt="social"/>
                    ))
                }
            </div>
        </div>
      </div>

      <h2 className="pt-4 text-sm">© 2023 СтройСам</h2>
    </div>
  );
};

export default Footer;
