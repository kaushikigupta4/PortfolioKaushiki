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
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">

        {eduSection.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="
              flex flex-col lg:flex-row items-center gap-4
              p-6 w-full
              rounded-3xl bg-white 
              
              transition-all hover:scale-105 
            "
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F6B1CE]/20">
              <FaGraduationCap className="w-10 h-10 text-[#1581BF]" />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold" style={{ color: "#1581BF" }}>
                {edu.name}
              </p>
              <p className="mt-1 font-medium text-gray-700">
                {edu.college}
              </p>
              <p className="mt-1 text-gray-600 font-medium">
                Grade:{" "}
                <span className="font-semibold" style={{ color: "#3DB6B1" }}>
                  {edu.grade}
                </span>
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Education;
