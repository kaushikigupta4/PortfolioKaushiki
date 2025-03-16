import image1 from "../../assets/icons8-javascript.svg";
import image2 from "../../assets/icons8-html-5.svg";
import image3 from "../../assets/icons8-css3.svg";
import image4 from "../../assets/icons8-react.svg";
import image5 from "../../assets/tailwind-css.svg";
import image6 from "../../assets/icons8-nodejs.svg";
import image7 from "../../assets/icons8-express-js.svg";
import image8 from "../../assets/MongoDB.svg";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", img: image1 },
  { name: "HTML5", img: image2 },
  { name: "CSS", img: image3 },
  { name: "ReactJs", img: image4 },
  { name: "Tailwind CSS", img: image5 },
  { name: "NodeJs", img: image6 },
  { name: "ExpressJs", img: image7 },
  { name: "MongoDB", img: image8 }
];

const WebSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-center mx-auto">
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
                         rounded-full"
            />
          </div>
          
        </motion.div>
      ))}
    </div>
  );
};

export default WebSection;
