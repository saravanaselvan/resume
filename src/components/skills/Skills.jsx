import "./skills.css";

const skillSet = [
  "React JS",
  "Redux",
  "Chakra UI",
  "Mantine UI",
  "Angular",
  "Javascript",
  "Typescript",
  // "HTML/CSS",
  "Node/Express JS",
  "Ruby On Rails",
  "MySQL",
  "Python",
  "Fast API",
  "Flask",
];
const Skills = () => {
  return (
    <div className="skills">
      <h3 className="section-title">Skills</h3>
      <div className="skills__skill-sets">
        {skillSet.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
