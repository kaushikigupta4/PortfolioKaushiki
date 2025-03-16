import image1 from "../../assets/Azure SQL Database.svg";
import image2 from "../../assets/Windows 8.svg";
import image3 from "../../assets/NetworkX.svg";
import image4 from "../../assets/icons8-c-programming.svg";

import { motion } from "framer-motion";

const skills = [
  { name: "Database Management System", img: image1 },
  { name: "Operating Systems", img: image2 },
  { name: "Computer Networks", img: image3 },
  { name: "Object Oriented Programming", img: image4 },
];

const CourseSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center 
            w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] 
             rounded-full text-center  shadow-md"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]  
             sm:p-3 rounded-full "
          />
         
        </motion.div>
      ))}
    </div>
  );
};

export default CourseSection;
