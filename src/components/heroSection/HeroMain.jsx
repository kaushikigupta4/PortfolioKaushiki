import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-6 py-10 w-full mt-[50px] md:mt-[100px] bg-[#EBECFB] z-2">
     
      <div className="w-full md:w-1/2 flex justify-center md:justify-start px-6 md:pl-[190px]">
        <HeroText />
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6 md:pr-[190px]">
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
