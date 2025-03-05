import image from "../../assets/nav.avif";
import { FiSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const HeroPic = () => {
  return (
    <div className="relative flex items-center justify-center p-6 w-full mt-20">
      <motion.div className="absolute flex justify-center items-center animate-pulse" transition={{duration:2, repeat:Infinity,ease:"easeInOut"}} animate={{y:[0,-20, 0]}}>
        <FiSquare className="h-[305px] w-[305px] sm:h-[300px] md:h-[355px] md:w-[355px] lg:h-[655px] lg:w-[655px] w-auto text-[#C1C7F9] blur-md ]" />
      </motion.div>

      <motion.img
        src={image}
        alt="Hero"
        className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[500px]"
       
        animate={{ y:[0,-20,0]}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroPic;
