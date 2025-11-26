import image1 from "../../assets/whatsapp.png";
import image2 from "../../assets/instagram.png";
import image3 from "../../assets/linkedin.png";
import image4 from "../../assets/github.png";
import { motion } from "framer-motion";

const ContactMeText = () => {
  const COLORS = {
    pink: "#F6B1CE",
    teal: "#3DB6B1",
    blue: "#1581BF",
    mint: "#CCE5CF",
    dark: "#0B1220",
    gray: "#475569",
  };

  return (
    <div className="w-[90%] md:pl-17 md:p-10 lg:p-25 mx-auto p-3">

      {/* Heading */}
      <h1
        className="text-4xl sm:text-3xl text-xl uppercase md:text-3xl font-extrabold text-center md:text-start"
        style={{ color: COLORS.blue }}
      >
        Let's work <br /> together
      </h1>

      {/* Description */}
      <h3
        className="mt-4 sm:mt-3 xs:mt-2 md:text-xl sm:text-base xs:text-sm text-sm leading-relaxed text-center md:text-start"
        style={{ color: COLORS.gray }}
      >
        Let’s collaborate and build something meaningful. Combining creativity,
        teamwork, and clean design — we can create digital experiences that stand out.
      </h3>

      {/* Social Icons */}
      <div className="icons flex gap-3 sm:gap-2 xs:gap-1 items-center justify-center py-3 mt-4 md:items-start md:justify-start">

        {/* WhatsApp */}
        <motion.a
          href="https://wa.link/dyc2h8"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          className="p-2 rounded-xl shadow-sm"
          style={{ backgroundColor: COLORS.pink + "40" }}
        >
          <img src={image1} className="w-10 h-10 md:w-12 md:h-12" alt="WhatsApp" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/kaushiiki_gupta_?igsh=eXFvd2RrNmZibmRz"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          className="p-2 rounded-xl shadow-sm"
          style={{ backgroundColor: COLORS.teal + "40" }}
        >
          <img src={image2} className="w-10 h-10 md:w-12 md:h-12" alt="Instagram" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/kaushikigupta4"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          className="p-2 rounded-xl shadow-sm"
          style={{ backgroundColor: COLORS.mint }}
        >
          <img src={image3} className="w-10 h-10 md:w-12 md:h-12" alt="LinkedIn" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/kaushikigupta4"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          className="p-2 rounded-xl shadow-sm"
          style={{ backgroundColor: COLORS.blue + "35" }}
        >
          <img src={image4} className="w-10 h-10 md:w-12 md:h-12" alt="GitHub" />
        </motion.a>
      </div>
    </div>
  );
};

export default ContactMeText;
