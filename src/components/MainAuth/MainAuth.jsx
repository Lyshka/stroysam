import React, { useState } from "react";

import { auth, authField } from "../../assets/img";

const MainAuth = () => {
  const [password, setPassword] = useState(true);

  const handlePassword = () => {
    setPassword((prv) => !prv);
  };

  return (
    <div className="px-[306px] h-[calc(100vh-72px-277px)] gap-x-[166px] mt-12 mb-14 w-full flex justify-center items-center">
      <img src={auth} alt="auth" />

      <div className="px-[30px] shadowAuthForm w-full py-10 flex gap-y-8 flex-col justify-center items-center rounded-[15px] border border-[#DFDFDF]">
        <div>
          <h2 className="text-center text-[32px] leading-10 font-bold">
            Вход в личный кабинет
          </h2>
          <p className="text-center leading-6">
            Введите данные для авторизации
          </p>
        </div>

        <div className="w-full flex flex-col gap-y-4">
          <form className="flex flex-col gap-y-4 justify-center items-center">
            <input placeholder="Номер телефона (Email)" type="text" />
            <div className="relative w-full">
              <input
                placeholder="Введите пароль"
                type={password ? "password" : "text"}
                className="relative"
              />
              <img
                onClick={handlePassword}
                src={authField}
                alt="authField"
                className="absolute top-[18px] cursor-pointer right-6"
              />
            </div>
          </form>

          <div className="w-full flex justify-between items-center">
            <a className="leading-6 border-b border-[#333333]" href="">
              Забыли пароль?
            </a>
            <a className="leading-6 border-b border-[#333333]" href="">
              Зарегистрироваться
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-x-[10px]">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="w-full whitespace-nowrap">
              Запомнить меня
            </label>
          </div>
          <button className="px-6 py-3 bg-[#F0F0F0] rounded-md text-[#7A7A7A] font-bold text-sm">
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
