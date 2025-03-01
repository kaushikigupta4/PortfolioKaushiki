
import AboutMeMain from "./components/AboutMeSection/AboutMeMain"
import ContactMeMain from "./components/ContactMeSection/ContactMeMain"
import NavbarMain from "./components/NavbarSection/NavbarMain"
import ProjectMain from "./components/ProjectsSection/ProjectMain"
import SkillsMain from "./components/SkillsSection/SkillsMain"
import SubHeroSection from "./components/SubHeroSection"
import HeroMain from "./components/heroSection/HeroMain"

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The App component serves as the main container for the application.
 * It renders the Navbar, Hero section, SubHero section, About Me section, and other components,
 * using a specific font style for consistency across the application.
 */

/******  63b8c22d-e309-4185-91fb-6bff65017775  *******/function App() {
  

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
