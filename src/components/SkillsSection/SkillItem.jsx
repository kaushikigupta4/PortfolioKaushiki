import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProgrammingSection from "./ProgrammingSection";
import ToolsSection from "./ToolsSection";
import WebSection from "./WebSection";
import CourseSection from "./CourseSection";

gsap.registerPlugin(ScrollTrigger);

const SkillItem = () => {
  const [skills, setSkills] = useState("programming");
  const skillRef = useRef(null);

  // GSAP animation
  useEffect(() => {
    if (skillRef.current) {
      gsap.fromTo(
        skillRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: skillRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const handleHover = (e) => {
    setSkills(e.target.dataset.value);
  };

  return (
    <div ref={skillRef}>

      {/* Skill Tabs */}
      <div className="flex flex-col font-bold items-center justify-center w-full mt-4 mb-6 gap-4 md:flex-row">
        {["programming", "web", "developer", "course"].map((skill) => (
          <div
            key={skill}
            className={`
              group relative w-64 rounded-xl shadow-sm text-center transition-all 
              hover:scale-105 cursor-pointer border 
              ${skills === skill ? "border-[#F6B1CE] bg-[#F6B1CE]/20" : "border-[#F6B1CE] bg-white"}
            `}
          >
            <p
              data-value={skill}
              className={`
                p-3 transition-all 
                ${skills === skill ? "text-[#1581BF]" : "text-[#1581BF] hover:text-[#3DB6B1]"}
              `}
              onMouseEnter={handleHover}
            >
              {skill === "programming"
                ? "Programming Skills"
                : skill === "web"
                ? "Web Development"
                : skill === "developer"
                ? "Developer Tools"
                : "Course Work"}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Skill Content */}
      <div className="w-full lg:text-left sm:text-center p-2">
        {skills === "programming" && <ProgrammingSection />}
        {skills === "developer" && <ToolsSection />}
        {skills === "web" && <WebSection />}
        {skills === "course" && <CourseSection />}
      </div>
    </div>
  );
};

export default SkillItem;
