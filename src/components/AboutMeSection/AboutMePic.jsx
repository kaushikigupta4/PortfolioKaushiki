import image from "../../assets/aboutMe.avif";

const AboutMePic = () => {
  return (
    <div className="relative flex justify-center">
   
      <div className="relative overflow-hidden shadow-lg rounded-[80px] w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <img src={image} alt="About Me" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AboutMePic;
