import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link to="contact" smooth={true} duration={500}>
      <button
        className="px-6 py-2 rounded-full text-lg font-semibold text-white shadow-md hover:scale-105 transition"
        style={{
          background: "linear-gradient(90deg, #1581BF, #3DB6B1, #F6B1CE)"
        }}
      >
        Contact
      </button>
    </Link>
  );
};

export default NavbarBtn;
