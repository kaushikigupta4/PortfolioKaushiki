import image from "../../assets/aboutMe.avif";

const AboutMePic = () => {
  return (
    <div className="relative flex justify-center">
   
      <div className="relative overflow-hidden shadow-lg rounded-[80px] w-full max-w-[200px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] h-[280px] sm:h-[280px] md:h-[400px] lg:h-[500px]">
        <img src={image} alt="About Me" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AboutMePic;
