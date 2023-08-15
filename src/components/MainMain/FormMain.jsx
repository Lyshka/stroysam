import { useState } from "react";
import { search, burgerSearch, arrowDown } from "../../assets/img";

const FormMain = () => {
  const [products, setProducts] = useState("goods");
  const [numeric, setNumeric] = useState("");

  const handleNumeric = (e) => {
    let text = e.target.value;

    text = text.replace(/[^\d.]/g, "");
    setNumeric(text);
  };

  return (
    <div className="w-[400px] sticky top-20 h-full flex flex-col gap-y-6 justify-center items-center">
      <div className="p-4 bg-white rounded-lg shadowFormMain flex flex-col justify-center items-center gap-y-2">
        <div className="flex w-full border border-[#D8D8D8] rounded-lg p-2">
          <button
            onClick={() => setProducts("goods")}
            className={`px-4 py-2 rounded text-sm leading-4 w-full ${
              products === "goods" ? "bg-[#FFC246] font-bold" : ""
            }`}
          >
            Товары
          </button>
          <button
            onClick={() => setProducts("bid")}
            className={`px-4 py-2 rounded text-sm w-full leading-4 ${
              products === "bid" ? "bg-[#FFC246] font-bold" : ""
            }`}
          >
            Заявки
          </button>
        </div>
        <form className="relative w-full">
          <input
            className="relative pl-[72px] pr-12 z-10 py-4 rounded-lg border border-[#D8D8D8] bg-white placeholder:text-[#7A7A7A]"
            placeholder="Найти товар"
            type="text"
          />
          <div className="absolute px-6 top-0 flex justify-between items-center h-full w-full">
            <img src={burgerSearch} className="z-20" alt="burgerSearch" />
            <img src={search} className="z-20" alt="search" />
          </div>
        </form>
      </div>
      <div className="p-4 flex flex-col bg-white rounded-lg shadowFormMain justify-start items-start gap-y-6">
        <h3 className="text-lg font-bold leading-4 text-left">
          Запрос для поставщиков
        </h3>
        <form className="relative w-full">
          <div className="flex justify-center items-center flex-col gap-y-4">
            <div className="relative w-full">
              <input
                className="relative pl-[72px] z-10 py-4 rounded-lg border border-[#D8D8D8] pr-12 bg-white placeholder:text-[#7A7A7A]"
                placeholder="Продукт"
                type="text"
              />
              <div className="absolute px-6 top-0 flex justify-between items-center h-full w-full">
                <img src={burgerSearch} className="z-20" alt="burgerSearch" />
                <img src={search} className="z-20" alt="search" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-[10px]">
              <div className="relative">
                <input
                  value={numeric}
                  onChange={handleNumeric}
                  placeholder="1"
                  className="px-6 pl-4 pr-12 rounded-lg border border-[#D8D8D8] relative z-10 placeholder:text-[#7A7A7A] bg-white leading-4"
                  type="text"
                  contextMenu={false}
                />
                <div className="absolute top-0 w-full h-full flex justify-end items-center px-4">
                  <span className="text-[#7A7A7A] z-20 leading-4">шт.</span>
                </div>
              </div>
              <div className="relative px-4 w-full cursor-pointer py-3 rounded-lg border border-[#D8D8D8] bg-white flex justify-between items-center">
                <span>Могилев</span>
                <img src={arrowDown} alt="arrowDown" />
              </div>
            </div>
            <input
              placeholder="Мобильный телефон"
              className="placeholder:text-[#7A7A7A] bg-white leading-4 px-6 rounded-lg border border-[#D8D8D8]"
              type="text"
            />
            <button disabled className="leading-4 w-full px-6 py-3 rounded-md bg-[#F0F0F0] text-sm font-bold text-[#7A7A7A]">Узнать цены</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormMain;
