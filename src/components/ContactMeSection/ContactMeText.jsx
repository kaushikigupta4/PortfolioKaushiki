import image1 from "../../assets/whatsapp.png";
import image2 from "../../assets/instagram.png";
import image3 from "../../assets/linkedin.png";
import image4 from "../../assets/github.png";
import { motion } from "framer-motion";

const ContactMeText = () => {
  return (
    <div className="w-[90%] md:pl-17 md:p-10 lg:p-25 mx-auto p-3">
      {/* Heading */}
      <h1 className="text-4xl sm:text-3xl text-xl uppercase md:text-3xl text-white text-center md:text-start">
        Let's work <br /> together
      </h1>

      {/* Description */}
      <h3 className="mt-4 sm:mt-3 xs:mt-2 text-gray-100 md:text-xl sm:text-base xs:text-sm text-sm text-center md:text-start">
        Let's collaborate to achieve great results! With teamwork, creativity, and dedication, 
        we can build impactful solutions, overcome challenges, and create meaningful experiences.
      </h3>

      {/* Social Icons */}
      <div className="icons flex gap-3 sm:gap-2 xs:gap-1 items-center justify-center py-2 mt-4 sm:mt-3 xs:mt-2 md:items-start md:justify-start">
        <motion.a 
          href="https://wa.link/dyc2h8" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.1 }}
        >
          <img src={image1} className="w-10 h-10 md:w-12 md:h-12" alt="WhatsApp" />
        </motion.a>

        <motion.a 
          href="https://www.instagram.com/kaushiiki_gupta_?igsh=eXFvd2RrNmZibmRz" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.1 }}
        >
          <img src={image2} className="w-10 h-10 md:w-12 md:h-12" alt="Instagram" />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/kaushikigupta4" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.1 }}
        >
          <img src={image3} className="w-10 h-10 md:w-12 md:h-12" alt="LinkedIn" />
        </motion.a>

        <motion.a 
          href="https://github.com/kaushikigupta4" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.1 }}
        >
          <img src={image4} className="w-10 h-10 md:w-12 md:h-12" alt="GitHub" />
        </motion.a>
      </div>
    </div>
  );
};

export default ContactMeText;
