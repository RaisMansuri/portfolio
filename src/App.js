import React from "react";
import "./App.css";

const metrics = [
  { value: "5+", label: "Years building web products" },
];

const highlights = [
  {
    title: "Modern Frontend",
    description:
      "Responsive React and Angular interfaces that stay clean, fast, and conversion-focused on every screen.",
  },
  {
    title: "Business Systems",
    description:
      "POS, CRM, billing, and admin platforms designed to reduce manual work and support everyday teams.",
  },
  {
    title: "Smart Automation",
    description:
      "AI-assisted flows, alerts, and process automation that help businesses move faster with fewer errors.",
  },
];

const experiences = [
  {
    company: "Aviasole Technology",
    role: "Frontend Developer",
    period: "Current Role",
    summary:
      "Working on business products for CRM and onboarding workflows with a strong focus on Angular frontend development, usability, and production-ready UI delivery.",
    details: [
      "Built and maintained responsive screens in Angular 19+ for real business users.",
      "Worked with .NET ABP.io and PostgreSQL based systems through API integration and data-driven UI flows.",
      "Gained practical backend understanding in .NET Core while contributing mainly on the frontend side.",
    ],
  },
];

const projects = [
  {
    title: "Vyapar POS System",
    category: "Operations",
    description:
      "A complete POS platform for billing, inventory, customer records, and daily business operations with a smooth, fast interface.",
    impact: "Built for real-world store workflows with quicker billing and better stock visibility.",
    stack: ["Angular 19+", "Node.js", "Inventory", "Billing", "Reports"],
    aiFeature:
      "Implemented an AI assistant to help create orders, fetch product or customer data, and speed up operator actions inside the system.",
    link: "https://vyapar-pos.vercel.app/",
    cta: "View Live Project",
  },
  {
    title: "Nextere CRM Platform",
    category: "Current Company Project",
    description:
      "At Aviasole Technology, I work on the Nextere CRM platform used for customer management, workflow handling, and business operations.",
    impact:
      "Contributed to a production CRM experience with cleaner workflows, stronger usability, and reliable frontend delivery.",
    stack: ["Angular 19+", ".NET ABP.io", "PostgreSQL", "CRM", "Enterprise UI"],
    aiFeature:
      "My main contribution is on the Angular frontend, while also working with APIs and understanding backend structure in .NET Core.",
    link: "https://crm.nextere.com/",
    cta: "Open CRM Project",
  },
  {
    title: "Nextere Onboarding Platform",
    category: "Current Company Project",
    description:
      "At Aviasole Technology, I also work on the onboarding platform that supports setup flows, operational forms, and step-by-step user onboarding journeys.",
    impact:
      "Helped shape a smoother onboarding experience with responsive Angular screens and dependable data integration.",
    stack: ["Angular 19+", ".NET ABP.io", "PostgreSQL", "Onboarding", "Business Forms"],
    aiFeature:
      "I focus mainly on frontend development in Angular and have practical knowledge of backend concepts in .NET Core for integrations and data flow.",
    link: "https://app.nextere.com/",
    cta: "Open Onboarding Project",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Angular", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", ".NET", "Express.js", "REST APIs", "Auth Systems"],
  },
  {
    title: "Data & Tools",
    items: ["Supabase", "MongoDB", "PostgreSQL", "MySQL", "SQL Server", "Git", "AI Automation"],
  },
];

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <a className="brand" href="#home">
          Rais Mansuri
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Full Stack Developer | Web Experiences | Automation</span>
            <h1>Building polished digital products that look sharp and work hard.</h1>
            <p className="hero-text">
              I create responsive web applications for businesses that need clean design,
              practical systems, and dependable performance across mobile and desktop.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="mailto:raismansuri74059@gmail.com">
                Let&apos;s Work Together
              </a>
            </div>

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-badge">Available for freelance and full-time opportunities</div>
            <div className="hero-card">
              <p className="card-label">Core Focus</p>
              <h2>Fast interfaces, reliable systems, and automation that saves time.</h2>
              <p>
                From customer-facing dashboards to internal tools, I build products that
                blend visual quality with business value.
              </p>
            </div>
            <div className="hero-stack">
              <span>React</span>
              <span>Angular</span>
              <span>Node.js</span>
              <span>Supabase</span>
              <span>SQL</span>
              <span>AI Workflows</span>
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="section-tag">About</span>
            <h2>Design-minded development for real business problems.</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>
                I&apos;m Rais Mansuri, a full stack developer focused on building business
                products that feel modern, intuitive, and ready for everyday use.
              </p>
              <p>
                At Aviasole Technology, I currently work on CRM and onboarding products,
                mainly on the Angular frontend, with practical exposure to .NET Core
                backend flows and PostgreSQL-based systems.
              </p>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span className="section-tag">Work Experience</span>
            <h2>Professional experience building frontend products for business platforms.</h2>
          </div>

          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-top">
                  <div>
                    <span className="experience-period">{experience.period}</span>
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                </div>

                <p className="experience-summary">{experience.summary}</p>

                <ul className="experience-list">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span className="section-tag">Selected Work</span>
            <h2>Projects built around speed, business clarity, and AI-assisted workflows.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span className="project-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="project-note">{project.aiFeature}</p>
                <div className="project-impact">{project.impact}</div>
                {project.link ? (
                  <div className="project-actions">
                    <a className="project-link" href={project.link}>
                      {project.cta}
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span className="section-tag">Tech Stack</span>
            <h2>Tools I use to ship responsive, dependable products.</h2>
          </div>

          <div className="skills-layout">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-banner">
            <div>
              <span className="section-tag">Contact</span>
              <h2>Need a portfolio site, dashboard, or business app that feels premium?</h2>
              <p>
                Let&apos;s build something clean, responsive, and genuinely useful for your
                users.
              </p>
            </div>

            <div className="contact-links">
              <a className="button button-primary" href="mailto:raismansuri74059@gmail.com">
                raismansuri74059@gmail.com
              </a>
              <a className="button button-secondary" href="tel:7698063189">
                +91 7698063189
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/RaisMansuri"
              >
                GitHub Profile
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/raisahemad-mansuri-378830121/"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright 2026 Rais Mansuri. Crafted for mobile and desktop experiences.</p>
      </footer>
    </div>
  );
}

export default App;
