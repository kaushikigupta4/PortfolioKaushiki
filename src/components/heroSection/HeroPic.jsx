import image from "../../assets/nav.avif";
import { FiSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const HeroPic = () => {
  return (
    <div className="relative flex items-center justify-center p-6 w-full mt-20">
     
      <div className="absolute flex justify-center items-center animate-pulse">
        <FiSquare className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-auto text-blue-400 blur-md animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Animated Hero Image */}
      <motion.img 
        src={image} 
        alt="Hero" 
        className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[500px]"
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
    </div>
  );
};

export default HeroPic;
