import image1 from "../../assets/Visual Studio Code (VS Code).svg";
import image2 from "../../assets/Git.svg";
import image3 from "../../assets/GitHub.svg";
import image4 from "../../assets/IntelliJ IDEA.svg";

const tools = [
  { name: "VS Code", img: image1 },
  { name: "Git", img: image2 },
  { name: "GitHub", img: image3 },
  { name: "IntelliJ IDEA", img: image4 }
];

const ToolsSection = () => {
  return (
    <div className="flex w-full flex-wrap justify-start gap-1 mx-auto">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 m-1 items-center justify-center 
          w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] bg-[#EBEDFF] 
          rounded-lg text-center p-2 shadow-md"
        >
          <div className="image">
            <img 
              src={tool.img} 
              alt={tool.name} 
              className="w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem]
              rounded-full bg-white p-2" 
            />
          </div>
          <div className="text text-xs sm:text-sm font-semibold">{tool.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ToolsSection;
