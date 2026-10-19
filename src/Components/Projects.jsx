function Projects() {
  return (
    <section id="projects" className="projects-shell">
      <header className="section-heading projects-heading">
        <div>
          <p className="section-kicker">03 / Selected work</p>
          <h2>Ideas, built into experiences.</h2>
        </div>
        <p className="section-description">From full-stack applications to small, focused experiments.</p>
      </header>

      <div className="projects-grid">
        <article className="project-card project-card--wide project-card--light">
          <div className="project-visual project-visual--one" aria-hidden="true" />
          <div className="project-meta">
            <span className="project-label">Full stack</span>
            <h3>E-Commerce Website</h3>
            <p>
              Built a full-stack e-commerce application using React, Node.js,
              and MongoDB with authentication, cart features, and REST APIs.
            </p>
            <div className="project-tags"><span>React</span><span>Node.js</span><span>MongoDB</span><span>Express.js</span></div>
            <a href="https://fronend-cpc.onrender.com/" target="_blank" rel="noreferrer" className="project-link">View project <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="project-card project-card--wide project-card--neutral">
          <div className="project-visual project-visual--two" aria-hidden="true" />
          <div className="project-meta">
            <span className="project-label">JavaScript</span>
            <h3>JavaScript Mini Projects — Hackathon</h3>
            <p>
              Tech Stack: HTML, CSS, JavaScript (DOM). Developed DOM-based
              mini-apps, including a keyboard event logger and a dynamic to-do list,
              using event handling and real-time UI updates during a hackathon.
            </p>
            <div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript (DOM)</span></div>
            <a href="https://github.com/aliyapraveen123" target="_blank" rel="noreferrer" className="project-link">View project <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="project-card project-card--wide project-card--dark">
          <div className="project-visual project-visual--three" aria-hidden="true" />
          <div className="project-meta">
            <span className="project-label">GitHub</span>
            <h3>GitHub Repository</h3>
            <p>
              Latest frontend builds, MERN projects, and practical implementation
              work across modern web development.
            </p>
            <div className="project-tags"><span>Frontend</span><span>MERN</span><span>GitHub</span></div>
            <a href="https://github.com/aliyapraveen123" target="_blank" rel="noreferrer" className="project-link">View repository <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
