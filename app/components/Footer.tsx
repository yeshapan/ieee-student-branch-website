export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="page-container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <h3>IEEE Student Branch</h3>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              GSFC University, Vadodara<br />
              Gujarat, India — 391750<br /><br />
              <a href="mailto:ieee.student.branch@gsfcuniversity.ac.in">
                ieee.student.branch@gsfcuniversity.ac.in
              </a>
              <br />
            </p>
            <div style={{ marginTop: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gsfcu-logo.webp"
                alt="GSFC University Logo"
                style={{ height: "45px", width: "auto", background: "white", padding: "4px 8px", borderRadius: "4px" }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About IEEE</a></li>
              <li><a href="#university">GSFC University</a></li>
              <li><a href="#branch">Our Branch</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* IEEE Resources */}
          <div>
            <h3>IEEE Resources</h3>
            <ul>
              <li><a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org ↗</a></li>
              <li><a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Xplore ↗</a></li>
              <li><a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Spectrum ↗</a></li>
              <li><a href="https://brand-experience.ieee.org" target="_blank" rel="noopener noreferrer">Brand Experience ↗</a></li>
              <li><a href="https://www.ieee.org/membership/join/" target="_blank" rel="noopener noreferrer">Join IEEE ↗</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <a href="#">LinkedIn ↗</a>
              </li>
              <li>
                <a href="#">Instagram ↗</a>
              </li>
              <li>
                <a href="#">X (Twitter) ↗</a>
              </li>
            </ul>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", marginTop: "0.75rem" }}>
              Student Branch ID: SBXXXXX
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {year} IEEE Student Branch — GSFC University. All rights reserved.</span>
          <span>The IEEE name and logo are registered trademarks of <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE</a>.</span>
        </div>
      </div>
    </footer>
  );
}
