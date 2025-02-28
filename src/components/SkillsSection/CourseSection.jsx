import image1 from "../../assets/Azure SQL Database.svg";
import image2 from "../../assets/Windows 8.svg";
import image3 from "../../assets/NetworkX.svg";
import image4 from "../../assets/icons8-c-programming.svg";

const skills = [
  { name: "Database Management System", img: image1 },
  { name: "Operating Systems", img: image2 },
  { name: "Computer Networks", img: image3 },
  { name: "Object Oriented Programming", img: image4 }
];

const CourseSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-start gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 m-1 items-center justify-center 
            w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] 
            bg-[#EBEDFF] rounded-lg text-center p-1 shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="bg-white w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] 
              p-2 sm:p-3 rounded-full" 
            />
          </div>
          <div className="text text-xs sm:text-sm font-semibold">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
