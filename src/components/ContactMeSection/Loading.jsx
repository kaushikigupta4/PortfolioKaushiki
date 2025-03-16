import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = () => {
  const ballsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ballsRef.current,
      { y: 0, opacity: 0.5 }, // Start position
      {
        y: -.5, // Moves up
        opacity: 1,
        repeat: -1, // Infinite loop
        yoyo: true, // Moves up and down
        ease: "power1.inOut",
        duration: 0.6,
        stagger: 0.2, // Delays between animations
      }
    );
  }, []);

  return (
    <div className="flex gap-2 justify-center items-center mt-10">
      {["xs", "sm", "md", "lg", "xl"].map((size, index) => (
        <span
          key={index}
          ref={(el) => (ballsRef.current[index] = el)}
          className={`loading loading-ball loading-${size}`}
        ></span>
        
      ))}
    </div>
  );
};

export default Loading;
