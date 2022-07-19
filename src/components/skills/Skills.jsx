import "./skills.css";

const skillSet = [
  "React JS",
  "Redux",
  "Angular",
  "Javascript",
  "HTML/CSS",
  "Node JS",
  "Express JS",
  "Ruby On Rails",
  "MySQL",
];
const Skills = () => {
  return (
    <div className="skills">
      <h3 className="section-title">Skills</h3>
      <div className="skills__skill-sets">
        {skillSet.map((skill, index) => (
          <div>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
