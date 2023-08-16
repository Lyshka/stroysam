import {news} from "../../assets/img"

const CardNews = () => {
  return (
    <div className="flex cursor-pointer justify-start items-start flex-col gap-y-6">
      <div className="flex flex-col justify-start items-start gap-y-4">
        <img src={news} alt="news" />
        <div className="flex flex-col justify-start items-start gap-y-2">
          <h3 className="text-lg font-bold leading-6">Цены на новостройки в Могилеве</h3>
          <p className="text-[#7A7A7A] text-sm leading-5 text-ellipsis overflow-hidden h-10">По данным компании, за квартал цена квадратного метра в проектах комфорт- и бизнес-класса выросла на 2%. При этом в премиум-сегменте стоимость «квадрата», напротив, снизилась на 2%.</p>
        </div>
      </div>

      <span className="leading-4 text-sm">2 июня 2023</span>
    </div>
  );
};
export default CardNews;
