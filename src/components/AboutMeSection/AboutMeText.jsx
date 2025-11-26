import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMeText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="
      flex flex-col items-center lg:items-start text-center md:text-left 
      w-full mx-auto 
      bg-white 
      p-6 sm:p-10 md:p-12 
      
      rounded-3xl 
     
    "
    >
      {/* Title */}
      <h1
        className="text-4xl md:text-4xl lg:text-5xl font-extrabold"
        style={{ color: "#1581BF" }}  // blue from your palette
      >
        About Me
      </h1>

      {/* Paragraph 1 */}
      <p
        className="mt-4 text-base sm:text-lg leading-relaxed font-medium"
        style={{ color: "#475569" }}  // soft slate
      >
        Hi, I’m Kaushiki — a passionate Full Stack Developer who loves building
        scalable, intuitive, and high-quality web applications. I specialize in the
        MERN stack (MongoDB, Express.js, React.js, Node.js) along with modern
        libraries and tools.
      </p>

      {/* Paragraph 2 */}
      <p
        className="mt-4 text-base sm:text-lg leading-relaxed font-medium"
        style={{ color: "#475569" }}
      >
        💡 I enjoy solving problems, optimizing performance, and turning complex concepts
        into clean, functional, and user-friendly experiences. From building seamless UI/UX 
        to developing robust backend systems — I love it all.
      </p>

      {/* Paragraph 3 */}
      <p
        className="hidden sm:block mt-4 text-base sm:text-lg leading-relaxed font-medium"
        style={{ color: "#475569" }}
      >
        I continuously learn, improve, and collaborate with amazing people to
        create meaningful digital solutions. Let’s build something impactful together!
      </p>
    </div>
  );
};

export default AboutMeText;
