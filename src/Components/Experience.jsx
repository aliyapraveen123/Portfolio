function Experience() {
  return (
    <section id="experience" className="experience-showcase">
      <header className="experience-heading">
        <p className="experience-eyebrow">04 / The work &amp; the people</p>
        <h2>Work Experience</h2>
        <p className="experience-intro">
          Building thoughtful interfaces. Supporting healthier communities. Learning through real responsibility.
        </p>
      </header>

      <article className="experience-project">
        <div className="experience-project-meta">
          <span className="experience-index">01</span>
          <strong>Frontend Developer</strong>
          <span>Product development<br />Web → Mobile</span>
        </div>
        <div className="experience-project-main">
          <div className="experience-project-heading">
            <div>
              <p className="experience-eyebrow">Setu Mesh | Remote Internship</p>
              <h3>Scan &amp; Dine</h3>
            </div>
            <p className="experience-dates">15 Jan 2026 — 15 May 2026</p>
          </div>
          <div className="experience-project-copy">
            <p>Developed a responsive QR-based Scan &amp; Dine platform to automate customer ordering, digital payments, and bill management.</p>
            <p>Used AI tools to quickly migrate and optimize the existing web codebase into a functional mobile app.</p>
          </div>
          <div className="experience-gallery experience-gallery-three">
            <figure className="experience-image-placeholder experience-image-large">
              <span className="placeholder-label">Scan &amp; Dine</span>
              <img className="experience-image-photo" src="/images/experience-image-01.jpeg" alt="Scan & Dine project overview" />
              <figcaption>01 / Product overview</figcaption>
            </figure>
            <figure className="experience-image-placeholder experience-image-portrait">
              <span className="placeholder-label">Scan &amp; Dine</span>
              <img className="experience-image-photo" src="/images/experience-image-02.jpeg" alt="Scan & Dine web experience" />
              <figcaption>02 / Web experience</figcaption>
            </figure>
            <figure className="experience-image-placeholder experience-image-mobile">
              <span className="placeholder-label">Scan &amp; Dine</span>
              <img className="experience-image-photo" src="/images/experience-image-03.jpeg" alt="Scan & Dine mobile experience" />
              <figcaption>03 / Mobile experience</figcaption>
            </figure>
          </div>
          <div className="experience-project-notes">
            <div>
              <p className="experience-eyebrow">Built along the way</p>
              <p>TypeScript / React Native<br />Expo / Git / GitHub</p>
            </div>
            <div>
              <strong>From browser to mobile</strong>
              <p>Strengthened practical TypeScript, React Native, and Expo knowledge while adapting the frontend across platforms.</p>
            </div>
            <div>
              <strong>A stronger collaboration workflow</strong>
              <p>Improved Git and GitHub practice through version control, branching, commits, and collaboration.</p>
            </div>
          </div>
        </div>
      </article>

      <article className="experience-community">
        <div className="experience-community-meta">
          <span className="experience-index">02</span>
          <p>Aug 2025 — Mar 2026</p>
          <p>NavGurukul | Himachal Pradesh</p>
          <span>Campus well-being</span>
        </div>
        <div className="experience-community-copy">
          <p className="experience-eyebrow">Care beyond the screen</p>
          <h3>Well-being<br />Facilitator</h3>
          <p>Managed campus health operations, student first aid, and emergency medical care.</p>
          <p>Directed daily fitness routines and monthly sports events, driving student well-being, engagement, and crisis management.</p>
          <div className="experience-focus">Student care / Fitness / Crisis management</div>
        </div>
        <figure className="experience-image-placeholder experience-community-image">
          <span className="placeholder-label">Campus well-being</span>
          <span className="placeholder-center"><i>+</i><strong>Image 04</strong><small>Replace with your image</small></span>
          <span className="placeholder-caption">Image placeholder</span>
          <figcaption>04 / Well-being at NavGurukul</figcaption>
        </figure>
      </article>

      <footer className="experience-footer">
        <span>Different settings. The same focus on people.</span>
        <span>Experience / Portfolio</span>
      </footer>
    </section>
  );
}

export default Experience;
