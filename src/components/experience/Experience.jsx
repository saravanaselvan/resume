import "./experience.css";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    tags: "React JS/Redux, Chakra UI, Typescript, AWS/S3, react-three-fiber, AngularJS, MySQL",
    company: "Photogauge India",
    duration: "Sep 2022 - Aug 2023",
    details: [
      "Created an administrative React JS application using Redux and Chakra UI, offering a comprehensive experience.",
      "Designed functionalities encompassing YAML file editing, in-browser 3D file viewing using react-three-fiber, intuitive S3 folder file/folder navigation, image gallery viewing, and efficient drag-and-drop file uploads.",
      "Leveraged AWS Amplify for streamlined React JS app deployments, significantly reducing the build-to-deployment timeline while eliminating the need for DevOps intervention.",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    tags: "Angular JS, React JS, Bootstrap, Ruby on Rails, MySQL",
    company: "Eleven Plus Exams",
    duration: "Nov 2019 - Aug 2022",
    details: [
      "Introduced responsive design in an application, combining Angular JS, Bootstrap, and Rails, enhancing the mobile user experience for exam purchases.",
      "Spearheaded the transition of an application from Angular JS to React JS, leveraging modern technology for improved performance.",
      "Architectured and built a subscription platform, integrated with Stripe, using Angular JS and Ruby on Rails, providing a streamlined payment experience.",
      "Built a data migration tool, automating a previously manual 1 to 2-hour task daily, facilitating smooth data transfer between student-facing and parent-facing platforms.",
    ],
  },
  {
    role: "Module Lead",
    tags: "Angular 2.0, Node/Express JS, Typescript, AWS EC2",
    company: "Aspire Systems",
    duration: "Sep 2016 - Oct 2019",
    details: [
      "Demonstrated expertise in adhering to best practices when constructing reusable components, employing Angular 2+ on the frontend and Node.js/Express.js on the backend.",
      "Led a successful initiative to upgrade Angular 2/Angular Seed to Angular 2+ with Angular CLI, ensuring the adoption of modern development tools and practices.",
      "Collaborated effectively with the DevOps team to establish an automated deployment process using Jenkins, streamlining project delivery and reducing manual intervention.",
      "Achieved significant performance enhancements by optimizing a screen with 12 Angular Material tabs through the implementation of the OnPush strategy. This transformation resulted in seamless screen functionality, eliminating a prior 5-second delay even when selecting a radio button.",
      "Innovatively developed a VS Code extension aimed at generating Mocha Test skeletons for Express.js controllers, enhancing testing efficiency and code quality.",
    ],
  },
  {
    role: "Full Stack Developer",
    tags: "Angular JS, React JS, Bootstrap, Ruby on Rails, MySQL",
    company: "Eleven Plus Exams",
    duration: "Jan 2014 - Sep 2016",
    details: [
      "Developed a robust e-commerce web application for booking exams and managing student reports, employing AngularJS, Bootstrap, and Ruby On Rails. Integrated Stripe to facilitate seamless payment processing.",
      "Innovatively designed and implemented a custom tool using JQuery, JCrop, and ImageMagick, enabling teachers to efficiently crop questions from PDF documents and seamlessly attach them to student reports.",
    ],
  },
  {
    role: "Lead Developer",
    tags: "JQuery, Java, XML/XSLT",
    company: "Tata Consultancy Services",
    duration: "May 2010 - Jun 2013",
    details: [
      "Worked on enhancements and bug fixes in a web application built with XML/XSLT, JQuery, J2EE and Oracle.",
      "Built a reusable JQuery plugin to move items between 2 list boxes.",
    ],
  },
  {
    role: "Software Developer",
    tags: "Java, Servelet, JSP, YUI, DOJO",
    company: "Aspire Systems",
    duration: "Oct 2006 - May 2010",
    details: [
      "Contributed to web page development using YUI, DOJO, J2EE, and DB2 technologies.",
      "Played a pivotal role in the successful implementation of Lucene Search, providing advanced document search functionality akin to Elastic Search.",
    ],
  },
];
const Experience = () => {
  return (
    <div className="experience">
      <h3 className="section-title m-neg-1">Work Experience</h3>
      {experiences.map((experience) => (
        <div className="experience__project">
          <h3 className="experience__project-role">
            {experience.role}{" "}
            <span style={{ color: "#575454", fontSize: "12px" }}>
              {" "}
              {experience.tags}
            </span>
          </h3>
          <div className="experience__project-company">
            <small>{experience.company}</small>
            <small>{experience.duration}</small>
          </div>
          <p className="experience__project-details">
            <ul>
              {experience.details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
