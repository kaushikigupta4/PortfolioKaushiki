import image from "../../assets/Innovation-pana.svg";
import { motion } from "framer-motion";

const AboutMePic = () => {
  return (
    <div className="relative flex justify-center">
      {/* Blob wrapper */}
      <motion.div
        className="relative overflow-hidden "
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "500px",

          /* Smooth blob shape — fully curved, no straight lines */
          clipPath: `path(
            "M160 20
             C250 -10 360 30 410 110
             C460 190 450 300 380 370
             C300 450 180 455 100 400
             C20 345 -10 250 30 160
             C60 90 100 40 160 20Z"
          )`,

         
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Image stays full size inside blob */}
        <img
          src={image}
          alt="About Me"
          className="w-full h-full object-contain p-3"
        />
      </motion.div>
    </div>
  );
};

export default AboutMePic;
