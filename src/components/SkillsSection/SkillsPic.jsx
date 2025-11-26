import image from "../../assets/Application programming interface-amico.svg";
import { motion } from "framer-motion";

const SkillsPic = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="
          relative overflow-hidden 
          shadow-md 
          rounded-3xl 
          bg-white
        "
        style={{
          width: "100%",
          maxWidth: "380px",
          height: "420px",
          border: "1px solid #CCE5CF",

          /* Soft organic blob */
          clipPath: `path(
            "M180 20
             C260 -5 360 30 400 110
             C440 190 430 290 360 360
             C290 430 180 450 110 400
             C40 350 10 260 40 160
             C70 80 120 30 180 20Z"
          )`,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={image}
          alt="Skills"
          className="w-full h-full object-contain p-6"
        />
      </motion.div>
    </div>
  );
};

export default SkillsPic;
