import "./contact.css";
import { MdEmail, MdStayPrimaryPortrait } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const contactDetails = [
  {
    icon: <MdEmail className="contact__icon" />,
    text: "spsaravanaselvan@gmail.com",
  },
  {
    icon: <MdStayPrimaryPortrait className="contact__icon" />,
    text: "9600046225",
  },
];
const externalLinks = [
  {
    icon: <BsGithub className="contact__icon" />,
    text: "https://github.com/saravanaselvan",
    displayText: "github.com/saravanaselvan",
  },
  {
    icon: <BsLinkedin className="contact__icon" />,
    text: "https://www.linkedin.com/in/saravana-selvan-s-p/",
    displayText: "linkedin.com/in/saravana-selvan-s-p",
  },
];
const Contact = ({ showOnlyPersonal }) => {
  return (
    <div className="contact">
      {/* <div className="contact__personal"> */}
      {showOnlyPersonal &&
        contactDetails.map((detail, index) => (
          <div key={index} className="contact__personal">
            {detail.icon}
            <span>{detail.text}</span>
          </div>
        ))}
      {/* </div>
      <div className="contace__external-links"> */}
      {!showOnlyPersonal &&
        externalLinks.map((link, index) => (
          <div key={index}>
            {link.icon}
            <a href={link.text} target="_blank">
              {link.displayText}
            </a>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};

export default Contact;
