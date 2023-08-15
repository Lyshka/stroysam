import {arrowDown, region} from "../../assets/img"

const Country = () => {
  return (
    <div className="mt-4 w-full flex justify-between items-center">
      <div className="flex cursor-pointer gap-x-2 justify-center items-center">
        <img src={region} alt="region" />
        <span className="leading-4 text-[#7A7A7A]">Могилев</span>
        <img src={arrowDown} alt="arrowDown" />
      </div>
      <div>&nbsp;</div>
    </div>
  );
};
export default Country;
