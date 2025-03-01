import SkillItem from "./SkillItem";
import SkillsPic from "./SkillsPic";
import SkillsText from "./SkillsText";

const SkillsMain = () => {
  return (
    <div
      className="flex flex-col mx-auto max-w-full justify-between relative sm:p-10 md:p-12 lg:px-[10rem] max-w-[1350px]  "
      id="skills"
    >
      <div>
        <h1 className="text-6xl mt-4 text-[#6146E0]  text-center w-full mt-10 ">
          Skills
        </h1>
      </div>

      <div className="flex flex-col sm:flex-col-reverse sm:flex-row">
       
        <div>
          <SkillsPic />
        </div>
        <div>
          <SkillsText />
        </div>
      </div>
      <div><SkillItem /></div>
     
    </div>
  );
};

export default SkillsMain;
