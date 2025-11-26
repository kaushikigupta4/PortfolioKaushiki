import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroMain = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const lines = bgRef.current.querySelectorAll(".light-line");

    lines.forEach((line, index) => {
      gsap.to(line, {
        x: "120vw",
        duration: 8 + index * 1.5,
        repeat: -1,
        ease: "power1.inOut",
        delay: index * 1.2,
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Pastel Background Streaks */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="light-line absolute w-[200px] h-full opacity-40 blur-[70px]"
            style={{
              top: `${i * 15}%`,
              left: `${-200 + i * 60}px`,
              transform: "rotate(-18deg)",
              filter: "blur(90px)",
              background: `linear-gradient(90deg,
                transparent,
                ${i % 2 === 0 ? "#F6B1CE" : "#1581BF"},
                ${i % 2 === 0 ? "#3DB6B1" : "#CCE5CF"},
                transparent
              )`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center lg:justify-center w-full ">
        {/* Text */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <HeroText />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
