import { Link } from "react-scroll";

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
];

const NavbarLink = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 font-medium text-gray-800">
      {links.map((l, i) => (
        <div key={i} className="group cursor-pointer">
          <Link
            className="hover:text-[#1581BF] transition"
            smooth={true}
            duration={700}
            to={l.section}
          >
            {l.link}
          </Link>

          <div
            className="mx-auto w-0 h-[2px] transition-all duration-300 group-hover:w-full rounded-full"
            style={{
              background: "#1581BF", // simple blue underline
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NavbarLink;
