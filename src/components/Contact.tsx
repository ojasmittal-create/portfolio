import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="dean-footer-title">
          Let's build something together.
        </h2>
        
        <a href="mailto:theojas721@gmail.com" className="dean-footer-email">
          theojas721@gmail.com
        </a>
        
        <div className="contact-flex-dean">
          <div className="socials-dean">
            <a href="#" className="contact-social">Github <MdArrowOutward /></a>
            <a href="https://www.linkedin.com/in/ojas-mittal-375399215/" className="contact-social">LinkedIn <MdArrowOutward /></a>
            <a href="#" className="contact-social">Twitter <MdArrowOutward /></a>
            <a href="#" className="contact-social">Instagram <MdArrowOutward /></a>
          </div>
          <div className="copyright-dean">
            © 2025 Ojas Mittal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
