import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full left-[50%] -translate-x-[50%] z-20 flex gap-4 px-5">
      <div className="flex p-6 justify-between w-full bg-[#2B0B56] rounded-full items-center">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <NavbarLink />
        </div>
        <NavbarBtn />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex justify-center items-center md:hidden p-5 rounded-full bg-[#2B0B56]">
        <button
          onClick={handleToggleMenu}
          className="text-2xl p-2 border-white-500 rounded-full text-bold bg-[#6146E0] mt-3 hover:scale-110"
        >
          <RxHamburgerMenu className="text-2xl text-white" />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
