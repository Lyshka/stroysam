import { useState } from "react";
import { card, arrowDown, arrowUp } from "../../assets/img";

const CardMain = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <div className="px-6 relative py-4 rounded-t-lg w-full bg-white shadowCard flex flex-col items-start justify-start gap-y-4">
      <img src={card} className="border-b" alt="card" />
      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg font-bold leading-4">Бетон</h2>
        {open ? (
          <img
            src={arrowUp}
            alt="arrowDown"
            className="cursor-pointer"
            onClick={handleOpen}
          />
        ) : (
          <img
            src={arrowDown}
            alt="arrowDown"
            className="cursor-pointer"
            onClick={handleOpen}
          />
        )}
      </div>
      {open && (
        <div className="flex w-full px-6 pb-4 z-10 left-0 bg-white absolute top-[100%] rounded-lg flex-col justify-start items-start gap-y-4">
          <h4 className="leading-5 text-[#7A7A7A]">
            Средства обнаружения и тушения
          </h4>
          <h4 className="leading-5 text-[#7A7A7A]">Раствор</h4>
          <h4 className="leading-5 text-[#7A7A7A]">Керамзитобетон</h4>
          <h4 className="leading-5 text-[#7A7A7A]">Пескобетон</h4>
        </div>
      )}
    </div>
  );
};
export default CardMain;
