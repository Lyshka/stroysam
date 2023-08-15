import { Country, Header, MainMain, Slider } from "../components";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full items-center">
        <div className="max-w-[1308px] w-full">
          <Country />
          <Slider />
          <MainMain />
        </div>
      </div>
    </div>
  );
};
export default Main;
