import image1 from "../../assets/icons8-javascript.svg";
import image2 from "../../assets/icons8-html-5.svg";
import image3 from "../../assets/icons8-css3.svg";
import image4 from "../../assets/icons8-react.svg";
import image5 from "../../assets/tailwind-css.svg";
import image6 from "../../assets/icons8-nodejs.svg";
import image7 from "../../assets/Express.svg";
import image8 from "../../assets/MongoDB.svg";

const skills = [
  { name: "JavaScript", img: image1 },
  { name: "HTML5", img: image2 },
  { name: "CSS", img: image3 },
  { name: "ReactJs", img: image4 },
  { name: "Tailwind CSS", img: image5 },
  { name: "NodeJs", img: image6 },
  { name: "ExpressJs", img: image7 },
  { name: "MongoDB", img: image8 }
];

const WebSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-start gap-1 mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 m-1 items-center justify-center 
          w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] bg-[#EBEDFF] 
          rounded-lg text-center p-2 shadow-md"
        >
          <div className="image">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]
              rounded-full bg-white p-2" 
            />
          </div>
          <div className="text text-xs sm:text-sm font-semibold">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default WebSection;
