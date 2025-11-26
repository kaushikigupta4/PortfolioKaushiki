import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMain = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <div className="w-[94%] max-w-6xl">

        {/* NAVBAR (LIGHT THEME) */}
        <div
          className="flex items-center justify-between p-4 md:p-5 rounded-3xl 
                     border border-gray-200 shadow-lg bg-white"
        >

          {/* LOGO - NO BG */}
          <NavbarLogo />

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8">
            <NavbarLink />
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            <NavbarBtn />
          </div>

          {/* HAMBURGER - NO BG */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <RxHamburgerMenu className="text-gray-800 text-2xl" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden mt-3 transition-all duration-300 overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white">

            {/* LINKS */}
            <div className="flex flex-col gap-4 text-gray-800">
              <NavbarLink />
            </div>

            {/* BUTTON */}
            <div className="mt-4">
              <NavbarBtn />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavbarMain;
