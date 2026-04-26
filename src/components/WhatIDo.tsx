import "./styles/WhatIDo.css";

const services = [
  { id: "01", title: "Web Design", desc: "Design That Convert" },
  { id: "02", title: "Branding", desc: "Build a Visual Voice" },
  { id: "03", title: "Graphic Design", desc: "Designs That Communicate" },
  { id: "04", title: "Product Design", desc: "Design for impact" }
];

const WhatIDo = () => {
  return (
    <div className="services-section" id="services">
      <div className="section-container">
        <h2 className="dean-section-title">SERVICES</h2>
        <h3 className="dean-section-subtitle">what i offer</h3>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-pill">
              <span className="service-number">{service.id}</span>
              <div className="service-info">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
