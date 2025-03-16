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
        x: "120vw", // Move smoothly across the screen
        duration: 8 + index * 1.5, // Vary duration for a natural effect
        repeat: -1,
        ease: "power1.inOut",
        delay: index * 1.2, // More staggered animation start
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0A0F2C]">
      {/* Background Light Streaks */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="light-line absolute w-[180px] h-full bg-gradient-to-r from-transparent via-[#4F75FF] to-transparent opacity-60 blur-[120px]"
            style={{
              top: `${i * 15}%`,
              left: `${-200 + i * 50}px`, // Slightly staggered start positions
              transform: "rotate(-20deg)", // Softer angle for a more natural look
              filter: "blur(120px)", // Stronger blur for a seamless blend
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center lg:justify-center px-6 md:py-35 lg:py-20 w-full sm:pb-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <HeroText />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
