export default function Navbar() {
  return (
    <>
      {/* Blue top bar */}
      <div className="top-bar">
        IEEE Student Branch — GSFC University &nbsp;|&nbsp; Vadodara, Gujarat
      </div>

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Brand */}
          <a href="/" className="nav-brand" aria-label="IEEE Student Branch GSFC University">
            <span className="nav-brand-top">IEEE Student Branch</span>
            <span className="nav-brand-sub">GSFC University, Vadodara</span>
          </a>

          {/* IEEE Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ieee-logo.png"
              alt="IEEE Logo"
              style={{ height: "36px", width: "auto" }}
            />
          </div>

          {/* Nav links */}
          <ul className="nav-links" role="list">
            <li><a href="#about">About IEEE</a></li>
            <li><a href="#university">University</a></li>
            <li><a href="#branch">Branch</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
