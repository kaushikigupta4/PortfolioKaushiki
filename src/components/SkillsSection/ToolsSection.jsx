import image1 from "../../assets/Visual Studio Code (VS Code).svg";
import image2 from "../../assets/Git.svg";
import image3 from "../../assets/icons8-github.svg";
import image4 from "../../assets/IntelliJ IDEA.svg";
import { motion } from "framer-motion";

const tools = [
  { name: "VS Code", img: image1 },
  { name: "Git", img: image2 },
  { name: "GitHub", img: image3 },
  { name: "IntelliJ IDEA", img: image4 }
];

const ToolsSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-center  mx-auto">
      {tools.map((tool, index) => (
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
              src={tool.img} 
              alt={tool.name} 
              className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] 
                         rounded-full "
            />
          </div>
          
        </motion.div>
      ))}
    </div>
  );
};

export default ToolsSection;
