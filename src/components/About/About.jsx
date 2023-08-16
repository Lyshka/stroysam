import { about } from "../../assets/img";

const About = () => {
  return (
    <div className="py-20 flex justify-center items-center gap-x-6">
      <img src={about} alt="about" />
      <div className="flex flex-col justify-start items-start gap-y-6">
        <div className="flex flex-col justify-start items-start gap-y-4">
          <h2 className="text-[32px] font-bold leading-10">СтройСам — это маркетплейс поставщиков стройматериалов и услуг</h2>
          <p className="leading-6">С помощью нашего сервиса вы найдете цены на все стройматериалы в России. Разместите бесплатно заказ на нашей строительной бирже и получите десятки предложений от ближайших поставщиков.</p>
        </div>

        <button className="px-6 py-3 rounded-md bg-[#F0F0F0] text-sm font-bold leading-4 text-[#7A7A7A]">Подробнее</button>
      </div>
    </div>
  );
};
export default About;
