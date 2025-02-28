
import { Link } from "react-scroll";
    const links = [
      { link: "Home", section: "home" },
      { link: "About Me", section: "about" },
      {link:"Skills",section:"skills"},
      { link: "Projects", section:"projects" },
      
    ];

const NavbarLink = () => {
  return (
    <div className="flex w-full gap-6 font-bold py-2 text-xl  lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[110%] left-[50%] -translate-x-[50%] sm:text-center sm:bg-[#F8A49B]/40 sm:backdrop-blur-md sm:shadow-lg lg:bg-transparent lg:backdrop-blur-none lg:shadow-none">
      {
        links.map((link,index)=>{
            return(
            <div key={index} className="group ">
            <Link className="cursor-pointer hover:transition-all duration-500 hover:text-white" to={link.section}>{link.link}
            </Link>
            <div className="mx-auto w-0 h-[1px] transition-all duration-500 group-hover:w-full sm:group-hover:w-[100%] bg-[#6146E0]"></div>

        </div>
            )
      }
        )
    }
    </div>
    

)
}
export default NavbarLink
