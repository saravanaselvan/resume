import Contact from "../contact/Contact";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Saravanaselvan SP</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <Contact showOnlyPersonal />
      <Contact />
    </div>
  );
};

export default Header;
