import SkillsPic from "./SkillsPic";
import SkillsText from "./SkillsText";

const SkillsMain = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mx-auto max-w-[1350px] justify-between relative mt-5 p-6 sm:p-18" id="skills">
      
    
      <div className="flex-1 sm:w-1/2">
        <SkillsText />
      </div>

      <div className="w-[400px] h-[400px] flex items-center justify-center">
        <SkillsPic />
      </div>
      
    </div>
  );
};

export default SkillsMain;
