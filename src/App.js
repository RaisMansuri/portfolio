import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* Header */}
      <header className="header">
        <h1>Rais Mansuri</h1>
        <p>Full Stack Developer | React | Angular | Node.js | AI Automation</p>
      </header>

      {/* Navbar */}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            I am a Full Stack Developer specializing in React, Angular, Node.js and AI automation.
            I build POS systems, CRM software and business automation applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="card">
          <h3>Frontend</h3>
          <div className="skills">
            <span>React</span>
            <span>Angular</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <h3>Backend</h3>
          <div className="skills">
            <span>Node.js</span>
            <span>.NET</span>
            <span>PHP Laravel</span>
          </div>

          <h3>Database</h3>
          <div className="skills">
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>SQL Server</span>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>POS System</h3>
          <p>Billing, inventory management and AI assistant integration.</p>
        </div>

        <div className="card">
          <h3>CRM System</h3>
          <p>Customer tracking, reminders and analytics dashboard.</p>
        </div>

        <div className="card">
          <h3>GST Management</h3>
          <p>Invoice generation and tax calculation system.</p>
        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card">
          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Rais Mansuri Portfolio</p>
      </footer>

    </div>
  );
}

export default App;