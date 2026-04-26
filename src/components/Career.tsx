import "./styles/Career.css";

const experiences = [
  {
    role: "UI/UX Design Intern",
    company: "26 Studio (Dehradun)",
    duration: "Feb 2025 - Present"
  },
  {
    role: "Exhibition Coordinator",
    company: "Beggars Corp (Dehradun)",
    duration: "Nov 2024"
  },
  {
    role: "UI/UX Design Intern",
    company: "bob.org.in (Virtual)",
    duration: "Oct - Dec 2024"
  }
];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container-dean">
        <h2 className="dean-section-title" style={{ fontSize: '40px', marginBottom: '60px' }}>
          My Experience
        </h2>
        
        <div className="experience-list-dean">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-row-dean">
              <h3 className="exp-role-dean">{exp.role}</h3>
              <div className="exp-meta-dean">
                <span className="exp-company-dean">{exp.company}</span>
                <span className="exp-duration-dean">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
