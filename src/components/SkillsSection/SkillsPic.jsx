import image from "../../assets/Application programming interface-amico.svg";
import {motion} from "framer-motion"
const SkillsPic = () => {
  return (
    <div className=" rounded-[100px] overflow-hidden w-[320px] h-[420px] flex items-center justify-center mx-auto sm:h-[360px] sm:w-[260px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px] p-5">
      <motion.img src={image} className="object-cover w-full h-full rounded-[100px]" alt="Skills"  />
    </div>
  );
};

export default SkillsPic;
