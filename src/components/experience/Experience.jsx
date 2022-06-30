import "./experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h3 className="section-title m-neg-1">Work Experience</h3>
      <div className="experience__project">
        <h3 className="experience__project-role">Full Stack Developer</h3>
        <div className="experience__project-company">
          <small>Eleven Plus Exams</small>
          <small>Nov 2019 - Jan 2022</small>
        </div>
        <p className="experience__project-details">
          - Implemented Responsive layout in an application built with Angular
          JS, Bootstrap and Rails to help users to purchase exams from mobile
          devices.
          <br />- Initiated the upgrade of an application from Angular JS to
          React JS. <br />
          - Designed and developed a subscription platform integrated with
          Stripe using Angular JS and Ruby on Rails. <br />
          - Created a tool to migrate data from student facing subscription
          platform to the parent facing application reducing 1 to 2 hours of
          manual work everyday. <br />
          - Identified performance issues and implemented Redis Cache for
          objects that do not change frequently. <br />
          - Ensured tight cooperation with other engineers and business users
          through active listening, systematic communication, and leadership
          skills. <br />
        </p>
      </div>
      <div className="experience__project">
        <h3 className="experience__project-role">Module Lead</h3>
        <div className="experience__project-company">
          <small>Aspire Systems</small>
          <small>Sep 2016 - Oct 2019</small>
        </div>
        <p className="experience__project-details">
          - Followed best practices in building reusable components with Angular
          2+ and Node JS/Express JS in the Backend.
          <br />
          - Lead the effort to upgrade Angular 2/Angular Seed to Angular 2+ with
          Angular CLI. <br />
          - Coordinated with DevOps team to implement automated deployment
          process using Jenkins. <br />
          - Optimized the performance of a screen with 12 Angular material tabs
          by implementing OnPush strategy. It made the screen work seamlessly
          instead of taking 5 seconds to just select a radio button. <br />
          {/* - Created a VS Code extension to generate Mocha Test skeleton for
          Express JS controllers
          https://marketplace.visualstudio.com/items?itemName=Saravanaselvan.mocha-test-generator */}
        </p>
      </div>
      <div className="experience__project">
        <h3 className="experience__project-role">Full Stack Developer</h3>
        <div className="experience__project-company">
          <small>Freelance</small>
          <small>Jan 2014 - Sep 2016 </small>
        </div>
        <p className="experience__project-details">
          - Built an ecommerce web application to Book Exams & Manage Student
          reports with AngularJS, Bootstrap and Ruby On Rails. Integrated Stripe
          for handling payments. <br />- Created a tool using JQuery, JCrop &
          ImageMagick for the teachers to Crop questions from PDF document and
          attach them with student reports.
        </p>
      </div>
      <div className="experience__project">
        <h3 className="experience__project-role">Lead Developer</h3>
        <div className="experience__project-company">
          <small>Tata Consultancy Services</small>
          <small>May 2010 - Jun 2013</small>
        </div>
        <p className="experience__project-details">
          - Worked on enhancements and bug fixes in a web application built with
          XML/XSLT, JQuery, J2EE and Oracle. <br />- Built a reusable JQuery
          plugin to move items between 2 list boxes.
        </p>
      </div>
      <div className="experience__project">
        <h3 className="experience__project-role">Software Developer</h3>
        <div className="experience__project-company">
          <small>Aspire Systems</small>
          <small>Oct 2006 - May 2010</small>
        </div>
        <p className="experience__project-details">
          - Involved in building web pages using YUI, DOJO, J2EE & DB2. <br />-
          Helped implement Lucene Search (document search similar to Elastic
          Search) and conducted training sessions on the technical details.
        </p>
      </div>
    </div>
  );
};

export default Experience;
