import { About, Country, Footer, Header, MainMain, Map, News, Slider } from "../components";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full items-center">
        <div className="max-w-[1308px] w-full">
          <Country />
          <Slider />
          <MainMain />
          <About />
          <Map />
          <News />
        </div>
      </div>
          <Footer />
    </div>
  );
};
export default Main;
