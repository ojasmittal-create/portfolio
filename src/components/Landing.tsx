import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="marquee-container">
          <div className="marquee">
            <span>. . . . . . . . . . Projects</span>
            <span>. . . . . . . . . . Services</span>
            <span>. . . . . . . . . . Contact</span>
            <span>. . . . . . . . . . Projects</span>
            <span>. . . . . . . . . . Services</span>
            <span>. . . . . . . . . . Contact</span>
          </div>
        </div>

        <div className="huge-bg-text">
          UX/UI DESIGNER
        </div>

        <div className="landing-container">
          <div className="dean-intro-box">
            <h2>Hi, I'm Ojas</h2>
            <p>From India, I design intuitive, user-friendly interfaces for founders and startups looking to attract dream clients.</p>
            <a href="#contact" className="chat-btn">I Want to Chat</a>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
