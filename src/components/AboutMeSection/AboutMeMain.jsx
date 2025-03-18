import AboutMeText from "./AboutMeText";
import AboutMePic from "./AboutMePic";
import Education from "./Education";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMeMain = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".gsapabout");
  
    elements.forEach((el, index) => {
      let isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      let moveDistance = isSmallScreen ? 20 : index % 2 === 0 ? -60 : 60;
      let xMove = isSmallScreen ? 0 : moveDistance;
      let yMove = isSmallScreen ? 40 : 0;
  
      gsap.fromTo(
        el,
        { opacity: 0, x: xMove, y: yMove },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);
  

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:px-6 md:px-12 max-w-[1350px] mx-auto justify-center items-center">
        <div className="w-full lg:w-1/2 flex justify-center gsapabout">
          <AboutMePic />
        </div>

        <div className="w-full lg:w-1/2 m-7  p-2 gsapabout">
          <AboutMeText />
        </div>
      </div>

      <div className="w-[100%] mt-10 md:mt-16 px-6 gsapabout">
        <Education />
      </div>
    </div>
  );
};

export default AboutMeMain;
