import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MdDownload } from "react-icons/md";

const resume1 = "/kaushikiresume.pdf";

const HeroText = () => {
  const textRef = useRef(null);
  const subHeadRef = useRef(null);

  useEffect(() => {
    const animateText = (ref) => {
      if (ref.current) {
        const text = ref.current.innerText;
        ref.current.innerHTML = text
          .split("")
          .map((char) =>
            char === " "
              ? "&nbsp;"
              : `<span class="inline-block opacity-0">${char}</span>`
          )
          .join("");

        gsap.to(ref.current.children, {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power3.out",
        });
      }
    };

    animateText(subHeadRef);
    animateText(textRef);
  }, []);

  return (
    <div className="flex flex-col h-full justify-center mx-auto text-center md:text-left">
      <h1
        ref={subHeadRef}
        className="text-[2.5rem] sm:text-[3rem] md:text-[3.0rem] lg:text-[3.8rem] leading-tight font-bold text-white"
      >
        hi, It’s <span className="font-kaushan">Kaushiki</span>
      </h1>

      <h2
        
        className="text-white text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.8rem] leading-tight mt-2"
      >
        I’m a <span className="text-[#6146E0] "  ref={textRef}>Full Stack Developer</span>
      </h2>

      <p className="text-[#D9D9D9] text-[1rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.4rem] leading-tight mt-4 sm:mt-6">
        Passionate about building scalable, user-friendly{" "}
        <br className="hidden sm:block" />
        web apps. Reach out for collaboration <br className="hidden sm:block" />
        and innovative digital solutions!
      </p>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center items-center md:justify-start lg:gap-12">
        <div>
          <a href={resume1} download target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-8 py-3 rounded-[15px] text-lg sm:text-xl font-bold bg-[#6146E0] text-white hover:scale-110 transition-all duration-700 lg:px-12 lg:py-4 cursor-pointer">
              Resume <MdDownload className="text-xl sm:text-2xl" />
            </button>
          </a>
        </div>

        <div className="pb-3">
          <Link to="contact" smooth={true} duration={1000}>
            <button className="px-9 py-3 rounded-[15px] text-lg sm:text-xl font-bold border-[0.5px] border-[#6146E0] hover:scale-110 transition-all duration-700 lg:px-12 lg:py-4 text-white shadow-lg shadow-indigo-500/50 hover:shadow-purple-500/80 transition-all duration-300 cursor-pointer">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
