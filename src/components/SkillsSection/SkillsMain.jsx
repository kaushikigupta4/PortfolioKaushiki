import SkillItem from "./SkillItem";
import SkillsPic from "./SkillsPic";
import SkillsText from "./SkillsText";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsMain = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".gsapabout");

    elements.forEach((el, index) => {
      const screenWidth = window.innerWidth;
      let moveY = 100;

      if (screenWidth <= 360) {
        moveY = index % 2 === 0 ? -100 : 100;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y: moveY },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="
        flex flex-col mx-auto relative 
        max-w-[1350px] w-full
        px-6 sm:px-8 md:px-12 lg:px-28
        mt-16 py-10
        bg-white
      "
      id="skills"
    >
      {/* Skills Heading */}
      <h1
        className="
          text-5xl sm:text-6xl font-extrabold 
          text-center mt-6 mb-12
        "
        style={{ color: "#1581BF" }}  // palette blue
      >
        Skills
      </h1>

      {/* Skills Content */}
      <div className="
        flex flex-col md:flex-row 
        items-center sm:justify-between
        gap-10 sm:gap-0 
      ">
        <div className="w-full sm:w-1/3 flex justify-center gsapabout">
          <SkillsPic />
        </div>

        <div
          className="
            w-full sm:w-2/3 
            px-6 text-center sm:text-left 
            gsapabout
            bg-white p-6 rounded-3xl
          "
        >
          <SkillsText />
        </div>
      </div>

      {/* Skill Items */}
      <div
        className="
          mt-12 
          bg-white p-6 md:p-8 
          rounded-3xl shadow-md
          border border-[#F6B1CE]
          gsapabout
        "
      >
        <SkillItem />
      </div>
    </div>
  );
};

export default SkillsMain;
