import image from "../../assets/myPic-modified.png";
import { motion } from "framer-motion";

const HeroPic = () => {
  return (
   <div className="relative flex items-center justify-center w-full mt-20 ">
  <motion.img
    src={image}
    alt="Hero"
    className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[500px]
                object-cover scale-x-[-1]"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />
</div>

  );
};

export default HeroPic;
