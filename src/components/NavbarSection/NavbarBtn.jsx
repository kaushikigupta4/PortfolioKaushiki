import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link to="contact" smooth={true} duration={500}>
      <button className="md:px-8 md:py-4 px-4 py-2 rounded-full text-xl font-bold text-white 
      bg-gradient-to-r from-purple-800 via-blue-700 to-blue-400
 lg:px-15
 hover:scale-110 transition-all duration-700 cursor-pointer">
        Contact
      </button>
    </Link>
  );
};

export default NavbarBtn;
