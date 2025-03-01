import ProjectBody from "./ProjectBody.jsx";

const ProjectMain = () => {
  return (
    <div className="flex flex-col gap-8 px-6 md:px-12 max-w-[1350px] mx-auto justify-start items-center  mt-16 lg:mt-0">
      
   
      <div>
        <h1 className="text-6xl mt-4 text-[#6146E0] text-center w-full mt-10 ">
          Projects
        </h1>
      </div>

    
      <div id="projects" className="w-full relative">
        <ProjectBody />
      </div>
    </div>
  );
};

export default ProjectMain;
