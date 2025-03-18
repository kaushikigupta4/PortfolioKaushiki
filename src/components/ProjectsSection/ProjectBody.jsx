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
      "Developed a full-stack job portal using ReactJS, Express, NodeJS, and MongoDB. The platform allows users to create accounts, log in, and apply for jobs. Employers can post job listings, track applications, and manage candidates. The front-end was built with React Vite and ShadCN UI for a modern user experience, while Redux Toolkit was used for efficient state management. Authentication was implemented using JWT tokens, and secure data storage was ensured through MongoDB with Mongoose. The application features responsive UI/UX design and smooth navigation, enhancing the job-seeking experience.",
    image: image1,
    link: "",
  },
  {
    sn: 2,
    name: "Shoplify (E-Commerce Website)",
    description:
      "Designed and developed a full-stack e-commerce platform using the MERN stack (MongoDB, Express, React, NodeJS). The platform allows users to browse products, add items to their carts, and complete purchases with secure payment integration. Authentication and authorization are handled with JWT, ensuring a safe shopping experience. The admin panel allows product management, order tracking, and user analytics. The UI is designed with Tailwind CSS and Material UI for a clean and responsive layout. Cloudinary integration is used for optimized product image hosting.",
    image: image2,
    link: "https://github.com/kaushikigupta4/Shoplify",
  },
  {
    sn: 3,
    name: "Aryavarta (Tourism Website)",
    description:
      "Developed as part of the Smart India Hackathon, Aryavarta is a tourism website that enhances travel experiences with personalized recommendations. It provides an interactive and user-friendly interface where travelers can explore destinations, find local guides, and book experiences. The website uses AI-based suggestions to recommend the best places based on user preferences. Integrated APIs allow for real-time weather updates, hotel bookings, and transport services. The platform was built using ReactJS for the front-end, Express and Node.js for the back-end, and MongoDB for data storage. The team collaborated to ensure a seamless travel planning experience with intuitive navigation and engaging visuals.",
    image: image3,
  },
  {
    sn: 4,
    name: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase my projects, skills, and experiences. Built using ReactJS and Tailwind CSS, the website features a fully responsive design, smooth animations using GSAP, and a modern UI. It includes an interactive skills section, project gallery, and a contact form for potential collaborations. The website is optimized for performance with lazy loading images and minimalistic yet engaging design elements. It serves as a digital resume, highlighting my expertise in full-stack development, UI/UX design, and front-end technologies.",
    image: image4,
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
        let yMove = 100; // Start from bottom for all screens

        gsap.fromTo(
          el,
          { opacity: 0, y: yMove }, // Start position (from the bottom)
          {
            opacity: 1,
            y: 0, // End at normal position
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%", // Start triggering when the element reaches 90% of the viewport height
              end: "top 50%", // End triggering at 50% of the viewport height
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
            <div className="name text-[#6146E0] font-semibold text-center text-2xl lg:mb-40 mb-0">
              {project.name}
            </div>
   <div>
            <div className="image relative md:w-[380px] md:h-[250px] w-[300px] flex justify-center group">
              <img src={project.image} alt="" className="" />

              <div className="absolute w-full h-full bg-black via-[#15295A] to-[#1E3A8A] opacity-60 hidden group-hover:block"></div>

              <div className="github icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                <a href={project.link} target="_blank">
                  <img
                    src={image6}
                    alt=""
                    className="w-[40px] h-[40px] cursor-pointer"
                  />
                </a>
              </div>

              <div
                className={`description text-blue-800 z-2 lg:top-1/4 bottom-[-120px] lg:bottom-[-160px] absolute 
                  ${isEven ? "lg:right-85" : "lg:left-85"}  
                  md:w-[450px] md:h-[150px] w-[300px] p-3 
                  text-white bg-white/10 backdrop-blur-lg 
                  border border-white/20 rounded-lg 
                  shadow-lg shadow-indigo-500/50 hover:shadow-purple-500/80 transition-all duration-300`}
              >
                {project.description.length > 300
                  ? project.description.slice(0, 250) + "..."
                  : project.description}
                <span className="text-[#6146E0] cursor-pointer font-bold text-lg">
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
