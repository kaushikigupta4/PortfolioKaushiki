import { useState } from "react";
import ProgrammingSection from "./ProgrammingSection";
import ToolsSection from "./ToolsSection";
import WebSection from "./WebSection";
import CourseSection from "./CourseSection";

const SkillItem = () => {
      const [skills, setSkills] = useState("programming");

  const handleHover = (e) => {
    setSkills(e.target.dataset.value);
  };
  return (
    <div>
       <div className="flex flex-col font-bold items-center w-full mt-4 mb-4 gap-3 md:flex-row">
        {["programming", "web", "developer", "course"].map((skill) => (
          <div key={skill} className="group relative w-64 px-6 py-2 font-bold text-md rounded-lg shadow-md text-center ">
            <p
              data-value={skill}
              className="text-[#6146E0] cursor-pointer hover:text-blue-800 hover:scale-105"
              onMouseEnter={handleHover}
            >
              {skill === "programming" ? "Programming Skills" :
               skill === "web" ? "Web Development" :
               skill === "developer" ? "Developer Tools" :
               "Course Work"}
            </p>
            <div className="absolute left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
      <div className="w-full lg:text-left sm:text-center  p-2">
        {skills === "programming" && <ProgrammingSection />}
        {skills === "developer" && <ToolsSection />}
        {skills === "web" && <WebSection />}
        {skills === "course" && <CourseSection />}
      </div>

    </div>
  )
}

export default SkillItem
