import image from "../../assets/heroimage.png";
import image1 from "../../assets/download (4).jpg";
import image2 from "../../assets/foodwebsite.jpg";
import image3 from "../../assets/travelSite.jpg";
import image4 from "../../assets/task.jpg";
import { FaGithub } from "react-icons/fa";

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
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-1 md:gap-2 lg:gap-5 lg:p-12 bg-[#E7F8FF] justify-center">
      {projects.map((project, index) => {
        return (
          <div key={index} className=" h-auto projectcard relative group">
           
            <div className="image relative md:w-[300px] flex p-8 md:p-0 md:bg-white mx-auto items-center justify-center ">
              <img src={project.image} alt="" className="object-cover"/>
            </div>

       
            <div className="details absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hidden group-hover:block transition-opacity duration-500 ease-in-out md:w-[300px] ">
          
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

              <div className="relative z-10 ">
           
                <div className=" p-3 text-blue-200 font-bold text-lg w-auto text-center md:te">
                  {project.name}
                </div>
\
                <div className="text-sm text-white relative text-center px-3">
                  {project.description.length > 100 ? (
                    <>
                      {project.description.slice(0, 80)}
                      <span className="cursor-pointer font-bold text-blue-400">
                        {" "}
                        ...Read more
                      </span>
                    </>
                  ) : (
                    project.description
                  )}
                </div>

             
                <div className="icons absolute left-1/2 -translate-x-1/2 p-3">
                <a href=""><FaGithub className="text-blue-300  text-3xl" /></a>
                  
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
