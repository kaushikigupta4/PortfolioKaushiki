import image from "../../assets/technical-skills.avif";

const SkillsPic = () => {
  return (
    <div className="mt-6 rounded-[100px] overflow-hidden w-[320px] h-[420px] flex items-center justify-center mx-auto sm:h-[360px] sm:w-[260px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px] p-5">
      <img src={image} className="object-cover w-full h-full rounded-[100px]" alt="Skills"  />
    </div>
  );
};

export default SkillsPic;
