import { Link } from "react-scroll";

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
];

const NavbarLink = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 font-bold py-2 text-xl 
      md:relative absolute top-[110%] left-[50%] -translate-x-[50%] text-center 
      bg-[#F8A49B]/40 backdrop-blur-md sm:shadow-lg md:bg-transparent md:backdrop-blur-none md:shadow-none">
      {links.map((link, index) => (
        <div key={index} className="group">
          <Link 
            className="cursor-pointer hover:transition-all duration-500 text-white hover:text-white"  
            smooth={true} duration={1000} to={link.section}
          >
            {link.link}
          </Link>
          <div className="mx-auto w-0 h-[1px] transition-all duration-500 group-hover:w-full sm:group-hover:w-[100%] bg-[#6146E0]"></div>
        </div>
      ))}
    </div>
  );
};

export default NavbarLink;
