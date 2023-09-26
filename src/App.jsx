import DownloadResume from "./components/download-resume/DownloadResume";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="container resume-container">
      <Header />
      {/* <section className="section-1"> */}
      {/* <DownloadResume /> */}
      <Profile />
      <Skills />
      {/* </section> */}
      {/* <section className="section-2"> */}
      <Experience />
      <Projects />
      <Education />
      {/* </section> */}
    </div>
  );
};

export default App;
