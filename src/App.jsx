
import AboutMeMain from "./components/AboutMeSection/AboutMeMain"
import ContactMeMain from "./components/ContactMeSection/ContactMeMain"
import NavbarMain from "./components/NavbarSection/NavbarMain"
import ProjectMain from "./components/ProjectsSection/ProjectBody"
import SkillsMain from "./components/SkillsSection/SkillsMain"
import SubHeroSection from "./components/SubHeroSection"
import HeroMain from "./components/heroSection/HeroMain"

function App() {
  

  return (
    <>
     <div className="font-['Kaisei_HarunoUmi']">
      <NavbarMain />
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <ProjectMain/>
      <ContactMeMain/>

     </div>
    </>
  )
}

export default App
