import ProjectBody from "./ProjectBody.jsx";
import { useEffect } from "react";
import gsap from "gsap";

const ProjectMain = () => {
  useEffect(() => {
    gsap.to(".border-line", {
      y: "100vh",
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      className="relative flex flex-col gap-12 justify-start items-center w-full mt-20"
      style={{
        background: `
      radial-gradient(circle at top left, rgba(246,177,206,0.50), transparent 55%),
      radial-gradient(circle at bottom right, rgba(61,182,177,0.50), transparent 55%)
    `
      }}
     
    >

      {/* Soft Pink Floating Border Lines */}
      <div
        className="absolute top-0 left-[15px] w-[2px] h-full opacity-60 border-line"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #F6B1CE, transparent)",
        }}
      ></div>

      <div
        className="absolute top-0 right-[15px] w-[2px] h-full opacity-60 border-line"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #F6B1CE, transparent)",
        }}
      ></div>

      {/* Title Section */}
      <div className="mt-20 text-center flex flex-col items-center">
        <h1
          className="text-5xl sm:text-7xl font-extrabold tracking-wide"
          style={{ color: "#1581BF" }}
        >
          Projects
        </h1>

        {/* Pink Underline Accent */}
        <div
          className="h-[6px] rounded-full mt-3 w-28"
          style={{ backgroundColor: "#F6B1CE" }}
        ></div>
      </div>

      {/* Project Content */}
      <div id="projects" className="w-full px-4 md:px-12 lg:px-20 mt-10">
        <ProjectBody />
      </div>
    </div>
  );
};

export default ProjectMain;
