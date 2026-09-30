import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import TeamCard from "./components/TeamCard";
import Footer from "./components/Footer";
import teamData from "../public/team.json";

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Hero />

        {/* About IEEE */}
        <AboutSection
          id="about"
          heading="About IEEE"
          subheading="Institute of Electrical and Electronics Engineers"
          paragraphs={[
            "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. With more than 400,000 members across 160 countries, IEEE serves professionals in all areas of electrical, electronic, and computer engineering.",
            "IEEE fosters technological innovation and excellence through its highly cited publications, conferences, technology standards, and professional and educational activities.",
            "IEEE Student Branches provide students with access to technical resources, global networks, and professional development opportunities that complement their academic experience.",
          ]}
        >
          <div style={{ marginTop: "0.75rem" }}>
            {["400,000+ Members", "160+ Countries", "3,000+ Student Branches", "1,800+ Standards"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </AboutSection>

        {/* GSFC University */}
        <section id="university" className="section fade-in-section">
          <div className="page-container">
            <h2>GSFC University, Vadodara</h2>
            <p style={{ color: "#00629B", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.75rem" }}>
              Fertilizer Nagar, Vadodara, Gujarat — 391750
            </p>
            <p>
              GSFC University is a private university established by Gujarat State Fertilizers &amp; Chemicals Ltd. (GSFC), one of India's leading public sector enterprises. The university provides quality education in engineering, science, management, and humanities.
            </p>
            <p>
              With state-of-the-art infrastructure and an industry-integrated curriculum, GSFC University prepares students for the challenges of the modern world and fosters a culture of research, innovation, and entrepreneurship.
            </p>

            <table className="info-table" style={{ marginTop: "1rem", maxWidth: "480px" }}>
              <tbody>
                <tr><td>Established</td><td>2013</td></tr>
                <tr><td>Location</td><td>Vadodara, Gujarat</td></tr>
                <tr><td>Programmes</td><td>UG · PG · PhD</td></tr>
                <tr><td>Recognition</td><td>UGC Recognized</td></tr>
                <tr><td>Website</td><td><a href="https://www.gsfcuniversity.ac.in" target="_blank" rel="noopener noreferrer">gsfcuniversity.ac.in ↗</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* About the Branch */}
        <AboutSection
          id="branch"
          heading="IEEE Student Branch — GSFC University"
          subheading="Founded 2026"
          paragraphs={[
            "The IEEE Student Branch at GSFC University is the official IEEE-affiliated student chapter on campus. Established in 2026, our branch is committed to cultivating a community of technically skilled, professionally aware, and socially responsible engineers.",
            "We organize technical workshops, hands-on lab sessions, paper presentation competitions, industry expert talks, and hackathons throughout the academic year. Our goal is to bridge the gap between classroom learning and real-world engineering practice.",
            "As a member, you gain access to IEEE's global network, IEEE Xplore publications, exclusive scholarships, leadership roles, and a platform to publish and present your research.",
          ]}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "0.75rem" }}>
            <div style={{ border: "1px solid #ddd", padding: "0.75rem", background: "#f5f8fc" }}>
              <strong style={{ color: "#00629B", fontSize: "0.88rem" }}>Our Mission</strong>
              <p style={{ fontSize: "0.8rem", marginTop: "0.35rem", marginBottom: 0 }}>
                To empower students with technical knowledge, professional skills, and global connections through IEEE's programs and community.
              </p>
            </div>
            <div style={{ border: "1px solid #ddd", padding: "0.75rem", background: "#f5f8fc" }}>
              <strong style={{ color: "#00629B", fontSize: "0.88rem" }}>Our Vision</strong>
              <p style={{ fontSize: "0.8rem", marginTop: "0.35rem", marginBottom: 0 }}>
                To be the most active and impactful IEEE Student Branch in the Gujarat Section, fostering innovation at GSFC University.
              </p>
            </div>
          </div>
        </AboutSection>

        {/* Team */}
        <section id="team" className="section fade-in-section">
          <div className="page-container">
            <h2>Our Team</h2>
            <p>
              Meet the dedicated students and faculty behind the IEEE Student Branch at GSFC University.
            </p>
            <div className="team-grid">
              {teamData.map((m) => (
                <TeamCard key={m.name} {...m} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Join IEEE */}
        <section className="section fade-in-section">
          <div className="page-container">
            <h2>Why Join IEEE?</h2>
            <p style={{ marginBottom: "0.75rem" }}>
              IEEE membership opens doors to professional growth, exclusive resources, and a global network of innovators.
            </p>
            <div className="benefits-grid">
              {[
                { title: "IEEE Xplore Access", desc: "Access millions of research papers, conference proceedings, and technical standards." },
                { title: "Global Network", desc: "Connect with 400,000+ professionals and researchers across 160 countries." },
                { title: "Awards & Scholarships", desc: "Compete for prestigious IEEE scholarships and awards recognizing outstanding student achievement." },
                { title: "Career Development", desc: "Access IEEE's job board, resume workshops, and mentoring programs." },
                { title: "Technical Events", desc: "Participate in hackathons, paper presentations, and technical workshops at local and international levels." },
                { title: "Leadership Experience", desc: "Develop leadership skills by taking executive roles in your Student Branch." },
              ].map((b) => (
                <div key={b.title} className="benefit-item">
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.25rem" }}>
              <a
                href="https://www.ieee.org/membership/join/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Become an IEEE Member
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

