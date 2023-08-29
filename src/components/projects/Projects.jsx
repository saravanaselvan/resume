import { BsGithub } from "react-icons/bs";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="section-title">Projects</h3>
      <div>
        {/* <small className="projects__title">VS Code extensions:</small> */}
        <p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.mocha-test-generator"
            target="_blank"
            rel="noreferrer"
          >
            Generate Mocha Test
          </a>
          <a
            className="github__icon"
            href="https://github.com/saravanaselvan/generate-react-functional-component-with-css"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </p>
        <p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.generate-react-functional-component-with-css"
            target="_blank"
            rel="noreferrer"
          >
            Create React Component
          </a>
          <a
            className="github__icon"
            href="https://github.com/saravanaselvan/mocha-test-generator"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/saravanaselvan/pg-timesheet"
            target="_blank"
            rel="noreferrer"
          >
            Timesheet
          </a>
          <a
            className="github__icon"
            href="https://github.com/saravanaselvan/pg-timesheet"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
