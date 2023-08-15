import { plus, people } from "../../assets/img";

const Header = () => {
  return (
    <div className="flex z-30 justify-center items-center bg-white sticky top-0 w-full shadowHeader h-[72px]">
      <div className="max-w-[1308px] w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Строй<span className="text-[#FFC246]">Сам</span>
        </h1>

        <div className="flex gap-x-12 justify-center items-center">
          <button className="flex px-4 py-2 bg-[#FFC246] rounded-md gap-x-[10px] justify-center items-center">
            <img src={plus} alt="" />
            <span className="leading-4 font-bold text-sm">Разместить заказ</span>
          </button>
          <button className="flex px-4 py-2 gap-x-[10px] justify-center items-center">
            <img src={people} alt="" />
            <span className="leading-4">Личный кабинет</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
