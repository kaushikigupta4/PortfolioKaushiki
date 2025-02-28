import AboutMeText from "./AboutMeText";
import AboutMePic from "./AboutMePic";
import Education from "./Education";

const AboutMeMain = () => {
  return (
    <div className="flex flex-col gap-10">
      

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 max-w-[1350px] mx-auto justify-center items-center mt-16">
      
        <div className="w-full md:w-1/2 flex justify-center">
          <AboutMePic />
        </div>

     
        <div className="w-full md:w-1/2">
          <AboutMeText />
        </div>
      </div>

   
      <div className="mt-10 md:mt-16 px-6">
        <Education />
      </div>

    </div>
  );
};

export default AboutMeMain;
