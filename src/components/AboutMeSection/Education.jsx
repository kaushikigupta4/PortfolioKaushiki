import { FaGraduationCap } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const eduSection = [
  {
    name: "Bachelor of Technology (Information Technology)",
    college: "JSS Academy of Technical Education, Noida",
    grade: "8.49",
  },
  {
    name: "Intermediate",
    college: "Metropolitan School, Gorakhpur, Uttar Pradesh",
    grade: "93.0%",
  },
  {
    name: "High School",
    college: "Metropolitan School, Gorakhpur, Uttar Pradesh",
    grade: "94.8%",
  },
];

const Education = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.9, // Slightly smaller initially
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3, // Fast animation
          scrollTrigger: {
            trigger: el, // Trigger when the element enters the viewport
            start: "top 95%", // Ensures it appears instantly as it reaches near the viewport
            toggleActions: "play reverse play reverse", // Smooth re-appear on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-5">
        {eduSection.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="flex flex-col lg:flex-row items-center p-6 md:p-3 sm:p-2
            rounded-xl bg-gradient-to-br from-[#081B4B] via-[#143D81] to-[#1E5AB5]  w-full transition-all hover:scale-105
            md:w-full lg:gap-3 shadow-lg shadow-indigo-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16">
              <FaGraduationCap className="w-16 h-16 text-[#4F75FF]" />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left p-3">
              <p className="text-lg text-white font-bold">{edu.name}</p>
              <p className="text-gray-200">{edu.college}</p>
              <p className="text-gray-300">Grade: {edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
