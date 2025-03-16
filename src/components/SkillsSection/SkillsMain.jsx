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

      let moveY = 100; // Default movement

      if (screenWidth <= 360) {
        moveY = index % 2 === 0 ? -100 : 100; // Alternate top-bottom animation for 360px screens
      }

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: moveY, // Move from top (-100) or bottom (+100)
        },
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
      className="flex flex-col mx-auto max-w-full justify-between relative sm:p-8 md:p-12 lg:px-[8rem] max-w-[1350px] mt-8"
      id="skills"
    >
      {/* Skills Heading */}
      <h1
        id="gsapSkills"
        className="text-5xl sm:text-6xl font-extrabold text-[#6146E0] text-center mt-8 tracking-wide drop-shadow-[0_0_40px_rgba(90,60,220,0.9)]"
      >
        Skills
      </h1>

      {/* Skills Content */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 sm:gap-0">
        <div className="w-full sm:w-1/3 flex justify-center gsapabout">
          <SkillsPic />
        </div>
        <div className="w-full sm:w-2/3 px-6 text-center sm:text-left gsapabout">
          <SkillsText />
        </div>
      </div>

      {/* Skill Items */}
      <div className="mt-8">
        <SkillItem />
      </div>
    </div>
  );
};

export default SkillsMain;
