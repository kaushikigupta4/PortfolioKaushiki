import image6 from "../../assets/icons8-github.svg";
import image1 from "../../assets/download (4).jpg";
import image2 from "../../assets/foodwebsite.jpg";
import image3 from "../../assets/travelSite.jpg";
import image4 from "../../assets/task.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    sn: 1,
    name: "ApplyEase (Job Portal Website)",
    description:
      "Developed a full-stack job portal using ReactJS, Express, NodeJS, and MongoDB. The platform allows users to create accounts, log in, and apply for jobs. Employers can post job listings, track applications, and manage candidates. The front-end was built with React Vite and ShadCN UI for a modern experience...",
    image: image1,
    link: "",
  },
  {
    sn: 2,
    name: "Shoplify (E-Commerce Website)",
    description:
      "Designed and developed a MERN stack e-commerce platform where users can browse products, add to cart, and complete purchases with JWT authentication. Admin panel for product management and analytics...",
    image: image2,
    link: "https://github.com/kaushikigupta4/Shoplify",
  },
  {
    sn: 3,
    name: "Aryavarta (Tourism Website)",
    description:
      "Developed during the Smart India Hackathon. Tourism website offering personalized recommendations, AI-based suggestions, weather APIs, accommodation search, and a sleek travel planning interface...",
    image: image3,
    link: "",
  },
  {
    sn: 4,
    name: "Portfolio Website",
    description:
      "Built with ReactJS + GSAP + Tailwind, featuring animations, skills, project gallery, contact form, and optimized clean UI...",
    image: image4,
    link: "",
  },
];

const ProjectBody = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const updateAnimations = () => {
      projectRefs.current.forEach((el, index) => {
        let isSmallScreen = window.matchMedia("(max-width: 360px)").matches;
        let moveDistance = isSmallScreen ? 50 : index % 2 === 0 ? -200 : 200;
        let xMove = isSmallScreen ? 0 : moveDistance;
        let yMove = 100;

        gsap.fromTo(
          el,
          { opacity: 0, y: yMove },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play reverse play reverse",
              scrub: 1,
            },
          }
        );
      });
    };

    updateAnimations();
    window.addEventListener("resize", updateAnimations);

    return () => window.removeEventListener("resize", updateAnimations);
  }, []);

  return (
    <div className="flex flex-col gap-50 lg:gap-5 lg:p-12 justify-center max-w-[90%] mx-auto items-center">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            className={`projectcard flex flex-col lg:flex-row mx-auto items-center gap-9 ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            } hover:scale-105 transition-all duration-500`}
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            {/* ---- NAME (Blue) ---- */}
            <div
              className="name font-semibold text-center text-2xl lg:mb-40 mb-0"
              style={{ color: "#1581BF" }}
            >
              {project.name}
            </div>

            <div>
              <div className="image relative md:w-[380px] md:h-[250px] w-[300px] flex justify-center group">
                <img src={project.image} alt="" />

                {/* ---- PINK HOVER OVERLAY ---- */}
                <div
                  className="absolute w-full h-full opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"
                  style={{ backgroundColor: "#F6B1CE" }}
                ></div>

                {/* ---- GitHub Icon ---- */}
                <div className="github icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                  <a href={project.link} target="_blank">
                    <img
                      src={image6}
                      alt=""
                      className="w-[40px] h-[40px] cursor-pointer"
                    />
                  </a>
                </div>

                {/* ---- DESCRIPTION BOX ---- */}
                <div
                  className={`description z-2 lg:top-1/4 bottom-[-120px] lg:bottom-[-160px] absolute 
                    ${isEven ? "lg:right-85" : "lg:left-85"}  
                    md:w-[450px] md:h-[150px] w-[300px] p-3 
                    bg-white/70 backdrop-blur-md text-[#0B1220]
                    border rounded-xl shadow-md transition-all duration-300`}
                  style={{
                    borderColor: "#CCE5CF", // mint border
                  }}
                >
                  {project.description.length > 300
                    ? project.description.slice(0, 250) + "..."
                    : project.description}

                  {/* ---- READ MORE (Pink) ---- */}
                  <span
                    className="cursor-pointer font-bold text-lg"
                    style={{ color: "#F6B1CE" }}
                  >
                    {" "}
                    read more
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectBody;
