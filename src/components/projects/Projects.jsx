import { BsGithub } from "react-icons/bs";
import "./projects.css";

const personalProjects = [
  {
    title: "Timesheet",
    description:
      "Simple timesheet app built with React JS, Mantine UI and Firebase",
    titleLink: "https://github.com/saravanaselvan/pg-timesheet",
    githubLink: "https://github.com/saravanaselvan/pg-timesheet",
  },
  {
    title: "My Resume",
    description: "My resume built with React JS and deployed using Netlify",
    titleLink: "https://github.com/saravanaselvan/resume",
    githubLink: "https://github.com/saravanaselvan/resume",
  },
  {
    title: "Fasttag Costs List",
    description:
      "A fun project using Gmail API to search the user emails and create a CSV file with the list of toll payments made",
    titleLink: "https://github.com/saravanaselvan/fasttag",
    githubLink: "https://github.com/saravanaselvan/fasttag",
  },
  {
    title: "Generate Mocha Test",
    description:
      "VS Code extension to automatically generate Mocha Test skeleton from Express JS controllers",
    titleLink:
      "https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.mocha-test-generator",
    githubLink: "https://github.com/saravanaselvan/mocha-test-generator",
  },
  {
    title: "Create React Component",
    description:
      "VS Code extension to generate React Functional Component with the respective CSS file",
    titleLink:
      "https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.generate-react-functional-component-with-css",
    githubLink:
      "https://github.com/saravanaselvan/generate-react-functional-component-with-css",
  },
];
const Projects = () => {
  return (
    <div className="projects">
      <h3 className="section-title">Personal Projects</h3>
      <ul style={{ paddingInlineStart: "40px" }}>
        {/* <small className="projects__title">VS Code extensions:</small> */}
        {personalProjects.map((project) => (
          <li style={{ marginBottom: "10px" }}>
            <a
              href={project.titleLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                paddingRight: "10px",
              }}
            >
              {project.title}
            </a>
            <span>
              {project.description}
              <a
                // className="github__icon"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
              >
                Github
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
