function Contact() {
  return (
    <section id="contact" className="contact-shell">
      <div className="contact-copy">
        <p className="section-kicker">06 / Get in touch</p>
        <h2>Let’s build<br />something useful.</h2>
        <p>Have a project in mind, a question, or just want to connect? I’d love to hear from you.</p>
        <a className="button button-primary" href="mailto:aliaparveen8860@gmail.com">Contact me <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-list">
        <a className="contact-row" href="mailto:aliaparveen8860@gmail.com">
          <span className="contact-icon" aria-hidden="true">✉</span><span><small>Email</small>aliaparveen8860@gmail.com</span><span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-row" href="tel:+918810578805">
          <span className="contact-icon" aria-hidden="true">⌕</span><span><small>Phone</small>+91 8810578805</span><span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-row" href="https://github.com/aliyapraveen123" target="_blank" rel="noreferrer">
          <span className="contact-icon" aria-hidden="true">⌘</span><span><small>GitHub</small>github.com/aliyapraveen123</span><span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-row" href="https://www.linkedin.com/in/aliya-parveen-b5b6a5338/" target="_blank" rel="noreferrer">
          <span className="contact-icon" aria-hidden="true">in</span><span><small>LinkedIn</small>linkedin.com/in/aliya-parveen</span><span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        </div>
    </section>
  );
}

export default Contact;
