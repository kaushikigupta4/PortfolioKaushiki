import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMeText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50, // Start position (from below)
      },
      {
        opacity: 1,
        y: 0, // End position (original position)
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // Trigger when 90% of the element is in the viewport
          end: "top 50%", // End triggering at 50% of the element
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="flex flex-col items-center lg:items-start text-center md:text-left w-full md:max-w-full mx-auto bg-gradient-to-br from-[#081B4B] via-[#143D81] to-[#1E5AB5]
 p-6 sm:p-10 md:p-12 shadow-xl rounded-lg relative"
    >
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-[#6146E0]">
        About Me
      </h1>

      <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-md leading-relaxed">
        👋 Hi, I’m Kaushiki, a passionate Full Stack Developer who loves building
        scalable and user-friendly web applications. With a strong foundation in MERN stack
        (MongoDB, Express.js, React.js, Node.js) and other modern technologies, I bring ideas to life
        through elegant and efficient code.
      </p>

      <p className="text-gray-300 mt-4 sm:mt-5 text-base sm:text-lg md:text-md leading-relaxed">
        💡 I thrive on solving problems, optimizing performance, and creating seamless user experiences.
        Whether it's crafting intuitive UI/UX design or architecting robust backend systems,
        I enjoy every aspect of development.
      </p>

      <p className="hidden sm:block mt-4 sm:mt-5 text-base sm:text-lg md:text-md leading-relaxed text-gray-300">
        🚀 My goal is to continuously learn and innovate, collaborating with like-minded individuals
        to create meaningful digital solutions. Let's build something amazing together!
      </p>
    </div>
  );
};

export default AboutMeText;
