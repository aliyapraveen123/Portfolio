const certificates = Array.from({ length: 6 }, (_, index) => index + 1);
const mongoBadgeUrl = "https://www.credly.com/badges/83f77cd0-7c64-4f5b-813f-d16a8da2c244/public_url";
const mongoAggregationUrl = "https://www.credly.com/badges/fd77b597-f84a-4605-8e40-9d6d47f2de77/public_url";
const dockerCertificateUrl = "https://coursera.org/share/9e33b1817bf6edd5a5767716aacabd36";
const generativeAiUrl = "https://www.udacity.com/certificate/e/ddc085a2-5957-11f0-99a1-3b3b3e59a99d";
const gitCertificateUrl = "https://coursera.org/share/b8f53d609aec111fb5b402dbe86cbea0";
const versionControlUrl = "https://www.coursera.org/account/accomplishments/verify/AIUW5NTBPQ9K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course";

function Certifications() {
  return (
    <section id="certifications" className="certifications-shell">
      <header className="section-heading">
        <div>
          <p className="section-kicker">05 / Continue learning</p>
          <h2>Certifications</h2>
          <p className="section-description">
            A space for my learning journey. 
          </p>
        </div>
      </header>

      <div className="certification-grid">
        {certificates.map((number) => (
          <article className="certificate-card" key={number}>
            {number <= 6 ? (
              <a className={`certificate-image certificate-image-badge${number >= 4 ? " certificate-image-landscape" : ""}`} href={number === 1 ? mongoBadgeUrl : number === 2 ? mongoAggregationUrl : number === 3 ? dockerCertificateUrl : number === 4 ? generativeAiUrl : number === 5 ? gitCertificateUrl : versionControlUrl} target="_blank" rel="noreferrer" aria-label={`View ${number === 1 ? "MongoDB Query Optimization Techniques" : number === 2 ? "MongoDB Aggregation Fundamentals" : number === 3 ? "Introduction to Docker" : number === 4 ? "Introducing Generative AI with AWS" : number === 5 ? "Introduction to Git and GitHub" : "Meta Version Control"} certificate`}>
                <img
                  src={number === 1 ? "/images/mongodb-query-optimization.png" : number === 2 ? "/images/mongodb-aggregation.png" : number === 3 ? "/images/introduction-to-docker-certificate.jpeg" : number === 4 ? "/images/introducing-generative-ai-aws.png" : number === 5 ? "/images/introduction-to-git-and-github.png" : "/images/meta-version-control.png"}
                  alt={number === 1 ? "MongoDB Query Optimization Techniques certificate" : number === 2 ? "MongoDB Aggregation Fundamentals certificate" : number === 3 ? "Coursera Introduction to Docker certificate" : number === 4 ? "Udacity Introducing Generative AI with AWS certificate" : number === 5 ? "Google Introduction to Git and GitHub certificate" : "Meta Version Control certificate"}
                />
              </a>
            ) : (
              <div className="certificate-image" aria-label="Certificate image placeholder">
                <span className="certificate-image-icon" aria-hidden="true">↗</span>
                <span>Add certificate image</span>
                <small>Replace this placeholder</small>
              </div>
            )}
            <p className="certificate-label">{number <= 2 ? "MongoDB / 2026" : number === 3 ? "Google Cloud / Coursera" : number === 4 ? "Udacity / 2025" : number === 5 ? "Google / Coursera · 2025" : number === 6 ? "Meta / Coursera · 2025" : `Certificate slot ${String(number).padStart(2, "0")}`}</p>
            <h3>{number === 1 ? "MongoDB Query Optimization Techniques" : number === 2 ? "MongoDB Aggregation Fundamentals" : number === 3 ? "Introduction to Docker" : number === 4 ? "Introducing Generative AI with AWS" : number === 5 ? "Introduction to Git and GitHub" : number === 6 ? "Version Control" : "[Certificate title]"}</h3>
            <p className="certificate-issuer">{number === 1 ? "Issued by MongoDB · September 30, 2026" : number === 2 ? "Issued by MongoDB · September 17, 2026" : number === 3 ? "Completed July 7, 2026 · Google Cloud" : number === 4 ? "Awarded by Udacity · August 5, 2025" : number === 5 ? "Completed February 6, 2025 · Google" : number === 6 ? "Completed January 7, 2025 · Meta" : "Issuer: [Organization name]"}</p>
            {number <= 6 ? (
              <a className="certificate-link-placeholder" href={number === 1 ? mongoBadgeUrl : number === 2 ? mongoAggregationUrl : number === 3 ? dockerCertificateUrl : number === 4 ? generativeAiUrl : number === 5 ? gitCertificateUrl : versionControlUrl} target="_blank" rel="noreferrer">View credential <span aria-hidden="true">↗</span></a>
            ) : (
              <span className="certificate-link-placeholder">Add certificate URL <span aria-hidden="true">↗</span></span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
