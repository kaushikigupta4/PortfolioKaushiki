const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[900px] mx-auto bg-[#E7F8FF] p-6 sm:p-10 md:p-12 shadow-xl rounded-lg">
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333]">
        About Me
      </h1>

      <p className="text-gray-600 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
        👋 Hi, I’m Kaushiki, a passionate Full Stack Developer who loves building 
        scalable and user-friendly web applications. With a strong foundation in MERN stack 
        (MongoDB, Express.js, React.js, Node.js) and other modern technologies, I bring ideas to life 
        through elegant and efficient code.
      </p>

      <p className="text-gray-600 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
        💡 I thrive on solving problems, optimizing performance, and creating seamless user experiences. 
        Whether it's crafting intuitive UI/UX design or architecting robust backend systems, 
        I enjoy every aspect of development.
      </p>   


      <p className="hidden sm:block text-gray-600 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
        🚀 My goal is to continuously learn and innovate, collaborating with like-minded individuals 
        to create meaningful digital solutions. Let's build something amazing together!
      </p>

    </div>
  );
};

export default AboutMeText;
