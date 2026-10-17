function About() {
  return (
    <section id="about" className="about-shell">
      <div className="about-title">
        <p className="section-kicker">01 / About me</p>
        <h2>Thoughtful code.<br />Practical impact.</h2>
      </div>

      <div className="about-content">
        <p className="about-copy">
          BCA student with hands-on experience in React, Node.js, and Git. Strong foundation in problem-solving and algorithms, with experience building practical web applications and contributing to social-impact projects.
        </p>
        <div className="about-metrics">
          <div><span className="metric-icon" aria-hidden="true">▤</span><strong>React</strong><small>Frontend</small></div>
          <div><span className="metric-icon" aria-hidden="true">▤</span><strong>Node.js</strong><small>Backend</small></div>
          <div><span className="metric-icon" aria-hidden="true">⌘</span><strong>Git</strong><small>Version control</small></div>
          <div><span className="metric-icon" aria-hidden="true">⌕</span><strong>DSA</strong><small>Problem solving</small></div>
        </div>
      </div>
    </section>
  );
}

export default About;
