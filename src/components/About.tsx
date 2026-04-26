import "./styles/About.css";

const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Years of Experience', value: '1+' },
  { label: 'Happy Customers', value: '10+' }
];

const stack = [
  { category: 'Design', tools: 'Figma, Adobe XD, Photoshop' },
  { category: 'Prototyping', tools: 'Figma, Propie' },
  { category: 'Research', tools: 'User Interviews, Usability Testing' }
];

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="about-me">
        <h3 className="dean-section-title">ABOUT ME</h3>
        <p className="dean-about-para">
          UI/UX Designer with experience in creating intuitive, user-first interfaces, 
          wireframing, and low/high-fidelity prototyping. Passionate about user 
          research, usability testing, and building comprehensive design systems 
          using Figma and Adobe XD.
        </p>

        <div className="about-grid-dean">
          <div className="about-column">
            <h4 className="about-col-title">Stats</h4>
            {stats.map((stat, i) => (
              <div key={i} className="about-stat-row">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="about-column">
            <h4 className="about-col-title">My Stack</h4>
            {stack.map((item, i) => (
              <div key={i} className="about-stat-row">
                <span>{item.category}</span>
                <span className="about-tools-text">{item.tools}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
