const HeroText = () => {
  return (
    <div className="flex flex-col h-full justify-center mx-auto text-center md:text-left">
      
 
      <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem] leading-tight font-bold">
        hi, It’s <span className="font-kaushan">Kaushiki</span>
      </h1>

  
      <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] leading-tight mt-2">
        I’m a <span className="text-[#6146E0]">Full Stack Developer</span>
      </h2>

      <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] leading-tight mt-4 sm:mt-6">
        Passionate about building scalable, user-friendly <br className="hidden sm:block" />
        web apps. Reach out for collaboration <br className="hidden sm:block" />
        and innovative digital solutions!
      </p>

  
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center md:justify-start">
        <button className="px-8 sm:px-12 py-3 sm:py-4 rounded-[15px] text-lg sm:text-xl font-bold bg-[#6146E0] text-white hover:scale-110 transition-all duration-700">
          Resume
        </button>
        <button className="px-8 sm:px-12 py-3 sm:py-4 rounded-[15px] text-lg sm:text-xl font-bold text-blue border-[0.5px] hover:scale-110 transition-all duration-700">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HeroText;
