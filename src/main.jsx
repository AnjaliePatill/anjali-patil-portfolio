import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  "International Customer Support", "Email & Chat Support", "Customer Query Management", "Technical Troubleshooting", "Technical Troubleshooting",
  "Customer Relationship Management (CRM)", "MS Office", "", "IT Support",
  "Written Communication", "Problem Solving", "Customer Follow-up"
];

const projects = [
  {
    title: "Personal Portfolio",
    text: "Responsive React portfolio built to showcase technical skills, experience and projects.",
    //tech: "React • JavaScript • CSS"
  },
  {
    title: "Customer Support Workflow",
    text: "Structured approach for handling international customer queries, issue tracking and resolution.",
    tech: "IT Support • Communication • Problem Solving"
  },
  {
    title: "AI-Ready Support Concept",
    text: "Concept for improving support workflows using AI-assisted knowledge search and response drafting.",
    //tech: "AI • Support • Automation"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>AP<span>.</span></a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "experience", "feedback", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">IT • CUSTOMER SUPPORT • Open For Remote Jobs</p>
            <h1>Hi, I'm <span>Anjali Patil</span>.</h1>
            <h2>Computer Engineer building reliable digital experiences.</h2>
            <p className="hero-text">
              I combine technical knowledge, customer-focused problem solving and
              disciplined independent work to help teams deliver better experiences.
            </p>
            <div className="actions">
              <a className="btn primary" href="#contact">Let's Connect</a>
              <a className="btn secondary" href="/resume.pdf" download>Download Resume</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">AP</div>
            <p> Customer Support & Technology opportunities</p>
            <div className="mini-stats">
              <div><strong>400+</strong><span>International clients handled</span></div>
              <div><strong>3+</strong><span>Years of structured professional/technical development</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Technical thinking with a customer-first mindset.</h2>
          <div className="about-grid">
            <p>
              I am a Computer Engineering graduate with an interest in IT,
              customer support and technology-driven problem solving. I enjoy
              understanding a problem clearly, communicating the solution simply,
              and continuously improving how work gets done.
            </p>
            <p>
              I have also worked on contract-based customer support handling
              international clients, while developing skills across programming,
              computer networks, web technologies and productivity tools.
            </p>
          </div>
        </section>

        <section id="skills" className="section alt">
          <p className="eyebrow">SKILLS</p>
          <h2>Tools & capabilities</h2>
          <div className="skill-grid">
            {skills.map(skill => <div className="skill" key={skill}>{skill}</div>)}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Experience & professional development</h2>
          <div className="timeline">
            <article className="timeline-item">
              <div className="dot"></div>
              <div>
                <span className="date">RECENT</span>
                <h3>Contract Customer Support / IT Support</h3>
                <p>
                  Handled 400+ international clients through structured issue
                  resolution, clear written communication, follow-ups and
                  customer-focused problem solving.
                </p>
                <div className="tags"><span>International Clients</span><span>IT Support</span><span>Problem Solving</span></div>
              </div>
            </article>
            <article className="timeline-item">
              <div className="dot"></div>
              <div>
                <span className="date">2022</span>
                <h3>Computer Engineering Graduate</h3>
                <p>
                  Built a foundation in programming, computer networks,
                  software concepts and technical problem solving.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="feedback" className="section">
          <p className="eyebrow">PROFESSIONAL FEEDBACK</p>
          <h2>Sample manager feedback</h2>
          <div className="feedback-card">
            <div className="feedback-top">
              <div className="feedback-avatar">SM</div>
              <div>
                <h3>Sample Manager</h3>
                <p>Senior Manager — Customer Success</p>
              </div>
            </div>
            <p className="sample-label">SAMPLE / PORTFOLIO DEMONSTRATION ONLY</p>
            <blockquote>
              “Anjali demonstrated strong problem-solving skills, professional
              communication, and a customer-focused approach. She handled
              international clients with patience and professionalism, took
              ownership of issues, and consistently worked toward effective
              resolutions. Her adaptability and willingness to learn were valuable
              strengths in her work.”
            </blockquote>
          </div>
        </section>

        <section id="projects" className="section alt">
          <p className="eyebrow">PROJECTS</p>
          <h2>Selected work</h2>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project" key={project.title}>
                <div className="project-icon">&lt;/&gt;</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <small>{project.tech}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p>I'm open to discussing IT, customer support and technology opportunities.</p>
          <div className="contact-links">
            <a href="mailto:anjali.panditu@gmail.com">anjali.panditu@gmail.com</a>
            <a href="tel:+918793046536">+91 87930 46536</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Anjali Patil</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
