import image from "../../assets/technical-skills.avif";

const SkillsPic = () => {
  return (
    <div className="rounded-[40px] overflow-hidden 
      w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] xs:w-[180px] xs:h-[180px]">
      <img src={image} className="h-full w-auto object-cover" alt="Skills" />
    </div>
  );
};

export default SkillsPic;
