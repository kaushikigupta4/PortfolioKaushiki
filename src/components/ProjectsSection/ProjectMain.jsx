import ProjectBody from "./ProjectBody.jsx";

const ProjectMain = () => {
  return (
    <div className="flex flex-col gap-8  justify-start items-center mt-16 lg:mt-0 ">
      
   
      <div> 
      <h1 className="text-6xl sm:text-7xl font-extrabold text-[#6146E0] text-center mt-10 tracking-wide">
  Projects
</h1>

      </div>

    
      <div id="projects" className="w-full">
        <ProjectBody />
      </div>
    </div>
  );
};

export default ProjectMain;
