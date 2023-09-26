import DownloadResume from "../download-resume/DownloadResume";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <DownloadResume />
      <h3 className="section-title">Profile</h3>
      <p>
        Experienced Senior Full Stack Developer with over 15+ years of expertise
        in crafting responsive web applications. Proficient in a wide range of
        technologies including HTML/CSS, JavaScript, Angular (JS and 2+),
        jQuery, React JS, Node.js/Express.js, Ruby on Rails, and MySQL. Skilled
        in deploying applications to AWS EC2 instances and AWS Amplify, ensuring
        seamless user experiences and optimal performance.
      </p>
    </div>
  );
};

export default Profile;
