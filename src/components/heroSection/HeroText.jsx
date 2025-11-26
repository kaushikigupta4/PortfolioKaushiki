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
            char === " " ? "&nbsp;" : `<span class="inline-block opacity-0">${char}</span>`
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

  const COLORS = {
    pink: "#F6B1CE",
    blue: "#1581BF",
    teal: "#3DB6B1",
    mint: "#CCE5CF",
    textDark: "#0B1220",
    muted: "#475569",
  };

  return (
    <div className="flex flex-col h-full justify-center mx-auto text-center md:text-left">
      {/* Heading */}
      <h1
        ref={subHeadRef}
        className="text-[2.5rem] sm:text-[3rem] md:text-[3.0rem] lg:text-[3.8rem] 
                   leading-tight font-bold"
        style={{ color: COLORS.textDark }}
      >
        hi, It’s <span className="font-kaushan">Kaushiki</span>
      </h1>

      {/* Role Text (solid color now) */}
      <h2
        className="text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.8rem] 
                   leading-tight mt-2 font-semibold"
        style={{ color: COLORS.textDark }}
      >
        I’m a{" "}
        <span
          ref={textRef}
          style={{
            color: COLORS.blue, // solid blue (you can change to teal/pink if you want)
          }}
        >
          Full Stack Developer
        </span>
      </h2>

      {/* Subtext */}
      <p
        className="text-[1rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.4rem] 
                   leading-tight mt-4 sm:mt-6"
        style={{ color: COLORS.muted }}
      >
        Passionate about building scalable, user-friendly
        <br className="hidden sm:block" />
        web apps. Reach out for collaboration
        <br className="hidden sm:block" />
        and innovative digital solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 
                      justify-center items-center md:justify-start lg:gap-12">

        {/* Resume Button — Solid Teal */}
        <div>
          <a href={resume1} download target="_blank" rel="noopener noreferrer">
            <button
              className="flex items-center gap-2 px-8 py-3 rounded-[15px] 
                         text-lg sm:text-xl font-bold text-white 
                         hover:scale-105 transition-all duration-300 
                         lg:px-12 lg:py-4 cursor-pointer"
              style={{
                background: COLORS.teal,
              }}
            >
              Resume <MdDownload className="text-xl sm:text-2xl" />
            </button>
          </a>
        </div>

        {/* Hire Me Button — Solid Pink Outline */}
        <div className="pb-3">
          <Link to="contact" smooth={true} duration={1000}>
            <button
              className="px-9 py-3 rounded-[15px] text-lg sm:text-xl font-bold 
                         hover:scale-105 transition-all duration-300 
                         lg:px-12 lg:py-4 cursor-pointer"
              style={{
                border: `2px solid ${COLORS.pink}`,
                color: COLORS.pink,
                background: "transparent",
              }}
            >
              Hire Me
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroText;
