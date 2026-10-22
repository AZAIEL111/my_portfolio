import { Link } from "react-router-dom";

const services = [
  {
    icon: "🤖",
    title: "AI Development",
    description:
      "AI chatbots, assistants, and applications using language models.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and connect applications using n8n.",
  },
  {
    icon: "📊",
    title: "Machine Learning",
    description:
      "Build predictive models and analyze datasets to find useful patterns.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Build responsive web interfaces using React.",
  },
];

function Services() {
  return (
    <section className="page-section">
      <p className="eyebrow">WHAT I DO</p>
      <h1>My <span>Services</span></h1>

      <p className="description">
        Explore the software and automation solutions I am
        developing my skills to deliver.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <Link to="/contact" className="btn btn-primary service-cta">
        Discuss a Project
      </Link>
    </section>
  );
}

export default Services;
