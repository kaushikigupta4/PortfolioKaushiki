import image1 from "../../assets/whatsapp.png";
import image2 from "../../assets/instagram.png";
import image3 from "../../assets/linkedin.png";
import image4 from "../../assets/github.png";

const ContactMeText = () => {
  return (
    <div className="w-[90%] md:pl-17 md:p-10 lg:p-25 mx-auto p-3">
     
      <h1 className="text-4xl sm:text-3xl text-xl uppercase md:text-3xl">
        Let's work <br /> together
      </h1>

      <h3 className="mt-4 sm:mt-3 xs:mt-2 text-gray-700 md:text-xl sm:text-base xs:text-sm text-sm">
        Let's collaborate to achieve great results! With teamwork, creativity, and dedication, we can build impactful solutions, 
        overcome challenges, and create meaningful experiences. Strong collaboration fosters innovation, efficiency, and success.
      </h3>

     
      <div className="icons flex gap-3 sm:gap-2 xs:gap-1 items-center justify-center py-2 mt-4 sm:mt-3 xs:mt-2 md:items-start md:justify-start">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={image1} className="w-9 h-9 sm:w-7 sm:h-7 xs:w-6 xs:h-6 md:w-12 md:h-12" alt="WhatsApp" />
        </a>

        <a href="https://link2.com" target="_blank" rel="noopener noreferrer">
          <img src={image2} className="w-9 h-9 sm:w-7 sm:h-7 xs:w-6 xs:h-6 md:w-12 md:h-12" alt="Instagram" />
        </a>

        <a href="https://link3.com" target="_blank" rel="noopener noreferrer">
          <img src={image3} className="w-9 h-9 sm:w-7 sm:h-7 xs:w-6 xs:h-6 md:w-12 md:h-12" alt="LinkedIn" />
        </a>

        <a href="https://link4.com" target="_blank" rel="noopener noreferrer">
          <img src={image4} className="w-9 h-9 sm:w-7 sm:h-7 xs:w-6 xs:h-6 md:w-12 md:h-12" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default ContactMeText;
