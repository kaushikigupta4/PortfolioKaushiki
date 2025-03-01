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
    <div className="flex w-full flex-wrap justify-start gap-1 mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 m-1 items-center justify-center 
          w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] 
          bg-[#EBEDFF] rounded-lg text-center p-2 shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="bg-white w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]  
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
