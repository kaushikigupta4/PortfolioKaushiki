import image1 from "../../assets/icons8-java.svg";
import image2 from "../../assets/icons8-javascript.svg";
import image3 from "../../assets/icons8-c-programming.svg";
import image4 from "../../assets/icons8-c++.svg";
import image5 from "../../assets/icons8-python.svg";

const skills = [
  { name: "Java", img: image1 },
  { name: "JavaScript", img: image2 },
  { name: "C", img: image3 },
  { name: "C++", img: image4 },
  { name: "Python", img: image5 }
];

const ProgrammingSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-start gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 m-1 items-center justify-center 
          w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-[#EBEDFF] 
          rounded-lg text-center p-2 shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] 
              rounded-full bg-white p-2" 
            />
          </div>
          <div className="text text-xs sm:text-sm font-semibold">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingSection;
