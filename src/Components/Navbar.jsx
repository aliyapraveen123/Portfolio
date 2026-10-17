function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Aliya Parveen, home">
        {/* <span className="brand-mark" aria-hidden="true">A</span> */}
        <span className="brand-name">Aliya.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
}

export default Navbar;
