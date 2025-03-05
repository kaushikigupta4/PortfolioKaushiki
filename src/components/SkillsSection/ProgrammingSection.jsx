import image1 from "../../assets/icons8-java.svg";
import image2 from "../../assets/icons8-javascript.svg";
import image3 from "../../assets/icons8-c-programming.svg";
import image4 from "../../assets/icons8-c++.svg";
import image5 from "../../assets/icons8-python.svg";

import { motion} from "framer-motion"

const skills = [
  { name: "Java", img: image1 },
  { name: "JavaScript", img: image2 },
  { name: "C", img: image3 },
  { name: "C++", img: image4 },
  { name: "Python", img: image5 }
];

const ProgrammingSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-start gap-1 mx-auto">
      {skills.map((skill, index) => (
        <motion.div
       
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        
          key={index}
          className="flex flex-col gap-1 m-1 items-center justify-center 
          w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] bg-[#EBEDFF] 
          rounded-lg text-center p-2 shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]
              rounded-full bg-white p-2" 
            />
          </div>
          <div className="text text-xs sm:text-sm font-semibold">{skill.name}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProgrammingSection;
