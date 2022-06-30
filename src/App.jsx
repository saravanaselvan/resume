import Contact from "./components/contact/Contact";
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
      <section className="section-1">
        <Profile />
        <Education />
        <Skills />
        <Projects />
      </section>
      <section className="section-2">
        <Experience />
      </section>
    </div>
  );
};

export default App;
