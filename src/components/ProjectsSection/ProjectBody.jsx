import image from "../../assets/heroimage.png";
import image1 from "../../assets/download (4).jpg";
import image2 from "../../assets/foodwebsite.jpg";
import image3 from "../../assets/travelSite.jpg";
import image4 from "../../assets/task.jpg";
import { useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const projects = [
  {
    sn: 1,
    name: "ApplyEase (Job Portal Website)",
    description:
      "Developed a full-stack job portal using ReactJS, Express, NodeJS, and MongoDB, enabling authentication, job postings, and user applications. The front end was built with React Vite and ShadCN UI, integrating Redux Toolkit for state management. Users can create profiles, browse job listings, and apply seamlessly. Admins have a dedicated dashboard to manage job postings, filter applications, and update statuses. Framer Motion was used to enhance UI animations, making navigation smooth and engaging.",
    image: image1
  },
  {
    sn: 2,
    name: "Shoplify (E-Commerce Website)",
    description:
      "Designed and developed a full-stack e-commerce platform using the MERN stack, offering authentication, cart management, and secure payments. The front end, built with ReactJS and Zustand for efficient state management, allows users to browse products, add items to their cart, and check out seamlessly. Integrated Stripe for secure payments and Cloudinary for image uploads. The admin panel enables product management, order tracking, and user handling, ensuring a seamless shopping experience.",
    image: image2
  },
  {
    sn: 3,
    name: "Aryavarta (Tourism Website)",
    description:
      "Developed as part of Smart India Hackathon with a 6-member team, Aryavarta is a tourism-focused website enhancing travel experiences. Led frontend development, implementing responsive layouts, intuitive navigation, and visually appealing interfaces using HTML, CSS, JavaScript, and React. The website provides detailed travel guides, destination highlights, and an interactive booking experience, offering an engaging platform for travelers to plan their trips efficiently.",
    image: image3
  },
  {
    sn: 4,
    name: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website showcasing projects, skills, and experiences. Built with ReactJS and Tailwind CSS for a modern UI, featuring smooth animations with Framer Motion. Integrated a contact form, social media links, and dynamic sections to create an interactive user experience. The responsive design ensures accessibility across devices, making it an ideal showcase for professional achievements and technical expertise.",
    image: image4
  },
  {
    sn: 5,
    name: "Taskify (Task Management App)",
    description:
      "A feature-rich task management web app built using ReactJS and Firebase for real-time data syncing. Users can create, update, and categorize tasks with priority levels. Integrated drag-and-drop functionality for seamless task organization. The minimalist and intuitive UI, designed with Tailwind CSS, ensures a user-friendly experience, making productivity management effortless. Firebase authentication secures user data and allows easy multi-device access.",
    image: image
  },
  {
    sn: 6,
    name: "TrendSphere (News Aggregator Website)",
    description:
      "Developed a news aggregator web app that fetches real-time news articles from various sources using APIs. Built with Next.js for fast rendering and Tailwind CSS for a sleek UI. Users can filter news by categories, search for topics, and bookmark articles. Implemented a dark mode feature and optimized performance for seamless browsing. The site keeps users updated with trending news in technology, business, sports, and more.",
    image: image
  },
  {
    sn: 7,
    name: "API Nexus (RESTful API Service)",
    description:
      "Developed a backend-focused RESTful API service using Node.js, Express, and MongoDB. The API handles user authentication, CRUD operations, and real-time data updates. Implemented JWT-based authentication and bcrypt for password hashing, ensuring secure access. Used MongoDB's aggregation pipeline for efficient querying. Integrated third-party APIs for enhanced functionality and deployed the service on AWS with auto-scaling. API documentation was created using Swagger for easy integration by frontend and third-party developers.",
    image: image
  }
];

const ProjectBody = () => {
  const scrollRef = useRef(null);
  const rightArrowHandler = () => {
    console.log("arrow clicked");
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  const leftArrowHandler = () => {
    console.log("arrow clicked");
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };
  return (
    <div className="flex gap-4 m-3 py-15 max-w-[1350px]  mx-auto justify-center items-center bg-[#d4effa] ">
      <div
        className="left arrow text-4xl mx-4 cursor-pointer "
        onClick={leftArrowHandler}
      >
        <MdKeyboardArrowLeft className="text-gray-500 text-5xl" />
      </div>
      <div
        className="flex flex-nowrap overflow-x-auto gap-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-blue-500 hover:scrollbar-thumb-blue-700 pb-3"
        ref={scrollRef}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[380px] h-[500px] bg-white flex flex-col rounded-xl shadow-lg m-[0.5px] flex-none"
          >
            <div className="w-full p-4 py-3 h-[250px]">
              <div className="relative group ">
              
                <img
                  src={project.image}
                  className="h-[230px] w-full  object-cover rounded-xl cursor-pointer duration-300  "
                  alt={project.name}
                />
                <div
                  className="absolute bg-black opacity-0 group-hover:opacity-40    
                       transition-opacity duration-300 inset-0"
                ></div>
              </div>
            </div>

            <div className="name font-bold p-4 py-2">
              <button className="mt-2 p-3  bg-[#6146E0] w-[40%] text-white w-auto ">
                {project.name}
              </button>
            </div>

            <div className="text-gray-600 m-3 p-2">
              {project.description.length > 200
                ? project.description.slice(0, 200) + "..."
                : project.description}
              {project.description.length > 200 && (
                <span className="font-bold cursor-pointer text-xl">
                  {" "}
                  read more
                </span>
              )}
            </div>

            <div className="icons flex p-4"></div>
          </div>
        ))}
      </div>
      <div
        className="right arrow text-4xl mx-4 cursor-pointer"
        onClick={rightArrowHandler}
      >
        <MdKeyboardArrowRight className="text-gray-500 text-5xl" />
      </div>
    </div>
  );
};

export default ProjectBody;
