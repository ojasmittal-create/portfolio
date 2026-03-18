import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Design Intern</h4>
                <h5>bob.org.in (Virtual)</h5>
              </div>
              <h3>Oct - Dec 2024</h3>
            </div>
            <p>
              Contributed to social media presence by designing engaging Instagram
              posts. Assisted with UI/UX research, improving user experience by
              analyzing design solutions and balancing visual appeal with user-centric design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exhibition Coordinator</h4>
                <h5>Beggars Corp (Dehradun)</h5>
              </div>
              <h3>Nov 2024</h3>
            </div>
            <p>
              Captured key moments using a DSLR for promotional use. Managed stall operations,
              engaged visitors to explain the mission, and demonstrated multitasking
              by balancing photography and coordination tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Design Intern</h4>
                <h5>26 Studio (Dehradun)</h5>
              </div>
              <h3>Feb 2025 - Present</h3>
            </div>
            <p>
              Contributing to real-time UX design projects involving user research, 
              wireframing, low/high-fidelity prototyping (Figma), usability testing, 
              and collaborative design sprints with senior designers and product teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
