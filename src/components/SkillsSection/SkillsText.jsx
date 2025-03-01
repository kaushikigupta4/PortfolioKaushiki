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
    <div className="flex flex-col items-center lg:items-start lg:w-full lg:px-20 mx-auto p-6">
   
     
    

      <div className="mt-4 text-gray-700 lg:text-left sm:text-center max-w-2xl w-full lg:text-xl">
        I have experience in full-stack development, working with React.js, Node.js, Express, and MongoDB to build web applications. I am familiar with state management using Redux and Zustand, as well as database management with SQL and NoSQL. I use Git and GitHub for version control.
      </div>

    
      
     
     
    </div>
  );
};

export default SkillsText;
