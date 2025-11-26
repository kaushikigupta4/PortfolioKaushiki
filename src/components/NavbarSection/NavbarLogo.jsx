const NavbarLogo = () => {
  return (
    <div>
      {/* Desktop Logo */}
      <h1
        className="hidden md:block font-extrabold text-4xl sm:text-5xl font-macondo"
        style={{
          background: "linear-gradient(90deg,#1581BF,#3DB6B1,#F6B1CE)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        Kaushiki Gupta
      </h1>

      {/* Mobile Logo */}
      <h1
        className="block md:hidden font-extrabold text-3xl font-macondo"
        style={{
          background: "linear-gradient(90deg,#F6B1CE,#3DB6B1,#1581BF)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        KG
      </h1>
    </div>
  );
};

export default NavbarLogo;
