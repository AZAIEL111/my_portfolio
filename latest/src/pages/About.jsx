function About() {
  const skills = [
    "Python",
    "Machine Learning",
    "Generative AI",
    "React",
    "n8n Automation",
    "Data Analysis",
  ];

  return (
    <section className="page-section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About <span>Me</span></h1>

      <p className="description">
        I'm a developer focused on learning and building with
        artificial intelligence, software development, and automation.
        I enjoy turning ideas into useful applications.
      </p>

      <h2 className="section-title">My Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <h2 className="section-title">My Goal</h2>

      <p className="description">
        My goal is to develop practical software solutions,
        contribute to real-world projects, and work with clients
        and development teams.
      </p>
    </section>
  );
}

export default About;
