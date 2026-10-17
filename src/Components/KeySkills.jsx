const groups = [
  {
    title: "Interfaces & mobile",
    icon: "▤",
    items: [["React", "Interface library"], ["JavaScript", "Language"], ["HTML", "Web structure"], ["CSS", "Web styling"], ["React Native", "Mobile framework"], ["Expo", "Mobile platform"]],
  },
  {
    title: "Backend & data",
    icon: "▱",
    items: [["Node.js", "JavaScript runtime"], ["Express.js", "Backend framework"], ["MongoDB", "Database"], ["Python", "Language"]],
  },
  {
    title: "Tools & deployment",
    icon: "›_",
    items: [["GitHub", "Version control"], ["VS Code", "Code editor"], ["Postman", "API testing"], ["Vercel", "Deployment"], ["Render", "Cloud platform"]],
  },
];

export default function KeySkills() {
  return (
    <section id="skills" className="key-skills">
      <header className="skills-heading">
        <div>
          <p className="section-kicker">02 / My toolkit</p>
          <h2>Key skills</h2>
        </div>
        <div className="skills-copy">
          <p className="skills-count">15 technologies</p>
          <p>The languages, frameworks and tools behind my web and mobile development.</p>
        </div>
      </header>

      <div className="skills-groups">
        {groups.map((group) => (
          <article className="skills-group" key={group.title}>
            <h3><span aria-hidden="true">{group.icon}</span>{group.title}</h3>
            <ul>
              {group.items.map(([name, description]) => (
                <li key={name}><span>{name}</span><small>{description}</small></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="skills-footer"><span>A toolkit for bringing ideas to life.</span><span>Explore my work <span aria-hidden="true">↘</span></span></div>
    </section>
  );
}
