function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow">Developer / Problem solver</p>
        <h1>Aliya Parveen</h1>
        <p className="hero-role">Full-stack Developer</p>

        <p className="hero-intro">
          Aspiring MERN Stack Developer with hands-on experience in building web applications using MongoDB, Express.js, React.js, and Node.js. 
          Familiar with the fundamentals of Android app development using React Native and Expo. 
          Passionate about problem-solving, continuously learning new technologies, and improving development skills. 
          Eager to contribute to meaningful projects, apply my technical knowledge to real-world challenges, and deliver valuable solutions that support the company's growth and success.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
          <a className="button button-secondary" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://github.com/aliyapraveen123" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/aliya-parveen-b5b6a5338/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div
        className="hero-art"
        aria-label="Aliya Parveen portrait"
        role="img"
      >
        <img
          className="hero-photo"
          src="/images/profile-photo.jpg"
          alt="Aliya Parveen, profile portrait"
          draggable={false}
        />
        
      </div>
    </section>
  );
}

export default Hero;
