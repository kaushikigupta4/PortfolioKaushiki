const SubHeroSection = () => {
  return (
    <div
      className="w-full border-y-[0.5px] border-gray-300 p-2 text-gray-600 flex justify-around uppercase 
                 xl:text-4xl md:text-3xl sm:text-4xl items-center gap-4"
      style={{ backgroundColor: "#F6B1CE" }}   // PINK BG
      id="about"
    >
      <p className="md:block hidden">Fast Learner</p>
      <p>Team Work</p>
      <p className="md:block hidden">Problem Solving</p>
    </div>
  );
};

export default SubHeroSection;
