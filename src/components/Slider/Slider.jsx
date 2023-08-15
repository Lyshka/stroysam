import { Carousel } from "@material-tailwind/react";
import { arrowLeft, arrowRight, star, starFill } from "../../assets/img";

const Slider = () => {
  return (
    <Carousel
      prevArrow={({ handlePrev }) => (
        <div onClick={handlePrev} className="p-[10px] flex cursor-pointer justify-center items-center !absolute top-2/4 left-6 -translate-y-2/4 border-white border-2 rounded-3xl">
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <div onClick={handleNext} className="p-[10px] flex cursor-pointer justify-center items-center !absolute top-2/4 !right-6 -translate-y-2/4 border-white border-2 rounded-3xl">
          <img src={arrowRight} alt="arrowRight" />
        </div>
      )}
      className="rounded-2xl mb-10 mt-6 w-full h-[400px] overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] w-2 h-2 ${
                activeIndex === i ? "bg-[#FFC246]" : "bg-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full min-w-[1308px]">
        <img
          src={
            "https://mykaleidoscope.ru/uploads/posts/2021-04/1617616580_21-p-stena-iz-bruskov-22.jpg"
          }
          className="h-ful brightness-50 absolute right-0 w-full object-cover"
          alt="slider"
        />

        <div className="relative px-[125px] py-[104px] flex flex-col justify-start items-start gap-y-6">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-[#48DD60] font-bold leading-4 text-sm">
                7.2
              </span>
              <div className="flex justify-center items-center">
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <h2 className="leading-10 font-bold text-[32px] text-white">
              Компания «БлюПринт»
            </h2>
          </div>
          <p className="text-lg w-[397px] leading-6 text-white">
            Лучший поставщик дерева на нашем сервисе с февраля 2023 года
          </p>
          <button className="rounded-md bg-[#F0F0F0] px-6 py-3 text-sm leading-4 font-bold text-[#7A7A7A]">
            Связаться с менеджером
          </button>
        </div>
      </div>
      <div className="relative h-full min-w-[1308px]">
        <img
          src={
            "https://mykaleidoscope.ru/uploads/posts/2021-04/1617616580_21-p-stena-iz-bruskov-22.jpg"
          }
          className="h-ful brightness-50 absolute right-0 w-full object-cover"
          alt="slider"
        />

        <div className="relative px-[125px] py-[104px] flex flex-col justify-start items-start gap-y-6">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-[#48DD60] font-bold leading-4 text-sm">
                7.2
              </span>
              <div className="flex justify-center items-center">
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <h2 className="leading-10 font-bold text-[32px] text-white">
              Компания «БлюПринт»
            </h2>
          </div>
          <p className="text-lg w-[397px] leading-6 text-white">
            Лучший поставщик дерева на нашем сервисе с февраля 2023 года
          </p>
          <button className="rounded-md bg-[#F0F0F0] px-6 py-3 text-sm leading-4 font-bold text-[#7A7A7A]">
            Связаться с менеджером
          </button>
        </div>
      </div>
      <div className="relative h-full min-w-[1308px]">
        <img
          src={
            "https://mykaleidoscope.ru/uploads/posts/2021-04/1617616580_21-p-stena-iz-bruskov-22.jpg"
          }
          className="h-ful brightness-50 absolute right-0 w-full object-cover"
          alt="slider"
        />

        <div className="relative px-[125px] py-[104px] flex flex-col justify-start items-start gap-y-6">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-[#48DD60] font-bold leading-4 text-sm">
                7.2
              </span>
              <div className="flex justify-center items-center">
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <h2 className="leading-10 font-bold text-[32px] text-white">
              Компания «БлюПринт»
            </h2>
          </div>
          <p className="text-lg w-[397px] leading-6 text-white">
            Лучший поставщик дерева на нашем сервисе с февраля 2023 года
          </p>
          <button className="rounded-md bg-[#F0F0F0] px-6 py-3 text-sm leading-4 font-bold text-[#7A7A7A]">
            Связаться с менеджером
          </button>
        </div>
      </div>
      <div className="relative h-full min-w-[1308px]">
        <img
          src={
            "https://mykaleidoscope.ru/uploads/posts/2021-04/1617616580_21-p-stena-iz-bruskov-22.jpg"
          }
          className="h-ful brightness-50 absolute right-0 w-full object-cover"
          alt="slider"
        />

        <div className="relative px-[125px] py-[104px] flex flex-col justify-start items-start gap-y-6">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-[#48DD60] font-bold leading-4 text-sm">
                7.2
              </span>
              <div className="flex justify-center items-center">
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={starFill} alt="starFill" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <h2 className="leading-10 font-bold text-[32px] text-white">
              Компания «БлюПринт»
            </h2>
          </div>
          <p className="text-lg w-[397px] leading-6 text-white">
            Лучший поставщик дерева на нашем сервисе с февраля 2023 года
          </p>
          <button className="rounded-md bg-[#F0F0F0] px-6 py-3 text-sm leading-4 font-bold text-[#7A7A7A]">
            Связаться с менеджером
          </button>
        </div>
      </div>
    </Carousel>
  );
};
export default Slider;
