import image from "../../assets/technical-skills.avif";

const SkillsPic = () => {
  return (
    <div className="mt-6 rounded-[40px] overflow-hidden w-[320px] h-[320px] flex items-center justify-center  bg-red-600 mx-auto sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]">
      <img src={image} className="object-cover w-full h-full" alt="Skills"  />
    </div>
  );
};

export default SkillsPic;
