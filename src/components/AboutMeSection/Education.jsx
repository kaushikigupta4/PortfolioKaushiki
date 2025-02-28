import { FaGraduationCap } from "react-icons/fa6";

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
  }
];

const Education = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 mx-auto mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        {eduSection.map((edu, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 md:p-10 
            rounded-xl shadow-lg bg-[#E7F8FF] w-full md:w-1/3 transition-all hover:scale-105"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16">
              <FaGraduationCap className="w-16 h-16 text-[#6146E0]" />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold">{edu.name}</p>
              <p className="text-gray-700">{edu.college}</p>
              <p className="text-gray-500">Grade: {edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
