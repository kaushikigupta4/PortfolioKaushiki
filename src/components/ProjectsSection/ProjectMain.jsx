import ProjectBody from "./ProjectBody";

const ProjectMain = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 max-w-[1350px] mx-auto justify-start items-start mt-16">
      
   
      <div className="w-full md:w-auto">
        <h1 className="relative z-10 text-4xl font-bold text-black bg-gray-300 p-2">
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
