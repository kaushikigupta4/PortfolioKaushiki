import { useState } from "react";
import ProgrammingSection from "./ProgrammingSection";
import ToolsSection from "./ToolsSection";
import WebSection from "./WebSection";
import CourseSection from "./CourseSection";

const SkillsText = () => {
  const [skills, setSkills] = useState("programming");

  const handleHover = (e) => {
    setSkills(e.target.dataset.value);
  };

  return (
    <div className="flex flex-col items-center lg:items-start lg:w-full lg:px-20">
   
      <h1 className="text-6xl mt-4 text-[#6146E0] lg:text-left sm:text-center w-full">
        Skills
      </h1>

      <div className="mt-4 text-gray-700 lg:text-left sm:text-center max-w-2xl w-full">
        I have experience in full-stack development, working with React.js, Node.js, Express, and MongoDB to build web applications. I am familiar with state management using Redux and Zustand, as well as database management with SQL and NoSQL. I use Git and GitHub for version control.
      </div>

    
      <div className="flex lg:flex-row sm:flex-col font-bold gap-4 p-4 m-4 items-center w-full">
        {["programming", "web", "developer", "course"].map((skill) => (
          <div key={skill} className="group relative w-64 px-6 py-2 font-bold text-md rounded-lg shadow-md text-center">
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

     
      <div className="p-4 m-4 w-full lg:text-left sm:text-center">
        {skills === "programming" && <ProgrammingSection />}
        {skills === "developer" && <ToolsSection />}
        {skills === "web" && <WebSection />}
        {skills === "course" && <CourseSection />}
      </div>
    </div>
  );
};

export default SkillsText;
