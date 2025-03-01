import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center lg:justify-center px-6 md:py-35 lg:py-20 w-full sm:pb-6 bg-[#EBECFB] z-2 md:px-20">
     
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <HeroText />
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
