import ProjectBody from "./ProjectBody.jsx";
import { useEffect } from "react";
import gsap from "gsap";

const ProjectMain = () => {
  useEffect(() => {
    gsap.to(".border-line", {
      y: "100vh", // Moves down continuously
      duration: 4, // Slow movement
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative flex flex-col gap-8 justify-start items-center mt-16 lg:mt-0 w-full">
      
      {/* Left and Right Moving Borders (Now Closer) */}
      <div className="absolute top-0 left-[10px] w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#6146E0] to-transparent opacity-60 border-line"></div>
      <div className="absolute top-0 right-[10px] w-[1.5px] h-full bg-gradient-to-b from-transparent via-[#6146E0] to-transparent opacity-60 border-line"></div>

      {/* Title */}
      <h1 className="text-6xl sm:text-7xl font-extrabold text-[#6146E0] text-center mt-10 tracking-wide drop-shadow-[0_0_40px_rgba(90,60,220,0.9)]">
        Projects
      </h1>

      {/* Projects */}
      <div id="projects" className="w-full">
        <ProjectBody />
      </div>
    </div>
  );
};

export default ProjectMain;
