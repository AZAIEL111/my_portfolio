import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm a <span>Python & AI Developer</span>
        </h1>

        <p className="description">
          I build AI applications, machine learning projects,
          and automation workflows that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>

        <div className="tech-list">
          <span>Python</span>
          <span>AI / ML</span>
          <span>React</span>
          <span>n8n</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="code-icon">{"</>"}</div>
        <h2>Turning Ideas Into Code</h2>
        <p>Software · Artificial Intelligence · Automation</p>
      </div>
    </section>
  );
}

export default Home;
