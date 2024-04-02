import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiaesContainer from "./TechnologiaesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiaesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;