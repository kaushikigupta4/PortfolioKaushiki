import image1 from "../../assets/icons8-java.svg";
import image2 from "../../assets/icons8-javascript.svg";
import image3 from "../../assets/icons8-c-programming.svg";
import image4 from "../../assets/icons8-c++.svg";
import image5 from "../../assets/icons8-python.svg";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", img: image1 },
  { name: "JavaScript", img: image2 },
  { name: "C", img: image3 },
  { name: "C++", img: image4 },
  { name: "Python", img: image5 }
];

const ProgrammingSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-center  mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center 
                     w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] 
                      rounded-full text-center shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] 
                         rounded-full "
            />
          </div>
          
        </motion.div>
      ))}
    </div>
  );
};

export default ProgrammingSection;
