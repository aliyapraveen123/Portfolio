function Skills() {
  const skillItems = [
    { name: 'HTML', level: 'Advanced', icon: 'H' },
    { name: 'CSS', level: 'Advanced', icon: 'C' },
    { name: 'JavaScript', level: 'Advanced', icon: 'JS' },
    { name: 'React', level: 'Advanced', icon: 'R' },
    { name: 'Node.js', level: 'Proficient', icon: 'N' },
    { name: 'Express.js', level: 'Proficient', icon: 'E' },
  ];

  const tools = [
    'Python',
    'MongoDB',
    'Git',
    'GitHub',
    'VS Code',
    'Operating System',
    'Prompt Engineering',
    'Canva',
  ];

  return (
    <section id="skills" className="dark-section skills-section">
      <div className="skills-heading">
        <div>
          <p className="section-kicker light">02 / key skills</p>
          <h2>Skills that turn ideas into working products.</h2>
        </div>
        <p className="skills-intro">
          A balanced mix of frontend, backend, design, and problem-solving skills
          used to build practical, responsive applications.
        </p>
      </div>

      <div className="skills-showcase">
        <div className="canva-visual" aria-label="3D Canva icon">
          <div className="canva-orbit canva-orbit-one" />
          <div className="canva-orbit canva-orbit-two" />
          <div className="canva-cube">
            <span className="canva-cube-face canva-cube-front">C</span>
            <span className="canva-cube-face canva-cube-top" />
            <span className="canva-cube-face canva-cube-side" />
          </div>
          <div className="canva-label">
            <strong>Canva</strong>
            <span>Design & visual tools</span>
          </div>
        </div>

        <div className="skills-list" aria-label="Core skills">
          {skillItems.map((skill, index) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
              <div className="skill-copy">
                <strong>{skill.name}</strong>
                <span>{skill.level}</span>
              </div>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>

      <div className="additional-skills">
        <span>Additional tools & technologies</span>
        <div className="additional-skill-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
