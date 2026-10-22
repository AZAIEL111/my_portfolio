import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-section">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact <span>Me</span></h1>

      <p className="description">
        Have an idea or a project? Fill out the form below to
        get started.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me about your project..."
          required
        />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Form validated! This demo has not sent your message.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
