export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('/Hero-abstract.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="hero-overlay">
        <div className="page-container">
          <h1>IEEE Student Branch — GSFC University</h1>
          <p className="subtitle">
            Advancing Technology for the Benefit of Humanity
          </p>
          {/* <span className="inau-badge">
            IEEE Day Celebration — October 6, 2026
          </span> */}

          {/* Stats */}
          <div className="stats-row" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
            <div className="stat-item">
              <span className="val">400K+</span>
              <span className="lbl">IEEE Members Worldwide</span>
            </div>
            <div className="stat-item">
              <span className="val">3,000+</span>
              <span className="lbl">Student Branches</span>
            </div>
            <div className="stat-item">
              <span className="val">160+</span>
              <span className="lbl">Countries</span>
            </div>
            <div className="stat-item">
              <span className="val">2026</span>
              <span className="lbl">GSFC SB Founded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

