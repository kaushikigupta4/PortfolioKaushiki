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
      const isSmall = window.matchMedia("(max-width: 768px)").matches;

      const xMove = isSmall ? 0 : index % 2 === 0 ? -60 : 60;
      const yMove = isSmall ? 40 : 0;

      gsap.fromTo(
        el,
        { opacity: 0, x: xMove, y: yMove },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div
      className="flex flex-col gap-20 md:gap-28 py-16 "
       style={{
        background: "linear-gradient(135deg, #CCE5CF 0%, #3DB6B1 40%, #F6B1CE 100%)",
      }}
      
    >
      {/* ------- Top Section ------- */}
      <div
        className="
          flex flex-col lg:flex-row gap-12 
          max-w-[1300px] mx-auto px-6 lg:px-12 
          items-center 
        "
      >
        {/* IMAGE BOX (Mint Border) */}
        <div
          className="
            w-full lg:w-1/2 flex justify-center 
            gsapabout
            bg-white p-8 rounded-3xl shadow-md
          "
          style={{
            border: "1px solid #CCE5CF"
          }}
        >
          <AboutMePic />
        </div>

        {/* TEXT BOX (Pink Border) */}
        <div
          className="
            w-full lg:w-1/2 gsapabout
            bg-white p-8 rounded-3xl shadow-md
          "
          style={{
            border: "1px solid #F6B1CE"
          }}
        >
          <AboutMeText />
        </div>
      </div>

      {/* ------- Education Section ------- */}
      <div
        className="
          max-w-[1200px] mx-auto px-6 
          mt-10 md:mt-16 gsapabout 
          bg-white p-10 rounded-3xl shadow-md
        "
        style={{
          border: "1px solid #3DB6B1" // Teal Border
        }}
      >
        <Education />
      </div>
    </div>
  );
};

export default AboutMeMain;
