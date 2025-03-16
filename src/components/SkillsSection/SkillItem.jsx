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

  // GSAP animation effect
  useEffect(() => {
    if (skillRef.current) {
      gsap.fromTo(
        skillRef.current,
        {
          opacity: 0,
          scale: 0.9, // Starts slightly smaller
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5, // Quick but smooth animation
          scrollTrigger: {
            trigger: skillRef.current,
            start: "top 85%", // Appears as soon as it enters viewport
            toggleActions: "play reverse play reverse", // Smooth re-appear on scroll
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
      {/* Skill Selection Buttons */}
      <div className="flex flex-col font-bold items-center justify-center w-full mt-4 mb-4 gap-3 md:flex-row">
        {["programming", "web", "developer", "course"].map((skill) => (
          <div
            key={skill}
            className="group relative w-64  font-bold text-md rounded-lg shadow-md text-center transition-all hover:scale-105 border-[0.5px] border-blue-500"
          >
            <p
              data-value={skill}
              className="text-[#4F75FF] cursor-pointer hover:text-white p-3"
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

      {/* Display Selected Skill Section */}
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
